'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Clock, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';

interface ContactProps {
  initialSubject?: string;
}

export default function Contact({ initialSubject = '' }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject || '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('agudikeuchechukwu@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('09030763243');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit enquiry.');
      }

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. Agudike Maryrose will respond to you promptly.',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || 'Something went wrong. Please check your network or try direct email.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#070D1E] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Contact & Collaboration Inquiries
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, need a responsive website, UI/UX design, database management, or looking to discuss full-time and freelance opportunities? Send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0D1733] border border-slate-800 rounded-3xl p-7 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Direct Contact Information</span>
              </h3>

              <div className="space-y-6">
                {/* Full Name */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 text-purple-400 mt-1">
                    <span className="font-bold text-sm">AM</span>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Full Name</div>
                    <div className="text-sm font-semibold text-white">
                      Agudike Uchechukwu Maryrose
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Computer Science Graduate & Digital Specialist
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-400 font-medium">Email Address</div>
                    <a
                      href="mailto:agudikeuchechukwu@gmail.com"
                      className="text-sm font-semibold text-white hover:text-amber-300 transition-colors break-all"
                    >
                      agudikeuchechukwu@gmail.com
                    </a>
                    <div className="mt-1">
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied to clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Email</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-400 font-medium">Phone & WhatsApp</div>
                    <a
                      href="tel:09030763243"
                      className="text-sm font-semibold text-white hover:text-amber-300 transition-colors"
                    >
                      09030763243
                    </a>
                    <div className="flex items-center gap-3 mt-1">
                      <a
                        href="https://wa.me/2349030763243?text=Hello%20Maryrose,%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <span>Chat on WhatsApp</span>
                      </a>
                      <span className="text-slate-600">·</span>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        {copiedPhone ? (
                          <span className="text-emerald-400">Copied</span>
                        ) : (
                          <span>Copy</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-white">
                      New Haven, Enugu State, Nigeria
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Available for on-site in Enugu & remote worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability card */}
            <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 flex items-center gap-3.5">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white">Active Status:</span> Currently open for freelance contracts, full-time positions, and collaborative tech projects.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-[#0D1733] border border-slate-800 rounded-3xl p-7 sm:p-9 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-400" />
              <span>Send a Message</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill out the enquiry form below and I will get back to you promptly.
            </p>

            {status.type === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5">
                <Check className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Message Delivered</div>
                  <div>{status.message}</div>
                </div>
              </div>
            )}

            {status.type === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Submission Notice</div>
                  <div>{status.message}</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 bg-[#070D1E] border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. you@example.com"
                  className="w-full px-4 py-3 bg-[#070D1E] border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Subject <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Inquiring about Web Development or UI/UX Design"
                  className="w-full px-4 py-3 bg-[#070D1E] border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Message <span className="text-amber-400">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your project, timeline, or requirements..."
                  className="w-full px-4 py-3 bg-[#070D1E] border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl shadow-lg shadow-purple-900/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing Submission...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-amber-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
