import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Send, 
  ArrowLeft, 
  Mail, 
  MessageCircle, 
  Edit3, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { TestResult } from '../types';
import { RazCharacter } from './RazCharacter';
import { loadWhatsAppPhone, loadLetterNote, saveLetterNote } from '../utils/storage';
import { sound } from '../utils/audio';

interface LetterToRazProps {
  result: TestResult;
  onBackToResult: () => void;
  onOpenPhoneConfig: () => void;
}

export const LetterToRaz: React.FC<LetterToRazProps> = ({
  result,
  onBackToResult,
  onOpenPhoneConfig,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [personalNote, setPersonalNote] = useState(loadLetterNote());
  const [noteError, setNoteError] = useState('');
  const [phone] = useState(loadWhatsAppPhone());

  const handleOpenEnvelope = () => {
    sound.playLetterOpen();
    setIsOpen(true);
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setPersonalNote(val);
    saveLetterNote(val);
    if (val.trim().length >= 5) {
      setNoteError('');
    }
  };

  const handleSendToWhatsApp = () => {
    if (!personalNote.trim() || personalNote.trim().length < 5) {
      setNoteError('Catatan atau pesan tambahan wajib diisi minimal 5 karakter sebelum dikirim ya, Raz! ♡');
      sound.playPop();
      return;
    }

    sound.playNext();

    // Prepare polite, cute, and detailed formatted message for WhatsApp
    const message = `✨ *LAPORAN RESMI R.A.Z INTELLIGENCE CHALLENGE* ✨
━━━━━━━━━━━━━━━━━━━━━
💌 *Kepada:* Raz
🏆 *Skor Akhir:* ${result.rawScore} / 100
🎯 *Predikat:* ${result.tierTitle}
🧠 *Estimasi IQ:* ±${result.iqEstimate}
📊 *Akurasi:* ${result.correctCount} Benar · ${result.wrongCount} Salah (${Math.round((result.correctCount / 30) * 100)}%)

*Analisis Kategori:*
${result.categoryBreakdown
  .map((c) => `• ${c.category}: ${c.correct}/${c.total} (${c.percentage}%)`)
  .join('\n')}

💬 *Kritik & Evaluasi:*
"${result.critique}"

💡 *Saran Belajar:*
${result.learningTips.map((tip) => `• ${tip}`).join('\n')}

📝 *Catatan Khusus dari Pengisi:*
"${personalNote.trim()}"

━━━━━━━━━━━━━━━━━━━━━
_Dikirim melalui R.A.Z Intelligence Challenge Web App_ ♡`;

    const targetUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Top Back Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => {
            sound.playPop();
            onBackToResult();
          }}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300 hover:bg-purple-100/60 dark:hover:bg-purple-900/40 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Hasil Tes</span>
        </button>

        <button
          onClick={() => {
            sound.playPop();
            onOpenPhoneConfig();
          }}
          className="text-xs text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
        >
          <span>Nomor Tujuan: +{phone}</span>
          <Edit3 className="w-3 h-3" />
        </button>
      </div>

      {!isOpen ? (
        /* Envelope Unsealed Interactive View */
        <div className="flex flex-col items-center text-center py-10 animate-fadeIn">
          <div className="mb-4">
            <RazCharacter
              expression="welcome"
              size="md"
              showSpeechBubble
              speechText="Ada surat spesial hasil evaluasi untukmu, Raz! Buka yuk~ ♡"
            />
          </div>

          <div
            onClick={handleOpenEnvelope}
            className="group relative cursor-pointer w-72 sm:w-80 h-52 rounded-3xl bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 dark:from-purple-900 dark:via-fuchsia-950 dark:to-purple-900 p-1 shadow-2xl border-2 border-white/80 dark:border-purple-600/50 hover:scale-105 transition-all duration-300 glow-purple"
          >
            {/* Envelope flap triangular fold */}
            <div className="w-full h-full rounded-[22px] bg-white/70 dark:bg-purple-950/80 backdrop-blur-md flex flex-col items-center justify-center relative overflow-hidden">
              {/* Envelope flap lines */}
              <div className="absolute top-0 left-0 right-0 h-24 border-b-2 border-dashed border-purple-300 dark:border-purple-700/60 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white shadow-lg animate-pulse">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
              </div>

              <div className="mt-20 flex flex-col items-center">
                <span className="text-sm font-bold text-purple-950 dark:text-purple-100 tracking-wide">
                  Surat Evaluasi untuk Raz
                </span>
                <span className="text-[11px] text-pink-600 dark:text-pink-400 font-medium mt-1">
                  Klik untuk membuka amplop ✉️
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Opened Aesthetic Letter View */
        <div className="animate-fadeIn">
          {/* Letter Paper Container with Pastel Parchment Theme */}
          <div className="relative rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-[#fdfbf7] via-[#fff9f4] to-[#fcf4ff] dark:from-slate-900 dark:via-purple-950/80 dark:to-slate-900 text-slate-800 dark:text-slate-100 overflow-hidden">
            {/* Cute Decorative Floating Background Elements */}
            <div className="absolute top-4 right-4 text-pink-300/40 dark:text-pink-500/20 pointer-events-none">
              <Heart className="w-16 h-16 fill-current" />
            </div>
            <div className="absolute bottom-6 left-6 text-purple-300/30 dark:text-purple-500/20 pointer-events-none">
              <Sparkles className="w-20 h-20" />
            </div>

            {/* Letter Header */}
            <div className="border-b border-purple-200/70 dark:border-purple-800/70 pb-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 p-0.5 shadow-md">
                  <div className="w-full h-full bg-white dark:bg-purple-950 rounded-[14px] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pink-500" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-purple-950 dark:text-white">
                    Surat Evaluasi Resmi
                  </h2>
                  <p className="text-xs text-purple-700 dark:text-purple-300 font-medium">
                    Ditujukan khusus untuk: <strong>Raz ♡</strong>
                  </p>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-700 text-xs font-mono font-bold text-purple-800 dark:text-purple-200">
                Nilai Akhir: {result.rawScore}/100
              </div>
            </div>

            {/* Letter Body Prose */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
              <p>
                <em>Hai Raz,</em>
              </p>
              <p>
                Terima kasih sudah menyelesaikan 30 soal tantangan di <strong>R.A.Z Intelligence Challenge</strong>! Setelah seluruh jawabanmu dinilai secara otomatis dengan kunci jawaban ilmiah, berikut adalah rangkuman resmi kemampuanmu:
              </p>

              {/* Highlights Box */}
              <div className="p-4 rounded-2xl bg-purple-50/80 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/60 my-4 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <strong className="text-purple-900 dark:text-purple-300">Predikat Kecerdasan:</strong>
                  <span>{result.tierTitle} (IQ ±{result.iqEstimate})</span>
                </div>
                <div className="flex items-center gap-2">
                  <strong className="text-purple-900 dark:text-purple-300">Statistik Jawaban:</strong>
                  <span>{result.correctCount} Benar, {result.wrongCount} Salah dari 30 Soal</span>
                </div>
                <div className="pt-2 border-t border-purple-200/60 dark:border-purple-800/60">
                  <strong className="text-purple-900 dark:text-purple-300">Catatan Evaluator:</strong>
                  <p className="italic text-purple-950 dark:text-purple-200 mt-0.5">
                    "{result.critique}"
                  </p>
                </div>
              </div>

              {/* Learning Recommendations */}
              <div>
                <strong className="text-purple-900 dark:text-purple-300 text-xs uppercase tracking-wider block mb-1">
                  Saran Pengembangan untuk Raz:
                </strong>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {result.learningTips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>

              {/* Mandatory User Personal Note Field */}
              <div className="pt-4 border-t border-purple-200/70 dark:border-purple-800/70">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-bold text-purple-950 dark:text-purple-200 flex items-center gap-1.5">
                    <Edit3 className="w-4 h-4 text-pink-500" />
                    <span>Tulis Pesan / Catatan Tambahan (Wajib Diisi):</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400">
                    Min. 5 karakter
                  </span>
                </div>

                <textarea
                  value={personalNote}
                  onChange={handleNoteChange}
                  rows={4}
                  placeholder="Tulis pesan atau kesanmu tentang tes ini untuk dikirim bersama laporan ke WhatsApp... (Contoh: 'Soalnya seru dan lumayan menantang! Di bagian hitungan agak pusing tapi aku bisa dapet skor ini hihi ♡')"
                  className="w-full p-3.5 rounded-2xl border border-purple-200 dark:border-purple-700 bg-white/90 dark:bg-purple-950/60 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 leading-relaxed resize-none"
                />

                {noteError && (
                  <p className="mt-1 text-xs font-semibold text-rose-600 dark:text-rose-400 animate-fadeIn">
                    {noteError}
                  </p>
                )}
              </div>

              {/* Salutation & Signature */}
              <div className="pt-4 flex flex-col items-end text-right">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Salam hangat penuh semangat,
                </p>
                <div className="mt-1 font-bold text-sm text-purple-900 dark:text-purple-200 font-serif italic">
                  R.A.Z Intelligence Team ♡
                </div>
              </div>
            </div>

            {/* Action Row: Send to WhatsApp */}
            <div className="mt-8 pt-6 border-t border-purple-200 dark:border-purple-800/70 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-left">
                Tombol akan membuka aplikasi WhatsApp dengan pesan yang sudah terisi otomatis. Anda dapat meninjau teks sebelum menekan kirim.
              </div>

              <button
                onClick={handleSendToWhatsApp}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-green-500 hover:from-emerald-500 hover:to-teal-400 text-white text-sm font-bold shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Kirim ke WhatsApp 💬</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
