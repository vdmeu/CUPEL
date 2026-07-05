const navLinks = [
  { label: "About", href: "/about" },
  { label: "Field Notes", href: "/notes" },
  { label: "State of the Conversation", href: "/conversation" },
  { label: "Signatories", href: "/signatories" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-3xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <a href="/" className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
          Cupel
        </a>
        <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-[var(--muted)]">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--foreground)] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
