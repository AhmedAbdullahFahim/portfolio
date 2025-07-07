import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useMobile } from './hooks/useMobile'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { isMobile } = useMobile()

  useEffect(() => {
    // Only track mouse movement on desktop for performance
    if (isMobile) return

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isMobile])

  return (
    <div className="min-h-screen bg-dark-blue-900 text-gray-100 relative overflow-hidden">
      {/* Global spotlight effect - disabled on mobile for performance */}
      {!isMobile && (
        <div 
          className="fixed inset-0 pointer-events-none spotlight transition-all duration-300 ease-out"
          style={{
            '--mouse-x': `${(mousePosition.x / window.innerWidth) * 100}%`,
            '--mouse-y': `${(mousePosition.y / window.innerHeight) * 100}%`,
          }}
        />
      )}
      
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App 