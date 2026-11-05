import React, { useState } from 'react';
import { Volume2, VolumeX, Moon, Sun, Maximize2, Minimize2, PhoneCall, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenPhoneConfig: () => void;
  currentStep: 'intro' | 'quiz' | 'result' | 'letter';
  timeRemaining?: number;
  currentQ?: number;
  totalQ?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onOpenPhoneConfig,
  currentStep,
  timeRemaining,
  currentQ,
  totalQ,
}) => {
  const [isMuted, setIsMuted] = useState(!sound.enabled);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleSound = () => {
    sound.enabled = !sound.enabled;
    setIsMuted(!sound.enabled);
    if (sound.enabled) {
      sound.playPop();
    }
  };

  const toggleFullscreen = () => {
    sound.playPop();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const formatTimer = (seconds?: number) => {
    if (seconds === undefined) return '60:00';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-purple-200/50 dark:border-purple-800/30 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-pink-500 p-0.5 shadow-md shadow-purple-500/25 flex items-center justify-center">
            <div className="w-full h-full bg-white dark:bg-purple-950 rounded-[10px] flex items-center justify-center">
              <span className="text-base font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                R
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base tracking-tight bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 dark:from-purple-300 dark:via-fuchsia-200 dark:to-pink-300 bg-clip-text text-transparent leading-none">
              R.A.Z CHALLENGE
            </span>
            <span className="text-[10px] text-purple-900/60 dark:text-purple-300/60 font-medium tracking-wider uppercase mt-0.5">
              Personal IQ & Insight
            </span>
          </div>
        </div>

        {/* Center Zone: Active Quiz Stats if in quiz */}
        {currentStep === 'quiz' && (
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-purple-100/70 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-700/50">
            <span className="text-xs font-semibold text-purple-900 dark:text-purple-200">
              Soal {currentQ} dari {totalQ}
            </span>
            <span className="text-purple-300 dark:text-purple-600">|</span>
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-pink-600 dark:text-pink-400">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              <span>{formatTimer(timeRemaining)}</span>
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* WhatsApp Owner Config */}
          <button
            onClick={() => {
              sound.playPop();
              onOpenPhoneConfig();
            }}
            title="Pengaturan Nomor WhatsApp"
            className="p-2 rounded-xl text-purple-700 dark:text-purple-300 hover:bg-purple-100/60 dark:hover:bg-purple-900/40 transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={isMuted ? 'Aktifkan Suara' : 'Bisukan Suara'}
            className="p-2 rounded-xl text-purple-700 dark:text-purple-300 hover:bg-purple-100/60 dark:hover:bg-purple-900/40 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={() => {
              sound.playPop();
              onToggleTheme();
            }}
            title={isDark ? 'Mode Terang' : 'Mode Gelap'}
            className="p-2 rounded-xl text-purple-700 dark:text-purple-300 hover:bg-purple-100/60 dark:hover:bg-purple-900/40 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-purple-700" />}
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh'}
            className="hidden sm:flex p-2 rounded-xl text-purple-700 dark:text-purple-300 hover:bg-purple-100/60 dark:hover:bg-purple-900/40 transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
