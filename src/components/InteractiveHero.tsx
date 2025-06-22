'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Download, Github, ExternalLink, ArrowRight } from 'lucide-react'
import { greeting, socialMediaLinks } from '@/data/info'
import { useResponsiveBreakpoint } from '@/lib/touch-utils'

const typewriterText = [
  "Shadow Coder",
  "Silent Engineer", 
  "Digital Ninja",
  "Code Samurai"
]

export default function InteractiveHero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const breakpoint = useResponsiveBreakpoint()

  // Detect touch device
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice('ontouchstart' in window)
    }
  }, [])

  // Typewriter effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = typewriterText[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % typewriterText.length)
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting])

  // Mouse tracking
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Enhanced touch interactions for mobile
  const handleCardTouch = (socialLink: { link: string; name: string }) => {
    if (isTouchDevice) {
      // Add haptic feedback if available
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(50)
      }
      if (typeof window !== 'undefined') {
        window.open(socialLink.link, '_blank')
      }
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ninja-white via-background to-ninja-silver dark:from-ninja-black dark:via-background dark:to-ninja-charcoal overflow-hidden">
      {/* Ninja-themed background elements */}
      <div className="absolute inset-0">
        {/* Ninja shadow particles - Performance optimized */}
        {Array.from({ length: breakpoint === 'mobile' ? 8 : 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-ninja-gray/20 dark:bg-ninja-silver/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content Section - Enhanced Mobile Layout */}
            <motion.div
              className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-ninja-charcoal dark:text-ninja-white leading-tight animate-ninja-appear">
                  Hi, I&apos;m{' '}
                  <span className="bg-gradient-to-r from-ninja-gray to-ninja-charcoal dark:from-ninja-silver dark:to-ninja-white bg-clip-text text-transparent ninja-glow">
                    {greeting.nickname}
                  </span>
                </h1>
              </motion.div>

              {/* Typewriter Effect - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-16 sm:h-20 lg:h-24 flex items-center justify-center lg:justify-start"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-ninja-gray dark:text-ninja-silver">
                  <span className="text-ninja-silver dark:text-ninja-gray">A </span>
                  <span className="text-ninja-charcoal dark:text-ninja-white font-mono">
                    {currentText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-0.5 h-6 sm:h-8 lg:h-10 bg-ninja-charcoal dark:bg-ninja-white ml-1"
                    />
                  </span>
                </div>
              </motion.div>

              {/* Description - Mobile Enhanced */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base sm:text-lg lg:text-xl text-ninja-gray dark:text-ninja-silver leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                {greeting.subTitle}
              </motion.p>

              {/* Action Buttons - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start"
              >
                <Link href="/contact">
                  <motion.button
                    className="w-full sm:w-auto bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white text-ninja-white dark:text-ninja-black px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-sm sm:text-base ninja-shadow hover:ninja-shadow-hover transition-all duration-300 flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Let&apos;s Connect</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                
                <motion.a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto ninja-border text-ninja-charcoal dark:text-ninja-silver px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-ninja-silver/10 dark:hover:bg-ninja-gray/10 transition-all duration-300 flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  <span>Download CV</span>
                </motion.a>
              </motion.div>

              {/* Social Links - Mobile Enhanced with Touch Feedback */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex justify-center lg:justify-start space-x-4 sm:space-x-6"
              >
                {socialMediaLinks.slice(0, 4).map((social, index) => (
                  <motion.button
                    key={social.name}
                    onClick={() => handleCardTouch(social)}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-sm hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 touch-manipulation"
                    style={{ backgroundColor: social.backgroundColor }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    {social.fontAwesomeIcon === 'fa-github' && <Github size={20} />}
                    {social.fontAwesomeIcon === 'fa-linkedin-in' && <ExternalLink size={20} />}
                    {!['fa-github', 'fa-linkedin-in'].includes(social.fontAwesomeIcon) && 
                      social.name.charAt(0)
                    }
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            {/* 3D Profile Card - Mobile Optimized */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 perspective-1000"
                animate={{
                  rotateY: isTouchDevice ? 0 : typeof window !== 'undefined' ? (mousePosition.x - window.innerWidth / 2) / 50 : 0,
                  rotateX: isTouchDevice ? 0 : typeof window !== 'undefined' ? -(mousePosition.y - window.innerHeight / 2) / 50 : 0,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {/* Animated Ring - Ninja Style */}
                <motion.div
                  className="absolute inset-0 border-4 border-ninja-silver/30 dark:border-ninja-gray/30 rounded-full"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity },
                  }}
                />

                {/* Profile Image Placeholder - Ninja Themed */}
                <div className="absolute inset-4 bg-gradient-to-br from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white rounded-full flex items-center justify-center ninja-shadow-hover">
                  <div className="text-ninja-white dark:text-ninja-black text-4xl sm:text-5xl lg:text-6xl font-bold font-mono">
                    🥷
                  </div>
                </div>

                {/* Floating ninja elements */}
                {!isTouchDevice && (
                  <>
                    {[
                      { icon: '⚔️', position: { top: '10%', right: '10%' } },
                      { icon: '🥷', position: { bottom: '10%', left: '10%' } },
                      { icon: '🌙', position: { top: '50%', right: '5%' } },
                      { icon: '⭐', position: { bottom: '30%', right: '15%' } },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="absolute text-2xl sm:text-3xl cursor-pointer select-none"
                        style={item.position}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                          duration: 3 + index,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        whileHover={{ scale: 1.2, y: -5 }}
                      >
                        {item.icon}
                      </motion.div>
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator - Mobile Friendly */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <motion.div
              className="flex flex-col items-center space-y-2 text-ninja-gray dark:text-ninja-silver cursor-pointer touch-manipulation"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                }
              }}
            >
              <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
