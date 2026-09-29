'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070D1E]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-slate-100 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-blue-600 to-amber-400 p-[1.5px] flex items-center justify-center shadow-md">
              <div className="w-full h-full bg-[#0A1128] rounded-[6px] flex items-center justify-center font-bold text-xs text-amber-400">
                AM
              </div>
            </div>
            <span className="font-semibold text-base sm:text-lg tracking-tight">
              Agudike Maryrose
            </span>
          </a>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  activeSection === link.id
                    ? 'text-amber-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-amber-400 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg shadow-sm shadow-purple-900/30 transition-all duration-200 hover:shadow-purple-500/20 active:scale-[0.98] whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1128]/98 backdrop-blur-xl border-b border-slate-800 px-6 py-6 transition-all shadow-2xl">
          <div className="flex flex-col gap-4">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Menu Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-base font-medium transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'text-amber-400 font-semibold'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                )}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md"
              >
                <span>Contact Maryrose</span>
                <ArrowUpRight className="w-4 h-4 text-amber-300" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
