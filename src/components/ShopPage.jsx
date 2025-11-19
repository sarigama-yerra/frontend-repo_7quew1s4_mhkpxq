import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Popcorn, ShoppingCart, Filter, Star, Sparkles, Gift, Truck, BadgePercent, Flame, Plus, Minus, Check, X } from 'lucide-react'

const PRODUCTS = [
  {
    id: 'nebula-nectar',
    name: 'Nebula Nectar',
    tag: 'Best Seller',
    price: 14.0,
    badge: 'UV-Glow',
    rating: 4.9,
    color: 'from-fuchsia-500 via-violet-500 to-cyan-500',
    desc: 'Iridescent cotton-candy glaze with cosmic citrus pops.',
  },
  {
    id: 'ion-mango',
    name: 'Ion-Mango Reactor',
    tag: 'Limited',
    price: 15.0,
    badge: 'Spicy',
    rating: 4.8,
    color: 'from-amber-500 via-rose-500 to-fuchsia-500',
    desc: 'Voltage-soaked mango ribbons with capsaicin spark.',
  },
  {
    id: 'cyber-lime',
    name: 'Cyber Lime Cascade',
    tag: 'New',
    price: 13.0,
    badge: 'Zesty',
    rating: 4.7,
    color: 'from-lime-400 via-emerald-500 to-cyan-500',
    desc: 'Quantum lime shards and minty ion drift.',
  },
  {
    id: 'plasma-caramel',
    name: 'Plasma Caramel',
    tag: 'Classic',
    price: 12.0,
    badge: 'Velvet',
    rating: 4.6,
    color: 'from-amber-400 via-yellow-500 to-orange-500',
    desc: 'Buttery plasma-cooked caramel with sub-bass crunch.',
  },
  {
    id: 'midnight-berry',
    name: 'Midnight Berry Strobe',
    tag: 'Fan Favorite',
    price: 14.0,
    badge: 'UV-Glow',
    rating: 4.9,
    color: 'from-indigo-500 via-fuchsia-500 to-rose-500',
    desc: 'Night-bloom berries with a fluorescent fizz.',
  },
  {
    id: 'cosmic-cheese',
    name: 'Cosmic Cheese Rift',
    tag: 'Savory',
    price: 13.0,
    badge: 'Umami+',
    rating: 4.5,
    color: 'from-orange-500 via-yellow-400 to-lime-400',
    desc: 'Aged nebula cheddar with gravity-fold crunch.',
  },
]

const CATEGORIES = ['All', 'Sweet', 'Savory', 'Limited', 'Bundles', 'Accessories']

