// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Hamaad Ghafar',
  initials: 'HG',
  role: 'DevOps & Site Reliability Engineer',
  location: 'Lahore, Pakistan',
  email: 'hamaadf20@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hamaadghafar',
  github: 'https://github.com/hamaadghafar',
  instagram: 'https://www.instagram.com/hamaadghafar',
  phone: '+92 308 2750142',
  whatsapp: 'https://wa.me/923082750142',
  // Put the résumé file in /public with exactly this name.
  resume: '/Hamaad_Ghafar_Resume.pdf',
  resumeFileName: 'Hamaad_Ghafar_Resume.pdf',
  current: {
    title: 'Software Engineer · Cloud & SRE',
    company: 'i2c Inc.',
    place: 'Lahore, Pakistan',
  },
};

export const stats = [
  { value: '4+', label: 'Years building and running production infrastructure', featured: true },
  { value: '5', label: 'Environments every release is promoted through, DEV → PROD' },
  { value: '3', label: 'Platforms operated: private cloud, AWS and Microsoft Azure' },
  { value: '2', label: 'Cloud certifications: Azure AZ-104 and AWS SAA-C03' },
];

export type Variant = 'feat' | 'inv' | 'plain';

export interface Project {
  id: string;
  num: string;
  kind: string;
  org: string;
  span: number;
  variant: Variant;
  name: string;
  headline: string;
  desc: string;
  stats: { v: string; l: string }[];
  tags: string[];
  owned: string;
  delivered: string;
}

export const projects: Project[] = [
  {
    id: 'release',
    num: '01',
    kind: 'CI/CD · RELEASE ENGINEERING',
    org: 'i2c Inc.',
    span: 7,
    variant: 'feat',
    name: 'Five-Environment Release Platform',
    headline: 'From commit to client-ready, through one governed path.',
    desc: 'End-to-end deployment of multi-stack web, backend and mobile applications for a global fintech company, promoted through DEV, QA, UAT, STG and Production on a private cloud.',
    stats: [
      { v: '5', l: 'Environments per release' },
      { v: 'Web · API · Mobile', l: 'Stacks shipped through the same process' },
    ],
    tags: ['TeamCity', 'Docker', 'Kubernetes', 'Linux', 'Private Cloud', 'iOS / Android releases'],
    owned:
      'Designed and maintain the TeamCity CI/CD pipelines, the containerized build and promotion flow, and the governed release process that also covers iOS and Android deployments.',
    delivered:
      'A standardized way to build and promote every release, with end-to-end validation at each stage, so financial applications reach production safely and consistently.',
  },
  {
    id: 'ha',
    num: '02',
    kind: 'RELIABILITY · HIGH AVAILABILITY',
    org: 'i2c Inc.',
    span: 5,
    variant: 'plain',
    name: 'F5 High-Availability Setup',
    headline: 'No single point of failure, by design.',
    desc: 'Highly available serving for mission-critical financial applications, with F5 load balancing in front of fully redundant servers.',
    stats: [{ v: '0', l: 'Single points of failure across apps, services and schedulers' }],
    tags: ['F5 BIG-IP', 'Load Balancing', 'Tomcat', 'Linux', 'SSL/TLS'],
    owned:
      'Implement and maintain F5 load balancing and redundant servers for every application, service and scheduler, and lead production troubleshooting through log and configuration analysis.',
    delivered:
      'Client-facing systems that stay up through node failures, with fast root-cause fixes when something does go wrong.',
  },
  {
    id: 'multicloud',
    num: '03',
    kind: 'CONTAINERS · MULTI-CLOUD',
    org: 'DHives',
    span: 6,
    variant: 'inv',
    name: 'Kubernetes on EKS & AKS',
    headline: 'One microservice platform, two clouds.',
    desc: 'Containerized microservices deployed on Amazon EKS and Azure AKS, built and released through Jenkins and Azure DevOps pipelines.',
    stats: [{ v: 'EKS + AKS', l: 'Managed Kubernetes on AWS and Azure' }],
    tags: ['Kubernetes', 'Docker', 'Amazon ECR', 'Azure ACR', 'Jenkins', 'Azure DevOps'],
    owned:
      'Built the CI/CD pipelines for dev, staging and production with an approval gate before production, and managed the image registries in Amazon ECR and Azure Container Registry.',
    delivered:
      'Repeatable, approved releases of microservices to either cloud, with the same container images moving from dev to production.',
  },
  {
    id: 'network',
    num: '04',
    kind: 'CLOUD SECURITY · NETWORKING',
    org: 'DHives',
    span: 6,
    variant: 'plain',
    name: 'Secure Cloud Foundations',
    headline: 'Private by default, protected at the edge.',
    desc: 'Secure network design on AWS and Azure: VPC/VNet, private subnets, security groups and NSGs, with web application firewalls in front of every application.',
    stats: [{ v: 'Private-only', l: 'Database access, with encryption and backups' }],
    tags: ['VPC / VNet', 'AWS WAF', 'App Gateway WAF', 'RDS', 'Azure PostgreSQL', 'Key Vault', 'Entra ID'],
    owned:
      'Designed the networks, put AWS WAF and Azure Application Gateway WAF in front of apps, and ran managed databases on Amazon RDS and Azure Database for PostgreSQL.',
    delivered:
      'Secrets and access managed with AWS Secrets Manager, KMS, IAM, Azure Key Vault and Microsoft Entra ID, plus monitoring and alerts in CloudWatch and Azure Monitor.',
  },
  {
    id: 'ops',
    num: '05',
    kind: 'SECURITY · AUTOMATION · OPERATIONS',
    org: 'i2c Inc. · DHives',
    span: 12,
    variant: 'plain',
    name: 'Platform Health & Automation',
    headline: 'Less manual work, fewer surprises in production.',
    desc: 'The ongoing work that keeps platforms healthy: SSL/TLS certificate lifecycle, security hardening, planned upgrades and patching, standardized environment configuration, and scripting away repetitive operations.',
    stats: [
      { v: 'DEV → PROD', l: 'Consistent environment configuration end to end' },
      { v: 'Bash', l: 'Routine Linux server tasks automated' },
    ],
    tags: ['SSL/TLS', 'Patching', 'Tomcat', 'Bash', 'Linux', 'Configuration Management'],
    owned:
      'Own certificate management and security hardening across all applications, and keep the application server and runtime stack current through planned upgrades with post-upgrade validation.',
    delivered:
      'Automated deployment and maintenance work, making releases faster, safer and repeatable, with every application behaving the same from DEV to Production.',
  },
];

