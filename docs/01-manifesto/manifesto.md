# The Cupel Manifesto

**Version 0.1 — March 2026**

---

## The credential system has broken down

Professional credentials — degrees, certifications, licensing examinations — were never measuring competence directly. They were measuring willingness and ability to acquire competence through a standardised process. The credential was a proxy. It worked because gaming the proxy was roughly as hard as becoming genuinely competent.

That equilibrium is gone.

In September 2025, large language models passed CFA Level III mock examinations, including written essays. The same pattern has emerged across the bar exam, medical licensing, and engineering certification. AI systems can now acquire the signal without acquiring the substance. Meanwhile, the number of unique credentials in the United States grew from 334,000 in 2018 to 1.85 million in 2025. The system responded to declining signal quality by increasing signal volume — which compounds the problem.

The result: 1 in 4 HR professionals say credential quality is too difficult to determine. Gartner projects that 1 in 4 candidate profiles worldwide will be entirely fabricated by 2028. 41% of enterprises have already onboarded a fraudulent candidate.

This is Goodhart's Law at civilisational scale: when the measure became the target, it ceased to be a good measure.

---

## What credentials actually did

Credentials served four functions that are now unbundling:

**Information asymmetry resolution.** They were trust shortcuts for parties who couldn't evaluate competence directly. If AI can produce competent-seeming output, the client now faces *worse* asymmetry — they can't tell if the professional is applying judgment or relaying a language model.

**Accountability infrastructure.** A licensed physician or chartered accountant was an accountability node: professional body oversight, licence revocation, malpractice liability. AI output carries none of this. The credential was the entry condition for accountability, not merely a knowledge signal.

**Community of practice gatekeeping.** Much real expertise is tacit knowledge shared within professional networks. The credential was the admission ticket. This function persists even as the knowledge-signalling function collapses — increasingly hollow, but structurally persistent.

**Scalable evaluation.** You could screen 10,000 candidates by checking degrees. Any replacement must work at scale. Most alternatives — portfolio review, work samples, structured references — are high-bandwidth but low-scale. This asymmetry is the central engineering challenge.

---

## Five new trust mechanisms are forming

**Demonstrated outcome trails.** Verifiable records of actions taken and outcomes achieved: portfolios, open-source contributions, competition results, documented client outcomes. Most mature as a mechanism. Limitation: legible in software engineering and data science, largely illegible in law, medicine, finance, and consulting.

**Behavioural consistency signals.** Consistency across time and contexts as a primary trust signal. A professional with a decade of context-appropriate judgment across engagements signals something a certification cannot. Hard to fake because it requires sustained performance. Also hard to capture without purpose-built infrastructure.

**Network-verified reputation.** Professional networks as the primary trust mechanism, not a supplement. The "who vouches for you" graph. Limitation: susceptible to homophily and collusion without structural design to counteract it.

**Process transparency and human-AI collaboration records.** The new credential is not "I know finance" but "here is how I use AI in my process, here is where I override it, and here is my track record of those overrides being correct." Trust shifts from what you know to how you think alongside AI. Nascent but structurally essential as AI capability continues to advance.

**Provenance and attribution infrastructure.** Chain-of-custody records for professional work product. The organic food labelling analogy: a mechanism for distinguishing human-exercised judgment from AI-generated output at the level of individual deliverables. Regulatory pressure from the EU AI Act is accelerating this layer.

Old credentials were scalable but low-bandwidth. New trust mechanisms are high-bandwidth but low-scale. This creates bifurcation: high-value professional work will operate on rich, verified trust signals; routine work gets commoditised into AI pipelines. The middle layer of professional practice faces the most disruption.

---

## The gap nobody is filling

The current market for professional trust infrastructure has five layers: identity verification and fraud detection, skills assessment and validation, digital credential infrastructure, content provenance and authenticity, and professional reputation and outcome tracking. Each layer has active players and commercial momentum.

What is missing is the layer above all of them.

