import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — YCorpIT",
  description: "Terms of Service for YCorpIT LLC.",
};

export default function Terms() {
  return (
    <main>
      <section className="page-header" style={{ borderTop: "none" }}>
        <div className="container">
          <p className="eyebrow fade-up">Legal</p>
          <h1 className="fade-up d1">Terms of Service</h1>
          <p className="lede fade-up d2">Last updated November 2026.</p>
        </div>
      </section>

      <section>
        <div className="container-narrow">
          <div className="draft-banner">
            <span>⚠️</span>
            <span><strong>Draft — pending attorney review.</strong> This page is a placeholder based on how we actually operate. It has not yet been reviewed by a lawyer and should not be treated as final until it is.</span>
          </div>

          <div className="legal-body">
            <h2>1. Who we are</h2>
            <p>YCorpIT LLC (&ldquo;YCorpIT,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) is a Texas limited liability company providing IT consulting services to small and mid-sized businesses: software spend audits, AI chatbot quality testing, and business process automation. These Terms govern any engagement between YCorpIT and a client (&ldquo;you&rdquo;).</p>

            <h2>2. Services</h2>
            <p>Each engagement — Spend Audit, AI Chatbot Quality Check, or Workflow Automation — is described in detail on our Services page. The specific scope, deliverables, and price for your engagement will be confirmed in writing (email or a signed statement of work) before any billable work begins.</p>

            <h2>3. Payment</h2>
            <p>Fees are billed through Stripe via invoice, card, or ACH, as agreed per engagement. Onboarding and project fees are generally due before work begins. Recurring add-ons (chatbot monitoring, post-guarantee automation support) are billed in 3-month blocks with no automatic annual renewal; they end automatically unless you choose to renew.</p>
            <p>Success fees (such as the Spend Audit savings percentage) are calculated and invoiced after savings are realized, as described on the Services page.</p>

            <h2>4. Authorization to make changes</h2>
            <p>We will not cancel, downgrade, or modify any subscription, prompt, configuration, or system on your behalf without your prior written approval, item by item.</p>

            <h2>5. Confidentiality</h2>
            <p>Before we access anything, we sign a mutual non-disclosure agreement. We will not use your confidential information for any purpose other than delivering the agreed engagement, and we will not train AI models on your data.</p>

            <h2>6. Ownership</h2>
            <p>Reports, automations, and other deliverables we create for you are yours upon completion of the engagement and payment of applicable fees.</p>

            <h2>7. Guarantees and limits</h2>
            <p>Specific guarantees (such as the Spend Audit no-savings-no-fee structure or the 90-day automation guarantee) are described on our Services and How It Works pages and form part of these Terms for the relevant engagement. Outside of those stated guarantees, services are provided on an &ldquo;as-is&rdquo; basis and we are not liable for indirect, incidental, or consequential damages.</p>

            <h2>8. Termination</h2>
            <p>Either party may end an engagement with written notice, subject to payment for work already completed. Recurring 3-month blocks (monitoring, support) can be cancelled to not renew at the end of the current block.</p>

            <h2>9. Governing law</h2>
            <p>These Terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles.</p>

            <h2>10. Changes to these Terms</h2>
            <p>We may update these Terms from time to time. Material changes will be communicated by email to active clients.</p>

            <h2>11. Contact</h2>
            <p>Questions about these Terms: <a href="mailto:contacts@ycorpit.com" style={{ color: "var(--accent)" }}>contacts@ycorpit.com</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
