'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, FileText, Calendar, BookOpen } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { fadeInUpVariants, staggerContainer, scaleIn } from '@/lib/utils'
import { publications, publicationsHeader } from '@/data/info'

export default function Publications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    })
  }

  return (
    <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
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
              {publicationsHeader.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {publicationsHeader.description}
            </p>
          </motion.div>

          {/* Publications Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {publications.data.map((publication, index) => (
              <motion.div
                key={publication.id}
                variants={scaleIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FileText className="h-6 w-6" />
                      </div>
                      <a
                        href={publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group"
                      >
                        <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                    
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                      {publication.name}
                    </CardTitle>
                    
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(publication.createdAt)}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {publication.description}
                    </p>
                    
                    {/* Publication Type Badge */}
                    <div className="flex flex-wrap gap-2">
                      {publication.description.includes('IEEE') && (
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                          IEEE Conference
                        </Badge>
                      )}
                      {publication.name.includes('Sentiment') && (
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                          NLP
                        </Badge>
                      )}
                      {publication.name.includes('Deep Learning') && (
                        <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                          Deep Learning
                        </Badge>
                      )}
                      {publication.name.includes('Robotic') && (
                        <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800">
                          Robotics
                        </Badge>
                      )}
                      <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                        Research Paper
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Research Impact */}
          <motion.div variants={fadeInUpVariants} className="mb-16">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-none">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Research Impact & Recognition
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    My research contributions span across multiple domains of AI and Machine Learning, 
                    with publications in prestigious IEEE conferences.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                    <div className="text-gray-600 dark:text-gray-400">Published Papers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">IEEE</div>
                    <div className="text-gray-600 dark:text-gray-400">Conference Publications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">2023</div>
                    <div className="text-gray-600 dark:text-gray-400">Publication Year</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Sentiment Analysis',
                    'Neural Networks',
                    'Computer Vision',
                    'Robotics',
                    'Deep Learning',
                    'AI Research',
                    'IEEE Publications',
                    'Academic Writing'
                  ].map((topic) => (
                    <Badge
                      key={topic}
                      className="bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-gray-200 dark:border-gray-600 px-4 py-2 text-sm font-medium"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Research Interests */}
          <motion.div variants={fadeInUpVariants}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center">
                <BookOpen className="mr-3 h-8 w-8 text-blue-600" />
                Current Research Interests
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Large Language Models',
                  description: 'Exploring fine-tuning techniques and RAG pipelines for domain-specific applications',
                  icon: '🧠',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Computer Vision',
                  description: 'Advanced object detection and 3D reconstruction from 2D images',
                  icon: '👁️',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Multimodal AI',
                  description: 'Integrating vision, language, and sensor data for comprehensive AI systems',
                  icon: '🔗',
                  color: 'from-green-500 to-teal-500'
                },
                {
                  title: 'Edge Computing',
                  description: 'Optimizing AI models for deployment on resource-constrained devices',
                  icon: '⚡',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Explainable AI',
                  description: 'Making AI systems more interpretable and trustworthy',
                  icon: '💡',
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  title: 'AI Ethics & Safety',
                  description: 'Ensuring responsible development and deployment of AI technologies',
                  icon: '🛡️',
                  color: 'from-indigo-500 to-purple-500'
                }
              ].map((interest, index) => (
                <motion.div
                  key={interest.title}
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Card className="h-full p-6 bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${interest.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        {interest.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {interest.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
