import React, { useState, useRef } from 'react';
import GlassCard from '../UI/GlassCard';
import { Play, Pause, Volume2, Mic, Headphones, ArrowLeft, User } from 'lucide-react';

const AudioPanel = ({
    title = "Weekly Summary",
    audioFileName = "cto_updates.wav", // Just pass filename
    userName = "Prishita Raj", // Add userName prop
    onBackToLanding
}) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        console.log('Audio URL:', audioUrl); // Debug line
        console.log('Audio element:', audioRef.current); // Debug line

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play()
                .then(() => {
                    console.log('Audio started playing'); // Debug line
                    setIsPlaying(true);
                })
                .catch(error => {
                    console.error('Audio play failed:', error); // Debug line
                });
        }
    };

    // Simple audio URL from public folder
    const audioUrl = `/audio/cto_updates.wav`;

    // Get first letter of userName for avatar
    const getInitial = (name) => {
        return name ? name.charAt(0).toUpperCase() : 'U';
    };

    return (
        <div className="w-[20%] border-l border-white/20 flex flex-col bg-gradient-to-b from-gray-900/50 to-black/50">
            <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center space-x-2 p-2 bg-white/10 rounded-full mb-3">
                        <Headphones className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-medium text-white">Audio Briefing</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>

                {/* Simple Player Card */}
                <GlassCard className="flex-1 max-h-80 mb-4">
                    <div className="p-4 h-full flex flex-col justify-center items-center">
                        {/* Play Button */}
                        <button
                            onClick={togglePlay}
                            className="w-20 h-20 bg-gradient-to-r from-blue-500/30 to-purple-500/30 hover:from-blue-500/40 hover:to-purple-500/40 rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-white/20 mb-4"
                        >
                            {isPlaying ?
                                <Pause className="w-8 h-8 text-white" /> :
                                <Play className="w-8 h-8 text-white ml-1" />
                            }
                        </button>

                        <p className="text-white/90 text-sm font-medium mb-4">
                            {isPlaying ? 'Playing...' : 'Weekly Recap'}
                        </p>

                        {/* Hidden Audio Element */}
                        <audio
                            ref={audioRef}
                            onEnded={() => setIsPlaying(false)}
                            preload="metadata"
                        >
                            <source src={audioUrl} type="audio/wav" />  {/* Changed from audio/mpeg */}
                            Your browser does not support audio playback.
                        </audio>
                    </div>
                </GlassCard>

                {/* Stats */}
                <GlassCard className="p-4 mb-4">
                    <h4 className="font-medium text-white mb-3 text-sm flex items-center">
                        <Mic className="w-4 h-4 mr-2 text-blue-400" />
                        This Week's Topics
                    </h4>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-white/70">Key Decisions</span>
                            <span className="text-xs text-blue-400 font-medium">12 items</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-white/70">Metrics Update</span>
                            <span className="text-xs text-green-400 font-medium">↑ 25.1%</span>
                        </div>
                    </div>
                </GlassCard>

                {/* Bottom Section - Back Button and User Profile in one line */}
                <div className="mt-auto pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                        {/* Back Button */}
                        <button
                            onClick={onBackToLanding}
                            className="flex items-center justify-center p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20 group flex-shrink-0"
                        >
                            <ArrowLeft className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                        </button>

                        {/* User Profile Card */}
                        <div className="flex items-center p-2 bg-white/5 rounded-lg border border-white/10 flex-1 min-w-0">
                            {/* Avatar */}
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500/60 to-blue-500/60 rounded-full flex items-center justify-center border border-white/20 mr-3 flex-shrink-0">
                                <span className="text-white text-sm font-semibold">
                                    {getInitial(userName)}
                                </span>
                            </div>

                            {/* User Info - Left Aligned */}
                            <div className="flex-1 min-w-0">
                                <p className="text-white/90 text-sm font-medium truncate text-left">
                                    {userName}
                                </p>
                                <p className="text-white/50 text-xs text-left">
                                    Online
                                </p>
                            </div>

                            {/* Status Indicator */}
                            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioPanel;