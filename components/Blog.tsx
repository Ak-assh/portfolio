'use client'
import { motion } from 'framer-motion'
import { BLOG_POSTS } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export default function Blog() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const item = {
    hidden: { y: 32, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section id="blog" className="py-24 relative z-10 container mx-auto px-6 border-t border-accent1/5">
      <div className="mb-16 flex justify-between items-end">
        <div>
          <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">
            Writing & <span className="bg-gradient-to-r from-accent3 to-accent1 bg-clip-text text-transparent">Thoughts</span>
          </h2>
          <p className="text-muted text-lg">Detailed notes on building things.</p>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6"
      >
        {BLOG_POSTS.map((post) => (
          <motion.div
            key={post.id}
            variants={item}
            className="group flex flex-col p-8 rounded-xl bg-surface border border-accent1/10 hover:border-accent3/50 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="inline-block px-3 py-1 bg-accent3/10 text-accent3 font-mono text-xs font-bold rounded-full mb-6 w-fit">
              {post.date}
            </span>

            <h3 className="font-syne text-2xl font-bold text-text mb-4 leading-snug group-hover:text-accent3 transition-colors">
              {post.title}
            </h3>

            <p className="font-mono text-sm leading-relaxed text-muted mb-8 flex-grow">
              {post.excerpt}
            </p>

            <a
              href={post.link}
              className="mt-auto inline-flex items-center gap-2 font-mono text-sm font-bold text-text/80 group-hover:text-accent3 transition-colors"
            >
              Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
