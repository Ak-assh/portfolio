'use client'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/data'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const item = {
    hidden: { y: 32, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  }

  const getColSpan = (size: string) => {
    switch(size) {
      case 'large': return 'lg:col-span-2'
      case 'tall': return 'lg:col-span-1 lg:row-span-2'
      case 'medium': return 'lg:col-span-2'
      case 'wide': return 'lg:col-span-3'
      default: return 'lg:col-span-1'
    }
  }

  return (
    <section id="projects" className="py-24 relative z-10 container mx-auto px-6">
      <div className="mb-16">
        <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">
          Selected <span className="bg-gradient-to-r from-accent3 to-accent1 bg-clip-text text-transparent">Works</span>
        </h2>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-min"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className={`group relative flex flex-col justify-between p-8 bg-surface/50 border border-accent1/10 hover:bg-surface transition-colors overflow-hidden ${getColSpan(project.size)}`}
          >
            {/* Hover top border */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent1 to-accent2 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />
            
            {/* Background Number */}
            <div className="absolute top-4 right-6 font-syne font-black text-8xl text-text opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-500 z-0">
              {project.id}
            </div>

            <div className="relative z-10 flex-grow">
              <span className="inline-block px-3 py-1 bg-accent1/10 text-accent1 font-mono text-xs font-bold rounded-full mb-6 relative">
                <span className="absolute inset-0 bg-accent1/20 filter blur-md -z-10 rounded-full group-hover:bg-accent1/30 transition-colors" />
                {project.tag}
              </span>

              <h3 className="font-syne text-2xl md:text-3xl font-bold text-text mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 transition-all duration-300">
                {project.title}
              </h3>

              <p className="font-mono text-sm leading-relaxed text-muted mb-8 max-w-2xl">
                {project.description}
              </p>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-bg border border-accent1/10 text-xs font-mono text-text/70 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="flex gap-4 border-t border-accent1/10 pt-6">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      className="inline-flex items-center gap-2 font-mono text-sm font-bold text-text/80 hover:text-accent2 transition-colors group/link"
                    >
                      {link.name} 
                      <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
