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
      { id: 'governance', title: 'Governance' },
      { id: 'planning', title: 'Strategic Planning' },
    ],
  },
  {
    id: 'advanced-analytics',
    icon: <Icon icon={Database} />,
    title: 'Advanced Analytics',
    description: 'Machine learning and predictive modeling',
    children: [
      {
        id: 'ml-models',
        title: 'ML Models',
        children: [
          {
            id: 'deep-learning',
            title: 'Deep Learning',
            children: [
              { id: 'cnn', title: 'Convolutional Networks' },
              { id: 'rnn', title: 'Recurrent Networks' },
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
    description: 'BI platform implementation',
    children: [
      { id: 'dashboards', title: 'Dashboards' },
      {
        id: 'reporting',
        title: 'Reporting',
        children: [
          { id: 'quarterly', title: 'Quarterly Reports' },
          {
            id: 'annual',
            title: 'Annual Reports',
            children: [
              { id: 'financial', title: 'Financial Analysis' },
              { id: 'operational', title: 'Operational Performance' },
            ],
          },
          { id: 'aws', title: 'AWS' },
          { id: 'azure', title: 'Azure' },
          { id: 'gcp', title: 'Google Cloud' },
          { id: 'nlp', title: 'Natural Language Processing' },
          { id: 'vision', title: 'Computer Vision' },
          { id: 'ticketing', title: 'Ticketing System' },
          { id: 'sla', title: 'SLA Management' },
          { id: 'onsite', title: 'Onsite Training' },
          { id: 'online', title: 'Online Training' },
          {
            id: 'customer-feedback',
            title: 'Customer Feedback',
            icon: <Icon icon={Users} />,
          },
          {
            id: 'market-analysis',
            title: 'Market Analysis',
            icon: <Icon icon={BarChart3} />,
          },
          {
            id: 'competitive-intel',
            title: 'Competitive Intelligence',
            icon: <Icon icon={Search} />,
          },
          {
            id: 'sales-performance',
            title: 'Sales Performance',
            icon: <Icon icon={BarChart3} />,
          },
          {
            id: 'inventory-reports',
            title: 'Inventory Reports',
            icon: <Icon icon={Database} />,
          },
          {
            id: 'risk-assessment',
            title: 'Risk Assessment',
            icon: <Icon icon={Shield} />,
          },
          {
            id: 'customer-retention',
            title: 'Customer Retention',
            icon: <Icon icon={Users} />,
          },
          {
            id: 'project-status',
            title: 'Project Status',
            icon: <Icon icon={Code} />,
          },
          {
            id: 'budget-tracking',
            title: 'Budget Tracking',
            icon: <Icon icon={Database} />,
          },
          {
            id: 'team-performance',
            title: 'Team Performance',
            icon: <Icon icon={Settings} />,
          },
        ],
      },
    ],
  },
  {
    id: 'development',
    icon: <Icon icon={Code} />,
    title: 'Development',
    description: 'APIs and Integrations',
    children: [
      { id: 'rest-apis', title: 'REST APIs' },
      { id: 'graphql', title: 'GraphQL' },
    ],
  },
  {
    id: 'cloud-infrastructure',
    icon: <Icon icon={Database} />,
    title: 'Cloud & Infrastructure',
    description: 'Cloud migration and infrastructure management',
    children: [
      { id: 'aws', title: 'AWS' },
      { id: 'azure', title: 'Azure' },
      { id: 'gcp', title: 'Google Cloud' },
    ],
  },
  {
    id: 'data-management',
    icon: <Icon icon={FileText} />,
    title: 'Data Management',
    description: 'Data governance and quality',
    children: [
      { id: 'data-lake', title: 'Data Lakes' },
      { id: 'warehousing', title: 'Data Warehousing' },
    ],
  },
  {
    id: 'security',
    icon: <Icon icon={Settings} />,
    title: 'Security',
    description: 'Identity and access management',
    children: [
      { id: 'encryption', title: 'Encryption' },
      { id: 'compliance', title: 'Compliance' },
    ],
  },
  {
    id: 'ai-services',
    icon: <Icon icon={Code} />,
    title: 'AI Services',
    description: 'Intelligent automation and chatbots',
    children: [
      { id: 'nlp', title: 'Natural Language Processing' },
      { id: 'vision', title: 'Computer Vision' },
    ],
  },
  {
    id: 'iot',
    icon: <Icon icon={Database} />,
    title: 'Internet of Things',
    description: 'Connected devices and edge computing',
    children: [
      { id: 'smart-home', title: 'Smart Home' },
      { id: 'industrial', title: 'Industrial IoT' },
    ],
  },
  {
    id: 'consulting',
    icon: <Icon icon={Layers} />,
    title: 'Consulting',
    description: 'Strategy and advisory services',
    children: [
      { id: 'technology', title: 'Technology Consulting' },
      { id: 'business', title: 'Business Consulting' },
    ],
  },
  {
    id: 'training',
    icon: <Icon icon={Cloud} />,
    title: 'Training',
    description: 'Workshops and certifications',
    children: [
      { id: 'onsite', title: 'Onsite Training' },
      { id: 'online', title: 'Online Training' },
    ],
  },
  {
    id: 'support',
    icon: <Icon icon={Settings} />,
    title: 'Support',
    description: 'Maintenance and technical support',
    children: [
      { id: 'ticketing', title: 'Ticketing System' },
      { id: 'sla', title: 'SLA Management' },
    ],
  },
];
