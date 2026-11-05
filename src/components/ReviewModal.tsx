import React, { useState } from 'react';
import { X, CheckCircle, XCircle, HelpCircle, ArrowLeft, ArrowRight, Lightbulb } from 'lucide-react';
import { Question, UserAnswerRecord } from '../types';
import { CATEGORY_META } from '../data/questions';
import { sound } from '../utils/audio';

interface ReviewModalProps {
  questions: Question[];
  answers: UserAnswerRecord;
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  questions,
  answers,
  onClose,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const q = questions[activeIdx];
  const userAns = answers[q.id];
  const isCorrect = userAns === q.correctAnswer;
  const isUnanswered = !userAns;
  const categoryMeta = CATEGORY_META[q.category];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-purple-950/70 backdrop-blur-md animate-fadeIn">
      <div className="max-w-3xl w-full max-h-[90vh] glass-card rounded-3xl shadow-2xl border border-purple-300 dark:border-purple-700 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-purple-200 dark:border-purple-800/60 flex items-center justify-between gap-3 bg-purple-50/50 dark:bg-purple-950/40">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Pembahasan & Kunci Jawaban
            </h3>
            <p className="text-xs text-purple-600 dark:text-purple-300">
              Soal {activeIdx + 1} dari {questions.length} · {q.category}
            </p>
          </div>

          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-purple-100/60 dark:hover:bg-purple-900/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {/* Question Status Banner */}
          <div
            className={`p-3.5 rounded-2xl flex items-center gap-3 text-xs sm:text-sm font-semibold border ${
              isCorrect
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                : isUnanswered
                ? 'bg-slate-100 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200'
            }`}
          >
            {isCorrect ? (
              <>
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Jawabanmu Tepat! (+1 Poin)</span>
              </>
            ) : isUnanswered ? (
              <>
                <HelpCircle className="w-5 h-5 text-slate-500 shrink-0" />
                <span>Kamu melewatkan soal ini (Kosong). Kunci jawaban yang benar adalah {q.correctAnswer}.</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Jawabanmu ({userAns}) Kurang Tepat. Kunci jawaban yang benar adalah {q.correctAnswer}.</span>
              </>
            )}
          </div>

          {/* Question Text */}
          <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-purple-100 dark:border-purple-900/40">
            <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">
              Pertanyaan:
            </div>
            <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 whitespace-pre-line leading-relaxed">
              {q.question}
            </p>
          </div>

          {/* Options List */}
          <div className="space-y-2">
            {q.options.map((opt) => {
              const isOptionCorrect = opt.key === q.correctAnswer;
              const isUserChoice = opt.key === userAns;

              return (
                <div
                  key={opt.key}
                  className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${
                    isOptionCorrect
                      ? 'bg-emerald-100/60 dark:bg-emerald-950/40 border-emerald-400 text-emerald-900 dark:text-emerald-200 font-semibold'
                      : isUserChoice
                      ? 'bg-rose-100/60 dark:bg-rose-950/40 border-rose-400 text-rose-900 dark:text-rose-200 font-medium'
                      : 'bg-white/50 dark:bg-slate-900/40 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="w-6 h-6 rounded-lg bg-white/80 dark:bg-slate-800 flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    {opt.key}
                  </span>
                  <span className="flex-1 pt-0.5">{opt.text}</span>
                  {isOptionCorrect && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-600 text-white shrink-0">
                      Kunci Jawaban
                    </span>
                  )}
                  {!isOptionCorrect && isUserChoice && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-rose-500 text-white shrink-0">
                      Pilihanmu
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Comprehensive Step-by-Step Explanation */}
          <div className="p-4 rounded-2xl bg-purple-100/50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 text-xs sm:text-sm leading-relaxed">
            <div className="flex items-center gap-1.5 font-bold text-purple-900 dark:text-purple-200 mb-1">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Penjelasan & Pembahasan Ilmiah:</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300">
              {q.explanation}
            </p>
          </div>
        </div>

        {/* Modal Footer with Navigator */}
        <div className="p-4 border-t border-purple-200 dark:border-purple-800/60 bg-purple-50/50 dark:bg-purple-950/40 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              sound.playPop();
              setActiveIdx((prev) => Math.max(0, prev - 1));
            }}
            disabled={activeIdx === 0}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1 ${
              activeIdx === 0
                ? 'opacity-40 cursor-not-allowed text-slate-400'
                : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200/50'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          <span className="text-xs font-mono font-bold text-purple-800 dark:text-purple-300">
            {activeIdx + 1} / {questions.length}
          </span>

          <button
            onClick={() => {
              sound.playPop();
              setActiveIdx((prev) => Math.min(questions.length - 1, prev + 1));
            }}
            disabled={activeIdx === questions.length - 1}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1 ${
              activeIdx === questions.length - 1
                ? 'opacity-40 cursor-not-allowed text-slate-400'
                : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200/50'
            }`}
          >
            <span>Selanjutnya</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
