import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — YCorpIT",
  description: "YCorpIT is a Dallas-Fort Worth, Texas IT consulting firm run by engineers, not a sales team.",
};

export default function About() {
  return (
    <main>
      <section className="page-header" style={{ borderTop: "none" }}>
        <div className="container">
          <p className="eyebrow fade-up">About YCorpIT</p>
          <h1 className="fade-up d1">
            Engineers first. <em className="accent-italic">Not a sales team.</em>
          </h1>
          <p className="lede fade-up d2">
            YCorpIT LLC is based in the Dallas-Fort Worth area, Texas. When you reach out, you talk directly to the engineers doing the work — not an account manager relaying your question to someone else.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section>
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">01</span>WHO&apos;S BEHIND IT</p>
            <h2 className="section-title">A team of engineers, <em className="accent-italic">not a pitch deck.</em></h2>
          </div>
          <div className="founder-block">
            <div />
            <div>
              <div className="founder-photo-wrap">
                <div className="founder-photo">
                  <span className="founder-photo-initials">AY</span>
                </div>
                <div>
                  <p className="founder-name">Alex Yenza</p>
                  <p className="founder-title">Founder, YCorpIT</p>
                </div>
              </div>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.5rem", maxWidth: "60ch" }}>
                YCorpIT is led by Alex Yenza, with a background spanning QA, software development, infrastructure, and systems architecture — built at large organizations such as Meta and FINRA, among others. That background means software budgets, tool sprawl, and testing overhead were a constant, visible problem long before YCorpIT existed.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.5rem", maxWidth: "60ch" }}>
                For hands-on execution, YCorpIT works with a small, vetted network of engineers under contract — each with their own certifications and specialist experience — brought in project by project as the work requires. Not a solo generalist, and not a sales rep learning the material as they go.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.5rem", maxWidth: "60ch" }}>
                More recently, that same team has been building AI-assisted tooling — using AI to write and run tests, review work, and catch mistakes automatically. That gave a close-up view of exactly where AI tools quietly get things wrong, and why most small and mid-sized businesses have no easy way to check.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, maxWidth: "60ch" }}>
                YCorpIT is that experience pointed at small and mid-sized businesses instead of enterprise engineering teams. No account managers, no sales reps reading from a script — you work with the engineers who actually do the audit, write the report, and build the fix.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIBERATE GROWTH */}
      <section style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">02</span>HOW WE GROW</p>
            <h2 className="section-title">Deliberately <em className="accent-italic">selective.</em></h2>
          </div>
          <div className="feature-grid">
            <div />
            <div style={{ maxWidth: "60ch" }}>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                YCorpIT LLC has existed for about two years, and we&apos;ve chosen to grow deliberately rather than scale fast. Every engagement gets real, focused attention from an actual engineer — not stretched thin across a dozen accounts, and not handed off to junior staff after the sales call.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75 }}>
                We&apos;re a newer firm, and our case-study library is still growing. What&apos;s not new is the hands-on engineering experience behind every audit — the same kind of waste we&apos;re asking to look for in your business. The free call and sample report cost nothing to find out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THESE THREE PROBLEMS */}
      <section>
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">03</span>WHY THESE THREE PROBLEMS</p>
            <h2 className="section-title">Money leaks the same way, <em className="accent-italic">whatever the business.</em></h2>
          </div>
          <div className="feature-grid">
            <div />
            <div style={{ maxWidth: "60ch" }}>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Every business we&apos;ve looked at closely has some version of the same three leaks: software subscriptions nobody&apos;s tracking, an AI tool that was turned on and never checked, and a manual process that quietly costs hours every week. None of these show up on a balance sheet as one clean line item — they just slowly add up.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75 }}>
                When budgets are tight, finding that waste matters more, not less. That&apos;s the whole premise of YCorpIT: find where it&apos;s leaking, show you the number, and fix it with your sign-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="section-title" style={{ maxWidth: "22ch", margin: "0 auto 1.25rem" }}>
            Want to see what we&apos;d <em className="accent-italic">find in your business?</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "44ch", margin: "0 auto 2.5rem" }}>
            Email us or book a 20-minute call — no pitch, just a direct read on your situation.
          </p>
          <Link href="/contact" className="btn btn-primary">Get your free check →</Link>
        </div>
      </section>
    </main>
  );
}
