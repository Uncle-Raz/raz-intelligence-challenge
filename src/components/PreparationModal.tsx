import React, { useEffect, useState } from 'react';
import { Brain, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface PreparationModalProps {
  onComplete: () => void;
}

export const PreparationModal: React.FC<PreparationModalProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            sound.playNext();
            onComplete();
          }, 300);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 8;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-sm w-full glass-card rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl border border-purple-300/40 dark:border-purple-600/40">
        {/* Glowing Brain with Orbitals */}
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-pink-500 p-0.5 shadow-xl glow-purple animate-pulse">
            <div className="w-full h-full rounded-[22px] bg-purple-950/90 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-1 border border-purple-400/30 rounded-full animate-spin-slow" />
              <Brain className="w-12 h-12 text-purple-300 filter drop-shadow-[0_0_10px_rgba(216,180,254,0.8)]" />
              <div className="absolute top-2 right-2 text-amber-300">
                <Sparkles className="w-4 h-4 fill-amber-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
          Persiapan Tes...
        </h3>
        <p className="text-xs text-purple-600 dark:text-purple-300 mb-6 font-medium">
          Mohon tunggu sebentar ♡
        </p>

        {/* Progress Bar & Percentage */}
        <div className="w-full">
          <div className="w-full h-3 bg-purple-200/60 dark:bg-purple-900/60 rounded-full overflow-hidden p-0.5 border border-purple-300 dark:border-purple-700/60">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-full transition-all duration-200 shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-right text-xs font-mono font-bold text-purple-800 dark:text-purple-300 tabular-nums">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};
