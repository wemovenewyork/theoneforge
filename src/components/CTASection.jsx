export default function CTASection() {
  return (
    <section className="relative z-10 py-16 px-6 max-w-5xl mx-auto">
      <div className="glass-panel rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between border-forge-primary/30 shadow-[0_0_50px_rgba(249,115,22,0.1)] hover:shadow-[0_0_70px_rgba(249,115,22,0.15)] transition-shadow duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forge-primary/5 to-transparent z-0"></div>
        <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-3xl font-bold mb-3">Ready to ignite your next project?</h3>
          <p className="text-forge-textSec text-lg">Pay per project from <span className="text-forge-text font-semibold">$1,500</span>, or scale with a team plan.</p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button className="px-8 py-3.5 rounded-xl border border-forge-border hover:bg-forge-surface hover:text-forge-text text-forge-textSec transition-colors font-medium text-center">
            View Pricing
          </button>
          <button className="bg-forge-text text-forge-bg px-8 py-3.5 rounded-xl font-bold hover:bg-forge-primary transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] text-center">
            Start Forging
          </button>
        </div>
      </div>
    </section>
  )
}
