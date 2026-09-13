import { useEffect, useRef } from 'react'

export default function GoldenSpiral() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let t = 0

    const particles = Array.from({ length: 260 }, (_, i) => ({
      p: i / 259,
      lane: ((i * 7) % 17 - 8) / 8,
      seed: (i * 13.37) % 100,
      size: 0.75 + ((i * 11) % 7) * 0.16,
      alpha: 0.22 + ((i * 5) % 10) * 0.045,
    }))

    function resize() {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, rect.width)
      height = Math.max(1, rect.height)
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function curvePoint(p, lane, time) {
      // S-shaped sweep from lower-left to bright focal point on upper-right
      const x = width * (0.02 + p * 0.95)
      const centerY = height * (
        0.66
        - 0.33 * Math.sin((p - 0.12) * Math.PI * 1.08)
        - 0.16 * p
      )

      // Wider at the edges, tighter near the focal point
      const spread = height * (0.22 * (1 - p) + 0.025)
      const ripple = Math.sin(p * 18 + time * 0.9 + lane * 2.4) * 8
      const y = centerY + lane * spread + ripple

      return { x, y }
    }

    function drawFrame(now = 0) {
      t = reduceMotion ? 0 : now * 0.001
      ctx.clearRect(0, 0, width, height)

      // Soft gold atmosphere
      const glow = ctx.createRadialGradient(
        width * 0.89, height * 0.32, 0,
        width * 0.89, height * 0.32, width * 0.34
      )
      glow.addColorStop(0, 'rgba(255,195,55,0.17)')
      glow.addColorStop(0.26, 'rgba(218,156,29,0.08)')
      glow.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, width, height)

      // Perspective guide strands
      ctx.lineWidth = 0.8
      for (let lane = -7; lane <= 7; lane += 1) {
        ctx.beginPath()
        for (let step = 0; step <= 90; step++) {
          const p = step / 90
          const pt = curvePoint(p, lane / 7, t)
          if (step === 0) ctx.moveTo(pt.x, pt.y)
          else ctx.lineTo(pt.x, pt.y)
        }
        const a = 0.05 + (1 - Math.abs(lane) / 8) * 0.03
        ctx.strokeStyle = `rgba(222,169,47,${a})`
        ctx.stroke()
      }

      // Dots
      for (const item of particles) {
        const drift = reduceMotion ? 0 : ((t * 0.045 + item.seed * 0.0007) % 1)
        const p = (item.p + drift) % 1
        const waveLane = item.lane + Math.sin(t * 0.55 + item.seed) * 0.08
        const pt = curvePoint(p, waveLane, t)

        const focalBoost = Math.pow(p, 2.7)
        const pulse = reduceMotion ? 1 : 0.82 + Math.sin(t * 2.1 + item.seed) * 0.18
        const radius = item.size * (0.8 + focalBoost * 1.7) * pulse
        const alpha = Math.min(0.92, item.alpha + focalBoost * 0.4)

        ctx.beginPath()
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(233,181,55,${alpha})`
        ctx.fill()
      }

      // Bright convergence flare
      const fx = width * 0.90
      const fy = height * 0.31
      const flare = ctx.createRadialGradient(fx, fy, 0, fx, fy, 70)
      flare.addColorStop(0, 'rgba(255,232,151,0.98)')
      flare.addColorStop(0.12, 'rgba(246,192,63,0.82)')
      flare.addColorStop(0.45, 'rgba(218,154,26,0.18)')
      flare.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = flare
      ctx.fillRect(fx - 80, fy - 80, 160, 160)

      // flare rays
      ctx.save()
      ctx.translate(fx, fy)
      ctx.rotate(-0.12)
      const rg = ctx.createLinearGradient(-120, 0, 120, 0)
      rg.addColorStop(0, 'rgba(255,204,81,0)')
      rg.addColorStop(.48, 'rgba(255,217,111,.2)')
      rg.addColorStop(.5, 'rgba(255,235,173,.75)')
      rg.addColorStop(.52, 'rgba(255,217,111,.2)')
      rg.addColorStop(1, 'rgba(255,204,81,0)')
      ctx.fillStyle = rg
      ctx.fillRect(-150, -0.7, 300, 1.4)
      ctx.rotate(Math.PI / 2)
      ctx.fillRect(-90, -0.45, 180, 0.9)
      ctx.restore()

      if (!reduceMotion) raf = requestAnimationFrame(drawFrame)
    }

    resize()
    if (reduceMotion) drawFrame(0)
    else raf = requestAnimationFrame(drawFrame)

    const ro = new ResizeObserver(() => {
      resize()
      if (reduceMotion) drawFrame(0)
    })
    ro.observe(canvas)

    return () => {
      ro.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={ref} className="goldenSpiral" aria-hidden="true" />
}
