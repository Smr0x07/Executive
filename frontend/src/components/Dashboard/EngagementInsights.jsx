import React from 'react';
import { Target, Users, MessageCircle } from 'lucide-react';
import GlassCard from '../UI/GlassCard';

const EngagementInsights = ({ insights }) => (
    <section className="mb-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center text-left">
            <Target className="w-5 h-5 mr-3" />
            Key Engagement Insights
        </h2>
        <GlassCard className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-semibold text-white mb-4 flex items-center text-left">
                        <Users className="w-4 h-4 mr-2 text-blue-400" />
                        Team Collaboration
                    </h4>
                    <div className="space-y-3">
                        {insights.collaboration.map((item, index) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                <span className="text-white/70 text-sm">{item.label}</span>
                                <span className="text-white font-medium">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4 flex items-center text-left">
                        <MessageCircle className="w-4 h-4 mr-2 text-purple-400" />
                        Communication Quality
                    </h4>
                    <div className="space-y-3">
                        {insights.communication.map((item, index) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                <span className="text-white/70 text-sm">{item.label}</span>
                                <span className="text-white font-medium">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </GlassCard>
    </section>
);

export default EngagementInsights;