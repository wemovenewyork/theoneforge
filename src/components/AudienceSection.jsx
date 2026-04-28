const cards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    iconColor: 'text-forge-primary',
    iconShadow: 'shadow-[0_0_15px_rgba(249,115,22,0.1)]',
    gradientFrom: 'from-forge-primary/10',
    title: 'Founders',
    desc: 'Go from idea to MVP in days, not months. Focus on product-market fit while Forge handles the boilerplate, deployments, and database schemas.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    iconColor: 'text-forge-secondary',
    iconShadow: 'shadow-[0_0_15px_rgba(245,158,11,0.1)]',
    gradientFrom: 'from-forge-secondary/10',
    title: 'Agencies',
    desc: "Multiply your team's output. Deliver high-quality, scalable client projects faster. Use natural language to iterate on client feedback instantly.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    iconColor: 'text-[#FBBF24]',
    iconShadow: 'shadow-[0_0_15px_rgba(251,191,36,0.1)]',
    gradientFrom: 'from-[#FBBF24]/10',
    title: 'Engineering Teams',
    desc: 'Integrate with your existing workflows. Generate PRs, manage complex DAG deployments, and maintain enterprise-grade code consistency.',
  },
]

export default function AudienceSection() {
  return (
    <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-forge-border/50">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Built for those who build</h2>
        <p className="text-forge-textSec">The intelligence to scale your ideas, whoever you are.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.title} className="group relative glass-panel rounded-2xl p-8 overflow-hidden glass-panel-hover transition-all duration-300">
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradientFrom} to-transparent reveal-overlay z-0`}></div>
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-xl bg-forge-surface border border-forge-border flex items-center justify-center mb-6 ${card.iconColor} group-hover:scale-110 transition-transform duration-300 ${card.iconShadow}`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-forge-textSec leading-relaxed">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
