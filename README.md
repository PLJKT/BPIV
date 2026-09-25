# BPIV Group Information System

Internal information system for the BPIV Group (PT Batavia Prosperindo Investama) — an investment holding company based in Jakarta, Indonesia. Live at **https://pljkt.github.io/BPIV/**

A **purely static** web app (HTML/CSS/JS + ECharts CDN). No backend, no build step, no database server — user data and language preference live in the browser's `localStorage`. This makes it deployable as-is to GitHub Pages and trivially updatable by editing the data file.

---

## 1. Features

- **Login & roles** — the app opens with a login screen; default account `admin` / `admin@123`. Admins can create users (`admin` / `viewer`), change passwords and delete non-admin users. The admin-only pages (User Management, BPIV Illustration) are hidden for viewers.
- **Dashboard** — group KPIs (net equity, total lender debt, equity portfolio, working capital, write-offs), group revenue chart, ownership & fund-flow structure (SVG), risk assessment panel (solvency metrics, debt principal-vs-interest split, drawdown schedules, potential write-offs), intercompany receivables, portfolio status cards.
- **9 company pages** — BPIV, Prosindo, Wintek, MVP, BVI (B-Startup), Rajapremi, TMN, Primtek, Mcash. Each page shows: description, financial position, ownership, intercompany balances (principal + accrued interest + year + drawdown detail), full balance sheet, income statement, revenue history chart, expense breakdown (while operating), and — for Rajapremi — a deep business analysis.
- **BPIV Illustration (admin only)** — funding-gap waterfall, MTPL interest-waiver assumption, recapitalisation path via Rajapremi, PE exit scenarios.
- **Trilingual UI** — English (default), 中文, Bahasa Indonesia. **Every visible label strictly follows the selected language** — no mixing.
- **Charts** — ECharts 5.5: revenue trends, combined revenue-vs-expense & net income (BPIV), 2026 monthly P&L (BPIV), revenue-vs-operating-cost (Rajapremi), debt breakdown, intercompany bars, waterfall (Illustration).

## 2. Data

- **As-of date:** 31 July 2026 (balance sheets, intercompany balances, monthly figures).
- **Sources (internal):**
  - `Financial Report 2013-2025 - Desember 2025.xlsx` (group ledger; balance sheet & income statement items, revenue history, expense history)
  - monthly reports per Juli 2026 (2026 YTD figures)
  - `Loan Summary BPIV Group - Juli 2026.xlsx`, `Loan Table BPIV - July 2026.xlsx` (intercompany loans: principal, accrued interest, drawdown dates)
- **Recap conventions:** dormant companies have **zero operating revenue** after dormancy (MVP, TMN, Mcash, Primtek, BVI); non-operating items (2025 write-off gains) are excluded from the revenue recap; potential write-offs shown for dormant exposures; offshore shells (Wellgrow, NST, EVF) are excluded — their funds were moved to BPIV books.

## 3. File structure

```
index.html              # login screen + app shell; asset links carry ?v= cache-busting
README.md               # this document
assets/
  css/style.css         # all styling (layout, cards, tables, login, admin, illustration)
  js/data.js            # window.BPIV_DATA — ALL financial data (single source of truth)
  js/i18n.js            # window.BPIV_I18N — en / zh / id dictionaries (symmetric keys)
  js/auth.js            # window.Auth — login, users (localStorage), role checks, session
  js/app.js             # router (hash), rendering, ECharts options, admin actions
```

## 4. Architecture notes

- **Routing** — hash-based (`#/`, `#/company/<slug>`, `#/illustration`, `#/admin`); `render()` in `app.js` dispatches by route and refreshes the view on `hashchange`.
- **State** — all data read from `window.BPIV_DATA`; language from `localStorage.bpiv_lang`; session from `sessionStorage.bpiv_session`; users from `localStorage.bpiv_users`.
- **Language** — `t(key)` resolves `window.BPIV_I18N[lang][key]`. Keys are strictly symmetric across the three languages (verified programmatically); dynamic keys are built from data (`notes.*`, `types.*`, `dashboard.status.*`, `company.bsSection.*`, etc.).
- **Auth** — client-side only. Passwords are hashed with a djb2-variant function (not real SHA-256); acceptable for this internal, non-critical tool. The default admin seed is created on first run.
- **Charts** — ECharts instances are registered in a global list and disposed on re-render to avoid leaks. Canvas containers are `#co-rev-chart`, `#bpiv-combined-chart`, `#bpiv-monthly-chart`, `#raj-chart`, `#interco-chart`, `#debt-chart`, `#ill-gap-chart`.

## 5. Editing data (routine update flow)

1. Open `assets/js/data.js` and update the relevant company blocks (balance sheet, income statement, intercompany balances, revenue series, expense history, monthly figures).
2. If a new note string is needed, add a `notes.*` key in **all three** languages in `assets/js/i18n.js`.
3. Syntax-check: `node --check assets/js/*.js`.
4. Bump the cache version in `index.html` (all five `?v=N` occurrences to the same value).
5. Serve locally (`python -m http.server 8765`) and verify login + each page + all three languages.
6. Commit, push to GitHub (`git push origin main`), then verify the live site (GitHub Pages updates within ~1–2 minutes; append `?v=N` if cached).

## 6. Verification checklist

- [ ] All three languages render completely with no `undefined` text and no mixed-language labels.
- [ ] Company names/figures match `data.js` (spot-check against source XLSX).
- [ ] Dormant companies show zero operating revenue from their dormancy year onward.
- [ ] Intercompany balances show principal + accrued interest + year (+ drawdown schedule where available).
- [ ] `node --check` passes on all JS; browser console is clean.
- [ ] Admin-only pages hidden for `viewer` accounts.

## 7. Ownership chain (reference)

```
YSX (co-founder, 50%) ─┐
                       ├─► Prosindo Manajemen ─99.9%─► Wintek (Rajapay) ─99%─► BPIV ─► portfolio
PSI (BVI, 50% + funding) ─┘
MTPL ── loan (Rp14.76bn principal + Rp3.85bn interest) ──► BPIV   (no equity link to YSX/PSI/Prosindo/Wintek)
```

BPIV holds equity in MVP (64.71% post-valuation; initial 70%), TMN (70%), Primtek (Seri A 100%, Seri B 51/49) and BVI (99.9%); Rajapremi is 99.99% owned via MVP; Mcash is held via convertible note. Offshore shells (Wellgrow, NST, EVF) are deactivated and excluded.

> Internal management information. Not audited. Not for external distribution.
