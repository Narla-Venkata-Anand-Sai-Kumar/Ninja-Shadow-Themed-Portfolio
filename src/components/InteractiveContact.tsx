'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { fadeInUpVariants, staggerContainer } from '@/lib/utils'
import { socialMediaLinks } from '@/data/info'
import { 
  Mail, 
  Phone, 
  Send, 
  MessageCircle, 
  Calendar,
  Heart,
  Sparkles,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Shadow Message',
    description: 'Send a stealth communication',
    action: 'venkatnarla0@gmail.com',
    href: 'mailto:venkatnarla0@gmail.com',
    color: 'from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white'
  },
  {
    icon: Phone,
    title: 'Silent Call',
    description: 'Whisper across the void',
    action: 'Contact via form',
    href: '#contact-form',
    color: 'from-ninja-gray to-ninja-charcoal dark:from-ninja-white dark:to-ninja-silver'
  },
  {
    icon: MessageCircle,
    title: 'Professional Network',
    description: 'Connect in the shadows',
    action: 'Message on LinkedIn',
    href: socialMediaLinks.find(link => link.name === 'LinkedIn')?.link || '#',
    color: 'from-ninja-black to-ninja-charcoal dark:from-ninja-silver dark:to-ninja-white'
  },
  {
    icon: Calendar,
    title: 'Secret Meeting',
    description: 'Arrange a shadow encounter',
    action: 'Schedule a call',
    href: '#',
    color: 'from-ninja-charcoal to-ninja-gray dark:from-ninja-white dark:to-ninja-silver'
  }
]

const socialIcons = {
  'fa-github': Github,
  'fa-linkedin-in': Linkedin,
  'fa-x-twitter': Twitter,
}

