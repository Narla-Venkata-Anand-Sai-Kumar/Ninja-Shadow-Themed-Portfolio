'use client'

import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { fadeInUpVariants, staggerContainer } from '@/lib/utils'
import { greeting, experience } from '@/data/info'
import { MapPin, Code, Heart, Coffee, Music, Camera, Plane, Book } from 'lucide-react'

const interests = [
  { name: 'Shadow Coding', icon: Code, color: 'from-ninja-gray to-ninja-charcoal dark:from-ninja-silver to-ninja-white' },
  { name: 'Digital Art', icon: Camera, color: 'from-ninja-charcoal to-ninja-black dark:from-ninja-white to-ninja-silver' },
  { name: 'Silent Travel', icon: Plane, color: 'from-ninja-silver to-ninja-gray dark:from-ninja-gray to-ninja-charcoal' },
  { name: 'Night Music', icon: Music, color: 'from-ninja-black to-ninja-charcoal dark:from-ninja-silver to-ninja-white' },
  { name: 'Ancient Texts', icon: Book, color: 'from-ninja-gray to-ninja-silver dark:from-ninja-charcoal to-ninja-black' },
  { name: 'Dark Roast', icon: Coffee, color: 'from-ninja-charcoal to-ninja-gray dark:from-ninja-white to-ninja-silver' },
]

