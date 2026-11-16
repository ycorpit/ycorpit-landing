import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & pricing — YCorpIT",
  description: "Spend Audit, AI Chatbot Quality Check, and Workflow Automation — plus FinOps audits and custom software by request. What's included and what it costs.",
};

const FAQS = [
  {
    q: "Can I combine the three packages?",
    a: ["Yes — each package is priced to stack. If you've already had a Spend Audit, adding a Chatbot Check or Workflow Automation comes at a discount, and bot monitoring drops from $900 to $300 per 3-month block when bundled with Workflow Automation. We'll quote the exact bundle price on your call."],
  },
  {
    q: "What if the Spend Audit doesn't find any savings?",
    a: ["Then you pay only the $500 onboarding fee and keep the full report. We don't charge the 20% success fee unless we actually find and implement savings for you."],
  },
  {
    q: "Do you cancel subscriptions without asking?",
    a: ["No. We hand you a report with every recommendation. Nothing gets cancelled, downgraded, or changed until you give written approval, line by line if you want it that way."],
  },
  {
    q: "Why does the Chatbot Check have a monitoring option?",
    a: ["Bots drift — a policy changes, a prompt gets edited, a new product launches, and suddenly the bot is answering from outdated rules. Monitoring re-tests it every month so you find out before a customer does. It's sold in 3-month blocks with no annual contract; renew or stop after each block."],
  },
  {
    q: "How is the Workflow Automation price set?",
    a: ["Every business's processes are different, so this one is a custom quote after we understand your workflow. You'll get an exact number before any work begins."],
  },
  {
    q: "What happens after the 90-day guarantee on automations?",
    a: ["Nothing changes unless you want it to. If you'd like us to keep maintaining or extending the automation, support is available in $600 three-month blocks, with no annual contract — stop anytime after a block ends."],
  },
];

