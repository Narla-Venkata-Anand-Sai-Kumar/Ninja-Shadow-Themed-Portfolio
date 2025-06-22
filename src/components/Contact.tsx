'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter, Instagram, Send } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { fadeInUpVariants, staggerContainer, scaleIn } from '@/lib/utils'
import { contactPageData, socialMediaLinks } from '@/data/info'

const socialIcons = {
  'fa-github': Github,
  'fa-linkedin-in': Linkedin,
  'fa-google': Mail,
  'fa-x-twitter': Twitter,
  'fa-instagram': Instagram,
}

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUpVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {contactPageData.contactSection.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {contactPageData.contactSection.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <motion.div variants={fadeInUpVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  I'm always excited to discuss new opportunities, collaborate on projects, 
                  or just have a chat about technology and innovation. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <motion.div 
                  variants={scaleIn}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <a 
                      href={`mailto:${contactPageData.phoneSection.subtitle}`}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      {contactPageData.phoneSection.subtitle}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  variants={scaleIn}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">{contactPageData.phoneSection.title}</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={scaleIn}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Location</p>
                    <a 
                      href={contactPageData.addressSection.location_map_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center"
                    >
                      {contactPageData.addressSection.subtitle}
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Connect with me on social media
                </h4>
                <div className="flex space-x-4">
                  {socialMediaLinks.map((social, index) => {
                    const IconComponent = socialIcons[social.fontAwesomeIcon as keyof typeof socialIcons]
                    return (
                      <motion.a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                        style={{ backgroundColor: social.backgroundColor }}
                        variants={scaleIn}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {IconComponent ? (
                          <IconComponent size={20} className="group-hover:scale-110 transition-transform" />
                        ) : (
                          social.name.charAt(0)
                        )}
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUpVariants}>
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-none shadow-xl">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </motion.button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Blog Section */}
          <motion.div variants={fadeInUpVariants}>
            <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-none">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {contactPageData.blogSection.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                  {contactPageData.blogSection.subtitle}
                </p>
                <motion.a
                  href={contactPageData.blogSection.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Read My Blog
                </motion.a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Available For */}
          <motion.div variants={fadeInUpVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              I'm Available For
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Freelance Projects',
                'Full-time Opportunities',
                'Consulting',
                'Research Collaboration',
                'Technical Mentoring',
                'Speaking Engagements',
                'Open Source Contributions',
                'Startup Advising'
              ].map((service) => (
                <Badge
                  key={service}
                  className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-gray-200 dark:border-gray-600 px-4 py-2 text-sm font-medium hover:scale-105 transition-all duration-200"
                >
                  {service}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
