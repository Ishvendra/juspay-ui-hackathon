import {
  BarChart3,
  Settings,
  Database,
  Code,
  Users,
  FileText,
  Cloud,
  Layers,
  Shield,
  Search,
  BookOpen,
  HelpCircle,
  Briefcase,
  GitBranch,
  Box,
  Server,
  Network,
  DatabaseZap,
  ShieldCheck,
  LineChart,
  Building,
} from 'lucide-react';
import { type MenuItem } from '../types';
import { Icon } from '../components/Icon';

export const menuData: MenuItem[] = [
  {
    id: 'software-solutions',
    icon: <Icon icon={Code} />,
    title: 'Software Solutions',
    description: 'Custom software development and deployment',
    children: [
      {
        id: 'governance',
        title: 'Governance',
        description: 'Establish rules, policies, and processes',
        icon: <Icon icon={Settings} />,
        children: [
          {
            id: 'policy-framework',
            title: 'Policy Framework',
            description: 'Define and manage organizational policies',
            icon: <Icon icon={FileText} />,
            children: [
              {
                id: 'compliance-rules',
                title: 'Compliance Rules',
                description: 'Set and enforce rules for regulatory compliance',
                icon: <Icon icon={Shield} />,
              },
              {
                id: 'audit-trails',
                title: 'Audit Trails',
                description: 'Track and review system activities and changes',
                icon: <Icon icon={Search} />,
              },
            ],
          },
          {
            id: 'decision-rights',
            title: 'Decision Rights',
            description: 'Assign authority for key decisions',
            icon: <Icon icon={Users} />,
            children: [
              {
                id: 'role-mapping',
                title: 'Role Mapping',
                description: 'Map user roles to specific permissions',
                icon: <Icon icon={Database} />,
              },
              {
                id: 'escalation',
                title: 'Escalation Paths',
                description: 'Define clear paths for issue resolution',
                icon: <Icon icon={Layers} />,
              },
            ],
          },
        ],
      },
      {
        id: 'planning',
        title: 'Strategic Planning',
        description: 'Outline long-term goals and resource allocation',
        icon: <Icon icon={BarChart3} />,
        children: [
          {
            id: 'roadmaps',
            title: 'Technology Roadmaps',
            description: 'Visualize the plan for technology adoption',
            icon: <Icon icon={Cloud} />,
            children: [
              {
                id: 'short-term',
                title: 'Short-Term Goals',
                description: 'Define immediate objectives and milestones',
                icon: <Icon icon={Code} />,
              },
              {
                id: 'long-term',
                title: 'Long-Term Goals',
                description: 'Set the vision for future growth',
                icon: <Icon icon={BarChart3} />,
              },
            ],
          },
          {
            id: 'budgeting',
            title: 'Budgeting',
            description: 'Manage and allocate financial resources',
            icon: <Icon icon={Database} />,
            children: [
              {
                id: 'capex',
                title: 'CapEx',
                description: 'Plan for major capital expenditures',
                icon: <Icon icon={FileText} />,
              },
              {
                id: 'opex',
                title: 'OpEx',
                description: 'Manage ongoing operational expenses',
                icon: <Icon icon={FileText} />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'advanced-analytics',
    icon: <Icon icon={Database} />,
    title: 'Advanced Analytics',
    description: 'Unlock insights with ML and predictive modeling',
    children: [
      {
        id: 'ml-models',
        title: 'ML Models',
        description: 'Develop and deploy machine learning models',
        icon: <Icon icon={Code} />,
        children: [
          {
            id: 'deep-learning',
            title: 'Deep Learning',
            description: 'Utilize neural networks for complex patterns',
            icon: <Icon icon={Database} />,
            children: [
              {
                id: 'cnn',
                title: 'Convolutional Networks',
                description: 'Implement models for image analysis',
                icon: <Icon icon={BarChart3} />,
              },
              {
                id: 'rnn',
                title: 'Recurrent Networks',
                description: 'Apply models for sequential data',
                icon: <Icon icon={Layers} />,
              },
            ],
          },
          {
            id: 'shallow-models',
            title: 'Shallow Models',
            description: 'Use traditional models for structured data',
            icon: <Icon icon={BarChart3} />,
            children: [
              {
                id: 'decision-tree',
                title: 'Decision Trees',
                description: 'Create rule-based models for classification',
                icon: <Icon icon={FileText} />,
              },
              {
                id: 'svm',
                title: 'Support Vector Machines',
                description: 'Implement models for complex classification',
                icon: <Icon icon={Search} />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'business-intelligence',
    icon: <Icon icon={BarChart3} />,
    title: 'Business Intelligence',
    description: 'Visualize data and generate actionable reports',
    children: [
      {
        id: 'dashboards',
        title: 'Dashboards',
        description: 'Visualize key performance indicators',
        icon: <Icon icon={LineChart} />,
      },
      {
        id: 'reporting',
        title: 'Reporting',
        description: 'Generate and automate business reports',
        icon: <Icon icon={FileText} />,
      },
      {
        id: 'data-warehousing',
        title: 'Data Warehousing',
        description: 'Centralize data for analysis and insights',
        icon: <Icon icon={Server} />,
      },
    ],
  },
  {
    id: 'development',
    icon: <Icon icon={Code} />,
    title: 'Development',
    description: 'Build robust APIs and integration pipelines',
    children: [
      {
        id: 'api-management',
        title: 'API Management',
        description: 'Design, secure, and manage APIs',
        icon: <Icon icon={Cloud} />,
      },
      {
        id: 'ci-cd',
        title: 'CI/CD Pipelines',
        description: 'Automate software build and deployment',
        icon: <Icon icon={GitBranch} />,
      },
      {
        id: 'repositories',
        title: 'Code Repositories',
        description: 'Manage and version control source code',
        icon: <Icon icon={Database} />,
      },
    ],
  },
  {
    id: 'cloud-infrastructure',
    icon: <Icon icon={Cloud} />,
    title: 'Cloud & Infrastructure',
    description: 'Manage and scale your cloud resources',
    children: [
      {
        id: 'cloud-migration',
        title: 'Cloud Migration',
        description: 'Move applications and data to the cloud',
        icon: <Icon icon={Server} />,
      },
      {
        id: 'containerization',
        title: 'Containerization',
        description: 'Package apps with Docker & Kubernetes',
        icon: <Icon icon={Box} />,
      },
      {
        id: 'network-security',
        title: 'Network Security',
        description: 'Protect your infrastructure from threats',
        icon: <Icon icon={Network} />,
      },
    ],
  },
  {
    id: 'data-management',
    icon: <Icon icon={DatabaseZap} />,
    title: 'Data Management',
    description: 'Ensure data quality, governance, and security',
    children: [
      {
        id: 'data-governance',
        title: 'Data Governance',
        description: 'Ensure data quality and compliance',
        icon: <Icon icon={ShieldCheck} />,
      },
      {
        id: 'etl-pipelines',
        title: 'ETL Pipelines',
        description: 'Extract, transform, and load data',
        icon: <Icon icon={GitBranch} />,
      },
      {
        id: 'db-admin',
        title: 'Database Administration',
        description: 'Manage and optimize database performance',
        icon: <Icon icon={Database} />,
      },
    ],
  },
  {
    id: 'consulting',
    icon: <Icon icon={Briefcase} />,
    title: 'Consulting',
    description: 'Get expert strategy and advisory services',
    children: [
      {
        id: 'digital-transformation',
        title: 'Digital Transformation',
        description: 'Advise on technology-driven change',
        icon: <Icon icon={Building} />,
      },
      {
        id: 'process-optimization',
        title: 'Process Optimization',
        description: 'Improve efficiency of business processes',
        icon: <Icon icon={Settings} />,
      },
      {
        id: 'risk-assessment',
        title: 'Risk Assessment',
        description: 'Identify and mitigate technology risks',
        icon: <Icon icon={Shield} />,
      },
    ],
  },
  {
    id: 'training',
    icon: <Icon icon={BookOpen} />,
    title: 'Training',
    description: 'Empower your team with workshops and courses',
    children: [
      {
        id: 'workshops',
        title: 'On-site Workshops',
        description: 'Deliver hands-on training for your teams',
        icon: <Icon icon={Users} />,
      },
      {
        id: 'online-courses',
        title: 'Online Courses',
        description: 'Provide self-paced learning modules',
        icon: <Icon icon={Cloud} />,
      },
      {
        id: 'certifications',
        title: 'Certifications',
        description: 'Offer official certification programs',
        icon: <Icon icon={FileText} />,
      },
    ],
  },
  {
    id: 'support',
    icon: <Icon icon={HelpCircle} />,
    title: 'Support',
    description: 'Access maintenance and technical assistance',
    children: [
      {
        id: 'help-desk',
        title: 'Help Desk',
        description: 'Provide first-line technical assistance',
        icon: <Icon icon={Users} />,
      },
      {
        id: 'monitoring',
        title: 'System Monitoring',
        description: 'Proactively monitor system health 24/7',
        icon: <Icon icon={BarChart3} />,
      },
      {
        id: 'maintenance',
        title: 'Maintenance',
        description: 'Perform regular updates and tune-ups',
        icon: <Icon icon={Settings} />,
      },
    ],
  },
];
