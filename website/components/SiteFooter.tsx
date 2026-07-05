export default function SiteFooter() {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex flex-col sm:flex-row gap-4 text-sm text-[var(--muted)]">
        <a href="https://github.com/vdmeu/CUPEL" className="hover:text-[var(--foreground)] transition-colors">
          GitHub
        </a>
        <a
          href="https://doi.org/10.5281/zenodo.18976395"
          className="hover:text-[var(--foreground)] transition-colors"
        >
          Preprint (DOI 10.5281/zenodo.18976395)
        </a>
        <a href="/about" className="hover:text-[var(--foreground)] transition-colors">
          About the author
        </a>
        <a href="mailto:contact@cupel.foundation" className="hover:text-[var(--foreground)] transition-colors">
          contact@cupel.foundation
        </a>
      </div>
      <div className="mt-4 text-xs text-[var(--border)]">
        Cupel is a trademark of Eugene Andrie Merwe-Chartier. Open-source under Apache 2.0.
      </div>
    </footer>
  );
}
