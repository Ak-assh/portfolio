'use client'

import { motion } from 'framer-motion'

interface Props {
  text: string
  direction?: 'left' | 'right'
  speed?: number
}

export default function ParallaxText({
  text,
  direction = 'left',
  speed = 20
}: Props) {

  // Repeat text enough to fill width
  const repeated = Array(12).fill(text).join('   •   ')

  return (

    <div className="overflow-hidden py-4 select-none flex">

      <motion.div
        className="flex whitespace-nowrap"

        animate={{
          x: direction === 'left'
            ? ['0%', '-50%']
            : ['-50%', '0%']
        }}

        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear"
        }}
      >

        <span
          className="font-syne font-black text-[8vw] leading-none uppercase"
          style={{
            WebkitTextStroke: '1px var(--accent1)',
            color: 'transparent',
            opacity: 0.2,
          }}
        >
          {repeated}
        </span>

        {/* Duplicate for seamless loop */}

        <span
          className="font-syne font-black text-[8vw] leading-none uppercase"
          style={{
            WebkitTextStroke: '1px var(--accent1)',
            color: 'transparent',
            opacity: 0.2,
          }}
        >
          {repeated}
        </span>

      </motion.div>

    </div>

  )

}