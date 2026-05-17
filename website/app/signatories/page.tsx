export const metadata = {
  title: "Signatories — Cupel",
  description: "People and organisations who have publicly endorsed the Cupel framework.",
};

const signatories: { name: string; affiliation: string; note?: string }[] = [
  // Add entries here as they come in via GitHub issues
  // { name: "Name", affiliation: "Organisation" },
];

export default function Signatories() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="border-b border-[var(--border)] bg-[var(--background)]">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-baseline justify-between">
          <a href="/" className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
            Cupel
          </a>
          <span className="text-sm text-[var(--muted)]">cupel.foundation</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold text-[var(--foreground)] mb-3">Signatories</h1>
        <p className="text-[var(--muted)] mb-10 max-w-xl leading-relaxed">
          People and organisations who have publicly endorsed the Cupel framework. Updated as
          new signatories are confirmed.
        </p>

        {signatories.length === 0 ? (
          <div className="border border-[var(--border)] rounded-sm p-8 text-center">
            <p className="text-[var(--muted)] mb-4">
              No signatories yet. Be the first.
            </p>
            <a
              href="https://github.com/vdmeu/CUPEL/issues/new?template=signatory.md"
              className="text-sm font-medium text-[var(--foreground)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
            >
              Sign on via GitHub
            </a>
          </div>
        ) : (
          <div className="divide-y divide-[var(--border)]">
            {signatories.map((s) => (
              <div key={s.name} className="py-4">
                <span className="font-medium text-[var(--foreground)]">{s.name}</span>
                {s.affiliation && (
                  <span className="text-[var(--muted)]"> — {s.affiliation}</span>
                )}
                {s.note && (
                  <p className="text-sm text-[var(--muted)] mt-1 italic">{s.note}</p>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <h2 className="text-sm font-semibold text-[var(--foreground)] mb-2">
            How to sign on
          </h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            Open a GitHub issue using the signatory template. Include your name, affiliation,
            and one sentence on why the framework matters to you. Eugene will review and add
            you to this page within a few weeks.
          </p>
          <a
            href="https://github.com/vdmeu/CUPEL/issues/new?template=signatory.md"
            className="inline-block mt-4 text-sm font-medium text-[var(--foreground)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
          >
            Open a signatory issue on GitHub
          </a>
        </div>
      </main>

      <footer className="max-w-3xl mx-auto px-6 py-10 border-t border-[var(--border)]">
        <div className="text-xs text-[var(--muted)]">
          <a href="/" className="hover:text-[var(--foreground)] transition-colors">
            cupel.foundation
          </a>
        </div>
      </footer>
    </div>
  );
}
