import re

f = r"H:\Box Backup\Active Projects\BPIV\information-system\assets\js\data.js"
with open(f, 'r', encoding='utf-8') as fh:
    text = fh.read()

# BPIV (Dec 2025 PDF)
bpiv_bs = """      bsDetail: [
        { section: "assets" },
        { label: "Cash and cash equivalents", amount: 4502520 },
        { label: "Related party receivables", amount: 3686642480 },
        { label: "Investment in subsidiaries", amount: 4849900000 },
        { label: "Fixed assets, net", amount: 3750000 },
        { label: "TOTAL ASSETS", amount: 8544795000, total: true },
        { section: "liabilities" },
        { label: "Interest payable", amount: 3835310433 },
        { label: "Related party payables", amount: 15748677392 },
        { label: "TOTAL LIABILITIES", amount: 19583987825, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 100000000 },
        { label: "Accumulated deficit", amount: -11139192825 },
        { label: "TOTAL EQUITY", amount: -11039192825, total: true }
      ],
      isDetail: [
        { section: "revenue" },
        { label: "Revenue", amount: 70000000 },
        { section: "expenses" },
        { label: "Salaries and benefits", amount: 117872910 },
        { label: "General and administrative", amount: 7338232 },
        { label: "Operating loss", amount: -55211142, subtotal: true },
        { section: "other" },
        { label: "Interest income", amount: 50515 },
        { label: "Other income", amount: 4700000 },
        { label: "Interest expense", amount: -313710260 },
        { label: "Receivable write-off", amount: -3376656774 },
        { label: "NET LOSS", amount: -3740827661, total: true }
      ],"""

old = """      bs: {
        assets: 8544795000,
        liabilities: 19583987825,
        equity: -11039192825,
        netIncome: -3740827661
      },"""
new = old + "\n" + bpiv_bs
text = text.replace(old, new)

# Prosindo
prosho_bs = """      bsDetail: [
        { section: "assets" },
        { label: "Cash and cash equivalents", amount: 14397216 },
        { label: "Land and building", amount: 537795000 },
        { label: "Related party receivables", amount: 1500000000 },
        { label: "Other receivables", amount: 424195451 },
        { label: "Investment in subsidiary (Wintek)", amount: 99900000 },
        { label: "TOTAL ASSETS", amount: 2576287667, total: true },
        { section: "liabilities" },
        { label: "Other payables", amount: 424195451 },
        { label: "TOTAL LIABILITIES", amount: 424195451, total: true },
        { section: "equity" },
        { label: "Share capital (2,500 shares @ Rp1m)", amount: 2500000000 },
        { label: "Retained earnings / (loss)", amount: -347907784 },
        { label: "TOTAL EQUITY", amount: 2152092216, total: true }
      ],
      isDetail: null,"""

old = """      bs: {
        assets: 2576287667,
        liabilities: 424195451,
        equity: 2152092216,
        netIncome: null
      },"""
new = old + "\n" + prosho_bs
text = text.replace(old, new)

# Wintek
wintek_bs = """      bsDetail: [
        { section: "assets" },
        { label: "Cash and cash equivalents", amount: 12694668 },
        { label: "Related party receivables (principal)", amount: 995747391 },
        { label: "Interest receivable from BPIV", amount: 152107107 },
        { label: "Investment in subsidiary (BPIV)", amount: 99000000 },
        { label: "TOTAL ASSETS", amount: 1259549167, total: true },
        { section: "liabilities" },
        { label: "Related party payables", amount: 559623411 },
        { label: "TOTAL LIABILITIES", amount: 559623411, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 100000000 },
        { label: "Retained earnings", amount: 599925756 },
        { label: "TOTAL EQUITY", amount: 699925756, total: true }
      ],
      isDetail: null,"""

old = """      bs: {
        assets: 1259549167,
        liabilities: 559623411,
        equity: 699925756,
        netIncome: -67473740
      },"""
new = old + "\n" + wintek_bs
text = text.replace(old, new)

