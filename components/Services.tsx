'use client';

import React from 'react';
import { 
  Layout, 
  Globe, 
  Database, 
  Palette, 
  Megaphone, 
  Share2, 
  ArrowRight,
  CheckCircle2 
} from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const serviceOfferings = [
    {
      id: 'ui-ux',
      name: 'UI/UX Design',
      category: 'Design & Human Experience',
      icon: Layout,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/20',
      summary: 'Designing intuitive, elegant user interfaces that transform complex digital systems into pleasant, frictionless user journeys.',
      points: [
        'User-friendly interface design',
        'Website and application interface design',
        'Wireframes & conceptual layouts',
        'Interactive prototypes',
        'User-centered design methodology',
      ],
    },
    {
      id: 'web-dev',
      name: 'Web Development',
      category: 'Frontend Engineering & Web Tech',
      icon: Globe,
      color: 'text-blue-400',
      borderColor: 'border-blue-500/20',
      summary: 'Building clean, fast-loading, mobile-friendly websites that showcase your business or personal brand with modern standards.',
      points: [
        'Responsive websites across all viewports',
        'Business & corporate websites',
        'Personal portfolio websites',
        'High-converting landing pages',
        'Modern, accessible web interfaces',
      ],
    },
    {
      id: 'db-management',
      name: 'Database Management',
      category: 'Data Structures & Storage',
      icon: Database,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/20',
      summary: 'Structuring, maintaining, and organizing database systems to ensure your operational data remains secure, fast, and structured.',
      points: [
        'Database organization & optimization',
        'Structured data management',
        'Database architecture & schema design',
        'Data storage solutions',
        'Routine database maintenance & integrity',
      ],
    },
    {
      id: 'graphics',
      name: 'Graphics Design',
      category: 'Visual Identity & Branding',
      icon: Palette,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/20',
      summary: 'Developing memorable visual assets, brand collaterals, and high-impact digital graphics that command audience attention.',
      points: [
        'Social media graphics & carousels',
        'Business promotional materials',
        'Digital graphics & web banners',
        'Branding visuals & color guidelines',
        'Targeted marketing design assets',
      ],
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      category: 'Online Growth & Strategy',
      icon: Megaphone,
      color: 'text-rose-400',
      borderColor: 'border-rose-500/20',
      summary: 'Strategic digital marketing support designed to elevate your online visibility, connect with potential customers, and build authority.',
      points: [
        'Online brand promotion & awareness',
        'Digital campaign support & execution',
        'Content strategy & narrative planning',
        'Enhanced online visibility & discoverability',
      ],
    },
    {
      id: 'social-media',
      name: 'Social Media Management',
      category: 'Community & Channel Operations',
      icon: Share2,
      color: 'text-indigo-400',
      borderColor: 'border-indigo-500/20',
      summary: 'End-to-end management of social channels, including regular content planning, audience interaction, and continuous brand voice maintenance.',
      points: [
        'Engaging social media content creation',
        'Business page setup & daily management',
        'Editorial content planning & calendars',
        'Audience engagement & relationship building',
        'Consistent online brand presence',
      ],
    },
  ];

  const handleServiceClick = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-[#070D1E] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            Service Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Services for Individuals, Startups & Businesses
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical digital services tailored to turn strategic goals into high-performing websites, organized data, and engaging visual identities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceOfferings.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#0D1733] border border-slate-800 hover:border-slate-700 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
              >
                <div>
                  {/* Top metadata line (clean unboxed text) */}
                  <div className="text-xs text-slate-400 mb-3 flex items-center justify-between">
                    <span>{service.category}</span>
                  </div>

                  {/* Service Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 mb-8">
                    {service.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className={`w-4 h-4 ${service.color} shrink-0 mt-0.5`} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-5 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => handleServiceClick(service.name)}
                    className="w-full inline-flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-200 hover:text-white py-2.5 px-4 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-colors border border-slate-700/50 hover:border-slate-600"
                  >
                    <span>Inquire About {service.name}</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
