import { TrendingUp, Users, Target, CheckCircle } from 'lucide-react';

export const sampleData = {
    weeks: [
        { id: 1, label: 'Jan 6 - Jan 12, 2025', value: '2025-w2' },
        { id: 2, label: 'Dec 30 - Jan 5, 2025', value: '2025-w1' },
        { id: 3, label: 'Dec 23 - Dec 29, 2024', value: '2024-w52' },
    ],

    keyMetrics: [
        { title: 'Revenue Growth', value: '+12.5%', change: '+2.3%', icon: TrendingUp },
        { title: 'Customer Acquisition', value: '234', change: '+18%', icon: Users },
        { title: 'Team Productivity', value: '94%', change: '+5%', icon: Target },
        { title: 'Project Completion', value: '87%', change: '+12%', icon: CheckCircle },
    ],

    departmentDecisions: {
        sales: [
            { title: 'New pricing strategy implemented', impact: 'High', date: 'Jan 10' },
            { title: 'Territory restructuring approved', impact: 'Medium', date: 'Jan 8' }
        ],
        marketing: [
            { title: 'Q1 campaign budget allocated', impact: 'High', date: 'Jan 11' },
            { title: 'Brand guidelines updated', impact: 'Low', date: 'Jan 9' }
        ],
        tech: [
            { title: 'Infrastructure migration started', impact: 'High', date: 'Jan 12' },
            { title: 'Security audit completed', impact: 'Medium', date: 'Jan 7' }
        ]
    },

    teamDecisions: {
        sales: {
            growth: [
                {
                    title: 'Expand into EMEA market',
                    description: 'Strategic expansion to capture European market opportunities with focus on enterprise clients.',
                    people: ['Sarah Johnson', 'Mike Chen', 'Alex Rodriguez'],
                    meetingDate: 'Jan 8, 2025',
                    priority: 'High',
                    status: 'In Progress'
                },
                {
                    title: 'Launch partner program',
                    description: 'Develop comprehensive partner ecosystem to drive indirect sales growth.',
                    people: ['Sarah Johnson', 'Emily Davis', 'Tom Wilson'],
                    meetingDate: 'Jan 10, 2025',
                    priority: 'Medium',
                    status: 'Planning'
                }
            ],
            sdr: [
                {
                    title: 'Implement new outreach sequence',
                    description: 'Multi-channel outreach strategy incorporating LinkedIn, email, and phone touchpoints.',
                    people: ['Jake Martinez', 'Lisa Park', 'David Kim'],
                    meetingDate: 'Jan 9, 2025',
                    priority: 'High',
                    status: 'Implementation'
                },
                {
                    title: 'Update qualification criteria',
                    description: 'Refine BANT criteria to improve lead quality and conversion rates.',
                    people: ['Jake Martinez', 'Rachel Green'],
                    meetingDate: 'Jan 11, 2025',
                    priority: 'Medium',
                    status: 'Review'
                }
            ],
            ae: [
                {
                    title: 'Territory realignment',
                    description: 'Optimize territory distribution based on market potential and account complexity.',
                    people: ['Amanda Stone', 'Chris Taylor', 'Maria Garcia'],
                    meetingDate: 'Jan 7, 2025',
                    priority: 'High',
                    status: 'Completed'
                },
                {
                    title: 'New enterprise pricing',
                    description: 'Develop tiered pricing structure for enterprise accounts above $100K ARR.',
                    people: ['Amanda Stone', 'Finance Team'],
                    meetingDate: 'Jan 12, 2025',
                    priority: 'High',
                    status: 'In Progress'
                }
            ],
            network: [
                {
                    title: 'Channel partner onboarding',
                    description: 'Streamlined onboarding process for new channel partners with training modules.',
                    people: ['Robert Lee', 'Jessica Wong', 'Partner Success Team'],
                    meetingDate: 'Jan 6, 2025',
                    priority: 'Medium',
                    status: 'Design'
                }
            ],
            partnership: [
                {
                    title: 'Strategic alliance with TechCorp',
                    description: 'Joint go-to-market strategy for enterprise customers in technology sector.',
                    people: ['VP Sales', 'TechCorp Team', 'Legal'],
                    meetingDate: 'Jan 5, 2025',
                    priority: 'High',
                    status: 'Negotiation'
                }
            ]
        },
        tech: {
            product: [
                {
                    title: 'Feature prioritization for Q1',
                    description: 'Prioritize features based on customer feedback and business impact.',
                    people: ['Product Team', 'Engineering', 'Customer Success'],
                    meetingDate: 'Jan 8, 2025',
                    priority: 'High',
                    status: 'In Progress'
                }
            ],
            ml: [
                {
                    title: 'Model performance optimization',
                    description: 'Improve ML model accuracy by 15% through feature engineering and algorithm tuning.',
                    people: ['ML Team', 'Data Engineering', 'Platform Team'],
                    meetingDate: 'Jan 10, 2025',
                    priority: 'High',
                    status: 'Development'
                }
            ],
            frontend: [
                {
                    title: 'UI/UX redesign completion',
                    description: 'Complete redesign of user dashboard with improved user experience.',
                    people: ['Frontend Team', 'Design Team', 'UX Research'],
                    meetingDate: 'Jan 9, 2025',
                    priority: 'Medium',
                    status: 'Testing'
                }
            ],
            backend: [
                {
                    title: 'API rate limiting implementation',
                    description: 'Implement rate limiting to prevent API abuse and ensure system stability.',
                    people: ['Backend Team', 'DevOps', 'Security'],
                    meetingDate: 'Jan 11, 2025',
                    priority: 'High',
                    status: 'Implementation'
                }
            ]
        }
    },

    actionItems: [
        {
            title: 'Complete Q1 budget review',
            context: 'Assigned in Monday leadership meeting by Sarah (CFO)',
            dueDate: 'Jan 15',
            priority: 'High',
            assignedDate: 'Jan 8'
        },
        {
            title: 'Review candidate profiles for Senior Dev role',
            context: 'Follow-up from hiring committee meeting with Mike (CTO)',
            dueDate: 'Jan 14',
            priority: 'Medium',
            assignedDate: 'Jan 10'
        },
        {
            title: 'Prepare metrics presentation for board',
            context: 'Requested by CEO during quarterly planning session',
            dueDate: 'Jan 18',
            priority: 'High',
            assignedDate: 'Jan 6'
        }
    ],

    engagementInsights: {
        collaboration: [
            { label: 'Cross-team meetings', value: '+23%' },
            { label: 'Knowledge sharing sessions', value: '8 sessions' }
        ],
        communication: [
            { label: 'Average response time', value: '2.3h' },
            { label: 'Meeting satisfaction', value: '4.2/5' }
        ]
    },

    keyInitiatives: [
        {
            title: 'Q1 Product Launch',
            progress: 75,
            status: 'On track',
            color: 'from-blue-500 to-purple-500'
        },
        {
            title: 'Market Expansion',
            progress: 60,
            status: 'Ahead of schedule',
            color: 'from-green-500 to-emerald-500'
        }
    ]
};

export const departments = ['sales', 'marketing', 'tech'];
export const teams = ['sales', 'tech'];