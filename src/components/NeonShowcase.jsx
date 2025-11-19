import { motion } from 'framer-motion'
import { Sparkles, Zap, Star, Flame, Cookie, Palette } from 'lucide-react'

const items = [
  {
    title: 'Galactic Grape Plasma',
    desc: 'Sticky-sour cosmic grape coated in neon glaze that glows under UV.',
    color: 'from-fuchsia-500 to-purple-500',
    icon: Palette,
  },
  {
    title: 'Hyperspeed Jalapeño',
    desc: 'Spicy velocity. Lime-ion thrusters. You will warp.',
    color: 'from-emerald-500 to-cyan-500',
    icon: Zap,
  },
  {
    title: 'Quantum Caramel Core',
    desc: 'Parallel caramel realities collapsing into crunchy perfection.',
    color: 'from-amber-400 to-rose-400',
    icon: Cookie,
  },
  {
    title: 'Nebula Butter Beam',
    desc: 'Silky butter amplified with starlight and a whisper of salt.',
    color: 'from-blue-500 to-indigo-500',
    icon: Flame,
  },
]

export default function NeonShowcase() {
  return (
    <section id="flavors" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80rem] h-[80rem] rounded-full bg-[conic-gradient(at_top_left,theme(colors.fuchsia.500/15),transparent_30%,theme(colors.cyan.500/15),transparent_60%,theme(colors.violet.500/15),transparent_90%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-8">Signature Flavors</h2>
          <p className="text-cyan-100/85 text-lg">Crafted in small cosmic batches with ridiculous attention to color, crunch and glow.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-xl overflow-hidden"
            >
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition blur-2xl bg-gradient-to-br ${it.color}`} />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/10 text-white mb-4">
                  <it.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{it.title}</h3>
                <p className="text-cyan-100/80 text-sm">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
