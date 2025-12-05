import { NavigationConfig } from '@/types/navigation';

// Icons are now referenced by string name


export const navigationData: NavigationConfig = {
    utilityNav: {
        left: [
            { label: 'English', href: '#', icon: 'Globe', type: 'dropdown' },
            { label: 'Contact Us', href: '#' },
            { label: 'Marketplace', href: '#' },
            { label: 'Support', href: '#', type: 'dropdown' },
            { label: 'My Account', href: '#', type: 'dropdown' },
        ],
        right: [
            { label: 'Sign In', href: '#' },
            { label: 'Create an Account', href: '#', type: 'button' },
        ],
    },
    primaryNav: {
        left: [
            {
                label: 'Products',
                href: '#',
                type: 'mega',
                sections: [
                    {
                        title: 'Featured',
                        items: [
                            { label: 'Compute', href: '#', description: 'Virtual servers, containers, serverless' },
                            { label: 'Storage', href: '#', description: 'Object, block, file storage' },
                            { label: 'Database', href: '#', description: 'Relational, key-value, in-memory' },
                        ]
                    },
                    {
                        title: 'Analytics',
                        items: [
                            { label: 'Athena', href: '#' },
                            { label: 'Redshift', href: '#' },
                            { label: 'OpenSearch', href: '#' },
                            { label: 'Kinesis', href: '#' },
                        ]
                    }
                ]
            },
            { label: 'Solutions', href: '#', type: 'dropdown' },
            { label: 'Pricing', href: '#' },
            { label: 'Documentation', href: '#' },
            { label: 'Learn', href: '#', type: 'dropdown' },
        ],
        right: [
            { label: 'Search', href: '#', icon: 'Search', type: 'icon-only' },
        ]
    },
    secondaryNav: {
        title: 'Analytics on Calculator Cloud',
        items: [
            { label: 'Overview', href: '#' },
            { label: 'What is Analytics?', href: '#', type: 'dropdown' },
            { label: 'Services', href: '#', type: 'dropdown' },
            { label: 'Data Lake', href: '#' },
            { label: 'Partners', href: '#' },
            { label: 'Resources', href: '#' },
        ]
    }
};

// Legacy support for older components
export const developerLinks = [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Pricing', href: '#' },
];

export const productSuites = [
    {
        id: 'featured',
        name: 'Featured',
        description: 'Most popular calculator tools',
        calculators: [
            { id: 'compute-cost', name: 'Compute Cost', description: 'Estimate server costs', href: '#' },
            { id: 'storage-est', name: 'Storage Estimator', description: 'Calculate storage needs', href: '#' },
            { id: 'bandwidth', name: 'Bandwidth', description: 'Data transfer calculator', href: '#' },
        ]
    },
    {
        id: 'analytics',
        name: 'Analytics',
        description: 'Data processing and analysis tools',
        calculators: [
            { id: 'athena-cost', name: 'Athena Cost', description: 'Query cost estimator', href: '#' },
            { id: 'redshift-sizing', name: 'Redshift Sizing', description: 'Cluster sizing calculator', href: '#' },
        ]
    },
    {
        id: 'finance',
        name: 'Finance',
        description: 'Financial planning tools',
        calculators: [
            { id: 'roi', name: 'ROI Calculator', description: 'Return on investment', href: '#' },
            { id: 'loan', name: 'Loan Amortization', description: 'Monthly payments', href: '#' },
        ]
    }
];



export const quickCategories = [
    { id: 'finance', name: 'Finance', href: '#', count: 12 },
    { id: 'math', name: 'Mathematics', href: '#', count: 8 },
    { id: 'science', name: 'Science', href: '#', count: 15 },
    { id: 'health', name: 'Health', href: '#', count: 6 },
];

export const solutionsData = [
    {
        id: 'industry',
        title: 'By Industry',
        items: [
            { id: 'finance', title: 'Financial Services', description: 'Banking, insurance, capital markets', href: '#' },
            { id: 'healthcare', title: 'Healthcare', description: 'Providers, payers, pharma', href: '#' },
        ]
    },
    {
        id: 'tech',
        title: 'By Technology',
        items: [
            { id: 'analytics', title: 'Data & Analytics', description: 'Big data, BI, warehousing', href: '#' },
            { id: 'ml', title: 'Machine Learning', description: 'Models, inference, training', href: '#' },
        ]
    }
];

export const regions = [
    { id: 'us-east-1', name: 'US East (N. Virginia)', code: 'us-east-1', iconFlag: '🇺🇸' },
    { id: 'us-west-2', name: 'US West (Oregon)', code: 'us-west-2', iconFlag: '🇺🇸' },
    { id: 'eu-west-1', name: 'Europe (Ireland)', code: 'eu-west-1', iconFlag: '🇮🇪' },
    { id: 'ap-southeast-1', name: 'Asia Pacific (Singapore)', code: 'ap-southeast-1', iconFlag: '🇸🇬' },
];
