export const personalInfo = {
  name: 'David Delporte',
  title: 'IT Operations & Security Engineer',
  tagline: 'Bridging IT and business. Managing infrastructure through data.',
  location: 'West-Vlaanderen, Belgium',
  email: 'contact@daviddelporte.com',
  phone: '+32 465 89 36 45',
  github: 'https://github.com/Yasuke2000',
  linkedin: 'https://linkedin.com/in/david-delporte',
  homelab: 'https://homelab.daviddelporte.com',
}

export const profile = `IT Operations & Security professional with 4+ years of experience across system engineering, cybersecurity operations, and IT infrastructure management. Currently managing multi-site IT infrastructure (6 locations) at Belgian Logistics Company, covering Microsoft 365, Azure Virtual Desktop, Intune/Autopilot, network security (UniFi/Meraki/Barracuda), VoIP (3CX), and EDI systems.

Strong focus on security-first design with hands-on experience in SIEM/XDR deployment (Wazuh), penetration testing, vulnerability assessments, and CISO/DPO collaboration. Skilled in vendor management, stakeholder communication, and translating complex technical requirements into business solutions.

Actively pursuing cybersecurity certifications (ISC2 CC, ISO 27001) and building expertise in Belgium's CyberFundamentals (CyFun) framework and NIS2 compliance. Passionate about automation, infrastructure-as-code, and continuous improvement.`

export interface Experience {
  company: string
  location: string
  role: string
  type: string
  period: string
  description: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    company: 'Belgian Logistics Company',
    location: 'Loppem, Belgium',
    role: 'IT System Engineer',
    type: 'Full-time',
    period: 'June 2025 — Present',
    description: 'Multi-site IT operations across 6 locations in a Belgian logistics & transport company',
    highlights: [
      'Azure Virtual Desktop rollout for 100+ users — Autopilot, Intune, hybrid Azure AD join, Conditional Access, MFA',
      'Microsoft 365 multi-tenant management (4 entities), Business Central GDAP, licensing & shared mailboxes',
      'CISO/DPO collaboration for security policies, GDPR compliance, and incident response across all sites',
      'Network infrastructure — UniFi/Meraki switching, VLAN segmentation, Barracuda firewalls, Grafana/Cloudflare monitoring',
      'Wazuh SIEM/XDR deployment for centralized security monitoring',
      '3CX VoIP administration — queue routing, hotdesking, BLF, vendor coordination (Connectify NV)',
      'UniFi Protect camera systems — GDPR-compliant deployment, CAO 68 compliance, police registration',
      'EDI/OFTP2 support, Hyper-V decommissioning, uniFLOW print management rollout',
      'Vendor management with EASI, iDocta, Alistar/Dynavision, Connectify NV',
      'Confluence documentation, Jira ticket management, IT asset lifecycle management',
    ],
  },
  {
    company: 'Vanden Broele',
    location: 'Brugge, Belgium',
    role: 'Application Manager & Network Administrator',
    type: 'Internship',
    period: 'September 2024 — August 2025',
    description: 'Service desk, application management, and IT process optimization',
    highlights: [
      'First and second-line IT support via service desk ticket management',
      'CISO/DPO collaboration — security policy development, GDPR compliance support',
      'Asset management workflows aligned with ISO standards',
      'Jira integration for streamlined ticket handling between IT developers and operational teams',
      'Application maintenance and system enhancements',
    ],
  },
  {
    company: 'Stad Gent — Dept. Onderwijs',
    location: 'Gent, Belgium',
    role: 'ICT Security Operations & System Administrator',
    type: 'Internship',
    period: 'March 2022 — June 2025',
    description: 'System administration and security operations for municipal educational infrastructure',
    highlights: [
      'Penetration testing and vulnerability assessments on educational infrastructure',
      'Blue team (defensive) and red team (offensive) security operations',
      'Threat detection, security monitoring, and remediation recommendations',
      'System and network administration, Windows Server, Active Directory',
      'Firewall configuration, VPN setup, VLAN segmentation',
    ],
  },
  {
    company: 'Just Eat Takeaway',
    location: 'Enschede, Netherlands',
    role: 'IT Operations Analyst / NOC',
    type: 'Full-time',
    period: 'January 2021 — December 2022',
    description: '24/7 NOC monitoring and IT operations for a major international food delivery platform',
    highlights: [
      '24/7 NOC monitoring — security alerts, log analysis, threat detection',
      'Operational process evaluations leading to 15% efficiency improvement',
      'Incident management procedures and standardized problem resolution workflows',
      'Vendor coordination for patches and system updates',
      'Cross-functional collaboration between IT, operations, and management',
    ],
  },
  {
    company: 'Freelance',
    location: 'Belgium',
    role: 'IT Security Consultant',
    type: 'Self-employed',
    period: '2021 — Present',
    description: 'Security consulting and SIEM deployment for SMBs',
    highlights: [
      'Wazuh SIEM/XDR deployment for SMB security monitoring',
      'Compliance support (PCI-DSS, GDPR)',
      'Incident response procedures and threat hunting',
      'Technical documentation and client advisory',
    ],
  },
]

