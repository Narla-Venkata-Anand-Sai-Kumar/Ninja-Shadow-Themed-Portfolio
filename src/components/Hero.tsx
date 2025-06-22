'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Github, ExternalLink } from 'lucide-react'
import { greeting, socialMediaLinks } from '@/data/info'
import { fadeInUpVariants, slideInFromLeft, slideInFromRight, scrollToSection } from '@/lib/utils'

export default function Hero() {
  const handleScrollDown = () => {
    scrollToSection('about')
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft}
              className="space-y-8"
            >
              <motion.div variants={fadeInUpVariants} className="space-y-4">
                <motion.p
                  variants={fadeInUpVariants}
                  className="text-lg font-medium text-blue-600 dark:text-blue-400"
                >
                  Hello, I'm
                </motion.p>
                <motion.h1
                  variants={fadeInUpVariants}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400"
                >
                  {greeting.nickname}
                </motion.h1>
                <motion.h2
                  variants={fadeInUpVariants}
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300"
                >
                  {greeting.title}
                </motion.h2>
              </motion.div>

              <motion.p
                variants={fadeInUpVariants}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
              >
                {greeting.subTitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </motion.a>
                <motion.a
                  href={greeting.githubProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  View GitHub
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={fadeInUpVariants}
                className="flex items-center space-x-6"
              >
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Follow me:
                </span>
                {socialMediaLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: social.backgroundColor }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {social.name.charAt(0)}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromRight}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Profile Image Placeholder */}
                <motion.div
                  className="relative w-80 h-80 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-pulse" />
                  <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
                      <span className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        V
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-2xl">🤖</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <span className="text-lg">⚡</span>
                </motion.div>

                <motion.div
                  className="absolute top-20 left-0 w-10 h-10 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <span className="text-sm">🚀</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        whileHover={{ y: -2 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </div>
      </motion.button>
    </section>
  )
}
