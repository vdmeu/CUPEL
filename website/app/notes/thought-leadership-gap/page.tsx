import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "The gap thought leadership can't close — Cupel Field Notes",
  description:
    "AI has made confident commentary about the future of work nearly free to produce. That is exactly why evidence, not polish, is the only thing worth publishing now.",
};

export default function Post() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <a href="/notes" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
          ← Field Notes
        </a>
        <div className="text-xs text-[var(--muted)] mt-6 mb-2">July 2026 · Eugene Andrie Merwe-Chartier</div>
        <h1 className="text-2xl font-semibold text-[var(--foreground)] mb-8 leading-tight">
          The gap thought leadership can&apos;t close
        </h1>

        <div className="space-y-4 text-[var(--foreground)] max-w-xl leading-relaxed">
          <p>
            Harvard Business Review ran a piece in March 2026 asking whether AI has ended thought
            leadership. The argument: AI has made confident, well-written commentary about the
            future of work nearly free to produce, which means there is now a widening gap between
            people who talk about how AI is reshaping work and people actually building a response
            to it.
          </p>
          <p>
            That gap is real, and it is the reason this page exists in this form rather than as
            another opinion column. If polished argument is now cheap, the only differentiator left
            is whether the argument is tied to evidence that can be checked, and whether the person
            making it is doing anything with it beyond publishing.
          </p>
          <p>
            Concretely, that means three commitments for everything published under Field Notes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Every claim about labour-market impact cites a primary source, not a paraphrase of one.</li>
            <li>
              When new data changes the picture — for example, an updated Anthropic Economic Index
              report — the relevant page gets revised, not just added to.
            </li>
            <li>
              The commentary stays tied to a working artefact: the Cupel framework itself, which
              exists to be used, mapped against, and argued with, not just read.
            </li>
          </ul>
          <p>
            The underlying bet is unfashionable: that in a market flooded with AI-assisted takes,
            being slow, cited, and revisable is the actual differentiator — not being fast and
            confident.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
