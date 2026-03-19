import SignalCard from "@/components/SignalCard";

const signals = [
  {
    number: "01",
    name: "Credentials",
    description:
      "Certificates and diplomas from accredited institutions — verified against the issuer's registry.",
  },
  {
    number: "02",
    name: "Assessments",
    description:
      "Verified test scores and practical evaluations that demonstrate what someone can actually do.",
  },
  {
    number: "03",
    name: "Outcomes",
    description:
      "Real work results: projects delivered, decisions made, measurable impact — not just claims.",
  },
  {
    number: "04",
    name: "Peer verification",
    description:
      "Endorsements from colleagues who witnessed the work and can be held accountable for their assessment.",
  },
  {
    number: "05",
    name: "AI audit trail",
    description:
      "A record of how AI tools were used, where human judgment was applied, and who was responsible for key decisions.",
  },
];

const audiences = [
  {
    role: "Implementers",
    description:
      "Connect your existing credentials or assessments to the Cupel taxonomy. You don't need to adopt everything at once.",
  },
  {
    role: "Standards bodies",
    description:
      "Work with us on mappings between Cupel and your specifications — W3C, C2PA, Credential Engine, 1EdTech, and others.",
  },
  {
    role: "Researchers",
    description:
      "Help build the evidence base for what makes a professional signal trustworthy, especially in human–AI collaboration.",
  },
  {
    role: "Practitioners and employers",
    description:
      "Share what genuine competence looks like in your field. Your insight shapes the framework.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="border-b border-[var(--border)] bg-[var(--background)]">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-baseline justify-between">
          <span className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
            Cupel
          </span>
          <span className="text-sm text-[var(--muted)]">cupel.foundation</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6">
        {/* Hero */}
        <section className="py-16 border-b border-[var(--border)]">
          <h1 className="text-3xl font-semibold leading-tight text-[var(--foreground)] mb-4">
            A common layer for professional trust
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-xl leading-relaxed">
            Cupel is an open framework that connects the systems already used to verify competence
            — so that human expertise is recognisable in an AI-saturated world.
          </p>
        </section>

        {/* The problem */}
        <section className="py-12 border-b border-[var(--border)]">
          <h2 className="text-xs font-medium text-[var(--accent)] uppercase tracking-widest mb-6">
            The problem
          </h2>
          <div className="space-y-4 text-[var(--foreground)]">
            <p>
              Credentials used to show what people could do. Now, they often show what machines
              can produce. AI can pass the CFA Level III. It can pass the bar. It can generate
              the signal of competence without the substance.
            </p>
            <p>
              The market responded by creating more credentials — the U.S. went from 334,000
              in 2018 to 1.85 million by 2025. But more isn&apos;t better. Gartner forecasts that
              one in four candidate profiles could be entirely AI-fabricated by 2028.
            </p>
            <p>
              Five separate systems already support professional trust: identity verification,
              skills assessment, digital credentials, content authenticity, and reputation.
              Each works on its own — but they don&apos;t connect. There&apos;s no shared way to
              describe, compare, or verify proof of real competence across them.
            </p>
            <p className="font-medium">
              We don&apos;t need new systems. We need a common layer that connects the ones we
              already have.
            </p>
          </div>
        </section>

        {/* The five signals */}
        <section className="py-12 border-b border-[var(--border)]">
          <h2 className="text-xs font-medium text-[var(--accent)] uppercase tracking-widest mb-2">
            The five trust signals
          </h2>
          <p className="text-[var(--muted)] mb-6 text-sm">
            No single signal is enough. Cupel looks at all five together — which makes the
            overall picture much harder to fake.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {signals.map((s) => (
              <SignalCard key={s.number} {...s} />
            ))}
          </div>
        </section>

        {/* What Cupel is */}
        <section className="py-12 border-b border-[var(--border)]">
          <h2 className="text-xs font-medium text-[var(--accent)] uppercase tracking-widest mb-6">
            What Cupel is
          </h2>
          <p className="mb-5 text-[var(--foreground)]">
            Cupel is an open framework — a vocabulary, a data format, and a set of guidelines —
            not a platform. Any credential issuer, assessment body, or HR platform can participate
            without changing their core infrastructure.
          </p>
          <ul className="space-y-3 text-[var(--foreground)]">
            <li className="flex gap-3">
              <span className="text-[var(--accent)] mt-0.5 shrink-0">—</span>
              <span>
                <strong>A common vocabulary</strong> for the five trust signal types, so different
                systems can describe competence in terms each other understands.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--accent)] mt-0.5 shrink-0">—</span>
              <span>
                <strong>A lightweight data format</strong> (JSON-LD, compatible with W3C Verifiable
                Credentials) for expressing and linking these signals.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--accent)] mt-0.5 shrink-0">—</span>
              <span>
                <strong>Evidential weight guidelines</strong> — how much trust to place in each
                signal type, based on how easy it is to game.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--accent)] mt-0.5 shrink-0">—</span>
              <span>
                <strong>Standard mappings</strong> to C2PA, W3C VC, Credential Engine, and
                1EdTech, so platforms can integrate gradually.
              </span>
            </li>
          </ul>
          <div className="mt-6 p-4 bg-white border border-[var(--border)] rounded-sm text-sm text-[var(--muted)]">
            <strong className="text-[var(--foreground)]">On privacy:</strong> Cupel is designed
            for selective disclosure. Participation is voluntary, and individuals choose what
            signals to share and with whom. The framework has no central registry of people.
          </div>
          <p className="mt-5 text-sm text-[var(--muted)]">
            The project is open-source (AGPL-3.0) and trademark-protected (UK IPO No. UK00004352899).
            &ldquo;Cupel-conformant&rdquo; means meeting published technical and ethical criteria —
            just as Linux or OpenID use open technology with protected names.
          </p>
        </section>

        {/* Who we invite */}
        <section className="py-12 border-b border-[var(--border)]">
          <h2 className="text-xs font-medium text-[var(--accent)] uppercase tracking-widest mb-6">
            Who we invite
          </h2>
          <div className="space-y-6">
            {audiences.map((a) => (
              <div key={a.role}>
                <div className="font-semibold text-[var(--foreground)] mb-1">{a.role}</div>
                <div className="text-[var(--muted)]">{a.description}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row gap-4 text-sm text-[var(--muted)]">
          <a
            href="https://github.com/vdmeu/CUPEL"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://doi.org/10.5281/zenodo.18976395"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Preprint (DOI 10.5281/zenodo.18976395)
          </a>
          <a
            href="mailto:contact@cupel.foundation"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            contact@cupel.foundation
          </a>
        </div>
        <div className="mt-4 text-xs text-[var(--border)]">
          Cupel is a trademark of Eugene Andrie Merwe-Chartier. Open-source under AGPL-3.0.
        </div>
      </footer>
    </div>
  );
}
