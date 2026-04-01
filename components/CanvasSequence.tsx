'use client'
import { useState, useEffect, useRef } from 'react'
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion'

const TOTAL_FRAMES = 60

export default function CanvasSequence() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const framesRef = useRef<HTMLCanvasElement[]>([])

  // 1. Initial mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // 2. Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // 3. Frame generation (client-only)
  useEffect(() => {
    if (!mounted) return

    // Pre-calculate window dimensions (client-only)
    const w = window.innerWidth
    const h = window.innerHeight

    framesRef.current = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const off = document.createElement('canvas')
      off.width = w
      off.height = h
      const ctx = off.getContext('2d')!

      const hue = (i / TOTAL_FRAMES) * 280 + 200
      const grad = ctx.createLinearGradient(0, 0, w, h)
      grad.addColorStop(0, `hsl(${hue},80%,8%)`)
      grad.addColorStop(1, `hsl(${hue + 60},80%,18%)`)
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      ctx.strokeStyle = `hsl(${hue + 120},100%,70%)`
      ctx.lineWidth = 1
      ctx.globalAlpha = 0.15
      for (let r = 0; r < 6; r++) {
        ctx.beginPath()
        ctx.arc(w / 2, h / 2, 80 + r * 60 + i * 0.5, 0, Math.PI * 2)
        ctx.stroke()
      }
      return off
    })

    // Draw initial frame if canvas exists
    if (canvasRef.current && framesRef.current[0]) {
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) ctx.drawImage(framesRef.current[0], 0, 0)
    }
  }, [mounted])

  // 4. Update canvas on scroll
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const canvas = canvasRef.current
    if (!canvas || !mounted) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const idx = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(v * TOTAL_FRAMES)
    )
    const frame = framesRef.current[idx]
    if (frame) {
      ctx.drawImage(frame, 0, 0)
    }
  })

  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0])
  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.50, 0.60], [0, 1, 1, 0])
  const text3Opacity = useTransform(scrollYProgress, [0.60, 0.70, 0.85, 0.95], [0, 1, 1, 0])

  return (
    <motion.div
      ref={containerRef}
      className="relative h-[400vh]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          width={mounted ? (typeof window !== 'undefined' ? window.innerWidth : 1440) : 1440}
          height={mounted ? (typeof window !== 'undefined' ? window.innerHeight : 900) : 900}
          className="absolute inset-0 w-full h-full"
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">

          <motion.div
            style={{ opacity: text1Opacity }}
            className="absolute text-center max-w-full"
          >

            <h1 className="
  font-syne
  font-black
  leading-none
  tracking-tight
  bg-gradient-to-r
  from-white via-accent2 to-accent1
  bg-clip-text
  text-transparent
  text-[clamp(2.5rem,7vw,9rem)]
">

              <span className="block lg:inline">
                It Started with
              </span>

              <span className="
    block
    lg:inline
    lg:ml-3
  ">
                "Hello World"
              </span>

            </h1>

          </motion.div>

          <motion.div style={{ opacity: text2Opacity }} className="absolute text-center">
            <p className="font-syne font-bold text-[clamp(1.5rem,4vw,3rem)] text-white/90 tracking-wide">
              Then Things Got Complicated
            </p>
          </motion.div>

          <motion.div style={{ opacity: text3Opacity }} className="absolute text-center">
            <p className="font-instrument italic text-[clamp(1.2rem,3vw,2.5rem)] text-white/70">
              Now They Work Surprisingly Well
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
