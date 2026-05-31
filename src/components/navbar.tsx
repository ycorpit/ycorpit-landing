"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function LogoMark() {
  return (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="logo-mark">
      <rect x="1.5" y="1.5" width="37" height="37" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="20" y="29" fontFamily="Fraunces, Georgia, serif" fontSize="24" fontStyle="italic" fontWeight="500" fill="#d4a93a" textAnchor="middle">Y</text>
    </svg>
  );
}

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why", label: "Why us" },
  { href: "/sample", label: "Sample audit" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      <Link href="/" className="logo">
        <LogoMark />
        Ycorpit
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
        <Link href="/audit" className="nav-cta" onClick={() => setOpen(false)}>
          Start audit →
        </Link>
      </div>
    </nav>
  );
}
