'use client'

import { useEffect, useState } from 'react'
import { Theme, THEMES, getNextTheme } from '@/lib/theme'
import { Moon, Sun, Snowflake } from 'lucide-react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('eclipse')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme') as Theme
    if (stored && THEMES.includes(stored)) {
      setTheme(stored)
      document.documentElement.setAttribute('data-theme', stored)
    }
  }, [])

  const toggleTheme = () => {
    const next = getNextTheme(theme)
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  const icons = {
    eclipse: <Moon className="w-5 h-5 text-accent2" />,
    ember: <Sun className="w-5 h-5 text-accent1" />,
    arctic: <Snowflake className="w-5 h-5 text-accent1" />
  }

  return (
    <>
      {children}
      {mounted && (
        <button 
          onClick={toggleTheme}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-surface border border-accent1/20 shadow-lg shadow-accent1/10 hover:scale-110 transition-transform flex items-center justify-center backdrop-blur-md"
          aria-label="Toggle theme"
        >
          {icons[theme]}
        </button>
      )}
    </>
  )
}
