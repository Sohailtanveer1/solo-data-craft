import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Calendar,
  Database,
  Gauge,
  Github,
  Layers,
  Linkedin,
  Mail,
  Clock,
  DollarSign,
  Zap,
  Check,
  X,
  Workflow,
  Terminal,
  Menu,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sohail Tanveer — GCP Data Engineer | BigQuery · dbt Cloud · Airflow · Iceberg" },
      {
        name: "description",
        content:
          "GCP Data Engineer specialising in batch ingestion with watermark tables, Medallion Architecture on BigQuery, dbt Cloud transformations, and streaming pipelines with Pub/Sub & Dataflow.",
      },
      { property: "og:title", content: "Sohail Tanveer — GCP Data Engineer" },
      { property: "og:description", content: "I build scalable data pipelines that turn raw data into business decisions." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

const stack = [
  "GCP", "BigQuery", "Apache Iceberg", "dbt Cloud", "Apache Airflow", "Cloud Composer",
  "Pub/Sub", "Dataflow", "GCS", "Python", "SQL", "PySpark",
  "Dataproc", "Cloud Run", "GitLab CI/CD", "Apache Beam",
];

const pillars = [
  {
    icon: Workflow,
    title: "Batch Ingestion with Watermark Tables",
    body: "Airflow DAGs on Cloud Composer orchestrate incremental batch loads from REST APIs, SFTP, and databases using watermark tables to track high-water marks per source — idempotent, replayable, and safe to re-run.",
    bullets: ["Watermark-driven incremental loads", "Multi-source: APIs, SFTP, databases", "Idempotent & replayable DAGs"],
  },
  {
    icon: Layers,
    title: "Medallion Architecture on GCP",
    body: "Raw data lands in Apache Iceberg tables on GCS (Bronze), gets cleaned and standardised into BigQuery staging (Silver), and promoted to governed live tables in BigQuery (Gold) — with full lineage end to end.",
    bullets: ["Raw: Iceberg on GCS", "Stage & Live: BigQuery", "Full lineage across all layers"],
  },
  {
    icon: Gauge,
    title: "dbt Cloud Transformations & SCD",
    body: "dbt Cloud applies business logic on the staging layer and loads live tables as SCD Type 1 (upsert) or SCD Type 2 (full history) depending on the use case — with CI/CD gating every model change before it hits production.",
    bullets: ["SCD Type 1 & 2 in live tables", "dbt Cloud CI/CD on every PR", "Semantic layer for self-serve analytics"],
  },
];

const cases = [
  {
    title: "Multi-Source Data Integration Platform",
    timeline: "Oct 2025 – Present · Coforge",
    role: "Senior Data Engineer",
    problem:
      "Business needed to sync data from 10+ heterogeneous sources — REST APIs, SFTP, and databases — into BigQuery. Every new source required weeks of bespoke engineering with no reuse across feeds.",
    stack: ["GCP", "Cloud Composer", "Airflow", "Apache Iceberg", "GCS", "BigQuery", "dbt Cloud", "Python"],
    architecture: [
      "Watermark tables track the high-water mark per source, enabling safe incremental batch loads without full re-scans",
      "Airflow DAGs on Cloud Composer orchestrate: extract → raw Iceberg on GCS → stage in BigQuery → live in BigQuery",
      "dbt Cloud applies transformations and loads live tables as SCD Type 1; config-driven so new sources require only a YAML entry",
      "Dead-letter queues and automatic retries ensure no data loss on transient source failures",
    ],
    impact: [
      "New source onboarding time cut by 40%",
      "10+ sources unified in one reusable framework",
      "99%+ pipeline reliability via watermark-based idempotency",
    ],
  },
  {
    title: "Data Product Platform (Dynamic Template)",
    timeline: "Oct 2025 – Present · Coforge",
    role: "Senior Data Engineer",
    problem:
      "Each business domain needed a governed data product but engineering built bespoke pipelines per team — no consistency, no reuse, and new products took 6+ weeks to deliver from scratch.",
    stack: ["GCP", "BigQuery", "Apache Iceberg", "GCS", "dbt Cloud", "Airflow", "Cloud Composer", "Python"],
    architecture: [
      "Dynamic dbt template generates staging models, SCD Type 2 snapshots, and semantic views per domain from a single config file",
      "Watermark-driven Airflow DAGs load incrementally into raw Iceberg tables on GCS, then promote to BigQuery stage",
      "Live layer in BigQuery uses SCD Type 2 for dimension tables — full point-in-time auditability, zero data loss on source changes",
      "Pre-aggregated semantic BigQuery views enable self-serve analytics without analyst dependency on engineering",
    ],
    impact: [
      "Data product delivery: 6 weeks → under 1 week",
      "SCD Type 2 history across all domain entities",
      "Ad-hoc analyst requests reduced by 30%",
    ],
  },
  {
    title: "Real-Time Streaming Pipeline on GCP",
    timeline: "2024 · Logic Pursuits Consulting India",
    role: "Data Engineer",
    problem:
      "Business events — transactions and user activity — were being batched overnight. A 12-hour data lag was blocking real-time dashboards, fraud detection, and operational alerts.",
    stack: ["GCP", "Pub/Sub", "Dataflow", "Apache Beam", "BigQuery", "dbt Cloud", "Cloud Composer", "Python"],
    architecture: [
      "Events published to Pub/Sub topics; Dataflow (Apache Beam) streaming job consumes, validates, and enriches records in real-time",
      "Windowed aggregations computed in Dataflow and written to BigQuery via streaming inserts with exactly-once semantics",
      "dbt Cloud materialises incremental models on top of streaming BigQuery tables, producing analytics-ready views",
      "Airflow on Cloud Composer orchestrates daily backfill jobs and monitors Dataflow pipeline health via alerts",
    ],
    impact: [
      "Data latency: 12 hours → under 2 minutes",
      "Real-time fraud detection enabled for ops team",
      "Streaming & batch unified in a single BigQuery layer",
    ],
  },
];

const comparison = [
  { label: "Time to first production pipeline", agency: "6–10 weeks", me: "10–14 days" },
  { label: "Communication path", agency: "PM → Lead → Junior dev", me: "Direct with the engineer building it" },
  { label: "Context switching cost", agency: "Shared across 5+ accounts", me: "1–2 clients at a time" },
  { label: "Overhead in your invoice", agency: "40–60% management + sales", me: "0% — you pay for engineering" },
  { label: "Architectural decisions", agency: "Committee + slide decks", me: "Made in the PR" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <FontHead />
      <Nav />
      <Hero />
      <TechRibbon />
      <Pillars />
      <CaseStudies />
      <Advantage />
      <Contact />
      <Footer />
    </div>
  );
}

function FontHead() {
  // Fonts injected at root in __root.tsx normally; here we add a runtime <link> fallback.
  return (
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
    />
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#expertise", label: "Expertise" },
    { href: "#work", label: "Case Studies" },
    { href: "#advantage", label: "Why Solo" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-base font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary">
            <Database className="h-4 w-4" />
          </span>
          Sohail<span className="text-primary">.Tanveer</span>
          <span className="ml-2 hidden font-mono text-[11px] font-normal text-muted-foreground sm:inline">
            // data engineer
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 sm:inline-flex"
          >
            Book a call <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur md:hidden">
          <nav className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground transition hover:bg-surface hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Book a call <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-20 sm:px-6 sm:pt-32 sm:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary" />
          Available for 1 new engagement · Q3 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          I build <span className="text-gradient">scalable data pipelines</span> that turn raw data into business decisions.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          GCP Data Engineer specialising in batch ingestion with watermark tables, Medallion Architecture
          (Iceberg → BigQuery), dbt Cloud transformations with SCD Type 1 & 2, and real-time streaming pipelines using Pub/Sub and Dataflow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-95"
          >
            <Calendar className="h-4 w-4" />
            Book a Data Strategy Call
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-surface"
          >
            Explore Case Studies
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4"
        >
          {[
            ["4 yrs", "GCP data engineering"],
            ["3", "GCP pipeline patterns"],
            ["99%+", "pipeline reliability"],
            ["GCP", "Professional Certified"],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-5">
              <div className="font-display text-2xl font-semibold text-foreground">{k}</div>
              <div className="mt-1 text-xs text-muted-foreground">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TechRibbon() {
  const items = [...stack, ...stack];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/40 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-sm text-muted-foreground">
        {items.map((s, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-primary/60" />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{kicker}</div>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Pillars() {
  return (
    <section id="expertise" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-28">
      <SectionHeader
        kicker="Core Expertise"
        title="Three pillars. All production. No theory."
        sub="I'm hired to ship infrastructure that finance, ops, and product can bet on — not slide decks."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:border-primary/40"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            <ul className="mt-5 space-y-2 border-t border-border pt-4 font-mono text-[12px] text-muted-foreground">
              {p.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="work" className="relative border-t border-border bg-surface/30 py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          kicker="Project Case Studies"
          title="Selected engagements"
          sub="Three GCP builds. Real architectures, real numbers."
        />
        <div className="mt-14 space-y-8">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="grid gap-0 lg:grid-cols-[1.2fr_1fr]">
                <div className="border-b border-border p-8 lg:border-b-0 lg:border-r">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    <span className="rounded-full border border-border bg-background px-2.5 py-1">{c.role}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" />{c.timeline}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                    {c.title}
                  </h3>

                  <div className="mt-6">
                    <h4 className="font-mono text-[11px] uppercase tracking-wider text-primary">Context</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.problem}</p>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-mono text-[11px] uppercase tracking-wider text-primary">Architecture</h4>
                    <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                      {c.architecture.map((a) => (
                        <li key={a} className="flex gap-3">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.stack.map((s) => (
                      <span key={s} className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between bg-background/40 p-8">
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-wider text-primary">Business Impact</h4>
                    <ul className="mt-4 space-y-3">
                      {c.impact.map((im) => (
                        <li key={im} className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/[0.05] p-3">
                          <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="font-display text-base font-semibold text-foreground">{im}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <ArchitectureDiagram variant={i} />
                    <a
                      href="#"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/40"
                    >
                      <Github className="h-4 w-4" />
                      View Codebase
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureDiagram({ variant }: { variant: number }) {
  const nodes =
    variant === 0
      ? ["Sources", "Airflow", "Iceberg Raw", "BQ Stage", "BQ Live"]
      : variant === 1
      ? ["Config", "Iceberg Raw", "BQ Stage", "dbt Cloud", "Live Tables"]
      : ["Events", "Pub/Sub", "Dataflow", "BigQuery", "dbt Cloud"];
  return (
    <div className="rounded-lg border border-border bg-background/60 p-4">
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        <span>pipeline.architecture</span>
        <Terminal className="h-3 w-3" />
      </div>
      <div className="overflow-x-auto">
      <div className="flex min-w-[320px] items-center justify-between gap-2">
        {nodes.map((n, idx) => (
          <div key={n} className="flex flex-1 items-center gap-2">
            <div className="flex flex-1 flex-col items-center">
              <div className="grid h-9 w-9 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                <Database className="h-3.5 w-3.5" />
              </div>
              <div className="mt-1.5 truncate text-center font-mono text-[10px] text-muted-foreground">{n}</div>
            </div>
            {idx < nodes.length - 1 && (
              <div className="mb-5 h-px flex-1 bg-gradient-to-r from-primary/50 to-primary/10" />
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

function Advantage() {
  return (
    <section id="advantage" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-28">
      <SectionHeader
        kicker="The One-Man Team Advantage"
        title="Senior engineer. Zero overhead. Direct line."
        sub="You're not paying an account manager to translate between you and a junior dev. You're talking to the person writing the SQL."
      />

      <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-0 border-b border-border bg-surface/60 px-6 py-4 font-mono text-[11px] uppercase tracking-wider">
          <div className="text-muted-foreground">Traditional Agency</div>
          <div className="px-4 text-center text-muted-foreground">vs</div>
          <div className="text-right text-primary">Working with Me</div>
        </div>
        {comparison.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-1 gap-2 px-6 py-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center ${
              i % 2 === 1 ? "bg-surface/30" : ""
            }`}
          >
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/80" />
              <span>{row.agency}</span>
            </div>
            <div className="hidden px-4 text-center text-xs text-muted-foreground sm:block">{row.label}</div>
            <div className="text-xs text-muted-foreground sm:hidden">{row.label}</div>
            <div className="flex items-start gap-3 text-sm font-medium text-foreground sm:justify-end sm:text-right">
              <span className="order-2 sm:order-1">{row.me}</span>
              <Check className="order-1 mt-0.5 h-4 w-4 shrink-0 text-primary sm:order-2" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { icon: Zap, h: "Production velocity", p: "First pipeline merged within 2 weeks. No discovery-phase theatre." },
          { icon: DollarSign, h: "No agency margin", p: "Every dollar goes to engineering hours, not pre-sales staff." },
          { icon: Terminal, h: "Engineer-to-engineer", p: "Talk to me in Slack. I push to your repo. No PMs in the loop." },
        ].map((b) => (
          <div key={b.h} className="rounded-xl border border-border bg-card p-6">
            <b.icon className="h-5 w-5 text-primary" />
            <div className="mt-4 font-display text-base font-semibold">{b.h}</div>
            <p className="mt-2 text-sm text-muted-foreground">{b.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative border-t border-border py-16 sm:py-28">
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-[var(--shadow-glow)] backdrop-blur sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Let's talk</div>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">
                Ready to optimize your <span className="text-gradient">data infrastructure?</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Book a 30-minute strategy call. We'll map your current stack, identify the highest-ROI fix,
                and decide if a focused engagement makes sense — no sales pitch.
              </p>
              <div className="mt-8 space-y-3">
                <ContactLink icon={Mail} label="sohailtanveerforjobs@gmail.com" href="mailto:sohailtanveerforjobs@gmail.com" />
                <ContactLink icon={Github} label="https://github.com/Sohailtanveer1/data-engineering-portfolio" href="#" />
                <ContactLink icon={Linkedin} label="https://www.linkedin.com/in/mdsohailtanveer/" href="#" />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background/70 p-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <div className="font-display text-lg font-semibold">Data Strategy Call</div>
                  <div className="text-xs text-muted-foreground">30 min · Google Meet · Free</div>
                </div>
                <Calendar className="h-5 w-5 text-primary" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {["Mon 09:00", "Mon 14:00", "Tue 10:00", "Tue 16:00", "Wed 11:00", "Thu 09:00"].map((t) => (
                  <button
                    key={t}
                    className="rounded-md border border-border bg-surface px-2 py-2 font-mono text-[11px] text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
                  >
                    {t}
                  </button>
                ))}
              </div>

              <a
                href="https://cal.com/sohail-data-expert/free-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
              >
                <Calendar className="h-4 w-4" /> Open full calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-lg border border-border bg-background/40 px-4 py-3 text-sm text-foreground transition hover:border-primary/40 hover:bg-background"
    >
      <Icon className="h-4 w-4 text-primary" />
      <span className="font-mono">{label}</span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs text-muted-foreground sm:flex-row sm:px-6">
        <div className="font-mono">© 2026 Sohail Tanveer · Independent Data Engineering</div>
        <div className="font-mono">Built solo. Shipped fast.</div>
      </div>
    </footer>
  );
}
