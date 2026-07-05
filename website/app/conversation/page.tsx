import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "State of the Conversation — Cupel",
  description:
    "A curated, periodically updated map of the primary sources on AI provenance, credentialing, and the human impact of automated knowledge work.",
};

const sections = [
  {
    title: "AI provenance",
    items: [
      {
        name: "C2PA — State of Content Authenticity",
        note: "Ongoing tracker of Content Credentials adoption across major platforms and tools.",
        href: "https://contentauthenticity.org/blog/the-state-of-content-authenticity-in-2026",
      },
      {
        name: "EU AI Act, Article 50",
        note: "Transparency and disclosure obligations for AI-generated content, in force from August 2026.",
        href: "https://artificialintelligenceact.eu/article/14/",
      },
    ],
  },
  {
    title: "Credential and supervision verification",
    items: [
      {
        name: "Gartner — Predicts 2025: AI in Human Capital Management",
        note: "Forecast that one in four candidate profiles could be entirely AI-fabricated by 2028.",
        href: "https://www.gartner.com/",
      },
      {
        name: "NIST IR 8596 (Initial Preliminary Draft)",
        note: "Guidance on human-in-the-loop checks and confidence thresholds for AI system outputs.",
        href: "https://www.nist.gov/",
      },
    ],
  },
  {
    title: "The human impact of automated knowledge work",
    items: [
      {
        name: "Anthropic Economic Index — March 2026 Report",
        note: "Hiring of 22–25 year-olds in the most AI-exposed roles down ~14%; no broad unemployment signal yet.",
        href: "https://www.anthropic.com/research/economic-index-march-2026-report",
      },
      {
        name: "Harvard Business Review — Has AI Ended Thought Leadership?",
        note: "On the widening gap between commentary about the future of work and evidence-based response to it.",
        href: "https://hbr.org/2026/03/has-ai-ended-thought-leadership",
      },
      {
        name: "SignalFire — State of Tech Talent Report",
        note: "Entry-level hiring at the top 15 tech firms fell 25% between 2023 and 2024.",
        href: "https://signalfire.com/",
      },
    ],
  },
];

export default function Conversation() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold text-[var(--foreground)] mb-3">
          State of the Conversation
        </h1>
        <p className="text-[var(--muted)] mb-10 max-w-xl leading-relaxed">
          A short, curated map of the primary sources worth reading across the three threads Cupel
          follows: AI provenance, credential and supervision verification, and the human impact of
          automated knowledge work. Updated as the picture changes — see{" "}
          <a href="/notes" className="underline underline-offset-4 hover:text-[var(--accent)] transition-colors">
            Field Notes
          </a>{" "}
          for commentary on what changed and why it matters.
        </p>

        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xs font-medium text-[var(--accent)] uppercase tracking-widest mb-4">
                {s.title}
              </h2>
              <div className="space-y-4">
                {s.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block border border-[var(--border)] rounded-sm p-4 hover:border-[var(--accent)] transition-colors"
                  >
                    <div className="font-medium text-[var(--foreground)]">{item.name}</div>
                    <div className="text-sm text-[var(--muted)] mt-1">{item.note}</div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 p-4 border border-[var(--border)] rounded-sm text-sm text-[var(--muted)]">
          Know a source that belongs here? Suggest it via a{" "}
          <a
            href="https://github.com/vdmeu/CUPEL/discussions/27"
            className="underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
          >
            GitHub discussion
          </a>
          .
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
