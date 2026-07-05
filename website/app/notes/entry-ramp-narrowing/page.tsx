import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "The entry ramp is narrowing before the unemployment numbers move — Cupel Field Notes",
  description:
    "What the Anthropic Economic Index actually shows about junior hiring, and why that is a different problem to 'AI is taking jobs.'",
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
          The entry ramp is narrowing before the unemployment numbers move
        </h1>

        <div className="space-y-4 text-[var(--foreground)] max-w-xl leading-relaxed">
          <p>
            Anthropic&apos;s Economic Index, updated in March 2026, reports two things worth reading
            together rather than separately. First: hiring of 22–25 year-olds into the occupations
            most exposed to AI has slowed by roughly 14% since AI tools became widely embedded in
            those roles. Second: there is no clear broad unemployment signal yet in those same
            occupations.
          </p>
          <p>
            Read in isolation, each finding supports a different, comfortable story. The hiring
            slowdown supports &quot;AI is coming for junior jobs.&quot; The absent unemployment
            signal supports &quot;the AI jobs crisis is mostly hype for now,&quot; a framing several
            outlets ran with in early 2026. Both stories are too simple, and reading the two
            findings together explains why.
          </p>
          <p>
            Employers can defer a hiring decision long before they take the more visible, more
            reportable step of reducing headcount. A slowdown in new graduate hiring shows up in
            recruiting data months or years before it would ever show up as a layoff number or a
            rise in the unemployment rate for that occupation. The absence of a headline signal is
            not evidence that nothing is happening; it is what the early stage of this particular
            shift looks like.
          </p>
          <p>
            This matters for what kind of response is adequate. If the crisis were simply
            &quot;jobs disappearing,&quot; income support and retraining would be the right tools.
            But narrower hiring at the entry level is really a narrower apprenticeship pipeline —
            fewer people getting the junior-role repetitions that turn novices into practitioners
            who can catch an expert-level mistake. That is a supervisory-capacity problem, not
            (yet) an unemployment problem, and it needs an answer that works even when the
            traditional pipeline for producing verified experts is thinner than it used to be. That
            is the gap the Cupel framework is built to address.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
