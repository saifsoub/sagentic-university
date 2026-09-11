import { Agent, callable, routeAgentRequest } from "agents";

type Passport = {
  passport_id: string;
  agent_name: string;
  agent_type: string;
  status: "active" | "revoked" | "expired";
  capabilities?: string[];
  permissions?: Record<string, boolean>;
  checksum?: string;
  signature?: string | null;
};

type WorkerRecord = {
  id: string;
  name: string;
  endpoint: string;
  enabled: boolean;
};

type DispatchRecord = {
  worker_id: string;
  ok: boolean;
  status: number;
  at: string;
};

type UniversityState = {
  passport: Passport | null;
  workers: WorkerRecord[];
  last_dispatch: DispatchRecord | null;
};

export interface Env {}

const applicationReviewUrl = "https://form.jotform.com/262538060555054";

const landingPage = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>S/ Agent University — Controlled Launch Candidate</title>
  <meta name="description" content="Evidence-first education and assessment for agents before consequential capability is conferred." />
  <style>
    :root { color-scheme: light dark; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    body { margin: 0; background: Canvas; color: CanvasText; }
    main { max-width: 920px; margin: 0 auto; padding: 64px 24px 80px; }
    .eyebrow { font-size: 13px; letter-spacing: .12em; text-transform: uppercase; opacity: .65; }
    h1 { font-size: clamp(40px, 7vw, 76px); line-height: .98; margin: 18px 0 22px; max-width: 12ch; }
    .lead { font-size: 20px; line-height: 1.55; max-width: 720px; opacity: .82; }
    .notice { margin: 32px 0; padding: 18px 20px; border: 1px solid currentColor; border-radius: 16px; opacity: .82; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; margin: 42px 0; }
    .card { padding: 22px; border: 1px solid color-mix(in srgb, currentColor 20%, transparent); border-radius: 18px; }
    .card h2 { margin: 0 0 10px; font-size: 18px; }
    .card p { margin: 0; line-height: 1.55; opacity: .75; }
    .flow { line-height: 1.8; padding-left: 22px; }
    .cta { display: inline-block; margin-top: 16px; padding: 14px 20px; border-radius: 999px; border: 1px solid currentColor; color: inherit; text-decoration: none; font-weight: 650; }
    .small { margin-top: 36px; font-size: 14px; line-height: 1.6; opacity: .66; }
  </style>
</head>
<body>
  <main>
    <div class="eyebrow">S/ Agent University · controlled launch candidate</div>
    <h1>Prove readiness before authority.</h1>
    <p class="lead">S/ Agent University is an evidence-first education and assessment system for agents. Learning, cases, labs, remediation and review produce evidence; capability and Passport authority remain separate, deliberate owner-controlled gates.</p>

    <div class="notice"><strong>Pre-launch status.</strong> Public applications are not represented as open. The review form below is a controlled qualification path and does not guarantee admission, certification, capability, production access or Passport activation.</div>

    <section class="grid" aria-label="University operating model">
      <div class="card"><h2>Evidence, not confidence</h2><p>Observable outcomes, source references, cases, labs, failure conditions and review evidence replace informal “looks good” promotion.</p></div>
      <div class="card"><h2>Remediation is a real state</h2><p>A failed or incomplete criterion routes to targeted remediation and reassessment instead of silent promotion.</p></div>
      <div class="card"><h2>Authority stays separate</h2><p>Passing education may support a capability review. It never grants capability or Passport authority automatically.</p></div>
    </section>

    <h2>Controlled review path</h2>
    <ol class="flow">
      <li>Submit a qualification review request.</li>
      <li>Evidence and risk context are reviewed.</li>
      <li>The decision is recorded as Accept, Hold or Decline.</li>
      <li>Accepted applicants receive scoped onboarding and prerequisites.</li>
      <li>Learning evidence proceeds through separate capability review only when ready.</li>
    </ol>

    <a class="cta" href="${applicationReviewUrl}" target="_blank" rel="noopener noreferrer">Request application review</a>

    <p class="small"><strong>Data notice:</strong> information submitted through the controlled review form is used to evaluate the request and plan scoped onboarding. Submission itself grants no authority. Public launch date, pricing, seats, guarantees, named faculty, partnerships and other consequential commitments remain unapproved unless explicitly stated elsewhere by the owner.</p>
  </main>
</body>
</html>`;

export class UniversityAgent extends Agent<Env, UniversityState> {
  initialState: UniversityState = {
    passport: null,
    workers: [],
    last_dispatch: null,
  };

  @callable()
  status() {
    return {
      ready: Boolean(this.state.passport && this.state.passport.status === "active"),
      passport_id: this.state.passport?.passport_id ?? null,
      worker_count: this.state.workers.filter((worker) => worker.enabled).length,
      last_dispatch: this.state.last_dispatch,
    };
  }

  @callable()
  attachPassport(passport: Passport) {
    if (!passport?.passport_id?.startsWith("S-PASS-")) {
      throw new Error("Invalid S/ Agent Passport id");
    }
    if (passport.status !== "active") {
      throw new Error("Passport must be active");
    }
    this.setState({ ...this.state, passport });
    return { attached: true, passport_id: passport.passport_id };
  }

  @callable()
  registerWorker(worker: WorkerRecord) {
    if (!worker?.id || !worker?.name || !worker?.endpoint) {
      throw new Error("Worker id, name, and endpoint are required");
    }
    const workers = [
      ...this.state.workers.filter((existing) => existing.id !== worker.id),
      { ...worker, enabled: worker.enabled !== false },
    ];
    this.setState({ ...this.state, workers });
    return { registered: true, worker_id: worker.id };
  }

  @callable()
  async dispatch(workerId: string, payload: unknown) {
    if (!this.state.passport || this.state.passport.status !== "active") {
      throw new Error("Active Agent Passport required before dispatch");
    }

    const worker = this.state.workers.find(
      (candidate) => candidate.id === workerId && candidate.enabled,
    );
    if (!worker) throw new Error(`Worker not registered or disabled: ${workerId}`);

    const response = await fetch(worker.endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-s-agent-passport": this.state.passport.passport_id,
      },
      body: JSON.stringify({
        passport: this.state.passport,
        payload,
        dispatched_at: new Date().toISOString(),
      }),
    });

    const last_dispatch: DispatchRecord = {
      worker_id: workerId,
      ok: response.ok,
      status: response.status,
      at: new Date().toISOString(),
    };
    this.setState({ ...this.state, last_dispatch });

    const contentType = response.headers.get("content-type") ?? "";
    const result = contentType.includes("application/json")
      ? await response.json()
      : await response.text();

    return { ...last_dispatch, result };
  }
}

export default {
  fetch(request: Request, env: Env) {
    const url = new URL(request.url);

    if (request.method === "GET" && (url.pathname === "/" || url.pathname === "/admissions")) {
      return new Response(landingPage, {
        status: 200,
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "no-store",
          "x-robots-tag": "noindex, nofollow",
        },
      });
    }

    if (url.pathname === "/health") {
      return Response.json({
        ok: true,
        service: "S/Agentic University Agent",
        runtime: "Cloudflare Agents SDK",
      });
    }

    return (
      routeAgentRequest(request, env) ??
      new Response("S/Agentic University Agent", { status: 200 })
    );
  },
};
