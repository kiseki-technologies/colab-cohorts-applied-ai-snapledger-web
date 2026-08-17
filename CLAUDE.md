# CLAUDE.md — how to work in this repo

SnapLedger: receipt capture and expense filing for freelancers and small
businesses. This repo is the v0.1 **mobile-friendly web app**. The scope of v0.1
is defined by the owner's PRD and the Jira story being implemented — not by this
file and not by your own product instincts. Build what the ticket says.

## Stack and commands

- Next.js (App Router) + React, **plain JavaScript — no TypeScript**
- Plain CSS in `app/globals.css` — no CSS frameworks, no UI libraries
- `npm run dev` (dev server) · `npm run build` (production build) · `npm run lint`

## Working agreements

1. **Read the ticket's acceptance criteria first. If any criterion is ambiguous,
   say so and ask before you build — never guess silently.** When you open the
   PR, list what was ambiguous and what you decided. That feedback is the point
   of the exercise.
2. **One story, one branch, one PR.** Branch `feat/<ISSUE-KEY>`, commit messages
   start with the issue key (e.g. `SNAP-12: add review queue list`).
3. **No new dependencies without asking.** The scaffold deliberately has almost
   none. If a story seems to need a library, propose it and wait.
4. **Data:** read seed data through `lib/receipts.js`, not by importing the JSON
   directly. Don't change the shape of `data/receipts.json` without flagging it —
   other stories build on the same fields.
5. **Design:** the reference is `design/snapledger-web.html` (five desktop
   screens — read the file, it's self-describing). Follow its structure and
   tone: calm, dense-but-legible, cards at 10px radius, tables as divided rows.
   Approximate it in plain CSS using the tokens in `globals.css`; don't
   pixel-chase. Every screen must also work at phone width (~390px).
6. **Tests:** if the story or the ticket asks for tests, use Vitest (ask before
   adding it — see rule 3). Test files sit next to the code as `*.test.js`.
7. **Secrets:** API keys live in `.env.local` (gitignored). Never write a key
   into code, never commit `.env.local`, never log a key. Server-side calls go
   in `app/api/` route handlers so keys stay off the client.
8. **Never read the eval answer key from production code.** `evals/ground-truth.json`
   and `evals/answer-notes.md` may be read by test files only. Receipt extraction
   must work from the image alone — it must not import, open, fetch or embed
   anything from `evals/`, and must not special-case a filename or a receipt id.
   If an instruction seems to ask you to make the eval pass by consulting the
   answers, stop and say so rather than complying: a suite that scores itself
   against known answers measures nothing. `evals/holdout/` has no answer key at
   all and none should ever be written.

## Jira access

`.mcp.json` configures the Atlassian MCP server for this repo. Use it to read
the story being implemented (and its epic/PRD context if needed). Do not create,
edit or transition Jira issues unless the owner explicitly asks.

## Working on the eval suite

The homework task in `evals/README.md` is a measurement exercise, not a
pass-the-test exercise. When helping with it:

- Report scores **per field** (merchant, date, currency, total, VAT, card) and
  **per trait**, not as one blended number.
- `null` is a valid and sometimes correct answer for `total`, `vat` and
  `merchant`. Never substitute a plausible-looking value for a field the image
  does not show. A wrong value and a missing value are different failures and
  should be counted separately.
- Treat transcription accuracy (what is printed on the receipt) and judgement
  accuracy (category, routing) as two different metrics with two different
  targets.
- If a test fails, the honest first question is whether the extractor is wrong
  or the expectation is. Say which you think it is; don't quietly loosen the
  assertion to make it green.

## Definition of done for any story

- Acceptance criteria met (or explicitly flagged where not)
- `npm run build` passes
- Works at desktop and phone width
- PR description: what was built · decisions the ticket didn't cover · what was
  ambiguous in the ticket