# Now add bsDetail to operating companies that don't have bs block
# MVP
mvp_block = """      bsDetail: [
        { section: "assets" },
        { label: "Investment in Rajapremi", amount: 1999900000 },
        { label: "Receivables from Rajapremi", amount: 11070348 },
        { label: "TOTAL ASSETS", amount: 2010970348, total: true },
        { section: "liabilities" },
        { label: "TOTAL LIABILITIES", amount: 0, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 3126700000 },
        { label: "Additional paid-in capital", amount: 3070593000 },
        { label: "Accumulated deficit", amount: -4186322652 },
        { label: "TOTAL EQUITY", amount: 2010970348, total: true }
      ],
      isDetail: [
        { section: "revenue" },
        { label: "Management fee (cumulative)", amount: 160000000 },
        { label: "Interest income (cumulative)", amount: 142385858 },
        { label: "Miscellaneous income (cumulative)", amount: 39500000 },
        { section: "expenses" },
        { label: "Salaries (cumulative)", amount: 2481369860 },
        { label: "Marketing (cumulative)", amount: 411031995 },
        { label: "Adm & general (cumulative)", amount: 1241174351 },
        { label: "Management fee to BPIV (cumulative)", amount: 153500000 },
        { label: "Building rent (cumulative)", amount: 49500000 },
        { label: "NET DEFICIT (cumulative)", amount: -4186322652, total: true }
      ],"""

# Insert after mvp shareCapital line
old = """      shareCapital: 3126700000,
      investsIn: ["""
new = """      shareCapital: 3126700000,
""" + mvp_block + """
      investsIn: ["""
text = text.replace(old, new, 1)

# BVI
bvi_block = """      bsDetail: [
        { section: "assets" },
        { label: "Cash and cash equivalents", amount: 3132084 },
        { label: "Receivables", amount: 793400000 },
        { label: "Office equipment, net", amount: 16726000 },
        { label: "TOTAL ASSETS", amount: 813258084, total: true },
        { section: "liabilities" },
        { label: "Due to BPIV (principal + interest)", amount: 2079749948 },
        { label: "TOTAL LIABILITIES", amount: 2079749948, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 100000000 },
        { label: "Accumulated deficit", amount: -1366491864 },
        { label: "TOTAL EQUITY", amount: -1266491864, total: true }
      ],
      isDetail: [
        { section: "revenue" },
        { label: "Management fee (YTD Oct-25)", amount: 114800000 },
        { label: "Interest income (YTD Oct-25)", amount: 38952 },
        { section: "expenses" },
        { label: "Salaries (YTD Oct-25)", amount: 28643389 },
        { label: "Building management fee (YTD Oct-25)", amount: 78111000 },
        { label: "Adm & general (YTD Oct-25)", amount: 16749983 },
        { label: "NET INCOME (YTD Oct-25)", amount: -870420, total: true }
      ],"""

old = """      shareCapital: 100000000,
      receivables: [
        { co: "rajapremi", principal: 764000000, interest: 0, date: "2019" },"""
new = """      shareCapital: 100000000,
""" + bvi_block + """
      receivables: [
        { co: "rajapremi", principal: 764000000, interest: 0, date: "2019" },"""
text = text.replace(old, new, 1)

# Rajapremi
raj_block = """      bsDetail: [
        { section: "assets" },
        { label: "Cash and cash equivalents", amount: 10803015 },
        { label: "Receivables from insurance", amount: 8655051 },
        { label: "Office equipment, net", amount: 22441900 },
        { label: "TOTAL ASSETS", amount: 41899966, total: true },
        { section: "liabilities" },
        { label: "Due to BPIV", amount: 1833706306 },
        { label: "Due to BVI (rental)", amount: 754668952 },
        { label: "Due to BVI (management fee)", amount: 764000000 },
        { label: "Due to MVP", amount: 11070349 },
        { label: "TOTAL LIABILITIES", amount: 3363445607, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 2000000000 },
        { label: "Accumulated deficit", amount: -5321545641 },
        { label: "TOTAL EQUITY", amount: -3321545641, total: true }
      ],
      isDetail: [
        { section: "revenue" },
        { label: "Commission (YTD Oct-25)", amount: 23051991 },
        { label: "Interest income (YTD Oct-25)", amount: 11870 },
        { section: "expenses" },
        { label: "Salaries (YTD Oct-25)", amount: 49056760 },
        { label: "Email/web maintenance (YTD Oct-25)", amount: 24312495 },
        { label: "Management fee to BVI (YTD Oct-25)", amount: 70000000 },
        { label: "Adm & general (YTD Oct-25)", amount: 16775354 },
        { label: "NET LOSS (YTD Oct-25)", amount: -137101748, total: true }
      ],"""

