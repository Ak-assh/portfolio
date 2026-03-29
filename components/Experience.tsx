'use client'
import { motion } from 'framer-motion'
import { EXPERIENCES } from '@/lib/data'

export default function Experience() {
  const itemVariant = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section id="experience" className="py-24 relative z-10 container mx-auto px-6">
      <div className="mb-16">
        <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">
          Professional <span className="bg-gradient-to-r from-accent2 to-accent3 bg-clip-text text-transparent">Experience</span>
        </h2>
      </div>

      <div className="relative max-w-4xl">
        {/* Timeline line */}
        <div className="absolute left-[7px] md:left-[11px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-accent1 via-accent2 to-transparent" />

        <div className="space-y-16">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-10 md:pl-16"
            >
              {/* Glowing dot */}
              <div className="absolute left-0 md:left-1 top-2 w-4 h-4 rounded-full bg-bg border-2 border-accent1 shadow-[0_0_12px_var(--accent1)]" />

              <div className="group">
                <span className="inline-block py-1 px-3 rounded-full bg-accent1/10 text-accent1 font-mono text-xs font-bold mb-4 tracking-wider">
                  {exp.period}
                </span>

                <h3 className="font-syne text-2xl font-bold text-text mb-1 group-hover:text-accent2 transition-colors">
                  {exp.role}
                </h3>

                <p className="font-mono text-sm text-text/60 mb-6 font-medium">
                  {exp.company}
                </p>

                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-muted leading-relaxed flex items-start text-sm md:text-base">
                      <span className="text-accent2 mr-3 mt-1.5 opacity-50 text-[10px]">❖</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {exp.stack && (
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-accent1/10">
                    {exp.stack.split(', ').map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-surface border border-accent1/20 rounded text-xs text-text/70 font-mono transition-colors hover:border-accent2/50 group-hover:border-accent1/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
