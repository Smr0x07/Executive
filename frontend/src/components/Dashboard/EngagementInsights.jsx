import React, { useState } from 'react';
import { Target, ChevronDown, ChevronUp, Building2 } from 'lucide-react';
import GlassCard from '../UI/GlassCard';

const EngagementInsightCard = ({ insight, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Ensure description is an array for consistent rendering
    const descriptionArray = Array.isArray(insight.description)
        ? insight.description
        : [insight.description];

    return (
        <GlassCard className="overflow-hidden hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-300 group">
            {/* Card Header - Always Visible */}
            <div
                className="flex items-center justify-between p-5 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center space-x-3 flex-1">
                    <div className="p-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-indigo-500/30 transition-all">
                        <Building2 className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-white text-base leading-tight group-hover:text-purple-100 transition-colors text-left">
                            {insight.company || insight.heading}
                        </h4>
                        <p className="text-white/50 text-sm mt-1 text-left">
                            Click to {isExpanded ? 'collapse' : 'expand'} insights
                        </p>
                    </div>
                </div>

                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                    {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-white/70" />
                    ) : (
                        <ChevronDown className="w-4 h-4 text-white/70" />
                    )}
                </div>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="px-5 pb-5 border-t border-white/10 bg-gradient-to-r from-purple-500/5 to-indigo-500/5">
                    <div className="pt-5 space-y-4">
                        {/* Engagement Insights */}
                        <div>
                            <h5 className="text-sm font-semibold text-white/90 mb-3 flex items-center">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                                Engagement Insights
                            </h5>
                            <div className="space-y-2 pl-4">
                                {descriptionArray.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-start space-x-2">
                                        <div className="w-1.5 h-1.5 bg-purple-400/60 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-sm text-white/70 leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Company Badge */}
                        <div className="flex justify-start pl-6">
                            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                                {insight.company || insight.heading}
                            </span>
                        </div>

                        {/* Action Button (View Details only, no follow-up) */}
                        <div className="flex justify-start pt-3 pl-6">
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

const EngagementInsights = ({ insights, title = "Key Engagement Insights" }) => {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center text-left">
                <Target className="w-5 h-5 mr-3" />
                {title}
            </h2>

            {/* Insight Cards */}
            <div className="space-y-4">
                {insights?.map((insight, index) => (
                    <EngagementInsightCard
                        key={index}
                        insight={insight}
                        index={index}
                    />
                ))}

                {(!insights || insights.length === 0) && (
                    <GlassCard className="p-8 text-center">
                        <p className="text-white/60">No engagement insights available.</p>
                    </GlassCard>
                )}
            </div>
        </section>
    );
};

export default EngagementInsights;