import { useState } from 'react'

const projects = [
  {
    id: 1,
    name: 'MeridianAPI Gateway',
    desc: 'REST + GraphQL gateway with Redis caching and JWT auth.',
    status: 'live',
    stack: ['Node.js', 'Postgres', 'Redis'],
    updated: '2m ago',
    readiness: 88,
  },
  {
    id: 2,
    name: 'CoffeeShop SaaS',
    desc: 'Subscription dashboard with Stripe integration and analytics.',
    status: 'building',
    stack: ['Next.js', 'Stripe', 'Prisma'],
    updated: '12m ago',
    readiness: 43,
  },
  {
    id: 3,
    name: 'Onboarding Flow v2',
    desc: 'Redesigned user onboarding with multi-step wizard and A/B test hooks.',
    status: 'queued',
    stack: ['React', 'Tailwind'],
    updated: '1h ago',
    readiness: 0,
  },
  {
    id: 4,
    name: 'Data Export Service',
    desc: 'Background job runner for CSV/XLSX exports with signed S3 URLs.',
    status: 'live',
    stack: ['Node.js', 'S3', 'BullMQ'],
    updated: 'Yesterday',
    readiness: 100,
  },
]

const statusConfig = {
  live: { label: 'Live', dot: 'bg-green-500', text: 'text-green-400' },
  building: { label: 'Building', dot: 'bg-forge-primary animate-pulse', text: 'text-forge-primary' },
  queued: { label: 'Queued', dot: 'bg-forge-muted', text: 'text-forge-muted' },
}

const activity = [
  { icon: '🚀', msg: 'MeridianAPI Gateway deployed to production', time: '2m ago' },
  { icon: '⚙️', msg: 'CoffeeShop SaaS — "Build API" node running', time: '12m ago' },
  { icon: '🔗', msg: 'GitHub repo connected: wemovenewyork/meridian-api', time: '1h ago' },
  { icon: '✅', msg: 'Data Export Service — all checks passed', time: 'Yesterday' },
  { icon: '📦', msg: 'New project created: Onboarding Flow v2', time: 'Yesterday' },
]

