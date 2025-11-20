import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Portfolio',
    desc: 'A 3D-enhanced portfolio with Spline hero and buttery-smooth motion.',
    tags: ['React', 'Spline', 'Framer Motion'],
    links: { github: '#', live: '#' },
  },
  {
    title: 'AI UI Kit',
    desc: 'A polished component kit inspired by modern AI tools.',
    tags: ['Radix', 'Tailwind', 'Design Systems'],
    links: { github: '#', live: '#' },
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Data-viz heavy dashboard with delightful micro-interactions.',
    tags: ['FastAPI', 'MongoDB', 'Charts'],
    links: { github: '#', live: '#' },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.12),transparent_50%),radial-gradient(circle_at_80%_100%,rgba(99,102,241,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
            <p className="text-blue-200/80 mt-2">A few projects that blend creativity with engineering</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/10 to-indigo-500/10" />
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-blue-100/90">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-black/20 text-blue-100 text-xs border border-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href={p.links.github} className="text-blue-100 hover:text-white inline-flex items-center gap-1">
                  <Github size={18} /> Code
                </a>
                <a href={p.links.live} className="text-blue-100 hover:text-white inline-flex items-center gap-1">
                  <ExternalLink size={18} /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
