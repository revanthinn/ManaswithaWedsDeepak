import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX, Music, Sparkles, Youtube, Radio } from 'lucide-react';

interface AudioPlayerProps {
  autoPlayRequest?: boolean;
}

// Global declaration for YouTube IFrame API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YOUTUBE_VIDEO_ID = '1gnI-j101WA';

export const TraditionalAudioPlayer: React.FC<AudioPlayerProps> = ({ autoPlayRequest = false }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.75);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeSource, setActiveSource] = useState<'youtube' | 'carnatic_synth'>('youtube');
  const [isYtReady, setIsYtReady] = useState<boolean>(false);

  // References
  const ytPlayerRef = useRef<any>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const isPlayingRef = useRef<boolean>(false);
  const timerRef = useRef<number | null>(null);

  // -------------------------------------------------------------
  // 1. Carnatic Web Audio Synthesizer (Fallback & Ambient drone)
  // -------------------------------------------------------------
  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return audioCtxRef.current;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioContextClass();
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(volume * 0.35, ctx.currentTime);
    masterGain.connect(ctx.destination);
    audioCtxRef.current = ctx;
    masterGainRef.current = masterGain;
    return ctx;
  }, [volume]);

  const playMelodicNote = useCallback((freq: number, duration: number) => {
    if (!audioCtxRef.current || !masterGainRef.current || !isPlayingRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);

    const now = ctx.currentTime;
    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.exponentialRampToValueAtTime(0.12, now + 0.1);
    noteGain.gain.exponentialRampToValueAtTime(0.06, now + duration * 0.5);
    noteGain.gain.exponentialRampToValueAtTime(0.00001, now + duration);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(masterGainRef.current);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  }, []);

  const playTempleBell = useCallback(() => {
    if (!audioCtxRef.current || !masterGainRef.current || !isPlayingRef.current) return;
    const ctx = audioCtxRef.current;

    const bellFreqs = [587.33, 1174.66, 1760];
    bellFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const now = ctx.currentTime;
      const decay = 2.5 - idx * 0.4;
      gain.gain.setValueAtTime(0.04 / (idx + 1), now);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + decay);

      osc.connect(gain);
      gain.connect(masterGainRef.current!);

      osc.start(now);
      osc.stop(now + decay);
    });
  }, []);

  const startCarnaticFallback = useCallback(() => {
    try {
      const ctx = initAudio();
      if (ctx.state === 'suspended') ctx.resume();

      isPlayingRef.current = true;
      setIsPlaying(true);
      setActiveSource('carnatic_synth');

      const droneFreqs = [138.59, 207.65, 277.18];
      droneFreqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(freq * 1.5, ctx.currentTime);
        filter.Q.setValueAtTime(3, ctx.currentTime);

        gain.gain.setValueAtTime(0.015 / (i + 1), ctx.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGainRef.current!);
        osc.start();
      });

      const ragaNotes = [277.18, 311.13, 349.23, 415.30, 466.16, 554.37];
      let step = 0;

      const scheduleSequence = () => {
        if (!isPlayingRef.current) return;
        const note = ragaNotes[step % ragaNotes.length];
        playMelodicNote(note, 2.2);

        if (step % 8 === 0) playTempleBell();

        step = (step + 1) % (ragaNotes.length * 2);
        timerRef.current = window.setTimeout(scheduleSequence, 1600 + (step % 3) * 400);
      };

      scheduleSequence();
    } catch {
      // Audio context might be restricted
    }
  }, [initAudio, playMelodicNote, playTempleBell]);

  const stopCarnaticFallback = useCallback(() => {
    isPlayingRef.current = false;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend().catch(() => {});
    }
  }, []);

  // -------------------------------------------------------------
  // 2. YouTube IFrame API Integration
  // -------------------------------------------------------------
  useEffect(() => {
    const initYT = () => {
      if (window.YT && window.YT.Player) {
        try {
          ytPlayerRef.current = new window.YT.Player('yt-wedding-audio-player', {
            height: '1',
            width: '1',
            videoId: YOUTUBE_VIDEO_ID,
            playerVars: {
              autoplay: 0,
              loop: 1,
              playlist: YOUTUBE_VIDEO_ID,
              controls: 0,
              showinfo: 0,
              modestbranding: 1,
              playsinline: 1,
              enablejsapi: 1,
              origin: window.location.origin,
            },
            events: {
              onReady: (event: any) => {
                setIsYtReady(true);
                event.target.setVolume(Math.round(volume * 100));
              },
              onStateChange: (event: any) => {
                // 1 = PLAYING, 2 = PAUSED, 0 = ENDED
                if (event.data === 1) {
                  setIsPlaying(true);
                  setActiveSource('youtube');
                } else if (event.data === 2 || event.data === 0) {
                  setIsPlaying(false);
                }
              },
              onError: () => {
                // In case of error (e.g. network/embed restriction), switch to Carnatic synth
                setActiveSource('carnatic_synth');
              },
            },
          });
        } catch {
          setIsYtReady(false);
        }
      }
    };

    if (window.YT && window.YT.Player) {
      initYT();
    } else {
      const existingScript = document.getElementById('youtube-iframe-api-script');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api-script';
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }
      window.onYouTubeIframeAPIReady = () => {
        initYT();
      };
    }

    return () => {
      try {
        if (ytPlayerRef.current && ytPlayerRef.current.destroy) {
          ytPlayerRef.current.destroy();
        }
      } catch {}
      stopCarnaticFallback();
    };
  }, [stopCarnaticFallback, volume]);

  // -------------------------------------------------------------
  // 3. Play / Pause Control
  // -------------------------------------------------------------
  const playAudio = useCallback(() => {
    let played = false;
    if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === 'function' && isYtReady) {
      try {
        ytPlayerRef.current.unMute();
        ytPlayerRef.current.setVolume(Math.round(volume * 100));
        ytPlayerRef.current.playVideo();
        setIsPlaying(true);
        setActiveSource('youtube');
        setIsMuted(false);
        played = true;
      } catch {
        played = false;
      }
    }

    if (!played) {
      // Fallback
      startCarnaticFallback();
    }
  }, [isYtReady, startCarnaticFallback, volume]);

  const pauseAudio = useCallback(() => {
    if (ytPlayerRef.current && typeof ytPlayerRef.current.pauseVideo === 'function') {
      try {
        ytPlayerRef.current.pauseVideo();
      } catch {}
    }
    stopCarnaticFallback();
    setIsPlaying(false);
  }, [stopCarnaticFallback]);

  const togglePlayback = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  // -------------------------------------------------------------
  // 4. Mute / Unmute & Volume
  // -------------------------------------------------------------
  const toggleMute = () => {
    if (isMuted) {
      // Unmute
      if (ytPlayerRef.current && typeof ytPlayerRef.current.unMute === 'function') {
        try {
          ytPlayerRef.current.unMute();
          ytPlayerRef.current.setVolume(Math.round(volume * 100));
        } catch {}
      }
      if (masterGainRef.current && audioCtxRef.current) {
        masterGainRef.current.gain.setValueAtTime(volume * 0.35, audioCtxRef.current.currentTime);
      }
      setIsMuted(false);
    } else {
      // Mute
      if (ytPlayerRef.current && typeof ytPlayerRef.current.mute === 'function') {
        try {
          ytPlayerRef.current.mute();
        } catch {}
      }
      if (masterGainRef.current && audioCtxRef.current) {
        masterGainRef.current.gain.setValueAtTime(0, audioCtxRef.current.currentTime);
      }
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (ytPlayerRef.current && typeof ytPlayerRef.current.setVolume === 'function') {
      try {
        ytPlayerRef.current.setVolume(Math.round(val * 100));
        if (val > 0 && isMuted) {
          ytPlayerRef.current.unMute();
          setIsMuted(false);
        }
      } catch {}
    }
    if (masterGainRef.current && audioCtxRef.current && !isMuted) {
      masterGainRef.current.gain.setValueAtTime(val * 0.35, audioCtxRef.current.currentTime);
    }
  };

  // Trigger audio on user invitation open
  useEffect(() => {
    if (autoPlayRequest && !isPlaying) {
      playAudio();
    }
  }, [autoPlayRequest, isPlaying, playAudio]);

  return (
    <div 
      style={{ 
        position: 'fixed', 
        bottom: -100, 
        left: -100, 
        width: 1, 
        height: 1, 
        opacity: 0.01, 
        pointerEvents: 'none', 
        zIndex: -1 
      }}
      aria-hidden="true"
    >
      <div id="yt-wedding-audio-player" />
    </div>
  );
};
