'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ExternalLink, Eye, Star, Search, Scroll, BookOpen, FileText, Users, Award, Trophy } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { publications } from '@/data/info'

interface PublicationData {
  id: string
  name: string
  createdAt: string
  description: string
  url: string
}

const InteractivePublications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  // Filter publications
  const filteredPublications = publications.data.filter((pub: PublicationData) => {
    const matchesSearch = pub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesSearch
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section className="py-8 sm:py-12 lg:py-20 min-h-screen bg-gradient-to-br from-ninja-black via-ninja-charcoal to-ninja-gray">
      {/* Animated Background - Ninja Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-ninja-silver/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${16 + Math.random() * 8}px`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            ⭐
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="p-3 bg-gradient-to-r from-ninja-charcoal to-ninja-gray rounded-2xl ninja-shadow"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Scroll className="w-8 h-8 text-ninja-white" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-ninja-white ninja-glow">
              Shadow Research 📜
            </h1>
            <motion.div
              className="p-3 bg-gradient-to-r from-ninja-gray to-ninja-silver rounded-2xl ninja-shadow"
              whileHover={{ rotate: -360 }}
              transition={{ duration: 0.5 }}
            >
              <BookOpen className="w-8 h-8 text-ninja-black" />
            </motion.div>
          </motion.div>
          <motion.p 
            className="text-lg sm:text-xl text-ninja-silver max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Academic achievements from the shadow realm - Knowledge sharing in the digital darkness
          </motion.p>
        </motion.div>

        {/* Enhanced Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 lg:mb-12"
        >
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ninja-silver w-5 h-5" />
            <Input
              placeholder="Search ninja research... 🔍"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 ninja-glass ninja-border text-ninja-white placeholder:text-ninja-silver/70 rounded-full text-center focus:ninja-glow"
            />
          </div>
        </motion.div>

        {/* Publications Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 lg:mb-12"
        >
          {[
            { label: 'Ninja Papers', value: publications.data.length.toString(), icon: Scroll },
            { label: 'Conferences', value: '3+', icon: Users },
            { label: 'Citations', value: '25+', icon: Award },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 ninja-glass rounded-2xl ninja-shadow ninja-border"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <motion.div
                className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-ninja-charcoal to-ninja-gray rounded-2xl flex items-center justify-center ninja-shadow"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="w-6 h-6 text-ninja-white" />
              </motion.div>
              <h4 className="text-2xl font-bold text-ninja-white mb-1 ninja-glow">
                {stat.value}
              </h4>
              <p className="text-sm text-ninja-silver">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Publications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredPublications.map((publication: PublicationData) => {
              const isExpanded = expandedId === publication.id
              const isHovered = hoveredCard === publication.id

              return (
                <motion.div
                  key={publication.id}
                  variants={itemVariants}
                  layout
                  onHoverStart={() => setHoveredCard(publication.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group"
                >
                  <Card className={`transition-all duration-300 ninja-border cursor-pointer ${
                    isExpanded || isHovered
                      ? 'ninja-shadow ninja-glow bg-gradient-to-br from-ninja-charcoal to-ninja-gray'
                      : 'ninja-glass hover:bg-ninja-charcoal/30'
                  }`}>
                    <CardHeader 
                      className="pb-4"
                      onClick={() => setExpandedId(isExpanded ? null : publication.id)}
                    >
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
                            <FileText size={24} />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-xl sm:text-2xl font-bold text-ninja-white mb-2 line-clamp-2">
                              {publication.name}
                            </CardTitle>
                            <div className="flex flex-wrap items-center gap-3 text-ninja-silver text-sm">
                              <div className="flex items-center space-x-1">
                                <Calendar size={14} className="flex-shrink-0" />
                                <span>{formatDate(publication.createdAt)}</span>
                              </div>
                              <Badge className="bg-ninja-charcoal text-ninja-silver ninja-border text-xs">
                                Shadow Academy 🥷
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <motion.div
                          className="flex-shrink-0 flex items-center space-x-2"
                          animate={{ rotate: isExpanded ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-ninja-silver hover:text-ninja-white hover:bg-ninja-charcoal/50 ninja-border"
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation()
                              window.open(publication.url, '_blank')
                            }}
                          >
                            <ExternalLink size={16} />
                          </Button>
                          <Eye className="w-6 h-6 text-ninja-silver" />
                        </motion.div>
                      </div>
                    </CardHeader>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardContent className="pt-0 pb-6 px-6">
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="space-y-4"
                            >
                              <div>
                                <h4 className="font-semibold text-ninja-white mb-2 flex items-center space-x-2">
                                  <BookOpen className="w-5 h-5 text-ninja-silver" />
                                  <span>Shadow Research Overview 📚</span>
                                </h4>
                                <p className="text-ninja-silver leading-relaxed">
                                  {publication.description}
                                </p>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {['Deep Learning', 'Robotics', 'NLP', 'Computer Vision'].map((tech) => (
                                  <Badge 
                                    key={tech}
                                    className="bg-ninja-glass text-ninja-silver ninja-border text-xs"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>

                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="pt-4"
                              >
                                <Button
                                  className="bg-gradient-to-r from-ninja-charcoal to-ninja-gray text-ninja-white hover:ninja-shadow ninja-border transition-all duration-300"
                                  onClick={() => window.open(publication.url, '_blank')}
                                >
                                  <ExternalLink size={16} className="mr-2" />
                                  Read Shadow Paper 📜
                                </Button>
                              </motion.div>
                            </motion.div>
                          </CardContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredPublications.length === 0 && searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <motion.div
              className="p-6 ninja-glass rounded-2xl ninja-border inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <Search className="w-12 h-12 text-ninja-silver mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ninja-white mb-2">No Shadow Research Found 🥷</h3>
              <p className="text-ninja-silver">
                Research for "{searchTerm}" seems to be hidden in the shadows...
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Enhanced Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { label: 'Presentations', value: '8+', icon: Users },
              { label: 'Collaborations', value: '12+', icon: Star },
              { label: 'Research Fields', value: '5+', icon: BookOpen },
              { label: 'Shadow Impact', value: 'High', icon: Trophy },
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 lg:p-6 ninja-glass rounded-2xl ninja-shadow ninja-border"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
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
      </div>
    </section>
  )
}

export default InteractivePublications
