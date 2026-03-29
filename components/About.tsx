'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

function Counter({ from, to, duration = 1.5 }: { from: number, to: number, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(nodeRef, { once: true, margin: '-50px' })
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let raf: number

    const update = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / (duration * 1000), 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = from + (to - from) * easeOut
      setValue(current)

      if (progress < 1) {
        raf = requestAnimationFrame(update)
      } else {
        setValue(to)
      }
    }

    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [inView, from, to, duration])

  const displayValue = to % 1 !== 0 ? value.toFixed(2) : Math.floor(value)

  return <span ref={nodeRef}>{displayValue}</span>
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const item = {
  hidden: { y: 32, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative z-10 container mx-auto px-6 border-t border-accent1/5">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        <motion.div variants={item} className="md:col-span-12 lg:col-span-5 space-y-6">
          <h2 className="font-syne text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-4">
            <p className="text-text/80 leading-relaxed text-lg font-medium">
              I&apos;m a final-year Computer Science student at KIIT-DU, passionate about building
              intelligent systems and automation workflows. From shipping AI-driven automation
              pipelines at Logicleap AI to analysing operational data for Central Coalfields Limited,
              I thrive where software meets meaningful impact.
            </p>
            <p className="text-text/80 leading-relaxed text-lg">
              When I&apos;m not coding, I&apos;m volunteering with NSS, clicking photos at tech events,
              or exploring the next thing worth automating.
            </p>
          </div>
        </motion.div>

        <motion.div variants={item} className="md:col-span-6 lg:col-span-4 flex justify-center perspective-1000 mt-8 lg:mt-0">
          <div className="relative group w-64 h-80 sm:w-72 sm:h-96">
            <div className="absolute -inset-4 border-t-2 border-l-2 border-accent1 opacity-50 transition-all duration-500 group-hover:-inset-2" />
            <div className="absolute -inset-4 border-b-2 border-r-2 border-accent2 opacity-50 transition-all duration-500 group-hover:-inset-2" />

            <div className="w-full h-full relative overflow-hidden bg-surface border border-accent1/30 grayscale group-hover:grayscale-[0.2] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent1/10 to-accent2/10 mix-blend-overlay z-10" />
              <Image
                src="/akash.png"
                alt="Akash Kumar"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 bg-surface px-4 py-2 border border-accent1/20 shadow-xl z-20">
              <span className="font-mono text-sm font-bold text-accent1">Akash Kumar  </span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="md:col-span-6 lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6 mt-8 lg:mt-0">
          <div className="p-6 bg-accent1/5 border border-accent1/10 hover:border-accent1/30 transition-colors">
            <h3 className="font-syne text-4xl font-bold text-text mb-2 flex items-baseline gap-1">
              <Counter from={0} to={7.22} duration={1.5} />
            </h3>
            <p className="font-mono text-xs text-muted uppercase tracking-wider">CGPA</p>
          </div>
          <div className="p-6 bg-accent2/5 border border-accent2/10 hover:border-accent2/30 transition-colors">
            <h3 className="font-syne text-4xl font-bold text-text mb-2 block">
              <Counter from={0} to={2} duration={1} />
            </h3>
            <p className="font-mono text-xs text-muted uppercase tracking-wider">Internships</p>
          </div>
          <div className="p-6 bg-accent3/5 border border-accent3/10 hover:border-accent3/30 transition-colors">
            <h3 className="font-syne text-4xl font-bold text-text mb-2 block">
              <Counter from={0} to={5} duration={1} />+
            </h3>
            <p className="font-mono text-xs text-muted uppercase tracking-wider">Tech Stacks</p>
          </div>
          <div className="p-6 bg-surface border border-text/10 hover:border-accent1/30 transition-colors">
            <h3 className="font-syne text-4xl font-bold text-text mb-2 block">∞</h3>
            <p className="font-mono text-xs text-muted uppercase tracking-wider">Problems</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
