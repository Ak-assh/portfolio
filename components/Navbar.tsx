'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Designs', href: '/figma' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },

]

export default function Navbar() {

  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    navItems.forEach(({ href }) => {

      // ✅ Only observe section links
      if (href.startsWith('#')) {
        const el = document.querySelector(href)

        if (el) observer.observe(el)
      }

    })

    return () => observer.disconnect()

  }, [])

  return (

    <>

      {/* 💻 DESKTOP NAVBAR */}

      <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none mt-6 hidden md:block">

        <div className="max-w-max mx-auto px-6 py-3 rounded-full bg-surface/70 backdrop-blur-xl border border-accent1/20 pointer-events-auto shadow-lg shadow-bg/50">

          <ul className="flex items-center gap-6 text-sm font-medium">

            {navItems.map((item) => {

              const isSectionActive =
                item.href.startsWith('#') &&
                activeSection === item.href.slice(1)

              const isPageActive =
                item.href.startsWith('/') &&
                pathname === item.href

              const isActive =
                isSectionActive || isPageActive

              return (

                <li key={item.name}>

                  <Link
                    href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                    className={`
                      relative px-3 py-1.5 transition-colors
                      ${isActive
                        ? 'text-accent2'
                        : 'text-text/70 hover:text-text'}
                    `}
                  >

                    {isActive && (

                      <motion.span
                        layoutId="navBlob"
                        className="absolute inset-0 bg-accent2/10 rounded-full -z-10"
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 30
                        }}
                      />

                    )}

                    {item.name}

                  </Link>

                </li>

              )

            })}

          </ul>

        </div>

      </nav>

      {/* 📱 MOBILE NAVBAR */}

      <div className="md:hidden fixed top-6 right-6 z-[60] pointer-events-auto">

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-surface/80 backdrop-blur-xl border border-accent1/20 text-text shadow-lg"
        >

          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}

        </button>

      </div>

      <AnimatePresence>

        {isMobileMenuOpen && (

          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-2xl md:hidden overflow-hidden"
          >

            {/* Background elements for mobile menu */}

            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent1/10 rounded-full blur-[100px]" />

            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent2/10 rounded-full blur-[100px]" />

            <nav className="h-full flex flex-col items-center justify-center p-8">

              <ul className="flex flex-col items-center gap-8">

                {navItems.map((item, index) => {

                  const isActive =
                    (item.href.startsWith('#') && activeSection === item.href.slice(1)) ||
                    (item.href.startsWith('/') && pathname === item.href)

                  return (

                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >

                      <Link
                        href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`
                          text-4xl font-bold font-syne transition-colors
                          ${isActive ? 'text-accent2' : 'text-text/60 hover:text-text'}
                        `}
                      >

                        {item.name}

                      </Link>

                    </motion.li>

                  )

                })}

              </ul>

              {/* Social or additional links could go here */}

            </nav>

          </motion.div>

        )}

      </AnimatePresence>

    </>

  )

}