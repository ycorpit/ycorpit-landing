"use client";
import { useState, useRef } from "react";

type View = "form" | "loading" | "result";

interface Estimate {
  name: string;
  range: string;
  qualifier: string;
  desc: string;
  includes: string[];
  note: string;
}

const industryWeight: Record<string, number> = {
  healthcare: 1.4, logistics: 1.3, ecommerce: 1.2, construction: 1.2,
  sales: 1.1, support: 1.0, services: 1.0, tech: 1.1, other: 1.0,
};

const sizeWeight: Record<string, number> = { solo: 0.7, small: 1.0, medium: 1.5, large: 2.2 };

function calculateEstimate(data: { industry: string; teamSize: string; goals: string[]; budget: string; problem: string }): Estimate {
  let complexity = (industryWeight[data.industry] || 1.0) * (sizeWeight[data.teamSize] || 1.0);
  complexity *= 1 + (Math.max(data.goals.length, 1) - 1) * 0.25;

  const wantsOps = data.goals.includes("ops");
  const wantsBuild = ["automate", "integrate", "ai", "redesign"].some((g) => data.goals.includes(g));
  const tier = wantsOps ? "ongoing" : wantsBuild ? "build" : "audit";

  const tiers = {
    audit: { base: 800, mult: 1.8, name: "DISCOVERY AUDIT", qualifier: "one-time", desc: "A focused 2–3 week deep dive into your operations. We map current state, identify what's costing you time and money, and deliver a prioritized plan you can act on yourself or hand back to us.", includes: ["Stakeholder interviews + process walkthroughs", "Current-state process map", "Bottleneck + waste analysis", "Prioritized recommendations with ROI estimates", "Quick-win list (changes you can make this week)"] },
    build: { base: 3500, mult: 2.5, name: "AUDIT + BUILD", qualifier: "one-time", desc: "We audit first, then build. Automations, integrations, internal tools, or AI workflows — whatever closes the gap. One project, fixed scope, clear deliverables.", includes: ["Full discovery audit included", "Custom build (automation / integration / tool)", "AI integration where it makes sense", "Documentation + handoff training", "30 days post-launch support"] },
    ongoing: { base: 2500, mult: 2.2, name: "ONGOING OPERATIONS", qualifier: "per month", desc: "We run your operations for you. Continuous improvement, automation, monitoring, execution — month after month. The team you don't have to hire.", includes: ["Initial audit + setup included", "Dedicated operations specialist + team", "Continuous process improvement", "Build + maintain automations as needs evolve", "Monthly strategy calls + reports", "24/7 global team coverage"] },
  };

  const t = tiers[tier];
  const low = Math.round((t.base * complexity) / 100) * 100;
  const high = Math.round((t.base * complexity * t.mult) / 100) * 100;

  const budgetMap: Record<string, number | null> = { small: 2000, mid: 10000, large: 50000, enterprise: 100000, unsure: null };
  const userBudget = budgetMap[data.budget] ?? null;

  let note = "This is a rough estimate based on what you've shared. Your scope might be tighter or wider — our team will send a precise quote within 24 hours.";
  if (userBudget !== null) {
    if (tier === "ongoing") note = "Monthly ongoing engagements are scoped after the initial audit, so the final number depends on what we find. The range above is typical for businesses like yours.";
    else if (userBudget < low * 0.7) note = "Your budget sits below this range, but we can still help. We'll suggest a narrower scope — start with the highest-ROI fix, expand from there. Details in our follow-up.";
    else if (userBudget > low * 3) note = "Your budget gives us room for a phased plan — start with audit, expand into build and ongoing ops. We'll outline options in our follow-up.";
    else note = "Your budget aligns well with this scope. We'll send a precise breakdown within 24 hours, including milestones and timeline.";
  }

  return { name: t.name, range: `$${low.toLocaleString("en-US")} – $${high.toLocaleString("en-US")}`, qualifier: t.qualifier, desc: t.desc, includes: t.includes, note };
}

