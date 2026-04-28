const barHeights = ['30%', '45%', '20%', '60%', '75%', '50%', '85%', '65%', '90%', '88%']
const barOpacities = [0.2, 0.3, 0.2, 0.4, 0.6, 0.4, 0.8, 0.5, 0.9, 1.0]

export default function MetricsSection() {
  return (
    <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <div className="text-forge-primary text-sm font-semibold tracking-wider uppercase mb-2">Live Metrics</div>
          <h2 className="text-3xl font-bold">Production Snapshot</h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm text-forge-textSec bg-forge-surface px-4 py-2 rounded-lg border border-forge-border shadow-[0_0_20px_rgba(249,115,22,0.05)]">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Systems Operational
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 auto-rows-[160px]">
        {/* Code Readiness - large */}
        <div className="col-span-12 md:col-span-8 row-span-2 glass-panel rounded-3xl p-8 relative group overflow-hidden transition-colors hover:border-forge-borderStrong hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-br from-forge-primary/5 to-transparent reveal-overlay"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium text-forge-textSec mb-1">Code Readiness</h3>
              <div className="text-5xl font-bold text-forge-text">88<span className="text-2xl text-forge-muted">%</span></div>
            </div>
            <div className="w-full h-32 flex items-end gap-2 mt-4">
              {barHeights.map((h, i) => (
                <div key={i} className="flex-1 bg-forge-surfaceAlt rounded-t-sm relative group-hover:bg-forge-border transition-colors" style={{ height: h }}>
                  <div
                    className="absolute inset-x-0 bottom-0 bg-forge-primary rounded-t-sm h-full"
                    style={{
                      opacity: barOpacities[i],
                      boxShadow: barOpacities[i] > 0.7 ? `0 0 ${barOpacities[i] * 20}px rgba(249,115,22,${barOpacities[i] * 0.8})` : 'none',
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verification */}
        <div className="col-span-12 md:col-span-4 row-span-1 glass-panel rounded-3xl p-6 relative group overflow-hidden flex flex-col justify-center transition-colors hover:border-forge-borderStrong hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-bl from-forge-secondary/10 to-transparent reveal-overlay"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-forge-textSec mb-1">Verification</h3>
              <div className="text-3xl font-bold text-forge-text">75%</div>
            </div>
            <div className="w-16 h-16 relative">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-forge-surfaceAlt" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-forge-secondary" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="col-span-12 md:col-span-4 row-span-1 glass-panel rounded-3xl p-6 relative group overflow-hidden transition-colors hover:border-forge-borderStrong hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-tl from-green-500/10 to-transparent reveal-overlay"></div>
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <h3 className="text-sm font-medium text-forge-textSec">Status</h3>
            </div>
            <div className="text-2xl font-bold text-forge-text">Delivery Ready</div>
          </div>
        </div>

        {/* First Pass Success */}
        <div
          className="col-span-12 md:col-span-6 row-span-1 glass-panel rounded-3xl p-6 relative group overflow-hidden transition-colors hover:border-forge-borderStrong hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjQ5LCAxMTUsIDIyLCAwLjEpIi8+PC9zdmc+")`,
            backgroundSize: '20px 20px',
          }}
        >
          <div className="absolute inset-0 bg-forge-bg/80 backdrop-blur-sm z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-forge-highlight/5 to-transparent reveal-overlay z-10"></div>
          <div className="relative z-20 flex items-center justify-between h-full">
            <div>
              <h3 className="text-sm font-medium text-forge-textSec mb-1">First Pass Success</h3>
              <div className="text-4xl font-bold text-forge-text">100%</div>
            </div>
            <div className="px-4 py-2 rounded-full bg-forge-primary/10 border border-forge-primary/20 text-forge-primary text-sm font-semibold flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Optimal
            </div>
          </div>
        </div>

        {/* Latest Deployment */}
        <div className="col-span-12 md:col-span-6 row-span-1 glass-panel rounded-3xl p-6 relative group overflow-hidden transition-colors hover:border-forge-borderStrong hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-forge-textSec mb-1">Latest Deployment</h3>
                <div className="text-lg font-bold text-forge-text">MeridianAPI Gateway</div>
              </div>
              <span className="text-xs text-forge-muted">2m ago</span>
            </div>
            <div className="flex gap-2">
              {['Node.js', 'Postgres', 'Redis'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-md bg-forge-surfaceAlt text-xs text-forge-textSec border border-forge-border">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
