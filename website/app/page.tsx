import SignalCard from "@/components/SignalCard";

const signals = [
  {
    number: "01",
    name: "Credentials",
    description:
      "Certificates and diplomas from accredited institutions, verified against the issuer's registry.",
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

const entryPoints = [
  {
    audience: "Building on Cupel",
    description: "Mapping your credentials, assessments, or platform to the Cupel taxonomy.",
    cta: "Share progress or ask a question",
    href: "https://github.com/vdmeu/CUPEL/discussions/24",
  },
  {
    audience: "Standards work",
    description:
      "Working on W3C VC, C2PA, Credential Engine, 1EdTech, or another relevant standard.",
    cta: "Propose or discuss a mapping",
    href: "https://github.com/vdmeu/CUPEL/discussions/25",
  },
  {
    audience: "Field practice",
    description:
      "A practitioner or employer who knows what genuine competence looks like in your domain.",
    cta: "Tell us what you see",
    href: "https://github.com/vdmeu/CUPEL/discussions/26",
  },
  {
    audience: "Research",
    description:
      "Building the empirical or theoretical evidence base for competence verification.",
    cta: "Engage with the open questions",
    href: "https://github.com/vdmeu/CUPEL/discussions/27",
  },
  {
    audience: "AI deployment",
    description:
      "Deploying AI systems and finding you don't know who can genuinely supervise them.",
    cta: "Start with the open questions",
    href: "https://github.com/vdmeu/CUPEL/discussions/28",
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
            When AI does the work, who checks it?
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-xl leading-relaxed">
            Cupel is an open framework for tracing professional competence — so the humans who
            supervise AI work are identifiable, accountable, and recognisable across the systems
            that already exist.
          </p>
        </section>

        {/* The supervision question */}
        <section className="py-12 border-b border-[var(--border)]">
          <h2 className="text-xs font-medium text-[var(--accent)] uppercase tracking-widest mb-6">
            The supervision question
          </h2>
          <div className="space-y-4 text-[var(--foreground)]">
            <p>
              When an AI agent files a tax return, drafts a contract, recommends a treatment, or
              writes production code, someone needs to catch its mistakes. That someone has
              historically been a qualified human, whose competence we could reasonably infer
              from their credentials.
            </p>
            <p>
              That inference is no longer reliable, and the pipeline that produced those
              qualified humans is contracting.
            </p>
            <p>
              AI can now pass professional exams that once took humans years to master. Leading
              models score above 79% on the CFA Level III. Similar results hold in medicine,
              engineering, and law. Credentials that once identified capable humans now
              identify anyone — or anything — that can pass an exam.
            </p>
            <p>
              At the same time, entry-level technology hiring at the top 15 firms fell 25%
              between 2023 and 2024. UK graduate technology roles fell 46% in 2024. Junior roles
              are where senior practitioners are made. The cohort that should become tomorrow's
              supervisors is being thinned today.
            </p>
            <p className="font-medium">
              We are deploying AI systems faster than we are identifying the humans who can
              supervise them.
            </p>
          </div>
        </section>

        {/* Why more credentials won't help */}
        <section className="py-12 border-b border-[var(--border)]">
          <h2 className="text-xs font-medium text-[var(--accent)] uppercase tracking-widest mb-6">
            Why more credentials won&apos;t solve this
          </h2>
          <div className="space-y-4 text-[var(--foreground)]">
            <p>
              The market has responded by issuing more credentials. The U.S. went from 334,000
              in 2018 to 1.85 million by 2025. Yet HR professionals report decreasing confidence
              in what those credentials mean, and Gartner forecasts that one in four candidate
              profiles could be entirely AI-fabricated by 2028.
            </p>
            <p>
              When everyone optimises for the measure, the measure stops working. That&apos;s
              Goodhart&apos;s Law in action — and credentials, on their own, are now subject to it.
            </p>
            <p>
              Five separate systems already support professional trust: identity verification,
              skills assessment, digital credentials, content authenticity, and reputation. Each
              works on its own. None connect. There is no shared way to ask, across all of them,
              the question that actually matters: <em>can this person catch an AI error in
              this domain?</em>
            </p>
          </div>
        </section>

        {/* Below the abstraction layer */}
        <section className="py-12 border-b border-[var(--border)]">
          <h2 className="text-xs font-medium text-[var(--accent)] uppercase tracking-widest mb-6">
            Below the abstraction layer
          </h2>
          <div className="space-y-4 text-[var(--foreground)]">
            <p>
              Most credentials measure performance <em>above</em> the AI abstraction layer — on
              tasks AI can now also perform. The signal that matters now is competence{" "}
              <em>below</em> the abstraction layer: the ability to catch an error in the AI&apos;s
              work, intervene meaningfully, and accept responsibility for what was produced.
            </p>
            <p>
              A doctor who uses AI to read a scan and then makes the diagnosis is fully
              responsible for it. A code reviewer who approves an AI-generated patch must be
              able to recognise a subtle vulnerability the model missed. A compliance officer
              who signs off on an AI-drafted disclosure must understand the rule the AI applied.
            </p>
            <p className="font-medium">
              &ldquo;Human in the loop&rdquo; is meaningful only when the human can actually
              catch the loop&apos;s mistakes.
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
            The project is open-source (Apache 2.0) and trademark-protected (UK IPO No. UK00004352899).
            &ldquo;Cupel-conformant&rdquo; means meeting published technical and ethical criteria —
            just as Linux or OpenID use open technology with protected names.
          </p>
        </section>

        {/* Get involved */}
        <section className="py-12 border-b border-[var(--border)]">
          <h2 className="text-xs font-medium text-[var(--accent)] uppercase tracking-widest mb-2">
            Get involved
          </h2>
          <p className="text-sm text-[var(--muted)] mb-8">
            Participation happens on GitHub. Find the entry point that fits your situation.
          </p>
          <div className="space-y-4">
            {entryPoints.map((e) => (
              <div key={e.audience} className="border border-[var(--border)] rounded-sm p-5 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1">
                  <div className="font-semibold text-[var(--foreground)] mb-0.5">{e.audience}</div>
                  <div className="text-sm text-[var(--muted)]">{e.description}</div>
                </div>
                <a
                  href={e.href}
                  className="shrink-0 text-sm font-medium text-[var(--foreground)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors whitespace-nowrap"
                >
                  {e.cta} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Sign on */}
        <section className="py-12 border-b border-[var(--border)]">
          <h2 className="text-xs font-medium text-[var(--accent)] uppercase tracking-widest mb-6">
            Sign on as a supporter
          </h2>
          <p className="text-[var(--foreground)] mb-5">
            If the framework addresses a problem you recognise, add your name. Public endorsements
            from credible people matter more than volume. The signatories page lists everyone
            who has signed on.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://github.com/vdmeu/CUPEL/issues/new?template=signatory.md"
              className="text-sm font-medium text-[var(--foreground)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
            >
              Sign on via GitHub →
            </a>
            <a
              href="/signatories"
              className="text-sm font-medium text-[var(--muted)] underline underline-offset-4 hover:text-[var(--foreground)] transition-colors"
            >
              View signatories →
            </a>
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
          Cupel is a trademark of Eugene Andrie Merwe-Chartier. Open-source under Apache 2.0.
        </div>
      </footer>
    </div>
  );
}
