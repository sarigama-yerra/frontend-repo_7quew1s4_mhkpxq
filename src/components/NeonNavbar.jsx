import { useState, useEffect } from 'react'
import { Menu, X, Popcorn, Star, Sparkles, ShoppingCart, Instagram, Twitter, Github } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Flavors', href: '#flavors' },
  { label: 'Story', href: '#story' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '#contact' },
]

export default function NeonNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-fuchsia-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 4 }}
              className="relative"
            >
              <Popcorn className="w-8 h-8 text-fuchsia-400 drop-shadow-[0_0_12px_rgba(244,114,182,0.8)]" />
              <span className="absolute -inset-2 rounded-full blur-md bg-fuchsia-500/30 -z-10" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-white font-black tracking-widest text-sm">COSMIC</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-violet-400 font-extrabold">POPCORN</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-cyan-100/80 hover:text-white transition relative">
                <span className="relative z-10">{l.label}</span>
                <span className="absolute left-0 -bottom-1 h-px w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
              </a>
            ))}
            <a href="/shop" className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_28px_rgba(244,114,182,0.45)] transition">
              <ShoppingCart className="w-4 h-4" />
              <span>Buy Now</span>
              <span className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-fuchsia-500/40 to-cyan-500/40 -z-10" />
            </a>
          </div>

          <button onClick={() => setOpen((o) => !o)} className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-fuchsia-500/10 bg-black/60 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-3 rounded-lg text-cyan-50/90 hover:text-white hover:bg-white/5 border border-white/10">
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3">
                <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white"><Instagram className="w-4 h-4"/></a>
                <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white"><Twitter className="w-4 h-4"/></a>
                <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white"><Github className="w-4 h-4"/></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* neon divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />
    </div>
  )
}
