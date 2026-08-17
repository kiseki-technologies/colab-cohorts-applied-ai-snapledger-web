import { getReceipts, getNeedsReview } from "@/lib/receipts";

/**
 * Placeholder home page. It proves the scaffold runs and the seed data loads.
 * Your user stories replace this with the real thing — see the design
 * reference in design/snapledger-web.html.
 */
export default function Home() {
  const receipts = getReceipts();
  const needsReview = getNeedsReview();

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="card">
        <h1 style={{ margin: "0 0 8px", fontSize: 22 }}>
          The scaffold is running.
        </h1>
        <p className="muted" style={{ margin: 0 }}>
          {receipts.length} seed receipts loaded · {needsReview.length} waiting
          on a decision. This page is a placeholder — your stories build the
          real screens.
        </p>
      </div>
      <div className="card muted" style={{ fontSize: 13 }}>
        Design reference: <code>design/snapledger-web.html</code> · Conventions:{" "}
        <code>CLAUDE.md</code> · Data helpers: <code>lib/receipts.js</code>
      </div>
    </div>
  );
}
