import React, { useState } from 'react';
import { sampleData, departments } from '../../data/sampleData';
import Header from './Header';
import MetricsSection from './MetricsSection';
import IndustryDecisionsSection from './IndustryDecisionsSection';
import TeamDecisionsSection from './TeamDecisionsSection';
import EngagementInsights from './EngagementInsights';
import KeyInitiatives from './KeyInitiatives';
import ActionItems from './ActionItems';
import AudioPanel from '../AudioPanel/AudioPanel';

const WeeklyProgressDashboard = ({ onBackToLanding, base64Audio }) => {
    // Simplified state management
    const [selectedWeek, setSelectedWeek] = useState(sampleData.weeks[0]);
    const [selectedDepartment, setSelectedDepartment] = useState('sales');
    const [selectedSubTeam, setSelectedSubTeam] = useState('growth');
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            <div className="flex h-screen">
                {/* Main Content Panel - 80% */}
                <div className="w-[80%] overflow-y-auto">
                    <div className="p-6 lg:p-8">
                        <Header
                            weeks={sampleData.weeks}
                            selectedWeek={selectedWeek}
                            onWeekChange={handleWeekChange}
                        />

                        <MetricsSection metrics={sampleData.keyMetrics} />

                        <IndustryDecisionsSection
                            departments={departments}
                            selectedDepartment={selectedDepartment}
                            onDepartmentChange={handleDepartmentChange}
                            departmentDecisions={sampleData.departmentDecisions}
                        />

                        <TeamDecisionsSection
                            selectedSubTeam={selectedSubTeam}
                            onSubTeamChange={handleSubTeamChange}
                            teamDecisions={sampleData.teamDecisions}
                        />

                        <EngagementInsights insights={sampleData.engagementInsights} />

                        <KeyInitiatives initiatives={sampleData.keyInitiatives} />

                        <ActionItems actionItems={sampleData.actionItems} />
                    </div>
                </div>

                {/* Audio Panel - 20% */}
                <AudioPanel
                    isPlaying={isPlaying}
                    onPlayPause={handlePlayPause}
                    base64Audio={base64Audio}
                />
            </div>
        </div>
    );
};

export default WeeklyProgressDashboard;