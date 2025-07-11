import React, { useEffect } from 'react';
import GlassCard from '../UI/GlassCard';
import { Play, Pause, Volume2, Mic, Headphones, Loader } from 'lucide-react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

const AudioPanel = ({
    title = "Weekly Summary",
    enableAudioControls = true,
    base64Audio = null, // This will receive the base64 audio from backend
    audioData
}) => {
    const {
        isPlaying,
        currentTime,
        duration,
        progress,
        volume,
        isLoading,
        error,
        togglePlayPause,
        seekToProgress,
        changeVolume,
        formatTime
    } = useAudioPlayer(base64Audio);

    const handleProgressClick = (e) => {
        if (!enableAudioControls) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const progressPercent = (clickX / rect.width) * 100;
        seekToProgress(progressPercent);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        changeVolume(newVolume);
    };

    useEffect(()=>{
        console.log(base64Audio);
    },[])
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

                {/* Main Player Card */}
                <GlassCard className="flex-1 max-h-80 mb-4 overflow-hidden">
                    <div className="p-4 h-full flex flex-col">
                        {/* Video/Podcast Thumbnail */}
                        <div className="w-full h-36 bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-gray-800/50 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            <div className="text-center z-10">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto backdrop-blur-sm">
                                    {isLoading ? (
                                        <Loader className="w-8 h-8 text-white animate-spin" />
                                    ) : error ? (
                                        <div className="text-red-400 text-xs">Error</div>
                                    ) : isPlaying ? (
                                        <Pause className="w-8 h-8 text-white" />
                                    ) : (
                                        <Play className="w-8 h-8 text-white ml-1" />
                                    )}
                                </div>
                                <p className="text-white/90 text-sm font-medium">
                                    {error ? 'Audio Error' : 'Weekly Recap'}
                                </p>
                                {base64Audio && !error && (
                                    <p className="text-white/60 text-xs mt-1">Audio Ready</p>
                                )}
                            </div>
                        </div>

                        {/* Controls */}
                        {enableAudioControls && (
                            <div className="space-y-4">
                                <div className="flex justify-center space-x-3">
                                    <button
                                        onClick={togglePlayPause}
                                        disabled={isLoading || error || !base64Audio}
                                        className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 hover:from-blue-500/40 hover:to-purple-500/40 rounded-full p-3 transition-all backdrop-blur-sm border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <Loader className="w-5 h-5 text-white animate-spin" />
                                        ) : isPlaying ? (
                                            <Pause className="w-5 h-5 text-white" />
                                        ) : (
                                            <Play className="w-5 h-5 text-white" />
                                        )}
                                    </button>

                                    <div className="flex items-center space-x-2">
                                        <button className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all">
                                            <Volume2 className="w-5 h-5 text-white" />
                                        </button>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.1"
                                            value={volume}
                                            onChange={handleVolumeChange}
                                            className="w-16 accent-blue-500"
                                        />
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="space-y-2">
                                    <div
                                        className="w-full bg-white/10 rounded-full h-1.5 cursor-pointer"
                                        onClick={handleProgressClick}
                                    >
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-300"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-white/60">
                                        <span>{formatTime(currentTime)}</span>
                                        <span>{formatTime(duration)}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </GlassCard>

                {/* Quick Stats */}
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
                            <span className="text-xs text-green-400 font-medium">↑ 15%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-white/70">Action Items</span>
                            <span className="text-xs text-yellow-400 font-medium">8 pending</span>
                        </div>
                    </div>
                </GlassCard>

                {/* Quick Access */}
                <div className="grid grid-cols-2 gap-2">
                    <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs text-white/80 transition-all">
                        Transcript
                    </button>
                    <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs text-white/80 transition-all">
                        Download
                    </button>
                </div>

                {/* Debug Info - Remove in production */}
                {process.env.NODE_ENV === 'development' && (
                    <div className="mt-4 p-2 bg-gray-800/50 rounded text-xs text-white/50">
                        Audio: {base64Audio ? 'Loaded' : 'No audio'} |
                        Error: {error || 'None'} |
                        Loading: {isLoading ? 'Yes' : 'No'}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AudioPanel;
