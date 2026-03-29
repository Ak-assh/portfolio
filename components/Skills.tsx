'use client'
import { motion } from 'framer-motion'
import { SKILL_CATEGORIES } from '@/lib/data'

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  }

  const item = {
    hidden: { y: 32, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section id="skills" className="py-24 relative z-10 container mx-auto px-6">
      <div className="mb-16 max-w-3xl">
        <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">
          Technical <span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">Arsenal</span>
        </h2>
        <p className="text-muted text-lg">
          A comprehensive toolkit for building intelligent, scalable, and beautifully designed digital experiences.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6"
      >
        {SKILL_CATEGORIES.map((cat, i) => (
          <motion.div 
            key={i} 
            variants={item}
            className="group p-6 rounded-2xl bg-surface border border-accent1/10 hover:border-accent2/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent1 to-accent2 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-syne text-xl font-bold text-text mb-4 group-hover:text-accent2 transition-colors">
              {cat.name}
            </h3>
            <p className="font-mono text-sm text-muted leading-relaxed">
              {cat.skills}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
