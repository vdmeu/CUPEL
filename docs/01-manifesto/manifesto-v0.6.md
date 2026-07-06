# The Credential-Competence Gap

*On verifying human expertise in a world of capable machines*

**Manifesto v0.6 — July 2026**

---

## Three questions, one conversation

Three questions about AI are usually asked separately, by separate communities, in separate rooms.

**Who made this, and how?** — the provenance question, being answered piecemeal by C2PA, the EU AI Act's Article 50, and a scattering of watermarking standards.

**Who can be trusted to check an AI's work?** — the credentialing question, where the old signals (degrees, licences, certificates) are visibly failing and nothing has replaced them.

**What happens to the humans whose work AI now does?** — the question everyone feels and almost no one is answering with evidence instead of hot takes. A widening gap has opened between people who talk about the future of knowledge work and people building any real response to it[^hbr2026].

These are not three problems. They are one problem, viewed from three angles: as AI absorbs more of the *substance* of professional work, the *proof* of who did what and who is accountable for it becomes both more important and less legible — at exactly the moment the human career pipeline that used to produce accountable experts is thinning out.

This document is where I ask all three questions together, and it anchors an ongoing, open conversation — not a static position. Cupel began as a technical answer to the second question (how do we verify competence when credentials no longer discriminate between a human and a model). It has become the place I am building to hold all three, in public, with evidence, under my name.

---

## The supervision question

When an AI agent files a tax return, drafts a contract, recommends a treatment, or writes production code, someone needs to catch its mistakes. That someone has historically been a qualified human — an accountant, a lawyer, a clinician, a senior engineer — whose competence we could reasonably infer from their credentials.

That inference is no longer reliable, and the pipeline that produced those qualified humans is contracting.

**AI now produces the signals of competence without the substance.** Leading models score above 79% on the CFA Level III[^cfa]. Similar results hold in medicine, engineering, and law. Credentials that once identified capable humans now identify anyone — or anything — that can pass an exam.

**The supply of qualified supervisors is contracting.** Entry-level technology hiring at the top 15 firms fell 25% between 2023 and 2024[^signalfire]. UK graduate technology roles fell 46% in 2024[^rezi]. Anthropic's own Economic Index reports hiring of 22-25 year-olds into the most AI-exposed roles down roughly 14% by early 2026[^aei2026], even though no broad unemployment signal has appeared yet in those occupations. Junior roles are where senior practitioners are made. Organisations compressing junior hiring are defunding their future capacity to supervise the work they are about to automate.

**Governance has not caught up.** Only one in five companies has mature governance for autonomous agents[^deloitte]. 78% of AI users bring personal tools to work, often outside any oversight framework[^aigov]. Multi-agent system adoption rose 327% in four months[^databricks].

We are deploying systems faster than we are identifying the humans who can supervise them.

---

## The human stakes

The data above is not abstract. It describes a specific, live anxiety: about one in five workers in the most AI-exposed occupations already report concern about displacement, software engineers among the most concerned of any profession surveyed[^aei2026]. The honest reading of the evidence in mid-2026 is neither "mass unemployment has arrived" nor "nothing is happening" — it is that the entry ramp into knowledge work is narrowing first, before any headline unemployment number moves, because employers can defer hiring long before they lay anyone off.

That distinction matters because it changes what the correct response looks like. If the crisis were simply "jobs disappearing," the response would be income support and retraining. But if the crisis is "the apprenticeship structure that turns novices into accountable experts is quietly breaking," the response has to include a way of recognising and verifying competence that does not depend on that structure functioning as it used to. That is what Cupel is for — not a cushion against displacement, but infrastructure for the world in which fewer people get to become senior through the traditional route, and we still need to know who can be trusted to supervise.

This is also why the conversation cannot stay inside standards bodies and HR-tech vendors. It belongs to anyone whose career ladder just had several rungs removed, and to anyone deciding how much authority to hand to a system nobody has verified a human can actually oversee.

---

## Why more credentials won't solve this

The market has responded to the verification problem by issuing more credentials. The U.S. went from 334,000 credentials in 2018 to 1.85 million by 2025[^credcount]. Yet HR professionals report decreasing confidence in what those credentials mean, and Gartner forecasts that one in four candidate profiles could be entirely AI-fabricated by 2028[^gartner].

When everyone optimises for the measure, the measure stops working. That is Goodhart's Law in action — and credentials, on their own, are now subject to it.

---

## The missing connection

Five separate systems already support professional trust:

- Identity and fraud detection
- Skills assessment
- Digital credentials
- Content authenticity (content credentials)
- Reputation and peer validation

Each works on its own. None connect. There is no shared way to describe, compare, or verify proof of real competence across them. Each system answers a narrow question; together they should answer "can this person catch an AI error in this domain?" — but they don't.

We don't need new systems. We need a common layer that links the systems we already have, so that human expertise becomes legible at the level the agent era demands.

---

## Below the abstraction layer

Cupel is built on a specific claim about what makes competence verifiable. Most credentials measure performance *above* the AI abstraction layer — on tasks AI can now also perform. The signal that matters now is competence *below* the abstraction layer: the ability to catch an error in the AI's work, intervene meaningfully, and accept responsibility for what was produced.

A doctor who uses AI to read a scan and then makes the diagnosis is fully responsible for it. A code reviewer who approves an AI-generated patch must be able to recognise a subtle vulnerability the model missed. A compliance officer who signs off on an AI-drafted disclosure must understand the rule the AI applied. "Human in the loop" is meaningful only when the human can actually catch the loop's mistakes.

