'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Icon } from '@iconify/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { fadeInUpVariants, staggerContainer, scaleIn } from '@/lib/utils'
import { skills } from '@/data/info'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUpVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and the tools I use to build amazing projects
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skills.data.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.title}
                variants={fadeInUpVariants}
                className="w-full"
              >
                <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {skillCategory.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      {/* Skills Description */}
                      <div className="space-y-6">
                        <div className="space-y-4">
                          {skillCategory.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skillIndex}
                              variants={fadeInUpVariants}
                              className="flex items-start space-x-3 group"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {skill}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Software Skills Grid */}
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Technologies & Tools
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {skillCategory.softwareSkills.map((softwareSkill, skillIndex) => (
                            <motion.div
                              key={softwareSkill.skillName}
                              variants={scaleIn}
                              initial="hidden"
                              animate={inView ? "visible" : "hidden"}
                              transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                              className="group"
                            >
                              <Card className="p-4 h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                                <div className="flex flex-col items-center text-center space-y-3">
                                  <div className="relative">
                                    <motion.div
                                      whileHover={{ rotate: 360 }}
                                      transition={{ duration: 0.6 }}
                                      className="w-12 h-12 flex items-center justify-center"
                                    >
                                      {softwareSkill.fontAwesomeClassname.includes('simple-icons:') || 
                                       softwareSkill.fontAwesomeClassname.includes('logos') ? (
                                        <Icon
                                          icon={softwareSkill.fontAwesomeClassname}
                                          className="w-8 h-8"
                                          style={{
                                            color: softwareSkill.style.color || '#3B82F6',
                                            backgroundColor: softwareSkill.style.backgroundColor,
                                          }}
                                        />
                                      ) : (
                                        <div
                                          className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-xs"
                                          style={{
                                            backgroundColor: softwareSkill.style.color || '#3B82F6',
                                          }}
                                        >
                                          {softwareSkill.skillName.charAt(0).toUpperCase()}
                                        </div>
                                      )}
                                    </motion.div>
                                    
                                    {/* Hover Effect Circle */}
                                    <motion.div
                                      className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-100"
                                      initial={false}
                                      whileHover={{ scale: 1.2 }}
                                      transition={{ duration: 0.3 }}
                                    />
                                  </div>
                                  
                                  <div className="min-h-[40px] flex items-center">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-center leading-tight">
                                      {softwareSkill.skillName}
                                    </p>
                                  </div>
                                </div>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            variants={fadeInUpVariants}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-none">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Always Learning, Always Growing
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                  Technology evolves rapidly, and so do I. I&apos;m constantly exploring new tools, 
                  frameworks, and methodologies to stay at the forefront of innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Machine Learning',
                    'Deep Learning',
                    'Computer Vision',
                    'Natural Language Processing',
                    'Full Stack Development',
                    'Cloud Computing',
                    'DevOps',
                    'Research & Development'
                  ].map((domain) => (
                    <Badge
                      key={domain}
                      className="bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-gray-200 dark:border-gray-600 px-4 py-2 text-sm font-medium"
                    >
                      {domain}
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
