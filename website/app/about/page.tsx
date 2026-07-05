import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "About — Cupel",
  description: "Why Eugene Andrie Merwe-Chartier is building Cupel, in the open, under his name.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold text-[var(--foreground)] mb-3">
          About Cupel and its author
        </h1>
        <p className="text-[var(--muted)] mb-10 max-w-xl leading-relaxed">
          Cupel is written and maintained by Eugene Andrie Merwe-Chartier. This page explains why
          it exists, and why it carries his name rather than a company's.
        </p>

        <div className="space-y-6 text-[var(--foreground)] max-w-xl leading-relaxed">
          <p>
            Cupel began as a technical answer to a narrow question: once AI can pass the exams
            and produce the portfolios that credentials were built to certify, how do we verify
            that a human can still catch its mistakes? That question turned out to sit inside a
            much bigger one — what happens to people, careers, and the meaning of expertise as
            knowledge work becomes cheap to automate. Answering the narrow question honestly
            requires engaging with the bigger one, in public, with evidence.
          </p>
          <p>
            This site is where I do that. It publishes three things: the Cupel framework itself
            (an open specification, not a product), Field Notes — commentary that reacts to new
            data and developments as they land, and a running State of the Conversation page that
            links the primary sources worth reading on AI provenance, credentialing, and the human
            impact of automated knowledge work.
          </p>
          <p>
            I am not trying to build a company out of this. Cupel is open-source (Apache 2.0) and
            trademark-protected (UK IPO No. UK00004352899) so that the name keeps meaning something
            as the project grows, but the framework itself belongs to whoever wants to build on it.
            What I want is for this to be a credible, evidence-first place to follow and contribute
            to this conversation — and for that work to be identifiably mine.
          </p>
          <p>
            I write and review everything published here. Disagreement, corrections, and counter-evidence
            are welcome — the fastest way to reach me is by opening a discussion or issue on{" "}
            <a
              href="https://github.com/vdmeu/CUPEL"
              className="underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
            >
              GitHub
            </a>{" "}
            or by emailing{" "}
            <a
              href="mailto:contact@cupel.foundation"
              className="underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
            >
              contact@cupel.foundation
            </a>
            .
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
