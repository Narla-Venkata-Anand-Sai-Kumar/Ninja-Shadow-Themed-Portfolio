'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Icon } from '@iconify/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { fadeInUpVariants, staggerContainer, scaleIn } from '@/lib/utils'
import { skills } from '@/data/info'
import { Sparkles, Code, Database, Brain } from 'lucide-react'

const skillIcons = {
  'Shadow AI Arts 🥷': Brain,
  'Silent Stack Mastery ⚔️': Code,
  'Shadow Cloud Dojo 🌙': Database,
}

// Ninja skill categories mapping
const ninjaSkillNames = {
  'Shadow AI Arts 🥷': 'Shadow Techniques',
  'Silent Stack Mastery ⚔️': 'Silent Arts',
  'Shadow Cloud Dojo 🌙': 'Cloud Arts',
}

export default function InteractiveSkills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-ninja-white via-background to-ninja-silver dark:from-ninja-black dark:via-background dark:to-ninja-charcoal" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Animated Header */}
          <motion.div variants={fadeInUpVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-8 h-8 text-ninja-charcoal dark:text-ninja-silver" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-ninja-charcoal via-ninja-gray to-ninja-black dark:from-ninja-silver dark:via-ninja-white dark:to-ninja-silver bg-clip-text text-transparent font-mono">
                Shadow Skills 🥷
              </h1>
              <Sparkles className="w-8 h-8 text-ninja-gray dark:text-ninja-white" />
            </motion.div>
            <motion.p 
              className="text-xl text-ninja-gray dark:text-ninja-silver max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Master the ancient arts of digital craftsmanship
            </motion.p>
          </motion.div>

          {/* Interactive Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.data.map((skillCategory) => {
              const IconComponent = skillIcons[skillCategory.title as keyof typeof skillIcons] || Sparkles
              const isSelected = selectedCategory === skillCategory.title
              const ninjaTitle = ninjaSkillNames[skillCategory.title as keyof typeof ninjaSkillNames] || skillCategory.title
              
              return (
                <motion.div
                  key={skillCategory.title}
                  variants={scaleIn}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(isSelected ? null : skillCategory.title)}
                >
                  <Card className={`h-full transition-all duration-300 ninja-border ${
                    isSelected
                      ? 'border-ninja-charcoal dark:border-ninja-silver ninja-shadow-hover bg-gradient-to-br from-ninja-silver/10 to-ninja-gray/10 dark:from-ninja-gray/20 dark:to-ninja-charcoal/20'
                      : 'ninja-shadow bg-card/80 backdrop-blur-sm hover:ninja-shadow-hover'
                  }`}>
                    <CardHeader className="text-center pb-4">
                      <motion.div
                        className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                          isSelected
                            ? 'bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white text-ninja-white dark:text-ninja-black'
                            : 'bg-ninja-silver/20 dark:bg-ninja-gray/20 text-ninja-charcoal dark:text-ninja-silver'
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent size={24} />
                      </motion.div>
                      <CardTitle className={`text-xl font-bold ${
                        isSelected
                          ? 'text-ninja-charcoal dark:text-ninja-silver'
                          : 'text-ninja-gray dark:text-ninja-white'
                      }`}>
                        {skillCategory.title}
                      </CardTitle>
                      <p className="text-sm text-ninja-gray dark:text-ninja-silver font-mono">
                        {ninjaTitle}
                      </p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-ninja-gray dark:text-ninja-silver mb-4">
                        {skillCategory.softwareSkills.length} shadow techniques
                      </p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {skillCategory.softwareSkills.slice(0, 3).map((skill) => (
                          <Badge 
                            key={skill.skillName} 
                            variant="secondary"
                            className="text-xs bg-ninja-silver/20 dark:bg-ninja-gray/20 text-ninja-charcoal dark:text-ninja-silver border-ninja-gray/20 dark:border-ninja-silver/20"
                          >
                            {skill.skillName}
                          </Badge>
                        ))}
                        {skillCategory.softwareSkills.length > 3 && (
                          <Badge variant="outline" className="text-xs border-ninja-gray dark:border-ninja-silver text-ninja-gray dark:text-ninja-silver">
                            +{skillCategory.softwareSkills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Detailed Skills View */}
          <AnimatePresence mode="wait">
            {selectedCategory && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="mt-12"
              >
                {skills.data
                  .filter(category => category.title === selectedCategory)
                  .map((skillCategory) => (
                    <Card key={skillCategory.title} className="overflow-hidden ninja-border ninja-shadow-hover bg-gradient-to-br from-ninja-white/80 to-ninja-silver/80 dark:from-ninja-black/80 dark:to-ninja-charcoal/80 backdrop-blur-sm">
                      <CardHeader className="bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white text-ninja-white dark:text-ninja-black">
                        <CardTitle className="text-2xl font-bold flex items-center space-x-3">
                          {React.createElement(skillIcons[skillCategory.title as keyof typeof skillIcons] || Sparkles, { size: 28 })}
                          <span>{skillCategory.title}</span>
                          <span className="text-lg font-mono opacity-80">
                            {ninjaSkillNames[skillCategory.title as keyof typeof ninjaSkillNames]}
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-8">
                        {/* Skills Description */}
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-ninja-charcoal dark:text-ninja-silver mb-4">Mastered Techniques:</h3>
                          <div className="space-y-2">
                            {skillCategory.skills.map((skill, index) => (
                              <motion.p
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-ninja-gray dark:text-ninja-silver"
                              >
                                {skill}
                              </motion.p>
                            ))}
                          </div>
                        </div>

                        {/* Software Skills Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                          {skillCategory.softwareSkills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill.skillName}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: skillIndex * 0.1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              onHoverStart={() => setHoveredSkill(skill.skillName)}
                              onHoverEnd={() => setHoveredSkill(null)}
                              className="group relative"
                            >
                              <div className="bg-ninja-white/60 dark:bg-ninja-black/60 ninja-glass p-4 rounded-xl ninja-shadow hover:ninja-shadow-hover transition-all duration-300 ninja-border h-full backdrop-blur-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ninja-silver/20 to-ninja-gray/20 dark:from-ninja-gray/20 dark:to-ninja-charcoal/20 flex items-center justify-center">
                                    <Icon 
                                      icon={skill.fontAwesomeClassname} 
                                      className="w-6 h-6"
                                      style={{ color: skill.style?.color || '#FFFFFF' }}
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-ninja-charcoal dark:text-ninja-silver">
                                      {skill.skillName}
                                    </h4>
                                  </div>
                                </div>
                                
                                {/* Ninja Mastery Level */}
                                <div className="w-full bg-ninja-silver/30 dark:bg-ninja-gray/30 rounded-full h-2 mb-2">
                                  <motion.div
                                    className="bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white h-2 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.random() * 30 + 70}%` }}
                                    transition={{ delay: skillIndex * 0.1 + 0.5, duration: 1 }}
                                  />
                                </div>
                                <div className="text-xs text-ninja-gray dark:text-ninja-silver text-right font-mono">
                                  Ninja Level
                                </div>
                                
                                {/* Hover Effect */}
                                <AnimatePresence>
                                  {hoveredSkill === skill.skillName && (
                                    <motion.div
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 10 }}
                                      className="absolute inset-0 bg-gradient-to-br from-ninja-charcoal/90 to-ninja-black/90 dark:from-ninja-silver/90 dark:to-ninja-white/90 rounded-xl flex items-center justify-center text-ninja-white dark:text-ninja-black font-semibold text-center p-4"
                                      style={{ zIndex: 10 }}
                                    >
                                      <div className="text-center">
                                        <div className="text-2xl mb-2">🥷</div>
                                        <div>Mastering {skill.skillName}</div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Call to Action */}
          {!selectedCategory && (
            <motion.div
              variants={fadeInUpVariants}
              className="text-center mt-16"
            >
              <motion.p
                className="text-ninja-gray dark:text-ninja-silver mb-8 font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🥷 Click on any category above to unveil the shadow techniques
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
