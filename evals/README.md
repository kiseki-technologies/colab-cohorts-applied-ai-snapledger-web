# The receipt eval suite

**Applied AI Cohort · Week 3 homework, task 4 · the hard one.**

SnapLedger's whole promise is that it reads receipts. This folder is where you
find out how well that actually works — and, more to the point, **how you would
know**.

Most PMs shipping an AI feature have never built an eval set. It is the single
most transferable thing in this course: the same shape works for a support-ticket
classifier, a meeting summariser, a contract extractor. Learn it here on 40
receipts and you can run it on anything.

---

## What's in here

| Path | What it is |
|---|---|
| `receipts/` | **30 receipts with answers.** Photographs, scans and digital receipts. This is your development set. |
| `holdout/` | **10 receipts with no answers.** You cannot score these yourself — see [The held-back ten](#the-held-back-ten). |
| `ground-truth.json` | The correct answer for each of the 30. |
| `answer-notes.md` | Why each answer is what it is. **Read it after your first run, not before.** |

They belong to Priya Raman, the freelancer from your Week 2 research. One
business, roughly five weeks, captured the way people actually capture receipts:
some photographed badly on a desk, some emailed, one torn, one faded to nothing,
two of them the same purchase twice.

**Priya's business card is a Starling Visa ending 4021.** Anything else is a
personal card. That matters later.

---

## Two kinds of field, and why the difference is the whole lesson

Every receipt has two sorts of answer, and they behave completely differently.

**Transcription** — `merchant`, `date`, `currency`, `total`, `vat`, `card_last4`.
These are printed on the paper. There is a right answer. If the model gets one
wrong it is wrong, full stop, and you can hold it to a hard number.

**Judgement** — `category`, and whether the receipt should go straight through or
land in a human review queue. These are *not* on the paper. They depend on
Priya's business, her accountant, and what SnapLedger has decided it is for.
Reasonable people disagree. Your accuracy target here should be lower, and
"the model disagreed with the key" is sometimes a bug in the key.

Teams get this wrong constantly. They report one accuracy number over a mixture
of both, then can't work out why it won't improve. Keep them apart from the start.

### The fields

```jsonc
{
  "transcription": {
    "merchant":    "Tesco Express",   // exactly as printed, or null if unreadable
    "date":        "2026-06-15",      // ISO 8601
    "currency":    "GBP",             // ISO 4217 — GBP or EUR in this set
    "total":       6.20,              // the amount actually paid
    "vat":         0.41,              // see below — null is a real answer
    "card_last4":  "4021"             // or null if paid in cash
  },
  "judgement": {
    "category":     "Subsistence",    // one of the 14 in ground-truth.json
    "route":        "auto",           // "auto" or "review"
    "route_reason": null              // free text when route is "review"
  }
}
```

**`vat: null` is not the same as `vat: 0.00`, and this trips up almost every
model.** Rail travel is zero-rated: the receipt says VAT £0.00, so the answer is
`0.00`. Postage stamps are exempt: there is no VAT line at all, so the answer is
`null`. A model that returns `0.00` for the second one is guessing, and a model
that returns `2.42` has invented a number that will end up on a VAT return. There
are receipts in this set for both cases, deliberately next to each other.

Same principle for `total`. One receipt has faded past the point of reading. The
correct answer is `null`. Watch what your model does with it — this is the most
revealing single image in the set.

---

## Two rules

**1. The extraction code must never read `ground-truth.json`.** Only the test
file may. This sounds obvious and it is the first thing that goes wrong: point
Claude Code at this folder and ask it to "make the tests pass", and a
well-behaved agent will happily read the answers and build something that
returns them. Your suite will report 100% and mean nothing.

Say so explicitly in your prompt. Then read the diff and check.

If it happens anyway, don't just fix it — that is a real production failure mode
with a name (optimising the metric instead of the task), and noticing it is worth
more than the score.

**2. Don't tune on the held-back ten.** They're there precisely so there is one
number you can't game.

---

## What to build

### Step 1 — extract

Add a feature that sends a receipt image to Claude and returns the fields above
as JSON. You'll need an **Anthropic API key**: create one at
`console.anthropic.com`. A few dollars of credit covers this many times over —
40 images is pennies, and you should still set a spend limit on the key.

Put the key in `.env.local` (gitignored, never committed) and make the call from
an API route in `app/api/` so it stays server-side. Claude Code knows the rest.

**Start with 3 receipts, not 30.** Get the shape of the JSON right and the prompt
roughly working before you spend anything on a full run.

### Step 2 — score

Write tests that run the extraction over all 30 and compare against
`ground-truth.json`. Vitest is the suggested runner (ask before adding it — see
`CLAUDE.md` rule 3).

Comparison is a design decision, not a detail. Decide and write down:

- **Money** — exact to the penny, or a tolerance? Say which and why.
- **Merchant** — is "Tesco" a pass for "Tesco Express"? Is "CAFFE NERO"? Pick a
  normalisation rule and apply it to both sides.
- **Dates** — normalise to ISO before comparing, or you'll fail on formatting.
- **Nulls** — a wrong value and a missing value are different failures. Count
  them separately.

Report **per field**, not one blended number. `total` at 97% and `vat` at 71%
is an actionable result. "88%" is not.

### Step 3 — slice

Now the part that makes it an eval suite rather than a test.

Every receipt in `ground-truth.json` carries `traits` and `difficulty`. Break
your score down by them. You are looking for a *shape*: does it fail on foreign
currency? On handwriting? On anything photographed at an angle? On no-VAT-line
receipts specifically?

One overall number tells you whether to be happy. A breakdown tells you what to
fix, and — the PM version — which customers you'd currently be letting down.

---

## The held-back ten

`holdout/` has 10 more receipts, drawn from the same distribution, with no
answers anywhere in this repo. Same mix: something faded, something in euros,
something handwritten, a duplicate pair.

Run your extractor over them and **post the raw output** with `#shipped`. I have
the answers and will score them.

Why: it is extremely easy to build something that scores brilliantly on the 30
you tuned against and falls over on anything else. That gap — dev-set score minus
held-out score — is the number that tells you whether you built a receipt reader
or a set of thirty special cases. Every serious AI team measures it. Almost no
product team does.

---

## Then the questions that actually matter

The score is the setup. These are the point:

1. **Which receipts failed, and is there a pattern?** Name the slice, not the
   individual receipts.
2. **What confidence threshold would you set** for a receipt going straight
   through versus landing in a human review queue? What does that cost — in
   Priya's time on one side, and in wrong numbers on her VAT return on the other?
3. **What accuracy would you put in front of a customer** — and what would you
   refuse to promise? Where is the line between "reads your receipts" and
   "reads your receipts and files them for you"?

Question 2 is a product decision that only you can make, and it is unmakeable
without the data from steps 2 and 3. That is the argument for evals in one line:
**you cannot set a sensible threshold for a system you have only tried a few
times.**

---

## What to post

With `#shipped`, in the community space:

- Your per-field scores on the 30, and the breakdown by trait
- Your raw output on the 10 held-back receipts
- Your answers to the three questions

**What good looks like:** you can point at a slice and say "it loses 40% of its
accuracy on anything handwritten, so handwriting goes to review regardless of
confidence, and I'd tell a customer 95% on printed receipts rather than 88%
overall." That sentence is a PM doing AI product work. Nothing about it required
you to be an engineer.

---

## If you want to go further

- **Duplicate detection.** Two receipts in the 30 are the same purchase captured
  twice, and `ground-truth.json` records which. No single image can reveal that —
  it needs a pass across the whole set. Score it separately.
- **Ask for confidence.** Have the model return a confidence per field, then
  check whether it is calibrated: when it says 0.9, is it right 90% of the time?
  Usually not. Finding out is the useful bit.
- **Change one thing in the prompt and re-run.** You now have a measurement
  instrument. Use it. That loop — change one thing, measure, keep or revert — is
  the whole discipline.
- **Cheaper model, same suite.** Does a smaller model hold up? On which slices?
  That is a margin conversation you can now have with numbers.

---

## Stuck?

Post in the community space with what you tried. If the API key or the billing
is the blocker, say so — I'd rather unblock you than have you skip the task.
