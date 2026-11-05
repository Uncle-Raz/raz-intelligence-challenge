import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  HelpCircle, 
  Bookmark, 
  Grid, 
  Clock, 
  AlertTriangle,
  Send,
  Sparkles
} from 'lucide-react';
import { Question, UserAnswerRecord } from '../types';
import { CATEGORY_META } from '../data/questions';
import { RazCharacter } from './RazCharacter';
import { ThematicArt } from './ThematicArt';
import { sound } from '../utils/audio';

interface QuizViewProps {
  questions: Question[];
  currentIndex: number;
  answers: UserAnswerRecord;
  timeRemaining: number;
  onSelectAnswer: (questionId: number, answerKey: 'A' | 'B' | 'C' | 'D') => void;
  onNext: () => void;
  onPrev: () => void;
  onJumpTo: (index: number) => void;
  onSubmit: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  questions,
  currentIndex,
  answers,
  timeRemaining,
  onSelectAnswer,
  onNext,
  onPrev,
  onJumpTo,
  onSubmit,
}) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);

  const currentQ = questions[currentIndex];
  const selectedAnswer = answers[currentQ.id];
  const categoryMeta = CATEGORY_META[currentQ.category];

  // Calculate progress
  const answeredCount = Object.values(answers).filter(Boolean).length;
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  const toggleBookmark = (id: number) => {
    sound.playPop();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleOptionClick = (key: 'A' | 'B' | 'C' | 'D') => {
    sound.playSelect();
    onSelectAnswer(currentQ.id, key);
  };

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const unansweredCount = questions.length - answeredCount;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Top Progress & Quick Navigation Bar */}
      <div className="glass-card rounded-2xl p-4 mb-6 shadow-md border border-purple-200/70 dark:border-purple-800/40">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
              Kemajuan Tes
            </span>
            <span className="text-xs text-purple-600 dark:text-purple-300 font-semibold tabular-nums">
              ({answeredCount}/{questions.length} Dijawab)
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Timer */}
            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                timeRemaining < 300
                  ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 animate-pulse'
                  : 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTimer(timeRemaining)}</span>
            </div>

            {/* Quick Grid Drawer Toggle */}
            <button
              onClick={() => {
                sound.playPop();
                setShowDrawer(!showDrawer);
              }}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-200 text-xs font-semibold hover:bg-purple-100 dark:hover:bg-purple-800/60 transition-colors border border-purple-200 dark:border-purple-700/60"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Daftar Soal</span>
            </button>
          </div>
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full h-2.5 bg-purple-100 dark:bg-purple-950 rounded-full overflow-hidden p-0.5 border border-purple-200 dark:border-purple-800">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Expandable Question Grid Drawer */}
      {showDrawer && (
        <div className="glass-panel rounded-3xl p-5 mb-6 shadow-xl border border-purple-300 dark:border-purple-700 animate-fadeIn">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">
              Palet Navigasi Soal (1–30)
            </span>
            <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600 inline-block" />
                Terjawab
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                Ragu/Tanda
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 inline-block" />
                Belum
              </span>
            </div>
          </div>

          <div className="grid grid-cols-6 sm:grid-cols-10 gap-2">
            {questions.map((q, idx) => {
              const isAnswered = !!answers[q.id];
              const isCurrent = idx === currentIndex;
              const isBookmarked = bookmarkedIds.includes(q.id);

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    sound.playPop();
                    onJumpTo(idx);
                    setShowDrawer(false);
                  }}
                  className={`relative h-10 rounded-xl font-mono text-xs font-bold transition-all transform hover:scale-105 ${
                    isCurrent
                      ? 'ring-2 ring-pink-500 ring-offset-2 dark:ring-offset-slate-900 bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-md'
                      : isAnswered
                      ? 'bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700'
                      : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-purple-400'
                  }`}
                >
                  {q.id}
                  {isBookmarked && (
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Question Workspace Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Question Statement & Options (lg:col-span-8) */}
        <div className="lg:col-span-8 glass-card rounded-3xl p-6 sm:p-8 shadow-xl border border-purple-200/80 dark:border-purple-800/40 relative">
          {/* Header Row: Category Badge & Bookmark */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${categoryMeta?.bgClass} ${categoryMeta?.borderClass}`}>
                {currentQ.category}
              </span>
              <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                Tingkat: {currentQ.difficulty}
              </span>
            </div>

            <button
              onClick={() => toggleBookmark(currentQ.id)}
              className={`p-2 rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5 ${
                bookmarkedIds.includes(currentQ.id)
                  ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
                  : 'text-slate-400 hover:text-amber-500'
              }`}
              title="Tandai ragu-ragu"
            >
              <Bookmark className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline text-xs">
                {bookmarkedIds.includes(currentQ.id) ? 'Ditandai' : 'Tandai'}
              </span>
            </button>
          </div>

          {/* Question Title & Text */}
          <div className="mb-6">
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 tracking-wide uppercase">
              Soal Nomor {currentQ.id} dari {questions.length}
            </span>
            <h2 className="mt-2 text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed whitespace-pre-line">
              {currentQ.question}
            </h2>
          </div>

          {/* 4 Interactive Options (A, B, C, D) */}
          <div className="space-y-3 mb-8">
            {currentQ.options.map((opt) => {
              const isSelected = selectedAnswer === opt.key;

              return (
                <button
                  key={opt.key}
                  onClick={() => handleOptionClick(opt.key)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-start gap-3.5 border ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-500/15 to-pink-500/15 border-purple-500 dark:border-purple-400 shadow-md ring-1 ring-purple-400/50'
                      : 'bg-white/70 dark:bg-slate-900/50 border-purple-100 dark:border-purple-900/50 hover:bg-purple-50/60 dark:hover:bg-purple-950/40 hover:border-purple-300'
                  }`}
                >
                  {/* Option Badge A, B, C, D */}
                  <div
                    className={`w-8 h-8 rounded-xl font-bold text-sm flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-sm'
                        : 'bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200'
                    }`}
                  >
                    {opt.key}
                  </div>

                  {/* Option Text */}
                  <div className="flex-1 pt-1 text-sm font-medium text-slate-800 dark:text-slate-200 leading-normal">
                    {opt.text}
                  </div>

                  {/* Checked indicator */}
                  {isSelected && (
                    <div className="pt-1 text-pink-500 dark:text-pink-400 animate-scaleIn">
                      <CheckCircle2 className="w-5 h-5 fill-pink-500 text-white dark:text-slate-900" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Bottom Action Row: Previous & Next */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-purple-100 dark:border-purple-900/40">
            <button
              onClick={() => {
                sound.playPop();
                onPrev();
              }}
              disabled={currentIndex === 0}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : 'text-purple-700 dark:text-purple-300 hover:bg-purple-100/70 dark:hover:bg-purple-900/50'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => {
                  sound.playNext();
                  onNext();
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white text-xs sm:text-sm font-bold shadow-md glow-purple transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  sound.playPop();
                  setShowConfirmModal(true);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center gap-1.5 cursor-pointer animate-pulse"
              >
                <span>Selesaikan Tes</span>
                <Send className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Right Side: Thematic Art & Character Reaction (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Category Thematic Visual Art */}
          <div className="glass-card rounded-3xl p-5 shadow-lg border border-purple-200/80 dark:border-purple-800/40 min-h-[160px] flex flex-col justify-center">
            <ThematicArt category={currentQ.category} className="h-40" />
          </div>

          {/* Anime Character Companion Box */}
          <div className="glass-card rounded-3xl p-5 shadow-lg border border-purple-200/80 dark:border-purple-800/40 flex flex-col items-center text-center">
            <RazCharacter
              expression={selectedAnswer ? 'happy' : 'thinking'}
              size="md"
              showSpeechBubble
              speechText={
                selectedAnswer
                  ? 'Jawaban tersimpan! Kamu yakin dengan pilihan ini? ♡'
                  : 'Fokus dan baca baik-baik pertanyaannya ya Raz~ ✨'
              }
            />
            <div className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              Kategori: {categoryMeta?.label}
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal Before Final Submission */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/70 backdrop-blur-md animate-fadeIn">
          <div className="max-w-md w-full glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-300 dark:border-purple-700 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-pink-500 flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Selesaikan Tes Sekarang?
            </h3>

            {unansweredCount > 0 ? (
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Masih ada <strong className="text-pink-600 dark:text-pink-400">{unansweredCount} soal</strong> yang belum kamu jawab. Jawaban yang kosong akan dihitung salah. Yakin ingin mengakhiri tes?
              </p>
            ) : (
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Hebat Raz! Semua <strong className="text-purple-600 dark:text-purple-400">30 soal</strong> sudah selesai kamu isi. Siap melihat hasil skormu?
              </p>
            )}

            <div className="flex items-center gap-3 justify-center">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Cek Lagi Soal
              </button>

              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  sound.playFanfare();
                  onSubmit();
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white text-xs sm:text-sm font-bold shadow-md glow-purple transition-all"
              >
                Ya, Selesaikan!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
