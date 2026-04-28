import Footer from '../components/Footer'

const steps = [
  {
    num: '01',
    title: 'Describe your idea',
    desc: 'Type a plain-English prompt — a SaaS dashboard, an API gateway, a marketing site. Forge understands context, tech stack preferences, and project scope.',
  },
  {
    num: '02',
    title: 'Forge plans the build',
    desc: 'The AI generates a DAG pipeline — breaking your project into typed tasks: schema init, API generation, UI scaffolding, test harness, and deploy config.',
  },
  {
    num: '03',
    title: 'Review & approve',
    desc: 'Step through each node in the pipeline. Edit, reorder, or branch tasks before a single line of code is written. You stay in control.',
  },
  {
    num: '04',
    title: 'Deploy to production',
    desc: 'One click pushes to your connected cloud. Edge CDN, environment variables, and database migrations are handled automatically.',
  },
]

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'Full-stack generation',
    desc: 'Backend routes, database schemas, frontend components, and CI pipelines — generated together, not in isolation.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'AI with deep context',
    desc: 'Forge indexes your entire repo — not just the open file. It understands patterns, naming conventions, and existing abstractions.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Global edge deploys',
    desc: 'Every build ships to a global CDN by default. Zero config. Sub-50ms response times from any region.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Enterprise security',
    desc: 'SOC 2 Type II certified. Secrets never touch our servers. Private repos, SSO, and audit logs for teams.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'PR-native workflow',
    desc: 'Every Forge build creates a real git branch and pull request — reviewable, mergeable, and rollback-safe.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Team collaboration',
    desc: 'Share pipelines, co-edit prompts, and review AI-generated diffs together. Built for teams of 1 to 500.',
  },
]

const techLogos = ['React', 'Next.js', 'Node.js', 'Postgres', 'Redis', 'Stripe', 'Tailwind', 'Prisma']

export default function Overview() {
  return (
    <div className="bg-forge-bg text-forge-text font-sans antialiased min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-forge-primary/15 to-transparent blur-[80px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forge-surfaceAlt/60 border border-forge-border mb-8 text-sm text-forge-textSec">
            <span className="w-2 h-2 rounded-full bg-forge-primary animate-pulse" />
            Platform Overview
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            The build platform<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forge-primary via-forge-secondary to-[#FDE68A]">
              that thinks ahead
            </span>
          </h1>
          <p className="text-xl text-forge-textSec max-w-2xl mx-auto">
            OneForge is an AI-native development platform that goes from your idea to deployed, production-grade code — without the boilerplate, context switching, or late nights.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-forge-primary text-sm font-semibold tracking-wider uppercase mb-3">How it works</div>
          <h2 className="text-4xl font-bold">From idea to infrastructure in 4 steps</h2>
        </div>
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-transparent via-forge-borderStrong to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="relative group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-forge-surface border border-forge-borderStrong flex items-center justify-center text-forge-primary font-bold mb-6 group-hover:border-forge-primary group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300 z-10 relative">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-forge-textSec text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-forge-border/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything in one forge</h2>
          <p className="text-forge-textSec text-lg">No stitching together 12 tools. One platform, end to end.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group glass-panel rounded-2xl p-8 glass-panel-hover transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-forge-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-forge-surface border border-forge-border flex items-center justify-center mb-5 text-forge-primary group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-forge-textSec text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-forge-border/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Works with your stack</h2>
          <p className="text-forge-textSec">Forge generates code for the tools you already love.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {techLogos.map((tech) => (
            <div key={tech} className="glass-panel px-6 py-3 rounded-xl text-forge-textSec text-sm font-medium hover:text-forge-text hover:border-forge-borderStrong transition-all duration-200 cursor-default">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <div className="glass-panel rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-forge-primary/5 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Start building today</h2>
            <p className="text-forge-textSec text-lg mb-8">No credit card required for your first project.</p>
            <button className="bg-forge-primary hover:bg-forge-highlight text-[#0C0A09] px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]">
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
