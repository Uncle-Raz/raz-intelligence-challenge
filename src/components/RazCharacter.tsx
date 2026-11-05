import React from 'react';
import { CharacterExpression } from '../types';

interface RazCharacterProps {
  expression: CharacterExpression;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSpeechBubble?: boolean;
  speechText?: string;
}

export const RazCharacter: React.FC<RazCharacterProps> = ({
  expression,
  size = 'md',
  className = '',
  showSpeechBubble = false,
  speechText,
}) => {
  const sizeMap = {
    sm: 'w-24 h-24',
    md: 'w-40 h-40',
    lg: 'w-56 h-56',
    xl: 'w-72 h-72',
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Optional Speech Bubble */}
      {showSpeechBubble && speechText && (
        <div className="mb-2 max-w-[220px] px-3.5 py-1.5 rounded-2xl bg-white/90 dark:bg-purple-950/90 text-purple-950 dark:text-purple-100 text-xs font-medium shadow-md border border-purple-200 dark:border-purple-700/60 text-center animate-bounce duration-1000">
          {speechText}
          <div className="w-2.5 h-2.5 bg-white/90 dark:bg-purple-950/90 border-r border-b border-purple-200 dark:border-purple-700/60 rotate-45 mx-auto -mb-2 mt-1" />
        </div>
      )}

      {/* Main Character SVG */}
      <div className={`relative ${sizeMap[size]} transition-transform duration-300 hover:scale-105`}>
        {/* Ambient Glow Aura */}
        <div
          className={`absolute inset-0 rounded-full blur-2xl transition-all duration-700 ${
            expression === 'celebration'
              ? 'bg-amber-400/40 animate-pulse'
              : expression === 'sad'
              ? 'bg-indigo-400/20'
              : 'bg-purple-400/30'
          }`}
        />

        <svg
          viewBox="0 0 240 240"
          className="relative w-full h-full drop-shadow-xl filter"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fff2eb" />
              <stop offset="100%" stopColor="#ffe4d6" />
            </linearGradient>

            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2c223b" />
              <stop offset="70%" stopColor="#1e142b" />
              <stop offset="100%" stopColor="#3d2652" />
            </linearGradient>

            <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#f472b6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="headphoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3e8ff" />
              <stop offset="50%" stopColor="#d8b4fe" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>

            <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#581c87" />
              <stop offset="50%" stopColor="#7e22ce" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>

            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Back Hair */}
          <path
            d="M 60,110 C 45,150 40,210 70,230 C 95,215 145,215 170,230 C 200,210 195,150 180,110 Z"
            fill="url(#hairGrad)"
          />

          {/* Sweaters & Neck */}
          <path d="M 108,165 L 132,165 L 136,182 L 104,182 Z" fill="#fed7aa" />
          <path
            d="M 75,185 C 90,175 150,175 165,185 C 185,200 195,240 195,240 L 45,240 C 45,240 55,200 75,185 Z"
            fill="#f5d0fe"
            className="dark:opacity-90"
          />
          {/* Ribbons / Collar */}
          <path
            d="M 100,185 C 115,195 125,195 140,185 C 132,205 108,205 100,185 Z"
            fill="#ffffff"
            opacity="0.8"
          />
          <circle cx="120" cy="195" r="4" fill="#ec4899" />

          {/* Head & Face */}
          <path
            d="M 75,115 C 75,75 165,75 165,115 C 165,145 145,168 120,168 C 95,168 75,145 75,115 Z"
            fill="url(#skinGrad)"
          />

          {/* Cheeks Blush */}
          <ellipse cx="94" cy="138" rx="8" ry="4.5" fill="#f43f5e" opacity="0.25" />
          <ellipse cx="146" cy="138" rx="8" ry="4.5" fill="#f43f5e" opacity="0.25" />

          {/* Ears */}
          <circle cx="73" cy="122" r="10" fill="#fecdd3" opacity="0.7" />
          <circle cx="167" cy="122" r="10" fill="#fecdd3" opacity="0.7" />

          {/* Eyes depending on expression */}
          {expression === 'happy' || expression === 'celebration' ? (
            // Smiling curved closed eyes
            <g stroke="#3b0764" strokeWidth="3" strokeLinecap="round" fill="none">
              <path d="M 88,126 Q 96,118 104,126" />
              <path d="M 136,126 Q 144,118 152,126" />
              {/* Extra cute lashes */}
              <path d="M 104,126 L 108,123" />
              <path d="M 152,126 L 156,123" />
            </g>
          ) : expression === 'welcome' ? (
            // One open sparkling eye, one wink
            <g>
              {/* Left Eye: Open & Radiant */}
              <ellipse cx="96" cy="125" rx="9" ry="12" fill="url(#eyeGrad)" />
              <circle cx="94" cy="121" r="3.5" fill="#ffffff" />
              <circle cx="98" cy="128" r="1.8" fill="#ffffff" />
              <path d="M 85,118 Q 96,113 107,118" stroke="#2e1065" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              
              {/* Right Eye: Cute Wink */}
              <path d="M 135,126 Q 144,118 153,126" stroke="#2e1065" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M 153,126 L 157,123" stroke="#2e1065" strokeWidth="2" strokeLinecap="round" />
            </g>
          ) : expression === 'sad' ? (
            // Sad droopy eyes with a tear
            <g>
              <ellipse cx="96" cy="126" rx="8" ry="10" fill="url(#eyeGrad)" />
              <circle cx="94" cy="123" r="2.5" fill="#ffffff" />
              <ellipse cx="144" cy="126" rx="8" ry="10" fill="url(#eyeGrad)" />
              <circle cx="142" cy="123" r="2.5" fill="#ffffff" />
              {/* Slanted eyebrows */}
              <path d="M 87,117 Q 96,114 105,119" stroke="#3b0764" strokeWidth="2" fill="none" />
              <path d="M 135,119 Q 144,114 153,117" stroke="#3b0764" strokeWidth="2" fill="none" />
              {/* Tear drop */}
              <path d="M 154,136 Q 156,140 154,142 Q 152,140 154,136 Z" fill="#60a5fa" opacity="0.8" />
            </g>
          ) : expression === 'thinking' ? (
            // Looking upward curious eyes
            <g>
              <ellipse cx="96" cy="123" rx="8.5" ry="11" fill="url(#eyeGrad)" />
              <circle cx="95" cy="118" r="3" fill="#ffffff" />
              <circle cx="98" cy="124" r="1.5" fill="#ffffff" />
              <ellipse cx="144" cy="123" rx="8.5" ry="11" fill="url(#eyeGrad)" />
              <circle cx="143" cy="118" r="3" fill="#ffffff" />
              <circle cx="146" cy="124" r="1.5" fill="#ffffff" />
              {/* Eyebrows thinking */}
              <path d="M 88,114 Q 96,112 105,115" stroke="#2e1065" strokeWidth="2.5" fill="none" />
              <path d="M 136,112 Q 144,115 152,113" stroke="#2e1065" strokeWidth="2.5" fill="none" />
            </g>
          ) : (
            // Confused / Default: Wide anime eyes with question marks
            <g>
              <ellipse cx="96" cy="125" rx="9" ry="12" fill="url(#eyeGrad)" />
              <circle cx="94" cy="120" r="3.5" fill="#ffffff" />
              <circle cx="98" cy="127" r="1.5" fill="#ffffff" />
              <ellipse cx="144" cy="125" rx="9" ry="12" fill="url(#eyeGrad)" />
              <circle cx="142" cy="120" r="3.5" fill="#ffffff" />
              <circle cx="146" cy="127" r="1.5" fill="#ffffff" />
              <path d="M 86,116 Q 96,112 106,116" stroke="#2e1065" strokeWidth="2" fill="none" />
              <path d="M 134,113 Q 144,117 154,115" stroke="#2e1065" strokeWidth="2" fill="none" />
            </g>
          )}

          {/* Cute anime nose */}
          <circle cx="120" cy="142" r="1.2" fill="#f43f5e" opacity="0.6" />

          {/* Mouth */}
          {expression === 'happy' || expression === 'celebration' ? (
            <path
              d="M 114,149 Q 120,157 126,149 Z"
              fill="#fb7185"
              stroke="#e11d48"
              strokeWidth="1"
            />
          ) : expression === 'sad' ? (
            <path d="M 115,154 Q 120,149 125,154" stroke="#e11d48" strokeWidth="2" fill="none" strokeLinecap="round" />
          ) : expression === 'confused' ? (
            <ellipse cx="120" cy="151" rx="3" ry="3.5" fill="#fda4af" stroke="#e11d48" strokeWidth="1" />
          ) : (
            // Small gentle smile
            <path d="M 116,150 Q 120,154 124,150" stroke="#e11d48" strokeWidth="2" fill="none" strokeLinecap="round" />
          )}

          {/* Hair Bangs & Front Strands */}
          <path
            d="M 68,112 C 72,78 168,78 172,112 C 160,105 145,108 135,118 C 128,106 112,106 105,118 C 95,106 80,105 68,112 Z"
            fill="url(#hairGrad)"
          />
          {/* Hair Highlight Sheen */}
          <path
            d="M 80,95 Q 120,90 160,95 Q 120,99 80,95 Z"
            fill="url(#hairHighlight)"
          />
          {/* Side Hair Strands */}
          <path d="M 72,110 Q 66,145 76,170 Q 72,145 78,115 Z" fill="url(#hairGrad)" />
          <path d="M 168,110 Q 174,145 164,170 Q 168,145 162,115 Z" fill="url(#hairGrad)" />

          {/* Cute High-tech Headphones */}
          <path
            d="M 62,115 A 60,60 0 0,1 178,115"
            stroke="url(#headphoneGrad)"
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
          />
          {/* Left Earcup */}
          <rect x="52" y="105" width="16" height="32" rx="8" fill="url(#headphoneGrad)" />
          <circle cx="60" cy="121" r="5" fill="#a855f7" filter="url(#neonGlow)" />
          {/* Right Earcup */}
          <rect x="172" y="105" width="16" height="32" rx="8" fill="url(#headphoneGrad)" />
          <circle cx="180" cy="121" r="5" fill="#a855f7" filter="url(#neonGlow)" />

          {/* Hair Ribbons */}
          <path d="M 60,78 Q 50,70 56,86 Z" fill="#f472b6" />
          <path d="M 180,78 Q 190,70 184,86 Z" fill="#f472b6" />

          {/* Expression-Specific Overlays */}
          {expression === 'thinking' && (
            <g transform="translate(165, 45)" className="animate-pulse">
              <circle cx="15" cy="15" r="14" fill="#fef08a" opacity="0.9" />
              <path
                d="M 11,18 L 19,18 M 12,21 L 18,21 M 15,10 C 12,10 10,12 10,15 C 10,17 12,18 15,18 C 18,18 20,17 20,15 C 20,12 18,10 15,10 Z"
                stroke="#ca8a04"
                strokeWidth="1.5"
                fill="none"
              />
            </g>
          )}

          {expression === 'confused' && (
            <g transform="translate(170, 50)" className="animate-bounce">
              <text
                x="0"
                y="15"
                fill="#c084fc"
                fontSize="24"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                ??
              </text>
            </g>
          )}

          {expression === 'celebration' && (
            <g transform="translate(95, 38)" className="animate-bounce">
              {/* Golden Crown */}
              <path
                d="M 5,25 L 12,8 L 25,18 L 38,8 L 45,25 Z"
                fill="#facc15"
                stroke="#eab308"
                strokeWidth="2"
              />
              <circle cx="12" cy="8" r="3" fill="#f43f5e" />
              <circle cx="25" cy="18" r="3" fill="#38bdf8" />
              <circle cx="38" cy="8" r="3" fill="#a855f7" />
            </g>
          )}

          {/* Sparkles */}
          {(expression === 'celebration' || expression === 'welcome' || expression === 'happy') && (
            <g fill="#ec4899">
              <path
                d="M 40,65 Q 45,60 50,65 Q 45,70 40,65 Z"
                className="animate-spin-slow origin-center"
              />
              <path
                d="M 195,65 Q 200,60 205,65 Q 200,70 195,65 Z"
                className="animate-spin-slow origin-center"
              />
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};
