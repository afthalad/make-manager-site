import Link from "next/link";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="header">
      <div className="container header-row">
        <Link href="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M12 3v8" />
              <path d="M6.3 6.6a8 8 0 1 0 11.4 0" />
            </svg>
          </span>
          {site.appName}
        </Link>
        <nav className="nav">
          <Link href="/support/">Support</Link>
          <Link href="/privacy/">Privacy</Link>
        </nav>
      </div>
    </header>
  );
}
