import "./globals.css";

export const metadata = {
  title: "SnapLedger",
  description: "Receipts, filed while you work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            borderBottom: "1px solid var(--border)",
            padding: "14px 0",
            marginBottom: "32px",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontWeight: 600, letterSpacing: "-0.01em" }}>
              SnapLedger
            </div>
            <div className="muted" style={{ fontSize: 13 }}>
              Priya Raman
            </div>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