export default function Services() {
  return (
    <main>
      <section className="page-header" style={{ borderTop: "none" }}>
        <div className="container">
          <p className="eyebrow fade-up">Services &amp; pricing</p>
          <h1 className="fade-up d1">Three problems. <em className="accent-italic">Honest pricing.</em></h1>
          <p className="lede fade-up d2">
            Each package solves one specific way your business loses money. Prices below are our standard starting rates — we quote exact numbers after a free call.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "5rem" }}>
        <div className="container">

          {/* SPEND AUDIT */}
          <div className="service-block" id="spend-audit">
            <div className="service-grid">
              <div className="service-meta">
                <p className="service-tag">Problem 1</p>
                <h2 className="service-title">Spend Audit</h2>
                <p className="service-price">$500 onboarding</p>
                <p className="service-price-note">+ 20% of savings we implement, in the first 12 months</p>
              </div>
              <div>
                <p className="service-desc">
                  &ldquo;Stop paying for software you don&apos;t use.&rdquo; We go through every software and AI subscription your business pays for — extra seats, duplicate tools, forgotten free trials that became paid plans, the wrong pricing tier, and logins for people who left months ago.
                </p>
                <p className="service-section-label">WHAT YOU GET</p>
                <ul className="service-includes">
                  <li>A full inventory of your software and AI subscriptions</li>
                  <li>A report showing exactly where money is being wasted, in dollars</li>
                  <li>Cancellations and downgrades handled by us, with your written sign-off first</li>
                  <li>Nothing changed without your approval, item by item</li>
                </ul>
                <p className="service-section-label">HOW IT&apos;S PRICED</p>
                <dl className="terms-grid">
                  <dt>ONBOARDING</dt>
                  <dd>$500, due before we start. Covers the audit itself.</dd>
                  <dt>SUCCESS FEE</dt>
                  <dd>20% of the savings from changes we actually implement, measured over your first 12 months.</dd>
                  <dt>IF YOU PASS</dt>
                  <dd>If you decide not to act on a specific recommendation, that one is billed at 10% of the savings we identified instead of 20%.</dd>
                  <dt>NO SAVINGS FOUND</dt>
                  <dd>You pay only the $500 onboarding and keep the full report — no success fee.</dd>
                </dl>
              </div>
            </div>
          </div>

          {/* CHATBOT CHECK */}
          <div className="service-block" id="chatbot-check">
            <div className="service-grid">
              <div className="service-meta">
                <p className="service-tag">Problem 2</p>
                <h2 className="service-title">AI Chatbot Quality Check</h2>
                <p className="service-price">$1,500 – $4,000</p>
                <p className="service-price-note">test only, or test + fix</p>
              </div>
              <div>
                <p className="service-desc">
                  &ldquo;Make sure your bot isn&apos;t making things up.&rdquo; We run your customer-facing chatbot through dozens of test scenarios — pricing, store policies, returns, deliberately difficult edge cases, and whether it knows when to hand off to a human — checking every answer against your actual rules. This catches costly mistakes before a customer acts on bad information, and confirms your policies are actually being followed.
                </p>
                <p className="service-section-label">WHAT YOU GET</p>
                <ul className="service-includes">
                  <li>A report with your bot&apos;s worst answers, quoted word for word</li>
                  <li>A plain-English breakdown of the business risk each one creates</li>
                  <li>Concrete fixes for each issue found</li>
                  <li>Optional: we implement the fixes to prompts and settings ourselves</li>
                </ul>
                <p className="service-section-label">HOW IT&apos;S PRICED</p>
                <dl className="terms-grid">
                  <dt>TEST ONLY</dt>
                  <dd>$1,500 flat. You get the findings report; your team makes the fixes.</dd>
                  <dt>TEST + FIX</dt>
                  <dd>$4,000 flat. We also implement the prompt and setting changes ourselves.</dd>
                  <dt>MONITORING</dt>
                  <dd>$900 per 3-month block — we automatically re-test monthly and send a report. No annual contract; renew or stop after each block.</dd>
                </dl>
                <div className="bundle-note">
                  <span>💡</span>
                  <span><strong>Bundle discount:</strong> add a Spend Audit alongside your Chatbot Check and we&apos;ll discount it on your quote.</span>
                </div>
              </div>
            </div>
          </div>

          {/* WORKFLOW AUTOMATION */}
          <div className="service-block" id="workflow-automation">
            <div className="service-grid">
              <div className="service-meta">
                <p className="service-tag">Problem 3</p>
                <h2 className="service-title">Workflow Automation</h2>
                <p className="service-price">Custom quote</p>
              </div>
              <div>
                <p className="service-desc">
                  &ldquo;Get your team&apos;s hours back.&rdquo; We break down a manual process, measure exactly how many hours and dollars it costs you today, and build automations custom to how your business actually works — tested so they don&apos;t quietly break in three months.
                </p>
                <p className="service-section-label">WHAT YOU GET</p>
                <ul className="service-includes">
                  <li>A clear baseline: hours and dollars the process costs you right now</li>
                  <li>Custom automation built and tested for your exact workflow</li>
                  <li>12 months of tracking the result against that baseline — included in the price</li>
                  <li>A free 90-day guarantee covering any mistakes on our end</li>
                </ul>
                <p className="service-section-label">HOW IT&apos;S PRICED</p>
                <dl className="terms-grid">
                  <dt>PROJECT FEE</dt>
                  <dd>Custom quote after we understand the process. You&apos;ll get an exact number before any work begins.</dd>
                  <dt>GUARANTEE</dt>
                  <dd>90 days, free, covering anything that&apos;s our mistake.</dd>
                  <dt>SUPPORT AFTER</dt>
                  <dd>$600 per 3-month block once the guarantee ends. No annual contract; stop anytime after a block.</dd>
                </dl>
                <div className="bundle-note">
                  <span>💡</span>
                  <span><strong>Bundle discount:</strong> Spend Audit and Chatbot Check are discounted when added to a Workflow Automation engagement — and bot monitoring drops from $900 to $300 per 3-month block.</span>
                </div>
              </div>
            </div>
          </div>

          {/* FINOPS AUDIT */}
          <div className="service-block" id="finops-audit">
            <div className="service-grid">
              <div className="service-meta">
                <p className="service-tag">By request</p>
                <h2 className="service-title">FinOps Audit</h2>
                <p className="service-price">Custom quote</p>
              </div>
              <div>
                <p className="service-desc">
                  For businesses running real cloud infrastructure, not just SaaS subscriptions. We dig into your cloud bill — AWS, Azure, or GCP — the same way we dig into software subscriptions: right-sizing instances, catching unused or orphaned resources, fixing reserved-capacity and commitment mismatches, and cleaning up billing anomalies that build up over time.
                </p>
                <p className="service-section-label">WHAT YOU GET</p>
                <ul className="service-includes">
                  <li>A full inventory of what you&apos;re running and what&apos;s actually using it</li>
                  <li>Right-sizing and reserved-capacity recommendations with projected savings</li>
                  <li>Unused and orphaned resources flagged for removal</li>
                  <li>A plain-English report — no cloud certification required to read it</li>
                </ul>
                <p className="service-section-label">HOW IT&apos;S PRICED</p>
                <dl className="terms-grid">
                  <dt>PRICING</dt>
                  <dd>Custom quote after a short infrastructure review — priced the same way as a Spend Audit: a flat onboarding fee plus a share of what we actually save you.</dd>
                </dl>
              </div>
            </div>
          </div>

          {/* CUSTOM SOFTWARE */}
          <div className="service-block" id="custom-software">
            <div className="service-grid">
              <div className="service-meta">
                <p className="service-tag">By request</p>
                <h2 className="service-title">Custom Software</h2>
                <p className="service-price">Custom quote</p>
              </div>
              <div>
                <p className="service-desc">
                  For when off-the-shelf automation isn&apos;t enough — a dashboard nobody sells, an internal tool that bridges two systems that were never meant to talk to each other, a process that needs real software instead of a workflow trigger. We build it, test it, and hand it over working.
                </p>
                <p className="service-section-label">WHAT YOU GET</p>
                <ul className="service-includes">
                  <li>A scoped, fixed-price project — no open-ended hourly billing</li>
                  <li>Software built and tested for your exact use case</li>
                  <li>Documentation and a walkthrough, not just a login</li>
                  <li>You own the code once the project is complete</li>
                </ul>
                <p className="service-section-label">HOW IT&apos;S PRICED</p>
                <dl className="terms-grid">
                  <dt>PROJECT FEE</dt>
                  <dd>Custom quote after we scope the build. Fixed price, agreed in writing before work starts.</dd>
                </dl>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head">
            <p className="section-label"><span className="num">?</span>PRICING FAQ</p>
            <h2 className="section-title">Questions about <em className="accent-italic">how this works.</em></h2>
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
            Not sure which one <em className="accent-italic">you need?</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "48ch", margin: "0 auto 2.5rem" }}>
            Email us or book a 20-minute call and tell us what&apos;s bothering you — we&apos;ll tell you which package fits, or if you don&apos;t need one at all.
          </p>
          <Link href="/contact" className="btn btn-primary">Get your free check →</Link>
        </div>
      </section>
    </main>
  );
}
