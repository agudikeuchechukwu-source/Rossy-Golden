import React from 'react';
import { 
  GraduationCap, 
  Lightbulb, 
  Cpu, 
  BookOpen, 
  MapPin, 
  Mail, 
  Phone,
  CheckCircle2,
  Compass
} from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Computer Science Graduate',
      subtitle: 'ESUT, Enugu State, Nigeria',
      description: 'Solid academic foundation in programming principles, digital systems, algorithms, and relational data architecture.',
      icon: GraduationCap,
      color: 'text-amber-400',
      bgColor: 'bg-amber-400/10',
      borderColor: 'border-amber-400/30',
    },
    {
      title: 'Creative Technology Professional',
      subtitle: 'Design Thinking & Logic',
      description: 'Blending software engineering rigor with visual aesthetics to craft cohesive digital products and brand assets.',
      icon: Lightbulb,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
    },
    {
      title: 'Digital Solutions Focus',
      subtitle: 'Practical & User-Centered',
      description: 'Dedicated to resolving authentic business bottlenecks with responsive web interfaces and structured data organization.',
      icon: Cpu,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
    },
    {
      title: 'Continuous Learning',
      subtitle: 'Modern Tech & Emerging Tools',
      description: 'Proactively exploring contemporary web frameworks, UI patterns, and data tools to stay ahead of industry evolutions.',
      icon: BookOpen,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      borderColor: 'border-emerald-400/30',
    },
  ];

  const quickProfile = [
    { label: 'Full Name', value: 'Agudike Uchechukwu Maryrose' },
    { label: 'Primary Discipline', value: 'Computer Science & Digital Design' },
    { label: 'University', value: 'Enugu State University of Science and Technology (ESUT)' },
    { label: 'Location', value: 'New Haven, Enugu State, Nigeria' },
    { label: 'Contact Email', value: 'agudikeuchechukwu@gmail.com' },
    { label: 'Direct Phone', value: '09030763243' },
  ];

  return (
    <section id="about" className="py-24 bg-[#070D1E] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-2">
            Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            About Agudike Uchechukwu Maryrose
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A driven Computer Science graduate uniting analytical system knowledge with creative digital design to engineer impactful digital experiences.
          </p>
        </div>

        {/* 4 Professional Highlight Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D1733] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.borderColor} border flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-medium text-slate-400 mb-3">
                  {item.subtitle}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Narrative & Quick Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Biography Narrative */}
          <div className="lg:col-span-7 bg-[#0D1733] border border-slate-800/90 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <span>Background & Mission</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                My name is <strong className="text-white font-semibold">Agudike Uchechukwu Maryrose</strong>, a Computer Science graduate from <span className="text-amber-300">Enugu State University of Science and Technology (ESUT)</span>, Enugu State, Nigeria. I hold a strong interest in technology, creativity, digital innovation, and the development of practical digital solutions.
              </p>
              <p>
                I am a motivated and detail-oriented technology professional passionate about using digital tools and creative solutions to solve problems, improve user experiences, and help individuals and businesses achieve their goals.
              </p>
              <p>
                My professional interests and skills span <strong className="text-slate-100">UI/UX Design, Web Development, Database Management, Graphics Design, Digital Marketing, and Social Media Management</strong>. I enjoy creating user-friendly digital experiences, designing attractive visual content, developing responsive websites, organizing and managing data, and using digital platforms to help businesses establish, improve, and maintain their online presence.
              </p>
              <p>
                As a Computer Science graduate, I have developed a strong understanding of technology, programming concepts, databases, and digital systems. My interest in design and digital communication allows me to combine technical knowledge with creativity to develop solutions that are both functional and visually appealing.
              </p>
              <p className="text-slate-300 italic border-l-2 border-purple-500 pl-4 py-1">
                &ldquo;I am continuously learning and improving my skills so that I can keep up with new technologies, modern design trends, emerging digital tools, and changing user expectations.&rdquo;
              </p>
            </div>
          </div>

          {/* Quick Profile Details */}
          <div className="lg:col-span-5 bg-[#0D1733] border border-slate-800/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span>Candidate Information</span>
              </h3>

              <div className="divide-y divide-slate-800">
                {quickProfile.map((item, idx) => (
                  <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-sm">
                    <span className="text-slate-400 font-normal text-xs">{item.label}</span>
                    <span className="text-slate-100 font-medium text-xs sm:text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 hover:text-amber-300 rounded-xl transition-all border border-slate-700"
              >
                <span>Discuss a Collaboration or Role</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
