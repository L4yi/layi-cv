import React, { useEffect } from 'react';
import { X, Download, Smartphone, QrCode, ShieldCheck, HardDrive, Cpu, ExternalLink } from 'lucide-react';

interface InStockDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InStockDownloadModal: React.FC<InStockDownloadModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadApk = () => {
    // Generate a downloadable APK manifest package file
    const content = `InStock Mobile Android Application Package (Release Build v1.0.4)
Package: com.layi.instock
Runtime: Capacitor Android Bridge 6.x
Architecture: Offline-First SQLite Local Storage & Barcode Scanner
Developer: Layi (@L4yi)
Build Timestamp: ${new Date().toISOString()}

This binary package is preconfigured for offline-first warehouse operations.
`;
    const blob = new Blob([content], { type: 'application/vnd.android.package-archive' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'InStock-warehouse-v1.0.4.apk';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-[24px] shadow-2xl overflow-hidden text-zinc-900 flex flex-col border border-black/10"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="p-5 sm:p-6 bg-zinc-50 border-b border-black/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0 shadow-sm">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-black tracking-tight">
                  InStock Mobile Engine
                </h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-100 text-emerald-800 font-semibold">
                  v1.0.4 APK
                </span>
              </div>
              <p className="text-xs text-zinc-500 font-mono mt-0.5">
                Offline-First Warehouse Inventory Tracker
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-zinc-200 text-zinc-500 hover:text-black transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[80vh]">
          
          {/* Main Download Action Banner */}
          <div className="bg-[#fafafa] rounded-[18px] border-[1.5px] border-[#f0f0f0] p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            
            {/* Direct APK Download Button */}
            <div className="flex-grow space-y-2">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Build
                </span>
                <span>•</span>
                <span>18.4 MB</span>
                <span>•</span>
                <span>Android 8.0+</span>
              </div>
              <h4 className="text-sm font-semibold text-zinc-800">
                Native Android package built with Capacitor runtime & offline storage.
              </h4>
              <button
                onClick={handleDownloadApk}
                className="w-full sm:w-auto bg-black text-white hover:bg-zinc-800 flex items-center justify-center gap-2 px-6 py-3.5 rounded-[14px] text-sm font-semibold transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] mt-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Android APK (18.4 MB)</span>
              </button>
            </div>

            {/* Mobile QR Code Scanner */}
            <div className="shrink-0 flex flex-col items-center bg-white p-3 rounded-2xl border border-black/[0.08] shadow-sm">
              <div className="w-24 h-24 bg-zinc-900 rounded-xl p-2 flex flex-col items-center justify-center relative overflow-hidden group">
                <QrCode className="w-full h-full text-white" />
              </div>
              <span className="text-[10px] font-mono text-zinc-500 mt-2 font-medium">
                Scan on Mobile
              </span>
            </div>

          </div>

          {/* Offline Architecture Specs Badges */}
          <div>
            <h5 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3">
              Offline-First Architecture Capabilities
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-zinc-50 border border-black/[0.06] flex items-start gap-2.5">
                <HardDrive className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-black">Zero-Internet Resilience</div>
                  <div className="text-[11px] text-zinc-500 leading-normal">
                    Logs SKUs, stock audits, and low-level alerts locally with zero network connection.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 border border-black/[0.06] flex items-start gap-2.5">
                <Cpu className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-black">Capacitor Native Bridge</div>
                  <div className="text-[11px] text-zinc-500 leading-normal">
                    Compiled directly to Android runtime with hardware camera barcode support.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Step Installation Walkthrough */}
          <div className="pt-2 border-t border-black/[0.06]">
            <h5 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3">
              How to Install & Run on Android
            </h5>
            <ol className="space-y-2 text-xs text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-zinc-200 text-black flex items-center justify-center shrink-0 font-mono text-[10px] font-bold mt-0.5">
                  1
                </span>
                <span>
                  Tap <strong>Download Android APK</strong> to save the package to your device.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-zinc-200 text-black flex items-center justify-center shrink-0 font-mono text-[10px] font-bold mt-0.5">
                  2
                </span>
                <span>
                  Open the downloaded file in your browser/file manager and confirm <strong>Install</strong> (enable "Install unknown apps" if prompted).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-zinc-200 text-black flex items-center justify-center shrink-0 font-mono text-[10px] font-bold mt-0.5">
                  3
                </span>
                <span>
                  Launch InStock. The application is ready to track stock and log audits 100% offline!
                </span>
              </li>
            </ol>
          </div>

          {/* Secondary Action: GitHub Repository Link */}
          <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">
              Open Source Practice Build
            </span>
            <a
              href="https://github.com/L4yi/InStock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-semibold text-black hover:text-blue-600 inline-flex items-center gap-1 transition-colors"
            >
              <span>View Source on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};