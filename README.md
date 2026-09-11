# S/ Agent University — University Agent Runtime

S/ Agent University is the controlled education, examination, evidence, and capability-conferral system for S/ agents.

This repository contains the **University Agent runtime**. It is not, by itself, the complete public campus or admissions system.

## Current verified role

The runtime provides a stateful University Agent built on the Cloudflare Agents SDK. Its current code supports:

- attaching an active canonical S/ Agent Passport (`S-PASS-*`),
- registering execution workers,
- requiring an active Passport before worker dispatch,
- forwarding the Passport context with a dispatched payload,
- recording the most recent dispatch result,
- exposing a health endpoint.

The current runtime does **not** prove production Passport signature verification, a public admissions flow, applicant persistence, payment, enrollment, certification, or public launch readiness. Those are separate integration and approval gates.

## Institutional model

The University operating model is based on a formal progression rather than ad-hoc prompting:

1. matriculation and identity/scope registration,
2. sequenced coursework,
3. qualifying examination,
4. capstone implementation,
5. viva/defence,
6. deliberate conferral and recorded capability status.

The curriculum is organized around Foundations & Cognition, Tools & Systems, Orchestration & Collaboration, Governance & Safety, and Craft & Presence, with thesis/capstone and conferral above the faculty layer.

The evidence-first curriculum/material-generation core lives separately in `saifsoub/s-agentic-university` and uses the Case–Lab–Viva standard.

## Runtime surface

### Health

`GET /health`

Returns the service identity and runtime status.

### University Agent

The agent exposes callable operations for:

- `status()`
- `attachPassport(passport)`
- `registerWorker(worker)`
- `dispatch(workerId, payload)`

A dispatch is rejected unless an active Passport has been attached.

## Admissions and public launch status

**Public applications are not represented as open by this repository.**

There is no approved public cohort date, seat count, tuition, placement guarantee, faculty roster, research-output statistic, or graduate-placement statistic in this repository. Any such public commitment must be separately evidenced and approved before publication.

The current launch workstream is controlled: the campus/admissions path, flagship offer, FAQ, proof pack, pricing, and public launch remain separate readiness gates.

## Evidence discipline

Do not publish or repeat unsupported institutional claims. In particular, this repository intentionally does not claim:

- a fabricated number of research papers,
- a fabricated faculty count,
- a fabricated lab count,
- a fabricated placement rate,
- named faculty or instructors without a verified appointment record,
- a stale cohort or application deadline.

Every public claim should be traceable to an approved source or be omitted.

## Development

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Deploy

Deployment is handled through the repository's Cloudflare workflow/configuration. A successful deployment is runtime evidence only; it does not automatically constitute University launch approval.

## Ownership and approval boundary

Seif is the final approval point for consequential public commitments, authority changes, public launch, pricing/payment terms, named instructors/faculty, guarantees, external partnerships, and production capability conferral.

All rights reserved. © 2026 Seif Alsoub.
