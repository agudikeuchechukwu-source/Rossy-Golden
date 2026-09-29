'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import WhatICanOffer from '@/components/WhatICanOffer';
import Approach from '@/components/Approach';
import Portfolio from '@/components/Portfolio';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StandaloneCodeModal from '@/components/StandaloneCodeModal';
import { FileCode, Sparkles } from 'lucide-react';

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(`Inquiry regarding ${serviceName} Service`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070D1E] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Home / Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Education Section */}
        <Education />

        {/* 4. Professional Skills Section */}
        <Skills />

        {/* 5. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 6. What I Can Offer Section */}
        <WhatICanOffer />

        {/* 7. My Approach Section */}
        <Approach />

        {/* 8. Portfolio / Projects Section */}
        <Portfolio />

        {/* 9. Why Work With Me Section */}
        <WhyWorkWithMe />

        {/* 10. Contact Section */}
        <Contact initialSubject={selectedService} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating Standalone Source Code Button for Maryrose */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsCodeModalOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0D1733]/90 hover:bg-[#132047] border border-amber-400/40 text-amber-300 text-xs font-semibold shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          title="View Standalone HTML, CSS, JS, PHP & MySQL Code"
        >
          <FileCode className="w-4 h-4 text-amber-400 group-hover:rotate-6 transition-transform" />
          <span className="hidden sm:inline">HTML/PHP Source Package</span>
        </button>
      </div>

      {/* Modal for viewing standalone code packages */}
      <StandaloneCodeModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
      />
    </div>
  );
}
