"use client";
import { useState } from "react";

const INTERESTS = [
  { val: "spend", label: "Spend Audit" },
  { val: "chatbot", label: "AI Chatbot Check" },
  { val: "automation", label: "Workflow Automation" },
  { val: "unsure", label: "Not sure yet" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  function toggleInterest(val: string) {
    setInterests((prev) => prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      company: (fd.get("company") as string) || "",
      interests: interests.join(", ") || "Not specified",
      message: fd.get("message") as string,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Something went wrong. Try emailing us directly.");
      }
    } catch {
      setError("Something went wrong. Try emailing us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="page-header" style={{ borderTop: "none", paddingBottom: "3rem" }}>
        <div className="container">
          <p className="eyebrow fade-up">Contact</p>
          <h1 className="fade-up d1">
            Let&apos;s talk about where <em className="accent-italic">you&apos;re losing money.</em>
          </h1>
          <p className="lede fade-up d2" style={{ maxWidth: "48ch" }}>
            Book a free 20-minute call directly, or send us a message. We reply within 24 hours.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0, paddingBottom: "6rem" }}>
        <div className="container">
          <div className="contact-split">

            {/* LEFT — booking */}
            <div className="contact-book">
              <a href="https://cal.com/ycorpit-contacts" target="_blank" rel="noopener noreferrer" className="cal-card">
                <div className="cal-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div>
                  <p className="cal-card-title">Book a free 20-min call</p>
                  <p className="cal-card-sub">Pick a slot that works for you</p>
                </div>
                <svg className="cal-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <div className="contact-divider">
                <span>or send a message</span>
              </div>

              <div style={{ paddingTop: "1.5rem" }}>
                <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7 }}>
                  Not ready for a call? Fill out the form and we&apos;ll reply with an initial read on your situation, by email.
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--dim)", marginTop: "1.5rem" }}>
                  contacts@ycorpit.com
                </p>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="contact-form-card">
              {sent ? (
                <div className="contact-sent">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p className="contact-sent-title">Message sent.</p>
                  <p className="contact-sent-sub">We&apos;ll reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="cf-row">
                    <div className="cf-field">
                      <label className="cf-label">Name <span className="cf-req">*</span></label>
                      <input className="cf-input" type="text" name="name" required placeholder="Jane Smith" />
                    </div>
                    <div className="cf-field">
                      <label className="cf-label">Email <span className="cf-req">*</span></label>
                      <input className="cf-input" type="email" name="email" required placeholder="jane@company.com" />
                    </div>
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">Company <span className="cf-opt">(optional)</span></label>
                    <input className="cf-input" type="text" name="company" placeholder="Acme Dental" />
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">What do you want checked?</label>
                    <div className="chips">
                      {INTERESTS.map(({ val, label }) => (
                        <label className="chip" key={val}>
                          <input type="checkbox" checked={interests.includes(val)} onChange={() => toggleInterest(val)} />
                          <span>{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">What can we help with? <span className="cf-req">*</span></label>
                    <textarea className="cf-textarea" name="message" required placeholder="Briefly describe what's bothering you — a software bill, a chatbot, a slow process..." />
                  </div>
                  {error && <p className="cf-error">{error}</p>}
                  <button type="submit" className="cf-submit" disabled={loading}>
                    {loading ? "Sending…" : "Send message →"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
