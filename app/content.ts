/**
 * Single source of portfolio content. Every claim here comes from the owner's
 * supplied material (Yspace / ILA / AVN handoffs, the pj001 and pj003 audits).
 * Do not add metrics, dates, tools or outcomes that are not in that material.
 */

export const profile = {
  name: 'Phan Dang Bao Tran',
  role: 'Data & Engineering',
  headline: 'Building reliable data solutions.',
  intro:
    'I work across data integration, database development and analytics—turning business requirements into structured, reliable data solutions.',
  positioning: 'Data integration, database development and analytics, grounded in how businesses actually operate.',
};

/**
 * Verified contact channels only. Email, LinkedIn and a CV file have not been
 * supplied yet — leave them null until the owner confirms them; the UI renders
 * only the channels that are set.
 */
export const contact: { github: string | null; email: string | null; linkedin: string | null; cv: string | null } = {
  github: 'https://github.com/pdbtran2003',
  email: null,
  linkedin: null,
  cv: null,
};

/** Reported scope at Yspace (Oct 2025 – Aug 2026), across both workstreams. */
export const metrics = [
  { value: '8+', label: 'Enterprise clients', context: 'Worked with across both workstreams' },
  { value: '500K+', label: 'Records processed', context: 'Across data-integration work' },
  { value: '15+', label: 'Dashboards & reports', context: 'Developed or supported' },
  { value: '12+', label: 'Business modules', context: 'Implemented or configured on Lark' },
  { value: '7+', label: 'Integration workflows', context: 'Built or configured' },
  { value: '70+', label: 'Lark Base automations', context: 'Workflows and automations' },
];
export const homeMetrics = metrics.slice(0, 4);
export const metricsSource = 'Reported scope at Yspace, October 2025 – August 2026, across both workstreams.';

export const capabilities = [
  {
    index: '01',
    title: 'Data Engineering',
    copy: 'Moving data between platforms reliably: paginated API ingestion, incremental sync with checkpoints, batch writes and idempotent re-runs.',
    tools: ['BigQuery', 'Lark AnyCross', 'Elton', 'PostgreSQL job scheduling'],
  },
  {
    index: '02',
    title: 'Database Development',
    copy: 'Modelling data and enforcing rules where they hold: constraints, migrations, upserts and concurrency control.',
    tools: ['SQL', 'PostgreSQL', 'BigQuery MERGE', 'Alembic', 'Drizzle ORM'],
  },
  {
    index: '03',
    title: 'Data Analytics',
    copy: 'Agreeing KPI definitions with the business, shaping data with SQL and delivering dashboards people can act on.',
    tools: ['SQL', 'BigQuery', 'Looker Studio'],
  },
  {
    index: '04',
    title: 'Automation & Integration',
    copy: 'Connecting operational systems and automating approvals, notifications and status changes around the data.',
    tools: ['Lark Base automation', 'Lark Open API', 'n8n', 'Webhooks'],
  },
  {
    index: '05',
    title: 'Business Understanding',
    copy: 'Discovering how a client actually operates, scoping the work and carrying it through training, review and acceptance.',
    tools: ['Requirement discovery', 'Process mapping', 'Client handover'],
  },
];

/** `where` separates professional use (Yspace) from team-project use. */
export const stack: Array<{ group: string; items: Array<{ name: string; where: 'work' | 'projects' | 'both' }> }> = [
  {
    group: 'Languages',
    items: [
      { name: 'SQL', where: 'both' },
      { name: 'Python', where: 'both' },
      { name: 'TypeScript', where: 'projects' },
      { name: 'JavaScript', where: 'work' },
    ],
  },
  {
    group: 'Data platforms & databases',
    items: [
      { name: 'BigQuery', where: 'work' },
      { name: 'PostgreSQL', where: 'projects' },
      { name: 'Redis', where: 'projects' },
      { name: 'Lark Base', where: 'both' },
    ],
  },
  {
    group: 'Integration & automation',
    items: [
      { name: 'Lark AnyCross', where: 'work' },
      { name: 'Elton', where: 'work' },
      { name: 'n8n', where: 'work' },
      { name: 'Lark Open API', where: 'projects' },
    ],
  },
  {
    group: 'Analytics & reporting',
    items: [
      { name: 'Looker Studio', where: 'work' },
      { name: 'Google Sheets', where: 'work' },
      { name: 'Excel', where: 'work' },
    ],
  },
  {
    group: 'Backend & tooling',
    items: [
      { name: 'FastAPI', where: 'projects' },
      { name: 'SQLAlchemy / Alembic', where: 'projects' },
      { name: 'Fastify / Drizzle ORM', where: 'projects' },
      { name: 'Docker', where: 'projects' },
      { name: 'Git / GitHub', where: 'both' },
      { name: 'pytest / Vitest', where: 'projects' },
    ],
  },
];