export default function ShopPage() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('All')
  const [cart, setCart] = useState({})
  const [openCart, setOpenCart] = useState(false)

  const filtered = useMemo(() => {
    let list = PRODUCTS
    if (active !== 'All') {
      if (active === 'Sweet') list = PRODUCTS.filter(p => ['Nebula Nectar','Ion-Mango Reactor','Midnight Berry Strobe','Plasma Caramel'].includes(p.name))
      if (active === 'Savory') list = PRODUCTS.filter(p => ['Cosmic Cheese Rift','Cyber Lime Cascade'].includes(p.name))
      if (active === 'Limited') list = PRODUCTS.filter(p => p.tag === 'Limited')
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
    }
    return list
  }, [query, active])

  const subtotal = useMemo(() => {
    return Object.entries(cart).reduce((acc, [id, qty]) => {
      const prod = PRODUCTS.find(p => p.id === id)
      return acc + (prod ? prod.price * qty : 0)
    }, 0)
  }, [cart])

  const add = (id) => setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  const dec = (id) => setCart(prev => {
    const next = { ...prev }
    if (!next[id]) return prev
    next[id] = Math.max(0, next[id] - 1)
    if (next[id] === 0) delete next[id]
    return next
  })
  const clear = () => setCart({})

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background glows */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_15%_10%,rgba(244,114,182,0.10),transparent_60%)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(900px_450px_at_85%_20%,rgba(34,211,238,0.10),transparent_60%)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_90%,rgba(147,51,234,0.12),transparent_60%)]"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"/>
      </div>

      {/* Header */}
      <section className="relative pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-cyan-500/20 blur-2xl"/>
            <div className="relative p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <Popcorn className="w-8 h-8 text-fuchsia-400 drop-shadow-[0_0_12px_rgba(244,114,182,0.8)]"/>
                    <span className="text-sm tracking-widest text-white/70">COSMIC POPCORN</span>
                  </div>
                  <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-violet-400">Glow Shop</span>
                  </h1>
                  <p className="mt-3 text-cyan-100/85 max-w-2xl">Ultra-vivid flavors engineered in our neon lab. Stock up on limited drops, signature mixes, and accessories that light up the night.</p>
                </div>
                <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch gap-3">
                  <div className="relative flex-1">
                    <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search flavors, vibes, effects..." className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 placeholder:text-white/40"/>
                    <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-fuchsia-400"/>
                  </div>
                  <button onClick={()=>setOpenCart(true)} className="relative inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600 shadow-[0_0_24px_rgba(168,85,247,0.45)]">
                    <ShoppingCart className="w-5 h-5"/>
                    <span>Cart</span>
                    {Object.keys(cart).length>0 && (
                      <span className="ml-2 inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-white/90 text-black">{Object.keys(cart).length}</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="mt-8 flex flex-wrap items-center gap-2">
                {CATEGORIES.map(c => (
                  <button key={c} onClick={()=>setActive(c)} className={`px-4 py-2 rounded-full border text-sm transition ${active===c? 'bg-gradient-to-r from-fuchsia-600 to-cyan-600 border-white/10' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                    <div className="flex items-center gap-2">
                      {c==='Bundles' && <Gift className="w-4 h-4"/>}
                      {c==='Accessories' && <Filter className="w-4 h-4"/>}
                      <span>{c}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, idx) => (
              <motion.div key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx*0.06 }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition from-fuchsia-500/20 via-violet-500/20 to-cyan-500/20 blur-2xl"/>
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                      <BadgePercent className="w-3 h-3"/> {p.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-amber-300">
                      <Star className="w-4 h-4 fill-amber-300"/> {p.rating}
                    </span>
                  </div>
                  <div className="mt-6 h-36 rounded-2xl border border-white/10 bg-gradient-to-r ${p.color}"/>
                  <h3 className="mt-6 text-xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-white/70 text-sm">{p.desc}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-2xl font-extrabold tracking-tight">${'{'}p.price.toFixed(2){'}'}</div>
                    <div className="flex items-center gap-2">
                      <button onClick={()=>dec(p.id)} className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"><Minus className="w-4 h-4"/></button>
                      <span className="min-w-[2ch] text-center">{cart[p.id] || 0}</span>
                      <button onClick={()=>add(p.id)} className="p-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-cyan-600"><Plus className="w-4 h-4"/></button>
                    </div>
                  </div>
                  <button onClick={()=>{ add(p.id); setOpenCart(true) }} className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15">
                    <ShoppingCart className="w-4 h-4"/> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-600/10 via-violet-600/10 to-cyan-600/10">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-cyan-500/20 blur-2xl"/>
            <div className="relative p-8 sm:p-12 grid lg:grid-cols-2 gap-10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  <Gift className="w-3 h-3"/> Bundles
                </div>
                <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold">Neon Party Pack</h2>
                <p className="mt-3 text-white/80">Six signature flavors, a limited UV tote, and glow stickers. Designed for house parties, gaming sessions, and midnight movie marathons.</p>
                <ul className="mt-6 space-y-3 text-white/80">
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-emerald-400"/> Six full-size pouches</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-emerald-400"/> UV-reactive accessories</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-emerald-400"/> Free shipping</li>
                </ul>
                <div className="mt-8 flex items-center gap-4">
                  <button onClick={()=>{ add('nebula-nectar'); add('ion-mango'); add('midnight-berry'); setOpenCart(true) }} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600 shadow-[0_0_24px_rgba(168,85,247,0.45)]">
                    <Flame className="w-5 h-5"/> Add Party Pack
                  </button>
                  <div className="text-white/70 flex items-center gap-2"><Truck className="w-5 h-5"/> Ships in 24h</div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-cyan-500/20 blur-2xl"/>
                <div className="relative h-72 rounded-3xl border border-white/10 bg-[conic-gradient(at_50%_50%,#ec4899_0deg,#8b5cf6_120deg,#06b6d4_240deg,#ec4899_360deg)]"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h3 className="text-2xl font-bold mb-6">Accessories</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="h-32 rounded-2xl border border-white/10 bg-gradient-to-r from-fuchsia-500/30 via-violet-500/30 to-cyan-500/30"/>
                <h4 className="mt-4 font-bold">Glow Accessory #{i}</h4>
                <p className="text-sm text-white/70">UV-reactive merch that completes your neon ritual.</p>
                <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15"><ShoppingCart className="w-4 h-4"/> Add</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold">Turn movie night into a neon ritual</h2>
          <p className="mt-3 text-white/80">Free shipping over $30. Secure checkout. Food-safe glow guaranteed.</p>
          <button onClick={()=>setOpenCart(true)} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600 text-lg shadow-[0_0_34px_rgba(168,85,247,0.55)]">
            <ShoppingCart className="w-5 h-5"/> Review Cart
          </button>
        </div>
      </section>

      {/* Cart Drawer */}
      <AnimatePresence>
        {openCart && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50">
            <div onClick={()=>setOpenCart(false)} className="absolute inset-0 bg-black/70"/>
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 180, damping: 20 }} className="absolute right-0 top-0 h-full w-full sm:w-[460px] bg-black border-l border-white/10">
              <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-fuchsia-400"/>
                  <span className="font-bold">Your Cart</span>
                </div>
                <button onClick={()=>setOpenCart(false)} className="p-2 rounded-lg bg-white/5 border border-white/10"><X className="w-4 h-4"/></button>
              </div>

              <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-8rem)]">
                {Object.keys(cart).length === 0 && (
                  <div className="text-white/70">Your cart is glowing... but empty.</div>
                )}
                {Object.entries(cart).map(([id, qty]) => {
                  const prod = PRODUCTS.find(p => p.id === id)
                  if (!prod) return null
                  return (
                    <div key={id} className="relative rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-sm text-white/70">{prod.tag}</div>
                          <div className="font-bold">{prod.name}</div>
                          <div className="text-white/70">${'{'}prod.price.toFixed(2){'}'}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={()=>dec(id)} className="p-2 rounded-lg bg-white/5 border border-white/10"><Minus className="w-4 h-4"/></button>
                          <span>{qty}</span>
                          <button onClick={()=>add(id)} className="p-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-cyan-600"><Plus className="w-4 h-4"/></button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="h-16 border-t border-white/10 flex items-center justify-between px-6">
                <div>
                  <div className="text-xs text-white/50">Subtotal</div>
                  <div className="text-xl font-extrabold">${'{'}subtotal.toFixed(2){'}'}</div>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={clear} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">Clear</button>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-cyan-600">Checkout</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent"/>
      <div className="pb-12"/>
    </div>
  )
}
