import { TrendingUp, Users, Target, CheckCircle } from 'lucide-react';

export const sampleData = {
    weeks: [
        { id: 1, label: 'Jul 7 - Jul 12, 2025', value: '2025-w2' },
        { id: 2, label: 'June 30 - Jul 5, 2025', value: '2025-w1' },
        { id: 3, label: 'June 23 - June 29, 2024', value: '2024-w52' },
    ],

    keyMetrics: [
        { title: 'Revenue Closed', value: '$ 19.5K', change: '+2.3%', icon: TrendingUp },
        { title: 'New Pipeline Amount', value: '355k', change: '-7.3%', icon: Users },
        { title: 'Open Deal Amount', value: '$3.6M', change: '+0.2%', icon: Target },
        { title: 'Client Meetings', value: '16', change: '+1.3%', icon: CheckCircle },
    ],

    departmentDecisions: {
        sales: [
            {
                heading: 'Contract closed with Mandel Family',
                description: ['Just closed contract with Mandel Family, with the usecase revolving chatbot'],
                peopleInvolved: ['Abhishek Asawa', 'Brian', 'Parambir Singh']
            },
            {
                heading: 'Kiwi and Cult are in proposal stage',
                description: ['The duo is very likely to close a deal in the upcoming week'],
                peopleInvolved: ['Abhishek Asawa', 'Brian', 'Parambir Singh']
            },
            {
                heading: 'Upcoming meeting with Large Enterprises',
                description: ['Sales pitching in progress with large names like Swiggy, HDFC and Shaadi.com'],
                peopleInvolved: ['Abhishek Asawa', 'Brian', 'Parambir Singh']
            }
        ],
        marketing: [
            {
                heading: 'Meet NurixAI at SaleCon 2025 in USA',
                description: ['Get ready to meet the NurixAI team at the bay area for SaleCon \'25, US\'s largest sales fair for sales person. Hope to see you there.'],
                peopleInvolved: ['Anantika', 'Sakshi', 'Reshma']
            },
            {
                heading: 'Home Services page on our website is finally live!',
                description: ['The Home Service page is finally live. This will help us target companies in Home service industry'],
                peopleInvolved: ['Anantika', 'Sakshi', 'Reshma']
            },
            {
                heading: 'We have received 25 organic leads',
                description: ['We are in talks with 25 people, a 16% increase from the last week.'],
                peopleInvolved: ['Anantika', 'Sakshi', 'Reshma']
            }
        ],
        HR: [
            {
                heading: 'Active hiring for Senior ML roles',
                description: ['Recently, as hiring intensity increases, NurixAI rolled out referral program for experienced product managers and other senior roles'],
                peopleInvolved: ['Aditya Pawsey', 'Khushi Rathi', 'Nikita Tandon', 'Tanika Devi']
            },
            {
                heading: 'Welcome our new Joinees',
                description: ['Please welcome our new interns that have just recently joined us.'],
                peopleInvolved: ['Aditya Pawsey', 'Khushi Rathi', 'Nikita Tandon', 'Tanika Devi']
            },
            {
                heading: 'Rolling our new leave policy',
                description: ['Recently new leave policy has been rolled out. This has been a huge relief after longer commute hours and air pollution'],
                peopleInvolved: ['Aditya Pawsey', 'Khushi Rathi', 'Nikita Tandon', 'Tanika Devi']
            }
        ],
        delivery: [
            {
                heading: 'DiscoverMarket successfully deployed',
                description: ['Discover Market has been successfully deployed on the client\'s side. They are very happy with their experience working with us'],
                peopleInvolved: ['Tiasha Mazumdar', 'Samarjeet Mohite', 'Hardaat Singh Baath']
            },
            {
                heading: 'PartnerPlex solutioning in full swing',
                description: ['The new client project PartnerPlex is going on in full swing, with discussions on what are the future scope of collaborations between the two companies.'],
                peopleInvolved: ['Vidit Beinjaine', 'Abhilash Jain', 'Anuj Modi']
            }
        ]
    },
    teamDecisions: {
        sales: {
            growth: [
                {
                    title: 'Expand into EMEA market',
                    description: 'Strategic expansion to capture European market opportunities with focus on enterprise clients.',
                    people: ['Chaitanya', 'Mike', 'Prashant'],
                    meetingDate: 'Jul 7, 2025',
                    priority: 'High',
                    status: 'In Progress'
                },
                {
                    title: 'Launch partner program',
                    description: 'Develop comprehensive partner ecosystem to drive indirect sales growth.',
                    people: ['Parambir', 'Yashvi', 'Chaitanya'],
                    meetingDate: 'Jul 9, 2025',
                    priority: 'Medium',
                    status: 'Planning'
                }
            ],
            sdr: [
                {
                    title: 'Implement new outreach sequence',
                    description: 'Multi-channel outreach strategy incorporating LinkedIn, email, and phone touchpoints.',
                    people: ['Kush'],
                    meetingDate: 'Jul 9, 2025',
                    priority: 'High',
                    status: 'Implementation'
                },
                {
                    title: 'Update qualification criteria',
                    description: 'Refine BANT criteria to improve lead quality and conversion rates.',
                    people: ['Kush', 'Abhinav'],
                    meetingDate: 'Jul 7, 2025',
                    priority: 'Medium',
                    status: 'Review'
                }
            ],
            ae: [
                {
                    title: 'Territory realignment',
                    description: 'Optimize territory distribution based on market potential and account complexity.',
                    people: ['Mike', 'Scott', 'Bryan'],
                    meetingDate: 'Jul 10, 2025',
                    priority: 'High',
                    status: 'Completed'
                },
                {
                    title: 'New enterprise pricing',
                    description: 'Develop tiered pricing structure for enterprise accounts above $100K ARR.',
                    people: ['Liton', 'Prashant'],
                    meetingDate: 'Jul 9, 2025',
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
            title: 'Complete Q2 pipeline review',
            context: 'Assigned in Monday leadership meeting by Sarah',
            dueDate: 'Jul 15',
            priority: 'High',
            assignedDate: 'Jul 8'
        },
        {
            title: 'Review candidate profiles for AE role',
            context: 'Follow-up from hiring committee meeting with Mike',
            dueDate: 'Jul 10',
            priority: 'Medium',
            assignedDate: 'Jul 10'
        },
        {
            title: 'Prepare pricing metric presentation',
            context: 'Requested by CEO during quarterly planning session',
            dueDate: 'Jul 10',
            priority: 'Medium',
            assignedDate: 'Jul 7'
        }
    ],

    engagementInsights: [
        {
            company: "CultFit Growth Team",
            description: [
                "Increased collaboration tools adoption by 45%",
                "Cross-functional team productivity improved significantly",
                "Monthly engagement meetings established",
                "Knowledge sharing platform implemented"
            ]
        },
        {
            company: "Churchill",
            description: [
                "Strategic partnership discussions initiated",
                "Technical integration planning completed",
                "Joint innovation workshops conducted",
                "Quarterly business reviews scheduled"
            ]
        },
        {
            company: "Tucows",
            description: [
                "Cloud infrastructure optimization project launched",
                "Performance metrics tracking enhanced",
                "Cost reduction strategies implemented",
                "Security compliance protocols updated"
            ]
        },
        {
            company: "Liquide",
            description: [
                "CRM integration project completed successfully",
                "Sales team training program finalized",
                "Custom workflow automation deployed",
                "Data synchronization processes optimized"
            ]
        }
    ],

    keyInitiatives: [
        {
            title: 'Fitness Campaign PartnerShip',
            progress: 75,
            status: 'On track',
            color: 'from-blue-500 to-purple-500'
        },
        {
            title: 'Top 20 Account Plans',
            progress: 60,
            status: 'Ahead of schedule',
            color: 'from-green-500 to-emerald-500'
        }
    ]
};

export const departments = ['HR', 'tech', 'marketing', 'delivery',];
export const teams = ['sales', 'tech'];