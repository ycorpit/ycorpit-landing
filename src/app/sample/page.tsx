import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sample report — YCorpIT",
  description: "An example YCorpIT engagement — a FinOps audit and AI chatbot check, followed by a workflow automation project.",
};

export default function Sample() {
  return (
    <main>
      <section className="page-header" style={{ borderTop: "none" }}>
        <div className="container">
          <p className="eyebrow fade-up">Sample report · Illustrative example</p>
          <h1 className="fade-up d1">What an engagement <em className="accent-italic">looks like.</em></h1>
          <p className="lede fade-up d2">
            A FinOps audit and an AI chatbot check, followed by a workflow automation project — the kind of engagement that often shows up together. Here&apos;s how all three were scoped, priced, and tracked.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "5rem" }}>
        <div className="container-narrow">

          <div className="sample-banner">
            <span>ℹ️</span>
            <span><strong>Sample client.</strong> All names, figures, and other identifying details on this page have been modified for this example.</span>
          </div>

          <div className="report-section">
            <p className="report-meta"><strong>Client:</strong> name withheld (sample) · regional retail &amp; logistics company · ~120 staff, 6 locations</p>
            <p className="report-meta"><strong>Prepared by:</strong> YCorpIT LLC &nbsp;·&nbsp; <strong>Scope:</strong> FinOps audit of AWS infrastructure, AI Chatbot Quality Check, then a follow-on Workflow Automation project</p>
          </div>

          <div className="report-section">
            <h2>Executive summary</h2>
            <p>
              The FinOps audit found $54,600 a year in avoidable AWS spend. Separately, the AI Chatbot Quality Check found 9 customer-facing chatbot answers serious enough to create real business risk. The client approved the cloud fixes and the chatbot corrections. A follow-on Workflow Automation project then automated a manual invoice-matching process that was costing roughly $32,000 a year in staff time — cut to about $5,800 a year after automation.
            </p>
          </div>

          <div className="report-section">
            <h2>Part 1 — FinOps Audit</h2>
            <h3>Scope and method</h3>
            <p>We reviewed the client&apos;s AWS environment over a two-week window — this is the same audit-and-savings-fee structure as a Spend Audit, applied to cloud infrastructure instead of SaaS subscriptions.</p>
            <ul>
              <li>Read-only access to the AWS console: compute, storage, database, and billing</li>
              <li>Three months of AWS Cost Explorer data and the current Reserved Instance / Savings Plan coverage</li>
              <li>Instance-level utilization metrics (CPU, memory, network) over a 30-day sample</li>
            </ul>

            <h3>Cloud findings</h3>
            <div className="report-table-wrap">
              <table className="report-table">
                <thead>
                  <tr><th>Area</th><th>Finding</th><th>Savings/mo</th></tr>
                </thead>
                <tbody>
                  <tr><td>Compute (EC2)</td><td>Oversized instances running 24/7 at under 15% average utilization</td><td>$2,100</td></tr>
                  <tr><td>Reserved coverage</td><td>Steady-state workloads running entirely on-demand — no Savings Plan or Reserved Instances</td><td>$1,450</td></tr>
                  <tr><td>Storage</td><td>40+ orphaned EBS volumes and old snapshots with no attached instance</td><td>$380</td></tr>
                  <tr><td>Database (RDS)</td><td>Production database tier sized for peak season, left unchanged year-round</td><td>$420</td></tr>
                  <tr><td>Tooling overlap</td><td>Two monitoring/logging tools covering the same services</td><td>$200</td></tr>
                  <tr className="total"><td colSpan={2}>Total</td><td>$4,550/mo</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Savings and fee — FinOps audit only</h3>
            <div className="report-table-wrap">
              <table className="report-table">
                <tbody>
                  <tr><td>Cloud spend before audit</td><td>$14,200/mo</td></tr>
                  <tr><td>Cloud spend after audit</td><td>$9,650/mo</td></tr>
                  <tr className="highlight"><td>Difference</td><td>$4,550/mo = $54,600/yr</td></tr>
                </tbody>
              </table>
            </div>
            <div className="report-table-wrap">
              <table className="report-table">
                <tbody>
                  <tr><td>Onboarding fee, flat (quoted for this scope)</td><td>$1,500.00</td></tr>
                  <tr><td>Savings fee — 20% × $54,600</td><td>$10,920.00</td></tr>
                  <tr className="total"><td>Total FinOps fee, year one</td><td>$12,420.00</td></tr>
                  <tr className="highlight"><td>Client&apos;s net FinOps savings, year one</td><td>$42,180.00</td></tr>
                  <tr><td>Cloud savings each year after</td><td>$54,600, no further fee</td></tr>
                </tbody>
              </table>
            </div>
            <p>The FinOps onboarding fee is quoted per engagement based on infrastructure size and complexity, the same way a Spend Audit&apos;s $500 onboarding is sized for a smaller subscription review — the 20% savings fee works the same way in both.</p>
          </div>

          <div className="report-section">
            <h2>Part 2 — AI Chatbot Quality Check</h2>
            <p>Run separately from the FinOps audit, on a flat fee — this service isn&apos;t priced as a share of savings, since chatbot risk isn&apos;t measured in dollars saved.</p>
            <ul>
              <li>42 test scenarios run against the chatbot — pricing, returns, shipping cutoffs, loyalty program rules, and escalation handling</li>
            </ul>
            <h3>Chatbot findings</h3>
            <p>Of 42 test scenarios, 9 produced answers serious enough to flag — grouped below by category rather than quoted directly, since this is a modified example.</p>
            <div className="report-table-wrap">
              <table className="report-table">
                <thead>
                  <tr><th>Category</th><th>Scenarios tested</th><th>Failures</th><th>Risk</th></tr>
                </thead>
                <tbody>
                  <tr><td>Return &amp; refund policy</td><td>12</td><td>3</td><td>Quoted a return window longer than the actual policy</td></tr>
                  <tr><td>Pricing &amp; promotions</td><td>10</td><td>2</td><td>Referenced a discontinued promotion as still active</td></tr>
                  <tr><td>Shipping cutoffs</td><td>8</td><td>2</td><td>Gave conflicting same-day cutoff times across two answers</td></tr>
                  <tr><td>Escalation handling</td><td>6</td><td>2</td><td>Did not hand off to a human on a direct refund threat</td></tr>
                  <tr><td>Loyalty program rules</td><td>6</td><td>0</td><td>No issues found</td></tr>
                  <tr className="total"><td>Total</td><td>42</td><td>9</td><td></td></tr>
                </tbody>
              </table>
            </div>
            <div className="report-table-wrap">
              <table className="report-table">
                <tbody>
                  <tr><td>Test + fix, flat fee</td><td>$4,000.00</td></tr>
                </tbody>
              </table>
            </div>
            <p>All 9 chatbot issues were corrected in the client&apos;s prompt and knowledge-base configuration. The client added monthly chatbot monitoring afterward ($900 per 3-month block) to catch policy drift before it reaches customers.</p>
          </div>

          <div className="report-section">
            <h2>Combined year-one result</h2>
            <div className="report-table-wrap">
              <table className="report-table">
                <tbody>
                  <tr><td>FinOps audit fee</td><td>$12,420.00</td></tr>
                  <tr><td>Chatbot test + fix fee</td><td>$4,000.00</td></tr>
                  <tr className="total"><td>Total fees, year one</td><td>$16,420.00</td></tr>
                  <tr><td>Quantifiable savings (cloud only)</td><td>$54,600.00</td></tr>
                  <tr className="highlight"><td>Client&apos;s net result, year one</td><td>$38,180.00</td></tr>
                </tbody>
              </table>
            </div>
            <p>The chatbot check doesn&apos;t generate a dollar savings figure of its own — its value is the risk it closes, not money it frees up. The $38,180 net result above counts only the quantifiable FinOps savings against the combined fee for both services.</p>
          </div>

          <div className="report-section">
            <h2>Part 3 — Workflow Automation</h2>
            <p>After the audit, the client asked us to look at their manual supplier invoice process: matching incoming invoices to purchase orders and entering them into the accounting system by hand.</p>
            <h3>Baseline</h3>
            <div className="report-table-wrap">
              <table className="report-table">
                <tbody>
                  <tr><td>Staff involved</td><td>2</td></tr>
                  <tr><td>Combined time per week</td><td>22 hours</td></tr>
                  <tr><td>Loaded cost per year (baseline)</td><td>$32,032</td></tr>
                  <tr><td>Mismatched or duplicate entries per month</td><td>~6</td></tr>
                </tbody>
              </table>
            </div>
            <h3>What we built</h3>
            <p>An automation that pulls incoming invoices, matches them against open purchase orders, flags mismatches for human review, and enters clean matches directly into the accounting system — tested against three months of historical invoices before going live.</p>
            <h3>Result, tracked over 12 months</h3>
            <div className="report-table-wrap">
              <table className="report-table">
                <tbody>
                  <tr><td>Staff time after automation</td><td>~4 hours/week (review and exceptions only)</td></tr>
                  <tr><td>Loaded cost per year (after)</td><td>$5,824</td></tr>
                  <tr className="highlight"><td>Staff time freed per year, at loaded cost</td><td>$26,208</td></tr>
                  <tr><td>Mismatched or duplicate entries per month, after</td><td>0, sustained for all 12 tracked months</td></tr>
                  <tr><td>Project fee</td><td>$9,500, fixed</td></tr>
                  <tr><td>Guarantee</td><td>90 days free — no issues triggered during the guarantee period</td></tr>
                </tbody>
              </table>
            </div>
            <p>&ldquo;Staff time freed&rdquo; means the two employees stopped spending those 18 hours a week on manual invoice matching — the client reassigned that time to other work rather than reducing headcount. It&apos;s a real recovery of productive hours, not a cash refund.</p>
          </div>

          <div className="report-section">
            <h2>Verification and next steps</h2>
            <ul>
              <li><strong style={{ color: "var(--text)" }}>Cloud:</strong> billing checked quarterly to confirm reserved coverage and instance sizing hold.</li>
              <li><strong style={{ color: "var(--text)" }}>Chatbot:</strong> moved to monthly automated re-testing after the initial fix.</li>
              <li><strong style={{ color: "var(--text)" }}>Automation:</strong> tracked monthly against the original 22-hour baseline for the full 12 months.</li>
            </ul>
          </div>

          <div className="sample-banner">
            <span>ℹ️</span>
            <span><strong>Sample client.</strong> All names, figures, and other identifying details have been modified for this example.</span>
          </div>

          <div style={{ textAlign: "center", padding: "2rem 0 1rem" }}>
            <Link href="/contact" className="btn btn-primary">Get your free check →</Link>
            <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--dim)" }}>
              Or email{" "}
              <a href="mailto:contacts@ycorpit.com" style={{ color: "var(--muted)", borderBottom: "1px solid var(--border-hover)" }}>
                contacts@ycorpit.com
              </a>
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