Verifying that competence — not the credential, not the title, but the genuine capacity to supervise — is the gap Cupel addresses.

---

## Our beliefs

**Competence comes from real work.** What people have actually done — their decisions, outputs, and outcomes — reveals more than any credential. Capturing and verifying that record should be the goal.

**Human judgment needs attribution.** As AI produces more professional work, we must be able to tell what was done by humans and by machines, and where the human's judgment was genuinely exercised. The EU AI Act's human oversight requirements (Article 14) and provenance rules (Article 50) make this not just an ethical principle but a legal one.

**Verification must reach below the abstraction layer.** Credentials that measure surface performance no longer suffice. The signal that matters is whether a person can supervise, audit, and course-correct the systems they are nominally responsible for.

**Open standards build real trust.** C2PA and W3C Verifiable Credentials succeeded because they are open and cooperative. Competence provenance should follow the same path.

**Interoperability helps everyone.** A shared format — instead of a new platform — lets every system contribute and benefit. No one can fix this alone.

**Evidence beats polish.** AI has made confident-sounding commentary about the future of work nearly free to produce, and correspondingly cheap to trust[^hbr2026]. The way to be worth reading in that environment is to keep citing primary data, updating the position when the data changes, and saying plainly what is still uncertain.

---

## What Cupel is

Cupel is an open framework for tracing professional competence, anchored to an ongoing public record of the wider conversation it sits inside. It defines:

- A common vocabulary for five trust signal types: credential-based, assessment-based, outcome-based, peer-verified, and AI audit trail
- A lightweight data format (JSON-LD) for expressing and linking these signals — in draft, not yet published (see the [roadmap](https://github.com/vdmeu/CUPEL/blob/main/ROADMAP.md))
- Guidelines for evaluating how much evidential weight each signal carries
- Mappings to existing standards so platforms can integrate gradually — planned, not yet drafted

Cupel works with existing systems, not against them. Any credential issuer, assessment body, or HR platform can participate without changing their core infrastructure.

The framework is designed for selective disclosure. Participation is voluntary. Individuals choose what signals to share and with whom. Cupel maintains no central registry of people.

The project is open-source (Apache 2.0). The trademark (UK IPO No. UK00004352899) protects the name from being claimed by someone unrelated to the project — it is not yet backed by a conformance test suite or multi-party governance, unlike the Linux or OpenID names it's loosely modelled on.

Alongside the framework, [cupel.foundation](https://cupel.foundation) publishes Field Notes — periodic, evidence-based commentary tracking how the provenance, credentialing, and human-impact threads are actually developing — and a running State of the Conversation reference page linking the primary sources worth reading.

---

## Who we invite

**Implementers.** Connect your existing credentials or assessments to the Cupel taxonomy. You don't need to adopt everything at once.

**Standards bodies.** Work with us on mappings between Cupel and your specifications — W3C, C2PA, Credential Engine, 1EdTech, and others.

**Researchers.** Help build the evidence base for what makes a professional signal trustworthy, especially in human-AI collaboration.

**Practitioners and employers.** Share what genuine competence looks like in your field. Your insight shapes the framework.

**Anyone deploying AI responsibly.** If you are deploying AI systems and finding you don't know who can genuinely supervise them, you are facing the problem Cupel is built to address.

**Anyone living the human stakes.** If your career ladder lost rungs, if you are the last cohort trained the old way, or if you are simply trying to think clearly about what happens next — this conversation is for you too.

---

## About the author

Cupel is written and maintained by **Eugene Andrie Merwe-Chartier**. It is not a company and not a product; it is a framework and a running argument, published openly so it can be checked, challenged, and built on. Correspondence is welcome at [contact@cupel.foundation](mailto:contact@cupel.foundation); the full source, discussion threads, and revision history are at [github.com/vdmeu/CUPEL](https://github.com/vdmeu/CUPEL).

---

Documentation and source: [github.com/vdmeu/CUPEL](https://github.com/vdmeu/CUPEL)
Contact: [contact@cupel.foundation](mailto:contact@cupel.foundation)
Preprint: [DOI 10.5281/zenodo.18976395](https://doi.org/10.5281/zenodo.18976395)

---

## Sources

[^cfa]: NYU Stern School of Business and Goodfin, "AI Performance on the CFA Examinations," 2025.
[^signalfire]: SignalFire, "State of Tech Talent Report," 2024 — entry-level hiring at top 15 firms.
[^rezi]: Rezi.ai, "UK Tech Graduate Roles 2024," January 2026.
[^deloitte]: Deloitte, "State of Generative AI in the Enterprise," 2026.
[^aigov]: AI Governance Benchmark, "Shadow AI in the Workplace," 2025.
[^databricks]: Databricks, "Multi-Agent System Adoption Report," 2026.
[^credcount]: Credential Engine, "Counting U.S. Secondary and Postsecondary Credentials," 2025.
[^gartner]: Gartner, "Predicts 2025: The Future of Identity and Hiring Fraud," 2024.
[^aei2026]: Anthropic, "The Anthropic Economic Index Report," March 2026 — hiring trends for 22-25 year-olds in high-exposure occupations and worker-reported displacement concern.
[^hbr2026]: Harvard Business Review, "Has AI Ended Thought Leadership?," March 2026.
