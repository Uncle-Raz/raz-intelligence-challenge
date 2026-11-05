import React from 'react';
import { Category } from '../types';

interface ThematicArtProps {
  category: Category;
  className?: string;
}

export const ThematicArt: React.FC<ThematicArtProps> = ({ category, className = '' }) => {
  switch (category) {
    case 'Matematika':
      return (
        <div className={`relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-fuchsia-500/15 p-4 ${className}`}>
          {/* Subtle graph grid background */}
          <div
            className="absolute inset-0 opacity-20 dark:opacity-10"
            style={{
              backgroundImage: 'linear-gradient(to right, #a855f7 1px, transparent 1px), linear-gradient(to bottom, #a855f7 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          {/* Animated floating math symbols */}
          <div className="absolute top-2 left-4 text-purple-400 font-mono text-sm animate-float">∫ f(x)dx</div>
          <div className="absolute bottom-3 left-6 text-pink-400 font-mono text-base animate-pulse">π ≈ 3.14159</div>
          <div className="absolute top-3 right-5 text-indigo-400 font-mono text-sm animate-float" style={{ animationDelay: '1.2s' }}>∑ n²</div>
          <div className="absolute bottom-4 right-6 text-fuchsia-400 font-mono text-xs animate-bounce" style={{ animationDelay: '0.8s' }}>√x² + y²</div>

          {/* Center Graphic */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-400 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 transform hover:rotate-6 transition-transform">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="mt-2 text-xs font-semibold text-purple-700 dark:text-purple-300">
              Analitika & Hitungan Presisi
            </span>
          </div>
        </div>
      );

    case 'Ekonomi':
      return (
        <div className={`relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/10 via-rose-500/5 to-amber-500/15 p-4 ${className}`}>
          {/* Animated upward chart sparkline */}
          <svg className="absolute inset-0 w-full h-full opacity-35" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M 0,85 Q 25,75 40,60 T 70,40 T 100,15" fill="none" stroke="#ec4899" strokeWidth="3" strokeDasharray="4 2" />
            <circle cx="100" cy="15" r="4" fill="#f43f5e" className="animate-ping" />
          </svg>

          {/* Floating Coins */}
          <div className="absolute top-2 left-4 w-7 h-7 rounded-full bg-amber-300 border-2 border-amber-400 flex items-center justify-center text-[10px] font-bold text-amber-900 shadow-md animate-float">
            Rp
          </div>
          <div className="absolute bottom-3 right-5 w-6 h-6 rounded-full bg-amber-400 border-2 border-amber-500 flex items-center justify-center text-[9px] font-bold text-amber-950 shadow-md animate-float" style={{ animationDelay: '1.5s' }}>
            %
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white shadow-lg shadow-pink-500/30">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span className="mt-2 text-xs font-semibold text-pink-700 dark:text-pink-300">
              Pertumbuhan & Nilai Uang
            </span>
          </div>
        </div>
      );

    case 'Logika':
      return (
        <div className={`relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-purple-500/5 to-violet-500/15 p-4 ${className}`}>
          {/* Cute Cat Silhouette with sunglasses motif as in collage */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-fuchsia-400 to-purple-400 flex items-center justify-center shadow-lg shadow-purple-500/25">
              {/* Cat face SVG with cool sunglasses */}
              <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none">
                {/* Ears */}
                <polygon points="15,40 25,10 45,30" fill="#fdf4ff" />
                <polygon points="20,38 27,16 42,30" fill="#f472b6" />
                <polygon points="85,40 75,10 55,30" fill="#fdf4ff" />
                <polygon points="80,38 73,16 58,30" fill="#f472b6" />
                {/* Head */}
                <ellipse cx="50" cy="55" rx="36" ry="32" fill="#faf5ff" />
                {/* Cool Sunglasses */}
                <rect x="24" y="44" width="22" height="15" rx="4" fill="#1e1b4b" />
                <rect x="54" y="44" width="22" height="15" rx="4" fill="#1e1b4b" />
                <line x1="46" y1="50" x2="54" y2="50" stroke="#1e1b4b" strokeWidth="3" />
                {/* Glass reflections */}
                <line x1="28" y1="46" x2="38" y2="56" stroke="#c084fc" strokeWidth="1.5" />
                <line x1="58" y1="46" x2="68" y2="56" stroke="#c084fc" strokeWidth="1.5" />
                {/* Nose & whiskers */}
                <polygon points="48,65 52,65 50,68" fill="#f472b6" />
                <line x1="20" y1="64" x2="8" y2="62" stroke="#d8b4fe" strokeWidth="1.5" />
                <line x1="20" y1="68" x2="10" y2="70" stroke="#d8b4fe" strokeWidth="1.5" />
                <line x1="80" y1="64" x2="92" y2="62" stroke="#d8b4fe" strokeWidth="1.5" />
                <line x1="80" y1="68" x2="90" y2="70" stroke="#d8b4fe" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="mt-2 text-xs font-semibold text-fuchsia-700 dark:text-fuchsia-300">
              Penalaran Kritis & Deduktif
            </span>
          </div>
        </div>
      );

    case 'IPA':
      return (
        <div className={`relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-blue-500/15 p-4 ${className}`}>
          {/* Blue Sky, Clouds, & Atom Orbits */}
          <div className="absolute top-2 left-3 opacity-40">
            <svg className="w-12 h-8 text-sky-300 fill-current" viewBox="0 0 24 24">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            {/* Spinning Atom Model */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              <div className="absolute inset-0 rounded-full border border-cyan-400/60 animate-spin-slow rotate-45" style={{ borderRadius: '50% 50% 50% 50% / 30% 30% 70% 70%' }} />
              <div className="absolute inset-0 rounded-full border border-sky-400/60 animate-spin-slow -rotate-45" style={{ animationDirection: 'reverse' }} />
            </div>
            <span className="mt-2 text-xs font-semibold text-cyan-700 dark:text-cyan-300">
              Hukum Alam & Fenomena Sains
            </span>
          </div>
        </div>
      );

    case 'Agama Islam':
      return (
        <div className={`relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-green-500/15 p-4 ${className}`}>
          {/* Peaceful Mosque silhouette & Crescent Moon */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
              <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
                {/* Crescent Moon */}
                <path d="M 40,16 A 14,14 0 1,1 26,2 A 18,18 0 1,0 40,16 Z" fill="#fef08a" />
                {/* Mosque Dome Silhouette */}
                <path d="M 18,52 L 18,40 Q 32,24 46,40 L 46,52 Z" fill="#ffffff" opacity="0.9" />
                <rect x="28" y="44" width="8" height="8" rx="4" fill="#047857" />
                {/* Minaret */}
                <rect x="10" y="32" width="6" height="20" fill="#ffffff" opacity="0.8" />
                <polygon points="13,26 9,32 17,32" fill="#ffffff" />
                <rect x="48" y="32" width="6" height="20" fill="#ffffff" opacity="0.8" />
                <polygon points="51,26 47,32 55,32" fill="#ffffff" />
              </svg>
            </div>
            <span className="mt-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              Fiqih, Hikmah & Sejarah Islam
            </span>
          </div>
        </div>
      );

    case 'Pengetahuan Kristen':
      return (
        <div className={`relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-yellow-500/15 p-4 ${className}`}>
          {/* Stained Glass Light Rays & Olive Branch */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white shadow-lg shadow-amber-500/30">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <span className="mt-2 text-xs font-semibold text-amber-700 dark:text-amber-300">
              Kitab Suci, Kasih & Kebajikan
            </span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
