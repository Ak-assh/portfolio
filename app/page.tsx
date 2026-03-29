import ScrollProgress from '@/components/ScrollProgress'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ParallaxText from '@/components/ParallaxText'
import CanvasSequence from '@/components/CanvasSequence'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { CustomCursor } from '@/components/CustomCursor'

export default function Home() {
  return (
    <main className="w-full h-full relative">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <Hero />

      <ParallaxText
        text="SOFTWARE-ENGINEER · AI BUILDER · AUTOMATION SPECIALIST · WEB-DEVELOPER"
        direction="left"
        speed={380}
      />

      <CanvasSequence />

      <About />

      <ParallaxText
        text="PYTHON · REACT · OPENAI · MAKE.COM · FLASK · FIGMA · NODE.JS"
        direction="right"
        speed={400}
      />

      <Skills />

      <Experience />

      <ParallaxText
        text="KIIT-DU · LOGICLEAP AI · CENTRAL COALFIELDS · BHUBANESWAR · 2026"
        direction="left"
        speed={500}
      />

      <Projects />

      <Blog />

      <Contact />

      <Footer />
    </main>
  )
}
