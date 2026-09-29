'use client';

import React, { useState } from 'react';
import { Code2, X, Copy, Check, Download, FileCode, Database } from 'lucide-react';

interface StandaloneCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StandaloneCodeModal({ isOpen, onClose }: StandaloneCodeModalProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js' | 'php' | 'sql'>('html');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const fileSnippets = {
    html: `<!-- Standalone index.html -->\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Agudike Uchechukwu Maryrose | Portfolio</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <!-- Complete 11 sections implemented in standalone-code/index.html -->\n  <header class="navbar">\n    <div class="container nav-container">\n      <a href="#home" class="nav-brand">Agudike Maryrose</a>\n      <nav class="nav-links">...</nav>\n    </div>\n  </header>\n  ...\n</body>\n</html>`,
    css: `/* Standalone style.css */\n:root {\n  --color-bg-dark: #070d1e;\n  --color-surface: #0d1733;\n  --color-purple: #7c3aed;\n  --color-blue: #2563eb;\n  --color-gold: #f59e0b;\n}\n/* Full CSS rules available in standalone-code/style.css */`,
    js: `// Standalone script.js\ndocument.addEventListener('DOMContentLoaded', () => {\n  initNavbar();\n  initPortfolioFilters();\n  initApproachSteps();\n  initContactForm();\n});\n/* Full JavaScript logic available in standalone-code/script.js */`,
    php: `<?php\n// Standalone contact.php\n// Handles input sanitization, email dispatch, and optional MySQL persistence\nheader('Content-Type: application/json; charset=utf-8');\n$name = trim(strip_tags($_POST['name'] ?? ''));\n$email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);\n$subject = trim(strip_tags($_POST['subject'] ?? ''));\n$message = trim(strip_tags($_POST['message'] ?? ''));\n/* Full script available in standalone-code/contact.php */\n?>`,
    sql: `-- Standalone database.sql\nCREATE DATABASE IF NOT EXISTS \`maryrose_portfolio\`;\nUSE \`maryrose_portfolio\`;\n\nCREATE TABLE IF NOT EXISTS \`contact_inquiries\` (\n  \`id\` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n  \`full_name\` VARCHAR(150) NOT NULL,\n  \`email\` VARCHAR(255) NOT NULL,\n  \`subject\` VARCHAR(255) NOT NULL,\n  \`message\` TEXT NOT NULL,\n  \`created_at\` DATETIME DEFAULT CURRENT_TIMESTAMP\n);\n/* Full schema available in standalone-code/database.sql */`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(fileSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0D1733] border border-slate-700 rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileCode className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-lg font-bold text-white">
                Standalone Export Files (HTML, CSS, JS, PHP, MySQL)
              </h3>
              <p className="text-xs text-slate-400">
                Created in the project root under <code className="text-amber-300">/standalone-code/</code>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-6 py-3 border-b border-slate-800 flex items-center gap-2 overflow-x-auto">
          {[
            { id: 'html', label: 'index.html' },
            { id: 'css', label: 'style.css' },
            { id: 'js', label: 'script.js' },
            { id: 'php', label: 'contact.php' },
            { id: 'sql', label: 'database.sql' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code Content */}
        <div className="p-6 overflow-y-auto flex-1 bg-[#070D1E] font-mono text-xs text-slate-300">
          <pre className="whitespace-pre-wrap">{fileSnippets[activeTab]}</pre>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            All files are saved in <span className="text-slate-200 font-semibold">/standalone-code/</span> for instant deployment on any standard server.
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
