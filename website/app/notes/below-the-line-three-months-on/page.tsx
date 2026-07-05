import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Below the abstraction layer, three months on — Cupel Field Notes",
  description:
    "The EU AI Act's August 2026 deadline, C2PA adoption, and credential-fraud numbers, read together as one story.",
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
          Below the abstraction layer, three months on
        </h1>

        <div className="space-y-4 text-[var(--foreground)] max-w-xl leading-relaxed">
          <p>
            Three developments this quarter are usually tracked separately. Read together, they
            describe the same convergence the Cupel manifesto argued for back in May: provenance,
            credentialing, and human oversight are becoming one regulatory and market problem.
          </p>
          <p>
            <strong>Regulation.</strong> The EU AI Act&apos;s high-risk obligations, including
            Article 14 human oversight and Article 50 content provenance disclosure, reach their
            enforcement deadline in August 2026. Organisations deploying agentic AI in healthcare,
            credit, employment, or critical infrastructure now have a legal — not just ethical —
            obligation to demonstrate a human who can meaningfully oversee the system, and to
            disclose when content was AI-generated.
          </p>
          <p>
            <strong>Provenance infrastructure.</strong> C2PA&apos;s content credentials continue to
            gain adoption across major platforms, and the IPTC 2025.1 and C2PA standards are
            converging as the technical answer regulators are pointing to for machine-readable AI
            disclosure. The plumbing for &quot;what was AI-generated&quot; is maturing faster than
            the plumbing for &quot;who is the accountable human.&quot;
          </p>
          <p>
            <strong>Credential integrity.</strong> Gartner&apos;s forecast that one in four
            candidate profiles could be entirely AI-fabricated by 2028 is no longer a distant
            projection — it is the direction the data has been moving since 2025, alongside a U.S.
            credential count that grew from 334,000 in 2018 to 1.85 million by 2025 with falling HR
            confidence in what any of them mean.
          </p>
          <p>
            The obligation to disclose what AI did (provenance) is arriving faster than the ability
            to verify who can be trusted to check it (credentialing), and both are arriving faster
            than most organisations&apos; capacity to identify that person at all. That ordering is
            precisely the gap this framework is built to close, and precisely why it needs to be
            revisited every few months rather than argued once and left alone.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
