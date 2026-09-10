import React, { useState } from 'react';
import { FileCode, Download, Copy, Check, ExternalLink, X } from 'lucide-react';

interface HtmlExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HtmlExportModal: React.FC<HtmlExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      const res = await fetch('/eversmile-dental.html');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/eversmile-dental.html';
    a.download = 'eversmile-dental.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-6">
        
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
              <FileCode className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Self-Contained HTML Output
              </h3>
              <p className="text-xs text-slate-500">
                Standalone single-file HTML version with embedded Tailwind CDN & JS
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
          <p>
            As requested, we have compiled a <strong>100% self-contained single-file HTML version</strong> of the EverSmile Dental website in <code className="font-mono text-sky-700 bg-white px-1.5 py-0.5 rounded border border-slate-200">public/eversmile-dental.html</code>.
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Zero external build dependencies (uses Tailwind CDN & Vanilla JS)</li>
            <li>Embedded responsive layouts for mobile, tablet, and desktop</li>
            <li>Functional appointment booking request handler with confirmation state</li>
            <li>Interactive customer assistance AI chatbot widget</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download .html</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied Source!' : 'Copy Source'}</span>
          </button>

          <a
            href="/eversmile-dental.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-slate-500" />
            <span>Open in Tab</span>
          </a>
        </div>

        <div className="text-center pt-1">
          <button
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-800 font-medium cursor-pointer"
          >
            Close Dialog
          </button>
        </div>

      </div>
    </div>
  );
};
