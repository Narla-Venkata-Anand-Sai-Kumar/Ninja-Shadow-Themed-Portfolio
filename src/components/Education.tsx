'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, GraduationCap, Award, BookOpen } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { fadeInUpVariants, staggerContainer, slideInFromRight } from '@/lib/utils'
import { degrees, certifications } from '@/data/info'

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
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
              Education & Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My academic journey and continuous learning through professional certifications
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={fadeInUpVariants} className="mb-16">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                <GraduationCap className="mr-3 h-8 w-8 text-blue-600" />
                Academic Background
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </div>

            <div className="space-y-8">
              {degrees.degrees.map((degree, index) => (
                <motion.div
                  key={degree.title}
                  variants={slideInFromRight}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 group hover:scale-[1.02]">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row items-start gap-6">
                        {/* Institution Logo Placeholder */}
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                          {degree.title.split(' ')[0].charAt(0)}
                        </div>
                        
                        <div className="flex-1">
                          <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {degree.title}
                          </CardTitle>
                          
                          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            {degree.subtitle}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-600 dark:text-gray-400 mb-4">
                            <div className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-2" />
                              <span>{degree.duration}</span>
                            </div>
                            {degree.grade && (
                              <div className="flex items-center">
                                <Award className="h-4 w-4 mr-2" />
                                <span className="font-semibold text-green-600 dark:text-green-400">
                                  Grade: {degree.grade}
                                </span>
                              </div>
                            )}
                            <a
                              href={degree.website_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Visit Website
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        {degree.descriptions.map((description, descIndex) => (
                          <motion.div
                            key={descIndex}
                            className="flex items-start space-x-3 group"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Highlight achievements */}
                      {degree.descriptions.some(desc => desc.includes('Code-Rush')) && (
                        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                          <h4 className="font-semibold text-yellow-800 dark:text-yellow-400 mb-2">
                            🏆 Major Achievement
                          </h4>
                          <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                            Winner of Code-Rush National Level Hackathon conducted by IBM
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={fadeInUpVariants}>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                <Award className="mr-3 h-8 w-8 text-purple-600" />
                Professional Certifications
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 group hover:scale-105">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                          style={{ backgroundColor: cert.color_code }}
                        >
                          {cert.alt_name.charAt(0)}
                        </div>
                        <a
                          href={cert.certificate_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                      
                      <CardTitle className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                        {cert.title}
                      </CardTitle>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {cert.subtitle}
                      </p>
                      
                      <Badge 
                        className="w-fit text-xs"
                        style={{ backgroundColor: `${cert.color_code}20`, color: cert.color_code }}
                      >
                        {cert.alt_name}
                      </Badge>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Summary */}
          <motion.div
            variants={fadeInUpVariants}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-none">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Continuous Learning Journey
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                  From formal education to professional certifications, I believe in lifelong learning 
                  and staying updated with the latest technologies and best practices.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Computer Science',
                    'Artificial Intelligence',
                    'Machine Learning',
                    'Deep Learning',
                    'Data Structures',
                    'Algorithms',
                    'Software Engineering',
                    'Research & Development'
                  ].map((subject) => (
                    <Badge
                      key={subject}
                      className="bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-gray-200 dark:border-gray-600 px-4 py-2 text-sm font-medium"
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