export const services = [
  {
    num: '01',
    title: 'CI/CD & release engineering',
    desc: 'Pipelines that build, test and promote multi-stack web, backend and mobile apps across DEV, QA, UAT, STG and Production.',
    tags: ['TeamCity', 'Jenkins', 'Azure DevOps', 'GitHub Actions', 'ArgoCD'],
  },
  {
    num: '02',
    title: 'Containers & orchestration',
    desc: 'Packaging and running workloads with Docker and Kubernetes on Amazon EKS and Azure AKS.',
    tags: ['Docker', 'Kubernetes', 'EKS', 'AKS'],
  },
  {
    num: '03',
    title: 'Reliability & high availability',
    desc: 'F5 load balancing, redundant servers for every application, service and scheduler, and fast incident resolution through log and configuration analysis.',
    tags: ['F5 BIG-IP', 'HA', 'Incident Response'],
  },
  {
    num: '04',
    title: 'Security',
    desc: 'SSL/TLS certificate management, secrets management, IAM/RBAC, web application firewalls, and regular patching and upgrades.',
    tags: ['SSL/TLS', 'IAM / RBAC', 'WAF', 'Key Vault'],
  },
  {
    num: '05',
    title: 'Cloud infrastructure',
    desc: 'Secure networks, private subnets, managed databases, and monitoring and alerting on AWS and Azure.',
    tags: ['AWS', 'Azure', 'VPC / VNet', 'RDS'],
  },
  {
    num: '06',
    title: 'Automation',
    desc: 'Replacing repetitive operational work with scripts and pipelines so releases are faster, safer and repeatable.',
    tags: ['Bash', 'Shell Scripting', 'Pipelines'],
  },
];

export interface SystemNode {
  title: string;
  sub: string;
}

export interface SystemDesign {
  id: string;
  label: string;
  kind: string;
  title: string;
  blurb: string;
  nodes: SystemNode[];
  decisions: string[];
}

