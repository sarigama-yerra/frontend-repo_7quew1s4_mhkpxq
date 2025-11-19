import NeonNavbar from './components/NeonNavbar'
import NeonHero from './components/NeonHero'
import NeonMarquee from './components/NeonMarquee'
import NeonShowcase from './components/NeonShowcase'
import NeonFooter from './components/NeonFooter'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(244,114,182,0.08),transparent_60%)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_80%_20%,rgba(34,211,238,0.08),transparent_60%)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(900px_450px_at_50%_90%,rgba(147,51,234,0.10),transparent_60%)]"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"/>
      </div>

      <NeonNavbar />
      <NeonHero />
      <NeonMarquee />
      <NeonShowcase />

      {/* Story section */}
      <section id="story" className="relative py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"/>
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-6">Our Neon Origin</h2>
            <p className="text-cyan-100/85 text-lg">We started in a micro-lab where color meets crunch. Our mission: snack experiences that feel like main stage visuals. Each kernel passes through an ionized flavor tunnel, emerging with a glow and a grin.</p>
            <p className="mt-4 text-cyan-100/80">We don’t just pop; we orchestrate detonations synchronized to synth arpeggios. Sustainability matters too—our glow is food-safe, plant-derived, and party-approved.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-cyan-500/20 blur-2xl"/>
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <ul className="space-y-4 text-cyan-100/80">
                <li>• UV-reactive glazes for that dancefloor glow</li>
                <li>• Small-batch, locally sourced kernels</li>
                <li>• Recyclable neon pouches with reseal tech</li>
                <li>• Flavor engineering with real ingredients</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shop teaser */}
      <section id="shop" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-6">Glow Shop</h2>
          <p className="text-cyan-100/85 max-w-2xl mx-auto">Grab limited drops, flavor bundles, and accessories that light up your night.</p>
          <div className="mt-10 inline-flex rounded-full overflow-hidden border border-white/10">
            <a href="#" className="px-6 py-3 bg-white/5 text-white/90 hover:text-white">View All</a>
            <a href="#" className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-cyan-600">Limited Drop</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-3xl font-bold mb-4">Beam Us A Message</h3>
            <form className="grid sm:grid-cols-2 gap-4">
              <input className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Name" />
              <input className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Email" />
              <textarea className="sm:col-span-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500/40" rows={4} placeholder="Your message" />
              <div className="sm:col-span-2">
                <button className="relative inline-flex items-center px-6 py-3 rounded-full text-white bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600 shadow-[0_0_30px_rgba(168,85,247,0.45)]">Send Transmission</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <NeonFooter />
    </div>
  )
}

export default App