export interface SkillCategory {
  name: string
  icon: string
  skills: string[]
}

export const skills: SkillCategory[] = [
  {
    name: 'Security & Compliance',
    icon: 'Shield',
    skills: [
      'Wazuh SIEM/XDR', 'Penetration Testing', 'Vulnerability Assessment',
      'Blue/Red Team Operations', 'GDPR Compliance', 'CyFun Framework (NIS2)',
      'ISO 27001', 'Incident Response', 'Security Awareness Training',
    ],
  },
  {
    name: 'Cloud & Identity',
    icon: 'Cloud',
    skills: [
      'Microsoft 365', 'Azure Virtual Desktop (AVD)', 'Entra ID (Azure AD)',
      'Intune / Autopilot', 'Conditional Access & MFA', 'Business Central',
      'Hybrid Azure AD Join',
    ],
  },
  {
    name: 'Infrastructure & Networking',
    icon: 'Network',
    skills: [
      'UniFi (Switches, APs, Protect)', 'Meraki', 'Barracuda Firewalls',
      'VLAN Segmentation', 'VPN Configuration', 'DNS / DHCP / TCP-IP', 'Hyper-V',
    ],
  },
  {
    name: 'DevOps & Automation',
    icon: 'Terminal',
    skills: [
      'Kubernetes (K3s)', 'Docker', 'ArgoCD / GitOps', 'NixOS / Nix Flakes',
      'Prometheus / Grafana / Alertmanager', 'GitHub Actions CI/CD',
      'PowerShell / Bash / Python',
    ],
  },
  {
    name: 'Telephony & Collaboration',
    icon: 'Phone',
    skills: [
      '3CX VoIP', 'Queue Management / Hotdesking', 'BLF / SIP Troubleshooting',
      'Microsoft Teams',
    ],
  },
  {
    name: 'Business & Documentation',
    icon: 'FileText',
    skills: [
      'Confluence', 'Jira', 'EDI / OFTP2', 'uniFLOW Print Management',
      'Vendor Management', 'Stakeholder Communication', 'Technical Documentation',
    ],
  },
]

export interface Project {
  name: string
  url: string | null
  description: string
  tech: string[]
}

export const projects: Project[] = [
  {
    name: 'IT Budget Dashboard',
    url: 'https://it-budget-dashboard.vercel.app',
    description: 'Full-stack IT financial management dashboard pulling live data from Microsoft Business Central. Built for multi-entity IT cost control across 6 locations — budget vs. actual tracking, vendor analysis, license utilization, and cost category breakdowns.',
    tech: [
      'Next.js 15 / TypeScript',
      'Business Central API / Microsoft Graph',
      'Recharts dashboards / shadcn/ui',
      'Multi-entity budget tracking',
      'Peppol e-invoicing integration',
      'Role-based access with Entra ID',
    ],
  },
  {
    name: 'Production-Grade Homelab',
    url: 'https://homelab.daviddelporte.com',
    description: 'Self-hosted infrastructure running 14+ services at 99.9% uptime for \u20AC17/month',
    tech: [
      '3-node K3s HA cluster with GitOps',
      'NixOS flakes — declarative, zero-touch provisioning',
      'sops + age secrets encryption in git',
      'ArgoCD self-healing deployments',
      'cert-manager TLS, Traefik reverse proxy',
      'Prometheus/Grafana/Alertmanager monitoring stack',
      'GitHub Actions CI/CD pipeline',
    ],
  },
  {
    name: 'CyFun Compliance Tracker',
    url: 'https://cyfun-eta.vercel.app',
    description: 'Web app that connects to M365 tenants and auto-checks Belgian CyberFundamentals controls. Maps 34 Basic-level controls to Microsoft Graph API endpoints for automated security compliance verification.',
    tech: [
      'Next.js 15 / TypeScript',
      'Microsoft Graph API / MSAL',
      'Tremor dashboards / shadcn/ui',
      'CyFun framework mapping',
      'PDF compliance report generation',
    ],
  },
  {
    name: 'Transport KPI Dashboard',
    url: 'https://github.com/Yasuke2000/transport-kpi-dashboard',
    description: 'Professional Transport & Logistics KPI Dashboard — real-time shipment monitoring, delivery metrics, cost analysis and Excel export.',
    tech: ['JavaScript', 'Chart.js', 'Real-time metrics', 'Excel export'],
  },
  {
    name: 'Subnet Calculator',
    url: 'https://github.com/Yasuke2000/Subnet-Calculator',
    description: 'Python tool for efficient IPv4 subnet calculation and management with VLSM support, IP validation, and various subnetting scenarios.',
    tech: ['Python', 'VLSM', 'IPv4 subnetting', 'CLI tool'],
  },
  {
    name: 'DPR Calculator',
    url: 'https://github.com/Yasuke2000/DPR-Calculator-for-D-D',
    description: 'User-friendly tool to estimate D&D character Damage Per Round considering abilities and conditions.',
    tech: ['Python', 'Statistical analysis', 'Game mechanics'],
  },
]

