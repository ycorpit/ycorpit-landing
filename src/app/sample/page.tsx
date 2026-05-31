import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sample Audit Report — Ycorpit",
  description: "A real audit report, anonymized. See exactly what we deliver — findings, ROI projections, process maps, implementation roadmap.",
};

export default function Sample() {
  return (
    <main>
      <section className="page-header" style={{ borderTop: "none" }}>
        <div className="container">
          <p className="eyebrow fade-up">Sample audit</p>
          <h1 className="fade-up d1">What a real audit <em className="accent-italic">looks like.</em></h1>
          <p className="lede fade-up d2">
            An anonymized report from an actual engagement. This is what you get — findings, ROI projections, prioritized roadmap, quick wins.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", padding: "4rem 0" }}>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", color: "var(--muted)", fontStyle: "italic", fontWeight: 300, lineHeight: 1.5, marginBottom: "3rem" }}>
              Full sample report coming soon.<br />Request it directly and we&apos;ll send it within 24 hours.
            </p>
            <Link href="/audit" className="btn btn-primary">Start a free audit →</Link>
            <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "var(--dim)" }}>
              Or email{" "}
              <a href="mailto:contacts@ycorpit.com" style={{ color: "var(--muted)", borderBottom: "1px solid var(--border-hover)" }}>
                contacts@ycorpit.com
              </a>{" "}
              to request the sample directly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
