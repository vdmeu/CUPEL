import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Field Notes — Cupel",
  description: "Periodic, evidence-based commentary on AI provenance, credentialing, and the human impact of automated knowledge work.",
};

const posts = [
  {
    slug: "thought-leadership-gap",
    date: "July 2026",
    title: "The gap thought leadership can't close",
    dek: "AI has made confident commentary about the future of work nearly free to produce. That is exactly why evidence, not polish, is the only thing worth publishing now.",
  },
  {
    slug: "entry-ramp-narrowing",
    date: "July 2026",
    title: "The entry ramp is narrowing before the unemployment numbers move",
    dek: "What the Anthropic Economic Index actually shows about junior hiring, and why that is a different problem to 'AI is taking jobs.'",
  },
  {
    slug: "below-the-line-three-months-on",
    date: "July 2026",
    title: "Below the abstraction layer, three months on",
    dek: "The EU AI Act's August 2026 deadline, C2PA adoption, and credential-fraud numbers, read together as one story.",
  },
];

export default function Notes() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold text-[var(--foreground)] mb-3">Field Notes</h1>
        <p className="text-[var(--muted)] mb-10 max-w-xl leading-relaxed">
          Periodic commentary reacting to new data and developments across the three threads this
          project follows. Written and reviewed by Eugene Andrie Merwe-Chartier — see{" "}
          <a href="/about" className="underline underline-offset-4 hover:text-[var(--accent)] transition-colors">
            About
          </a>
          .
        </p>

        <div className="divide-y divide-[var(--border)]">
          {posts.map((p) => (
            <a key={p.slug} href={`/notes/${p.slug}`} className="block py-6 group">
              <div className="text-xs text-[var(--muted)] mb-1">{p.date}</div>
              <div className="font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                {p.title}
              </div>
              <div className="text-sm text-[var(--muted)] mt-1 leading-relaxed">{p.dek}</div>
            </a>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
