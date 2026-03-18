# Editorial Lens: Dual-Audience Principle

Every concept in Cupel must exist in two forms. Before publishing or merging any content,
check it against both registers.

---

## The Two Surfaces

| Surface | Audience | Tone | Jargon | Format |
|---|---|---|---|---|
| **Website** (`cupel.foundation`) | Practitioners, employers, HR professionals, journalists | Plain English, active voice, concrete | None — translate every technical term | Short paragraphs, no tables, no acronyms without definition |
| **GitHub + paper** (`github.com/vdmeu/CUPEL`, preprint) | Standards architects, implementers, researchers, technical reviewers | Precise, formal, referenced | Acceptable — define on first use | Structured sections, tables, citations, schema snippets |

If a concept only exists in one register, it is incomplete.

---

## The Five Trust Signal Types — Both Registers

| Technical name | Plain-English translation |
|---|---|
| Credential-based | Qualifications and licences you've been awarded |
| Assessment-based | Tests and evaluations you've passed |
| Outcome-based | Real results from real work — what you actually did and what happened |
| Peer-verified | Endorsements from people who've worked with you and can vouch for it |
| Provenance-tracked | A record of how the work was done — what tools were used, where you made the key decisions, and who is accountable for the outcome |

---

## Key Distinctions That Must Be Explained Simply

These emerged from external critique (GitHub issue #22) and are likely to be misunderstood
by non-technical readers. Each needs a plain-English treatment on the website.

### 1. "How work was done" vs. "what was produced"
**Technical:** Provenance-tracked signals capture process metadata (iteration records,
human intervention points, tool-identifier) in addition to final outputs.

**Plain English:** AI can produce a polished final document. What it can't fake is the
messy human trail — the drafts, the changes of direction, the specific moments where
someone made a judgment call. Cupel captures that trail.

### 2. "Vocabulary, not surveillance"
**Technical:** The framework defines a schema for describing competence signals. Selective
disclosure is a design principle: practitioners control what is shared, with whom, and why.

**Plain English:** Cupel doesn't require employers to spy on workers. You decide what
signals you want to share and with whom — like choosing which references to list on a CV,
but with a standard format so everyone can read them.

### 3. "Five signals, not one"
**Technical:** The multi-signal model is inherently resistant to single-vector gaming.
Inflating peer-verified signals does not compensate for absence of outcome-based or
provenance-tracked evidence.

**Plain English:** No single signal is enough. Someone with great references but no
track record of results, or great results but no accountability trail, doesn't have
a complete picture. Cupel looks at all five together.

### 4. "Attribution clarity, not a human-AI ratio"
**Technical:** Provenance-tracked signals record at which decision points human judgment
was exercised and what the consequences were — not a numerical decomposition of
human vs. machine effort.

**Plain English:** The question isn't "how much of this did AI do?" It's "who made the
important decisions, and can they account for them?" A doctor who uses AI to analyse
a scan and then makes the diagnosis is fully responsible for that diagnosis.

### 5. "Issuer accountability, not just signal quality"
**Technical:** The oracle problem: a framework relying on issuing systems for metadata
is bounded by those systems' integrity. The issuer trust graph is a market mechanism
for surfacing issuer reliability over time.

**Plain English:** A badge is only as trustworthy as the organisation that issued it.
Cupel tracks which issuers have a consistent record of accurate signals — so over time,
a badge from a reliable body carries more weight than one from an unknown source.

---

## Review Checklist

Before publishing any content:

**For website content:**
- [ ] Can a non-technical hiring manager understand this paragraph without stopping?
- [ ] Is every technical term either avoided or translated in plain English immediately?
- [ ] Does it answer "what does this mean for me?" without requiring the reader to infer?
- [ ] No acronyms without definition (JSON-LD, W3C VC, CTDL, AGPL are all jargon here)

**For GitHub / spec / paper content:**
- [ ] Is every claim precise enough to be falsified or implemented?
- [ ] Are normative requirements clearly distinguished from informative guidance?
- [ ] Does it map to or reference at least one existing standard where applicable?
- [ ] Are new terms defined before use?

**For both:**
- [ ] Does this concept exist in both registers? If not, create the missing version.
- [ ] Does this contradict anything in the genesis doc or manifesto? If so, resolve explicitly.
- [ ] Is this the minimum necessary to convey the idea, or is it over-engineered?

---

## Good Practice for Standards Documents (spec and paper)

Modelled on W3C, IETF RFC, and C2PA specification conventions:

- Use **SHALL** / **MUST** for normative requirements, **SHOULD** for recommendations, **MAY** for options
- Every normative requirement has a testable conformance criterion
- Schema fields are named in `camelCase`, documented with type, cardinality, and an example value
- Each section begins with a one-sentence statement of what the section specifies
- Tables are preferred over prose for comparative information (signal types, standard mappings)
- All external references are cited; claims about market data include source and date

---

*This document is for internal editorial use. It should be updated whenever a new concept
is added to the framework that requires explanation across both surfaces.*
