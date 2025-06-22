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
  Clock,
  Sword
} from 'lucide-react'

const experienceIcons = {
  'Software': Code,
  'Developer': Code,
  'Intern': Users,
  'Research': Target,
  'AI': Zap,
  'Engineer': Trophy,
  'default': Briefcase
}

export default function InteractiveExperienceNinja() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState<number>(0)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getIconForRole = (role: string) => {
    const iconKey = Object.keys(experienceIcons).find(key =>
      role.toLowerCase().includes(key.toLowerCase())
    ) as keyof typeof experienceIcons
    return experienceIcons[iconKey] || experienceIcons.default
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
          {/* Ninja Header */}
          <motion.div variants={fadeInUpVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="p-3 bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white rounded-2xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Sword className="w-8 h-8 text-ninja-white dark:text-ninja-black" />
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-ninja-charcoal via-ninja-gray to-ninja-black dark:from-ninja-silver dark:via-ninja-white dark:to-ninja-silver bg-clip-text text-transparent font-mono">
                忍者の道
              </h1>
              <motion.div
                className="p-3 bg-gradient-to-r from-ninja-black to-ninja-charcoal dark:from-ninja-white dark:to-ninja-silver rounded-2xl"
                whileHover={{ rotate: -360 }}
                transition={{ duration: 0.5 }}
              >
                <Trophy className="w-8 h-8 text-ninja-white dark:text-ninja-black" />
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-xl text-ninja-gray dark:text-ninja-silver max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              The shadow warrior&apos;s journey through digital battlefields
            </motion.p>
          </motion.div>

          {/* Section Tabs */}
          <motion.div variants={fadeInUpVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {experience.sections.map((section, index) => (
                <motion.button
                  key={section.title}
                  onClick={() => setActiveSection(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeSection === index
                      ? 'bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white text-ninja-white dark:text-ninja-black ninja-shadow-hover'
                      : 'bg-ninja-white/80 text-ninja-charcoal ninja-shadow dark:bg-ninja-black/80 dark:text-ninja-silver hover:ninja-shadow-hover'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-2">
                    <span>{section.title}</span>
                    <span className="text-sm opacity-80">
                      {index === 0 && '🏢'}
                      {index === 1 && '🥷'}
                      {index === 2 && '👑'}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Experience Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {experience.sections[activeSection].experiences.map((exp, index) => {
                const IconComponent = getIconForRole(exp.title)
                const isSelected = selectedExperience === index
                const isHovered = hoveredCard === index

                return (
                  <motion.div
                    key={`${exp.company}-${index}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.02, 
                        y: -5
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="cursor-pointer"
                      onClick={() => setSelectedExperience(isSelected ? null : index)}
                    >
                      <Card className={`overflow-hidden ninja-border transition-all duration-300 ${
                        isSelected || isHovered
                          ? 'ninja-shadow-hover bg-gradient-to-br from-ninja-silver/10 to-ninja-gray/10 dark:from-ninja-gray/20 dark:to-ninja-charcoal/20 border-ninja-charcoal dark:border-ninja-silver'
                          : 'ninja-shadow bg-ninja-white/80 dark:bg-ninja-black/80 ninja-glass backdrop-blur-sm'
                      }`}>
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start space-x-4 flex-1">
                              <motion.div
                                className={`p-3 rounded-xl ${
                                  isHovered
                                    ? 'bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white text-ninja-white dark:text-ninja-black'
                                    : 'bg-ninja-silver/20 dark:bg-ninja-gray/20 text-ninja-charcoal dark:text-ninja-silver'
                                }`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                <IconComponent size={24} />
                              </motion.div>
                              <div className="flex-1">
                                <CardTitle className="text-xl font-bold text-ninja-charcoal dark:text-ninja-silver mb-2">
                                  {exp.title}
                                </CardTitle>
                                <div className="space-y-2">
                                  <div className="flex items-center space-x-2 text-ninja-gray dark:text-ninja-silver">
                                    <Building2 size={16} />
                                    <span className="font-semibold">{exp.company}</span>
                                  </div>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-ninja-gray dark:text-ninja-silver text-sm">
                                    <div className="flex items-center space-x-1">
                                      <Calendar size={14} />
                                      <span>{exp.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <MapPin size={14} />
                                      <span>{exp.location}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <motion.div
                              animate={{ rotate: isSelected ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight className="w-6 h-6 text-ninja-gray dark:text-ninja-silver" />
                            </motion.div>
                          </div>
                        </CardHeader>

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
                                  <div>
                                    <h4 className="font-semibold text-ninja-charcoal dark:text-ninja-silver mb-3 flex items-center space-x-2">
                                      <Target className="w-5 h-5 text-ninja-gray dark:text-ninja-silver" />
                                      <span>Mission Overview 🎯</span>
                                    </h4>
                                    <motion.p
                                      className="text-ninja-gray dark:text-ninja-silver leading-relaxed"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.1 }}
                                    >
                                      {exp.description}
                                    </motion.p>
                                  </div>

                                  {exp.company_url && (
                                    <motion.div
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.3 }}
                                    >
                                      <a
                                        href={exp.company_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white text-ninja-white dark:text-ninja-black rounded-lg ninja-shadow hover:ninja-shadow-hover transition-all duration-300"
                                      >
                                        <ExternalLink size={16} />
                                        <span>Visit Dojo 🏯</span>
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

          {/* Ninja Stats */}
          <motion.div
            variants={fadeInUpVariants}
            className="mt-16"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Missions Completed', value: `${experience.sections.reduce((acc, section) => acc + section.experiences.length, 0)}+`, icon: Target },
                { label: 'Shadow Organizations', value: new Set(experience.sections.flatMap(s => s.experiences.map(e => e.company))).size.toString(), icon: Building2 },
                { label: 'Years in Shadows', value: '3+', icon: Clock },
                { label: 'Techniques Mastered', value: '25+', icon: Sword },
              ].map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    className="text-center p-6 bg-ninja-white/80 dark:bg-ninja-black/80 ninja-glass rounded-2xl ninja-shadow hover:ninja-shadow-hover ninja-border"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white rounded-2xl flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-8 h-8 text-ninja-white dark:text-ninja-black" />
                    </motion.div>
                    <h4 className="text-3xl font-bold text-ninja-charcoal dark:text-ninja-silver mb-1 font-mono">
                      {stat.value}
                    </h4>
                    <p className="text-ninja-gray dark:text-ninja-silver">
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
