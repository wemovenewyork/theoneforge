const productLinks = ['Pipeline', 'DAG Visualizer', 'Deployments', 'Pricing']
const resourceLinks = ['Documentation', 'API Reference', 'Blog', 'Community']

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-forge-border/40 mt-12 bg-forge-bg pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-forge-primary to-forge-secondary p-[1px]">
                <div className="w-full h-full bg-forge-surface rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-forge-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <span className="font-cinzel font-bold text-xl tracking-wide text-forge-text">THE ONE FORGE</span>
            </div>
            <p className="text-forge-textSec italic font-serif text-lg mb-8 max-w-sm">"One Forge to build them all..."</p>
            <div className="flex gap-5">
              <a href="#" className="text-forge-muted hover:text-forge-primary transition-colors transform hover:-translate-y-1">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-forge-muted hover:text-forge-primary transition-colors transform hover:-translate-y-1">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-semibold mb-5 text-forge-text tracking-wide">Product</h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link}><a href="#" className="text-sm text-forge-textSec hover:text-forge-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Resource links */}
          <div>
            <h4 className="font-semibold mb-5 text-forge-text tracking-wide">Resources</h4>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link}><a href="#" className="text-sm text-forge-textSec hover:text-forge-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-center pt-10 border-t border-forge-border/30 relative">
          <div className="text-forge-primary/30 text-4xl font-serif mb-5 hover:text-forge-primary transition-colors cursor-default drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]" title="Fehu - Wealth/Forge">
            ᚠ
          </div>
          <div className="text-sm text-forge-muted font-medium tracking-wide">
            © 2024 The One Forge, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
