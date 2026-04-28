import { useState } from 'react'
import Footer from '../components/Footer'

const nav = [
  {
    section: 'Getting Started',
    items: ['Introduction', 'Quick Start', 'Your First Build', 'Connecting GitHub'],
  },
  {
    section: 'Core Concepts',
    items: ['The Build Prompt', 'DAG Pipeline', 'Task Nodes', 'Context Engine'],
  },
  {
    section: 'Deploying',
    items: ['Edge Deployments', 'Custom Domains', 'Environment Variables', 'Rollbacks'],
  },
  {
    section: 'Integrations',
    items: ['GitHub', 'Figma', 'Stripe', 'Postgres', 'Redis'],
  },
  {
    section: 'API Reference',
    items: ['Authentication', 'Builds API', 'Deployments API', 'Webhooks'],
  },
]

const quickStart = `# Install the Forge CLI
npm install -g @oneforge/cli

# Authenticate
forge login

# Create your first project
forge init my-saas-app

# Describe and build
forge build "A SaaS dashboard for a coffee shop with Stripe subscriptions,
user auth, and a sales analytics page."

# Deploy to production
forge deploy --prod`

const dagExample = `{
  "pipeline": {
    "id": "bld_7k2mNpQ3",
    "nodes": [
      { "id": "schema-init", "type": "database", "status": "done" },
      { "id": "api-routes",  "type": "backend",  "status": "running", "deps": ["schema-init"] },
      { "id": "ui-shell",    "type": "frontend", "status": "queued",  "deps": ["api-routes"] },
      { "id": "deploy",      "type": "infra",    "status": "queued",  "deps": ["ui-shell"] }
    ]
  }
}`

