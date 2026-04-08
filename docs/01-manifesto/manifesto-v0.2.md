# The Credential-Competence Gap

**Version 0.2 — March 2026**

---

Credentials used to show what a human could do; now they just show what a machine can produce.

The equilibrium that made credentials work — *gaming the proxy must be roughly as hard as becoming genuinely competent* — is fracturing. In September 2025, a [joint study by NYU Stern and Goodfin](https://www.prnewswire.com/news-releases/goodfin-and-nyu-stern-professor-srikanth-jagabathula-release-landmark-study-showing-ai-models-perform-at-a-level-above-and-beyond-the-cfa-level-iii-exam-standards-302562278.html) found that leading AI models scored above 79% on CFA Level III mock examinations, including written essays — the hardest tier of a qualification that takes professionals years to earn. The same pattern is emerging across medical licensing, engineering certification, and legal assessments. AI systems can acquire the signal without acquiring the substance.

The market response has been to issue more credentials. The number of unique credentials in the United States grew from 334,000 in 2018 to [1.85 million by December 2025](https://credentialengine.org/2025/12/09/new-report-finds-1-85-million-credentials-and-opportunities/). Signal volume has grown as signal quality has declined. Nearly 1 in 4 HR professionals say credential quality is now too difficult to determine. [Gartner projects](https://www.hrdive.com/news/fake-job-candidates-ai/757126/) that 1 in 4 candidate profiles worldwide will be entirely fabricated by 2028; 6% of candidates already admit to active interview fraud.

This is Goodhart's Law: when the measure becomes the target, it ceases to be a good measure.

---

## The missing layer

Five layers of professional trust infrastructure exist and are maturing: identity verification and fraud detection, skills assessment and validation, digital credential issuance, content provenance and authenticity, and professional reputation tracking. Each has capable players and real commercial momentum.

What is missing is the layer that connects them.

There is no common language for describing, linking, and evaluating professional competence signals across these five ecosystems. A skills assessment result, a W3C Verifiable Credential, an Open Badge, a C2PA-attested work sample, and a peer endorsement cannot currently be expressed in a shared representation or evaluated against common criteria. They exist in five separate silos.

The goal is not to replace this infrastructure. It is to give it a shared surface — so that demonstrated human expertise can be distinguished, attributed, and trusted in a world where AI can pass the tests.

---

## What we believe

**Competence is provenance.** What a professional has done, the judgments they have made, and the outcomes they have produced are more informative than any credential they hold. Capturing and verifying that record over time is the constructive work the market has not yet done.

**Human expertise deserves attribution infrastructure.** As AI systems produce professional-grade output, distinguishing human-exercised judgment from AI-generated content becomes a fundamental requirement — not just for hiring, but for accountability, liability, and trust. This must be structural, not optional. The EU AI Act's [Article 50 provenance requirements](https://www.ashurst.com/en/insights/transparency-of-ai-generated-content-the-eu-first-draft-code-of-practice/), entering full force in August 2026, establish this as a legal baseline.

**Agent skill needs honest assurance.** The question is not whether AI can perform — it demonstrably can. The question is what that performance actually means, how it was produced, and what accountability infrastructure exists around it. A framework for professional trust must account for human-AI collaboration explicitly, not pretend it isn't happening.

**Open standards beat proprietary platforms.** The Coalition for Content Provenance and Authenticity grew from a specification and a coalition to [over 5,000 member organisations](https://contentauthenticity.org/blog/5000-members-building-momentum-for-a-more-trustworthy-digital-world), with C2PA now shipping natively in Samsung Galaxy S25 devices and Cloudflare's network. [W3C Verifiable Credentials 2.0 became a full Web Standard in May 2025](https://www.w3.org/press-releases/2025/verifiable-credentials-2-0/). These standards succeeded because they were designed for coalition, not capture. Professional competence provenance requires the same approach.

**Interoperability serves everyone.** No single platform can solve this alone. The goal is a shared representation that existing platforms can adopt incrementally — a bridge between systems, not a replacement for them.

---

## What Cupel proposes

Cupel is an open framework specification for professional competence provenance. It defines a taxonomy of five trust signal types (credential-based, assessment-based, outcome-based, peer-verified, and provenance-tracked), a JSON-LD schema for expressing and linking those signals, criteria for evaluating their evidential weight, and interoperability mappings to existing standards.

It sits above existing infrastructure, not against it. Credential issuers, assessment platforms, professional bodies, and verifiers can participate without rebuilding their systems. The framework is designed to be adopted layer by layer — a platform does not need to implement everything to contribute something.

The specification is released under Apache 2.0. The Cupel name is trademarked (UK IPO No. UK00004352899, Class 42), ensuring that conformance claims carry meaning: only implementations meeting published criteria may identify themselves as Cupel-conformant. This follows the Linux and OpenID precedent — open technology, protected brand.

---

## Who we are asking

**Implementers** — skills platforms, credential issuers, HR technology vendors, professional bodies: express your existing signals in the Cupel trust signal taxonomy. You do not need to adopt the full framework to start.

**Standards communities** — W3C, C2PA, Credential Engine, 1EdTech: we want precise, maintained mappings between Cupel and your specifications. Engage through the repository.

**Researchers** — the evidential basis of professional trust signals is under-studied. What makes a signal strong across domains? How do signals interact? How should human-AI collaboration records be weighted? These are open questions with significant practical stakes.

**Practitioners and employers** — your domain knowledge of what trust actually looks like in your field is the input this framework most needs. The issue tracker is open.

---

**Specification and schema:** [github.com/vdmeu/CUPEL](https://github.com/vdmeu/CUPEL)

**Contact:** [contact@cupel.foundation](mailto:contact@cupel.foundation)

**Preprint (DOI):** [10.5281/zenodo.18976395](https://doi.org/10.5281/zenodo.18976395)
