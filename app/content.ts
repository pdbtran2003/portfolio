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
};

export const metrics = [
  { value: '8+', label: 'Customers', context: 'Customer projects supported' },
  { value: '12+', label: 'Business modules', context: 'Cross-functional operational modules' },
  { value: '500K+', label: 'Records processed', context: 'Across data and analytical workflows' },
  { value: '70+', label: 'Automations / workflows', context: 'Operational automation on Lark Base' },
  { value: '7+', label: 'Integration workflows', context: 'Integration and data movement' },
  { value: '15+', label: 'Dashboards', context: 'Operational and management reporting' },
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
    slug: 'enterprise-business-system',
    index: '01',
    title: 'Enterprise Business System',
    shortTitle: 'Enterprise System',
    category: 'Business Transformation / Business Application',
    summary: 'Operational modules that translate business processes into structured data, workflows, approvals and automation.',
    featuredCapability: 'Process → System',
    context: [
      'The need was not simply to digitise forms. It was to turn business operations into a consistent system with clear ownership, business rules, approval paths and data visibility.',
      'Customer identities, internal screenshots and sensitive business data are intentionally omitted.',
    ],
    problems: ['Information scattered across spreadsheets and tools', 'Manual approval and follow-up', 'Repetitive operational work', 'Inconsistent process execution', 'Limited cross-department visibility', 'Difficult handover and standardisation'],
    role: ['Process and requirement analysis', 'Business rule definition', 'Data structure design', 'Lark Base implementation', 'Workflow and approval design', 'Automation', 'Documentation and user handover'],
    flowLabel: 'Representative operational flow',
    flow: ['Sales / Request', 'Operational Processing', 'Approval', 'Finance / Related Department', 'Status Update', 'Reporting'],
    approach: [
      { title: 'Understand', copy: 'Map the current process, stakeholders, inputs, outputs and exceptions.' },
      { title: 'Model', copy: 'Translate the process into entities, fields, relationships and business states.' },
      { title: 'Build', copy: 'Implement operational modules in Lark Base.' },
      { title: 'Automate', copy: 'Automate approvals, notifications, status transitions and repetitive actions.' },
      { title: 'Validate', copy: 'Test the system against operational scenarios and edge cases.' },
      { title: 'Handover', copy: 'Document the system and support users during adoption.' },
    ],
    outcomes: ['Supported 8+ customers across the broader portfolio', 'Worked across 12+ business modules', 'Built 70+ Lark Base automations / workflows', 'Covered cross-functional processes from Sales and Finance to Inventory and Production'],
    principle: 'The system should reflect how the business actually operates, not force the business into an abstract technical model.',
    note: 'Aggregate indicators are shown at portfolio level and do not describe one single customer.',
  },
  {
    slug: 'ecommerce-data-platform',
    index: '02',
    title: 'E-commerce Data Integration & Analytics',
    shortTitle: 'E-commerce Data',
    category: 'Data Integration / Data Analytics',
    summary: 'Integration and analytical workflows that turn fragmented commerce data into structured datasets and reporting.',
    featuredCapability: 'Source → Insight',
    context: [
      'E-commerce data arrives from multiple platforms with different schemas, naming conventions and update mechanisms.',
      'Reliable management reporting depends on source mapping, consistent transformation logic and validation before a dashboard is built.',
    ],
    problems: ['Fragmented platform data', 'Inconsistent schemas and types', 'JSON fields and timestamp differences', 'Difficult cross-channel comparison', 'Unreliable downstream reporting when source logic is unclear'],
    role: ['Source data understanding', 'Integration workflow design', 'Data mapping', 'Cleaning and standardisation', 'SQL transformation', 'BigQuery data modelling', 'Dashboard preparation', 'Data validation'],
    flowLabel: 'Analytical data pipeline',
    flow: ['Shopee / TikTok Shop / Other Sources', 'Integration', 'BigQuery', 'Transformation / SQL', 'Dashboard'],
    entities: ['tiktok_shop_dashboard', 'shopee_dwh', 'shop_performance', 'ads_product_daily'],
    tools: ['Google BigQuery', 'SQL', 'JSON extraction', 'SAFE_CAST', 'Timestamp transformation', 'Looker Studio', 'Lark AnyCross'],
    outcomes: ['500K+ records processed across data workflows', '7+ data integration workflows', '15+ dashboards across broader customer work', 'Analytical views for GMV, product, advertising and daily sales questions'],
    principle: 'Good analytics starts before the dashboard. Source mapping, consistency and transformation logic determine whether reporting can be trusted.',
  },
  {
    slug: 'manufacturing-operations',
    index: '03',
    title: 'Manufacturing Operations System',
    shortTitle: 'Manufacturing Operations',
    category: 'Business Process / Operations / System Design',
    summary: 'A manufacturing-oriented operating model connecting demand, materials, purchasing, inventory, production and delivery.',
    featuredCapability: 'Cross-module logic',
    context: [
      'Manufacturing creates dependencies between customer demand, material availability, purchasing, production and finished goods.',
      'A useful system needs to represent those dependencies explicitly so operational decisions can propagate across the process.',
    ],
    problems: ['Disconnected module decisions', 'Demand not explicitly linked to material needs', 'Inventory availability separated from purchasing logic', 'Production output disconnected from finished-goods status'],
    role: ['Understand the end-to-end process', 'Identify module dependencies', 'Define entities and business states', 'Design workflow logic', 'Model inventory and production relationships', 'Translate process rules into system structures'],
    flowLabel: 'Manufacturing operating relationship',
    flow: ['Sales', 'Demand', 'Material Requirement', 'Purchasing', 'Inventory', 'Production', 'Finished Goods', 'Delivery'],
    entities: ['Product', 'Material', 'Sales Order', 'Sales Order Item', 'Purchase Order', 'Purchase Item', 'Inventory Transaction', 'Production Order', 'Production Output'],
    outcomes: ['Connected Sales, Purchasing, Inventory, Production and Delivery in one process model', 'Made downstream dependencies visible', 'Defined representative rules for shortages, purchasing requirements and inventory movement'],
    principle: 'The value is in understanding how an operational decision in one module changes requirements in the next.',
    note: 'The rules shown are representative modelling logic; exact customer-specific implementations may differ.',
  },
  {
    slug: 'finance-management',
    index: '04',
    title: 'Finance Management System',
    shortTitle: 'Finance Management',
    category: 'Business Process / Finance / Data Model',
    summary: 'Financial-process and reporting logic connecting revenue, cost, payments and operational transactions.',
    featuredCapability: 'Transaction → Report',
    context: [
      'Financial reporting depends on consistent definitions, source data and relationships between operational transactions.',
      'The challenge is to make the financial logic traceable from business operations to reporting without exposing confidential financial data.',
    ],
    problems: ['Inconsistent business definitions', 'Reporting detached from source transactions', 'Revenue, cost and payment logic held in separate views', 'Limited traceability from a management number to the originating event'],
    role: ['Understand financial process requirements', 'Map financial entities and relationships', 'Clarify business definitions', 'Design structured data inputs', 'Support calculation logic', 'Connect operational information to reporting'],
    flowLabel: 'Conceptual finance model',
    flow: ['Revenue', 'Cost', 'Payment / Cash Movement', 'Operational Transactions', 'Financial Reporting'],
    entities: ['Revenue', 'Cost', 'GMV', 'Payment', 'Expense', 'Transaction Status', 'Reporting Period', 'Business KPI'],
    outcomes: ['A conceptual model for connecting operational events to reporting', 'Clearer definitions for representative finance concepts', 'Traceability treated as a design requirement'],
    principle: 'A report is more useful when users can understand where a number comes from and which business event created it.',
    note: 'Presented at a conceptual level because customer-specific financial data and internal models are confidential.',
  },
  {
    slug: 'teninn',
    index: '05',
    title: 'TENINN',
    shortTitle: 'TENINN',
    category: 'Product / Property Management / Personal Project',
    summary: 'A personal product concept centred on the operational needs of rental-property owners.',
    featuredCapability: 'Domain modelling',
    accent: true,
    context: [
      'Rental owners often coordinate properties, rooms, tenants, contracts, utilities, monthly charges, payments and expenses through spreadsheets, messaging apps and disconnected tools.',
      'TENINN explores how those operations can be centralised around the landlord / rental-property owner.',
    ],
    problems: ['Property information spread across tools', 'Room and tenant status tracked manually', 'Contracts separated from monthly billing', 'Payments and outstanding amounts difficult to follow'],
    role: ['Identify the target user', 'Model the rental-management domain', 'Design information architecture', 'Define core modules and relationships', 'Translate an operational problem into a coherent product concept'],
    flowLabel: 'Core product domain model',
    flow: ['Landlord', 'Property', 'Building', 'Room', 'Tenant', 'Contract', 'Invoice', 'Payment'],
    approach: [
      { title: 'Set up', copy: 'Create a property and define its rooms.' },
      { title: 'Occupancy', copy: 'Add a tenant and connect a contract to a room.' },
      { title: 'Billing', copy: 'Generate monthly charges and record payment.' },
      { title: 'Follow-up', copy: 'Track outstanding amounts as an operational state.' },
    ],
    entities: ['Property management', 'Room management', 'Tenant management', 'Contract management', 'Monthly billing', 'Utilities', 'Payments', 'Expenses'],
    tools: ['PostgreSQL — technical direction', 'FastAPI — learning / project direction', 'SQLAlchemy — learning / project direction', 'React — project direction', 'Tailwind CSS — project direction', 'Docker — project direction'],
    outcomes: ['Defined a landlord-centred product concept', 'Mapped the core property-to-payment domain', 'Established a modular product flow for rental operations'],
    principle: 'TENINN demonstrates product thinking: identifying a real user, modelling the domain and translating operations into a coherent product concept.',
    note: 'Personal product concept. Technology labels describe direction or learning where implementation is not publicly verified.',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
