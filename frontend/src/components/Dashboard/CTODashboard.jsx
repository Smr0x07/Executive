import React, { useState } from 'react';
import { sampleData, departments } from '../../data/sampleData';
import { Sparkles } from 'lucide-react';
import Header from './Header';
import MetricsSection from './MetricsSection';
import IndustryDecisionsSection from './IndustryDecisionsSection';
import TeamDecisionsSection from './TeamDecisionsSection';
// NOTE: EngagementInsights is NOT imported - this removes the section
import KeyInitiatives from './KeyInitiatives';
import ActionItems from './ActionItems';
import AudioPanel from '../AudioPanel/AudioPanel';

const CTODashboard = ({ onBackToLanding }) => {

    const [selectedWeek, setSelectedWeek] = useState(sampleData.weeks[0]);
    const [selectedDepartment, setSelectedDepartment] = useState('HR');
    const [selectedSubTeam, setSelectedSubTeam] = useState('product');
    const [isPlaying, setIsPlaying] = useState(false);

    const handleWeekChange = (week) => {
        setSelectedWeek(week);
    };

    const handleDepartmentChange = (department) => {
        setSelectedDepartment(department);
    };

    const handleSubTeamChange = (subTeam) => {
        setSelectedSubTeam(subTeam);
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const ctoData = {

        weeks: [
            { id: 1, label: 'Jul 7 - Jul 12, 2025', value: '2025-w2' },
            { id: 2, label: 'June 30 - Jul 5, 2025', value: '2025-w1' },
            { id: 3, label: 'June 23 - June 29, 2024', value: '2024-w52' },
        ],
        keyMetrics: [
            { title: 'System Uptime', value: '99.21%', change: '+0.1%', icon: sampleData.keyMetrics[0].icon },
            { title: 'Active Agents', value: '109', change: '+18%', icon: sampleData.keyMetrics[1].icon },
            { title: 'Tools Integrated', value: '21', change: '+5%', icon: sampleData.keyMetrics[2].icon },
            { title: 'Sprint Completion', value: '41%', change: '+2%', icon: sampleData.keyMetrics[3].icon },
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
                    peopleInvolved: ['Vidit ', 'Abhilash Jain', 'Anuj Modi']
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
                        title: 'Feature prioritization for Q3',
                        description: 'Prioritize features based on customer feedback and business impact.',
                        people: ['Anuj Jain', 'Pulkit Tyagi', 'Priyal Jain'],
                        meetingDate: 'Jul 10, 2025',
                        priority: 'High',
                        status: 'In Progress'
                    }
                ],
                ml: [
                    {
                        title: 'Reduce DM Latency',
                        description: 'Improve DM latency by 50 percent',
                        people: ['Prishita Raj', 'Hardaat Singh'],
                        meetingDate: 'Jul 7, 2025',
                        priority: 'High',
                        status: 'Development'
                    }
                ],
                frontend: [
                    {
                        title: 'UI/UX redesign completion',
                        description: 'Complete redesign of user dashboard with improved user experience.',
                        people: ['Palak Periwal', 'Tejas Hegde', 'Vishal Pratap Singh'],
                        meetingDate: 'Jul 9, 2025',
                        priority: 'Medium',
                        status: 'Testing'
                    }
                ],
                backend: [
                    {
                        title: 'Channel Integrations',
                        description: 'Implement rate limiting to prevent API abuse and ensure system stability.',
                        people: ['Yuva Prabhu', 'Prishita Raj', 'Khushi Gour'],
                        meetingDate: 'Jan 11, 2025',
                        priority: 'High',
                        status: 'Implementation'
                    }
                ]
            }
        },

        actionItems: [
            {
                title: 'Launch NuPulse with 4 standard dashboards',
                context: 'Assigned in Monday leadership meeting by Sarah',
                dueDate: 'Jul 15',
                priority: 'High',
                assignedDate: 'Jul 8'
            },
            {
                title: 'Enhance Voice and Text Agent Capabilities',
                context: 'Follow-up from hiring committee meeting with Mike',
                dueDate: 'Jul 10',
                priority: 'Medium',
                assignedDate: 'Jul 10'
            },
            {
                title: 'Release NuLearn v1 with suggestions report on knowledge and actions to improve agent KPI',
                context: 'Requested by CEO during quarterly planning session',
                dueDate: 'Jul 10',
                priority: 'Medium',
                assignedDate: 'Jul 7'
            }
        ],

        keyInitiatives: [
            {
                title: 'Added support for Gemini 2.5 flash live and language options',
                progress: 75,
                status: 'On track',
                color: 'from-blue-500 to-purple-500'
            },
            {
                title: 'DM in A/B Testing',
                progress: 40,
                status: 'Ahead of schedule',
                color: 'from-green-500 to-emerald-500'
            }
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
            </div>

            <div className="flex h-screen relative z-10">
                {/* Main Content Panel - 80% */}
                <div className="w-[80%] overflow-y-auto">
                    <div className="p-6 pt-8">
                        <Header
                            weeks={ctoData.weeks}
                            selectedWeek={selectedWeek}
                            onWeekChange={handleWeekChange}
                            titles={{
                                main: "Weekly Progress Report",
                                subtitle: "Comprehensive overview of team achievements and metrics"
                            }}
                            enableWeekSelection={true}
                        />

                        <MetricsSection
                            metrics={ctoData.keyMetrics}
                            title="Key Technical Metrics"
                        />

                        <IndustryDecisionsSection
                            departments={['HR', 'sales', 'marketing', 'delivery']}
                            selectedDepartment={selectedDepartment}
                            onDepartmentChange={handleDepartmentChange}
                            departmentDecisions={ctoData.departmentDecisions}
                            title="Key Decisions Across Org"
                        />

                        <TeamDecisionsSection
                            selectedSubTeam={selectedSubTeam}
                            onSubTeamChange={handleSubTeamChange}
                            teamDecisions={ctoData.teamDecisions}
                            title="Key Technical Decisions Made Within Team"
                            enableMeetingScheduling={true}
                            showPriorityBadges={true}
                            availableSubTeams={[
                                { value: 'product', label: 'Product Team', team: 'tech' },
                                { value: 'ml', label: 'ML Team', team: 'tech' },
                                { value: 'frontend', label: 'Frontend Team', team: 'tech' },
                                { value: 'backend', label: 'Backend Team', team: 'tech' }
                            ]}
                        />

                        {/* 
              NOTE: EngagementInsights section is completely removed for CTO dashboard 
              This is the only difference from the original dashboard
            */}

                        <KeyInitiatives
                            initiatives={ctoData.keyInitiatives}
                            title="Progress on Technical Initiatives"
                        />

                        <ActionItems
                            actionItems={ctoData.actionItems}
                            title="CTO Action Items"
                            showPriorityBadges={true}
                        />
                    </div>
                </div>

                {/* Audio Panel - 20% */}
                <AudioPanel
                    onBackToLanding={onBackToLanding}
                    title="Weekly Summary"
                    audioFileName="weekly-summary.mp3"  // Just pass filename
                />
            </div>
        </div>
    );
};

export default CTODashboard;