export type Role = {
  slug: string;
  employer: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  tracks?: Array<{ label: string; copy: string; tags: string[] }>;
  highlights: string[];
  tools: string[];
  showMetrics?: boolean;
};

export const experience: Role[] = [
  {
    slug: 'yspace',
    employer: 'Yspace',
    title: 'Data Integration & Business Systems Implementation',
    period: 'Oct 2025 — Aug 2026',
    summary:
      'Client-facing work for enterprise clients on two parallel tracks: connecting platform data into BigQuery and Lark Base for reporting (DA), and implementing operational modules on Lark (BAP).',
    tracks: [
      {
        label: 'DA — Data integration & analytics',
        copy: 'Connected e-commerce and operational platforms to BigQuery and Lark Base: paginated API ingestion, incremental sync with last-sync checkpoints, type conversion, deduplication and business-key MERGE / upsert, batched writes to Lark Base, then SQL KPI datasets and Looker Studio dashboards. Ran discovery, access collection, review and handover with each client.',
        tags: ['Lark AnyCross', 'Elton', 'BigQuery', 'SQL', 'Looker Studio', 'JavaScript', 'Python', 'n8n'],
      },
      {
        label: 'BAP — Lark business systems',
        copy: 'Translated client operating processes into Lark Base modules—records, fields, forms, views and workflows—and delivered each through kick-off, scope clarification, implementation, training, trial operation, review and acceptance.',
        tags: ['Finance (income / expense, AR, AP)', 'HRM', 'Recruitment', 'Onboarding', 'Attendance', 'Payroll', 'Marketing', 'Management', 'Logistics / Warehouse'],
      },
    ],
    highlights: [
      'Incremental BigQuery syncs with business-key MERGE, so re-runs update rather than duplicate.',
      'BigQuery ↔ Lark Base sync in API-sized batches with field-type conversion.',
    ],
    tools: ['BigQuery', 'SQL', 'Lark AnyCross', 'Looker Studio'],
    showMetrics: true,
  },
  {
    slug: 'ila',
    employer: 'ILA English Center',
    title: 'Teaching Assistant',
    period: 'Aug 2024 — Jul 2025',
    location: 'Da Nang',
    summary:
      'Supported instruction across 6+ classes of 10–20 students each and adapted learning materials. Tracked class performance in Google Sheets to monitor progress and recommend improvements, and coordinated with teachers, students and parents, including grading support and inquiries.',
    highlights: ['Class-performance tracking in Google Sheets across 6+ classes.'],
    tools: ['Google Sheets', 'Google Docs'],
  },
  {
    slug: 'avn',
    employer: 'AVN Audit',
    title: 'Intern',
    period: 'Mar 2025 — May 2025',
    location: 'Da Nang',
    summary:
      'Gathered and documented client financial-process information for audit-related work. Entered and analysed 500+ transaction records in Excel to identify discrepancies, and summarised findings in reports for further review, handling sensitive financial data with accuracy and confidentiality.',
    highlights: ['500+ transaction records analysed in Excel for discrepancies.'],
    tools: ['Excel'],
  },
];

