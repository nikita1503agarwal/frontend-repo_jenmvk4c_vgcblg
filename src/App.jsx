import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParallaxAbout from './components/ParallaxAbout'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(40%_40%_at_50%_0%,rgba(59,130,246,0.15),rgba(15,23,42,0))]" />
      <Navbar />
      <main>
        <Hero />
        <ParallaxAbout />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-8 text-blue-200/80 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="#home" className="hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
