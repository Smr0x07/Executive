import React from 'react';
import { Play } from 'lucide-react';

const VideoPlayer = () => (
    <div className="w-full h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-3 flex items-center justify-center flex-shrink-0">
        <div className="text-center">
            <Play className="w-8 h-8 text-white/50 mx-auto mb-1" />
            <p className="text-white/70 text-xs">Weekly Podcast</p>
        </div>
    </div>
);

export default VideoPlayer;