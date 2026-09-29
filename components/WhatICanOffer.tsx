import React from 'react';
import { 
  Sparkles, 
  Smartphone, 
  Database, 
  Brush, 
  TrendingUp, 
  Users, 
  Code2, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function WhatICanOffer() {
  const valuePillars = [
    {
      title: 'Creative Digital Solutions',
      description: 'Bridging technical feasibility and visual appeal to craft practical solutions that address authentic user and organizational needs.',
      icon: Sparkles,
      color: 'text-amber-400',
    },
    {
      title: 'User-Friendly Designs',
      description: 'Designing intuitive, accessible navigation structures and interface components that minimize user friction and boost satisfaction.',
      icon: Users,
      color: 'text-purple-400',
    },
    {
      title: 'Responsive Websites',
      description: 'Developing fast, cleanly structured websites that adapt seamlessly to smartphones, tablets, laptops, and ultra-wide screens.',
      icon: Smartphone,
      color: 'text-blue-400',
    },
    {
      title: 'Organized Data',
      description: 'Structuring and managing relational database schemas to keep your records consistent, traceable, and easily retrievable.',
      icon: Database,
      color: 'text-emerald-400',
    },
    {
      title: 'Professional Visual Content',
      description: 'Producing polished brand assets, promotional banners, and social collateral with cohesive color palettes and typography.',
      icon: Brush,
      color: 'text-amber-300',
    },
    {
      title: 'Digital Marketing Support',
      description: 'Assisting in planning digital campaigns, refining online messaging, and ensuring brand discoverability across digital touchpoints.',
      icon: TrendingUp,
      color: 'text-rose-400',
    },
    {
      title: 'Active Social Media Presence',
      description: 'Establishing regular, high-quality content schedules and community engagement to keep your brand top-of-mind.',
      icon: Users,
      color: 'text-indigo-400',
    },
    {
      title: 'Technology-Based Problem Solving',
      description: 'Applying university-trained computer science logic to diagnose technical bottlenecks and implement reliable workflows.',
      icon: Code2,
      color: 'text-cyan-400',
    },
  ];

  return (
    <section className="py-24 bg-[#070D1E] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">
            Value Proposition
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            What I Can Offer You
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical ways I empower individuals, emerging startups, and established organizations to build their online brand and solve digital challenges.
          </p>
        </div>

        {/* 8 Offer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D1733] border border-slate-800/90 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
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
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Reliable Execution</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
