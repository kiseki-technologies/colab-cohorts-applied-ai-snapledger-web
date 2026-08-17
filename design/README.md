# Design reference

`snapledger-web.html` is the SnapLedger web design concept — five desktop
screens at 1400 × 880, exported as a single self-contained page. Open it in a
browser to view it; Claude Code can read the file directly when implementing a
story.

The five screens: **Home** (the week at a glance, what needs you), the **review
queue** (receipts that stopped and why), the **business-or-personal decision**,
the **receipt detail with audit trail**, and **integrations** (Gmail, Starling,
FreeAgent).

Two things to keep in mind:

- It's a **reference, not a spec**. Follow its structure and tone — calm,
  dense-but-legible, cards at 10px radius, tables as divided rows — but your
  ticket's acceptance criteria always win over pixel fidelity.
- It shows **desktop width only**. v0.1 is a mobile-friendly web app, so every
  screen you build must also work at phone width (~390px). The mobile design
  concept lives in the cohort Confluence space if you want it.
