import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Ycorpit — Engineering-led operations consulting",
  description: "Guarantees, data handling, how contracts work, who owns what, and the questions clients actually ask.",
};

const DIFFERENCES = [
  { title: "Engineering-led", desc: "Most consultants come from MBAs and slide decks. We come from production systems. We can actually build what we recommend." },
  { title: "Direct contact", desc: "You talk to founders and senior engineers. No account managers, no project coordinators, no \"let me check with the team.\"" },
  { title: "Fixed-price projects", desc: "We quote a number, we hit it. No hourly creep. If we underestimated, that's our problem — not yours." },
  { title: "Money-back on audits", desc: "If our audit doesn't project at least 2× ROI, we refund the audit fee. We're not here to bill discovery." },
  { title: "No long-term lock-in", desc: "Retainers go month-to-month after a 3-month start. You own all work products. Leaving is your right." },
  { title: "Honest scope", desc: "If we don't think we can help — or if AI isn't the answer to your problem — we'll tell you. We'd rather lose a deal than build the wrong thing." },
];

const GUARANTEES = [
  { title: "2× ROI projection or refund — audit fee", body: "If our audit doesn't identify improvements with projected savings of at least 2× the audit fee, you get the audit fee back. Onboarding fee covers committed work and is non-refundable; we make this clear upfront." },
  { title: "Fixed price means fixed price", body: "On turnkey projects, our quoted price is the price. If our scoping was wrong, we eat the difference. Scope changes happen — they're handled via written change orders, never sneaked into the invoice." },
  { title: "You own everything", body: "Code, configurations, documentation, and process artifacts belong to you upon final payment. We don't hold deliverables hostage. We don't license our own work back to you." },
  { title: "No surprise lock-in", body: "Ongoing retainers require a 3-month initial commitment, after which they convert to month-to-month with 30 days' written notice to cancel. No multi-year contracts. No auto-renew traps." },
  { title: "30-day post-launch support", body: "Every turnkey project includes 30 days of post-launch support at no extra cost. Bug fixes, clarifications, small tweaks — included." },
];

const SECURITY = [
  { label: "Mutual NDA signed by default", desc: "before any sensitive information is shared." },
  { label: "Least-privilege access", desc: "we request only the permissions needed for the specific work, nothing more." },
  { label: "Encrypted channels", desc: "for all data transfer and storage. No PII in unencrypted email." },
  { label: "Access revoked on engagement end.", desc: "Your data isn't ours to keep." },
  { label: "No AI training on your data.", desc: "Whatever models we use, they're not learning from your business." },
];

const FAQS = [
  { q: "How fast can you start?", a: ["Free first-look response within 48 hours of your audit form submission. If we move forward, onboarding takes 5–7 business days. Audit work begins immediately after onboarding completes."] },
  { q: "What if we already have a dev team?", a: ["Great — we work alongside in-house teams all the time. We bring outside perspective and capacity for operational work that your team doesn't have time for. Often we hand off implementation to your dev team after we've audited and designed the solution.", "We're not here to replace your engineers. We're here to free them up."] },
  { q: "Do you sign NDAs?", a: ["Yes, by default. A mutual NDA is part of our standard onboarding. We can sign yours if you have one — or we'll provide a clean mutual NDA template that protects both sides."] },
  { q: "How is this different from a freelancer or agency?", a: ["Vs. freelancers: We're a small team, not one person. We have process, accountability, and continuity. If one person gets sick, the work doesn't stop.", "Vs. agencies: No account managers, no PowerPoint quarter, no senior consultant pitching then handing you off to juniors. You talk to the people doing the work."] },
  { q: "What happens if I want to leave mid-engagement?", a: ["For audits: If you cancel before delivery, you're charged for work completed to date (typically prorated). Onboarding fees are non-refundable.", "For turnkey projects: Milestones already invoiced are non-refundable. You keep everything delivered up to that milestone.", "For ongoing retainers: After the initial 3 months, 30 days written notice. You keep all work products. We hand over everything cleanly."] },
  { q: "Who owns the code and documentation you build?", a: ["You do. Upon final payment for any engagement, all deliverables — code, configurations, documentation, process artifacts — are assigned to you. No licensing, no royalties, no \"we keep a copy and resell it.\""] },
  { q: "Do you work with our existing tools?", a: ["Almost always, yes. We start with what you have. Replacing tools is expensive and disruptive — we'd rather make your current stack work better. If replacement is genuinely the right move, we'll tell you, and we'll explain why."] },
  { q: "What if my budget is below your minimums?", a: ["Tell us. We can sometimes narrow the scope to a quick-win sprint that fits a smaller budget — solve one high-ROI problem first, expand later. We won't try to upsell you on what you can't afford.", "If your problem genuinely requires more than you can spend, we'll be honest and recommend other paths."] },
  { q: "Do you use AI to deliver work yourselves?", a: ["Yes — for our own efficiency, where it improves quality. We're transparent about it. The first-look analysis is AI-assisted, human-reviewed. Other internal work may use AI for research and drafting.", "Your data isn't used to train external models. Final deliverables are always human-owned and reviewed."] },
  { q: "Where are you based?", a: ["The company is registered in the United States. Our working team is distributed globally — by design, so work moves forward across timezones. Contracts are governed by US law unless we agree otherwise."] },
  { q: "Can you guarantee results?", a: ["We guarantee what we control: that our audit will identify real improvements with measurable ROI projections, or you get your audit fee back. We guarantee that our turnkey projects ship to the scope we quoted.", "We can't guarantee that you'll implement our recommendations, or that your team will adopt new processes. That part is on you. But we'll tell you upfront when adoption is the real risk."] },
  { q: "What's the difference between \"audit\" and \"free first-look\"?", a: ["Free first-look: Async analysis of your audit form submission. Within 48 hours, you receive a written summary of what we see, followed by a 30-minute call. No fee, no obligation.", "Audit: A 2–4 week deep engagement after onboarding. Stakeholder interviews, process mapping, prioritized recommendations, ROI projections, final report. This is where the real work happens."] },
];

