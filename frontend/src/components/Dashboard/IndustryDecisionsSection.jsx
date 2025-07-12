import React, { useState } from 'react';
import { Building, Calendar, ChevronDown, ChevronUp, Users } from 'lucide-react';
import GlassCard from '../UI/GlassCard';

const IndustryDecisionCard = ({ decision, department, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleScheduleMeeting = () => {
        const people = Array.isArray(decision.peopleInvolved)
            ? decision.peopleInvolved.join(', ')
            : decision.peopleInvolved;
        alert(`Scheduling follow-up meeting for: "${decision.heading}" with ${department} team. People involved: ${people}`);
    };

    // Ensure description and peopleInvolved are arrays for consistent rendering
    const descriptionArray = Array.isArray(decision.description)
        ? decision.description
        : [decision.description];

    const peopleArray = Array.isArray(decision.peopleInvolved)
        ? decision.peopleInvolved
        : [decision.peopleInvolved];

    return (
        <GlassCard className="overflow-hidden hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-300 group">
            {/* Card Header - Always Visible */}
            <div
                className="flex items-center justify-start p-5 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex-1 justify-start">
                    <h4 className="font-semibold text-white text-base leading-tight group-hover:text-blue-100 transition-colors text-left">
                        {decision.heading}
                    </h4>
                    <p className="text-white/50 text-sm mt-1 text-left">
                        Click to {isExpanded ? 'collapse' : 'expand'} details
                    </p>
                </div>

                <div className="flex items-center space-x-3">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleScheduleMeeting();
                        }}
                        className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 border border-blue-500/30 rounded-lg text-blue-300 text-xs font-medium transition-all opacity-0 group-hover:opacity-100"
                    >
                        <Calendar className="w-3 h-3" />
                        <span>Follow Up</span>
                    </button>

                    <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                        {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-white/70" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-white/70" />
                        )}
                    </div>
                </div>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="px-5 pb-5 border-t border-white/10 bg-gradient-to-r from-white/5 to-transparent">
                    <div className="pt-5 space-y-4">
                        {/* Description Points */}
                        <div>
                            <h5 className="text-sm font-semibold text-white/90 mb-3 flex items-center">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                                Description
                            </h5>
                            <div className="space-y-2 pl-4">
                                {descriptionArray.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-start space-x-2">
                                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-sm text-white/70 leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* People Involved */}
                        <div>
                            <h5 className="text-sm font-semibold text-white/90 mb-3 flex items-center">
                                <Users className="w-4 h-4 mr-2 text-green-400" />
                                People Involved
                            </h5>
                            <div className="flex flex-wrap gap-2 pl-6">
                                {peopleArray.map((person, personIndex) => (
                                    <span
                                        key={personIndex}
                                        className="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg text-green-300 text-xs font-medium"
                                    >
                                        {person}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons in Expanded View */}
                        <div className="flex space-x-3 pt-3 pl-6">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleScheduleMeeting();
                                }}
                                className="flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm font-medium transition-all"
                            >
                                <Calendar className="w-4 h-4" />
                                <span>Schedule Follow-up</span>
                            </button>

                            <button
                                onClick={(e) => e.stopPropagation()}
                                className="px-4 py-2.5 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/20 rounded-lg text-white/80 text-sm font-medium transition-all"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </GlassCard>
    );
};

const IndustryDecisionsSection = ({
    departments,
    selectedDepartment,
    onDepartmentChange,
    departmentDecisions,
    title = "Key Decisions Across Org"
}) => {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center text-left">
                <Building className="w-5 h-5 mr-3" />
                {title}
            </h2>

            {/* Department Navigation */}
            <div className="flex gap-2 mb-6">
                {departments.map(dept => (
                    <button
                        key={dept}
                        onClick={() => onDepartmentChange(dept)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${selectedDepartment === dept
                            ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white border border-blue-500/50'
                            : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                            }`}
                    >
                        {dept.charAt(0).toUpperCase() + dept.slice(1)}
                    </button>
                ))}
            </div>

            {/* Decision Cards */}
            <div className="space-y-4">
                {departmentDecisions[selectedDepartment]?.map((decision, index) => (
                    <IndustryDecisionCard
                        key={index}
                        decision={decision}
                        department={selectedDepartment}
                        index={index}
                    />
                ))}

                {(!departmentDecisions[selectedDepartment] || departmentDecisions[selectedDepartment]?.length === 0) && (
                    <GlassCard className="p-8 text-center">
                        <p className="text-white/60">No decisions found for {selectedDepartment} department.</p>
                    </GlassCard>
                )}
            </div>
        </section>
    );
};

export default IndustryDecisionsSection;