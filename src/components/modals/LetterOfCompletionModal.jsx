import React, { useEffect } from 'react';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  Award,
  Building,
  CheckCircle2,
  Calendar,
  Mail,
  Phone,
  Globe,
  FileCheck
} from 'lucide-react';
import { PERSONAL_INFO, COMPLETION_LETTER } from '../../data/portfolioData';
import Button from '../common/Button';
import Badge from '../common/Badge';

export default function LetterOfCompletionModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto w-full max-w-full">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-2 sm:my-4 max-h-[92vh] flex flex-col">
        {/* Modal Action Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-dark-850 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <div className="truncate">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display truncate">
                Letter of Completion — {COMPLETION_LETTER.issuer}
              </h3>
            </div>
            <Badge variant="emerald" size="sm" className="hidden sm:inline-flex">
              Verified
            </Badge>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="primary"
              size="sm"
              href={COMPLETION_LETTER.pdfUrl}
              target="_blank"
              icon={Download}
              iconPosition="left"
            >
              Download PDF
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handlePrint}
              icon={Printer}
              iconPosition="left"
              className="hidden sm:inline-flex"
            >
              Print
            </Button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-dark-800 dark:hover:bg-dark-700 border border-slate-200 dark:border-slate-700/80 rounded-full transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Letter Sheet */}
        <div className="p-4 sm:p-10 overflow-y-auto custom-scrollbar space-y-6 sm:space-y-8 bg-slate-50/70 dark:bg-dark-950/70 font-sans">
          {/* Certificate Letter Container */}
          <div className="relative bg-white dark:bg-gradient-to-b dark:from-dark-900 dark:via-dark-850 dark:to-dark-900 border border-slate-200 dark:border-slate-700/90 rounded-2xl p-6 sm:p-10 shadow-xl space-y-8">
            {/* Top Decorative Header Accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-500 rounded-full" />

            {/* Letterhead Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4" />
                  Official Experience Document
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
                  LETTER OF COMPLETION
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Internship Tenure: <span className="text-slate-800 dark:text-slate-200 font-medium">20.2.2026 – 20.08.2026 (Feb 2026 – Aug 2026)</span>
                </p>
              </div>

              <div className="text-right">
                <div className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display flex items-center justify-end gap-1.5">
                  <Building className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Devlupers</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Software & IT Solutions
                </div>
                <a 
                  href={COMPLETION_LETTER.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 mt-1 font-medium"
                >
                  devlupers.com <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Recipient Block */}
            <div className="space-y-1">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Awarded To</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                {COMPLETION_LETTER.recipient}
              </h2>
              <div className="inline-flex items-center gap-2 pt-1">
                <Badge variant="blue" size="sm">
                  Role: {COMPLETION_LETTER.role}
                </Badge>
                <Badge variant="gray" size="sm" icon={Calendar}>
                  {COMPLETION_LETTER.period}
                </Badge>
              </div>
            </div>

            {/* Letter Content */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                This is to certify that <strong className="text-slate-900 dark:text-white font-semibold">{COMPLETION_LETTER.recipient}</strong> has successfully completed his internship with <strong className="text-slate-900 dark:text-white font-semibold">Devlupers</strong>. He served as a <strong className="text-emerald-700 dark:text-emerald-300 font-semibold">“MERN Stack Intern”</strong> from <strong className="text-slate-900 dark:text-white font-semibold">20.2.2026 to 20.08.2026</strong>.
              </p>

              <p>
                During his tenure, Shivam demonstrated commendable eagerness to learn, understand, and adapt to new technologies and assigned responsibilities. He worked diligently on various projects involving MERN stack development, complex business logic, API development, database management, and frontend/backend integration.
              </p>

              <p>
                His commitment to acquiring new skills and knowledge, along with his ability to effectively contribute to development tasks, has positioned him well for future professional endeavors. Throughout the internship, he exhibited the qualities of a dedicated, responsible, and promising professional.
              </p>

              <p>
                In recognition of his performance and contribution, Shivam is always welcome to work with Devlupers again in the future. This reflects the dedication, professionalism, and value he brought to our team during his internship.
              </p>

              <p>
                We extend our best wishes to Shivam Kesarwani for his future endeavors and continued success.
              </p>
            </div>

            {/* Signatory & Verification Block */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
              {/* Sign-off */}
              <div className="space-y-3">
                <div className="text-xs text-slate-500 dark:text-slate-400">Sincerely,</div>
                <div className="space-y-0.5">
                  <div className="font-serif italic text-base sm:text-lg text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide">
                    Shivam Prajapati
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Signature & Seal of Devlupers
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {COMPLETION_LETTER.signatory}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {COMPLETION_LETTER.designation}
                  </div>
                </div>
              </div>

              {/* Official Verification Details Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-slate-800/90 space-y-2 text-xs">
                <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 pb-1 border-b border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  Official Company Verification
                </div>
                <div className="space-y-1.5 text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <a href={`tel:${COMPLETION_LETTER.phone}`} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      {COMPLETION_LETTER.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <a href={`mailto:${COMPLETION_LETTER.contactEmail}`} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      {COMPLETION_LETTER.contactEmail} / {COMPLETION_LETTER.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <a href={COMPLETION_LETTER.website} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      {COMPLETION_LETTER.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-dark-850 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="hidden sm:inline">Official credential verified by Devlupers management.</span>
            <span className="sm:hidden">Official Devlupers Document</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              href={COMPLETION_LETTER.pdfUrl}
              target="_blank"
              icon={ExternalLink}
              iconPosition="right"
            >
              Open PDF
            </Button>
            <Button variant="secondary" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