export default function Workspace() {
  const [activeTab, setActiveTab] = useState('projects')
  const [prompt, setPrompt] = useState('')

  return (
    <div className="bg-forge-bg text-forge-text font-sans antialiased min-h-screen">
      {/* Header bar */}
      <div className="border-b border-forge-border/40 pt-[72px]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Workspace</h1>
            <p className="text-forge-muted text-sm">wemovenewyorknet-8057</p>
          </div>
          <button className="bg-forge-primary hover:bg-forge-highlight text-[#0C0A09] px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            New Build
          </button>
        </div>

        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-6 flex gap-1">
          {[
            { id: 'projects', label: 'Projects' },
            { id: 'activity', label: 'Activity' },
            { id: 'settings', label: 'Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${
                activeTab === tab.id
                  ? 'border-forge-primary text-forge-text'
                  : 'border-transparent text-forge-muted hover:text-forge-textSec'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* --- PROJECTS TAB --- */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            {/* Quick build input */}
            <div className="glass-panel rounded-2xl p-4 flex items-center gap-4 border-forge-borderStrong/50">
              <svg className="w-5 h-5 text-forge-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 bg-transparent text-sm text-forge-text placeholder-forge-muted focus:outline-none"
                placeholder="Describe a new build... e.g. 'Slack bot that summarizes GitHub PRs daily'"
              />
              <button className="bg-forge-text text-forge-bg px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-forge-primary transition-colors shrink-0">
                Build
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Total Projects', value: '4' },
                { label: 'Live Deployments', value: '2' },
                { label: 'Builds This Month', value: '11' },
                { label: 'Tokens Used', value: '1.2M' },
              ].map((stat) => (
                <div key={stat.label} className="glass-panel rounded-xl p-4">
                  <div className="text-forge-muted text-xs mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Project cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => {
                const s = statusConfig[project.status]
                return (
                  <div key={project.id} className="group glass-panel rounded-2xl p-6 glass-panel-hover transition-all duration-300 cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-forge-primary transition-colors">{project.name}</h3>
                        <p className="text-forge-textSec text-sm mt-0.5">{project.desc}</p>
                      </div>
                      <span className="text-xs text-forge-muted shrink-0 ml-4">{project.updated}</span>
                    </div>

                    {/* Readiness bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs text-forge-muted">Readiness</span>
                        <span className="text-xs font-medium text-forge-text">{project.readiness}%</span>
                      </div>
                      <div className="h-1.5 bg-forge-surfaceAlt rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-forge-primary to-forge-secondary rounded-full transition-all duration-500"
                          style={{ width: `${project.readiness}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 flex-wrap">
                        {project.stack.map((tag) => (
                          <span key={tag} className="px-2.5 py-0.5 rounded-md bg-forge-surfaceAlt text-xs text-forge-textSec border border-forge-border">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className={`flex items-center gap-1.5 text-xs font-medium ${s.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                        {s.label}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* --- ACTIVITY TAB --- */}
        {activeTab === 'activity' && (
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-forge-border/50" />
              <div className="space-y-0">
                {activity.map((item, i) => (
                  <div key={i} className="flex gap-5 relative pl-14 pb-8">
                    <div className="absolute left-2.5 w-5 h-5 rounded-full bg-forge-surfaceAlt border border-forge-border flex items-center justify-center text-xs z-10">
                      {item.icon}
                    </div>
                    <div className="flex-1 glass-panel rounded-xl p-4">
                      <p className="text-sm text-forge-text leading-relaxed">{item.msg}</p>
                      <span className="text-xs text-forge-muted mt-1 block">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- SETTINGS TAB --- */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl space-y-6">
            <h2 className="text-xl font-bold mb-6">Workspace Settings</h2>

            {/* Profile */}
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="font-semibold mb-5">Profile</h3>
              <div className="space-y-4">
                {[
                  { label: 'Workspace Name', value: 'wemovenewyork', type: 'text' },
                  { label: 'Email', value: 'wemovenewyork.net@gmail.com', type: 'email' },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-sm text-forge-muted mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      defaultValue={field.value}
                      className="w-full bg-forge-surfaceAlt border border-forge-border rounded-lg px-4 py-2.5 text-sm text-forge-text focus:outline-none focus:border-forge-primary/50 transition-colors"
                    />
                  </div>
                ))}
                <button className="bg-forge-primary hover:bg-forge-highlight text-[#0C0A09] px-5 py-2 rounded-lg text-sm font-semibold transition-all mt-2">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Connected integrations */}
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="font-semibold mb-5">Integrations</h3>
              <div className="space-y-3">
                {[
                  { name: 'GitHub', connected: true, user: 'wemovenewyork' },
                  { name: 'Vercel', connected: true, user: 'wemovenewyorknet-8057' },
                  { name: 'Stripe', connected: false },
                  { name: 'Figma', connected: false },
                ].map((integration) => (
                  <div key={integration.name} className="flex items-center justify-between py-3 border-b border-forge-border/30 last:border-0">
                    <div>
                      <div className="font-medium text-sm">{integration.name}</div>
                      {integration.connected && (
                        <div className="text-xs text-forge-muted">{integration.user}</div>
                      )}
                    </div>
                    {integration.connected ? (
                      <div className="flex items-center gap-2 text-xs text-green-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Connected
                      </div>
                    ) : (
                      <button className="text-xs border border-forge-border px-3 py-1.5 rounded-lg text-forge-textSec hover:text-forge-text hover:border-forge-borderStrong transition-colors">
                        Connect
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Danger zone */}
            <div className="glass-panel rounded-2xl p-6 border-red-500/20">
              <h3 className="font-semibold text-red-400 mb-3">Danger Zone</h3>
              <p className="text-forge-textSec text-sm mb-4">Deleting your workspace is permanent and cannot be undone.</p>
              <button className="border border-red-500/30 text-red-400 hover:bg-red-500/10 px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                Delete Workspace
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
