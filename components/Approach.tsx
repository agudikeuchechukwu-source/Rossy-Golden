'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Map, 
  PenTool, 
  Code, 
  CheckCheck, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export default function Approach() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Understand',
      subtitle: 'Requirements Discovery & Context',
      icon: Search,
      color: 'text-amber-400',
      bgColor: 'bg-amber-400/10',
      borderColor: 'border-amber-400/30',
      description:
        'Every project starts with attentive listening. I seek to thoroughly understand your business goals, target audience, brand identity, user pain points, and core technical requirements before writing a single line of code or drawing a screen.',
      deliverables: [
        'Client goals and requirements brief',
        'Target audience and user needs analysis',
        'Scope definition and feature boundaries',
      ],
    },
    {
      num: '02',
      title: 'Plan',
      subtitle: 'Architecture & Strategy',
      icon: Map,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
      description:
        'With requirements clearly articulated, I map out the information architecture, database entities, content structure, and technical milestones. A solid plan prevents scope creep and ensures development runs smoothly.',
      deliverables: [
        'Site map and user navigation paths',
        'Database schema outline and entity relationships',
        'Project milestones and delivery schedule',
      ],
    },
    {
      num: '03',
      title: 'Design',
      subtitle: 'Wireframes & Visual Interface',
      icon: PenTool,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
      description:
        'Next, I translate the structural plan into intuitive visual designs. Starting with low-fidelity wireframes to solidify layout hierarchy, then crafting high-fidelity mockups with balanced color palettes, typography, and responsive component states.',
      deliverables: [
        'Low-fidelity wireframe layouts',
        'High-fidelity UI mockups & component styles',
        'Interactive prototypes for stakeholder review',
      ],
    },
    {
      num: '04',
      title: 'Develop',
      subtitle: 'Clean Code & System Construction',
      icon: Code,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      borderColor: 'border-emerald-400/30',
      description:
        'Using semantic HTML, modern responsive CSS, and clean JavaScript, I bring the visual designs to life. I prioritize semantic standards, fast load speeds, cross-browser compatibility, and maintainable code architecture.',
      deliverables: [
        'Fully responsive web pages',
        'Structured database tables and SQL integration',
        'Interactive UI components and form validation',
      ],
    },
    {
      num: '05',
      title: 'Test',
      subtitle: 'Verification & Quality Check',
      icon: CheckCheck,
      color: 'text-rose-400',
      bgColor: 'bg-rose-400/10',
      borderColor: 'border-rose-400/30',
      description:
        'Rigorous testing ensures the digital product works reliably under diverse real-world conditions. I inspect responsive breakpoints, verify form validation, cross-check links, and test functionality on phones, tablets, and desktops.',
      deliverables: [
        'Cross-device responsive verification',
        'Input validation and data handling checks',
        'Accessibility and legibility reviews',
      ],
    },
    {
      num: '06',
      title: 'Improve',
      subtitle: 'Refinement & Ongoing Optimization',
      icon: TrendingUp,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30',
      description:
        'A digital solution flourishes through ongoing refinement. Based on stakeholder feedback, user responses, and emerging digital best practices, I fine-tune details to keep the solution performant and up-to-date.',
      deliverables: [
        'Feedback implementation and refinements',
        'Performance tweaks and content updates',
        'Ongoing support and maintenance recommendations',
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#070D1E] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-2">
            Professional Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            My Professional Approach
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A structured, 6-stage engineering and design lifecycle focused on understanding needs, delivering clean execution, and continuous refinement.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#0D1733] border-amber-400/60 shadow-lg shadow-amber-500/10'
                    : 'bg-[#0A1128]/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold ${isCurrent ? 'text-amber-400' : 'text-slate-500'}`}>
                    {step.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isCurrent ? step.color : 'text-slate-500'}`} />
                </div>
                <div className={`text-sm font-bold truncate ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Stage Card */}
        <div className="bg-[#0D1733] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left detail column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                  Phase {steps[activeStep].num}
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-xs font-medium text-slate-400">
                  {steps[activeStep].subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {steps[activeStep].title}: {steps[activeStep].subtitle}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {steps[activeStep].description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  Key Phase Deliverables:
                </h4>
                <div className="space-y-2">
                  {steps[activeStep].deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right visual step progression */}
            <div className="lg:col-span-5 bg-[#070D1E]/90 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between">
              <div className="mb-4">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Lifecycle Sequential Roadmap
                </div>
                <div className="text-sm font-medium text-slate-200">
                  Understand → Plan → Design → Develop → Test → Improve
                </div>
              </div>

              <div className="space-y-2 my-2">
                {steps.map((st, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer text-xs transition-colors ${
                      activeStep === i
                        ? 'bg-slate-800/90 font-bold text-white border border-slate-700'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-amber-400">{st.num}.</span>
                      <span>{st.title}</span>
                    </div>
                    {activeStep === i && (
                      <span className="text-[10px] text-amber-400 font-semibold">Active Focus</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Navigate stages</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-white"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-white"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
