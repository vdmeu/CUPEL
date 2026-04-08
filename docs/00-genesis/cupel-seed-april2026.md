# Cupel: Project Seed Document
*Synthesised from prior project context — April 2026*

---

## What Cupel Is

Cupel is an open-source framework for **human professional competence provenance** — a system for generating, maintaining, and making legible continuous trust signals about what individual humans actually know and can do, as distinct from what their credentials say.

**The name:** The cupel is the ceramic vessel used in fire assay metallurgy to separate precious metals from base metals. Metaphorically: separating genuine human competence from noise — credentials, proxies, and performance — in a world where AI can simulate competence fluently.

**Licence:** Apache 2.0.

---

## The Core Thesis

AI agents can now simulate competence convincingly across almost every knowledge domain. This creates a verification crisis: the signals we have historically used to infer human competence — CVs, credentials, job titles, outputs — are now producible by machines. Simultaneously, the apprenticeship structures that built genuine competence in the first place are collapsing under AI-driven junior hiring compression.

The result: organisations are losing the ability to know where genuine human expertise sits in their workforce, at exactly the moment they most need to know — because agents require human supervisors who can actually catch agent errors.

Cupel's thesis: **human competence provenance is becoming critical AI infrastructure.** Not a nice-to-have HR feature. Load-bearing infrastructure for reliable agent deployment.

---

## The Problem Cupel Solves

### 1. The Verification Gap
Existing verification systems (degrees, certifications, LinkedIn endorsements, Credly badges) verify *credential acquisition* at a point in time. They do not verify:
- Whether competence is current
- Whether it has been applied in real conditions
- Whether it holds below the AI abstraction layer (i.e., can this person catch an AI error in this domain?)
- Whether it is genuine versus AI-assisted output

### 2. The Apprenticeship Pipeline Collapse
- Entry-level tech hiring at the top 15 tech firms fell 25% from 2023–2024 (SignalFire)
- UK tech graduate roles fell 46% in 2024 (Rezi.ai, January 2026)
- Junior roles are the apprenticeship layer — where seniors are made
- Organisations eliminating juniors are defunding their future senior cohort
- By 2030, the risk is a generation of "architects who have never laid a brick" — practitioners who cannot operate below the AI abstraction layer

This creates a specific, urgent need: identifying which humans have *real* expertise below the abstraction layer, and preserving those humans in the right roles.

### 3. The Organisational Knowledge Decay Problem
As junior roles disappear and experienced staff use agents rather than documenting their knowledge:
- Undocumented organisational knowledge concentrates in a shrinking senior cohort
- When those people leave, organisations lose the context that their agents depended on
- The only remaining "institutional memory" becomes agent context trained on incomplete documentation
- This is a new class of organisational risk with no framework, no regulation, no established management practice

Cupel's continuous provenance signals become an early warning system for this decay — not just a credential database.

### 4. The Supervision Gap
As agent adoption accelerates (multi-agent system adoption +327% over four months, Databricks 2026), organisations face a supervision paradox:
- Agents produce outputs at scale
- Organisations lack sufficient experienced humans to validate those outputs against real-world context
- The population that *can* supervise agents is not identified, not tracked, and not managed as a strategic resource

---

## The Market Context

### The verification economy has reached the market
- OpenAI has acquired Promptfoo (AI testing) to strengthen agent security checks
- ETS (Educational Testing Service) is active in AI competence verification
- Credly (digital credentials) is an established incumbent
- EU AI Act transparency requirements activate high-risk compliance in 2026
- The Partnership on AI (February 2026) identified fragmentation in transparency documentation as a critical gap across the value chain

**The window:** The general AI output verification conversation is now crowded. Cupel's differentiation must be sharp: *human* professional competence provenance — specifically the trust layer that supervises agents — is distinct and unoccupied. The risk is being subsumed into the broader AI output verification conversation.

### The trust/governance gap is now consensus
- Only 1 in 5 companies has mature governance for autonomous agents (Deloitte, 2026)
- McKinsey RAI maturity average: 2.3/4; only ~30% of organisations reach level 3+ in governance
- 78% of AI users bring personal tools to work (shadow AI) — ungoverned deployment at scale
- McKinsey: "active mitigation lags behind risk awareness across nearly every AI risk category"
- Confidence in organisational response to AI incidents has *declined* even as AI use has increased

---

## The Productics Stratification Principle (Commercial Model Constraint)

This is the most important strategic constraint on how Cupel must be built and monetised.

Software/data products survive AI disruption in one of two positions:
1. **Continuously fresh, irreplaceable signals** — data or context that is *live*, *current*, and cannot be replicated from training data
2. **Fully user-owned tools** — open source or self-hosted, where users own all the value

**The middle collapses.** Static dashboard access, periodic reporting, and point-in-time credential snapshots are commercially vulnerable — they will be substituted or commoditised.

