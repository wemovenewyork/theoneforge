import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import TopBanner from './components/TopBanner'
import Navbar from './components/Navbar'

// Home page sections
import HeroSection from './components/HeroSection'
import AudienceSection from './components/AudienceSection'
import MetricsSection from './components/MetricsSection'
import FeaturesSection from './components/FeaturesSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

// Pages
import Overview from './pages/Overview'
import Pricing from './pages/Pricing'
import Docs from './pages/Docs'
import Workspace from './pages/Workspace'

function Home() {
  return (
    <>
      <main className="relative w-full">
        {/* Background light beams */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] md:w-[150vw] h-[1000px] pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-forge-primary/20 to-transparent blur-[80px] rounded-full animate-pulse-glow" />
          <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[60%] h-[1200px] rounded-[100%] border-t border-white/40 shadow-[0_-10px_30px_rgba(255,255,255,0.1)]" />
          <div className="absolute top-[130px] left-1/2 -translate-x-1/2 w-[70%] h-[1200px] rounded-[100%] border-t border-[#FDE68A]/40 shadow-[0_-15px_40px_rgba(253,230,138,0.1)]" />
          <div className="absolute top-[160px] left-1/2 -translate-x-1/2 w-[80%] h-[1200px] rounded-[100%] border-t border-[#FCD34D]/50 shadow-[0_-20px_50px_rgba(252,211,77,0.15)]" />
          <div className="absolute top-[190px] left-1/2 -translate-x-1/2 w-[90%] h-[1200px] rounded-[100%] border-t border-[#FBBF24]/60 shadow-[0_-25px_60px_rgba(251,191,36,0.2)]" />
          <div className="absolute top-[220px] left-1/2 -translate-x-1/2 w-[100%] h-[1200px] rounded-[100%] border-t border-forge-primary/70 shadow-[0_-30px_80px_rgba(249,115,22,0.3)]" />
          <div className="absolute top-[300px] left-0 w-full h-[700px] bg-gradient-to-b from-transparent to-forge-bg" />
        </div>
        <HeroSection />
        <AudienceSection />
        <MetricsSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-forge-bg text-forge-text font-sans antialiased overflow-x-hidden">
        <TopBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/workspace" element={<Workspace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