/** The four movements of the working approach (portfolio_content/experience.md). */
export const approach = [
  { index: '01', title: 'Understand', copy: 'Map the current process, the stakeholders, the inputs and outputs, and the exceptions people actually hit.' },
  { index: '02', title: 'Structure', copy: 'Translate the process into entities, fields, relationships and business states a system can hold.' },
  { index: '03', title: 'Connect', copy: 'Move data between systems and automate the approvals, notifications and status changes around it.' },
  { index: '04', title: 'Improve', copy: 'Measure what the system is doing, report on it, and adjust once real operational use exposes the gaps.' },
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  /** One-sentence purpose, used in previews and the page header. */
  summary: string;
  /** The owner's personal contribution, in one line. */
  contribution: string;
  kind: string;
  status: string;
  period?: string;
  /** Overrides the presentation label in the header; omitted for projects whose label is pending. */
  presentation?: string;
  context: string[];
  problems: string[];
  role: string[];
  flowLabel: string;
  flowCaption: string;
  flow: string[];
  entities?: string[];
  /** What the owner did NOT build — stated explicitly on the case study. */
  boundary?: string;
  approach: Array<{ title: string; copy: string }>;
  decisions?: Array<{ title: string; copy: string }>;
  outcomes: string[];
  nextSteps?: string[];
  tools: string[];
  previewTools: string[];
  principle: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: 'yspace',
    index: '01',
    title: 'Yspace',
    category: 'Data Integration & Business Systems',
    summary:
      'Client work on two parallel tracks: moving e-commerce and operational data into BigQuery and Lark Base for reporting, and implementing operational modules on Lark.',
    contribution: 'Data integration, SQL reporting and Lark business-module implementation for enterprise clients.',
    kind: 'Employment · client work',
    status: 'Delivered to clients',
    period: 'Oct 2025 — Aug 2026',
    presentation: 'Client work · anonymised',
    context: [
      'At Yspace I worked with enterprise clients on two parallel tracks. The data track (DA) moved data from external platforms into BigQuery and Lark Base so it could be reported on. The business-application track (BAP) turned how a client operates into modules on Lark.',
      'Both tracks were client-facing. Each engagement ran from discovery and scope, through implementation, to review and handover. Client names, datasets and records are left out.',
    ],
    problems: [
      'Sales data sits across separate e-commerce and marketing platforms',
      'Reloading full history on every sync is slow',
      'Repeated syncs must not duplicate records',
      'Lark Base limits records per request and per table',
      'Reports need KPI definitions the client agrees with',
      'Client processes need a structured system to run in',
    ],
    role: [
      'Paginated API ingestion',
      'Incremental sync with checkpoints',
      'BigQuery MERGE / upsert',
      'BigQuery ↔ Lark Base sync',
      'SQL KPI datasets and dashboards',
      'Requirement discovery and scoping',
      'Lark Base module configuration',
      'Training, trial operation and acceptance',
    ],
    flowLabel: 'Source platform to dashboard',
    flowCaption: 'Conceptual view assembled from the DA work. Not every client pipeline used every step in this order.',
    flow: ['Source platforms', 'Integration layer', 'Paginated ingestion', 'Normalise & dedupe', 'BigQuery / Lark Base', 'SQL KPIs', 'Looker Studio'],
    entities: ['Source platform', 'Raw records', 'Staging table', 'Business key', 'Sync checkpoint', 'KPI dataset', 'Dashboard', 'Lark module'],
    boundary: 'Elton is a third-party integration platform; the work was building and configuring workflows around it, not building Elton.',
    approach: [
      { title: 'Incremental ingestion', copy: 'Pulled platform data page by page and used a last-sync marker to limit each run to new or changed records instead of reloading history. Timestamps were converted to Vietnam time (UTC+7) where reporting needed it.' },
      { title: 'Upsert by business key', copy: 'Loaded data into BigQuery and used MERGE on business keys to update existing rows and insert new ones, so repeated syncs did not create duplicates.' },
      { title: 'BigQuery ↔ Lark Base', copy: 'Selected changed rows, converted values to Lark field types and wrote them in API-sized batches with business-key upserts. AnyCross workflows used JavaScript steps, dynamic filters and an error-alert card; one loops through more than eight Lark tables.' },
      { title: 'KPIs and reporting', copy: 'Shaped warehouse data with SQL into KPI datasets agreed with the client and prepared Looker Studio dashboards on top, then walked the client through the results before handover.' },
      { title: 'Lark business modules', copy: 'Mapped each client process into Lark Base records, forms, views and workflows across finance, HR, marketing, logistics and management. Delivery ran kick-off → scope → implementation → training → trial operation → review → acceptance.' },
    ],
    outcomes: [
      '7+ data-integration workflows, with hourly incremental sync where the use case needed it.',
      '15+ dashboards and reports developed or supported; 500K+ records processed across data work.',
      '12+ business modules implemented or configured on Lark across finance, HR, marketing, logistics and management.',
      '70+ Lark Base workflows and automations.',
    ],
    tools: ['Lark Base', 'Lark AnyCross', 'Elton', 'BigQuery', 'SQL', 'Looker Studio', 'JavaScript', 'Python', 'n8n'],
    previewTools: ['BigQuery', 'SQL', 'Lark AnyCross', 'Looker Studio'],
    principle: 'Understand how the client works before deciding what the system or the data should hold.',
    note: 'Client names, datasets and records are anonymised. Figures are reported scope across both tracks.',
  },
  {
    slug: 'vec-att',
    index: '02',
    title: 'Vec Att',
    category: 'Attendance & Payroll SaaS',
    summary:
      'A multi-tenant attendance and payroll platform. I built per-shift timesheet data, the Lark Base payslip integration and the payroll data model on PostgreSQL.',
    contribution: 'Timesheet and payroll data, Lark Base integrations and PostgreSQL schema migrations.',
    kind: 'Team product · team of three',
    status: 'Partly merged · payroll in code review',
    context: [
      'Vec Att is a multi-tenant SaaS for shift-based attendance, timesheets, leave, approvals and payslips. A team of three builds it on TypeScript, Fastify and PostgreSQL 17.',
      'The platform separates tenant data with row-level security, runs background work on a PostgreSQL job queue and syncs datasets incrementally to Lark Base, Google Sheets and webhooks. My work turns raw attendance into per-shift timesheet data, moves that data to and from Lark Base, and models payroll.',
    ],
    problems: [
      'HR filters and groups attendance per shift, not per day',
      'Payslips are prepared in Lark Base but confirmed in the app',
      'Concurrent recomputation could overwrite timesheet results',
      'Timesheet periods followed calendar months, not pay periods',
      'Pay depends on time-bounded profiles and allowances',
    ],
    role: [
      'Per-shift timesheet metrics',
      'Per-shift sync dataset',
      'Lark Base payslip integration',
      'Recompute concurrency fix',
      'Payroll schema and engine (in review)',
      'Date-range timesheet periods (in review)',
      'Excel timesheet export (in review)',
    ],
    flowLabel: 'Attendance to payslip',
    flowCaption: 'Simplified flow of the parts described on this page. Steps marked in review are not yet merged.',
    flow: ['Attendance events', 'Per-shift timesheet', 'Recompute job', 'Sync dataset', 'Lark Base', 'Payroll run', 'Payslip'],
    entities: ['Attendance event', 'Shift', 'Timesheet day', 'Timesheet period', 'Pay profile', 'Allowance', 'Payroll run', 'Payslip'],
    boundary:
      'Built by teammates, not by me: the row-level-security foundation, the PostgreSQL job queue, the sync framework with its retry and rate-limit handling, the Google Sheets and webhook connectors, and billing. I built features on top of that foundation.',
    approach: [
      { title: 'Per-shift dataset', copy: 'One row per shift, with approvals and leave, sent through the platform’s watermark-based sync. A five-minute settle window avoids skipping rows committed late; idempotent upserts make the resent rows harmless.' },
      { title: 'Native Lark Base fields', copy: 'Real date, select and checkbox columns instead of text, so HR can filter and group the data in Lark Base without extra formulas.' },
      { title: 'Payslip round trip', copy: 'Per-organisation source configuration, token-authenticated inbound delivery from Lark Base workflows, and write-back of employee confirmations or disputes.' },
      { title: 'Recompute lock', copy: 'Transaction-scoped PostgreSQL advisory locks serialise recomputation per employee, removing a lost-update race between concurrent jobs.' },
      { title: 'Payroll model (in review)', copy: 'Pay profiles and allowances stored as date ranges with GiST exclusion constraints, so they cannot overlap. A pure, versioned engine computes gross pay from per-shift data.' },
    ],
    decisions: [
      { title: 'Why a settle window on the watermark', copy: 'The calculation timestamp is set when a transaction starts, so a row that commits late can land behind the watermark. Re-sending the last few minutes is cheaper than missing a row, and the upsert makes it harmless.' },
      { title: 'Exclusion constraint over an application check', copy: 'An overlap check in application code races under concurrency. A DEFERRABLE exclusion constraint closes that gap and still lets two adjacent periods move their shared boundary in one transaction.' },
      { title: 'Advisory locks under READ COMMITTED', copy: 'The per-employee lock works because every statement after acquiring it reads a fresh snapshot, so the second job sees the first job’s result instead of overwriting it.' },
    ],
    outcomes: [
      'Merged: a per-shift attendance dataset synced to Lark Base with native field types.',
      'Merged: payslip source configuration, inbound delivery and status write-back with Lark Base.',
      'Merged: a per-employee advisory lock for timesheet recomputation.',
      'In code review: the payroll schema and engine, a data-preserving migration to date-range timesheet periods, and a multi-sheet Excel export, with about 250 automated tests.',
    ],
    nextSteps: [
      'Finish review and merge the payroll, date-range period and export branches.',
      'The advisory lock keys employees by hash, so two employees can occasionally share a lock. That only costs throughput today, but it is worth revisiting as tenants grow.',
    ],
    tools: ['TypeScript', 'Node.js', 'Fastify', 'PostgreSQL 17', 'Drizzle ORM', 'Lark Open API', 'ExcelJS', 'Vitest'],
    previewTools: ['PostgreSQL', 'TypeScript', 'Lark Open API'],
    principle: 'When the application alone cannot guarantee a rule, put it in the database.',
    note: 'No production volumes are shown. Work marked “in code review” is not yet merged.',
  },
  {
    slug: 'vecinn',
    index: '03',
    title: 'Vecinn',
    category: 'Property Management · Billing',
    summary:
      'A room-rental platform for landlords. I built the utility-billing logic, a PostgreSQL-coordinated job scheduler and idempotent payment reminders.',
    contribution: 'Payments and operations: billing logic, job scheduler and notification idempotency.',
    kind: 'Team product · team of three',
    status: 'Implemented on a feature branch · not yet merged',
    context: [
      'Vecinn helps landlords manage houses, rooms, tenants, contracts and monthly charges. A team of three built it on FastAPI, PostgreSQL 16, Redis, React and Docker Compose.',
      'I owned the payments and operations side: turning meter readings into invoices, running daily jobs safely, and reminding landlords and tenants over Zalo.',
    ],
    problems: [
      'Billing periods follow each contract’s due day, not the calendar month',
      'Meter readings arrive late or get corrected',
      'Daily jobs must never run twice at once',
      'Re-running a job must not duplicate invoices or messages',
    ],
    role: [
      'Utility-billing logic',
      'Invoice state machine',
      'PostgreSQL job scheduler',
      'Redis notification idempotency',
      'Admin API and operations console',
      'Identity-reconciliation migration',
    ],
    flowLabel: 'Meter reading to reminder',
    flowCaption: 'Simplified flow of the billing and notification path I implemented.',
    flow: ['Meter readings', 'Billing period', 'Price calculation', 'Draft invoice', 'Confirm / pay', 'Daily job', 'Zalo reminder'],
    entities: ['House', 'Room', 'Contract', 'Utility type', 'Utility reading', 'Payment', 'Payment line', 'Scheduled job', 'Job run'],
    boundary:
      'Built by teammates, not by me: the core billing tables and their unique constraints, the contracts and tenants modules, and the Zalo messaging service. I implemented the processing logic on top of that schema.',
    approach: [
      { title: 'Contract-aligned periods', copy: 'Periods are derived from each contract’s start date and due day, clamped to day 28. Periods that already have an invoice are skipped, so the daily job only processes new work.' },
      { title: 'Draft invoices', copy: 'Header and line items are written in one commit. Correcting a reading recalculates the draft by replacing its lines. Invoices move DRAFT → CONFIRMED → PAID, with a guarded reopen.' },
      { title: 'Job scheduler', copy: 'A job is claimed with SELECT … FOR UPDATE and its next run is advanced before execution. A partial unique index on running jobs is the database backstop. Stuck runs are marked failed, and each run records duration, a JSON summary and errors.' },
      { title: 'Notification idempotency', copy: 'Redis SET NX EX keys per type, entity, recipient and day stop the same reminder from being sent twice when a job is re-run.' },
      { title: 'Identity migration', copy: 'Linked OAuth accounts to canonical users by normalised email, backfilled missing users, then enforced NOT NULL and unique constraints.' },
    ],
    decisions: [
      { title: 'Two layers against double runs', copy: 'The row lock serialises claims in the normal case; the partial unique index on RUNNING rows makes the database refuse a second run even if application logic is wrong.' },
      { title: 'Existence as the incremental marker', copy: 'An invoice for a contract and period start means that period is done. The job needs no watermark: it skips what exists and processes what does not.' },
    ],
    outcomes: [
      'Two billing workflows: a scheduled job that creates draft invoices, and an on-demand period close that reports created, updated and skipped rooms.',
      'Three daily jobs coordinated through PostgreSQL row locks and a partial unique index.',
      'Nine payment endpoints and ten admin endpoints.',
      'Payment and scheduler unit tests pass locally; integration tests against a real PostgreSQL are not written yet.',
    ],
    nextSteps: [
      'Wrap each billing period in one transaction and move upserts to INSERT … ON CONFLICT. Today each step commits separately and recovers by re-running.',
      'Batch-load readings and invoices to remove the per-contract N+1 queries in the daily job.',
      'Add retry with backoff for failed notifications and an alert when a job run fails.',
      'Add integration tests against a real PostgreSQL to prove the locks and constraints, not just the logic.',
    ],
    tools: ['Python', 'FastAPI', 'SQLAlchemy (async)', 'PostgreSQL 16', 'Alembic', 'Redis', 'Docker Compose', 'pytest'],
    previewTools: ['PostgreSQL', 'Python', 'Redis'],
    principle: 'A job is only safe to schedule once it is safe to run twice.',
    note: 'The payment and scheduler work sits on a feature branch and is not yet merged into the integration branch. No production volumes are shown.',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
