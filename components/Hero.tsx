'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, Sparkles, MapPin, GraduationCap, CheckCircle2, Send, Layout, Layers, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Tech Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle radial gradients */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-700/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-950/40 rounded-full blur-3xl" />

        {/* Minimal geometric grid lines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Meta indicator */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400 mb-4 font-medium">
              <span className="inline-flex items-center gap-1.5 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Available for Projects & Roles
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                New Haven, Enugu State, Nigeria
              </span>
            </div>

            {/* Greeting */}
            <div className="text-sm sm:text-base font-semibold text-purple-400 tracking-wide uppercase mb-2">
              Hello, I&apos;m
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 text-balance">
              Agudike Uchechukwu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-300 to-blue-400">Maryrose</span>
            </h1>

            {/* Professional Title */}
            <div className="text-base sm:text-xl font-semibold text-slate-200 mb-6 flex flex-wrap items-center gap-2">
              <span className="text-blue-300">UI/UX Designer</span>
              <span aria-hidden="true" className="text-slate-600">|</span>
              <span className="text-purple-300">Web Developer</span>
              <span aria-hidden="true" className="text-slate-600">|</span>
              <span className="text-amber-300">Digital Technology Professional</span>
            </div>

            {/* Bio summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              I combine technology, creativity, and digital innovation to develop useful, reliable, and user-friendly digital solutions. With a solid computer science foundation from Enugu State University of Science and Technology, I bridge design aesthetics and technical execution to help individuals and businesses thrive online.
            </p>

            {/* Two prominent action buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl shadow-lg shadow-purple-900/30 hover:shadow-purple-600/30 transition-all duration-200 active:scale-[0.98]"
              >
                <span>View My Services</span>
                <ArrowDown className="w-4 h-4 text-amber-300" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-[#0D1733] hover:bg-[#132047] border border-slate-700/80 hover:border-amber-400/50 rounded-xl transition-all duration-200 active:scale-[0.98]"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Subtle credential trust line */}
            <div className="flex items-center gap-3 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400 w-full">
              <GraduationCap className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                <strong className="text-slate-200 font-medium">B.Sc. Computer Science</strong> — Enugu State University of Science and Technology (ESUT)
              </span>
            </div>
          </div>

          {/* Right Column: Profile Image & Tech Visuals */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Glowing background ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600/40 via-blue-600/30 to-amber-500/30 rounded-3xl blur-xl opacity-75" />

              {/* Main Profile Card Container */}
              <div className="relative bg-[#0D1733] border border-slate-700/80 rounded-3xl p-4 sm:p-5 shadow-2xl">
                {/* Photo frame */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                  <Image
                    src="/images/maryrose_profile_photo.png"
                    alt="Agudike Uchechukwu Maryrose - Professional Profile Portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle inner gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Badge overlay on bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#070D1E]/90 backdrop-blur-md border border-slate-700/80">
                    <div className="text-xs font-semibold text-amber-300">
                      Agudike U. Maryrose
                    </div>
                    <div className="text-[11px] text-slate-300 truncate">
                      Computer Science · UI/UX · Web Dev
                    </div>
                  </div>
                </div>

                {/* Profile replacement notice for Maryrose */}
                <div className="mt-3 text-center">
                  <span className="text-[11px] text-slate-400">
                    Replaceable profile photograph container
                  </span>
                </div>

                {/* Floating highlight mini-cards */}
                <div className="hidden sm:flex items-center gap-2.5 absolute -top-4 -left-6 bg-[#070D1E]/95 border border-purple-500/40 rounded-xl p-3 shadow-xl backdrop-blur-md">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <Layout className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">UI/UX Design</div>
                    <div className="text-[10px] text-slate-400">User-Centered Focus</div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-4 -right-4 bg-[#070D1E]/95 border border-blue-500/40 rounded-xl p-3 shadow-xl backdrop-blur-md">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Web Development</div>
                    <div className="text-[10px] text-slate-400">Clean & Responsive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
