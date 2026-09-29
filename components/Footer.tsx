import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', note: 'Update with profile link', href: 'https://linkedin.com' },
    { label: 'GitHub', note: 'Update with repository link', href: 'https://github.com' },
    { label: 'Behance / Figma', note: 'Update with design link', href: 'https://behance.net' },
    { label: 'Twitter / X', note: 'Update with handle link', href: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-[#050A17] border-t border-slate-800 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-blue-600 to-amber-400 p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-[#0A1128] rounded-[6px] flex items-center justify-center font-bold text-xs text-amber-400">
                  AM
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Agudike Uchechukwu Maryrose
              </span>
            </div>

            <p className="text-sm text-amber-400/90 font-medium">
              Technology • Creativity • Digital Innovation
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Computer Science graduate from Enugu State University of Science and Technology (ESUT). Passionate about building functional, user-centered digital solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-amber-300 transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels Placeholders */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Connect & Socials
            </div>
            <p className="text-xs text-slate-400">
              Social placeholders ready for Maryrose&apos;s direct profiles:
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {socialLinks.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#0D1733] border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  {soc.label}
                </a>
              ))}
            </div>

            <div className="pt-2 text-xs text-slate-400">
              <div>New Haven, Enugu State, Nigeria</div>
              <div className="mt-0.5">agudikeuchechukwu@gmail.com · 09030763243</div>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 Agudike Uchechukwu Maryrose. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with Modern Web Standards</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
