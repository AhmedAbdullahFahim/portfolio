import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiCode } from 'react-icons/hi'
import { useMobile } from '../hooks/useMobile'

const Header = () => {
  const { isMobile } = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={isMobile ? { opacity: 1 } : { y: -100, opacity: 0 }} // Skip initial animation on mobile
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: isMobile ? 0 : 0.8, ease: "easeOut" }} // No animation duration on mobile
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-dark-blue-900/80 backdrop-blur-xl border-b border-dark-blue-700/50 shadow-lg shadow-dark-blue-900/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={isMobile ? {} : { scale: 1.05 }} // Disable hover on mobile
            whileTap={isMobile ? {} : { scale: 0.95 }} // Disable tap animation on mobile
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('#home')}
          >
            <motion.div
              animate={isMobile ? {} : { rotate: [0, 360] }} // Disable rotation on mobile
              transition={isMobile ? {} : { duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 bg-gradient-to-br from-accent-blue-400 to-accent-blue-300 rounded-lg flex items-center justify-center shadow-lg"
            >
              <HiCode className="text-dark-blue-900 text-lg" />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white group-hover:text-accent-blue-400 transition-colors duration-300">
                Ahmed Fahim
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Frontend Developer</p>
            </div>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center bg-dark-blue-800/30 backdrop-blur-md rounded-full px-2 py-2 border border-dark-blue-600/30">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 mx-1 rounded-full font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-accent-blue-500 shadow-lg shadow-accent-blue-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-dark-blue-700/50'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-accent-blue-500 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={isMobile ? {} : { scale: 0.9 }} // Disable tap animation on mobile
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 bg-dark-blue-800/50 backdrop-blur-md rounded-lg border border-dark-blue-600/30 flex items-center justify-center text-gray-300 hover:text-accent-blue-400 hover:bg-dark-blue-700/50 transition-all duration-300"
            >
              {isMobile ? (
                // Simple icon toggle without animation on mobile
                isMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />
              ) : (
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiX size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiMenu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={isMobile ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0, y: -20 }} // Skip animation on mobile
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={isMobile ? { opacity: 0 } : { opacity: 0, height: 0, y: -20 }} // Simple exit on mobile
              transition={{ duration: isMobile ? 0.1 : 0.3, ease: "easeOut" }} // Faster on mobile
              className="lg:hidden mt-6 overflow-hidden"
            >
              <div className="bg-dark-blue-800/50 backdrop-blur-md rounded-2xl border border-dark-blue-600/30 p-6 shadow-xl">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -20 }} // Skip initial animation on mobile
                      animate={{ opacity: 1, x: 0 }}
                      transition={isMobile ? {} : { duration: 0.3, delay: index * 0.1 }} // No delay on mobile
                      whileHover={isMobile ? {} : { scale: 1.02, x: 4 }} // Disable hover on mobile
                      whileTap={isMobile ? {} : { scale: 0.98 }} // Disable tap animation on mobile
                      onClick={() => scrollToSection(item.href)}
                      className={`relative text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? 'text-white bg-accent-blue-500 shadow-lg shadow-accent-blue-500/25'
                          : 'text-gray-300 hover:text-white hover:bg-dark-blue-700/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeSection === item.id ? 'bg-white' : 'bg-accent-blue-400'
                        }`} />
                        {item.name}
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                {/* Mobile Contact Info */}
                <motion.div
                  initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }} // Skip animation on mobile
                  animate={{ opacity: 1, y: 0 }}
                  transition={isMobile ? {} : { duration: 0.4, delay: 0.6 }} // No animation on mobile
                  className="mt-6 pt-6 border-t border-dark-blue-600/30"
                >
                  <p className="text-sm text-gray-400 text-center">
                    Ready to build something amazing?
                  </p>
                  <motion.button
                    whileHover={isMobile ? {} : { scale: 1.02 }} // Disable hover on mobile
                    whileTap={isMobile ? {} : { scale: 0.98 }} // Disable tap animation on mobile
                    onClick={() => scrollToSection('#contact')}
                    className="w-full mt-3 bg-accent-blue-500 hover:bg-accent-blue-400 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-accent-blue-500/25"
                  >
                    Let's Talk
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header 