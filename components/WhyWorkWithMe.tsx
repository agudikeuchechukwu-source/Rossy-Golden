import React from 'react';
import { 
  Lightbulb, 
  Puzzle, 
  CheckCheck, 
  HeartHandshake, 
  Binary, 
  BookOpenCheck, 
  MessageSquare, 
  Rocket,
  ShieldCheck
} from 'lucide-react';

export default function WhyWorkWithMe() {
  const strengths = [
    {
      title: 'Creative Thinking',
      description: 'Generating fresh visual layouts and imaginative problem-solving approaches that set your digital identity apart.',
      icon: Lightbulb,
      color: 'text-amber-400',
    },
    {
      title: 'Problem Solving',
      description: 'Approaching technical and design obstacles systematically, diagnosing root causes, and implementing sustainable remedies.',
      icon: Puzzle,
      color: 'text-purple-400',
    },
    {
      title: 'Attention to Detail',
      description: 'Meticulous focus on typographic alignment, responsive margins, database relationships, and consistent branding touchpoints.',
      icon: CheckCheck,
      color: 'text-blue-400',
    },
    {
      title: 'User-Centered Design',
      description: 'Prioritizing end-user accessibility, visual clarity, and intuitive workflows to ensure digital products are comfortable to navigate.',
      icon: HeartHandshake,
      color: 'text-rose-400',
    },
    {
      title: 'Technical Knowledge',
      description: 'A university computer science foundation ensuring practical comprehension of programming logic, data structures, and web technologies.',
      icon: Binary,
      color: 'text-emerald-400',
    },
    {
      title: 'Continuous Learning',
      description: 'Actively updating technical proficiencies and design trends to leverage modern tools, efficient frameworks, and user expectations.',
      icon: BookOpenCheck,
      color: 'text-cyan-400',
    },
    {
      title: 'Professional Communication',
      description: 'Clear, polite, transparent collaboration with clients, prompt responses, and structured project milestones.',
      icon: MessageSquare,
      color: 'text-indigo-400',
    },
    {
      title: 'Digital Innovation',
      description: 'Eager to adopt modern web standards and innovative creative workflows that generate real value for individuals and businesses.',
      icon: Rocket,
      color: 'text-amber-300',
    },
  ];

  return (
    <section className="py-24 bg-[#070D1E] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-2">
            Professional Values
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Why Work With Me
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Core attributes and work ethics that shape how I collaborate with clients, deliver technical solutions, and create digital value.
          </p>
        </div>

        {/* 8 Attribute Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D1733] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                  <span>Committed Quality</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
