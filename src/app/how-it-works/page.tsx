import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works — YCorpIT",
  description: "Email or a free call, read-only access under NDA, a clear report, then we implement and track the result.",
};

const GUARANTEES = [
  { title: "No savings, no success fee", body: "On a Spend Audit, the 20% fee only applies to savings we actually implement. If we don't find anything worth acting on, you pay the $500 onboarding and keep the report — nothing else." },
  { title: "90-day guarantee on automations", body: "Every Workflow Automation project includes a free 90-day guarantee covering anything that's our mistake — no extra charge to fix it." },
  { title: "No annual contracts", body: "Chatbot monitoring and post-guarantee automation support are both sold in 3-month blocks. Renew or stop after each block — nothing auto-renews into a year." },
  { title: "Written approval before any change", body: "We never cancel a subscription, edit a prompt, or touch a live system without your sign-off first, item by item." },
];

const SECURITY = [
  { label: "Mutual NDA signed before any access.", desc: "Nothing sensitive is shared or reviewed until it's in place." },
  { label: "Read-only access by default.", desc: "We request the minimum permissions needed to see what we're auditing — not to change it." },
  { label: "Access revoked when the engagement ends.", desc: "Your data isn't ours to keep." },
  { label: "No AI training on your data.", desc: "Any AI we use to help deliver the work doesn't learn from your business." },
];

const FAQS = [
  { q: "How fast can you start?", a: ["Whether you email us or book the free 20-minute call, we usually respond within a day or two. If we move forward, read-only access and NDA paperwork typically take under a week, and work starts right after."] },
  { q: "Do you sign NDAs?", a: ["Yes, always, before any sensitive access. We can sign yours or provide a clean mutual NDA — whichever you prefer."] },
  { q: "Will you touch our live systems?", a: ["Only with your explicit, written sign-off, and only for the specific change you approved. Everything else is read-only access for the audit itself."] },
  { q: "Do you work with our existing tools?", a: ["Yes — we start with what you already use. Replacing tools is disruptive and expensive, so we'd rather make your current stack work better. If something genuinely needs replacing, we'll say so and explain why."] },
  { q: "Who owns the report and the work?", a: ["You do. The report, the automations, the configuration — all of it is yours once the engagement is complete."] },
  { q: "Where is YCorpIT based?", a: ["YCorpIT LLC is registered in Texas, in the Dallas-Fort Worth (DFW) area. We work with small and mid-sized businesses across the U.S."] },
  { q: "What if I'm not sure which package I need?", a: ["That's what the free call or an email is for. Tell us what's bothering you and we'll tell you honestly which package fits — or if none of them do."] },
];

export default function HowItWorks() {
  return (
    <main>
      <section className="page-header" style={{ borderTop: "none" }}>
        <div className="container">
          <p className="eyebrow fade-up">How it works</p>
          <h1 className="fade-up d1">Four steps. <em className="accent-italic">No surprises.</em></h1>
          <p className="lede fade-up d2">
            From a free conversation to a tracked result — here&apos;s exactly what happens at each stage, and what we commit to in writing.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section>
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">01</span>THE PROCESS</p>
            <h2 className="section-title">What happens, <em className="accent-italic">step by step.</em></h2>
          </div>
          <div className="process">
            <div />
            <div className="process-steps">
              <div className="step">
                <div className="step-num">01</div>
                <div>
                  <h3>Email us, or book a 20-min call</h3>
                  <p>No pitch deck. Send a quick email or grab a slot for a call — tell us what&apos;s actually bothering you: a creeping software bill, a chatbot that worries you, or a process your team dreads. We tell you honestly whether we can help.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">02</div>
                <div>
                  <h3>Read-only access, under NDA</h3>
                  <p>Before we look at anything sensitive, we sign a mutual NDA. Then we get read-only access to exactly what the engagement requires — your subscription billing, your chatbot logs, or a walkthrough of the process in question. Nothing more.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">03</div>
                <div>
                  <h3>A clear, straight report</h3>
                  <p>You get a written report with specific findings, explained in plain English — priced in dollars and hours wherever we can put a number on it, plain terms everywhere else. Every recommendation is something you could hand to a bookkeeper or a business partner and have it make sense immediately.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">04</div>
                <div>
                  <h3>We implement, and track for 12 months</h3>
                  <p>With your written approval, we make the changes ourselves — cancel the subscription, fix the chatbot, ship the automation. Then we keep measuring the result against where you started, so the number in the report turns into a number you actually see.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">02</span>WHAT WE PUT IN WRITING</p>
            <h2 className="section-title">Our commitments, <em className="accent-italic">not just promises.</em></h2>
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
            <p className="section-label"><span className="num">03</span>DATA &amp; ACCESS</p>
            <h2 className="section-title">We look. <em className="accent-italic">We don&apos;t touch — until you say so.</em></h2>
          </div>
          <div className="feature-grid">
            <div />
            <div style={{ maxWidth: "64ch" }}>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "0.5rem" }}>
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
            <h2 className="section-title">Questions people <em className="accent-italic">ask before starting.</em></h2>
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
          <h2 className="section-title" style={{ maxWidth: "22ch", margin: "0 auto 1.25rem" }}>
            Ready to <em className="accent-italic">start?</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "44ch", margin: "0 auto 2.5rem" }}>
            Email us or book a free 20-minute call — no obligation. We&apos;ll tell you straight whether we can help.
          </p>
          <Link href="/contact" className="btn btn-primary">Get your free check →</Link>
        </div>
      </section>
    </main>
  );
}
