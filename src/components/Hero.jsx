import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-blue-300/90 text-sm tracking-widest uppercase mb-4">Designer • Developer • Dreamer</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white">
            I craft interactive, playful, modern digital experiences
          </h1>
          <p className="mt-6 text-blue-100/90 text-lg max-w-xl">
            A fusion of motion, depth, and thoughtful design — scroll to explore work, skills, and how we can collaborate.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
