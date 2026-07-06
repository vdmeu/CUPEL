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
            I am not trying to build a company out of this. Cupel is open-source (Apache 2.0); the
            trademark (UK IPO No. UK00004352899) exists only so a conformance claim can't later be
            made by someone unrelated to the project, the way "Linux" or "OpenID" protect their
            names — it is a narrower guarantee than those two, since Cupel doesn't yet have a
            conformance test suite or multi-party governance, and I say that plainly rather than
            imply otherwise. The framework itself belongs to whoever wants to build on it. There is
            no advertising, no tracking, and nothing here is monetised.
          </p>
          <p>
            One honest tension worth naming: writing under my own name about a moment that is
            genuinely frightening for a lot of people also serves my own visibility, and I would
            rather say that directly than pretend it isn't true. The way I try to keep that honest
            is by citing primary sources rather than restating them, correcting this page and the
            framework when the evidence changes, and not pretending a working tool exists before
            one does — the schema and reference implementation are still in development, tracked
            openly on the <a
              href="https://github.com/vdmeu/CUPEL/blob/main/ROADMAP.md"
              className="underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
            >roadmap</a>.
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
