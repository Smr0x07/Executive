import React, { useState } from 'react';
import {
    TrendingUp,
    Users,
    Target,
    CheckCircle,
    ArrowRight,
    BarChart3,
    Settings,
    Zap,
    Star,
    Play,
    ChevronRight
} from 'lucide-react';

const LandingPage = ({ onDashboardSelect }) => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const dashboards = [
        {
            id: 'weekly',
            title: 'Weekly Progress Dashboard',
            description: 'Comprehensive weekly overview with team engagement insights, metrics tracking, and cross-functional collaboration data.',
            icon: TrendingUp,
            features: ['Team Engagement Insights', 'Key Metrics Movement', 'Action Items Tracking', 'Audio Briefings'],
            gradient: 'from-blue-500 to-purple-600',
            audience: 'Team Leads & Managers',
            bestFor: 'Complete team oversight'
        },
        {
            id: 'cto',
            title: 'CTO Dashboard',
            description: 'Technical leadership focused dashboard with engineering metrics, system performance, and strategic technical decisions.',
            icon: Settings,
            features: ['System Performance', 'Technical Decisions', 'Development Metrics', 'Infrastructure Insights'],
            gradient: 'from-emerald-500 to-teal-600',
            audience: 'Technical Leadership',
            bestFor: 'Technical strategy & oversight'
        }
    ];

    const features = [
        {
            icon: BarChart3,
            title: 'Real-time Analytics',
            description: 'Get instant insights into your team performance and key metrics'
        },
        {
            icon: Users,
            title: 'Team Collaboration',
            description: 'Track engagement and collaboration across different teams and departments'
        },
        {
            icon: Zap,
            title: 'Smart Notifications',
            description: 'Stay updated with intelligent alerts and action item reminders'
        },
        {
            icon: Target,
            title: 'Goal Tracking',
            description: 'Monitor progress on key initiatives and strategic objectives'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-auto">
            {/* Hero Section */}
            <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-24">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-3 mb-6">
                            <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10">
                                <BarChart3 className="w-8 h-8 text-blue-400" />
                            </div>
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                                ExecutivePulse
                            </h1>
                        </div>

                        <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Transform your team's decision-making with real-time insights, collaborative tracking,
                            and intelligent analytics designed for modern leadership.
                        </p>

                        <div className="flex justify-center space-x-4 mb-12">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                                <Star className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm text-white/80">Trusted by 500+ teams</span>
                            </div>
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                                <Play className="w-4 h-4 text-green-400" />
                                <span className="text-sm text-white/80">Real-time updates</span>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Selection Cards */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-4">Choose Your Dashboard</h2>
                        <p className="text-white/60 text-center mb-12 text-lg">
                            Select the dashboard that best fits your role and responsibilities
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {dashboards.map((dashboard) => (
                                <div
                                    key={dashboard.id}
                                    className={`relative group cursor-pointer transition-all duration-500 ${hoveredCard === dashboard.id ? 'scale-105' : ''
                                        }`}
                                    onMouseEnter={() => setHoveredCard(dashboard.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    onClick={() => onDashboardSelect(dashboard.id)}
                                >
                                    {/* Card Background */}
                                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full overflow-hidden">
                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${dashboard.gradient}`}></div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className={`p-4 bg-gradient-to-r ${dashboard.gradient} bg-opacity-20 rounded-xl`}>
                                                    <dashboard.icon className="w-8 h-8 text-white" />
                                                </div>
                                                <ArrowRight className="w-6 h-6 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                                            </div>

                                            {/* Title & Description */}
                                            <h3 className="text-2xl font-bold text-white mb-3">{dashboard.title}</h3>
                                            <p className="text-white/70 mb-6 leading-relaxed">{dashboard.description}</p>

                                            {/* Audience & Best For */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div>
                                                    <span className="text-xs text-white/50 uppercase tracking-wider">For</span>
                                                    <p className="text-sm text-white/80 font-medium">{dashboard.audience}</p>
                                                </div>
                                                <div>
                                                    <span className="text-xs text-white/50 uppercase tracking-wider">Best For</span>
                                                    <p className="text-sm text-white/80 font-medium">{dashboard.bestFor}</p>
                                                </div>
                                            </div>

                                            {/* Features */}
                                            <div className="space-y-3">
                                                <span className="text-xs text-white/50 uppercase tracking-wider">Key Features</span>
                                                {dashboard.features.map((feature, index) => (
                                                    <div key={index} className="flex items-center space-x-3">
                                                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                        <span className="text-sm text-white/80">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA Button */}
                                            <div className="mt-8">
                                                <button className={`w-full py-3 px-6 bg-gradient-to-r ${dashboard.gradient} hover:shadow-lg hover:shadow-blue-500/25 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105`}>
                                                    <span>Access Dashboard</span>
                                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-4">Why ExecutivePulse?</h2>
                        <p className="text-white/60 text-center mb-12 text-lg">
                            Powerful features designed to streamline your leadership workflow
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
                                    <div className="p-3 bg-white/10 rounded-lg w-fit mb-4 group-hover:bg-white/20 transition-all">
                                        <feature.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div>
                                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                                    <div className="text-white/60 text-sm">Active Teams</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                                    <div className="text-white/60 text-sm">Uptime</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                                    <div className="text-white/60 text-sm">Real-time Sync</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-2">150ms</div>
                                    <div className="text-white/60 text-sm">Response Time</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;