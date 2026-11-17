export type Project = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  featuredCapability: string;
  accent?: boolean;
  context: string[];
  problems: string[];
  role: string[];
  flowLabel: string;
  flow: string[];
  approach?: Array<{ title: string; copy: string }>;
  entities?: string[];
  tools?: string[];
  outcomes: string[];
  principle: string;
  note?: string;
  /** Overrides the "Public presentation" label on the case study page. */
  presentation?: string;
  /** Live project whose case study has not been written yet. */
  status?: 'draft';
};

export const metrics = [
  { value: '8+', label: 'Clients', context: 'Customer projects supported' },
  { value: '12+', label: 'Business modules', context: 'Cross-functional operational modules' },
  { value: '500K+', label: 'Records processed', context: 'Across data and analytical workflows' },
  { value: '15+', label: 'Dashboards', context: 'Operational and management reporting' },
  { value: '70+', label: 'Workflows & automations', context: 'Operational automation on Lark Base' },
  { value: '7+', label: 'Data integration workflows', context: 'Integration and data movement' },
];

export const capabilities = [
  {
    index: '01',
    title: 'Business Process Analysis',
    focus: 'Turning business operations into explicit, structured processes.',
    items: ['As-is / to-be analysis', 'Requirement analysis', 'Workflow mapping', 'Business rules', 'Approval flows', 'SOP / documentation', 'Operational KPI definition'],
    outputs: ['Process maps', 'Requirement notes', 'Workflow designs', 'System requirements'],
  },
  {
    index: '02',
    title: 'Business Application Implementation',
    focus: 'Building operational systems that reflect real business processes.',
    items: ['Lark Base solution design', 'Data structures', 'Forms and views', 'Roles / permissions', 'Approval workflow', 'Cross-module dependencies', 'User handover'],
    outputs: ['Sales', 'Finance', 'HRM', 'Inventory', 'Purchasing', 'Production'],
  },
  {
    index: '03',
    title: 'Data Integration & Transformation',
    focus: 'Turning fragmented operational data into a consistent analytical dataset.',
    items: ['Source-to-target mapping', 'Cleaning and standardisation', 'JSON handling', 'Timestamp transformation', 'Type conversion', 'Data validation', 'ETL / ELT workflow design'],
    outputs: ['Lark AnyCross', 'BigQuery', 'SQL', 'Elton workflows'],
  },
  {
    index: '04',
    title: 'Data Analytics & BI',
    focus: 'Turning operational data into useful business views.',
    items: ['KPI definition', 'Analytical SQL', 'Aggregation', 'Performance analysis', 'Dashboard design', 'Operational reporting', 'Management reporting'],
    outputs: ['BigQuery SQL', 'Looker Studio'],
  },
  {
    index: '05',
    title: 'Data & System Modelling',
    focus: 'Making business logic explicit through structured data.',
    items: ['Entity identification', 'Relationship modelling', 'Database schema design', 'Fact / dimension thinking', 'Data dictionary', 'Business rules'],
    outputs: ['PostgreSQL', 'BigQuery', 'Lark Base'],
  },
  {
    index: '06',
    title: 'Automation & Integration',
    focus: 'Reducing repetitive operational work.',
    items: ['Trigger-based workflows', 'Approval automation', 'Status updates', 'Notifications', 'Cross-system synchronisation', 'API / webhook concepts', 'Exception handling'],
    outputs: ['Lark Base automation', 'Lark AnyCross', 'API concepts'],
  },
];