export default function InteractiveAbout() {
  const [activeTab, setActiveTab] = useState('story')
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const tabs = [
    { id: 'story', label: 'Shadow Path', icon: Heart },
    { id: 'experience', label: 'Missions', icon: Code },
    { id: 'interests', label: 'Arts', icon: Coffee },
  ]

  return (
    <section ref={containerRef} className="py-20 min-h-screen bg-gradient-to-br from-ninja-white via-background to-ninja-silver dark:from-ninja-black dark:via-background dark:to-ninja-charcoal">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          style={{ y, opacity }}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Animated Header */}
          <motion.div variants={fadeInUpVariants} className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-ninja-charcoal via-ninja-gray to-ninja-black dark:from-ninja-silver dark:via-ninja-white dark:to-ninja-silver bg-clip-text text-transparent font-mono"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Shadow Path 🥷
            </motion.h1>
            <motion.p 
              className="text-xl text-ninja-gray dark:text-ninja-silver max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Discover the shadow behind the digital artistry
            </motion.p>
          </motion.div>

          {/* Interactive Tabs */}
          <motion.div variants={fadeInUpVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {tabs.map((tab) => {
                const IconComponent = tab.icon
                const isActive = activeTab === tab.id
                
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white text-ninja-white dark:text-ninja-black ninja-shadow-hover'
                        : 'bg-ninja-white/80 text-ninja-charcoal hover:bg-ninja-white ninja-shadow dark:bg-ninja-black/80 dark:text-ninja-silver dark:hover:bg-ninja-black'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={20} />
                    <span>{tab.label}</span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'story' && (
              <motion.div
                key="story"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Text Content */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card className="p-8 bg-ninja-white/80 ninja-glass backdrop-blur-sm dark:bg-ninja-black/80 ninja-shadow-hover ninja-border">
                      <CardContent className="space-y-6">
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-4 h-4 bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white rounded-full"></div>
                          <h3 className="text-2xl font-bold text-ninja-charcoal dark:text-ninja-silver">
                            The Shadow&apos;s Path 🌙
                          </h3>
                        </div>
                        
                        <div className="space-y-4 text-ninja-gray dark:text-ninja-silver leading-relaxed">
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            {greeting.subTitle}
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            I am a digital ninja 🥷, moving silently through the shadows of code to solve real-world challenges. 
                            My expertise spans machine learning, deep learning, and software engineering, with a focus 
                            on creating innovative solutions that strike like lightning and vanish like mist.
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            When not wielding the digital katana, you&apos;ll find me exploring new techniques, contributing to 
                            the shadow archives (open-source), or sharing ancient wisdom with fellow code warriors. 
                            I believe in the way of continuous learning - The Path - and staying invisible yet impactful.
                          </motion.p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-6">
                          {['ShadowML', 'DeepNinja', 'CodeSamurai', 'TechNinja', 'DigitalWarrior'].map((tag, index) => (
                            <motion.div
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              <Badge 
                                variant="secondary" 
                                className="bg-gradient-to-r from-ninja-silver/20 to-ninja-gray/20 dark:from-ninja-gray/20 dark:to-ninja-charcoal/20 text-ninja-charcoal dark:text-ninja-silver border-ninja-gray/20 dark:border-ninja-silver/20"
                              >
                                #{tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* 3D Profile Card */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center"
                  >
                    <motion.div
                      whileHover={{ 
                        rotateY: 10, 
                        rotateX: 5, 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                      style={{ perspective: 1000 }}
                      className="w-full max-w-md"
                    >
                      <Card className="overflow-hidden bg-gradient-to-br from-ninja-white to-ninja-silver dark:from-ninja-black dark:to-ninja-charcoal ninja-shadow-hover ninja-border transform-gpu">
                        <div className="h-32 bg-gradient-to-r from-ninja-charcoal via-ninja-gray to-ninja-black dark:from-ninja-silver dark:via-ninja-white dark:to-ninja-silver relative">
                          <div className="absolute inset-0 bg-ninja-black/20 dark:bg-ninja-white/20"></div>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-ninja-gray/30 to-ninja-charcoal/30 dark:from-ninja-silver/30 dark:to-ninja-white/30"
                            animate={{ x: [-100, 100, -100] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          />
                        </div>
                        <CardContent className="p-8 text-center relative -mt-16">
                          <motion.div
                            className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white p-1"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="w-full h-full bg-ninja-white dark:bg-ninja-black rounded-full flex items-center justify-center">
                              <span className="text-3xl font-bold font-mono">🥷</span>
                            </div>
                          </motion.div>
                          <h3 className="text-2xl font-bold text-ninja-charcoal dark:text-ninja-silver mb-2">
                            {greeting.nickname} • Shadow Coder
                          </h3>
                          <div className="flex items-center justify-center space-x-2 text-ninja-gray dark:text-ninja-silver mb-4">
                            <MapPin size={16} />
                            <span>Shadow Coder</span>
                          </div>
                          <motion.div
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-ninja-silver/20 to-ninja-gray/20 dark:from-ninja-gray/20 dark:to-ninja-charcoal/20 px-4 py-2 rounded-full ninja-border"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="w-2 h-2 bg-ninja-charcoal dark:bg-ninja-silver rounded-full animate-pulse"></div>
                            <span className="text-sm text-ninja-gray dark:text-ninja-silver">Ready for missions</span>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 bg-ninja-white/80 ninja-glass backdrop-blur-sm dark:bg-ninja-black/80 ninja-shadow-hover ninja-border">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold mb-4 bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white bg-clip-text text-transparent font-mono">
                      Shadow Missions 🎯
                    </CardTitle>
                    <p className="text-ninja-gray dark:text-ninja-silver">Elite missions accomplished in the digital realm</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {experience.sections[2]?.experiences?.map((mission, index) => (
                        <motion.div
                          key={mission.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border-l-4 border-ninja-charcoal dark:border-ninja-silver pl-6 py-4"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-xl font-bold text-ninja-charcoal dark:text-ninja-silver mb-1">
                                {mission.title}
                              </h4>
                              <div className="flex items-center space-x-4 text-sm text-ninja-gray dark:text-ninja-silver">
                                <span className="font-semibold">{mission.company}</span>
                                <span>{mission.duration}</span>
                              </div>
                            </div>
                            <div className="text-2xl">
                              {index === 0 && '👑'}
                              {index === 1 && '🤝'}
                              {index === 2 && '⚡'}
                            </div>
                          </div>
                          <p className="text-ninja-gray dark:text-ninja-silver leading-relaxed text-sm">
                            {mission.description}
                          </p>
                          <div className="mt-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-ninja-silver/20 dark:bg-ninja-gray/20 text-ninja-charcoal dark:text-ninja-silver">
                              📍 {mission.location}
                            </span>
                          </div>
                        </motion.div>
                      )) || (
                        <div className="text-center text-ninja-gray dark:text-ninja-silver">
                          <p>No missions found</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeTab === 'interests' && (
              <motion.div
                key="interests"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 bg-ninja-white/80 ninja-glass backdrop-blur-sm dark:bg-ninja-black/80 ninja-shadow-hover ninja-border">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold mb-4 bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white bg-clip-text text-transparent font-mono">
                      秘密の趣味 ⚔️
                    </CardTitle>
                    <p className="text-ninja-gray dark:text-ninja-silver">What fuels the ninja spirit</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {interests.map((interest, index) => {
                        const IconComponent = interest.icon
                        return (
                          <motion.div
                            key={interest.name}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group cursor-pointer"
                          >
                            <div className="bg-ninja-white dark:bg-ninja-black p-6 rounded-2xl ninja-shadow hover:ninja-shadow-hover transition-all duration-300 ninja-border">
                              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${interest.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                                <IconComponent className="w-full h-full text-ninja-white dark:text-ninja-black" />
                              </div>
                              <h4 className="text-lg font-semibold text-center text-ninja-charcoal dark:text-ninja-silver">
                                {interest.name}
                              </h4>
                              <div className="text-center mt-2">
                                <span className="text-2xl">
                                  {index === 0 && '🥷'}
                                  {index === 1 && '🎨'}
                                  {index === 2 && '🌙'}
                                  {index === 3 && '🎵'}
                                  {index === 4 && '📜'}
                                  {index === 5 && '☕'}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
