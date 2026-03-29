'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

const MotionLink = motion.create(Link)

/* Projects */

const figmaProjects = [

    {
        title: "Live Landing page",
        description:
            "This Logic Leap landing page represents a complete end-to-end build, from visual design to live deployment. Created with attention to user experience, scalability, and clean interface design.",
        image: "/figma/logicleap.png",
        link: "https://www.logicleap.in"
    },

    {
        title: "Auction Page UI",
        description:
            "A visually striking and performance-focused Live Auction Web Page crafted for an investment-driven company, designed to deliver real-time engagement, absolute clarity.",
        image: "/figma/auction.png",
        link: "https://www.figma.com/community/file/1602999032996317423/live-auction-page"
    },

    {
        title: "Water Delivery System",
        description:
            "A clean, modern, and premium UI styling system designed for water delivery, logistics, and service-based platforms.",
        image: "/figma/water.png",
        link: "https://www.figma.com/community/file/1602989014792353845/premium-ui-styling-system-v2-0"
    },

    {
        title: "Dashboard UI",
        description:
            "A modern and high-impact Premium Dashboard UI crafted for data-driven products and SaaS platforms.",
        image: "/figma/dashboard.png",
        link: "https://www.figma.com/community/file/1602974688617318226/premium-dashboard-ui-redesigned"
    },

    {
        title: "AI Presentation Template System",
        description:
            "Custom-built presentation design system created for an AI-powered SaaS product.",
        image: "/figma/Slide.png",
        link: "https://www.figma.com/community/file/1601572100808528433/ai-presentation-template-system"
    }

]

export default function FigmaPortfolioPage() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (

        <main className="w-full relative">

            <Navbar />

            <section className="relative min-h-screen py-24 sm:py-32 overflow-hidden">

                {/* 🌌 SPACE PARTICLES BACKGROUND */}

                <div className="absolute inset-0 -z-10 pointer-events-none">

                    {mounted && [...Array(25)].map((_, i) => (

                        <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-accent1 rounded-full opacity-70"
                            initial={{
                                x: Math.random() * 1500,
                                y: Math.random() * 800,
                                opacity: 0
                            }}
                            animate={{
                                y: ["0%", "-120%"],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 6 + Math.random() * 6,
                                repeat: Infinity,
                                delay: Math.random() * 5
                            }}
                        />

                    ))}

                    {/* Glow blobs */}

                    <div className="absolute top-[10%] left-[10%] w-[320px] h-[320px] bg-accent1/20 blur-[140px] rounded-full" />

                    <div className="absolute bottom-[10%] right-[10%] w-[320px] h-[320px] bg-accent2/20 blur-[140px] rounded-full" />

                </div>

                {/* CONTENT */}

                <div className="container mx-auto px-6 relative z-10">

                    {/* HEADER */}


                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16 md:mb-20"
                    >

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-syne mb-6">

                            UI/UX{" "}

                            <span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">

                                Showcase

                            </span>

                        </h1>

                        <p className="text-muted max-w-2xl mx-auto text-lg">

                            Designed to captivate, built to perform, and crafted for seamless user experiences.

                        </p>

                    </motion.div>

                    {/* PROJECT GRID */}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {figmaProjects.map((project, index) => (

                            <motion.a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"

                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -8, scale: 1.02 }}

                                viewport={{ once: true }}

                                transition={{
                                    delay: index * 0.08,
                                    duration: 0.4
                                }}

                                className="
                group
                relative
                block
                rounded-2xl
                border border-accent1/10
                overflow-hidden
                bg-surface/40
                backdrop-blur-xl
                hover:border-accent1/40
                hover:shadow-[0_0_40px_rgba(124,58,255,0.35)]
                transition-all
                duration-500
                cursor-pointer
              "
                            >

                                {/* IMAGE */}

                                <div className="aspect-video overflow-hidden relative">

                                    <motion.img
                                        src={project.image}
                                        alt={project.title}

                                        className="
                    w-full
                    h-full
                    object-cover
                  "

                                        whileHover={{
                                            scale: 1.1
                                        }}

                                        transition={{
                                            duration: 0.6
                                        }}
                                    />

                                    {/* Gradient Overlay */}

                                    <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/50
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "/>

                                </div>

                                {/* CONTENT */}

                                <div className="p-6 relative">

                                    <h3 className="
                  text-xl
                  font-semibold
                  mb-3
                  group-hover:text-accent1
                  transition-colors
                ">

                                        {project.title}

                                    </h3>

                                    <p className="
                  text-muted
                  text-sm
                  leading-relaxed
                  group-hover:text-white/80
                  transition-colors
                ">

                                        {project.description}

                                    </p>

                                </div>

                                {/* Glow border animation */}

                                <div className="
                absolute inset-0
                rounded-2xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                pointer-events-none
                bg-gradient-to-r
                from-accent1/20
                via-transparent
                to-accent2/20
              "/>

                            </motion.a>

                        ))}


                    </div>

                </div>

            </section>

            <Contact />

            <Footer />

        </main>

    )

}