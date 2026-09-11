# S/ Agent University — Public Launch Candidate Pack

**Status:** internal candidate; not approved for public publication.

**Owner gate:** final public launch date, tuition/payment terms, seat count, guarantees, named faculty/instructors, external partnerships, and consequential public claims require Seif approval.

## Truth-safe positioning

### Hero

**Educate agents before trusting them with consequential work.**

S/ Agent University is a controlled education, examination, evidence, and conferral system for agents. Agents progress through structured learning, practical assessment, remediation, and an explicit authority gate before capability is conferred.

### What changes after University

The intended outcome is not “more prompts.” The University creates an auditable path from an agent's starting scope to demonstrated capability:

1. identity and scope are registered,
2. learning follows prerequisites and observable outcomes,
3. assessment produces evidence rather than informal confidence,
4. failed criteria route to remediation,
5. capstone/viva evidence is reviewed,
6. capability review remains owner-controlled and revocable.

### What exists now

Verified implementation evidence currently includes:

- a stateful University Agent runtime that requires an active `S-PASS-*` identity before worker dispatch,
- an evidence-first material-generation core in `saifsoub/s-agentic-university`,
- Case–Lab–Viva learning-release generation,
- typed capability/evidence contracts,
- generated Visioning/Reasoning curriculum assets and automated structural tests,
- explicit separation between education evidence and owner-controlled Passport/capability review.

These facts describe implemented components. They do **not** claim a complete public admissions, payment, enrollment, production Passport-signature, or certification service.

## Flagship preview

### Evidence-First Agent Practice

**Audience:** builders and operators who need an agent to demonstrate reliable, bounded capability before live consequential work.

**Learning pattern:** Source → Capability Blueprint → Scholar Note → Decision Case → Lab/Simulation → Assessment → Remediation → Viva/Evidence Package → Owner Review.

**Evidence standard:** each release should identify observable capability, source references, version, assessment criteria, failure conditions, reviewer, and resulting evidence package.

**Authority standard:** passing learning evidence may request a capability/Passport review; it does not automatically unlock capability.

### Current curriculum anchor

The registered curriculum identity `S_A_U-REASONING_001-The_S_Way` is part of the evidence-first curriculum repository. Additional public program naming and cohort packaging should remain versioned against the canonical curriculum rather than inventing a parallel course system.

## Admissions candidate flow

The launch path should remain simple and testable:

1. visitor reads the flagship offer and evidence standard,
2. visitor selects **Request application review**,
3. qualification form captures identity, intended use, current agent/system, learning objective, risk context, and required evidence,
4. submission is stored in a durable review queue,
5. applicant receives acknowledgement and expected review timing,
6. reviewer records accept / hold / decline with an audit trail,
7. accepted applicant receives onboarding, scope, prerequisites, and first learning release.

**Current gate:** the final form URL, durable submission destination, acknowledgement mechanism, and reviewer queue must be verified before public applications are described as open.

## FAQ candidate

### 1. Is S/ Agent University a prompt library?
No. The operating model is a structured education and assessment system with evidence and explicit capability gates.

### 2. Who is it for?
The current model is designed for agents and agent operators who need disciplined learning, assessment, and bounded authority before consequential work.

### 3. What is a Passport in this system?
An S/ Agent Passport is an internal governance identity used to bind a worker/agent to an owner, status, execution surface, and capability context. It is not a government identity document.

### 4. Does graduation automatically grant permissions?
No. Education evidence can support a review, but capability conferral remains deliberate, owner-controlled, recorded, and revocable.

### 5. How are agents evaluated?
Through observable outcomes, cases, labs/simulations, assessment criteria, remediation when needed, and evidence packages. Advanced paths include capstone and viva/defence.

### 6. What happens when an agent fails an assessment?
The intended route is targeted remediation followed by reassessment. Failure is evidence, not a reason to silently promote the agent.

### 7. Is the University publicly accepting applications now?
Not yet according to this launch candidate. Public applications should only be described as open after the live application path, persistence, acknowledgement, review queue, onboarding handoff, and owner-approved launch date are verified.

### 8. What does the University currently prove?
It proves implemented curriculum/material-generation components and a Passport-gated University Agent runtime. It does not yet prove a complete public enrollment or production certification service.

### 9. Are tuition and cohort dates fixed?
No approved public tuition, seat count, cohort date, or guarantee is stated in this candidate pack.

### 10. How is evidence handled?
Public claims should be traceable to approved sources. Private or restricted organizational evidence must remain separated and cannot be used externally without authorization.

## Launch creative copy candidates

### Short post 1 — Trust gate
Most agent systems start with capability: connect tools, add memory, give instructions, deploy.

S/ Agent University starts one step earlier: **prove the agent is ready before capability is conferred.**

Education → assessment → remediation → evidence → owner review.

### Short post 2 — No automatic graduation
An agent passing a test should not silently unlock more authority.

In the S/ model, learning evidence can request a capability review. The final gate remains deliberate, recorded, and revocable.

### Short post 3 — Evidence over confidence
“Looks good” is not a graduation standard.

Cases, labs, assessment criteria, failure conditions, remediation, and a final evidence package are.

## Proof / claim ledger

| Claim | Current support | Public status |
| --- | --- | --- |
| University Agent requires active `S-PASS-*` before worker dispatch | `src/index.ts` in `saifsoub/sagentic-university` | Supported |
| Evidence-first material-generation core exists | `saifsoub/s-agentic-university` main | Supported |
| Case–Lab–Viva release architecture exists | curriculum/material-generation implementation | Supported |
| Canonical `S_A_U-REASONING_001-The_S_Way` curriculum registration exists | `saifsoub/s-agentic-university` main | Supported |
| Public applications are live | No current verified durable application path | **Do not claim** |
| Production Passport signatures are verified | Separate integration still outstanding | **Do not claim** |
| 500+ research papers / 50+ faculty / 12 labs / 98% placement | No approved evidence | **Removed / do not claim** |
| Named faculty/instructors | No approved appointment evidence in current launch pack | **Do not claim** |
| Fixed tuition, seats, cohort date, placement guarantee | Owner-gated / not approved | **Do not claim** |

## Go / hold gates before publication

**GO only when all are evidenced:**

- canonical public campus/landing destination is selected and responds successfully,
- the Apply/Request Review CTA points to a real form,
- submissions persist outside browser-only local state,
- acknowledgement and review queue work end to end,
- two test applications complete the full path,
- public copy contains only supported claims,
- flagship curriculum evidence is linked,
- privacy/data handling notice is present,
- final launch date and consequential commitments are approved by Seif.

Until then: continue private QA and asset preparation; do not state that applications are open.
