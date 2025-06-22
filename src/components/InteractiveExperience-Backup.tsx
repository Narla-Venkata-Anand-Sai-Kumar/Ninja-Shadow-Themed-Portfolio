'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { fadeInUpVariants, staggerContainer } from '@/lib/utils'
import { experience } from '@/data/info'
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Code, 
  Trophy,
  Users,
  Target,
  Zap,
  Building2,
  Clock
} from 'lucide-react'

const experienceIcons = {
  'Software Engineer': Code,
  'Developer': Code,
  'Intern': Users,
  'Researcher': Target,
  'Analyst': Zap,
  'Shadow Coder': Code,
  'Digital Ninja': Target,
  'Code Samurai': Trophy,
  'default': Briefcase
}

export default function InteractiveExperience() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Extract unique company types for filtering
  const companyTypes = ['all', ...new Set(experience.data.map(exp => exp.company.toLowerCase()))]

  const filteredExperience = activeFilter === 'all' 
    ? experience.data 
    : experience.data.filter(exp => exp.company.toLowerCase().includes(activeFilter))

  const getIconForRole = (role: string) => {
    const iconKey = Object.keys(experienceIcons).find(key => 
      role.toLowerCase().includes(key.toLowerCase())
    ) || 'default'
    return experienceIcons[iconKey as keyof typeof experienceIcons] || experienceIcons.default
  }

  return (
    <section className="py-8 sm:py-12 lg:py-20 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Enhanced Header */}
          <motion.div variants={fadeInUpVariants} className="text-center mb-12 lg:mb-16">
            <motion.div
              className="inline-flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Briefcase className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Experience
              </h1>
              <motion.div
                className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl"
                whileHover={{ rotate: -360 }}
                transition={{ duration: 0.5 }}
              >
                <Trophy className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              My professional journey through innovative projects and impactful contributions
            </motion.p>
          </motion.div>

          {/* Interactive Filter Buttons - Mobile Optimized */}
          <motion.div variants={fadeInUpVariants} className="mb-8 lg:mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {companyTypes.map((type, index) => (
                <motion.button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                    activeFilter === type
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md dark:bg-gray-800/80 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Timeline Container - Enhanced for Mobile */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-600 h-full rounded-full" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6 lg:space-y-12"
              >
                {filteredExperience.map((exp, index) => {
                  const IconComponent = getIconForRole(exp.role)
                  const isSelected = selectedExperience === index
                  const isHovered = hoveredCard === index
                  const isLeft = index % 2 === 0

                  return (
                    <motion.div
                      key={`${exp.company}-${index}`}
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative lg:w-1/2 ${isLeft ? 'lg:pr-12 lg:ml-0' : 'lg:pl-12 lg:ml-auto'}`}
                      onHoverStart={() => setHoveredCard(index)}
                      onHoverEnd={() => setHoveredCard(null)}
                    >
                      {/* Timeline Node - Desktop Only */}
                      <motion.div
                        className={`hidden lg:block absolute top-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg ${
                          isLeft ? '-right-12' : '-left-12'
                        } transform translate-x-1/2`}
                        whileHover={{ scale: 1.2 }}
                        animate={isHovered ? { scale: 1.3, rotate: 180 } : {}}
                      />

                      {/* Experience Card */}
                      <motion.div
                        whileHover={{ 
                          scale: 1.02, 
                          y: -5,
                          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="cursor-pointer"
                        onClick={() => setSelectedExperience(isSelected ? null : index)}
                      >
                        <Card className={`overflow-hidden border-2 transition-all duration-300 ${
                          isSelected || isHovered
                            ? 'border-blue-500 shadow-2xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20'
                            : 'border-gray-200 hover:border-blue-300 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-gray-900/80'
                        }`}>
                          {/* Card Header */}
                          <CardHeader className="pb-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start space-x-4 flex-1 min-w-0">
                                <motion.div
                                  className={`p-3 rounded-xl flex-shrink-0 ${
                                    isHovered
                                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                                  }`}
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <IconComponent size={24} />
                                </motion.div>
                                <div className="flex-1 min-w-0">
                                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 truncate">
                                    {exp.role}
                                  </CardTitle>
                                  <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                                      <Building2 size={16} className="flex-shrink-0" />
                                      <span className="font-semibold truncate">{exp.company}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-400 text-sm">
                                      <div className="flex items-center space-x-1">
                                        <Calendar size={14} className="flex-shrink-0" />
                                        <span>{exp.date}</span>
                                      </div>
                                      {exp.location && (
                                        <div className="flex items-center space-x-1">
                                          <MapPin size={14} className="flex-shrink-0" />
                                          <span className="truncate">{exp.location}</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <motion.div
                                className="flex-shrink-0"
                                animate={{ rotate: isSelected ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronRight className="w-6 h-6 text-gray-400" />
                              </motion.div>
                            </div>
                          </CardHeader>

                          {/* Expandable Content */}
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <CardContent className="pt-0 pb-6 px-6">
                                  <div className="space-y-6">
                                    {/* Description */}
                                    <div>
                                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center space-x-2">
                                        <Target className="w-5 h-5 text-blue-600" />
                                        <span>Role Overview</span>
                                      </h4>
                                      <motion.p
                                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                      >
                                        {exp.desc}
                                      </motion.p>
                                    </div>

                                    {/* Key Achievements */}
                                    {exp.descBullets && exp.descBullets.length > 0 && (
                                      <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center space-x-2">
                                          <Trophy className="w-5 h-5 text-purple-600" />
                                          <span>Key Achievements</span>
                                        </h4>
                                        <ul className="space-y-3">
                                          {exp.descBullets.map((bullet, bulletIndex) => (
                                            <motion.li
                                              key={bulletIndex}
                                              className="flex items-start space-x-3"
                                              initial={{ opacity: 0, x: -10 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ delay: 0.2 + bulletIndex * 0.1 }}
                                            >
                                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                                              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {bullet}
                                              </span>
                                            </motion.li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {/* External Links */}
                                    {exp.companylink && (
                                      <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                      >
                                        <a
                                          href={exp.companylink}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                                        >
                                          <ExternalLink size={16} />
                                          <span>Visit Company</span>
                                        </a>
                                      </motion.div>
                                    )}
                                  </div>
                                </CardContent>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Card>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile-Optimized Summary Stats */}
          <motion.div
            variants={fadeInUpVariants}
            className="mt-12 lg:mt-16"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { label: 'Total Experience', value: `${experience.data.length}+`, icon: Briefcase },
                { label: 'Companies', value: new Set(experience.data.map(exp => exp.company)).size.toString(), icon: Building2 },
                { label: 'Years Active', value: '3+', icon: Clock },
                { label: 'Projects Led', value: '10+', icon: Target },
              ].map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 lg:p-6 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div
                      className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </motion.div>
                    <h4 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                      {stat.value}
                    </h4>
                    <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
