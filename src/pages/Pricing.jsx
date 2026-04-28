import { useState } from 'react'
import Footer from '../components/Footer'

const plans = [
  {
    name: 'Spark',
    tagline: 'For solo builders',
    price: { monthly: 0, annual: 0 },
    cta: 'Start Free',
    ctaStyle: 'border border-forge-border hover:bg-forge-surface hover:text-forge-text text-forge-textSec',
    highlight: false,
    features: [
      '3 projects / month',
      '50K tokens per build',
      'Community support',
      'Public deployments',
      'GitHub integration',
    ],
    missing: ['Custom domains', 'Private repos', 'Team seats', 'Priority builds', 'SLA'],
  },
  {
    name: 'Forge',
    tagline: 'For serious builders',
    price: { monthly: 49, annual: 39 },
    cta: 'Start Building',
    ctaStyle: 'bg-forge-primary hover:bg-forge-highlight text-[#0C0A09] shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Unlimited projects',
      '2M tokens per build',
      'Priority support',
      'Custom domains',
      'Private repos',
      'Advanced DAG editor',
      'Edge deployments',
    ],
    missing: ['Team seats', 'SLA'],
  },
  {
    name: 'Foundry',
    tagline: 'For teams & agencies',
    price: { monthly: 199, annual: 159 },
    cta: 'Contact Sales',
    ctaStyle: 'border border-forge-borderStrong hover:bg-forge-surfaceAlt text-forge-text',
    highlight: false,
    features: [
      'Everything in Forge',
      'Up to 20 team seats',
      '10M tokens per build',
      'Dedicated support',
      'SOC 2 compliance',
      'Audit logs',
      'SSO / SAML',
      '99.9% uptime SLA',
    ],
    missing: [],
  },
]

const faqs = [
  {
    q: 'What counts as a "project"?',
    a: 'A project is one prompt-to-deployment cycle — from describing your app to having it live. You can make unlimited edits and re-deploys within the same project.',
  },
  {
    q: 'What are tokens?',
    a: 'Tokens are units of AI work. A typical full-stack app build uses around 200K–400K tokens. The Forge plan gives you 2M per build — enough for complex, multi-service architectures.',
  },
  {
    q: 'Can I switch plans anytime?',
    a: "Yes. Upgrade or downgrade at any time from your workspace settings. Unused credits are prorated and applied to your next billing cycle.",
  },
  {
    q: 'Do you offer a free trial for paid plans?',
    a: 'Every paid plan starts with a 14-day free trial. No credit card required to begin.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards and ACH bank transfers via Stripe. Enterprise customers can pay by invoice.',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="bg-forge-bg text-forge-text font-sans antialiased min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-radial from-forge-secondary/10 to-transparent blur-[80px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forge-surfaceAlt/60 border border-forge-border mb-8 text-sm text-forge-textSec">
            Simple, transparent pricing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Pay for what you <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forge-primary via-forge-secondary to-[#FDE68A]">actually build</span>
          </h1>
          <p className="text-forge-textSec text-xl max-w-xl mx-auto mb-10">
            No seat-based gotchas. No surprise overages. Scale from side project to production team.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-forge-surfaceAlt border border-forge-border rounded-xl p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${!annual ? 'bg-forge-surface text-forge-text shadow' : 'text-forge-textSec'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${annual ? 'bg-forge-surface text-forge-text shadow' : 'text-forge-textSec'}`}
            >
              Annual
              <span className="text-xs bg-forge-primary/20 text-forge-primary px-2 py-0.5 rounded-full font-semibold">-20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-8 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-panel rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? 'border-forge-primary/40 shadow-[0_0_50px_rgba(249,115,22,0.15)]'
                  : 'glass-panel-hover'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-forge-primary text-[#0C0A09] text-xs font-bold px-4 py-1 rounded-full tracking-wide">
                  {plan.badge}
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-forge-textSec text-sm mb-6">{plan.tagline}</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold">
                    {plan.price.monthly === 0 ? 'Free' : `$${annual ? plan.price.annual : plan.price.monthly}`}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-forge-textSec mb-2">/mo</span>
                  )}
                </div>
                {plan.price.monthly > 0 && annual && (
                  <p className="text-forge-muted text-xs mt-1">Billed annually</p>
                )}
              </div>

              <button className={`w-full py-3 rounded-xl font-semibold transition-all mb-8 ${plan.ctaStyle}`}>
                {plan.cta}
              </button>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg className="w-4 h-4 text-forge-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-forge-text">{f}</span>
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg className="w-4 h-4 text-forge-muted mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-forge-muted">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Per-project option */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-forge-borderStrong/50">
          <div>
            <div className="text-forge-secondary text-sm font-semibold uppercase tracking-wider mb-2">One-off builds</div>
            <h3 className="text-2xl font-bold mb-2">Pay per project — from $1,500</h3>
            <p className="text-forge-textSec">Need a one-time build? Pay once, own it forever. Includes one round of revisions.</p>
          </div>
          <button className="shrink-0 px-8 py-3.5 rounded-xl border border-forge-border hover:bg-forge-surface text-forge-textSec hover:text-forge-text transition-all font-medium">
            Learn More
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-panel rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-medium">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-forge-muted transition-transform duration-200 shrink-0 ml-4 ${openFaq === i ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 text-forge-textSec text-sm leading-relaxed border-t border-forge-border/50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
