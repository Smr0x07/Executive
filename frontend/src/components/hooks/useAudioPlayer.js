import { useState, useRef, useEffect } from 'react';

export const useAudioPlayer = (base64Audio = null) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const audioRef = useRef(null);
    const audioUrlRef = useRef(null);

    // Convert base64 to blob URL and load it into an Audio element
    const createAudioFromBase64 = (base64String) => {
        if (!base64String) return;

        try {
            setIsLoading(true);
            setError(null);

            // Clean up previous audio URL
            if (audioUrlRef.current) {
                URL.revokeObjectURL(audioUrlRef.current);
                audioUrlRef.current = null;
            }

            // Stop and clean previous audio
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = '';
                audioRef.current = null;
            }

            // Remove data URL prefix if present
            const base64Data = base64String.includes(',')
                ? base64String.split(',')[1]
                : base64String;

            const binary = atob(base64Data);
            const bytes = new Uint8Array(binary.length);
            for (let i = 0; i < binary.length; i++) {
                bytes[i] = binary.charCodeAt(i);
            }

            const blob = new Blob([bytes], { type: 'audio/wav' });
            const url = URL.createObjectURL(blob);
            audioUrlRef.current = url;

            const audio = new Audio(url);
            audioRef.current = audio;

            audio.volume = volume;

            audio.addEventListener('loadedmetadata', () => {
                setDuration(audio.duration || 0);
                setIsLoading(false);
            });

            audio.addEventListener('timeupdate', () => {
                setCurrentTime(audio.currentTime);
                setProgress((audio.currentTime / audio.duration) * 100);
            });

            audio.addEventListener('ended', () => {
                setIsPlaying(false);
                setCurrentTime(0);
                setProgress(0);
            });

            audio.addEventListener('error', (e) => {
                console.error('Audio error:', e);
                setError('Failed to load audio');
                setIsLoading(false);
            });

        } catch (err) {
            console.error('Error decoding base64 audio:', err);
            setError('Failed to process audio data');
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (base64Audio) {
            createAudioFromBase64(base64Audio);
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
            if (audioUrlRef.current) {
                URL.revokeObjectURL(audioUrlRef.current);
                audioUrlRef.current = null;
            }
        };
    }, [base64Audio]);

    const play = () => {
        if (!audioRef.current || isLoading || error) return;

        audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch((err) => {
                console.error('Play error:', err);
                setError('User interaction required to play');
            });
    };

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const togglePlayPause = () => {
        if (isPlaying) pause();
        else play();
    };

    const seek = (time) => {
        if (audioRef.current && duration) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
            setProgress((time / duration) * 100);
        }
    };

    const seekToProgress = (percent) => {
        if (audioRef.current && duration) {
            const time = (percent / 100) * duration;
            seek(time);
        }
    };

    const changeVolume = (newVol) => {
        const clamped = Math.max(0, Math.min(1, newVol));
        setVolume(clamped);
        if (audioRef.current) {
            audioRef.current.volume = clamped;
        }
    };

    const formatTime = (time) => {
        if (!time || !isFinite(time)) return '0:00';
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    return {
        isPlaying,
        currentTime,
        duration,
        progress,
        volume,
        isLoading,
        error,

        togglePlayPause,
        play,
        pause,
        seek,
        seekToProgress,
        changeVolume,
        formatTime
    };
};
