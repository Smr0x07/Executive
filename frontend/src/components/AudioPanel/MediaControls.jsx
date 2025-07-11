import React from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

const MediaControls = ({ isPlaying, onPlayPause }) => (
    <div className="space-y-3 flex-1 flex flex-col justify-center">
        <div className="flex justify-center space-x-2">
            <button
                onClick={onPlayPause}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
            >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all">
                <Volume2 className="w-4 h-4" />
            </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 rounded-full h-1">
            <div className="bg-white/50 h-1 rounded-full" style={{ width: '30%' }}></div>
        </div>

        <div className="flex justify-between text-xs text-white/70">
            <span>03:24</span>
            <span>12:45</span>
        </div>
    </div>
);

export default MediaControls;