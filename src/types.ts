export type Category = 
  | 'Matematika'
  | 'Ekonomi'
  | 'Logika'
  | 'IPA'
  | 'Agama Islam'
  | 'Pengetahuan Kristen';

export type CharacterExpression = 
  | 'welcome'
  | 'thinking'
  | 'confused'
  | 'happy'
  | 'sad'
  | 'celebration';

export interface Question {
  id: number;
  category: Category;
  question: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'Menengah' | 'Sulit';
}

export interface UserAnswerRecord {
  [questionId: number]: 'A' | 'B' | 'C' | 'D' | null;
}

export interface CategoryScoreSummary {
  category: Category;
  total: number;
  correct: number;
  percentage: number;
}

export interface TestResult {
  rawScore: number; // 0-100
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  iqEstimate: number; // e.g. 85 - 145
  tierTitle: string;
  critique: string;
  learningTips: string[];
  categoryBreakdown: CategoryScoreSummary[];
  timeSpentSeconds: number;
}
