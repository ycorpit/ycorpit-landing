"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function LogoMark() {
  return (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="logo-mark">
      <rect x="1" y="1" width="38" height="38" rx="10" fill="#0071e3" />
      <text x="20" y="27" fontFamily="Inter, -apple-system, sans-serif" fontSize="19" fontWeight="800" fill="#ffffff" textAnchor="middle">Y</text>
    </svg>
  );
}

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      <Link href="/" className="logo">
        <LogoMark />
        YCorpIT
      </Link>

      <button
        className="nav-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </svg>
      </button>

      <div className={`nav-links${open ? " open" : ""}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nav-link${pathname === href ? " active" : ""}`}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
          Get a free check →
        </Link>
      </div>
    </nav>
  );
}
