'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  FolderGit2, 
  ExternalLink, 
  X, 
  Layers, 
  Calendar, 
  CheckCircle2, 
  Code2, 
  Layout, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  filterKey: string;
  image: string;
  summary: string;
  role: string;
  scope: string;
  deliverables: string[];
  toolsUsed: string[];
}

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { label: 'All Projects', key: 'all' },
    { label: 'UI/UX Design', key: 'uiux' },
    { label: 'Web Development', key: 'webdev' },
    { label: 'Database Management', key: 'database' },
    { label: 'Graphics Design', key: 'graphics' },
    { label: 'Digital Marketing', key: 'marketing' },
    { label: 'Social Media', key: 'social' },
  ];

  const projects: ProjectItem[] = [
    {
      id: 'proj-uiux',
      title: 'UI/UX Design Showcase Project',
      category: 'UI/UX Design',
      filterKey: 'uiux',
      image: '/images/portfolio_uiux_preview_1790680911986.jpg',
      summary:
        'A comprehensive user interface and experience prototype designed with user-centered design principles, interactive wireframes, and responsive layout patterns.',
      role: 'UI/UX Designer',
      scope: 'Mobile & Web Interface Prototyping',
      deliverables: [
        'User journey flows and information architecture',
        'Low-fidelity wireframe blueprints',
        'High-fidelity interactive prototype in Figma',
        'Design system color palette and typography scale',
      ],
      toolsUsed: ['Figma', 'Wireframing', 'Prototyping', 'Component Systems'],
    },
    {
      id: 'proj-webdev',
      title: 'Web Development Showcase Project',
      category: 'Web Development',
      filterKey: 'webdev',
      image: '/images/portfolio_webdev_preview_1790680924113.jpg',
      summary:
        'A modern responsive business website built with semantic HTML5, clean CSS3 layouts, modular components, and accessible navigation across all screen sizes.',
      role: 'Frontend Web Developer',
      scope: 'Responsive Web Construction',
      deliverables: [
        'Fully responsive multi-page layout',
        'Cross-browser tested CSS grid and flexbox',
        'Accessible semantic markup structure',
        'Client-side form validation handling',
      ],
      toolsUsed: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Framework'],
    },
    {
      id: 'proj-database',
      title: 'Database Management Showcase Project',
      category: 'Database Management',
      filterKey: 'database',
      image: '/images/portfolio_database_preview_1790680937039.jpg',
      summary:
        'A structured relational database architecture model with normalized entity tables, relational keys, sample queries, and organized record maintenance rules.',
      role: 'Database Specialist',
      scope: 'Relational Schema Design & SQL Optimization',
      deliverables: [
        'Entity-Relationship Diagram (ERD) mapping',
        'Relational schema normalization (3NF)',
        'Structured SQL data definition and query scripts',
        'Data integrity and referential key constraints',
      ],
      toolsUsed: ['SQL', 'Relational Schemas', 'ERD Modeling', 'Data Normalization'],
    },
    {
      id: 'proj-graphics',
      title: 'Graphics Design Showcase Project',
      category: 'Graphics Design',
      filterKey: 'graphics',
      image: '/images/portfolio_graphics_preview_1790680950188.jpg',
      summary:
        'A creative visual branding package featuring social media promotional collateral, business banners, and harmonious typographic compositions.',
      role: 'Graphic Designer',
      scope: 'Brand Collateral & Promotional Visuals',
      deliverables: [
        'Social media banner and carousel templates',
        'Brand stationery and promotional flyers',
        'Consistent typography hierarchy and color system',
        'High-resolution digital export assets',
      ],
      toolsUsed: ['Visual Design', 'Typography', 'Color Harmony', 'Digital Branding'],
    },
    {
      id: 'proj-marketing',
      title: 'Digital Marketing Campaign Project',
      category: 'Digital Marketing',
      filterKey: 'marketing',
      image: '/images/portfolio_webdev_preview_1790680924113.jpg',
      summary:
        'A strategic digital campaign framework designed to boost online visibility, structure content messaging, and guide prospective customers into the conversion funnel.',
      role: 'Digital Marketing Specialist',
      scope: 'Campaign Strategy & Online Promotion',
      deliverables: [
        'Target audience persona and messaging matrix',
        'Campaign timeline and publication schedule',
        'Digital promotion copy and creative alignment',
        'Core performance indicators tracking plan',
      ],
      toolsUsed: ['Digital Strategy', 'Content Planning', 'Audience Growth', 'Analytics'],
    },
    {
      id: 'proj-social',
      title: 'Social Media Management Project',
      category: 'Social Media Management',
      filterKey: 'social',
      image: '/images/portfolio_uiux_preview_1790680911986.jpg',
      summary:
        'An organized social media management blueprint including weekly content calendars, audience engagement tactics, and brand voice guidelines.',
      role: 'Social Media Manager',
      scope: 'Multi-Channel Brand Management',
      deliverables: [
        '30-day comprehensive content calendar',
        'Brand tone of voice and posting frequency rules',
        'Audience engagement response templates',
        'Monthly reach and interaction review format',
      ],
      toolsUsed: ['Content Scheduling', 'Community Engagement', 'Social Strategy'],
    },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((p) => p.filterKey === selectedFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#070D1E] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            Showcase & Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Featured Projects & Work Samples
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A curated portfolio demonstrating project workflows across UI/UX design, web development, database management, graphic branding, and digital growth.
          </p>
        </div>

        {/* Interactive Filter Tabs (Buttons permitted for interactive controls) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSelectedFilter(tab.key)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                selectedFilter === tab.key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md shadow-purple-900/30'
                  : 'bg-[#0D1733] text-slate-300 hover:text-white hover:bg-[#132047] border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0D1733] border border-slate-800 hover:border-slate-700 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Project Image Frame */}
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1733] via-transparent to-transparent opacity-80" />

                  {/* Clean unboxed category label at top right */}
                  <div className="absolute top-3 right-3 text-xs font-medium text-slate-200 bg-[#070D1E]/80 backdrop-blur-md px-3 py-1 rounded-md border border-slate-700/60">
                    {project.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Metadata line with typographic separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="text-amber-400 font-medium">{project.role}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.scope}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tool tags as unboxed text */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                    {project.toolsUsed.map((tool, tIdx) => (
                      <span key={tIdx} className="text-slate-400">
                        {tool}
                        {tIdx < project.toolsUsed.length - 1 && <span className="ml-1.5 text-slate-600">/</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-xl transition-all duration-200 border border-slate-700/80 cursor-pointer"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Customizable note banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0A1128] border border-slate-800 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Ready for Maryrose&apos;s Live Portfolio Works</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            These placeholders reflect the exact discipline categories outlined in your profile. You can seamlessly replace them with your live client links, GitHub repositories, and Figma prototype embeds at any time.
          </p>
        </div>
      </div>

      {/* Project Details Modal / Drawer */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div
            className="bg-[#0D1733] border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-slate-800 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-400 mb-1 font-medium">
                  <span>{activeModalProject.category}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{activeModalProject.role}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Project Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.summary}
                </p>
              </div>

              {/* Scope & Deliverables */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  Scope & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalProject.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Tools */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  Methods & Technologies Applied
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  {activeModalProject.toolsUsed.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs text-slate-200 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Note on linking */}
              <div className="p-4 rounded-xl bg-[#070D1E] border border-slate-800 text-xs text-slate-400">
                <p>
                  <strong>Note:</strong> In this portfolio template, project links can be configured to point to your live URL or Behance/GitHub page.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl transition-colors shadow-md"
              >
                Inquire About Similar Work
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
