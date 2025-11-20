import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Placeholder: In a later step we can wire this to the backend
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 800)
  }

  return (
    <section id="contact" className="relative py-28 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something great</h2>
            <p className="mt-4 text-blue-100/90">Have a project in mind or want to collaborate? Drop a message.</p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Name" required />
              <input type="email" className="px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Email" required />
            </div>
            <input className="mt-4 w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Subject" />
            <textarea rows={5} className="mt-4 w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Your message" required />
            <div className="mt-4 flex items-center gap-4">
              <button className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">Send Message</button>
              {status && <p className="text-blue-200/80">{status}</p>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
