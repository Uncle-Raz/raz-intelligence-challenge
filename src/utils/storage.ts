import { UserAnswerRecord, TestResult } from '../types';

const STORAGE_KEY_ANSWERS = 'raz_iq_answers_v1';
const STORAGE_KEY_TIME = 'raz_iq_time_v1';
const STORAGE_KEY_QUESTION_IDX = 'raz_iq_q_idx_v1';
const STORAGE_KEY_RESULT = 'raz_iq_result_v1';
const STORAGE_KEY_PHONE = 'raz_iq_wa_phone_v1';
const STORAGE_KEY_LETTER_NOTE = 'raz_iq_letter_note_v1';
const STORAGE_KEY_THEME = 'raz_iq_theme_v1';

// Default WhatsApp phone number of the website owner (easily configurable)
export const DEFAULT_WHATSAPP_PHONE = '6285210102030';

export function saveAnswersToStorage(answers: UserAnswerRecord) {
  try {
    localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(answers));
  } catch {
    // Ignore storage quota
  }
}

export function loadAnswersFromStorage(): UserAnswerRecord {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ANSWERS);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveRemainingTime(seconds: number) {
  try {
    localStorage.setItem(STORAGE_KEY_TIME, seconds.toString());
  } catch {
    // Ignore
  }
}

export function loadRemainingTime(defaultSeconds: number = 3600): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_TIME);
    if (!raw) return defaultSeconds;
    const parsed = parseInt(raw, 10);
    return isNaN(parsed) || parsed <= 0 ? defaultSeconds : parsed;
  } catch {
    return defaultSeconds;
  }
}

export function saveCurrentQuestionIdx(idx: number) {
  try {
    localStorage.setItem(STORAGE_KEY_QUESTION_IDX, idx.toString());
  } catch {
    // Ignore
  }
}

export function loadCurrentQuestionIdx(): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_QUESTION_IDX);
    if (!raw) return 0;
    const parsed = parseInt(raw, 10);
    return isNaN(parsed) || parsed < 0 ? 0 : parsed;
  } catch {
    return 0;
  }
}

export function saveResultToStorage(result: TestResult | null) {
  try {
    if (result) {
      localStorage.setItem(STORAGE_KEY_RESULT, JSON.stringify(result));
    } else {
      localStorage.removeItem(STORAGE_KEY_RESULT);
    }
  } catch {
    // Ignore
  }
}

export function loadResultFromStorage(): TestResult | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_RESULT);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveWhatsAppPhone(phone: string) {
  try {
    localStorage.setItem(STORAGE_KEY_PHONE, phone.replace(/\D/g, ''));
  } catch {
    // Ignore
  }
}

export function loadWhatsAppPhone(): string {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PHONE);
    return raw && raw.trim().length >= 8 ? raw.trim() : DEFAULT_WHATSAPP_PHONE;
  } catch {
    return DEFAULT_WHATSAPP_PHONE;
  }
}

export function saveLetterNote(note: string) {
  try {
    localStorage.setItem(STORAGE_KEY_LETTER_NOTE, note);
  } catch {
    // Ignore
  }
}

export function loadLetterNote(): string {
  try {
    return localStorage.getItem(STORAGE_KEY_LETTER_NOTE) || '';
  } catch {
    return '';
  }
}

export function saveThemePreference(isDark: boolean) {
  try {
    localStorage.setItem(STORAGE_KEY_THEME, isDark ? 'dark' : 'light');
  } catch {
    // Ignore
  }
}

export function loadThemePreference(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_THEME);
    if (raw) return raw === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch {
    return false;
  }
}

export function clearQuizProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY_ANSWERS);
    localStorage.removeItem(STORAGE_KEY_TIME);
    localStorage.removeItem(STORAGE_KEY_QUESTION_IDX);
    localStorage.removeItem(STORAGE_KEY_RESULT);
    localStorage.removeItem(STORAGE_KEY_LETTER_NOTE);
  } catch {
    // Ignore
  }
}
