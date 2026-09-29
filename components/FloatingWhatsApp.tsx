'use client';

import React, { useState } from 'react';
import { MessageCircle, Share2, ArrowUpRight, Check, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [copiedShareLink, setCopiedShareLink] = useState(false);

  // International format for Nigeria: +234 903 076 3243 (remove leading 0)
  const whatsappNumber = '2349030763243';
  const defaultChatMessage = encodeURIComponent(
    "Hello Agudike Maryrose! I visited your portfolio website and would like to discuss a project / work opportunity."
  );
  const whatsappChatUrl = `https://wa.me/${whatsappNumber}?text=${defaultChatMessage}`;

  // Portfolio sharing via WhatsApp
  const shareText = encodeURIComponent(
    "Check out Agudike Uchechukwu Maryrose's Professional Portfolio — Computer Science Graduate, UI/UX Designer & Web Developer: "
  );
  
  const handleShareOnWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://maryrose-portfolio.local';
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${shareText}${encodeURIComponent(currentUrl)}`;
    window.open(whatsappShareUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShareLink(true);
      setTimeout(() => setCopiedShareLink(false), 2000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
      {/* Expanded Quick Options Menu */}
      {showTooltip && (
        <div className="bg-[#0D1733]/95 border border-emerald-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-xl max-w-xs w-72 mb-1 animate-fade-in text-slate-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold text-white tracking-wide">
                Chat or Share via WhatsApp
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close WhatsApp options"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
            Connect directly with <strong className="text-white">Maryrose</strong> (+234 903 076 3243) or share this portfolio with your network.
          </p>

          <div className="flex flex-col gap-2">
            {/* Primary Action: Direct WhatsApp Chat */}
            <a
              href={whatsappChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold text-xs transition-all shadow-md active:scale-[0.98]"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat with Maryrose</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Secondary Action: Share portfolio link via WhatsApp */}
            <button
              type="button"
              onClick={handleShareOnWhatsApp}
              className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium border border-slate-700 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Share Portfolio on WhatsApp</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Tertiary: Copy portfolio URL */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-[11px] text-slate-400 hover:text-emerald-300 transition-colors"
            >
              {copiedShareLink ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Link copied to clipboard!</span>
                </>
              ) : (
                <span>Copy Page URL</span>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Main Floating WhatsApp Bubble */}
      <div className="flex items-center gap-2.5">
        {/* Subtle hover prompt label */}
        <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-[#0D1733]/90 border border-emerald-500/30 text-[11px] font-medium text-emerald-300 backdrop-blur-md shadow-lg">
          Chat on WhatsApp
        </span>

        {/* Floating Bubble Button */}
        <div className="relative group">
          <a
            href={whatsappChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            aria-label="Chat with Agudike Uchechukwu Maryrose on WhatsApp at 09030763243"
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-teal-400 flex items-center justify-center text-white shadow-xl shadow-emerald-950/50 hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20 relative"
          >
            {/* Custom high-fidelity WhatsApp SVG Icon */}
            <svg
              className="w-7 h-7 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            {/* Active online pulse ring */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-[#070D1E]" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
