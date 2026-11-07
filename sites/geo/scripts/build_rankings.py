#!/usr/bin/env python3
"""Rebuild RANK_DATA in public/data/rankings.js from primary sources.

Sources (see SOURCES below): World Bank WDI API, UNDP HDR 2025 CSV, World Happiness Report 2025 xlsx.
Requires: pip install openpyxl   |   Usage: python3 build_rankings.py [--report]
"""
import csv, io, json, re, sys, urllib.request, zipfile
from pathlib import Path
import openpyxl

ROOT = Path(__file__).resolve().parent.parent
RK = ROOT / 'public/data/rankings.js'
YEAR_WB = '2024'      # GDP, GDP per capita, life expectancy
YEAR_PM = '2023'      # PM2.5 (latest year published in WDI)
UA = {'User-Agent': 'Mozilla/5.0'}

def get(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=120).read()

def wb(ind):
    d = json.loads(get(f'https://api.worldbank.org/v2/country/all/indicator/{ind}?format=json&mrv=6&per_page=20000'))[1]
    out = {}
    for x in d:
        if x['value'] is not None and re.fullmatch(r'[A-Z]{3}', x['countryiso3code'] or ''):
            out.setdefault(x['countryiso3code'], {})[x['date']] = x['value']
    return out, {x['countryiso3code']: x['country']['value'] for x in d if x['countryiso3code']}

gdp, names = wb('NY.GDP.MKTP.CD')
gdppc, _ = wb('NY.GDP.PCAP.CD')
life, _ = wb('SP.DYN.LE00.IN')
pm, _ = wb('EN.ATM.PM25.MC.M3')

hdi = {}
for r in csv.DictReader(io.StringIO(get('https://hdr.undp.org/sites/default/files/2025_HDR/HDR25_Composite_indices_complete_time_series.csv').decode('latin-1'))):
    if r['hdi_2023']:
        hdi[r['iso3']] = float(r['hdi_2023']); names.setdefault(r['iso3'], r['country'])

whr_by_name = {}
wbk = openpyxl.load_workbook(io.BytesIO(get('https://files.worldhappiness.report/WHR25_Data_Figure_2.1v3.xlsx')), read_only=True)
for r in wbk.worksheets[0].iter_rows(min_row=2, values_only=True):
    if r[0] == 2024.0 and r[2]:
        whr_by_name[r[2]] = r[3]

ALIAS = json.loads((ROOT / 'scripts/country_aliases.json').read_text(encoding='utf-8'))  # dataset name -> ISO3
norm = lambda s: re.sub(r'[^a-z]', '', s.lower())
name2iso = {norm(v): k for k, v in names.items()}
def iso_of(n):
    return ALIAS.get(n) or name2iso.get(norm(n))
whr_iso = {}
for n, v in whr_by_name.items():
    i = ALIAS.get(n) or name2iso.get(norm(n))
    whr_iso[i or n] = v

src = RK.read_text(encoding='utf-8')
head, body = src.split('export const RANK_DATA = {')
keys = re.findall(r'^\s+"([^"]+)":', body, re.M)
rows, miss = [], []
used_whr = set()
for k in keys:
    i = iso_of(k)
    h = whr_iso.get(i) if i else whr_by_name.get(k)
    if h is not None: used_whr.add(i or k)
    g = lambda d: d.get(i, {}).get(YEAR_WB) if i else None
    row = [
        h,
        round(g(gdppc)) if g(gdppc) is not None else None,
        round(pm.get(i, {}).get(YEAR_PM), 1) if i and pm.get(i, {}).get(YEAR_PM) is not None else None,
        round(hdi[i], 3) if i in hdi else None,
        round(g(life), 1) if g(life) is not None else None,
        round(g(gdp) / 1e9, 1) if g(gdp) is not None else None,
    ]
    if i is None: miss.append(k)
    rows.append((k, row))
if '--report' in sys.argv:
    print('no ISO match:', miss)
    print('WHR unused:', [n for n in whr_iso if n not in used_whr])
    sys.exit()
js = 'export const RANK_DATA = {\n' + ',\n'.join(f'  {json.dumps(k, ensure_ascii=False)}: {json.dumps(r)}' for k, r in rows) + '\n};\n'
RK.write_text(head + js, encoding='utf-8')
print('written', len(rows))
