import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxAbout() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7])

  return (
    <section id="about" ref={ref} className="relative py-28 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div style={{ opacity }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-blue-100/90 leading-relaxed">
              I’m a multidisciplinary engineer focused on crafting delightful interfaces and performant systems. I love blending 3D, motion, and crisp typography to deliver memorable experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'Three.js', 'Spline', 'Framer Motion', 'FastAPI', 'MongoDB'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/10 text-blue-100 text-sm border border-white/10">{t}</span>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
              <div className="grid grid-cols-3 gap-3 h-full">
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-xl bg-white/5 border border-white/10"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
