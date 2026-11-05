import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Award, 
  CheckCircle, 
  XCircle, 
  Sparkles, 
  Mail, 
  RotateCcw, 
  BookOpen, 
  TrendingUp, 
  Star 
} from 'lucide-react';
import { TestResult, Category } from '../types';
import { CATEGORY_META } from '../data/questions';
import { RazCharacter } from './RazCharacter';
import { sound } from '../utils/audio';

interface ResultViewProps {
  result: TestResult;
  onOpenLetter: () => void;
  onOpenReview: () => void;
  onRetake: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  onOpenLetter,
  onOpenReview,
  onRetake,
}) => {
  const [displayScore, setDisplayScore] = useState(0);

  // Trigger confetti and count-up animation on mount
  useEffect(() => {
    // Score counter animation
    const target = result.rawScore;
    const duration = 1500;
    const steps = 40;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        setDisplayScore(target);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.round(current));
      }
    }, stepDuration);

    // Confetti on good score
    if (result.rawScore >= 80) {
      setTimeout(() => {
        try {
          confetti({
            particleCount: result.rawScore === 100 ? 150 : 80,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#a855f7', '#ec4899', '#facc15', '#38bdf8', '#ffffff'],
          });
        } catch {
          // Ignore
        }
      }, 500);
    }

    return () => clearInterval(timer);
  }, [result.rawScore]);

  // Determine character expression based on score
  const getExpression = () => {
    if (result.rawScore === 100) return 'celebration';
    if (result.rawScore >= 80) return 'happy';
    if (result.rawScore >= 51) return 'happy';
    if (result.rawScore >= 21) return 'confused';
    return 'sad';
  };

  const accuracy = Math.round((result.correctCount / 30) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Top Banner & Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-700/60 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
          <Trophy className="w-3.5 h-3.5" />
          <span>Hasil Tes IQ & Evaluasi Kecerdasan</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Hasil Tes IQ Kamu Telah Terbit! ✨
        </h1>
        <p className="text-sm text-purple-700 dark:text-purple-300 mt-1 font-medium">
          Dianalisis secara komprehensif berdasarkan 6 kategori keilmuan
        </p>
      </div>

      {/* Main Score & Character Split Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 mb-8 shadow-2xl border border-purple-300/80 dark:border-purple-700/60 relative overflow-hidden">
        {/* Glowing backdrop aura */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 via-pink-400/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left: Anime Character with Reaction */}
          <div className="md:col-span-5 flex flex-col items-center text-center">
            <RazCharacter
              expression={getExpression()}
              size="lg"
              showSpeechBubble
              speechText={
                result.rawScore === 100
                  ? 'GOKIL BANGET 100! Raz, kamu emang dewi jenius! 👑♡'
                  : result.rawScore >= 80
                  ? 'Keren parah Raz! Otak kamu encer banget! ✨'
                  : result.rawScore >= 51
                  ? 'Nilai kamu lumayan bagus Raz, tingkatkan lagi ya! 🌸'
                  : 'Aduhh Raz... belajar lagi yuk biar gak buffering! 😭'
              }
            />
            <div className="mt-2 text-xs font-semibold text-purple-600 dark:text-purple-400">
              Evaluator Resmi: R.A.Z Intelligence AI
            </div>
          </div>

          {/* Right: Big Score Counter & IQ Rating */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Nilai Akhir Ujian
            </span>

            {/* Glowing Big Counter */}
            <div className="my-2 flex items-baseline gap-2">
              <span className="text-6xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 bg-clip-text text-transparent font-mono tabular-nums">
                {displayScore}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-purple-400">/ 100</span>
            </div>

            {/* Tier Badge */}
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl bg-gradient-to-r from-amber-400/20 via-pink-400/20 to-purple-400/20 border border-amber-300 dark:border-amber-600/50 text-amber-900 dark:text-amber-200 text-sm font-bold shadow-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span>Predikat: {result.tierTitle}</span>
              <span className="text-xs opacity-75 font-mono">· IQ ~{result.iqEstimate}</span>
            </div>

            {/* Stats row: Benar, Salah, Akurasi */}
            <div className="grid grid-cols-3 gap-3 w-full p-3 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50 mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="text-base font-extrabold text-slate-800 dark:text-white tabular-nums">
                  {result.correctCount}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">Benar</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center text-rose-600 dark:text-rose-400 mb-0.5">
                  <XCircle className="w-4 h-4" />
                </div>
                <div className="text-base font-extrabold text-slate-800 dark:text-white tabular-nums">
                  {result.wrongCount}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">Salah</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center text-pink-600 dark:text-pink-400 mb-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-base font-extrabold text-slate-800 dark:text-white tabular-nums">
                  {accuracy}%
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">Akurasi</div>
              </div>
            </div>

            {/* Witty Critique Box */}
            <div className="w-full p-4 rounded-2xl bg-gradient-to-r from-purple-100/80 via-pink-100/70 to-purple-50/80 dark:from-purple-950/70 dark:via-fuchsia-950/50 dark:to-purple-900/60 border border-purple-200 dark:border-purple-800/60 text-left">
              <div className="text-xs font-bold text-purple-900 dark:text-purple-200 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                <span>Kritik & Komentar Khusus untuk Raz:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                "{result.critique}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Breakdown & Learning Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        {/* Left: Category Performance Breakdown (md:col-span-7) */}
        <div className="md:col-span-7 glass-card rounded-3xl p-6 shadow-xl border border-purple-200/80 dark:border-purple-800/40">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span>Analisis Performa Tiap Kategori</span>
          </h3>

          <div className="space-y-3.5">
            {result.categoryBreakdown.map((item) => {
              const meta = CATEGORY_META[item.category as Category];
              return (
                <div key={item.category} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-800 dark:text-slate-200">
                      {meta?.label || item.category}
                    </span>
                    <span className="font-mono tabular-nums text-purple-700 dark:text-purple-300">
                      {item.correct}/{item.total} ({item.percentage}%)
                    </span>
                  </div>

                  <div className="w-full h-2.5 bg-purple-100 dark:bg-purple-950 rounded-full overflow-hidden p-0.5 border border-purple-200 dark:border-purple-800">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-700"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Learning Tips (md:col-span-5) */}
        <div className="md:col-span-5 glass-card rounded-3xl p-6 shadow-xl border border-purple-200/80 dark:border-purple-800/40 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              <span>Saran Belajar untuk Raz</span>
            </h3>

            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
              {result.learningTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-[11px] text-purple-800 dark:text-purple-300 font-medium">
            💡 Tips: Buka surat evaluasi di bawah untuk mengirim laporan tes ini langsung ke WhatsApp!
          </div>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
        {/* Primary CTA: Open Letter */}
        <button
          onClick={() => {
            sound.playLetterOpen();
            onOpenLetter();
          }}
          className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white text-sm font-bold shadow-xl glow-button transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Mail className="w-4 h-4" />
          <span>Isi Surat untuk Raz ♡</span>
        </button>

        {/* Review Answers */}
        <button
          onClick={() => {
            sound.playPop();
            onOpenReview();
          }}
          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/90 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 text-sm font-bold border border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-800/50 transition-all flex items-center justify-center gap-2 shadow-sm"
        >
          <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Lihat Pembahasan Soal</span>
        </button>

        {/* Retake */}
        <button
          onClick={() => {
            sound.playPop();
            onRetake();
          }}
          className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Ulangi Tes</span>
        </button>
      </div>
    </div>
  );
};
