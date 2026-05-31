import Link from "next/link";

function LogoMark() {
  return (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="logo-mark">
      <rect x="1.5" y="1.5" width="37" height="37" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="20" y="29" fontFamily="Fraunces, Georgia, serif" fontSize="24" fontStyle="italic" fontWeight="500" fill="#d4a93a" textAnchor="middle">Y</text>
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
            Ycorpit
          </Link>
          <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--muted)", maxWidth: "26ch" }}>
            Engineering-led operations consulting. Global remote.
          </p>
        </div>
        <div className="footer-col">
          <h4>EXPLORE</h4>
          <ul>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/why">Why Ycorpit</Link></li>
            <li><Link href="/sample">Sample audit</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>GET IN TOUCH</h4>
          <ul>
            <li><Link href="/audit">Start an audit</Link></li>
            <li><a href="mailto:contacts@ycorpit.com">contacts@ycorpit.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Ycorpit LLC</span>
        <span>Global remote operations</span>
      </div>
    </footer>
  );
}
