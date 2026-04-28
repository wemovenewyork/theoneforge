export default function FeaturesSection() {
  return (
    <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-forge-border/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">A Cinematic Build Experience</h2>
        <p className="text-forge-textSec max-w-2xl mx-auto text-lg">Every detail crafted for developers who care about the journey from idea to infrastructure.</p>
      </div>

      <div className="grid grid-cols-12 gap-6 auto-rows-[240px]">
        {/* DAG Pipeline - large */}
        <div className="col-span-12 lg:col-span-8 row-span-2 glass-panel rounded-3xl p-0 relative group overflow-hidden flex flex-col transition-colors hover:border-forge-borderStrong hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-forge-primary/5 z-0 reveal-overlay"></div>
          <div className="p-8 pb-0 relative z-10">
            <h3 className="text-2xl font-bold mb-2">Intelligent DAG Pipeline</h3>
            <p className="text-forge-textSec max-w-md">Visualize and execute complex build dependencies. Forge understands what needs compiling before linking.</p>
          </div>
          <div className="flex-1 relative w-full mt-4 overflow-hidden z-10 flex items-center justify-center p-8">
            <div className="w-full max-w-md bg-[#080706] rounded-xl border border-forge-border shadow-2xl p-5 flex flex-col gap-4 transform group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(249,115,22,0.15)] transition-all duration-500">
              {/* Step 1 */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-forge-surface border border-forge-primary/50 flex items-center justify-center text-xs text-forge-primary shadow-[0_0_10px_rgba(249,115,22,0.3)]">1</div>
                <div className="flex-1 h-12 bg-forge-surfaceAlt rounded-lg border border-forge-border flex items-center px-4 justify-between">
                  <span className="text-sm font-medium">Initialize Schema</span>
                  <span className="text-xs text-green-500 font-medium">Done</span>
                </div>
              </div>
              {/* Connectors */}
              <div className="w-full pl-4 flex gap-4">
                <div className="w-px h-6 bg-forge-borderStrong ml-4"></div>
                <div className="w-px h-6 bg-forge-borderStrong ml-12"></div>
              </div>
              {/* Step 2 */}
              <div className="flex gap-4 pl-8">
                <div className="flex-1 flex flex-col gap-3">
                  <div className="h-12 bg-forge-surfaceAlt rounded-lg border border-forge-primary/40 flex items-center px-4 justify-between shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                    <span className="text-sm font-medium text-forge-primary">Build API</span>
                    <div className="w-4 h-4 rounded-full border-2 border-forge-primary border-t-transparent animate-spin"></div>
                  </div>
                  <div className="h-12 bg-forge-surfaceAlt/50 rounded-lg border border-forge-border/50 flex items-center px-4 justify-between">
                    <span className="text-sm font-medium text-forge-muted">Generate UI</span>
                    <span className="text-xs text-forge-muted">Queued</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Context */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-1 glass-panel rounded-3xl p-8 relative group overflow-hidden transition-colors hover:border-forge-borderStrong hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
            <svg className="w-32 h-32 text-forge-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-forge-surface border border-forge-border flex items-center justify-center mb-5 text-forge-primary shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Deep Context</h3>
            </div>
            <p className="text-sm text-forge-textSec leading-relaxed">Forge reads your entire codebase to make structural decisions, not just line edits.</p>
          </div>
        </div>

        {/* Global Edge */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-1 glass-panel rounded-3xl p-8 relative group overflow-hidden transition-colors hover:border-forge-borderStrong hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-forge-secondary/10 blur-[40px] rounded-full group-hover:bg-forge-secondary/20 transition-colors duration-500"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-forge-surface border border-forge-border flex items-center justify-center mb-5 text-forge-secondary shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Edge</h3>
            </div>
            <p className="text-sm text-forge-textSec leading-relaxed">Deploy to the edge instantly. Global CDNs configured automatically on successful build.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
