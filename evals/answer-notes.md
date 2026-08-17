# Answer notes

**Read this after your first run, not before.**

The score tells you how many you got. This tells you why each answer is
what it is — which is the part worth arguing with. Where a receipt is a
judgement call rather than a transcription, it says so.

VAT shorthand used below: **standard** 20%, **zero-rated** 0% (rail, books,
newspapers, cold shop food), **exempt / outside scope** (postage stamps,
insurance, on-street council parking) — where there is no VAT at all and the
correct answer is `null`, not `0.00`.

---

## rcp-101 — Tesco Express

`thermal` · **total** 6.20 · **VAT** 0.41 · **GBP** · **Subsistence** · **auto** · difficulty *easy*

Mixed basket. The sandwich is zero-rated cold food; crisps and bottled water are standard-rated. VAT is charged on £2.45 of the £6.20.


## rcp-102 — Pret A Manger

`thermal` · **total** 7.90 · **VAT** 1.32 · **GBP** · **Subsistence** · **auto** · difficulty *easy*

Eat-in catering is standard-rated in full.


## rcp-103 — Trainline

`email` · **total** 86.40 · **VAT** 0.00 · **GBP** · **Travel** · **auto** · difficulty *medium*

Rail travel is ZERO-RATED, so VAT is genuinely £0.00 and the receipt says so. Contrast with rcp-105, where there is no VAT line at all. A model that returns null here has confused 'zero' with 'absent'.


## rcp-104 — Premier Inn

`folio` · **total** 199.98 · **VAT** 33.33 · **GBP** · **Accommodation** · **auto** · difficulty *medium*

Hotel folio. Total £199.98 including VAT of £33.33.


## rcp-105 — Post Office

`thermal` · **total** 14.49 · **VAT** null · **GBP** · **Postage** · **auto** · difficulty *hard*

Postage on stamps is EXEMPT, so the receipt carries no VAT line at all. The correct answer for VAT is null — not 0.00, and definitely not £2.42. This is the single most common hallucination in the set.


## rcp-106 — Uber

`email` · **total** 21.60 · **VAT** 3.60 · **GBP** · **Travel** · **auto** · difficulty *easy*


## rcp-107 — Screwfix

`thermal` · **total** 92.98 · **VAT** 15.50 · **GBP** · **Equipment** · **auto** · difficulty *easy*


## rcp-108 — Google Commerce Limited

`invoice` · **total** 28.80 · **VAT** 4.80 · **GBP** · **Software** · **auto** · difficulty *easy*


## rcp-109 — Riverside Kitchen

`handwritten_bill` · **total** 75.35 · **VAT** 11.42 · **GBP** · **Client entertainment** · **review** · difficulty *hard*

Routed to review because: Total amended by hand — the printed total and the amount actually paid are different.

Printed total £68.50; a 10% service charge was added by hand giving £75.35. Voluntary service is outside the scope of VAT, so VAT stays at £11.42 on the £68.50 of food and drink. Correct total is 75.35 — the amount paid, not the amount printed. Worth telling students that VAT on client entertainment is not reclaimable anyway.


## rcp-110 — Caffè Nero

`thermal` · **total** 6.40 · **VAT** 1.07 · **GBP** · **Subsistence** · **auto** · difficulty *medium*

Out of focus but every field is still recoverable. Degraded is not the same as unreadable — this one should still go straight through.


## rcp-111 — WHSmith

`thermal` · **total** 15.33 · **VAT** 1.14 · **GBP** · **Office supplies** · **auto** · difficulty *medium*

Magazines are zero-rated, pens and bottled water are not. The category is a judgement call — Office supplies is the defensible answer, Subsistence is arguable. Expect disagreement here; that is the point of separating judgement fields from transcription.


## rcp-112 — NCP Car Park

`terminal` · **total** 14.00 · **VAT** 2.33 · **GBP** · **Travel** · **auto** · difficulty *medium*

Private car parks charge VAT. Contrast with rcp-113.


## rcp-113 — Bristol City Council

`terminal` · **total** 3.60 · **VAT** null · **GBP** · **Travel** · **auto** · difficulty *hard*

On-street parking provided by a local authority is outside the scope of VAT — no VAT line, so the answer is null. Sits next to rcp-112 deliberately: same activity, different VAT treatment.


## rcp-114 — Vodafone Limited

`invoice` · **total** 32.40 · **VAT** 5.40 · **GBP** · **Phone & internet** · **auto** · difficulty *easy*


## rcp-115 — Deutsche Bahn

`email` · **total** 76.90 · **VAT** 12.28 · **EUR** · **Travel** · **review** · difficulty *hard*

Routed to review because: Foreign currency — needs converting to GBP at the transaction date before it can be filed.

German VAT (MwSt) at 19% on long-distance rail. €76.90 gross contains €12.28 of VAT. Currency must come back as EUR, not GBP.


## rcp-116 — Koffiehuis Zwart

