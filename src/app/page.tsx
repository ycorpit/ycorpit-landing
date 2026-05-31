import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" style={{ borderTop: "none" }}>
        <div className="container">
          <p className="eyebrow fade-up">Operations consulting · Global remote</p>
          <h1 className="fade-up d1">
            The operations team you <em>don&apos;t have to hire.</em>
          </h1>
          <p className="hero-sub fade-up d2">
            We audit, build, and run the systems behind your business. No middle managers. No long contracts. Fair pricing.
          </p>
          <div className="hero-actions fade-up d3">
            <Link href="/audit" className="btn btn-primary">Start a free audit →</Link>
            <a href="#process" className="btn-text">How it works ↓</a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="container">
          <div className="section-head">
            <p className="section-label mono"><span className="num">01</span>HOW IT WORKS</p>
            <h2 className="section-title">Audit first.<br />Then we <em className="accent-italic">execute.</em></h2>
          </div>
          <div className="process">
            <div />
            <div className="process-steps">
              <div className="step">
                <div className="step-num mono">01</div>
                <div>
                  <h3>Audit</h3>
                  <p>We map your operations end-to-end — interviews, walkthroughs, process mapping. We find where time and money are leaking before we propose anything.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num mono">02</div>
                <div>
                  <h3>Plan</h3>
                  <p>You get a prioritized list — quick wins you can act on this week, deeper fixes worth the investment. No 100-page deck, no consultant jargon.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num mono">03</div>
                <div>
                  <h3>Execute</h3>
                  <p>We build the automations, integrations, internal tools, or AI workflows that close the gap. Then we run them. You focus on growth.</p>
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
            <p className="section-label mono"><span className="num">02</span>WHY YCORPIT</p>
            <h2 className="section-title">Built for businesses that <em className="accent-italic">need it done.</em></h2>
          </div>
          <div className="diff-grid">
            <div />
            <div className="diff-list">
              <div className="diff-item">
                <h3>Direct contact</h3>
                <p>You talk to the people doing the work. No account managers, no PowerPoint theater, no &ldquo;I&apos;ll get back to you next quarter.&rdquo;</p>
              </div>
              <div className="diff-item">
                <h3>Global team</h3>
                <p>Specialists across timezones. While you sleep, work moves forward. We hire the best person for the job, not the closest one.</p>
              </div>
              <div className="diff-item">
                <h3>Fair pricing</h3>
                <p>We charge what work actually costs — not what a downtown office needs to break even. Senior talent at honest rates.</p>
              </div>
              <div className="diff-item">
                <h3>Audit first, always</h3>
                <p>Most &ldquo;AI consulting&rdquo; sells you a chatbot before understanding your business. We flip that — the right fix is often simpler than a $50k platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries">
        <div className="container">
          <div className="section-head">
            <p className="section-label mono"><span className="num">03</span>WHO WE WORK WITH</p>
            <h2 className="section-title">Operations-heavy <em className="accent-italic">businesses.</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem" }}>
            <div />
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem 2rem", marginBottom: "3rem" }}>
                {[
                  { icon: <path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />, label: "Healthcare" },
                  { icon: <><rect x="1" y="13" width="15" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M16 17h3l3-4v4h-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="5" cy="21" r="2" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="14" cy="21" r="2" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M1 9h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>, label: "Logistics" },
                  { icon: <><path d="M6 2h12l2 6H4L6 2z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M4 8v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>, label: "E-commerce" },
                  { icon: <><path d="M3 21h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M5 21V9l7-6 7 6v12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><rect x="9" y="14" width="6" height="7" fill="none" stroke="currentColor" strokeWidth="1.5"/></>, label: "Construction" },
                  { icon: <><rect x="2" y="7" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M12 12v4m-2-2h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>, label: "Prof. services" },
                  { icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></>, label: "Customer support" },
                  { icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></>, label: "Sales operations" },
                  { icon: <><polyline points="16 18 22 12 16 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="8 6 2 12 8 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></>, label: "SaaS" },
                ].map(({ icon, label }) => (
                  <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.75rem" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "var(--accent)", flexShrink: 0 }}>
                      {icon}
                    </svg>
                    <span style={{ fontSize: "0.875rem", color: "var(--muted)", fontFamily: "'Geist Mono', monospace", letterSpacing: "0.02em" }}>{label}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.7, maxWidth: "52ch" }}>
                The ones where the same problems keep showing up because no one has time to fix them properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="start">
        <div className="container">
          <h2>Tell us what&apos;s <em className="accent-italic">broken.</em></h2>
          <p>Fill out the audit form. You&apos;ll get an instant rough estimate and a detailed plan from our team within 24 hours.</p>
          <Link href="/audit" className="btn btn-primary">Start a free audit →</Link>
          <p className="cta-meta">
            Or email us at{" "}
            <a href="mailto:contacts@ycorpit.com">contacts@ycorpit.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
