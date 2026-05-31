import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Ycorpit",
  description: "Engineers from large tech companies, building operations consulting the way we'd want it for ourselves.",
};

export default function About() {
  return (
    <main>
      <section className="page-header" style={{ borderTop: "none" }}>
        <div className="container">
          <p className="eyebrow fade-up">About Ycorpit</p>
          <h1 className="fade-up d1">
            Engineers who got tired of watching SMBs <em className="accent-italic">drown in busywork.</em>
          </h1>
          <p className="lede fade-up d2">
            We&apos;ve spent over a decade inside large tech companies — building software, running quality, owning infrastructure, securing systems. We saw how broken processes are normalized at scale, hidden by headcount and budget. We left to fix it where it actually matters: in the small and mid-sized businesses where one improvement changes the whole company.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section>
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">01</span>WHO WE ARE</p>
            <h2 className="section-title">A collective of engineers <em className="accent-italic">and operators.</em></h2>
          </div>
          <div className="feature-grid">
            <div />
            <div style={{ maxWidth: "60ch" }}>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Ycorpit is a collective of specialists with deep backgrounds across <strong style={{ color: "var(--text)" }}>software development, quality engineering, infrastructure, security, business analysis, product ownership, and project management</strong> — most of it at established tech companies where systems run at scale.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                We cover both the technical and the organizational sides of operations. Whether the bottleneck is in the tooling or in how work is defined and managed — we&apos;ve seen it and fixed it before.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                When a project lands, we bring in the right specialists from our network — people we&apos;ve worked with for years. No random freelancers, no agency middlemen, no surprise handoffs.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75 }}>
                Everyone you talk to is someone doing actual work on your project. That&apos;s the whole structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">02</span>BACKGROUND</p>
            <h2 className="section-title">Deep expertise, <em className="accent-italic">used pragmatically.</em></h2>
          </div>
          <div className="feature-grid">
            <div />
            <div className="feature-list">
              {[
                { title: "Software development", desc: "Production systems, distributed architectures, CI/CD pipelines, and the kind of code that runs every day without anyone touching it." },
                { title: "Quality engineering", desc: "SDET-level test automation, performance engineering, observability. We know how to measure systems and the people who run them." },
                { title: "Cloud infrastructure", desc: "AWS-certified (Solutions Architect Associate), with hands-on experience across compute, networking, security, and cost optimization at scale." },
                { title: "Security", desc: "Identity & access management, secure configuration, threat modeling. Your data is treated the way our former employers required us to treat theirs." },
                { title: "AI & automation", desc: "Production-grade AI workflows. We've built and shipped real systems — not slideware. We know what AI actually does well and where it fails." },
                { title: "Process design", desc: "Process mapping, root-cause analysis, bottleneck identification. The unglamorous work that makes a business actually scale." },
                { title: "Business analysis", desc: "Requirements elicitation, gap analysis, stakeholder mapping. We translate business needs into concrete, actionable specifications — no ambiguity in what gets built." },
                { title: "Product ownership", desc: "Backlog management, prioritization frameworks, acceptance criteria. We know how to own a roadmap and make the right trade-offs under real-world constraints." },
                { title: "Project management", desc: "Delivery planning, risk management, cross-team coordination. We've run complex multi-party projects and know how to keep them on track without micromanagement." },
              ].map(({ title, desc }) => (
                <div className="feature-item" key={title}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE DO THIS */}
      <section>
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">03</span>WHY WE DO THIS</p>
            <h2 className="section-title">SMBs deserve the systems <em className="accent-italic">big companies take for granted.</em></h2>
          </div>
          <div className="feature-grid">
            <div />
            <div style={{ maxWidth: "60ch" }}>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Inside a 50,000-person company, fixing a broken process is a 6-month political project. Layers of directors. Approval chains. Vendor RFPs. By the time anything moves, the problem has mutated.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Inside a 30-person company, the same fix takes a week — if the right person is available. Usually they aren&apos;t. So the broken process becomes &ldquo;how we do things,&rdquo; and everyone learns to live with it.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                That&apos;s where we come in. We bring the operational discipline of large companies, applied at small-company speed. No bureaucracy, no PowerPoint quarter, no consulting theater.
              </p>
              <p style={{ fontSize: "1.15rem", color: "var(--text)", lineHeight: 1.6, marginTop: "2.5rem", fontFamily: "'Fraunces', serif", fontStyle: "italic", fontWeight: 300 }}>
                &ldquo;If we can&apos;t find work worth doing, we give your money back. We&apos;re not here to bill hours — we&apos;re here to fix things.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="section-title" style={{ maxWidth: "22ch", margin: "0 auto 1.5rem" }}>
            Want to see what we&apos;d <em className="accent-italic">find in your business?</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "44ch", margin: "0 auto 3rem" }}>
            Fill out the audit form. Free first-look within 48 hours.
          </p>
          <Link href="/audit" className="btn btn-primary">Start a free audit →</Link>
        </div>
      </section>
    </main>
  );
}
