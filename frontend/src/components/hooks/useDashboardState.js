import { useState } from 'react';
import { sampleData } from '../data/sampleData';

export const useDashboardState = () => {
    const [selectedWeek, setSelectedWeek] = useState(sampleData.weeks[0]);
    const [selectedDepartment, setSelectedDepartment] = useState('sales');
    const [selectedTeam, setSelectedTeam] = useState('sales');
    const [selectedSubTeam, setSelectedSubTeam] = useState('growth');
    const [isPlaying, setIsPlaying] = useState(false);

    const handleWeekChange = (week) => {
        setSelectedWeek(week);
    };

    const handleDepartmentChange = (department) => {
        setSelectedDepartment(department);
    };

    const handleTeamChange = (team) => {
        setSelectedTeam(team);
        setSelectedSubTeam(Object.keys(sampleData.teamDecisions[team])[0]);
    };

    const handleSubTeamChange = (subTeam) => {
        setSelectedSubTeam(subTeam);
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return {
        selectedWeek,
        selectedDepartment,
        selectedTeam,
        selectedSubTeam,
        isPlaying,
        handleWeekChange,
        handleDepartmentChange,
        handleTeamChange,
        handleSubTeamChange,
        handlePlayPause
    };
};