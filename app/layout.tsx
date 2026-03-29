import type { Metadata } from 'next'
import { Syne, DM_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/components/ThemeProvider'
import { CustomCursor } from "@/components/CustomCursor"

/* Fonts */

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
})

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
})

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
})

/* Metadata */

export const metadata: Metadata = {
  title: 'Akash Kumar | Software Engineer',
  description:
    'Portfolio of Akash Kumar — Software Engineer, AI Builder, and Automation Specialist.',
}

/* Layout */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html
      lang="en"
      className={`
    ${syne.variable}
    ${dmMono.variable}
    ${instrumentSerif.variable}
  `}
    >

      <body className="font-mono antialiased overflow-x-hidden selection:bg-accent1 selection:text-white">

        {/* 🌟 Custom Cursor — MUST be here */}

        <CustomCursor />

        {/* Theme Provider */}

        <ThemeProvider>

          {children}

        </ThemeProvider>

      </body>

    </html>

  )

}