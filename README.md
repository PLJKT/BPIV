# BPIV Group Information System

Internal information system for the BPIV Group (PT Batavia Prosperindo Investama) — an investment holding company based in Jakarta, Indonesia.

## Features

- **Dashboard**: KPIs, group revenue trend (2013–2025), ownership & fund-flow structure, intercompany receivables
- **9 company detail pages**: BPIV, Prosindo, Wintek, MVP, BVI (B-Startup), Rajapremi, TMN, Primtek, Mcash
- **Trilingual UI**: English (default), 中文 (Chinese), Bahasa Indonesia — every visible label switches completely
- **Charts**: ECharts revenue history per company, intercompany receivables bar chart
- **Static site**: no build step, no backend — plain HTML/CSS/JS, deployable to GitHub Pages

## Data

- As of 31 October 2025 (intercompany & operating data)
- Annual balance sheet as of 31 December 2025
- Source: internal ledgers (`Financial Report 2013–2025`) and 2025 annual reports

## Local run

No build required. Serve the folder with any static server:

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Structure

```
index.html
assets/
  css/style.css
  js/data.js      # all financial data
  js/i18n.js      # EN / ZH / ID dictionaries
  js/app.js       # router, rendering, charts
```

## Ownership chain

```
YSX (50%) ─┐
           ├─► Prosindo Manajemen ─99.9%─► Wintek (Rajapay) ─99%─► BPIV ─► portfolio
PSI (BVI) ─┘
MTPL ── loan (Rp14.76bn + interest) ──► BPIV
```

MTPL has no equity relationship with YSX / PSI / Prosindo / Wintek. Offshore shell tools (Wellgrow, NST, EVF) have been deactivated and excluded.

> Internal management information. Not audited. Not for external distribution.
