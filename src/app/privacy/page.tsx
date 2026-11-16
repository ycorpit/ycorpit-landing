import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — YCorpIT",
  description: "Privacy Policy for YCorpIT LLC.",
};

export default function Privacy() {
  return (
    <main>
      <section className="page-header" style={{ borderTop: "none" }}>
        <div className="container">
          <p className="eyebrow fade-up">Legal</p>
          <h1 className="fade-up d1">Privacy Policy</h1>
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
            <h2>1. What we collect</h2>
            <p>When you fill out our contact form or book a call, we collect what you give us directly: your name, email, company, and whatever you tell us about your business problem. If you become a client, we also receive whatever business data is needed for your specific engagement — for example, software billing records for a Spend Audit, or chatbot conversation logs for a Chatbot Check — always under a signed NDA and only what&apos;s needed for that engagement.</p>

            <h2>2. How we use it</h2>
            <p>We use your information to respond to your inquiry, deliver the engagement you&apos;ve signed up for, send invoices through Stripe, and communicate about ongoing work. We use Anthropic&apos;s Claude API to help draft an initial internal read of new inquiries — your message is sent to that API for this purpose, and is not used to train any model.</p>

            <h2>3. Who we share it with</h2>
            <p>We share data only with the service providers needed to run YCorpIT: Stripe (billing), our email/SMTP provider (sending correspondence), and Anthropic (drafting assistance, as above). We do not sell your data, and we do not share it with data brokers or advertisers.</p>

            <h2>4. Data from audits and access</h2>
            <p>Any read-only access granted for an engagement (subscription accounts, chatbot logs, process documentation) is used solely to deliver that engagement. Access is revoked when the engagement ends. We do not retain copies beyond what&apos;s needed to support the agreed 12-month tracking period, where applicable.</p>

            <h2>5. Cookies and analytics</h2>
            <p>This site does not use advertising or tracking cookies. Our hosting provider may collect basic, aggregated technical logs (e.g., page requests) for operating the site.</p>

            <h2>6. Data retention</h2>
            <p>We keep contact and engagement records for as long as needed to deliver the service, meet our contractual tracking commitments, and satisfy legal and accounting requirements, after which we delete or anonymize them.</p>

            <h2>7. Your rights</h2>
            <p>You can ask us what information we hold about you, request a correction, or request deletion (subject to records we&apos;re required to keep) by emailing us.</p>

            <h2>8. Contact</h2>
            <p>Questions about this policy or your data: <a href="mailto:contacts@ycorpit.com" style={{ color: "var(--accent)" }}>contacts@ycorpit.com</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
