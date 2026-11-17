import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" style={{ borderTop: "none" }}>
        <div className="container">
          <p className="eyebrow fade-up">IT consulting for small &amp; mid-sized business · Dallas-Fort Worth, TX</p>
          <h1 className="fade-up d1">
            Find where your business is <em>losing money.</em>
          </h1>
          <p className="hero-sub fade-up d2">
            We cut wasted software spend, make sure your AI doesn&apos;t embarrass you, and automate the busywork that eats your team&apos;s week.
          </p>
          <div className="hero-actions fade-up d3">
            <Link href="/contact" className="btn btn-primary">Get your free check →</Link>
            <a href="#how" className="btn-text">How it works ↓</a>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages">
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">01</span>THREE PROBLEMS</p>
            <h2 className="section-title">Pick the problem that&apos;s <em className="accent-italic">costing you most.</em></h2>
          </div>
          <div className="packages-grid">
            <div className="package-card">
              <p className="package-num">Problem 1</p>
              <h3>Spend Audit</h3>
              <p className="package-sub">Stop paying for software you don&apos;t use</p>
              <p className="package-desc">
                We go through every software and AI subscription you pay for — extra seats, duplicate tools, forgotten trials, the wrong plan tier, logins for people who left. You get a report with real dollar savings.
              </p>
              <p className="package-price">$500 onboarding <span>+ 20% of what we save you</span></p>
              <Link href="/services#spend-audit" className="btn-text">See how pricing works →</Link>
            </div>
            <div className="package-card">
              <p className="package-num">Problem 2</p>
              <h3>AI Chatbot Quality Check</h3>
              <p className="package-sub">Make sure your bot isn&apos;t making things up</p>
              <p className="package-desc">
                We run your customer-facing AI through dozens of targeted test scenarios — pricing, policies, refunds, edge cases — to catch answers that could cost you money and confirm it&apos;s actually following your policies.
              </p>
              <p className="package-price">From $1,500 <span>test only · $4,000 test + fix</span></p>
              <Link href="/services#chatbot-check" className="btn-text">See how pricing works →</Link>
            </div>
            <div className="package-card">
              <p className="package-num">Problem 3</p>
              <h3>Workflow Automation</h3>
              <p className="package-sub">Get your team&apos;s hours back</p>
              <p className="package-desc">
                We measure how many hours and dollars a manual process costs you today, then build automations custom to how you work — tested so they don&apos;t break. We track the result for a full year.
              </p>
              <p className="package-price">Custom quote</p>
              <Link href="/services#workflow-automation" className="btn-text">See how pricing works →</Link>
            </div>
          </div>

          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", textAlign: "center" }}>
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", marginBottom: "0.75rem" }}>
              Also available by request: FinOps audits and custom software.
            </p>
            <Link href="/services" className="btn-text" style={{ display: "inline-flex" }}>See the full list of services →</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">02</span>HOW IT WORKS</p>
            <h2 className="section-title">No sales call <em className="accent-italic">pressure.</em></h2>
          </div>
          <div className="process">
            <div />
            <div className="process-steps">
              <div className="step">
                <div className="step-num">01</div>
                <div>
                  <h3>Email us, or book a 20-min call</h3>
                  <p>However you&apos;d rather start — send a quick email or grab a slot for a call. Tell us what&apos;s bothering you: a software bill that keeps creeping up, a chatbot you don&apos;t fully trust, or a process that eats your team&apos;s week. No pitch, no pressure.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">02</div>
                <div>
                  <h3>Read-only access, under NDA</h3>
                  <p>We look at what we need to — subscriptions, chatbot logs, process steps — without touching anything. A signed NDA comes before any access.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">03</div>
                <div>
                  <h3>A clear, straight report</h3>
                  <p>No slide decks, no fluff. You get specific findings explained in plain English — priced in dollars and hours wherever we can put a number on it, plain terms everywhere else.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">04</div>
                <div>
                  <h3>We fix it and track the result</h3>
                  <p>With your written sign-off, we make the changes and keep tracking the outcome against where you started — so you can see it working, not just take our word for it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY YCORPIT */}
      <section id="why">
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">03</span>WHY YCORPIT</p>
            <h2 className="section-title">Built for owners who <em className="accent-italic">need the facts, not a pitch.</em></h2>
          </div>
          <div className="diff-grid">
            <div />
            <div className="diff-list">
              <div className="diff-item">
                <h3>Everything in writing</h3>
                <p>We work by email, form, and scheduled calls — not cold calls. You get a written report you can read on your own time and share with whoever needs to sign off.</p>
              </div>
              <div className="diff-item">
                <h3>Plain-English explanations</h3>
                <p>If a finding needs a technical term, we explain it in one sentence — so you know exactly what we found and why it matters, no matter your background.</p>
              </div>
              <div className="diff-item">
                <h3>Built for a downturn</h3>
                <p>When budgets tighten, the first question is always &ldquo;what are we paying for that we don&apos;t need?&rdquo; That&apos;s the question we answer.</p>
              </div>
              <div className="diff-item">
                <h3>You keep the report either way</h3>
                <p>If a Spend Audit finds no savings, you still keep the full report — you just pay the onboarding fee, nothing more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section id="who">
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">04</span>WHO WE WORK WITH</p>
            <h2 className="section-title">Small and mid-sized businesses, <em className="accent-italic">any industry.</em></h2>
          </div>
          <div className="feature-grid">
            <div />
            <div>
              <p className="industries-text">
                Dental and medical offices, law firms, home services and HVAC companies, real estate agencies, and plenty of other businesses that run on software and people. <span>Don&apos;t see your industry here? The same three problems apply to just about any business.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="results">
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">05</span>RESULTS</p>
            <h2 className="section-title">What an engagement <em className="accent-italic">looks like.</em></h2>
          </div>
          <div className="feature-grid">
            <div />
            <div className="coming-soon-card">
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "0.75rem" }}>Illustrative example</p>
              <p className="title">A business overpaying for cloud infrastructure, with a customer-facing chatbot giving risky answers.</p>
              <p className="sub">Both got fixed, then a manual back-office process got automated too. Here&apos;s the full example — scope, pricing, and results.</p>
              <div style={{ marginTop: "1.75rem", display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/sample" className="btn-text">See the sample report →</Link>
                <Link href="/contact" className="btn-text">Talk to us →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="start">
        <div className="container">
          <h2>Ready to see what we&apos;d <em className="accent-italic">find in your business?</em></h2>
          <p>Email us or book a free 20-minute call — we&apos;ll reply within 24 hours.</p>
          <Link href="/contact" className="btn btn-primary">Get your free check →</Link>
          <p className="cta-meta">
            Or email us at{" "}
            <a href="mailto:contacts@ycorpit.com">contacts@ycorpit.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