old = """      shareCapital: 2000000000,
      payables: [
        { co: "bpiv", principal: 1833706306, interest: 0, date: "2017" },"""
new = """      shareCapital: 2000000000,
""" + raj_block + """
      payables: [
        { co: "bpiv", principal: 1833706306, interest: 0, date: "2017" },"""
text = text.replace(old, new, 1)

# TMN
tmn_block = """      bsDetail: [
        { section: "assets" },
        { label: "Cash and cash equivalents", amount: 41461 },
        { label: "Intangible assets", amount: 360000000 },
        { label: "Office equipment, net", amount: 57799810 },
        { label: "Receivables from shareholder (TSN)", amount: 190000000 },
        { label: "TOTAL ASSETS", amount: 607841271, total: true },
        { section: "liabilities" },
        { label: "Due to BPIV (principal + interest)", amount: 1221281055 },
        { label: "TOTAL LIABILITIES", amount: 1221281055, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 1500000000 },
        { label: "Accumulated deficit", amount: -2113439784 },
        { label: "TOTAL EQUITY", amount: -613439784, total: true }
      ],
      isDetail: [
        { section: "note" },
        { label: "No operating revenue since 2016. Dormant.", amount: 0 }
      ],"""

old = """      shareCapital: 1500000000,
      receivables: [
        { co: "tsn", principal: 190000000, interest: 30822222, date: "2017" },"""
new = """      shareCapital: 1500000000,
""" + tmn_block + """
      receivables: [
        { co: "tsn", principal: 190000000, interest: 30822222, date: "2017" },"""
text = text.replace(old, new, 1)

# Primtek
prim_block = """      bsDetail: [
        { section: "assets" },
        { label: "Office equipment, net", amount: 393558257 },
        { label: "Receivables from shareholder", amount: 865 },
        { label: "TOTAL ASSETS", amount: 393559122, total: true },
        { section: "liabilities" },
        { label: "Due to BPIV", amount: 342442014 },
        { label: "TOTAL LIABILITIES", amount: 342442014, total: true },
        { section: "equity" },
        { label: "Share capital (Seri A)", amount: 900000000 },
        { label: "Share capital (Seri B)", amount: 865 },
        { label: "Accumulated deficit", amount: -848883757 },
        { label: "TOTAL EQUITY", amount: 51117108, total: true }
      ],
      isDetail: [
        { section: "note" },
        { label: "No operating revenue since 2022. Dormant.", amount: 0 }
      ],"""

old = """      shareCapital: 900000000,
      payables: [
        { co: "bpiv", principal: 342442014, interest: 0, date: "2017" },"""
new = """      shareCapital: 900000000,
""" + prim_block + """
      payables: [
        { co: "bpiv", principal: 342442014, interest: 0, date: "2017" },"""
text = text.replace(old, new, 1)

# Mcash
mcash_block = """      bsDetail: [
        { section: "assets" },
        { label: "Cash and cash equivalents", amount: 157103087 },
        { label: "Receivables from MainDulu users", amount: 17813408 },
        { label: "Office equipment, net", amount: 73771424 },
        { label: "TOTAL ASSETS", amount: 248687919, total: true },
        { section: "liabilities" },
        { label: "Due to BPIV (CB)", amount: 1463011566 },
        { label: "TOTAL LIABILITIES", amount: 1463011566, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 903656630 },
        { label: "Accumulated deficit", amount: -2117980277 },
        { label: "TOTAL EQUITY", amount: -1214323647, total: true }
      ],
      isDetail: [
        { section: "note" },
        { label: "Dormant since 2024. CB investment by BPIV.", amount: 0 }
      ],"""

old = """      shareCapital: 903656630,
      payables: [
        { co: "bpiv", principal: 1463011566, interest: 0, usd: 61818, date: "2017" },"""
new = """      shareCapital: 903656630,
""" + mcash_block + """
      payables: [
        { co: "bpiv", principal: 1463011566, interest: 0, usd: 61818, date: "2017" },"""
text = text.replace(old, new, 1)

with open(f, 'w', encoding='utf-8') as fh:
    fh.write(text)
print("Done")