export default function InteractiveContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-ninja-white via-background to-ninja-silver dark:from-ninja-black dark:via-background dark:to-ninja-charcoal" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Animated Header */}
          <motion.div variants={fadeInUpVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-8 h-8 text-ninja-charcoal dark:text-ninja-silver" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-ninja-charcoal via-ninja-gray to-ninja-black dark:from-ninja-silver dark:via-ninja-white dark:to-ninja-silver bg-clip-text text-transparent font-mono">
                Shadow Contact 🥷
              </h1>
              <Heart className="w-8 h-8 text-ninja-gray dark:text-ninja-silver" />
            </motion.div>
            <motion.p 
              className="text-xl text-ninja-gray dark:text-ninja-silver max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Ready to join forces in the digital shadows? Let&apos;s begin our alliance!
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <motion.div variants={fadeInUpVariants} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon
                  const isHovered = hoveredMethod === index
                  
                  return (
                    <motion.a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      onHoverStart={() => setHoveredMethod(index)}
                      onHoverEnd={() => setHoveredMethod(null)}
                    >
                      <Card className="h-full overflow-hidden ninja-border transition-all duration-300 bg-ninja-white/80 ninja-glass backdrop-blur-sm dark:bg-ninja-black/80 hover:ninja-shadow-hover ninja-shadow">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <motion.div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                              animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
                              transition={{ duration: 0.5 }}
                            >
                              <IconComponent className="w-full h-full text-ninja-white dark:text-ninja-black" />
                            </motion.div>
                            <div>
                              <h3 className="text-xl font-bold text-ninja-charcoal dark:text-ninja-silver mb-2">
                                {method.title}
                              </h3>
                              <p className="text-ninja-gray dark:text-ninja-silver mb-3">
                                {method.description}
                              </p>
                              <p className="text-ninja-charcoal dark:text-ninja-silver font-medium group-hover:underline font-mono">
                                {method.action}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.a>
                  )
                })}
              </div>

              {/* Social Links */}
              <motion.div
                variants={fadeInUpVariants}
                className="mt-12"
              >
                <Card className="bg-ninja-white/80 ninja-glass backdrop-blur-sm dark:bg-ninja-black/80 ninja-shadow-hover ninja-border">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-ninja-charcoal dark:text-ninja-silver">
                      Shadow Networks 🌐
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center space-x-6">
                      {socialMediaLinks.slice(0, 3).map((social, index) => {
                        const IconComponent = socialIcons[social.fontAwesomeIcon as keyof typeof socialIcons]
                        
                        return (
                          <motion.a
                            key={social.name}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                            style={{ backgroundColor: social.backgroundColor }}
                            whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                          >
                            {IconComponent ? (
                              <IconComponent size={24} />
                            ) : (
                              <span className="text-xl">{social.name.charAt(0)}</span>
                            )}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                              initial={{ scale: 0, opacity: 0 }}
                              whileHover={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          </motion.a>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUpVariants}>
              <Card className="bg-ninja-white/80 ninja-glass backdrop-blur-sm dark:bg-ninja-black/80 ninja-shadow-hover ninja-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-ninja-charcoal via-ninja-gray to-ninja-black dark:from-ninja-silver dark:via-ninja-white dark:to-ninja-silver bg-clip-text text-transparent">
                    Message to Ninja 🥷
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white rounded-full flex items-center justify-center"
                          animate={{ scale: [0.8, 1.2, 1] }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-ninja-white dark:text-ninja-black text-3xl"
                          >
                            ✓
                          </motion.div>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-ninja-charcoal dark:text-ninja-silver mb-2">
                          Shadow Message Delivered! 🥷
                        </h3>
                        <p className="text-ninja-gray dark:text-ninja-silver">
                          Your message has reached the ninja. A shadow response approaches...
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="grid sm:grid-cols-2 gap-6">
                          <motion.div whileHover={{ scale: 1.02 }}>
                            <label className="block text-sm font-medium text-ninja-charcoal dark:text-ninja-silver mb-2 font-mono">
                              Shadow Name 🥷
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-ninja-gray dark:border-ninja-charcoal bg-ninja-white dark:bg-ninja-black text-ninja-charcoal dark:text-ninja-silver focus:ring-2 focus:ring-ninja-gray dark:focus:ring-ninja-silver focus:border-transparent transition-all duration-300 ninja-border"
                              placeholder="Your ninja alias"
                            />
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.02 }}>
                            <label className="block text-sm font-medium text-ninja-charcoal dark:text-ninja-silver mb-2 font-mono">
                              Secret Scroll 📜
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-ninja-gray dark:border-ninja-charcoal bg-ninja-white dark:bg-ninja-black text-ninja-charcoal dark:text-ninja-silver focus:ring-2 focus:ring-ninja-gray dark:focus:ring-ninja-silver focus:border-transparent transition-all duration-300 ninja-border"
                              placeholder="your@shadow.com"
                            />
                          </motion.div>
                        </div>
                        
                        <motion.div whileHover={{ scale: 1.02 }}>
                          <label className="block text-sm font-medium text-ninja-charcoal dark:text-ninja-silver mb-2 font-mono">
                            Mission Type ⚔️
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-ninja-gray dark:border-ninja-charcoal bg-ninja-white dark:bg-ninja-black text-ninja-charcoal dark:text-ninja-silver focus:ring-2 focus:ring-ninja-gray dark:focus:ring-ninja-silver focus:border-transparent transition-all duration-300 ninja-border"
                            placeholder="What's this shadow mission about?"
                          />
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.02 }}>
                          <label className="block text-sm font-medium text-ninja-charcoal dark:text-ninja-silver mb-2 font-mono">
                            Shadow Scroll 🌙
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 rounded-lg border border-ninja-gray dark:border-ninja-charcoal bg-ninja-white dark:bg-ninja-black text-ninja-charcoal dark:text-ninja-silver focus:ring-2 focus:ring-ninja-gray dark:focus:ring-ninja-silver focus:border-transparent transition-all duration-300 resize-none ninja-border"
                            placeholder="Share your ninja project vision in the shadows..."
                          />
                        </motion.div>

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-ninja-charcoal via-ninja-gray to-ninja-black dark:from-ninja-silver dark:via-ninja-white dark:to-ninja-silver text-ninja-white dark:text-ninja-black font-semibold py-4 px-6 rounded-lg ninja-shadow hover:ninja-shadow-hover transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2 ninja-border font-mono"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <AnimatePresence mode="wait">
                            {isSubmitting ? (
                              <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center space-x-2"
                              >
                                <motion.div
                                  className="w-5 h-5 border-2 border-ninja-white dark:border-ninja-black border-t-transparent rounded-full"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                                <span>Sending to shadows...</span>
                              </motion.div>
                            ) : (
                              <motion.div
                                key="send"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center space-x-2"
                              >
                                <Send className="w-5 h-5" />
                                <span>Deploy Shadow Message 🥷</span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
