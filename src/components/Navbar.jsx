export default function Navbar() {
  return (
    <nav className="fixed top-[32px] left-0 right-0 z-40 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 py-3 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-forge-primary to-forge-secondary p-[1px]">
            <div className="w-full h-full bg-forge-surface rounded-lg flex items-center justify-center group-hover:bg-forge-bg transition-colors">
              <svg className="w-5 h-5 text-forge-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <span className="font-cinzel font-bold text-xl tracking-wide text-forge-text group-hover:text-glow transition-all">THE ONE FORGE</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Overview', 'Pricing', 'Docs', 'Workspace'].map((item) => (
            <a key={item} href="#" className="text-forge-textSec hover:text-forge-text text-sm font-medium transition-colors">{item}</a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-forge-textSec hover:text-forge-text text-sm font-medium transition-colors hidden sm:block">Sign In</button>
          <button className="bg-forge-primary hover:bg-forge-highlight text-[#0C0A09] px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