export default function Docs() {
  const [activeSection, setActiveSection] = useState('Introduction')
  const [copied, setCopied] = useState(false)

  const copy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-forge-bg text-forge-text font-sans antialiased min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="border-b border-forge-border/40 pt-[72px]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Documentation</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forge-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                className="bg-forge-surface border border-forge-border rounded-lg pl-9 pr-4 py-2 text-sm text-forge-text placeholder-forge-muted focus:outline-none focus:border-forge-primary/50 w-56 transition-all"
                placeholder="Search docs..."
              />
            </div>
            <span className="hidden sm:block text-xs text-forge-muted bg-forge-surface border border-forge-border px-2 py-1 rounded">⌘K</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 max-w-7xl mx-auto w-full px-6 py-10 gap-10">
        {/* Sidebar */}
        <aside className="hidden md:block w-56 shrink-0">
          <nav className="sticky top-24 space-y-6">
            {nav.map((group) => (
              <div key={group.section}>
                <div className="text-xs font-semibold text-forge-muted uppercase tracking-wider mb-2">{group.section}</div>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => setActiveSection(item)}
                        className={`w-full text-left text-sm px-3 py-1.5 rounded-lg transition-all ${
                          activeSection === item
                            ? 'bg-forge-primary/10 text-forge-primary font-medium border-l-2 border-forge-primary pl-2'
                            : 'text-forge-textSec hover:text-forge-text hover:bg-forge-surface'
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-forge-muted mb-8">
            <span>Docs</span>
            <span>/</span>
            <span className="text-forge-textSec">Getting Started</span>
            <span>/</span>
            <span className="text-forge-text">{activeSection}</span>
          </div>

          <article className="prose-forge max-w-none">
            <h1 className="text-4xl font-bold mb-3">Introduction to OneForge</h1>
            <p className="text-forge-textSec text-lg mb-10 leading-relaxed">
              OneForge is an AI-native build system that takes a plain-English description of your application and produces a fully deployable, production-grade codebase. This guide walks you through the core concepts and gets you from zero to deployed in under 10 minutes.
            </p>

            {/* Prerequisites */}
            <div className="glass-panel rounded-2xl p-6 mb-10 border-forge-secondary/30">
              <div className="flex items-center gap-2 text-forge-secondary font-semibold mb-3 text-sm uppercase tracking-wide">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Prerequisites
              </div>
              <ul className="space-y-2 text-forge-textSec text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-forge-secondary shrink-0" />Node.js 18+ installed</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-forge-secondary shrink-0" />A GitHub account</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-forge-secondary shrink-0" />A OneForge account (free to start)</li>
              </ul>
            </div>

            {/* Quick start */}
            <h2 className="text-2xl font-bold mb-4 mt-10">Quick Start</h2>
            <p className="text-forge-textSec mb-4 leading-relaxed">
              The fastest way to get started is with the Forge CLI. Install it globally, authenticate with your account, and you're ready to describe your first build.
            </p>

            <div className="relative group mb-8">
              <div className="bg-[#080706] border border-forge-border rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 border-b border-forge-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <button
                    onClick={() => copy(quickStart)}
                    className="text-forge-muted hover:text-forge-text text-xs flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? (
                      <><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Copied</>
                    ) : (
                      <><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>Copy</>
                    )}
                  </button>
                </div>
                <pre className="p-5 text-sm text-forge-textSec overflow-x-auto leading-relaxed font-mono">
                  {quickStart.split('\n').map((line, i) => (
                    <div key={i}>
                      {line.startsWith('#') ? (
                        <span className="text-forge-muted">{line}</span>
                      ) : line.startsWith('forge') || line.startsWith('npm') ? (
                        <><span className="text-forge-primary">$</span><span className="text-forge-text"> {line}</span></>
                      ) : (
                        <span className="text-forge-secondary">{line}</span>
                      )}
                    </div>
                  ))}
                </pre>
              </div>
            </div>

            {/* DAG explanation */}
            <h2 className="text-2xl font-bold mb-4">Understanding the DAG Pipeline</h2>
            <p className="text-forge-textSec mb-4 leading-relaxed">
              Every build in OneForge is represented as a Directed Acyclic Graph (DAG). Each node in the graph is a discrete task — initializing your database schema, generating API routes, scaffolding UI components, or configuring deployment infrastructure. Tasks run in dependency order, and you can inspect, pause, or edit any node before it executes.
            </p>

            <div className="bg-[#080706] border border-forge-border rounded-2xl overflow-hidden mb-8">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-forge-border/50 text-xs text-forge-muted font-mono">
                pipeline.json
              </div>
              <pre className="p-5 text-sm text-forge-textSec overflow-x-auto leading-relaxed font-mono">{dagExample}</pre>
            </div>

            {/* Node types */}
            <h2 className="text-2xl font-bold mb-6">Node Types</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { type: 'database', color: 'text-blue-400', border: 'border-blue-500/20', bg: 'bg-blue-500/5', desc: 'Schema creation, migrations, seeding' },
                { type: 'backend', color: 'text-forge-primary', border: 'border-forge-primary/20', bg: 'bg-forge-primary/5', desc: 'API routes, middleware, auth logic' },
                { type: 'frontend', color: 'text-forge-secondary', border: 'border-forge-secondary/20', bg: 'bg-forge-secondary/5', desc: 'Components, pages, state management' },
                { type: 'infra', color: 'text-green-400', border: 'border-green-500/20', bg: 'bg-green-500/5', desc: 'Deploy config, CDN, env vars' },
              ].map((n) => (
                <div key={n.type} className={`rounded-xl border ${n.border} ${n.bg} p-4`}>
                  <div className={`font-mono text-sm font-bold mb-1 ${n.color}`}>{n.type}</div>
                  <div className="text-forge-textSec text-sm">{n.desc}</div>
                </div>
              ))}
            </div>

            {/* Next steps */}
            <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Your First Build →', desc: 'Walk through a full build end to end.' },
                { title: 'Connecting GitHub →', desc: 'Link your repos for PR-native workflows.' },
                { title: 'DAG Pipeline →', desc: 'Deep-dive into pipeline customization.' },
                { title: 'API Reference →', desc: 'Integrate Forge programmatically.' },
              ].map((link) => (
                <button key={link.title} className="glass-panel rounded-xl p-5 text-left glass-panel-hover transition-all group">
                  <div className="font-semibold text-forge-text group-hover:text-forge-primary transition-colors mb-1">{link.title}</div>
                  <div className="text-forge-textSec text-sm">{link.desc}</div>
                </button>
              ))}
            </div>
          </article>
        </main>

        {/* Right TOC */}
        <aside className="hidden xl:block w-48 shrink-0">
          <div className="sticky top-24">
            <div className="text-xs font-semibold text-forge-muted uppercase tracking-wider mb-3">On this page</div>
            <ul className="space-y-2">
              {['Quick Start', 'DAG Pipeline', 'Node Types', 'Next Steps'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs text-forge-muted hover:text-forge-textSec transition-colors block py-0.5">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  )
}
