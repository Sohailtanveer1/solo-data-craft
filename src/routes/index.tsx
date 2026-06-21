import { createFileRoute } from "@tanstack/react-router";
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
  Zap,
  Check,
  X,
  Workflow,
  Terminal,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MD Sohail Tanveer — Senior Data Engineer | GCP Professional Data Engineer Certified" },
      {
        name: "description",
        content:
          "Senior Data Engineer with 4 years of experience designing scalable ETL/ELT pipelines on GCP. Expert in Medallion Architecture, dbt, Apache Spark, Airflow, BigQuery, and Snowflake.",
      },
      { property: "og:title", content: "MD Sohail Tanveer — Senior Data Engineer" },
      { property: "og:description", content: "I build scalable data pipelines that turn raw data into business decisions." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

const stack = [
  "Python", "PySpark", "SQL", "BigQuery", "Snowflake", "dbt",
  "Apache Airflow", "GCP", "Dataproc", "Cloud Composer",
  "Apache Spark", "Kafka", "Docker", "GitLab CI/CD", "Apache Iceberg", "Medallion Architecture",
];

const pillars = [
  {
    icon: Workflow,
    title: "Scalable ETL/ELT Pipeline Engineering",
    body: "Config-driven ingestion from REST APIs, SFTP, CDC, and SaaS sources. YAML-driven PySpark workflows on Dataproc Serverless with idempotent design, automated late-arriving data handling, and Secret Manager-secured credentials.",
    bullets: ["YAML-driven multi-feed PySpark framework", "Idempotent, replayable Airflow DAGs", "SCD Type 1 & 2 with deduplication"],
  },
  {
    icon: Layers,
    title: "Medallion Architecture & dbt Modeling",
    body: "End-to-end Medallion lakehouse design — Bronze to Gold — using dbt for staging, transformation, and semantic layers. Full SCD Type 2 historical tracking, data validation, and analytics-ready BigQuery views for self-serve analytics.",
    bullets: ["dbt staging + semantic layers", "SCD Type 2 via snapshots", "Self-serve analytics views"],
  },
  {
    icon: Gauge,
    title: "Cloud Data Warehouse Optimization",
    body: "Architect governed data platforms on GCP (BigQuery, Dataproc) and Snowflake. Tune query performance with clustering, partitioning, and materialization strategies to slash latency and compute costs.",
    bullets: ["BigQuery + Snowflake optimization", "Clustering & partition tuning", "CI/CD for data models"],
  },
];

const cases = [
  {
    title: "GCP Data Integration Platform",
    timeline: "Oct 2025 – Present · Coforge",
    role: "Senior Data Engineer",
    problem:
      "Business needed to onboard 10+ distinct data feeds from BigQuery, SFTP, REST APIs, and Salesforce into MySQL, GCS, and PostgreSQL targets — with no reusable framework, every new feed required weeks of custom engineering.",
    stack: ["GCP", "PySpark", "Dataproc Serverless", "Cloud Composer", "Airflow", "BigQuery", "dbt", "Secret Manager"],
    architecture: [
      "YAML-driven PySpark ETL framework on Dataproc Serverless handles 10+ feeds from a single codebase",
      "Dynamic Airflow DAGs automate the full lifecycle: raw ingestion → staging → deduplication → SCD Type 1 → export",
      "dbt staging layer with SCD Type 2 historical tracking and zero data loss on source changes",
      "Semantic layer of pre-aggregated BigQuery views enabling self-serve analytics for business stakeholders",
    ],
    impact: [
      "Pipeline dev effort cut by 70%",
      "New feed onboarding reduced by 30%",
      "99.2% pipeline reliability via idempotent design",
    ],
  },
  {
    title: "Automated Data Pipeline — Snowflake & dbt",
    timeline: "Aug 2023 – Sep 2025 · Logic Pursuits Consulting India",
    role: "Data Engineer",
    problem:
      "Enterprise needed to move incremental CDC data from a Landing Zone into a governed EDW on Snowflake — manual processing caused 30%+ higher latency and data inconsistency across analytics teams.",
    stack: ["Snowflake", "dbt", "Control-M", "SQL", "Python", "Streams", "Snowpipe", "Stored Procedures"],
    architecture: [
      "End-to-end ETL on Snowflake using Streams, Tasks, Snowpipe, and Stored Procedures for CDC ingestion",
      "dbt transformation workflows with SCD Type 2 snapshots for full historical tracking and point-in-time audit",
      "Analytics-ready models with clustering, partitioning, and query optimization for fast BI querying",
      "Automated scheduling, dependency management, and monitoring via Control-M",
    ],
    impact: [
      "Data processing latency reduced by 30%+",
      "Full SCD Type 2 historical tracking across EDW",
      "Reduced ad-hoc analyst data requests by 30%",
    ],
  },
];

const comparison = [
  { label: "Pipeline reliability", agency: "Best-effort, manual monitoring", me: "99.2% via idempotent + SLA-aware Airflow design" },
  { label: "Feed onboarding speed", agency: "Weeks of custom engineering per feed", me: "30–70% faster via config-driven YAML framework" },
  { label: "Data modeling", agency: "Ad-hoc SQL without lineage or tests", me: "dbt + SCD Type 2 + full audit trail" },
  { label: "Cloud expertise", agency: "Generalist cloud knowledge", me: "GCP Professional Certified + Snowflake production" },
  { label: "CI/CD for data", agency: "Manual deploys, no testing gate", me: "GitLab CI/CD with contract-tested transformations" },
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
  return (
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
    />
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-base font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary">
            <Database className="h-4 w-4" />
          </span>
          sohail<span className="text-primary">.data</span>
          <span className="ml-2 hidden font-mono text-[11px] font-normal text-muted-foreground sm:inline">
            // senior data engineer
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#expertise" className="hover:text-foreground transition-colors">Expertise</a>
          <a href="#work" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#advantage" className="hover:text-foreground transition-colors">Why Me</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 sm:inline-flex"
        >
          Get in Touch <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary" />
          GCP Professional Data Engineer Certified · Open to Remote / Relocation
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
          Senior Data Engineer with 4 years of experience designing ETL/ELT pipelines and Big Data workflows on GCP.
          Specialist in Medallion Architecture, dbt, Apache Spark, Airflow, BigQuery, and Snowflake.
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
            <Mail className="h-4 w-4" />
            Get in Touch
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-surface"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4"
        >
          {[
            ["4 yrs", "data engineering experience"],
            ["99.2%", "pipeline reliability achieved"],
            ["70%", "pipeline dev effort cut"],
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
    <section id="expertise" className="relative mx-auto max-w-7xl px-6 py-28">
      <SectionHeader
        kicker="Core Expertise"
        title="Three pillars. All production. No theory."
        sub="Built to ship infrastructure that finance, ops, and product teams can bet on — not slide decks."
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
    <section id="work" className="relative border-t border-border bg-surface/30 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker="Project Case Studies"
          title="Production-grade data engineering"
          sub="Real architectures, real impact numbers from professional engagements."
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
      ? ["Sources", "Airflow", "Dataproc", "dbt", "BigQuery"]
      : ["Landing Zone", "Snowpipe", "Snowflake", "dbt", "EDW"];
  return (
    <div className="rounded-lg border border-border bg-background/60 p-4">
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        <span>pipeline.architecture</span>
        <Terminal className="h-3 w-3" />
      </div>
      <div className="flex items-center justify-between gap-2">
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
  );
}

function Advantage() {
  return (
    <section id="advantage" className="relative mx-auto max-w-7xl px-6 py-28">
      <SectionHeader
        kicker="What Sets Me Apart"
        title="Senior engineer. Production mindset. GCP certified."
        sub="4 years of shipping data infrastructure that teams depend on — not just notebooks and demos."
      />

      <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-0 border-b border-border bg-surface/60 px-6 py-4 font-mono text-[11px] uppercase tracking-wider">
          <div className="text-muted-foreground">Generic Approach</div>
          <div className="px-4 text-center text-muted-foreground">vs</div>
          <div className="text-right text-primary">My Approach</div>
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
          { icon: Zap, h: "Production velocity", p: "Config-driven frameworks cut onboarding and pipeline dev time by 30–70%. No reinventing the wheel." },
          { icon: Database, h: "GCP-native expertise", p: "Certified GCP Professional Data Engineer. BigQuery, Dataproc, Cloud Composer, Secret Manager — in production." },
          { icon: Terminal, h: "End-to-end ownership", p: "From raw ingestion to semantic layer. Medallion Architecture with dbt, CI/CD, and full audit trail baked in." },
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
    <section id="contact" className="relative border-t border-border py-28">
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-[var(--shadow-glow)] backdrop-blur sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Let's connect</div>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">
                Let's build something <span className="text-gradient">remarkable together.</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Open to senior data engineering roles, freelance engagements, and remote opportunities.
                Reach out via email or LinkedIn — I reply within 24 hours.
              </p>
              <div className="mt-8 space-y-3">
                <ContactLink icon={Mail} label="sohailtanveerforjobs@gmail.com" href="mailto:sohailtanveerforjobs@gmail.com" />
                <ContactLink icon={Linkedin} label="linkedin.com/in/mdsohailtanveer" href="https://linkedin.com/in/mdsohailtanveer" />
                <ContactLink icon={Github} label="github.com/Sohailtanveer1" href="https://github.com/Sohailtanveer1" />
                <ContactLink icon={Phone} label="+91-8287515840" href="tel:+918287515840" />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background/70 p-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <div className="font-display text-lg font-semibold">MD Sohail Tanveer</div>
                  <div className="text-xs text-muted-foreground">Senior Data Engineer · GCP Certified · Noida, India</div>
                </div>
                <Database className="h-5 w-5 text-primary" />
              </div>

              <div className="mt-5 space-y-3">
                {[
                  ["Experience", "4 years"],
                  ["Specialization", "GCP, BigQuery, dbt, Snowflake"],
                  ["Architecture", "Medallion, ETL/ELT, CDC, SCD"],
                  ["Availability", "Open to Remote / Relocation"],
                  ["Certification", "GCP Professional Data Engineer"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between rounded-md border border-border bg-surface/40 px-3 py-2.5 font-mono text-[12px]">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="text-foreground font-medium">{v}</span>
                  </div>
                ))}
              </div>

              <a
                href="mailto:sohailtanveerforjobs@gmail.com"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
              >
                <Mail className="h-4 w-4" /> Send me an email
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
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground sm:flex-row">
        <div className="font-mono">© 2026 MD Sohail Tanveer · Senior Data Engineer</div>
        <div className="font-mono">Built with precision. Shipped to production.</div>
      </div>
    </footer>
  );
}
