import { useRef, useEffect } from 'react'

export default function NeonMarquee() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = null
    let raf
    const speed = 40 // px/sec

    const step = (t) => {
      if (!start) start = t
      const delta = (t - start) / 1000
      el.scrollLeft = (delta * speed) % el.scrollWidth
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  const words = ['NEON', 'GLITCH', 'COSMIC', 'POPCORN', 'ULTRAVIOLET', 'GLOW', 'CRUNCH', 'HYPERSPACE']

  return (
    <div className="relative py-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent"/>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"/>
      </div>

      <div ref={ref} className="[scrollbar-width:none] overflow-x-auto whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, k) => (
          <span key={k} className="mx-6 inline-flex items-center gap-4 text-3xl sm:text-5xl font-black tracking-wide">
            {words.map((w, i) => (
              <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 drop-shadow-[0_0_18px_rgba(99,102,241,0.45)]">
                {w}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