**Implication for Cupel:** Cupel's commercial layer must generate *continuous provenance signals*, not static credential access. The value must compound over time, not be delivered once at onboarding. Examples of what survives:
- Continuous signals of competence application (live provenance)
- Longitudinal records of real-world decisions and outcomes attributed to identifiable humans
- Evidence of current practice, not historical qualification

What does not survive as a revenue model:
- A database of verified credentials (Credly already has this)
- A badge system (commoditised)
- A one-time assessment report (static, no compounding value)

---

## Differentiation: What Cupel Is Not

| Cupel | Competitors / Adjacents |
|---|---|
| Human competence provenance (ongoing, live) | AI output verification (Promptfoo, OpenAI) |
| Verifying the *supervisor* layer | Verifying the *agent* output |
| Continuous provenance signals | Point-in-time credentials (Credly, ETS) |
| Below the AI abstraction layer | Above it |
| Open-source infrastructure | Proprietary platforms |
| Targets: can this person catch an agent error? | Targets: is this agent output correct? |

The sharpest version of the differentiation: Cupel verifies the humans that the agents depend on. Not the agents.

---

## Connection to Adjacent Workstreams

### Deployment Gap Diagnostic (separate project)
- Every organisation that takes the Diagnostic will score low on the Competence Verification dimension — because the tools do not yet exist
- The Diagnostic introduces Cupel's language and concepts (trust signals, competence provenance, verification layers) without requiring immediate adoption
- The Diagnostic is a demand-generation channel for Cupel's future market
- Product sequence: Diagnostic → Playbook → Consulting → Cupel methodology adoption → open-source community → commercial Cupel tooling

### Organisational Context Thesis
- The deepest version of the Cupel thesis: competence provenance is not just about knowing whether a person can do something — it is about whether the organisational context they operate in is *legible* enough for both humans and agents to execute reliably
- The verification problem runs from "is this person competent?" all the way to "does this organisation know what it is?"
- Context ownership is the least-covered, sharpest version of the core thesis — more defensible than governance gap framing alone

### LinkedIn Thought Leadership
- The apprenticeship pipeline collapse and supervision gap are strong content angles that build toward Cupel's market
- Posts on "who actually supervises agents?" and "how do you know which humans can catch AI errors?" seed demand
- Cupel should appear in content as a thesis before it appears as a product

---

## Open Questions / Things to Resolve

1. **Live provenance infrastructure design:** What does a continuous provenance signal actually look like technically? What events generate a signal? What is the data model?

2. **The human privacy / consent problem:** Competence provenance data is personal data. How does Cupel handle consent, data portability, and GDPR compliance while still delivering continuous signals to organisations?

3. **The gaming / Goodhart's Law problem:** Any provenance system becomes gameable once people know what signals are being measured. What makes Cupel's signals genuinely hard to fake?

4. **Who is the primary stakeholder?** The individual whose competence is being tracked, or the organisation that needs to trust them? These interests are not always aligned. Cupel's architecture needs to serve both or explicitly choose.

5. **The "below the abstraction layer" test:** Cupel's differentiation depends on verifying competence *below* the AI abstraction layer. How is this operationalised? What does a test of "can this person catch an AI error in domain X" actually look like?

6. **Relationship to Verifiable Credentials infrastructure:** The W3C Verifiable Credentials standard and decentralised identity ecosystem are the likely technical substrate. How does Cupel integrate with or extend this infrastructure?

---

## Key Data Points for Use in Cupel Context

| Data Point | Source |
|---|---|
| Entry-level tech hiring at top 15 firms: -25% (2023–2024) | SignalFire |
| UK tech graduate roles fell 46% in 2024 | Rezi.ai, January 2026 |
| 94% of leaders face AI-critical skill shortages; 1 in 3 at 40%+ gap | WEF/Cognizant 2025 |
| Only 1 in 5 companies has mature governance for autonomous agents | Deloitte, 2026 |
| Multi-agent adoption: +327% over four months | Databricks, 2026 |
| 78% of AI users bring personal tools to work (shadow AI) | AI Governance Benchmark, 2025 |
| McKinsey RAI maturity: 2.3/4 average; only ~30% at level 3+ governance | McKinsey, March 2026 |
| EU AI Act high-risk compliance activates 2026 | EU AI Act |
| OpenAI acquired Promptfoo for agent security checks | April 2026 |
| Partnership on AI: transparency documentation fragmented across value chain | February 2026 |

---

## The Thesis, in One Paragraph

AI agents can simulate competence fluently. The apprenticeship pipeline that built genuine competence is collapsing. Organisations are deploying agents faster than they can identify the humans capable of supervising them. The verification systems we have were built for a world where credentials proxied competence reasonably well — that world is gone. Cupel is the infrastructure layer that replaces it: continuous, live provenance signals about where genuine human expertise sits, specifically at the level required to supervise, audit, and course-correct AI agents. Not a credential database. Not a badge system. Load-bearing infrastructure for the agent era.

---

*This document is a seed for a new project. It should be extended with: technical architecture decisions, go-to-market sequencing, open-source community strategy, and the live provenance data model.*
