'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, MapPin, Calendar, Building2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { fadeInUpVariants, staggerContainer, slideInFromLeft } from '@/lib/utils'
import { experience } from '@/data/info'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
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
              {experience.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-2">
              {experience.subtitle}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              {experience.description}
            </p>
          </motion.div>

          {/* Experience Sections */}
          <div className="space-y-12">
            {experience.sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                variants={fadeInUpVariants}
                className="w-full"
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                    {section.work ? (
                      <Building2 className="mr-3 h-8 w-8 text-blue-600" />
                    ) : (
                      <span className="mr-3 text-3xl">🏆</span>
                    )}
                    {section.title}
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                </div>

                <div className="space-y-6">
                  {section.experiences.map((exp, expIndex) => (
                    <motion.div
                      key={exp.title}
                      variants={slideInFromLeft}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      transition={{ delay: sectionIndex * 0.2 + expIndex * 0.1 }}
                    >
                      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group hover:scale-[1.02]">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div className="flex-1">
                              <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {exp.title}
                              </CardTitle>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-400">
                                <div className="flex items-center">
                                  <Building2 className="h-4 w-4 mr-2" />
                                  <span className="font-medium">{exp.company}</span>
                                  {exp.company_url && (
                                    <a
                                      href={exp.company_url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="ml-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                      <ExternalLink className="h-4 w-4" />
                                    </a>
                                  )}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-2" />
                                  <span>{exp.duration}</span>
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-2" />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Company Color Indicator */}
                            <div 
                              className="w-4 h-4 rounded-full flex-shrink-0"
                              style={{ backgroundColor: exp.color }}
                            />
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <div 
                            className="text-gray-700 dark:text-gray-300 leading-relaxed prose prose-gray dark:prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: exp.description }}
                          />
                          
                          {/* Achievement Highlights */}
                          {exp.description.includes('87%') && (
                            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                              <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">
                                Key Achievement
                              </h4>
                              <p className="text-green-700 dark:text-green-300 text-sm">
                                Achieved 87% accuracy in 2D-to-3D keypoint conversion for digital twin applications
                              </p>
                            </div>
                          )}
                          
                          {exp.description.includes('76%') && (
                            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                              <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">
                                Technical Innovation
                              </h4>
                              <p className="text-blue-700 dark:text-blue-300 text-sm">
                                Developed graphology analysis system with 76% accuracy using ResNet-50
                              </p>
                            </div>
                          )}
                          
                          {exp.description.includes('CodeRush') && (
                            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                              <h4 className="font-semibold text-yellow-800 dark:text-yellow-400 mb-2">
                                Leadership Highlight
                              </h4>
                              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                                Led team to first place in CodeRush 2023 - National Level Hackathon by IBM
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Summary */}
          <motion.div
            variants={fadeInUpVariants}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-none">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Career Highlights
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                    <div className="text-gray-600 dark:text-gray-400">Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                    <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                    <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'AI/ML Development',
                    'Computer Vision',
                    'NLP & LLMs',
                    'Full Stack Development',
                    'Leadership',
                    'Research',
                    'Open Source',
                    'Mentoring'
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-gray-200 dark:border-gray-600 px-4 py-2 text-sm font-medium"
                    >
                      {skill}
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