export const projects: Project[] = [
  {
    slug: 'yspace',
    index: '01',
    title: 'Yspace',
    shortTitle: 'Yspace',
    category: 'Data Integration & Business Systems',
    summary: 'Client work on two parallel tracks: moving e-commerce and operational data into BigQuery and Lark Base for reporting, and implementing operational modules on Lark.',
    featuredCapability: 'Data integration',
    presentation: 'Client work · anonymised',
    context: [
      'At Yspace (October 2025 – August 2026) I worked with enterprise clients on two parallel tracks. The data track (DA) moved data from external platforms into BigQuery and Lark Base so it could be reported on. The business-application track (BAP) turned how a client operates into modules on Lark.',
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
    flow: ['Source platforms', 'Integration layer', 'Paginated ingestion', 'Normalise & dedupe', 'BigQuery / Lark Base', 'SQL KPIs', 'Looker Studio'],
    approach: [
      { title: 'Incremental ingestion', copy: 'Pulled platform data page by page and used a last-sync marker to limit each run to new or changed records instead of reloading history. Timestamps were converted to Vietnam time (UTC+7) where reporting needed it.' },
      { title: 'Upsert by business key', copy: 'Loaded data into BigQuery and used MERGE on business keys to update existing rows and insert new ones, so repeated syncs did not create duplicates.' },
      { title: 'BigQuery ↔ Lark Base', copy: 'Selected changed rows, converted values to Lark field types and wrote them in API-sized batches with business-key upserts. AnyCross workflows used JavaScript steps, dynamic filters and an error-alert card; one loops through more than eight Lark tables.' },
      { title: 'KPIs and reporting', copy: 'Shaped warehouse data with SQL into KPI datasets agreed with the client and prepared Looker Studio dashboards on top, then walked the client through the results before handover.' },
      { title: 'Lark business modules', copy: 'Mapped each client process into Lark Base records, forms, views and workflows across finance, HR, marketing, logistics and management. Delivery ran kick-off → scope → implementation → training → trial operation → review → acceptance.' },
    ],
    entities: ['Client process', 'Lark module', 'Source platform', 'Raw records', 'Staging table', 'Business key', 'Sync checkpoint', 'KPI dataset', 'Dashboard'],
    tools: ['Lark Base', 'Lark AnyCross', 'Elton', 'BigQuery', 'SQL', 'Looker Studio', 'JavaScript', 'Python', 'n8n'],
    outcomes: [
      '7+ data-integration workflows, with hourly incremental sync where the use case needed it.',
      '15+ dashboards and reports developed or supported; 500K+ records processed across data work.',
      '12+ business modules implemented or configured on Lark across finance, HR, marketing, logistics and management.',
      '70+ Lark Base workflows and automations.',
    ],
    principle: 'Understand how the client works before deciding what the system or the data should hold.',
    note: 'Client names, datasets and records are anonymised. Figures are reported scope across both tracks. Elton is a third-party platform; the work was building workflows around it.',
  },
  {
    slug: 'vec-att',
    index: '02',
    title: 'Vec Att',
    shortTitle: 'Vec Att',
    category: 'Attendance & Payroll SaaS',
    summary: 'A multi-tenant attendance and payroll platform. I built per-shift timesheet data, the Lark Base payslip integration and the payroll data model on PostgreSQL.',
    featuredCapability: 'Data modelling & sync',
    context: [
      'Vec Att is a multi-tenant SaaS for shift-based attendance, timesheets, leave, approvals and payslips. A team of three builds it on TypeScript, Fastify and PostgreSQL 17.',
      'The platform separates tenant data with row-level security, runs background work on a PostgreSQL job queue and syncs datasets incrementally to Lark Base, Google Sheets and webhooks. A senior teammate built that foundation; I build features on top of it.',
      'My work turns raw attendance into per-shift timesheet data, moves that data to and from Lark Base, and models payroll.',
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
    flow: ['Attendance events', 'Per-shift timesheet', 'Recompute job', 'Sync dataset', 'Lark Base', 'Payroll run', 'Payslip'],
    approach: [
      { title: 'Per-shift dataset', copy: 'One row per shift, with approvals and leave, sent through the platform’s watermark-based sync. A five-minute settle window avoids skipping rows committed late; idempotent upserts make the resent rows harmless.' },
      { title: 'Native Lark Base fields', copy: 'Real date, select and checkbox columns instead of text, so HR can filter and group the data in Lark Base without extra formulas.' },
      { title: 'Payslip round trip', copy: 'Per-organisation source configuration, token-authenticated inbound delivery from Lark Base workflows, and write-back of employee confirmations or disputes.' },
      { title: 'Recompute lock', copy: 'Transaction-scoped PostgreSQL advisory locks serialise recomputation per employee, removing a lost-update race between concurrent jobs.' },
      { title: 'Payroll model (in review)', copy: 'Pay profiles and allowances stored as date ranges with GiST exclusion constraints, so they cannot overlap. A pure, versioned engine computes gross pay from per-shift data.' },
    ],
    entities: ['Attendance event', 'Shift', 'Timesheet day', 'Timesheet period', 'Pay profile', 'Allowance', 'Payroll run', 'Payslip'],
    tools: ['TypeScript', 'Node.js', 'Fastify', 'PostgreSQL 17', 'Drizzle ORM', 'Lark Open API', 'ExcelJS', 'Vitest'],
    outcomes: [
      'Merged: a per-shift attendance dataset synced to Lark Base with native field types.',
      'Merged: payslip source configuration, inbound delivery and status write-back with Lark Base.',
      'Merged: a per-employee advisory lock for timesheet recomputation.',
      'In code review: the payroll schema and engine, a data-preserving migration to date-range timesheet periods, and a multi-sheet Excel export, with about 250 automated tests.',
    ],
    principle: 'When the application alone cannot guarantee a rule, put it in the database.',
    note: 'No production volumes are shown. Work marked “in code review” is not yet merged.',
  },
  {
    slug: 'vecinn',
    index: '03',
    title: 'Vecinn',
    shortTitle: 'Vecinn',
    category: 'Property Management / Billing',
    summary: 'A room-rental platform for landlords. I built the utility-billing logic, a PostgreSQL-coordinated job scheduler and idempotent payment reminders.',
    featuredCapability: 'Batch processing & idempotency',
    context: [
      'Vecinn helps landlords manage houses, rooms, tenants, contracts and monthly charges. A team of three built it on FastAPI, PostgreSQL 16, Redis, React and Docker Compose.',
      'I owned the payments and operations side: turning meter readings into invoices, running daily jobs safely, and reminding landlords and tenants over Zalo. A teammate designed the core billing tables; I implemented the processing logic on top of them.',
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
    flow: ['Meter readings', 'Billing period', 'Price calculation', 'Draft invoice', 'Confirm / pay', 'Daily job', 'Zalo reminder'],
    approach: [
      { title: 'Contract-aligned periods', copy: 'Periods are derived from each contract’s start date and due day, clamped to day 28. Periods that already have an invoice are skipped, so the daily job only processes new work.' },
      { title: 'Draft invoices', copy: 'Header and line items are written in one commit. Correcting a reading recalculates the draft by replacing its lines. Invoices move DRAFT → CONFIRMED → PAID, with a guarded reopen.' },
      { title: 'Job scheduler', copy: 'A job is claimed with SELECT … FOR UPDATE and its next run is advanced before execution. A partial unique index on running jobs is the database backstop. Stuck runs are marked failed, and each run records duration, a JSON summary and errors.' },
      { title: 'Notification idempotency', copy: 'Redis SET NX EX keys per type, entity, recipient and day stop the same reminder from being sent twice when a job is re-run.' },
      { title: 'Identity migration', copy: 'Linked OAuth accounts to canonical users by normalised email, backfilled missing users, then enforced NOT NULL and unique constraints.' },
    ],
    entities: ['House', 'Room', 'Contract', 'Utility type', 'Utility reading', 'Payment', 'Payment line', 'Scheduled job', 'Job run'],
    tools: ['Python', 'FastAPI', 'SQLAlchemy (async)', 'PostgreSQL 16', 'Alembic', 'Redis', 'Docker Compose', 'pytest'],
    outcomes: [
      'Two billing workflows: a scheduled job that creates draft invoices, and an on-demand period close that reports created, updated and skipped rooms.',
      'Three daily jobs coordinated through PostgreSQL row locks and a partial unique index.',
      'Nine payment endpoints and ten admin endpoints.',
      'Payment and scheduler unit tests pass locally; integration tests against a real PostgreSQL are not written yet.',
    ],
    principle: 'A job is only safe to schedule once it is safe to run twice.',
    note: 'The payment and scheduler work sits on a feature branch and is not yet merged into the integration branch. No production volumes are shown.',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/**
 * Home-page grouping of the seven areas in portfolio_content/capabilities.md.
 * Nothing here is new material — 'Backend & Database' folds area 05 (Data &
 * System Modelling) into area 07 (Engineering Foundations).
 */
export const capabilityAreas = [
  {
    index: '01',
    title: 'Data Integration',
    focus: 'Connecting APIs, applications, databases, and business platforms through structured data workflows.',
    items: ['Source-to-target mapping', 'Cleaning and standardisation', 'ETL / ELT workflow design', 'Data validation'],
    tools: ['Lark AnyCross', 'Elton', 'BigQuery', 'SQL'],
  },
  {
    index: '02',
    title: 'Business Systems',
    focus: 'Translating operational processes into structured applications, modules, and workflows.',
    items: ['Lark Base solution design', 'Form, view and permission design', 'Approval workflow design', 'User handover and training'],
    tools: ['Lark Base'],
  },
  {
    index: '03',
    title: 'Backend & Database',
    focus: 'Building APIs, database structures, validation, and application foundations.',
    items: ['Entity and relationship modelling', 'Database schema design', 'Fact / dimension thinking', 'Data dictionary'],
    tools: ['Python', 'TypeScript', 'SQL', 'PostgreSQL', 'FastAPI', 'SQLAlchemy', 'Redis', 'Docker', 'Git'],
  },
  {
    index: '04',
    title: 'Automation',
    focus: 'Automating repetitive processes and system-to-system workflows.',
    items: ['Trigger-based workflows', 'Approval and notification automation', 'Cross-system synchronisation', 'Exception handling'],
    tools: ['Lark Base automation', 'Lark AnyCross', 'Webhooks / APIs'],
  },
  {
    index: '05',
    title: 'Data & Reporting',
    focus: 'Transforming operational data into KPIs, dashboards, and actionable reporting.',
    items: ['KPI definition', 'Analytical SQL', 'Aggregation and transformation', 'Performance analysis'],
    tools: ['BigQuery', 'SQL', 'Looker Studio'],
  },
];

/** The four movements described in portfolio_content/experience.md. */
export const howIWork = [
  { index: '01', title: 'Understand', copy: 'Map the current process, the stakeholders, the inputs and outputs, and the exceptions people actually hit.' },
  { index: '02', title: 'Structure', copy: 'Translate the process into entities, fields, relationships and business states a system can hold.' },
  { index: '03', title: 'Connect', copy: 'Move data between systems and automate the approvals, notifications and status changes around it.' },
  { index: '04', title: 'Improve', copy: 'Measure what the system is doing, report on it, and adjust once real operational use exposes the gaps.' },
];
