import { Instagram, Twitter, Youtube, Mail } from 'lucide-react'

export default function NeonFooter() {
  return (
    <footer className="relative mt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(244,114,182,0.12),transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-white font-bold mb-3">Cosmic Popcorn</h4>
            <p className="text-cyan-100/80 text-sm">Hand-forged kernels bathed in neon. We craft snacks from a brighter timeline.</p>
          </div>
          <div>
            <h5 className="text-white/90 font-semibold mb-3">Company</h5>
            <ul className="space-y-2 text-cyan-100/80 text-sm">
              <li><a href="#story" className="hover:text-white">About</a></li>
              <li><a href="#shop" className="hover:text-white">Shop</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white/90 font-semibold mb-3">Help</h5>
            <ul className="space-y-2 text-cyan-100/80 text-sm">
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white/90 font-semibold mb-3">Follow</h5>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white"><Instagram className="w-4 h-4"/></a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white"><Twitter className="w-4 h-4"/></a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white"><Youtube className="w-4 h-4"/></a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white"><Mail className="w-4 h-4"/></a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs text-cyan-100/60">© {new Date().getFullYear()} Cosmic Popcorn. All rights reserved.</div>
      </div>
    </footer>
  )
}
