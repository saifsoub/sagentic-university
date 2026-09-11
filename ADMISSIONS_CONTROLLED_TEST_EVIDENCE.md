# S/ Agent University — Controlled Admissions Test Evidence

**Status:** internal pre-launch evidence only. This does not authorize public applications, publication, pricing, admission guarantees, certification, capability, or Passport activation.

**Execution worker:** GPT-5.6 Sol — `S-PASS-20260911-001`.

## Durable intake

A durable pre-launch intake has been created in the owner's connected Jotform workspace:

- **Application review form:** https://form.jotform.com/262538060555054
- Purpose: qualification intake only; the form explicitly states that submission does not guarantee admission, certification, capability, or Passport activation.
- Fields cover identity, current agent/system, intended use, learning objective, capability baseline, risk context, evidence, desired proof outcome, preferred language, and privacy/consent.
- Confirmation text states that the request has been received, is not an admission decision, and routes to qualification review with an expected controlled-test review window.

## Persistence test

Two synthetic applications were submitted through the connected form service and persisted in its review inbox:

1. `TEST Applicant Alpha` — application submission `6649792626019713173`
2. `TEST Applicant Beta` — application submission `6649792799767150822`

A fresh form read after both tests reported `submission_count = 2`, proving that submissions persisted outside browser-only local state.

## Durable reviewer decision records

Internal reviewer decisions are captured separately from applicant intake:

- **Admissions review form:** https://form.jotform.com/262537137737060
- Required decision values: Accept / Hold / Decline.
- Reviewer record includes evidence reviewed, rationale, missing evidence/remediation, risk tier, onboarding scope, next action, owner-approval flag, and certification that the decision does not grant capability or Passport authority.

Synthetic decisions:

- Alpha — **Accept for scoped onboarding test only** — review submission `6649793856017212890`.
- Beta — **Hold / remediation required** — review submission `6649794003591186415`.

The Beta hold requires bounded failure/recovery evidence before onboarding proceeds, demonstrating that the test path can stop rather than silently promote a high-risk applicant.

## Acceptance → onboarding handoff

A separate scoped onboarding record is used after an accepted admissions decision:

- **Scoped onboarding acknowledgement:** https://form.jotform.com/262537665247062
- Alpha onboarding record: `6649794829762694856`.
- Pathway: Evidence-First Agent Practice — synthetic controlled QA pathway.
- Boundaries: internal research only, approved sources, no external publishing or transactions, and no capability/Passport activation without separate owner review.
- First learning release requires a source-grounded brief, claim-to-source mapping, uncertainty disclosure, an insufficient-evidence case, and reviewer notes.

## What this test closes

Verified in the controlled environment:

- real application form exists;
- submission persistence exists outside local browser state;
- two test applications persisted;
- a durable review queue exists;
- reviewer decisions are recorded separately with Accept/Hold/Decline and evidence/rationale;
- a held high-risk case routes to remediation;
- an accepted case has a durable scoped onboarding handoff;
- admission and capability/Passport authority remain separate gates.

## Remaining public-launch gates

Still **not** evidenced or approved:

1. Canonical public University landing/campus destination and CTA integration.
2. Public-facing privacy/data notice review beyond the controlled-form consent text.
3. Browser-level verification of the post-submit confirmation/autoresponder experience; API submission verified persistence but does not itself prove visual/email delivery.
4. Owner approval of final public launch date and any consequential public commitments.
5. Merge/deployment of this candidate branch.

Until those gates are closed, public applications must continue to be represented as **not open**.
