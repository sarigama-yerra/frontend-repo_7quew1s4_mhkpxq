import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function NeonHero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_20%,rgba(244,114,182,0.18),transparent_60%)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_60%_80%,rgba(34,211,238,0.20),transparent_60%)]"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.05] text-white drop-shadow-[0_0_25px_rgba(244,114,182,0.45)]">
            Neon-Fused Popcorn from Another Dimension
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-cyan-100/90">
            A cosmic crunch. Glowing flavors. Hyperspace freshness. Welcome to the most electrifying popcorn experience in the universe.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#shop" className="relative inline-flex items-center px-6 py-3 rounded-full text-white bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600 shadow-[0_0_30px_rgba(168,85,247,0.45)]">
              Shop Cosmic Flavors
              <span className="absolute inset-0 -z-10 rounded-full blur-xl bg-gradient-to-r from-fuchsia-500/50 via-violet-500/50 to-cyan-500/50" />
            </a>
            <a href="#story" className="px-6 py-3 rounded-full border border-white/20 text-white/90 hover:text-white bg-white/5">
              Our Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
