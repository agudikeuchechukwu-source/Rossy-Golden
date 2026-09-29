import React from 'react';
import { GraduationCap, BookOpen, Database, Code, Cpu, Award, CheckCircle } from 'lucide-react';

export default function Education() {
  const academicFoundations = [
    {
      title: 'Programming & Logic',
      description: 'Understanding software concepts, structured logic, algorithmic problem-solving, and object-oriented paradigms.',
      icon: Code,
    },
    {
      title: 'Database Systems & Data Modeling',
      description: 'Architecting relational schemas, SQL querying, data normalization, and information storage integrity.',
      icon: Database,
    },
    {
      title: 'Digital Systems & Architecture',
      description: 'Computer organization, networking fundamentals, software lifecycle processes, and digital infrastructure.',
      icon: Cpu,
    },
    {
      title: 'Web & Human-Computer Interface',
      description: 'Human-centered computing principles, accessibility standards, user experience testing, and web protocols.',
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="py-24 bg-[#070D1E] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Education & Core Foundations
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Grounded in university-level computer science, merging theoretical rigor with practical digital solution development.
          </p>
        </div>

        {/* Primary Education Showcase Card */}
        <div className="bg-[#0D1733] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl mb-12 relative overflow-hidden">
          {/* Subtle accent border at top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-purple-500 to-blue-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Bachelor of Science (B.Sc.) in Computer Science
                  </h3>
                  <div className="text-amber-400 font-medium text-sm sm:text-base">
                    Enugu State University of Science and Technology (ESUT)
                  </div>
                </div>
              </div>

              {/* Location & Context */}
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 mb-6">
                <span>Enugu State, Nigeria</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-300">Faculty of Applied Natural Sciences / Computing</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400 font-medium">B.Sc. Degree Conferred</span>
              </div>

              {/* Education narrative */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                My Computer Science education at ESUT has provided me with a comprehensive, analytical understanding of software engineering fundamentals, database architecture, algorithms, and digital systems. This academic background enables me to approach modern digital challenges not merely from an aesthetic surface, but with structural depth and technical precision.
              </p>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Comprehensive grounding in data structures, computational logic, and systematic debugging.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Practical database design, relational integrity, and structured query implementation.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Strong problem-solving mindset oriented toward building maintainable and scalable web applications.</span>
                </div>
              </div>
            </div>

            {/* Right Card: Key Knowledge Competencies */}
            <div className="lg:col-span-5 bg-[#070D1E]/80 border border-slate-800 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-5 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Academic Core Competencies</span>
              </h4>

              <div className="space-y-4">
                {academicFoundations.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 mt-0.5 text-purple-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-400 leading-normal mt-0.5">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