There is no common language for describing, linking, and evaluating professional competence signals across these five ecosystems. A skills assessment result, a W3C Verifiable Credential, an Open Badge, a C2PA-attested work sample, and a peer endorsement cannot currently be expressed in a shared representation or evaluated against common criteria. They exist in five separate silos with no interoperability layer.

Whoever defines the architecture for this convergence is building the replacement for the degree.

---

## What Cupel proposes

Cupel is an open framework specification for professional competence provenance. It does not compete with existing infrastructure. It sits above it.

The framework specifies five interrelated components:

**A trust signal taxonomy** — a structured classification of professional competence signals into five types: credential-based, assessment-based, outcome-based, peer-verified, and provenance-tracked.

**A core schema** — a JSON-LD format for expressing trust signals and their relationships, aligned with the W3C Verifiable Credentials data model. Captures signal type, issuer identity, subject identity, temporal scope, domain specificity, and verification method.

**Signal quality criteria** — evaluation dimensions for assessing the evidential weight of individual signals: source credibility, recency, verifiability, specificity, and consistency with concurrent signals.

**Interoperability mappings** — defined translations between Cupel signal types and existing standards (W3C VC, C2PA, CTDL, Open Badges 3.0), enabling platforms to participate without adopting the full framework.

**A governance model** — a trust list maintenance mechanism, conformance programme, and contributor framework modelled on established open standards governance (W3C, IETF, C2PA).

---

## Why open, not proprietary

The Coalition for Content Provenance and Authenticity provides the most instructive precedent. C2PA succeeded not by launching a product but by publishing a specification and building a coalition. It now has 200+ member organisations and is fast-tracked as an ISO standard.

The professional competence provenance problem is structurally identical: it requires cross-industry adoption, trust from competing stakeholders, and interoperability between platforms with conflicting commercial interests. A proprietary solution maximises extraction. An open standard maximises adoption and legitimacy.

Cupel is released under Apache 2.0. The specification, core schema, and reference implementation are fully open. The Cupel name is trademarked (UK IPO, Class 42), so conformance claims carry meaning: only implementations meeting published criteria may identify themselves as Cupel-conformant. This follows the Linux and OpenID precedent — open technology, protected brand.

---

## What we are asking for

**Implementers** — skills assessment platforms, digital credential issuers, HR technology vendors, and professional bodies: implement the schema in your systems. You do not need to adopt the full framework. Start by expressing your existing signals in the Cupel trust signal taxonomy.

**Standards communities** — W3C Verifiable Credentials, C2PA, Credential Engine, 1EdTech: we want to map Cupel to your specifications precisely and maintain those mappings as your standards evolve. Engage with us through the repository.

**Researchers** — the signal quality methodology needs empirical grounding. What makes a trust signal evidentially strong? How do signals interact? This is an open research question with significant practical stakes.

**Practitioners** — if you are a professional whose competence is poorly represented by credentials you hold, or a hiring manager who cannot reliably evaluate candidates, you are the user this framework is built for. Your domain knowledge of what trust signals actually matter is the most valuable input we can receive.

---

## The work ahead

The framework is at version 0.1. The trust signal taxonomy is specified. The schema is in early draft. The interoperability mappings are identified but not yet formalised. The governance model is structural.

What does not exist yet: a reference implementation, a conformant validator, or a working interoperability bridge between any two existing standards.

These are the next steps. They are documented in the public roadmap. They require contributors.

The credential system that organised professional labour markets for most of the twentieth century is structurally compromised. The constructive work of building what replaces it has barely begun. The architecture for that replacement is what Cupel proposes.

---

**Specification, schema, and roadmap:** [github.com/vdmeu/CUPEL](https://github.com/vdmeu/CUPEL)

**Contact:** [contact@cupel.foundation](mailto:contact@cupel.foundation)

**Preprint (timestamped prior art):** [doi.org/10.5281/zenodo.18976395](https://doi.org/10.5281/zenodo.18976395)
