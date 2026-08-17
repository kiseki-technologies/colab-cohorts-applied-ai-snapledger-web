# SnapLedger — starter repo

**Applied AI Cohort · Week 3.** This is the repo your user stories get built in.
It runs before you touch it; your job is to make it do more.

---

## The product, in three sentences

SnapLedger takes the chore out of expenses for freelancers and small businesses.
It captures receipts (from email or a photo), reads them, matches them to bank
transactions, and files them with an audit trail — asking a human only when it
isn't sure. Your discovery research told you what it should do first; your PRD
and your stories define v0.1. **This repo doesn't decide your scope — you already did.**

v0.1 is a **mobile-friendly web app**: it should work on a phone as well as a desktop.

## Quick start (before you open Claude Code)

```bash
npm install
npm run dev
```

Open http://localhost:3000. You should see the SnapLedger shell with the seed
data loaded. If you do, you're ready.

## The Week 3 flow

1. Create **your own repo from this template** — the green "Use this template" button
   on `colab-cohorts-applied-ai-snapledger-web` — then clone *your* copy.
2. Open a terminal in the folder and run `claude`.
3. First run: Claude Code will offer to connect the **Atlassian MCP server** this
   repo ships with (`.mcp.json`) — approve it and sign in with your cohort account.
   That's how it reads your ticket.
4. Ask it to pull your story from Jira and implement it. The handoff prompt is in
   the starter kit: `3-prompt-library/prd-and-stories.md`.
5. Branch, commit, pull request. Then read the diff — and read what it says was
   ambiguous in your ticket.

## What's in here

| Path | What it is |
|---|---|
| `app/` | Next.js app — a minimal shell (layout + home page). Your stories add the real screens. |
| `data/receipts.json` | Seed data: one week of receipts, including the awkward ones (a personal card, a missing VAT line, a duplicate, one in euros). |
| `lib/receipts.js` | Helpers for reading the seed data. Build on these rather than importing the JSON directly. |
| `design/snapledger-web.html` | The design reference — five desktop screens. Open it in a browser; Claude Code can read it directly. See `design/README.md`. |
| `CLAUDE.md` | Conventions Claude Code follows in this repo. Read it once — it's short. |
| `.mcp.json` | Project-scoped MCP config: gives Claude Code Jira/Confluence access in this repo. |

## Deploying (homework stretch)

The app deploys on **Vercel** free tier with zero config: vercel.com → Add New
Project → import your repo → accept the defaults. Then open it on your phone.

## The receipt-analysis stretch task

Needs an Anthropic API key. Copy `.env.example` to `.env.local` and put your key
there — `.env.local` is gitignored and **must never be committed**. API routes
live in `app/api/`; Claude Code knows the rest.

## Stuck?

Post in the cohort Slack with what you tried. Git auth problems: `gh auth login`
fixes most of them. MCP not connecting: check you approved the server on first
run (`claude mcp list` shows what's configured).
