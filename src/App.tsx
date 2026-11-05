/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { OpeningView } from './components/OpeningView';
import { PreparationModal } from './components/PreparationModal';
import { QuizView } from './components/QuizView';
import { ResultView } from './components/ResultView';
import { LetterToRaz } from './components/LetterToRaz';
import { ReviewModal } from './components/ReviewModal';
import { PhoneConfigModal } from './components/PhoneConfigModal';

import { QUESTIONS } from './data/questions';
import { UserAnswerRecord, TestResult } from './types';
import { calculateTestResult } from './utils/scoring';
import {
  loadAnswersFromStorage,
  saveAnswersToStorage,
  loadRemainingTime,
  saveRemainingTime,
  loadCurrentQuestionIdx,
  saveCurrentQuestionIdx,
  loadResultFromStorage,
  saveResultToStorage,
  loadThemePreference,
  saveThemePreference,
  clearQuizProgress,
} from './utils/storage';
import { sound } from './utils/audio';

const TOTAL_QUIZ_TIME_SECONDS = 3600; // 60 minutes

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => loadThemePreference());
  const [currentStep, setCurrentStep] = useState<'intro' | 'preparing' | 'quiz' | 'result' | 'letter'>('intro');
  const [questions] = useState(QUESTIONS);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<UserAnswerRecord>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(TOTAL_QUIZ_TIME_SECONDS);
  const [result, setResult] = useState<TestResult | null>(null);

  // Modals
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const [showPhoneConfigModal, setShowPhoneConfigModal] = useState<boolean>(false);

  // Timer Ref
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync theme with <html> class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    saveThemePreference(isDark);
  }, [isDark]);

  // Check saved session on mount
  useEffect(() => {
    const savedResult = loadResultFromStorage();
    if (savedResult) {
      setResult(savedResult);
      // If user had finished, default to result
      setCurrentStep('result');
      return;
    }

    const savedAns = loadAnswersFromStorage();
    const savedIdx = loadCurrentQuestionIdx();
    const savedTime = loadRemainingTime(TOTAL_QUIZ_TIME_SECONDS);

    if (Object.keys(savedAns).length > 0) {
      setAnswers(savedAns);
      setCurrentIndex(savedIdx);
      setTimeRemaining(savedTime);
    }
  }, []);

  // Timer countdown while in 'quiz' step
  useEffect(() => {
    if (currentStep === 'quiz') {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleTimeExpired();
            return 0;
          }
          const next = prev - 1;
          // Periodically save remaining time
          if (next % 5 === 0) {
            saveRemainingTime(next);
          }
          return next;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentStep, answers]);

  // Handle time expired
  const handleTimeExpired = () => {
    alert('Waktu 60 menit telah habis! Sistem akan otomatis mengalkulasi jawabanmu.');
    handleSubmitQuiz();
  };

  // Toggle Theme
  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Start new test
  const handleStartNewTest = () => {
    clearQuizProgress();
    setAnswers({});
    setCurrentIndex(0);
    setTimeRemaining(TOTAL_QUIZ_TIME_SECONDS);
    setResult(null);
    setCurrentStep('preparing');
  };

  // Resume saved test
  const handleResumeTest = () => {
    setCurrentStep('quiz');
  };

  // Select an answer
  const handleSelectAnswer = (questionId: number, answerKey: 'A' | 'B' | 'C' | 'D') => {
    const updated = { ...answers, [questionId]: answerKey };
    setAnswers(updated);
    saveAnswersToStorage(updated);
  };

  // Navigation handlers
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      saveCurrentQuestionIdx(nextIdx);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      saveCurrentQuestionIdx(prevIdx);
    }
  };

  const handleJumpTo = (idx: number) => {
    setCurrentIndex(idx);
    saveCurrentQuestionIdx(idx);
  };

  // Submit test
  const handleSubmitQuiz = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const timeSpent = TOTAL_QUIZ_TIME_SECONDS - timeRemaining;
    const computedResult = calculateTestResult(questions, answers, timeSpent);
    setResult(computedResult);
    saveResultToStorage(computedResult);
    setCurrentStep('result');
  };

  // Retake test
  const handleRetake = () => {
    if (confirm('Ulangi tes dari awal? Hasil dan jawaban saat ini akan direset.')) {
      clearQuizProgress();
      setAnswers({});
      setCurrentIndex(0);
      setTimeRemaining(TOTAL_QUIZ_TIME_SECONDS);
      setResult(null);
      setCurrentStep('intro');
    }
  };

  const savedAnswerCount = Object.values(answers).filter(Boolean).length;
  const hasSavedProgress = savedAnswerCount > 0 && currentStep === 'intro' && !result;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50/50 to-white dark:from-[#130b20] dark:via-[#1c122e] dark:to-[#10071c] text-slate-900 dark:text-slate-100 transition-colors flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenPhoneConfig={() => setShowPhoneConfigModal(true)}
        currentStep={currentStep === 'preparing' ? 'intro' : currentStep}
        timeRemaining={timeRemaining}
        currentQ={currentIndex + 1}
        totalQ={questions.length}
      />

      {/* Main Content Router */}
      <main className="flex-1 pb-12">
        {currentStep === 'intro' && (
          <OpeningView
            onStart={handleStartNewTest}
            onResume={hasSavedProgress ? handleResumeTest : undefined}
            hasSavedProgress={hasSavedProgress}
            savedAnswerCount={savedAnswerCount}
          />
        )}

        {currentStep === 'preparing' && (
          <PreparationModal
            onComplete={() => {
              setCurrentStep('quiz');
            }}
          />
        )}

        {currentStep === 'quiz' && (
          <QuizView
            questions={questions}
            currentIndex={currentIndex}
            answers={answers}
            timeRemaining={timeRemaining}
            onSelectAnswer={handleSelectAnswer}
            onNext={handleNext}
            onPrev={handlePrev}
            onJumpTo={handleJumpTo}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {currentStep === 'result' && result && (
          <ResultView
            result={result}
            onOpenLetter={() => setCurrentStep('letter')}
            onOpenReview={() => setShowReviewModal(true)}
            onRetake={handleRetake}
          />
        )}

        {currentStep === 'letter' && result && (
          <LetterToRaz
            result={result}
            onBackToResult={() => setCurrentStep('result')}
            onOpenPhoneConfig={() => setShowPhoneConfigModal(true)}
          />
        )}
      </main>

      {/* Answer Review Modal */}
      {showReviewModal && (
        <ReviewModal
          questions={questions}
          answers={answers}
          onClose={() => setShowReviewModal(false)}
        />
      )}

      {/* WhatsApp Destination Phone Config Modal */}
      {showPhoneConfigModal && (
        <PhoneConfigModal
          onClose={() => setShowPhoneConfigModal(false)}
          onSaved={() => {}}
        />
      )}

      {/* Minimalistic Elegant Footer */}
      <footer className="w-full border-t border-purple-200/50 dark:border-purple-800/30 py-4 px-4 text-center text-xs text-purple-900/60 dark:text-purple-300/60">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>R.A.Z Intelligence Challenge · Edisi Personal Khusus Raz</span>
          <span className="font-mono text-[11px]">30 Soal Terverifikasi · 6 Kategori</span>
        </div>
      </footer>
    </div>
  );
}
