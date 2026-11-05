import React, { useState } from 'react';
import { X, Phone, Check, RefreshCw } from 'lucide-react';
import { DEFAULT_WHATSAPP_PHONE, loadWhatsAppPhone, saveWhatsAppPhone } from '../utils/storage';
import { sound } from '../utils/audio';

interface PhoneConfigModalProps {
  onClose: () => void;
  onSaved: (newPhone: string) => void;
}

export const PhoneConfigModal: React.FC<PhoneConfigModalProps> = ({ onClose, onSaved }) => {
  const [phone, setPhone] = useState(loadWhatsAppPhone());
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = () => {
    sound.playPop();
    const sanitized = phone.replace(/\D/g, '');
    if (sanitized.length < 8) {
      alert('Mohon masukkan nomor WhatsApp yang valid (contoh: 6281234567890)');
      return;
    }
    saveWhatsAppPhone(sanitized);
    setSavedSuccess(true);
    onSaved(sanitized);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  const handleReset = () => {
    sound.playPop();
    setPhone(DEFAULT_WHATSAPP_PHONE);
    saveWhatsAppPhone(DEFAULT_WHATSAPP_PHONE);
    onSaved(DEFAULT_WHATSAPP_PHONE);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/70 backdrop-blur-md animate-fadeIn">
      <div className="max-w-md w-full glass-card rounded-3xl p-6 sm:p-7 shadow-2xl border border-purple-300 dark:border-purple-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-900/60 flex items-center justify-center text-purple-700 dark:text-purple-300">
              <Phone className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Nomor WhatsApp Tujuan
            </h3>
          </div>
          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-purple-100/60 dark:hover:bg-purple-900/40"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Nomor WhatsApp ini adalah nomor tujuan pengiriman laporan hasil tes Raz. Gunakan kode negara internasional (misal <strong>628...</strong> untuk Indonesia tanpa tanda +).
        </p>

        <div className="space-y-3 mb-6">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
            Nomor WhatsApp Penerima
          </label>
          <div className="relative">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Contoh: 6281234567890"
              className="w-full px-4 py-2.5 rounded-xl border border-purple-200 dark:border-purple-700 bg-white dark:bg-purple-950/50 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            Nomor bawaan: {DEFAULT_WHATSAPP_PHONE}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 pt-3 border-t border-purple-100 dark:border-purple-900/40">
          <button
            onClick={handleReset}
            className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-purple-600 flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Default</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sound.playPop();
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 transition-colors"
            >
              Batal
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition-all"
            >
              {savedSuccess ? <Check className="w-3.5 h-3.5" /> : null}
              <span>{savedSuccess ? 'Tersimpan!' : 'Simpan'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
