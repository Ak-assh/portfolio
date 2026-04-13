'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/data'
import { useEffect, useRef } from 'react'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { y: 32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function Hero() {

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const mouse = {
      x: width / 2,
      y: height / 2
    }

    let stars: Star[] = []

    /* Resize */

    const resize = () => {

      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight

      init()

    }

    window.addEventListener('resize', resize)

    /* Mouse */

    const handleMouseMove = (e: MouseEvent) => {

      mouse.x = e.clientX
      mouse.y = e.clientY

    }

    window.addEventListener('mousemove', handleMouseMove)

    /* ⭐ Star Class */

    class Star {

      x: number
      y: number
      z: number

      constructor() {

        this.x = Math.random() * width
        this.y = Math.random() * height
        this.z = Math.random() * width

      }

      update() {

        this.z -= 1.5

        if (this.z <= 0) {

          this.x = Math.random() * width
          this.y = Math.random() * height
          this.z = width

        }

        this.draw()

      }

      draw() {

        const px = (this.x - mouse.x) * (width / this.z)
        const py = (this.y - mouse.y) * (width / this.z)

        const size = (1 - this.z / width) * 2

        ctx.beginPath()

        ctx.arc(
          px + mouse.x,
          py + mouse.y,
          size,
          0,
          Math.PI * 2
        )

        ctx.fillStyle = 'white'

        ctx.fill()

      }

    }

    /* Init */

    function init() {

      stars = []

      for (let i = 0; i < 200; i++) {

        stars.push(new Star())

      }

    }

    let animationFrameId: number

    /* Animate */

    function animate() {

      ctx.fillStyle = 'rgba(5,5,15,0.4)'
      ctx.fillRect(0, 0, width, height)

      stars.forEach(star => star.update())

      animationFrameId = requestAnimationFrame(animate)

    }

    init()
    animate()

    return () => {

      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)

      cancelAnimationFrame(animationFrameId)

    }

  }, [])

  return (

    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden w-full bg-[#05050f]">

      {/* 🌌 STAR BACKGROUND */}

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent1)_0%,transparent_60%)] opacity-[0.08] pointer-events-none" />

      {/* CONTENT */}

      <motion.div
        className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center pt-20"
        variants={container}
        initial="hidden"
        animate="visible"
      >

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}

          className="
    font-mono
    text-sm md:text-base
    uppercase
    tracking-[0.4em]
    text-text/60
    mb-4
  "
        >

          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            Hello — I'm
          </motion.span>

        </motion.p>

        {/* NAME */}

        <motion.h1
          variants={item}
          className="font-syne font-black text-[clamp(3.5rem,8vw,6.5rem)] leading-[1.1] tracking-tight mb-6"
        >

          <span className="bg-gradient-to-r from-accent1 via-accent2 to-accent3 bg-clip-text text-transparent">
            {PERSONAL_INFO.name}
          </span>

        </motion.h1>

        {/* TAGLINE */}

        <motion.p
          variants={item}
          className="font-mono text-xl md:text-2xl font-medium text-text/90 mb-6 uppercase tracking-wider max-w-3xl"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.p
          variants={item}
          className="max-w-2xl text-muted text-base md:text-lg mb-12"
        >
          {PERSONAL_INFO.subTagline}
        </motion.p>

        {/* BUTTONS */}

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-sm sm:max-w-none mx-auto px-4 sm:px-0"
        >

          {/* View Work */}

          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-accent1 to-accent2 text-white font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >

            View My Work

          </a>

          <a
            href="/figma"
            className="px-6 py-3 rounded-full border border-accent1/30 hover:bg-accent1/10 transition flex items-center justify-center"
          >
            Portfolio

          </a>

          {/* Download Resume */}

          <a
            href="/AkashKumar_FullStack.pdf"
            download
            className="px-8 py-4 rounded-full border border-accent1/30 text-text/90 font-medium hover:bg-accent1/10 transition-colors flex items-center justify-center gap-2"
          >

            <Download size={18} />

            Resume

          </a>

        </motion.div>

      </motion.div>

      {/* SCROLL ICON */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        >

          <ArrowDown className="w-5 h-5 text-accent1" />

        </motion.div>

      </motion.div>

    </section>

  )

}