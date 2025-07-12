import React from 'react';
import WeekSelector from '../UI/WeekSelector';
import { TrendingUp } from 'lucide-react';

const Header = ({ weeks, selectedWeek, onWeekChange, titles = {}, enableWeekSelection = true }) => (
    <div className="flex justify-between items-start mb-8">
        <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm border border-white/10">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {titles?.main || "Weekly Progress Report"}
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1"></div>
                </div>
            </div>
        </div>

        {enableWeekSelection && weeks && selectedWeek && (
            <div className="flex-shrink-0 ml-6">
                <WeekSelector
                    weeks={weeks}
                    selectedWeek={selectedWeek}
                    onWeekChange={onWeekChange}
                />
            </div>
        )}
    </div>
);

export default Header;