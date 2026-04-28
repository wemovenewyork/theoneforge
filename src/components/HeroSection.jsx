export default function HeroSection() {
  return (
    <section className="relative z-10 pt-[180px] pb-24 px-6 min-h-screen flex flex-col items-center justify-center">
      {/* Announcement badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forge-surfaceAlt/40 backdrop-blur-[17px] border border-forge-border shadow-[0_0_20px_rgba(249,115,22,0.15)] mb-8 hover:border-forge-borderStrong transition-colors cursor-pointer group">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forge-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-forge-highlight"></span>
        </span>
        <span className="text-forge-textSec group-hover:text-forge-text text-sm font-medium transition-colors">Repo-aware code generation</span>
        <svg className="w-4 h-4 text-forge-muted group-hover:text-forge-primary transition-colors ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Headline */}
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-center max-w-5xl leading-[1.05] mb-6">
        Ship the{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-forge-primary via-forge-secondary to-[#FDE68A] text-glow relative inline-block">
          change.
          <svg className="absolute -top-6 -right-8 w-12 h-12 text-forge-secondary animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
        </span>
        {' '}Not the chaos.
      </h1>

      <p className="text-xl text-forge-textSec text-center max-w-2xl mb-12">
        The Forge takes a feature spec or bug report against your repo, drafts a plan, generates the code, runs verification gates, and publishes a reviewed merge request. With your approval at every step.
      </p>

      {/* Prompt box */}
      <div className="w-full max-w-3xl relative group">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-forge-primary/50 via-forge-secondary/50 to-forge-primary/50 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity blur-[2px]"></div>
        <div className="relative bg-forge-surfaceAlt/80 backdrop-blur-[17px] border border-forge-border rounded-2xl p-2 shadow-2xl flex flex-col transition-all focus-within:border-forge-primary/50">
          <textarea
            className="w-full bg-transparent text-forge-text placeholder-forge-muted text-lg resize-none p-4 focus:outline-none min-h-[140px]"
            placeholder="Describe a feature or fix. Paste your repo URL. We'll draft a plan."
          />
          <div className="flex items-center justify-between p-2 pt-0 mt-2 border-t border-forge-border/50">
            <div className="flex gap-2">
              <button className="p-2 text-forge-textSec hover:text-forge-text hover:bg-forge-surface rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
              <button className="p-2 text-forge-textSec hover:text-forge-text hover:bg-forge-surface rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            <button className="bg-forge-text text-forge-bg px-6 py-2.5 rounded-xl font-medium flex items-center gap-2 hover:bg-forge-primary transition-colors">
              <span>Build</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Quick start links */}
      <div className="mt-8 flex items-center gap-4 text-sm">
        <span className="text-forge-muted">or start with</span>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-forge-surface border border-forge-border hover:border-forge-borderStrong hover:text-forge-text text-forge-textSec transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          GitHub
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-forge-surface border border-forge-border hover:border-forge-borderStrong hover:text-forge-text text-forge-textSec transition-colors">
          {/* GitLab tanuki mark — inline SVG, no new dependency */}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.49a.42.42 0 01.11-.18.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51 1.22 3.78a.84.84 0 01-.3.94z" />
          </svg>
          GitLab
        </button>
      </div>
    </section>
  )
}
