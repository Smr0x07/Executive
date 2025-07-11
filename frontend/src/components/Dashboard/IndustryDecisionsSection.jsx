import React from 'react';
import { Building, Calendar } from 'lucide-react';
import GlassCard from '../UI/GlassCard';

const IndustryDecisionsSection = ({
    departments,
    selectedDepartment,
    onDepartmentChange,
    departmentDecisions,
    title = "Key Decisions Across Org"
}) => {
    const handleScheduleMeeting = (decision, department) => {
        // This would integrate with your calendar system
        alert(`Scheduling follow-up meeting for decision: "${decision.title}" with ${department} team`);
    };

    return (
        <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Building className="w-5 h-5 mr-2" />
                {title}
            </h2>

            {/* Department Navigation */}
            <div className="flex gap-2 mb-4">
                {departments.map(dept => (
                    <button
                        key={dept}
                        onClick={() => onDepartmentChange(dept)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedDepartment === dept
                                ? 'bg-white/20 text-white'
                                : 'bg-white/5 text-white/70 hover:bg-white/10'
                            }`}
                    >
                        {dept.charAt(0).toUpperCase() + dept.slice(1)}
                    </button>
                ))}
            </div>

            <GlassCard className="p-6">
                <div className="space-y-4">
                    {departmentDecisions[selectedDepartment]?.map((decision, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                            <div className="flex-1">
                                <h4 className="font-medium text-white group-hover:text-blue-100 transition-colors">{decision.title}</h4>
                                <p className="text-sm text-white/60 mt-1">{decision.date}</p>
                            </div>

                            <div className="flex items-center space-x-3">
                                <span className={`px-3 py-1 rounded-full text-xs ${decision.impact === 'High' ? 'bg-red-500/20 text-red-300' :
                                        decision.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                                            'bg-green-500/20 text-green-300'
                                    }`}>
                                    {decision.impact} Impact
                                </span>

                                <button
                                    onClick={() => handleScheduleMeeting(decision, selectedDepartment)}
                                    className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 border border-blue-500/30 rounded-lg text-blue-300 text-xs font-medium transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <Calendar className="w-3 h-3" />
                                    <span>Follow Up</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </section>
    );
};

export default IndustryDecisionsSection;
