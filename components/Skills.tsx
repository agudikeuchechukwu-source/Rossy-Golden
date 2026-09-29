import React from 'react';
import { 
  Layout, 
  Code2, 
  Database, 
  Palette, 
  TrendingUp, 
  Share2,
  CheckCircle2
} from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      title: 'UI/UX Design',
      icon: Layout,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      accentBar: 'from-purple-500 to-indigo-500',
      description:
        'Crafting intuitive, user-centered digital interfaces with clean wireframes, interactive prototypes, and thoughtful user journey flows.',
      competencies: [
        'User Interface (UI) Design',
        'Wireframing & Prototyping',
        'User-Centered Workflows',
        'Responsive Layout Design',
      ],
      tools: 'Figma · User Research · Responsive Grid Systems',
    },
    {
      title: 'Web Development',
      icon: Code2,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      accentBar: 'from-blue-500 to-cyan-500',
      description:
        'Developing responsive, standards-compliant web pages and web applications that render smoothly across desktop, tablet, and mobile devices.',
      competencies: [
        'Responsive Web Design',
        'Semantic HTML5 & Modern CSS3',
        'Modern JavaScript Logic',
        'Component-Based Architecture',
      ],
      tools: 'HTML5 · CSS3 · JavaScript · Modern Web Frameworks',
    },
    {
      title: 'Database Management',
      icon: Database,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      accentBar: 'from-emerald-500 to-teal-500',
      description:
        'Structuring relational database tables, managing organized records, preserving referential integrity, and writing structured data queries.',
      competencies: [
        'Database Schema Organization',
        'Relational Data Modeling',
        'Structured Querying (SQL)',
        'Data Storage & Record Maintenance',
      ],
      tools: 'Relational Schemas · SQL · Data Normalization',
    },
    {
      title: 'Graphics Design',
      icon: Palette,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
      accentBar: 'from-amber-400 to-orange-500',
      description:
        'Designing eye-catching brand collateral, digital banners, marketing visual assets, and business presentation materials with typographic harmony.',
      competencies: [
        'Branding Visuals & Assets',
        'Social Media Graphics',
        'Promotional Banners & Posters',
        'Visual Identity & Layouts',
      ],
      tools: 'Visual Composition · Typography · Color Theory',
    },
    {
      title: 'Digital Marketing',
      icon: TrendingUp,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/20',
      accentBar: 'from-rose-500 to-pink-500',
      description:
        'Assisting businesses in expanding their digital presence through targeted online campaigns, brand positioning, and structured content strategy.',
      competencies: [
        'Online Brand Promotion',
        'Content Planning & Strategy',
        'Digital Campaign Support',
        'Audience Visibility Growth',
      ],
      tools: 'Digital Strategy · Campaign Planning · Content Marketing',
    },
    {
      title: 'Social Media Management',
      icon: Share2,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
      accentBar: 'from-indigo-500 to-purple-500',
      description:
        'Managing company and personal brand pages with engaging multi-platform content, calendar scheduling, community interaction, and growth consistency.',
      competencies: [
        'Business Page Management',
        'Content Calendar Scheduling',
        'Audience Engagement & Community',
        'Brand Consistency Across Channels',
      ],
      tools: 'Content Scheduling · Community Engagement · Brand Tone',
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#070D1E] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-2">
            Areas of Capability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Professional Skills & Disciplines
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A balanced synthesis of software engineering, user experience design, structured data handling, and digital communications.
          </p>
        </div>

        {/* 6 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D1733] border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.accentBar} opacity-80`} />

                <div>
                  {/* Skill header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${skill.bgColor} ${skill.borderColor} border flex items-center justify-center shrink-0`}>
                      <Icon className={`w-6 h-6 ${skill.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {skill.title}
                      </h3>
                      <span className="text-xs text-slate-400">Core Discipline</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {skill.description}
                  </p>

                  {/* Competency bullets */}
                  <div className="space-y-2 mb-6">
                    {skill.competencies.map((comp, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${skill.color} shrink-0`} />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tools / Method indicator (Anti-pill unboxed text with divider) */}
                <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                  <span className="text-slate-500 font-medium mr-1.5">Focus:</span>
                  <span className="text-slate-300">{skill.tools}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
