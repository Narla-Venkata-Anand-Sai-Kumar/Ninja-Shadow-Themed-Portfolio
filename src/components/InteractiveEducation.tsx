'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { fadeInUpVariants, staggerContainer } from '@/lib/utils'
import { degrees, certifications } from '@/data/info'
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  Book, 
  Star,
  Trophy,
  Building2,
  ChevronRight,
  ExternalLink
} from 'lucide-react'

export default function InteractiveEducation() {
  const [activeTab, setActiveTab] = useState<'degrees' | 'certifications'>('degrees')
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const tabs = [
    { id: 'degrees', label: 'Shadow Learning 🎓', icon: GraduationCap, count: degrees.degrees?.length || 0 },
    { id: 'certifications', label: 'Ninja Certification 🏆', icon: Award, count: certifications.certifications?.length || 0 },
  ]

  const currentData = activeTab === 'degrees' ? degrees.degrees : certifications.certifications

  return (
    <section className="py-8 sm:py-12 lg:py-20 min-h-screen bg-gradient-to-br from-ninja-black via-ninja-charcoal to-ninja-gray" ref={ref}>
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
                className="p-3 bg-gradient-to-r from-ninja-charcoal to-ninja-gray rounded-2xl ninja-shadow"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <GraduationCap className="w-8 h-8 text-ninja-white" />
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-ninja-white ninja-glow">
                Ninja Education 🎓
              </h1>
              <motion.div
                className="p-3 bg-gradient-to-r from-ninja-gray to-ninja-silver rounded-2xl ninja-shadow"
                whileHover={{ rotate: -360 }}
                transition={{ duration: 0.5 }}
              >
                <Trophy className="w-8 h-8 text-ninja-black" />
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-lg sm:text-xl text-ninja-silver max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              The shadow path of continuous learning - Mastering skills in the digital realm
            </motion.p>
          </motion.div>

          {/* Interactive Tabs - Mobile Optimized */}
          <motion.div variants={fadeInUpVariants} className="mb-8 lg:mb-12">
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
              {tabs.map((tab) => {
                const IconComponent = tab.icon
                const isActive = activeTab === tab.id
                
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id as 'degrees' | 'certifications')
                      setSelectedItem(null)
                    }}
                    className={`flex items-center justify-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ninja-border ${
                      isActive
                        ? 'bg-gradient-to-r from-ninja-charcoal to-ninja-gray text-ninja-white ninja-shadow ninja-glow'
                        : 'bg-ninja-glass text-ninja-silver hover:bg-ninja-charcoal/50 hover:ninja-shadow'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={20} />
                    <span>{tab.label}</span>
                    <Badge 
                      variant="secondary" 
                      className={`ml-2 ${isActive ? 'bg-ninja-white/20 text-ninja-white' : 'bg-ninja-charcoal text-ninja-silver'}`}
                    >
                      {tab.count}
                    </Badge>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 lg:gap-8"
            >
              {currentData?.map((item, index) => {
                const isSelected = selectedItem === index
                const isHovered = hoveredCard === index

                return (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="cursor-pointer"
                    onClick={() => setSelectedItem(isSelected ? null : index)}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.02, 
                        y: -5,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card className={`overflow-hidden transition-all duration-300 ninja-border ${
                        isSelected || isHovered
                          ? 'ninja-shadow ninja-glow bg-gradient-to-br from-ninja-charcoal to-ninja-gray'
                          : 'ninja-glass hover:bg-ninja-charcoal/30'
                      }`}>
                        {/* Card Header */}
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start space-x-4 flex-1 min-w-0">
                              <motion.div
                                className={`p-3 rounded-xl flex-shrink-0 ${
                                  isHovered
                                    ? 'bg-gradient-to-r from-ninja-gray to-ninja-silver text-ninja-black ninja-glow'
                                    : 'bg-ninja-charcoal text-ninja-silver'
                                }`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                {activeTab === 'degrees' ? (
                                  <GraduationCap size={24} />
                                ) : (
                                  <Award size={24} />
                                )}
                              </motion.div>
                              <div className="flex-1 min-w-0">
                                <CardTitle className="text-xl sm:text-2xl font-bold text-ninja-white mb-2">
                                  {item.title}
                                </CardTitle>
                                <div className="space-y-2">
                                  <div className="flex items-center space-x-2 text-ninja-silver">
                                    <Building2 size={16} className="flex-shrink-0" />
                                    <span className="font-semibold truncate">
                                      {activeTab === 'degrees' ? item.subtitle : item.subtitle}
                                    </span>
                                  </div>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-ninja-silver text-sm">
                                    {'duration' in item && (
                                      <div className="flex items-center space-x-1">
                                        <Calendar size={14} className="flex-shrink-0" />
                                        <span>{item.duration}</span>
                                      </div>
                                    )}
                                    {'grade' in item && item.grade && (
                                      <div className="flex items-center space-x-1">
                                        <Star size={14} className="flex-shrink-0 text-yellow-400" />
                                        <span className="truncate">{item.grade}</span>
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
                              <ChevronRight className="w-6 h-6 text-ninja-silver" />
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
                                  {'descriptions' in item && item.descriptions && item.descriptions.length > 0 && (
                                    <div>
                                      <h4 className="font-semibold text-ninja-white mb-3 flex items-center space-x-2">
                                        <Book className="w-5 h-5 text-ninja-silver" />
                                        <span>{activeTab === 'degrees' ? 'Shadow Learning Details 📚' : 'Certification Details 🏆'}</span>
                                      </h4>
                                      <ul className="space-y-3">
                                        {item.descriptions.map((desc: string, descIndex: number) => (
                                          <motion.li
                                            key={descIndex}
                                            className="flex items-start space-x-3"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + descIndex * 0.1 }}
                                          >
                                            <div className="w-2 h-2 bg-ninja-silver rounded-full mt-2 flex-shrink-0 ninja-glow" />
                                            <span className="text-ninja-silver leading-relaxed">
                                              {desc}
                                            </span>
                                          </motion.li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}

                                  {/* Grade for degrees */}
                                  {activeTab === 'degrees' && 'grade' in item && item.grade && (
                                    <div>
                                      <h4 className="font-semibold text-ninja-white mb-2 flex items-center space-x-2">
                                        <Star className="w-5 h-5 text-yellow-400" />
                                        <span>Ninja Performance 🥷</span>
                                      </h4>
                                      <div className="flex items-center space-x-2">
                                        <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400 ninja-border">
                                          {item.grade}
                                        </Badge>
                                      </div>
                                    </div>
                                  )}

                                  {/* External Links */}
                                  {(('website_link' in item && item.website_link) || ('certificate_link' in item && item.certificate_link)) && (
                                    <motion.div
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.3 }}
                                    >
                                      <a
                                        href={('website_link' in item && item.website_link) || ('certificate_link' in item && item.certificate_link) || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-ninja-charcoal to-ninja-gray text-ninja-white rounded-lg hover:ninja-shadow ninja-border transition-all duration-300"
                                      >
                                        <ExternalLink size={16} />
                                        <span>
                                          {activeTab === 'degrees' ? 'Visit Shadow Dojo 🏯' : 'Verify Certification 📜'}
                                        </span>
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

          {/* Mobile-Optimized Summary Stats */}
          <motion.div
            variants={fadeInUpVariants}
            className="mt-12 lg:mt-16"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { label: 'Shadow Degrees', value: degrees.degrees?.length?.toString() || '0', icon: GraduationCap },
                { label: 'Ninja Certifications', value: certifications.certifications?.length?.toString() || '0', icon: Award },
                { label: 'Training Dojos', value: '2+', icon: Building2 },
                { label: '学習年数', value: '10+', icon: Book },
              ].map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 lg:p-6 ninja-glass rounded-2xl ninja-shadow ninja-border"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div
                      className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 bg-gradient-to-r from-ninja-charcoal to-ninja-gray rounded-2xl flex items-center justify-center ninja-shadow"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-ninja-white" />
                    </motion.div>
                    <h4 className="text-2xl lg:text-3xl font-bold text-ninja-white mb-1 ninja-glow">
                      {stat.value}
                    </h4>
                    <p className="text-sm lg:text-base text-ninja-silver">
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
