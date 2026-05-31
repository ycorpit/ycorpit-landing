import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Ycorpit",
  description: "Operations audits, turnkey builds, AI agent setup, and ongoing operations. Transparent pricing, fixed-price projects, month-to-month retainers.",
};

const SERVICES = [
  {
    id: "onboarding",
    tag: "PREREQUISITE",
    title: "Onboarding",
    price: "from $1,500",
    priceNote: "One-time. Non-refundable.",
    desc: "Before any paid work begins, we onboard you formally. NDA signed, access provisioned, stakeholders interviewed, kickoff scheduled. This is the bridge from free conversation to billable work — and it's where we eliminate surprises on both sides.",
    includesLabel: "WHAT'S INCLUDED",
    includes: [
      "Mutual NDA, signed digitally",
      "Kickoff call with all key stakeholders",
      "Tool, system, and document access setup",
      "Operational inventory (what you have, what you use)",
      "Scope confirmation for the engagement that follows",
    ],
    terms: [
      { dt: "FEE", dd: "Non-refundable, paid before work begins." },
      { dt: "TIMING", dd: "Completed in 5–7 business days." },
      { dt: "OUTCOME", dd: "You receive a signed engagement letter for the next phase." },
    ],
  },
  {
    id: "audit",
    tag: "CORE SERVICE",
    title: "Operations Audit",
    price: "from $5,000",
    priceNote: "Refundable if no 2× ROI projection.",
    desc: "The deep work. We map your operations end-to-end, interview your team, walk through your tools, and produce a prioritized findings report with measurable ROI projections. You can act on it yourself, hand it back to us for execution, or take it to another team — your call.",
    includesLabel: "WHAT'S INCLUDED",
    includes: [
      "Stakeholder interviews (founders, ops leads, frontline staff)",
      "Current-state process mapping",
      "Bottleneck, waste, and risk identification",
      "Prioritized recommendations matrix (impact × effort)",
      "ROI projection per recommendation",
      "Quick-win list — changes you can make this week",
      "Final audit report (delivered as PDF and live document)",
      "Walkthrough call with full Q&A",
    ],
    terms: [
      { dt: "TIMING", dd: "2–4 weeks depending on company size and scope." },
      { dt: "GUARANTEE", dd: "If our recommendations don't show projected savings of at least 2× your audit fee, we refund the audit fee in full." },
      { dt: "OWNERSHIP", dd: "The report and all artifacts are yours to keep regardless of next steps." },
    ],
  },
  {
    id: "build",
    tag: "EXECUTION",
    title: "Turnkey projects",
    price: "from $8,000",
    priceNote: "Fixed price · 30/40/30 milestones.",
    desc: "We build what the audit calls for — or what you already know needs building. Custom automations, system integrations, internal tools, dashboards, AI workflows. One project, fixed scope, fixed price. No \"we'll bill the hours.\"",
    includesLabel: "TYPICAL PROJECTS",
    includes: [
      "Workflow automation across existing tools (Zapier/Make/custom)",
      "System integrations (CRM ↔ accounting ↔ ops platforms)",
      "Internal dashboards and operational reporting",
      "Custom internal tools (admin panels, intake forms, etc.)",
      "AI workflows for repetitive operational tasks",
      "Process redesign with supporting tooling",
    ],
    terms: [
      { dt: "PRICING", dd: "Fixed price quoted after scoping. No \"discovery surcharges.\"" },
      { dt: "PAYMENT", dd: "30% on signature. 40% at midpoint deliverable. 30% on final acceptance." },
      { dt: "TIMING", dd: "Typically 4–12 weeks depending on scope." },
      { dt: "OWNERSHIP", dd: "You own the code, configuration, and documentation upon final payment." },
      { dt: "SUPPORT", dd: "30 days post-launch support included." },
    ],
  },
  {
    id: "ai",
    tag: "SPECIALIZATION",
    title: "AI agent setup",
    price: "from $8,000",
    priceNote: "Production-grade. No demoware.",
    desc: "AI used as a tool, not a sales pitch. We build production AI workflows that handle specific, scoped operational tasks — with monitoring, safety rails, fallback paths, and clear ownership. If AI isn't the right fix, we tell you, and we don't build it.",
    includesLabel: "WHAT WE BUILD",
    includes: [
      "Document and email processing agents",
      "Customer support triage and routing",
      "Quality-check and review agents",
      "Internal-knowledge retrieval systems",
      "Multi-step workflow agents with human-in-the-loop checkpoints",
    ],
    terms: [
      { dt: "STRUCTURE", dd: "Turnkey project structure: fixed price, 30/40/30 milestones." },
      { dt: "MONITORING", dd: "Includes basic observability dashboard so you can see what the AI is doing." },
      { dt: "HONESTY", dd: "If AI isn't the right answer for your problem, we'll tell you in the audit." },
    ],
  },
  {
    id: "docs",
    tag: "FOUNDATIONAL",
    title: "Documentation",
    price: "from $5,000",
    priceNote: "Often bundled with other engagements.",
    desc: "The work nobody wants to do. We turn the knowledge that lives in your founders' heads into runbooks, SOPs, and decision trees that your team can actually follow. Documentation that survives turnover.",
    includesLabel: "DELIVERABLES",
    includes: [
      "Standard Operating Procedures (SOPs) for key workflows",
      "Runbooks for recurring operational tasks",
      "Decision trees and escalation paths",
      "Onboarding documentation for new hires",
      "Owned in your platform of choice (Notion, Google Docs, Confluence)",
    ],
    terms: [],
  },
  {
    id: "ongoing",
    tag: "CONTINUOUS",
    title: "Ongoing operations",
    price: "from $5,000/mo",
    priceNote: "3-month minimum, then month-to-month.",
    desc: "We run your operations for you. Continuous improvement, automation building and maintenance, monitoring, execution. The team you don't have to hire — and don't get locked into.",
    includesLabel: "WHAT'S INCLUDED",
    includes: [
      "Dedicated operations specialist + backing team",
      "Continuous process improvement",
      "Building and maintaining automations as needs evolve",
      "Monthly strategy calls and progress reports",
      "Slack/email coverage across timezones",
      "Quarterly business review with ROI tracking",
    ],
    terms: [
      { dt: "MINIMUM", dd: "3-month initial commitment. After that, month-to-month." },
      { dt: "NOTICE", dd: "30 days written notice to cancel after the initial 3 months." },
      { dt: "OWNERSHIP", dd: "You own all work products. If you leave, we hand over everything — code, configs, docs." },
      { dt: "SCALING", dd: "Retainer can be scaled up or down month-to-month after the initial period." },
    ],
  },
];

