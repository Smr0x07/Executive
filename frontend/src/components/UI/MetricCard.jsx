import React from 'react';
import GlassCard from './GlassCard';

const MetricCard = ({ metric }) => (
    <GlassCard className="p-5 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-300 group relative overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl"></div>

        <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-gradient-to-br from-white/10 to-white/5 rounded-lg group-hover:from-white/20 group-hover:to-white/10 transition-all border border-white/10">
                    <metric.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-green-400 font-semibold bg-gradient-to-r from-green-400/10 to-emerald-400/10 px-3 py-1 rounded-full border border-green-400/20">
                    {metric.change}
                </span>
            </div>
            <div className="text-left">
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">{metric.value}</div>
                <div className="text-sm text-white/70 font-medium group-hover:text-white/90 transition-colors">{metric.title}</div>
            </div>
        </div>
    </GlassCard>
);

export default MetricCard;