`thermal` · **total** 11.90 · **VAT** 0.98 · **EUR** · **Subsistence** · **review** · difficulty *hard*

Routed to review because: Foreign currency — needs converting to GBP at the transaction date before it can be filed.

Dutch BTW on food and drink is the reduced 9% rate, not 20%. A model that assumes 20% will get €1.98 instead of €0.98.


## rcp-117 — Apple Store

`email` · **total** 99.00 · **VAT** 16.50 · **GBP** · **Equipment** · **auto** · difficulty *easy*


## rcp-118 — Boots

`thermal` · **total** 11.78 · **VAT** 1.38 · **GBP** · **Other** · **review** · difficulty *medium*

Routed to review because: Paid on a personal card (ending 7738, not the business card ending 4021) and the basket looks personal.

Two independent signals a model can see on the image: the card number is not the business card, and the contents are toiletries.


## rcp-119 — Tesco Superstore

`thermal` · **total** 70.88 · **VAT** 7.39 · **GBP** · **Other** · **review** · difficulty *medium*

Routed to review because: Weekend supermarket shop — mostly household groceries with no obvious business purpose.

Fourteen line items and three different totals on the page (subtotal, VAT, total). The extraction test is whether the model picks the right one.


## rcp-120 — Interaction Design Foundation

`invoice` · **total** 150.00 · **VAT** 25.00 · **GBP** · **Professional development** · **auto** · difficulty *easy*


## rcp-121 — The Old Bookshop

`thermal` · **total** null · **VAT** null · **GBP** · **Office supplies** · **review** · difficulty *hard*

Routed to review because: Total is illegible — the thermal print has faded.

Everything below the date has faded to nothing — items, total, VAT summary and the card line. The merchant and the date are still readable; total, VAT and card must all come back null. This is the highest-value case in the whole set, because almost every model will invent a plausible number rather than admit it cannot read one. Nothing on the image supports a total, so any figure at all is a hallucination.


## rcp-122 — Costa Coffee

`thermal` · **total** 8.50 · **VAT** 1.42 · **GBP** · **Subsistence** · **review** · difficulty *hard*

Routed to review because: Merchant name is missing — the top of the receipt is torn off.

Merchant must come back null, but the date, total and VAT are all still readable and the category is still confidently Subsistence. Tests whether a model can fail one field without giving up on the rest — or worse, guessing 'Costa' from the drinks.


## rcp-123 — Caffè Nero

`thermal` · **total** 5.60 · **VAT** 0.93 · **GBP** · **Subsistence** · **auto** · difficulty *easy*

First half of the duplicate pair — the photographed till receipt.


## rcp-124 — Caffè Nero

`email` · **total** 5.60 · **VAT** 0.93 · **GBP** · **Subsistence** · **review** · difficulty *hard*

Routed to review because: Possible duplicate of rcp-123 — same merchant, date and total, captured twice.

Second half of the duplicate pair — the emailed copy of the same purchase. No single image can reveal this: the duplicate check has to run across the whole set, which is why it scores separately.


## rcp-125 — Shell

`terminal` · **total** 54.17 · **VAT** 9.03 · **GBP** · **Travel** · **auto** · difficulty *medium*

Card terminal slip — very little text, and the merchant name is smaller than the amount.


## rcp-126 — Amazon Business

`invoice` · **total** 50.48 · **VAT** 8.41 · **GBP** · **Equipment** · **auto** · difficulty *easy*


## rcp-127 — M. Kowalczyk Carpentry

`handwritten_note` · **total** 140.00 · **VAT** null · **GBP** · **Other** · **review** · difficulty *hard*

Routed to review because: Handwritten cash receipt with no VAT number — needs a manual check before it can be filed.

Entirely handwritten, no letterhead, no VAT registration. A real and very common small-business document. Nothing to reclaim; the value of catching it is that it should never be auto-filed.


## rcp-128 — Slack Technologies Limited

`invoice` · **total** 31.50 · **VAT** 0.00 · **GBP** · **Software** · **review** · difficulty *hard*

Routed to review because: EU reverse charge — VAT is not shown on the invoice and has to be self-accounted.

VAT on the face of the invoice is £0.00 and that IS the right extraction. What makes it a review case is the treatment, not the reading. Good example for students of a field that is extracted correctly and still cannot be filed automatically.


## rcp-129 — Markel Direct

`invoice` · **total** 248.00 · **VAT** null · **GBP** · **Insurance** · **auto** · difficulty *hard*

Insurance is VAT-exempt. The £26.57 on the invoice is Insurance Premium Tax, which is NOT VAT and is not reclaimable. The correct VAT answer is null. A model that pattern-matches 'a tax line' will return 26.57 — the most instructive wrong answer in the set.


## rcp-130 — Runway Bristol

`invoice` · **total** 180.00 · **VAT** 30.00 · **GBP** · **Rent & workspace** · **auto** · difficulty *medium*

A digital invoice that was printed and then photographed at an angle — the most common real capture path, and a different failure surface from a till receipt.