const DONT_DO = [
  "Marketing campaigns, branding, or graphic design",
  "Bookkeeping or financial advisory",
  "HR, recruiting, or payroll services",
  "Legal advice or contract drafting",
  "Hardware procurement or general IT support",
  "Replacing your in-house engineering team",
  "Generic \"AI strategy\" decks without execution",
];

export default function Services() {
  return (
    <main>
      <section className="page-header" style={{ borderTop: "none" }}>
        <div className="container">
          <p className="eyebrow fade-up">Services &amp; pricing</p>
          <h1 className="fade-up d1">Five engagements. <em className="accent-italic">Transparent pricing.</em></h1>
          <p className="lede fade-up d2">
            Every engagement starts with a free first-look. After that, you choose how deep you want to go. Pricing below is honest — final quote may sit anywhere in the listed range depending on scope and complexity.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "6rem" }}>
        <div className="container">
          {SERVICES.map((s) => (
            <div className="service-block" key={s.id} id={s.id}>
              <div className="service-grid">
                <div className="service-meta">
                  <p className="service-tag">{s.tag}</p>
                  <h2 className="service-title">{s.title}</h2>
                  <p className="service-price">{s.price}</p>
                  <p className="service-price-note">{s.priceNote}</p>
                </div>
                <div>
                  <p className="service-desc">{s.desc}</p>
                  <p className="service-section-label">{s.includesLabel}</p>
                  <ul className="service-includes">
                    {s.includes.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {s.terms.length > 0 && (
                    <>
                      <p className="service-section-label">TERMS</p>
                      <dl className="terms-grid">
                        {s.terms.map(({ dt, dd }) => (
                          <>
                            <dt key={`dt-${dt}`}>{dt}</dt>
                            <dd key={`dd-${dt}`}>{dd}</dd>
                          </>
                        ))}
                      </dl>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DON'T DO */}
      <section style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">!</span>WHAT WE DON&apos;T DO</p>
            <h2 className="section-title">Focus comes from <em className="accent-italic">saying no.</em></h2>
          </div>
          <div className="feature-grid">
            <div />
            <div style={{ maxWidth: "60ch" }}>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {DONT_DO.map((item) => (
                  <li key={item} style={{ padding: "1rem 0", borderBottom: "1px solid var(--border)", display: "flex", gap: "1rem" }}>
                    <span style={{ color: "var(--danger)", flexShrink: 0 }}>✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "2rem", fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.7 }}>
                We do operations. Deep. If your problem is outside this list, we&apos;ll tell you and recommend someone who&apos;s actually good at it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="section-title" style={{ maxWidth: "22ch", margin: "0 auto 1.5rem" }}>
            Pricing should match <em className="accent-italic">your scope, not our hours.</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "48ch", margin: "0 auto 3rem" }}>
            Start the audit form. You&apos;ll get a rough estimate instantly, refined within 48 hours.
          </p>
          <Link href="/audit" className="btn btn-primary">Start a free audit →</Link>
        </div>
      </section>
    </main>
  );
}
