import Link from "next/link";

function LogoMark() {
  return (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="logo-mark">
      <rect x="1" y="1" width="38" height="38" rx="10" fill="#0071e3" />
      <text x="20" y="27" fontFamily="Inter, -apple-system, sans-serif" fontSize="19" fontWeight="800" fill="#ffffff" textAnchor="middle">Y</text>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <Link href="/" className="logo">
            <LogoMark />
            YCorpIT
          </Link>
          <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--muted)", maxWidth: "26ch" }}>
            Find where your business is losing money. IT consulting for small and mid-sized businesses, based in Dallas-Fort Worth, TX.
          </p>
        </div>
        <div className="footer-col">
          <h4>EXPLORE</h4>
          <ul>
            <li><Link href="/services">Services &amp; pricing</Link></li>
            <li><Link href="/how-it-works">How it works</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/sample">Sample report</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>GET IN TOUCH</h4>
          <ul>
            <li><Link href="/contact">Request a free check</Link></li>
            <li><a href="https://cal.com/ycorpit-contacts" target="_blank" rel="noopener noreferrer">Book a 20-min call</a></li>
            <li><a href="mailto:contacts@ycorpit.com">contacts@ycorpit.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 YCorpIT LLC</span>
        <span style={{ display: "flex", gap: "1.25rem" }}>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </span>
      </div>
    </footer>
  );
}
