import React from 'react';
import GlassCard from './GlassCard';
import { Clock, User } from 'lucide-react';

const ActionItemCard = ({ item, showPriorityBadges = true }) => (
    <GlassCard className="p-5 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-300 group hover:scale-[1.02] relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
        </div>

        <div className="relative z-10">
            <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-white text-base leading-tight pr-4 text-left flex-1 group-hover:text-blue-100 transition-colors">
                    {item.title}
                </h4>
                {showPriorityBadges && (
                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium border flex-shrink-0 transition-all ${item.priority === 'High' ? 'bg-red-500/20 text-red-300 border-red-500/30 group-hover:bg-red-500/30' :
                            item.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30 group-hover:bg-yellow-500/30' :
                                'bg-green-500/20 text-green-300 border-green-500/30 group-hover:bg-green-500/30'
                        }`}>
                        {item.priority} Priority
                    </span>
                )}
            </div>

            <div className="mb-4 text-left">
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">{item.context}</p>
            </div>

            <div className="flex justify-between items-center text-sm">
                <div className="flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Due: {item.dueDate}</span>
                </div>
                <div className="flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                    <User className="w-4 h-4 mr-2" />
                    <span>Assigned: {item.assignedDate}</span>
                </div>
            </div>
        </div>
    </GlassCard>
);

export default ActionItemCard;