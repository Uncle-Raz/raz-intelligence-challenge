import React from 'react';
import { Sparkles, Brain, Clock, HelpCircle, Layers, ArrowRight, RotateCcw, Heart, Star } from 'lucide-react';
import { RazCharacter } from './RazCharacter';
import { sound } from '../utils/audio';

interface OpeningViewProps {
  onStart: () => void;
  onResume?: () => void;
  hasSavedProgress: boolean;
  savedAnswerCount?: number;
}

export const OpeningView: React.FC<OpeningViewProps> = ({
  onStart,
  onResume,
  hasSavedProgress,
  savedAnswerCount = 0,
}) => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      {/* Decorative Floating Glowing Orbs & Particles */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-purple-400/20 dark:bg-purple-600/15 blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-pink-400/20 dark:bg-pink-600/15 blur-3xl pointer-events-none animate-pulse-subtle" style={{ animationDelay: '1.5s' }} />

      {/* Floating Sparkles & Hearts */}
      <div className="absolute top-12 left-10 md:left-24 text-pink-400 opacity-60 animate-float pointer-events-none">
        <Heart className="w-6 h-6 fill-pink-300" />
      </div>
      <div className="absolute top-24 right-8 md:right-28 text-purple-400 opacity-60 animate-float pointer-events-none" style={{ animationDelay: '1s' }}>
        <Star className="w-5 h-5 fill-purple-300" />
      </div>
      <div className="absolute bottom-20 left-12 md:left-32 text-amber-300 opacity-60 animate-float pointer-events-none" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-6 h-6" />
      </div>

      <div className="relative z-10 max-w-3xl w-full mx-auto flex flex-col items-center text-center">
        {/* Neon Brain Logo Badge (As inspired by reference mockup) */}
        <div className="relative mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-pink-500 p-1 shadow-2xl shadow-purple-500/40 glow-purple flex items-center justify-center animate-float">
            <div className="w-full h-full rounded-[22px] bg-gradient-to-br from-purple-900 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden">
              {/* Orbital ring */}
              <div className="absolute inset-2 border border-purple-400/40 rounded-full rotate-12 animate-spin-slow pointer-events-none" />
              <Brain className="w-12 h-12 text-purple-300 filter drop-shadow-[0_0_12px_rgba(192,132,252,0.9)]" />
              <div className="absolute top-2 right-2 text-amber-300">
                <Sparkles className="w-4 h-4 fill-amber-300" />
              </div>
            </div>
          </div>
          {/* Subtle Crown on Top */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-[10px] font-bold text-amber-950 shadow-md">
            R.A.Z EDITION
          </div>
        </div>

        {/* Title & Tagline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2 leading-tight">
          IQ Test & Challenge
        </h1>
        <p className="text-sm sm:text-lg font-medium text-purple-700 dark:text-purple-300 mb-6">
          Know Your Mind · Show Your Potential ✨
        </p>

        {/* Anime Character Welcome Showcase */}
        <div className="mb-6">
          <RazCharacter
            expression="welcome"
            size="md"
            showSpeechBubble
            speechText="Hai Raz! Sudah siap uji batas kemampuan otakmu hari ini? ♡"
          />
        </div>

        {/* Test Overview Card */}
        <div className="w-full glass-card rounded-3xl p-5 sm:p-6 mb-8 text-left shadow-xl border border-purple-200/70 dark:border-purple-800/40">
          <div className="grid grid-cols-3 gap-3 divide-x divide-purple-200 dark:divide-purple-800/50 mb-4">
            <div className="px-2 text-center">
              <div className="flex items-center justify-center text-purple-600 dark:text-purple-400 mb-1">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-slate-800 dark:text-white tabular-nums">
                30
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Soal Berbobot
              </div>
            </div>

            <div className="px-2 text-center">
              <div className="flex items-center justify-center text-pink-600 dark:text-pink-400 mb-1">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-slate-800 dark:text-white tabular-nums">
                6
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Kategori Soal
              </div>
            </div>

            <div className="px-2 text-center">
              <div className="flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-1">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-slate-800 dark:text-white tabular-nums">
                60:00
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Menit Waktu
              </div>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-purple-100 dark:border-purple-900/60 pt-3">
            Tes ini dirancang khusus untuk mengukur logika, pemecahan masalah praktis, wawasan ekonomi, ilmu pengetahuan alam, dan pengetahuan lintas agama. Jawab setiap soal dengan teliti dan jujur ya, Raz! ♡
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          {hasSavedProgress && onResume && (
            <button
              onClick={() => {
                sound.playPop();
                onResume();
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/90 dark:bg-purple-900/60 text-purple-900 dark:text-purple-100 text-sm font-bold border border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-800/60 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <RotateCcw className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Lanjutkan Sesi ({savedAnswerCount}/30 Terjawab)</span>
            </button>
          )}

          <button
            onClick={() => {
              sound.playPop();
              onStart();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white text-base font-bold shadow-xl glow-button transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>Mulai Tes Sekarang</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <p className="mt-4 text-[11px] text-slate-400 dark:text-slate-500">
          Jawaban otomatis tersimpan saat berpindah soal · Bisa diakses nyaman dari HP maupun Laptop
        </p>
      </div>
    </div>
  );
};
