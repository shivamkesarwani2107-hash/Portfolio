import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose, duration = 3500 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />,
    info: <Info className="w-4 h-4 text-cyan-400 shrink-0" />,
  };

  const borderColors = {
    success: 'border-emerald-500/30 bg-dark-900/95 text-slate-100 shadow-emerald-500/10',
    error: 'border-rose-500/30 bg-dark-900/95 text-slate-100 shadow-rose-500/10',
    info: 'border-cyan-500/30 bg-dark-900/95 text-slate-100 shadow-cyan-500/10',
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 animate-bounce-in max-w-sm ml-auto">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-xl ${
          borderColors[type] || borderColors.info
        }`}
      >
        {icons[type] || icons.info}
        <p className="text-sm font-medium pr-2">{message}</p>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-200 transition-colors ml-auto p-1 rounded-md hover:bg-slate-800"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