export default function Audit() {
  const [view, setView] = useState<View>("form");
  const [estimate, setEstimate] = useState<Estimate | null>(null);
  const [loadingText, setLoadingText] = useState("Reviewing your inputs.");
  const [goals, setGoals] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function toggleGoal(val: string) {
    setGoals((prev) => prev.includes(val) ? prev.filter((g) => g !== val) : [...prev, val]);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const required = ["name", "email", "industry", "teamSize", "problem"];
    for (const f of required) {
      if (!fd.get(f) || (fd.get(f) as string).trim() === "") {
        alert("Please complete all required fields.");
        return;
      }
    }
    if (goals.length === 0) { alert("Please select at least one outcome."); return; }

    const data = {
      industry: fd.get("industry") as string,
      teamSize: fd.get("teamSize") as string,
      problem: fd.get("problem") as string,
      goals,
      budget: budget || "unsure",
    };

    const est = calculateEstimate(data);
    setView("loading");

    const states = ["Reviewing your inputs.", "Mapping the work.", "Estimating scope.", "Almost ready."];
    let i = 0;
    const iv = setInterval(() => { i = (i + 1) % states.length; setLoadingText(states[i]); }, 1100);

    const payload = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      company: fd.get("company") as string,
      industry: data.industry,
      teamSize: data.teamSize,
      problem: data.problem,
      goals: goals.join(", "),
      budget: data.budget,
      estimate: `${est.name} · ${est.range} ${est.qualifier}`,
    };

    fetch("/api/audit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});

    setTimeout(() => {
      clearInterval(iv);
      setEstimate(est);
      setView("result");
    }, 4500);
  }

  return (
    <main>
      <div className="audit-page">
        {view === "form" && (
          <>
            <p className="eyebrow">FREE AUDIT</p>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.5rem", fontWeight: 300 }}>
              Tell us what&apos;s <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>broken.</em>
            </h1>
            <p className="audit-intro">
              Four short sections. You&apos;ll get a rough estimate immediately, and our team will reply within 24 hours with a detailed plan.
            </p>

            <form ref={formRef} action="https://formspree.io/f/xjgzdnqb" method="POST" noValidate onSubmit={handleSubmit}>

              {/* 01 CONTACT */}
              <div className="form-group">
                <p className="group-num">01</p>
                <h2 className="group-title">Contact</h2>
                <div className="row">
                  <div className="field">
                    <label>Name <span className="req">*</span></label>
                    <input type="text" name="name" required placeholder="Jane Smith" />
                  </div>
                  <div className="field">
                    <label>Email <span className="req">*</span></label>
                    <input type="email" name="email" required placeholder="jane@company.com" />
                  </div>
                </div>
              </div>

              {/* 02 BUSINESS */}
              <div className="form-group">
                <p className="group-num">02</p>
                <h2 className="group-title">Business</h2>
                <div className="field">
                  <label>Company (optional)</label>
                  <input type="text" name="company" placeholder="Acme Inc." />
                </div>
                <div className="row">
                  <div className="field">
                    <label>Industry <span className="req">*</span></label>
                    <select name="industry" required defaultValue="">
                      <option value="" disabled>Choose one...</option>
                      <option value="healthcare">Healthcare / Clinics</option>
                      <option value="logistics">Logistics / Field ops</option>
                      <option value="ecommerce">E-commerce / Retail</option>
                      <option value="construction">Construction / Trades</option>
                      <option value="services">Professional services</option>
                      <option value="support">Customer support</option>
                      <option value="sales">Sales / CRM heavy</option>
                      <option value="tech">SaaS / Tech</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Team size <span className="req">*</span></label>
                    <select name="teamSize" required defaultValue="">
                      <option value="" disabled>Choose one...</option>
                      <option value="solo">Just me</option>
                      <option value="small">2–10</option>
                      <option value="medium">11–50</option>
                      <option value="large">50+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 03 PROBLEM */}
              <div className="form-group">
                <p className="group-num">03</p>
                <h2 className="group-title">What&apos;s broken</h2>
                <div className="field">
                  <label>Describe the operational problem <span className="req">*</span></label>
                  <textarea name="problem" required placeholder="Example: We spend 10+ hours/week manually moving data between our CRM, accounting, and inventory systems. Constant errors, frustrated team." />
                  <p className="hint">Be specific. The more detail, the better we can scope it.</p>
                </div>
                <div className="field">
                  <label>What outcome are you after? <span className="req">*</span></label>
                  <div className="chips">
                    {[
                      { val: "automate", label: "Automate manual work" },
                      { val: "visibility", label: "Dashboards / visibility" },
                      { val: "integrate", label: "Connect my tools" },
                      { val: "redesign", label: "Redesign a process" },
                      { val: "ai", label: "Add AI to workflow" },
                      { val: "ops", label: "Outsource the whole thing" },
                    ].map(({ val, label }) => (
                      <label className="chip" key={val}>
                        <input type="checkbox" checked={goals.includes(val)} onChange={() => toggleGoal(val)} />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* 04 BUDGET */}
              <div className="form-group">
                <p className="group-num">04</p>
                <h2 className="group-title">Budget (optional)</h2>
                <div className="field">
                  <div className="chips">
                    {[
                      { val: "small", label: "Under $2k" },
                      { val: "mid", label: "$2k – $10k" },
                      { val: "large", label: "$10k – $50k" },
                      { val: "enterprise", label: "$50k+" },
                      { val: "unsure", label: "Not sure" },
                    ].map(({ val, label }) => (
                      <label className="chip" key={val}>
                        <input type="radio" name="budget" value={val} checked={budget === val} onChange={() => setBudget(val)} />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="submit-block">
                <button type="submit" className="btn-submit">Get my estimate →</button>
                <p className="submit-meta">Takes about 10 seconds.</p>
              </div>
            </form>
          </>
        )}

        {view === "loading" && (
          <div className="loading-wrap">
            <p className="loading-text">{loadingText}</p>
          </div>
        )}

        {view === "result" && estimate && (
          <div>
            <div className="result-header">
              <p className="result-eyebrow">YOUR ESTIMATE</p>
              <p className="result-title">Here&apos;s what we&apos;d <em style={{ fontStyle: "italic", color: "var(--accent)" }}>recommend.</em></p>
            </div>
            <div className="estimate">
              <p className="estimate-name">{estimate.name}</p>
              <p className="estimate-range">
                {estimate.range}
                <span className="qualifier">{estimate.qualifier}</span>
              </p>
              <p className="estimate-desc">{estimate.desc}</p>
              <ul className="estimate-includes">
                {estimate.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="estimate-note">{estimate.note}</div>
            <div className="estimate-note" style={{ marginTop: "1.5rem" }}>
              This is a preliminary estimate based on what you&apos;ve shared. We&apos;ll review your audit in detail and send a precise proposal within 24 hours. From there, we&apos;ll schedule a call to walk through scope and confirm exact deliverables — before any work begins.
            </div>
            <div className="next-steps">
              <p>Your details are with our team.</p>
              <span>Expect a detailed proposal within 24 hours.</span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
