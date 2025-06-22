'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Twitter, Instagram, Home, User, Code, Briefcase, GraduationCap, FileText, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { socialMediaLinks } from '@/data/info'

const navigationItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Skills', href: '/skills', icon: Code },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Education', href: '/education', icon: GraduationCap },
  { name: 'Publications', href: '/publications', icon: FileText },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
]

const socialIcons = {
  'fa-github': Github,
  'fa-linkedin-in': Linkedin,
  'fa-google': Mail,
  'fa-x-twitter': Twitter,
  'fa-instagram': Instagram,
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg dark:bg-gray-900/90'
            : 'bg-white/80 backdrop-blur-sm dark:bg-gray-900/80'
        )}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
              >
                Venny
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      className={cn(
                        'relative flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                        isActive
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      )}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ y: 0, scale: 0.95 }}
                    >
                      <IconComponent size={16} />
                      <span>{item.name}</span>
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full"
                          layoutId="activeIndicator"
                          initial={false}
                          style={{ x: '-50%' }}
                        />
                      )}
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              className="absolute top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-xl"
            >
              <div className="pt-20 pb-8 px-4">
                <div className="space-y-2">
                  {navigationItems.map((item, index) => {
                    const IconComponent = item.icon
                    const isActive = pathname === item.href
                    
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link href={item.href} onClick={handleNavClick}>
                          <div
                            className={cn(
                              'flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300',
                              isActive
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                            )}
                          >
                            <IconComponent size={20} />
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-center space-x-4">
                    {socialMediaLinks.slice(0, 4).map((social, index) => {
                      const IconComponent = socialIcons[social.fontAwesomeIcon as keyof typeof socialIcons]
                      
                      return (
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
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          {IconComponent ? <IconComponent size={16} /> : social.name.charAt(0)}
                        </motion.a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