export const systems: SystemDesign[] = [
  {
    id: 'release',
    label: 'Release pipeline · i2c',
    kind: 'CI/CD · PRIVATE CLOUD',
    title: 'One path from commit to production.',
    blurb:
      'Every web, backend and mobile release follows the same governed path, from source control through five environments, before it reaches clients.',
    nodes: [
      { title: 'Source control', sub: 'Developer code for web, backend and mobile apps' },
      { title: 'TeamCity build', sub: 'Build, test and package every release' },
      { title: 'Docker images', sub: 'Containerized workloads, run on Kubernetes' },
      { title: 'DEV → QA → UAT', sub: 'Promoted stage by stage with standardized configuration' },
      { title: 'STG validation', sub: 'End-to-end checks before going live' },
      { title: 'Production', sub: 'Served behind F5 on redundant servers' },
    ],
    decisions: [
      'One release process for every stack, including iOS and Android, so nothing reaches production on a different path.',
      'Environment configuration is standardized, so an application behaves the same in DEV as it does in Production.',
      'Every deployment is validated end to end before it is called done.',
    ],
  },
  {
    id: 'ha',
    label: 'HA serving · F5',
    kind: 'RELIABILITY · HIGH AVAILABILITY',
    title: 'Redundant at every layer.',
    blurb:
      'Client traffic is load balanced across redundant servers, and every application, service and scheduler has a backup ready to take over.',
    nodes: [
      { title: 'Client traffic', sub: 'Financial applications used by clients' },
      { title: 'F5 BIG-IP', sub: 'Load balancing and SSL/TLS termination' },
      { title: 'App server pool', sub: 'Redundant Tomcat nodes for each application' },
      { title: 'Services & schedulers', sub: 'Also redundant, with no single instance' },
      { title: 'Logs & configuration', sub: 'Structured analysis on Linux' },
      { title: 'Root-cause fix', sub: 'Fast resolution for client-facing systems' },
    ],
    decisions: [
      'Redundancy covers everything: applications, background services and schedulers, not just the web tier.',
      'Certificates are managed through their whole lifecycle, so expiries never become outages.',
      'Runtime upgrades and patches are planned and validated afterwards, never applied ad hoc.',
    ],
  },
  {
    id: 'cloud',
    label: 'Multi-cloud platform · DHives',
    kind: 'KUBERNETES · AWS + AZURE',
    title: 'Same platform shape on two clouds.',
    blurb:
      'Microservices are built once, stored in the cloud registry, approved, and deployed to managed Kubernetes behind a web application firewall.',
    nodes: [
      { title: 'Jenkins / Azure DevOps', sub: 'Pipelines for dev, staging and production' },
      { title: 'ECR / ACR', sub: 'Docker images in the cloud container registry' },
      { title: 'Approval gate', sub: 'Required before production releases' },
      { title: 'EKS / AKS', sub: 'Microservices on managed Kubernetes' },
      { title: 'WAF + private network', sub: 'AWS WAF / App Gateway WAF, private subnets' },
      { title: 'RDS / Azure PostgreSQL', sub: 'Encrypted, backed up, private access only' },
    ],
    decisions: [
      'Databases are reachable only from private subnets, with encryption and backups enabled.',
      'Secrets live in AWS Secrets Manager, KMS and Azure Key Vault, with access through IAM and Microsoft Entra ID.',
      'Monitoring, logs and alerts are set up from day one in CloudWatch and Azure Monitor.',
    ],
  },
];

export const principles = [
  'DevOps is a mindset of ownership, automation and continuous improvement.',
  'Secure by default: certificates, secrets and access are designed in from the start.',
  'Highly available by design, and easy to monitor and recover.',
  'Work closely with development and QA so every release reaches production smoothly.',
];

