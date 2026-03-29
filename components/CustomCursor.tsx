'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {

  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {

    // Only desktop
    if (!window.matchMedia('(pointer: fine)').matches) return

    /* Mouse Move */

    const onMouseMove = (e: MouseEvent) => {

      mouse.current = {
        x: e.clientX,
        y: e.clientY
      }

      if (dotRef.current) {

        dotRef.current.style.transform =
          `translate3d(${e.clientX}px, ${e.clientY}px, 0)
           translate(-50%, -50%)`

      }

    }

    /* Hover Detection (Dynamic Pages Fix) */

    const handleMouseOver = (e: MouseEvent) => {

      const target = e.target as HTMLElement

      if (
        target.closest('a, button, input, textarea, select')
      ) {

        if (ringRef.current) {

          ringRef.current.style.borderColor =
            'var(--accent2)'

          ringRef.current.style.transform +=
            ' scale(1.5)'

        }

      }

    }

    const handleMouseOut = () => {

      if (ringRef.current) {

        ringRef.current.style.borderColor =
          'var(--accent1)'

        ringRef.current.style.transform =
          ringRef.current.style.transform.replace(
            ' scale(1.5)',
            ''
          )

      }

    }

    window.addEventListener('mousemove', onMouseMove)

    document.addEventListener('mouseover', handleMouseOver)

    document.addEventListener('mouseout', handleMouseOut)

    /* Smooth Ring Animation */

    let req: number

    const loop = () => {

      ring.current.x +=
        (mouse.current.x - ring.current.x) * 0.12

      ring.current.y +=
        (mouse.current.y - ring.current.y) * 0.12

      if (ringRef.current) {

        const scaleMatch =
          ringRef.current.style.transform.match(
            /scale\([^\)]+\)/
          )

        const scale =
          scaleMatch ? ` ${scaleMatch[0]}` : ''

        ringRef.current.style.transform =
          `translate3d(${ring.current.x}px,
          ${ring.current.y}px, 0)
          translate(-50%, -50%)${scale}`

      }

      req = requestAnimationFrame(loop)

    }

    loop()

    /* Cleanup */

    return () => {

      window.removeEventListener(
        'mousemove',
        onMouseMove
      )

      document.removeEventListener(
        'mouseover',
        handleMouseOver
      )

      document.removeEventListener(
        'mouseout',
        handleMouseOut
      )

      cancelAnimationFrame(req)

    }

  }, [])

  return (

    <>

      {/* Ring */}

      <div

        ref={ringRef}

        className="
          fixed
          top-0
          left-0
          w-9
          h-9
          border
          border-accent1
          rounded-full
          pointer-events-none
          z-[9999]
          transition-colors
          duration-300
          hidden sm:block
        "

        style={{
          willChange: 'transform'
        }}

      />

      {/* Dot */}

      <div

        ref={dotRef}

        className="
          fixed
          top-0
          left-0
          w-3
          h-3
          bg-accent2
          rounded-full
          pointer-events-none
          z-[10000]
          hidden sm:block
          shadow-[0_0_12px_var(--accent2)]
        "

        style={{
          willChange: 'transform'
        }}

      />

    </>

  )

}