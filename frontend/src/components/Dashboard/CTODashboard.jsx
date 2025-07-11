import React, { useState } from 'react';
import { sampleData, departments } from '../../data/sampleData';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Header from './Header';
import MetricsSection from './MetricsSection';
import IndustryDecisionsSection from './IndustryDecisionsSection';
import TeamDecisionsSection from './TeamDecisionsSection';
// NOTE: EngagementInsights is NOT imported - this removes the section
import KeyInitiatives from './KeyInitiatives';
import ActionItems from './ActionItems';
import AudioPanel from '../AudioPanel/AudioPanel';

const CTODashboard = ({ onBackToLanding, base64Audio }) => {
    // Same state management as original
    const [selectedWeek, setSelectedWeek] = useState(sampleData.weeks[0]);
    const [selectedDepartment, setSelectedDepartment] = useState('tech'); // Default to tech for CTO
    const [selectedSubTeam, setSelectedSubTeam] = useState('product'); // Default to product team
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

    // CTO-specific data - you can customize this
    const ctoData = {
        ...sampleData,
        // CTO-focused metrics
        keyMetrics: [
            { title: 'System Uptime', value: '99.9%', change: '+0.1%', icon: sampleData.keyMetrics[0].icon },
            { title: 'Development Velocity', value: '127%', change: '+18%', icon: sampleData.keyMetrics[1].icon },
            { title: 'Code Quality Score', value: '94%', change: '+5%', icon: sampleData.keyMetrics[2].icon },
            { title: 'Tech Debt Reduction', value: '23%', change: '+12%', icon: sampleData.keyMetrics[3].icon },
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
                    {/* Top Bar with Back Button */}
                    <div className="flex items-center justify-between p-6 pb-0">
                        <button
                            onClick={onBackToLanding}
                            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-sm font-medium transition-all duration-300 hover:scale-105 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Home</span>
                        </button>

                        <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full">
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300 font-medium">CTO View</span>
                        </div>
                    </div>

                    <div className="p-6 pt-4">
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
                            departments={departments}
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
                    isPlaying={isPlaying}
                    onPlayPause={handlePlayPause}
                    title="CTO Weekly Brief"
                    enableAudioControls={true}
                    base64Audio={base64Audio}
                />
            </div>
        </div>
    );
};

export default CTODashboard;