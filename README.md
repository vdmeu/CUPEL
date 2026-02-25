# Cupel

**Professional Competence Provenance Framework**

An open specification for how professional competence is verified, tracked, and trusted in the age of AI.

**GitHub:** https://github.com/vdmeu/CUPEL

---

## The Problem

Traditional credentials — degrees, certifications, licensing exams — are collapsing as reliable signals of professional competence. AI can pass any exam, generate any portfolio, and fabricate any identity. The systems we built to establish professional trust over the last century are breaking down faster than replacements are being built.

The market's response has been fragmented: identity verification platforms fight fraud, skills assessment tools replace resume screening, blockchain credentialing startups issue tamper-proof badges, and content provenance standards track media authenticity. Each solves a piece of the puzzle. None connect.

**This project defines the missing layer: a common framework for describing, linking, and evaluating professional competence signals across the entire trust ecosystem.**

## What This Is

A formal, open specification — not a product — that defines:

- **A taxonomy of trust signal types** (credential-based, assessment-based, outcome-based, peer-verified, provenance-tracked)
- **A schema for signal interoperability** (how these different types relate, compose, and reinforce each other)
- **Evaluation criteria for signal quality** (what makes a trust signal meaningful vs. noise)
- **A governance model** for maintaining trust lists and certification standards
- **Interoperability standards** for connecting existing platforms into a coherent professional trust infrastructure

Think of it as what [C2PA](https://c2pa.org) does for media provenance, applied to professional competence. The name comes from the metallurgical assay process: a cupel burns away impurities to reveal the true composition of precious metals. Cupel does the same for professional trust signals.

## Why Open Source (and Why the Name Matters)

This problem requires cross-industry adoption, trust from multiple stakeholders, and interoperability between competing platforms. A proprietary solution can't achieve this. An open standard can.

C2PA didn't succeed by launching a product. It succeeded by publishing a specification and building a coalition. The professional competence provenance problem is structurally identical.

## Project Structure

```
cupel/
├── docs/
│   ├── 00-genesis/          # Origin story and foundational analysis
│   ├── 01-manifesto/        # The public-facing case for this framework
│   ├── 02-specification/    # The formal technical specification
│   └── 03-research/         # Supporting research and evidence
├── schema/                  # Core schema definitions (JSON-LD, etc.)
├── CONTRIBUTING.md          # How to contribute
├── ROADMAP.md               # Development roadmap
├── LICENSE                  # AGPL-3.0 (GNU Affero General Public License v3)
└── README.md                # This file
```

## Current Status

**Phase 0: Genesis** — Establishing the analytical foundation and project structure.

See [docs/00-genesis/conversation-context.md](docs/00-genesis/conversation-context.md) for the full chain of reasoning, market research, and strategic analysis that led to this project.

## Roadmap

See [ROADMAP.md](ROADMAP.md) for the full development plan.

## Relationship to Existing Standards

This framework does not compete with existing efforts. It sits on top of them as a cross-cutting evaluation and interoperability layer:

| Standard / Initiative | Role | Relationship |
|---|---|---|
| W3C Verifiable Credentials | Cryptographic verification | Foundation layer |
| C2PA | Content provenance architecture | Template / parallel standard |
| Credential Engine / CTDL | Academic credential descriptions | Extended to full professional competence |
| Open Badges 3.0 / CLR | Micro-credentials and learner records | Consumed as input signals |
| ISO/IEC standards | Security and privacy | Compliance framework |

## Licence

Core specification and schema: [AGPL-3.0](LICENSE) (GNU Affero General Public License v3.0)

Certain evaluation methodologies and scoring algorithms may be released under separate commercial licences as part of an open core model. These will be clearly marked and separated from the open specification.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). All contributions require a Contributor Licence Agreement (CLA).

---

*Cupel was initiated in February 2026. The genesis document establishes prior art and the analytical foundation for all subsequent work.*
