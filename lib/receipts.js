import receipts from "@/data/receipts.json";

/**
 * Seed-data access for SnapLedger v0.1.
 * Build features on these helpers rather than importing the JSON directly —
 * when receipts later come from somewhere real, only this file changes.
 */

/** All receipts, newest first. */
export function getReceipts() {
  return [...receipts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** One receipt, or undefined. */
export function getReceipt(id) {
  return receipts.find((r) => r.id === id);
}

/** Receipts waiting on a human decision. */
export function getNeedsReview() {
  return getReceipts().filter((r) => r.status === "needs_review");
}

/** Receipts filed without intervention. */
export function getFiled() {
  return getReceipts().filter((r) => r.status === "filed");
}

/** "£42.50" / "€76.90" — display formatting for totals. */
export function formatAmount(receipt) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: receipt.currency,
  }).format(receipt.total);
}
