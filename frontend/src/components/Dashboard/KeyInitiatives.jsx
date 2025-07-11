import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import GlassCard from '../UI/GlassCard';

const KeyInitiatives = ({ initiatives, title = "Progress on Key Initiatives" }) => {
    const handleScheduleMeeting = (initiative) => {
        // This would integrate with your calendar system
        alert(`Scheduling initiative review meeting for: ${initiative.title}`);
    };

    return (
        <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {title}
            </h2>
            <div className="grid grid-cols-2 gap-4">
                {initiatives.map((initiative, index) => (
                    <GlassCard key={index} className="p-5 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-300 group relative overflow-hidden">
                        {/* Subtle gradient overlay on hover */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${initiative.color} rounded-xl`}></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="font-medium text-white text-base group-hover:text-blue-100 transition-colors">{initiative.title}</h4>
                                <button
                                    onClick={() => handleScheduleMeeting(initiative)}
                                    className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 border border-blue-500/30 rounded-lg text-blue-300 text-xs font-medium transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <Calendar className="w-3 h-3" />
                                    <span>Review</span>
                                </button>
                            </div>

                            <div className="w-full bg-white/10 rounded-full h-2 mb-3">
                                <div
                                    className={`bg-gradient-to-r ${initiative.color} h-2 rounded-full transition-all duration-500 group-hover:h-2.5`}
                                    style={{ width: `${initiative.progress}%` }}
                                ></div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                                    {initiative.progress}% Complete • {initiative.status}
                                </div>
                                <div className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                                    Est. completion: Q1 2025
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
};

export default KeyInitiatives;