export default function Why() {
  return (
    <main>
      <section className="page-header" style={{ borderTop: "none" }}>
        <div className="container">
          <p className="eyebrow fade-up">Why Ycorpit</p>
          <h1 className="fade-up d1">The boring stuff that <em className="accent-italic">actually matters.</em></h1>
          <p className="lede fade-up d2">
            Guarantees, data handling, how contracts work, who owns what, and the questions clients ask before they sign.
          </p>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section>
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">01</span>WHY WE&apos;RE DIFFERENT</p>
            <h2 className="section-title">A different kind of <em className="accent-italic">consulting firm.</em></h2>
          </div>
          <div className="feature-grid">
            <div />
            <div className="feature-list">
              {DIFFERENCES.map(({ title, desc }) => (
                <div className="feature-item" key={title}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">02</span>OUR GUARANTEES</p>
            <h2 className="section-title">What we&apos;ll <em className="accent-italic">put in writing.</em></h2>
          </div>
          <div className="feature-grid">
            <div />
            <div style={{ maxWidth: "64ch" }}>
              {GUARANTEES.map(({ title, body }) => (
                <div className="guarantee-card" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DATA & SECURITY */}
      <section>
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">03</span>DATA &amp; SECURITY</p>
            <h2 className="section-title">Your data is <em className="accent-italic">treated like ours.</em></h2>
          </div>
          <div className="feature-grid">
            <div />
            <div style={{ maxWidth: "64ch" }}>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "2rem" }}>
                Most of our team built and secured systems at companies where a data incident meant a regulator&apos;s letter. We carry those habits with us:
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
                {SECURITY.map(({ label, desc }) => (
                  <li key={label} style={{ padding: "1rem 0", borderTop: "1px solid var(--border)", display: "flex", gap: "1rem" }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>—</span>
                    <span><strong style={{ color: "var(--text)" }}>{label}</strong> {desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">04</span>FREQUENTLY ASKED</p>
            <h2 className="section-title">The questions <em className="accent-italic">clients actually ask.</em></h2>
          </div>
          <div className="feature-grid">
            <div />
            <div style={{ maxWidth: "68ch" }}>
              {FAQS.map(({ q, a }) => (
                <details className="faq-item" key={q}>
                  <summary>{q}</summary>
                  <div className="faq-body">
                    {a.map((para, i) => <p key={i}>{para}</p>)}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="section-title" style={{ maxWidth: "22ch", margin: "0 auto 1.5rem" }}>
            Still have <em className="accent-italic">questions?</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "44ch", margin: "0 auto 3rem" }}>
            Start with the audit form — or email us directly. We answer ourselves.
          </p>
          <Link href="/audit" className="btn btn-primary">Start a free audit →</Link>
          <p style={{ marginTop: "2.5rem", fontSize: "0.85rem", color: "var(--dim)" }}>
            Or email{" "}
            <a href="mailto:contacts@ycorpit.com" style={{ color: "var(--muted)", borderBottom: "1px solid var(--border-hover)" }}>
              contacts@ycorpit.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
