import { Terminal, GitBranch, Link } from "lucide-react";
import { useLang } from "../contexts/LangContext";

const InstagramIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#888888">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const socials = [
  { icon: GitBranch, href: "https://github.com/fahmihfdz" },
  { icon: Link, href: "https://www.linkedin.com/in/fahmi-hafidz-10610b386" },
  { icon: InstagramIcon, href: "https://www.instagram.com/fahmihfdz_/" },
];

export default function Footer() {
  const { t } = useLang();
  const navLinks = [
    { label: t.nav.home, href: "home" },
    { label: t.nav.about, href: "about" },
    { label: t.nav.portfolio, href: "portfolio" },
    { label: t.nav.contact, href: "contact" },
  ];

  return (
    <footer className="border-t border-border bg-surface/30 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-gold" />
          <span className="font-mono text-sm font-bold text-gold tracking-widest">
            MFH
          </span>
        </div>

        {/* Nav */}
        <ul className="flex flex-wrap items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                className="font-mono text-xs text-muted hover:text-gold transition-colors tracking-wider"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-gold transition-colors"
            >
              <s.icon size={14} />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-6 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="font-mono text-xs text-muted/50">
          {t.footer.rights}
        </span>
        <span className="font-mono text-xs text-muted/50">
          fahmihfdzb@gmail.com
        </span>
      </div>
    </footer>
  );
}