export const experiences = [
  {
    company: 'i2c Inc.',
    role: 'Software Engineer · Cloud & Site Reliability',
    date: 'SEP 2024 – PRESENT',
    place: 'Lahore, Pakistan',
    summary:
      'Global fintech and payments technology company. I own the deployment, reliability and security of mission-critical financial applications on a private cloud, from source control through production.',
    description: [
      'Own end-to-end deployment of multi-stack web, backend and mobile applications across five environments (DEV, QA, UAT, STG, Production).',
      'Design and maintain CI/CD pipelines in TeamCity, with containerized workloads on Docker and Kubernetes, and manage iOS and Android release deployments through the same governed process.',
      'Implement and maintain high availability with F5 load balancing and fully redundant servers for every application, service and scheduler.',
      'Handle production troubleshooting through structured log and configuration analysis on Linux, and validate every deployment end to end.',
      'Own SSL/TLS certificate lifecycle management, security hardening, and planned runtime upgrades and patching.',
      'Automate manual deployment and maintenance work, standardize environment configuration, and onboard new applications with development and QA teams.',
    ],
    technologies: ['TeamCity', 'Docker', 'Kubernetes', 'F5 BIG-IP', 'Linux', 'Tomcat', 'SSL/TLS', 'Bash'],
  },
  {
    company: 'DHives',
    role: 'DevOps Engineer',
    date: 'SEP 2022 – AUG 2024',
    place: 'Lahore, Pakistan',
    summary:
      'Built and ran containerized cloud platforms on AWS and Microsoft Azure, from network design to CI/CD, security and monitoring.',
    description: [
      'Deployed microservices on Kubernetes (Amazon EKS and Azure AKS), with Docker images stored in Amazon ECR and Azure Container Registry.',
      'Built CI/CD pipelines with Jenkins and Azure DevOps for dev, staging and production, with approval before production releases.',
      'Designed secure cloud networks (VPC/VNet, private subnets, security groups/NSGs) with AWS WAF and Azure Application Gateway WAF in front of applications.',
      'Managed databases on Amazon RDS and Azure Database for PostgreSQL, with encryption, backups and private access only.',
      'Managed secrets and access with AWS Secrets Manager, KMS, IAM, Azure Key Vault and Microsoft Entra ID.',
      'Set up monitoring, logs and alerts with Amazon CloudWatch and Azure Monitor, and automated routine Linux tasks with Bash.',
    ],
    technologies: ['AWS', 'Azure', 'EKS', 'AKS', 'ECR / ACR', 'Jenkins', 'Azure DevOps', 'RDS', 'Key Vault', 'CloudWatch'],
  },
];

export const education = {
  degree: "Bachelor's degree, Information Technology",
  school: 'Punjab University College of Information Technology (PUCIT – FCIT)',
  place: 'Lahore, Pakistan',
  dates: 'Nov 2018 – Jul 2022',
};

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', code: 'SAA-C03', issuer: 'Amazon Web Services' },
  { name: 'Microsoft Certified: Azure Administrator Associate', code: 'AZ-104', issuer: 'Microsoft' },
];

export const skillGroups = [
  { name: 'CLOUD · AWS', items: ['EC2', 'VPC', 'EKS', 'ECR', 'RDS', 'S3', 'IAM', 'CloudWatch', 'WAF', 'Secrets Manager', 'KMS'] },
  { name: 'CLOUD · AZURE', items: ['AKS', 'ACR', 'VNet', 'Key Vault', 'Entra ID', 'Azure Monitor', 'App Gateway WAF', 'Azure PostgreSQL'] },
  { name: 'CONTAINERS', items: ['Docker', 'Kubernetes', 'Private Cloud'] },
  { name: 'CI/CD', items: ['TeamCity', 'Jenkins', 'Azure DevOps', 'GitHub Actions', 'ArgoCD', 'Bitbucket'] },
  { name: 'INFRASTRUCTURE & OPS', items: ['Linux', 'Bash', 'Shell Scripting', 'F5 BIG-IP', 'Tomcat', 'SSL/TLS'] },
  { name: 'MONITORING', items: ['CloudWatch', 'Azure Monitor', 'Log Analysis', 'System Monitoring', 'Alerting'] },
  { name: 'SECURITY', items: ['IAM / RBAC', 'Secrets Management', 'WAF', 'Certificate Lifecycle', 'Patching & Hardening'] },
  { name: 'PRACTICES', items: ['Automation', 'High Availability', 'Release Management', 'Incident Troubleshooting'] },
  { name: 'LANGUAGES', items: ['English · Full Professional', 'Urdu · Native'] },
];

export const aboutFacts = [
  { k: 'BASED IN', v: 'Lahore, Pakistan' },
  { k: 'CURRENT ROLE', v: 'Software Engineer (Cloud & SRE), i2c Inc.' },
  { k: 'EDUCATION', v: 'BS Information Technology, PUCIT' },
  { k: 'CERTIFIED', v: 'AWS SAA-C03 · Azure AZ-104' },
];