export interface Education {
  institution: string
  degree: string
  period: string
  focus: string
}

export const education: Education[] = [
  {
    institution: 'Hogeschool VIVES',
    degree: 'Graduate Diploma Network Engineering',
    period: '2022 — 2025',
    focus: 'Network administration, cybersecurity, firewall configuration, server management',
  },
  {
    institution: 'HOWEST Hogeschool West-Vlaanderen',
    degree: 'Bachelor Information Technology',
    period: '2019 — 2025',
    focus: 'IT operations, project management, applied informatics',
  },
]

export interface Certification {
  name: string
  issuer: string
  date: string
  badge?: boolean
}

export const certifications: Certification[] = [
  { name: 'ISO/IEC 27001 Information Security Associate', issuer: 'SkillFront', date: 'March 2026', badge: true },
  { name: 'ISC2 Certified in Cybersecurity (CC)', issuer: 'ISC2', date: 'In Progress', badge: true },
  { name: 'Six Sigma White Belt', issuer: 'CSSC', date: 'May 2025' },
  { name: 'DevOps Foundations - Site Reliability Engineering', issuer: 'LinkedIn', date: 'July 2021' },
  { name: 'Grondslagen van Projectmanagement', issuer: 'LinkedIn', date: 'June 2024' },
  { name: 'Cybersecurity Engineering Virtual Internship', issuer: 'Forage', date: 'November 2022' },
]

export interface Achievement {
  name: string
  issuer: string
  description: string
}

export const achievements: Achievement[] = [
  { name: 'Integration Challenge Winner 2024', issuer: 'delaware BeLux', description: 'Led the winning team in a system integration challenge' },
  { name: 'TOP Scorer SAP Challenge Europe 2024', issuer: 'Deloitte', description: 'Highest scoring participant in European SAP challenge' },
  { name: 'IT Recruitment Challenge Belgium Finalist', issuer: 'Editx', description: 'Top performer in national IT recruitment challenge' },
]

export const assessmentStrengths = [
  'Plans and coordinates tasks methodically with clear priorities',
  'Decisive — evaluates consequences and alternatives, makes timely decisions',
  'Service-oriented — works collaboratively with clients, thinks in solutions',
  'Open to change, actively seeks improvement opportunities, takes initiative',
  'Thorough analyst — gathers information proactively, minimizes risks',
  'Calm and positive communicator, even in difficult conversations',
  'Transparent and authentic — challenges viewpoints when needed',
  'Actively seeks and incorporates feedback',
]

export const cognitiveAssessment = [
  { area: 'Deductive Reasoning', score: 'B', label: 'Above Average' },
  { area: 'Inductive Reasoning', score: 'B', label: 'Above Average' },
  { area: 'Numerical Reasoning', score: 'A', label: 'Well Above Average' },
]

export const languages = [
  { name: 'Dutch', level: 'Native', percent: 100 },
  { name: 'English', level: 'Fluent', percent: 90 },
  { name: 'French', level: 'Basic', percent: 30 },
  { name: 'Japanese', level: 'Basic', percent: 20 },
]

export const volunteering = {
  role: 'Head Animator',
  organization: 'Vlaamse Dienst Speelpleinwerk (VDS) vzw',
  period: 'February 2016 — January 2025 (9 years)',
  description: 'Youth playground coordination and team leadership',
}
