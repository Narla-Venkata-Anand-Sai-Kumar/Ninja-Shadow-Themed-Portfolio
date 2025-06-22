'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { fadeInUpVariants, staggerContainer } from '@/lib/utils'
import { greeting, competitiveSites } from '@/data/info'

const stats = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Technologies Mastered', value: '25+' },
  { label: 'Research Papers', value: '2' },
]

const highlights = [
  'AI/ML Engineer with 3+ years of experience',
  'Specialized in Computer Vision & NLP',
  'Winner of IBM Code-Rush Hackathon 2023',
  'Published researcher in IEEE conferences',
  'Open source contributor and community leader',
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
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
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate AI engineer combining technical expertise with creative problem-solving
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Personal Info */}
            <motion.div variants={fadeInUpVariants} className="space-y-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I&apos;m <strong>{greeting.nickname}</strong>, a passionate Software Engineer specializing in 
                  <strong> Artificial Intelligence and Machine Learning</strong>. Currently pursuing my B.Tech at 
                  Kalasalingam Academy of Research and Education, I have hands-on experience in developing 
                  cutting-edge AI solutions across various domains.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My journey in tech has been marked by successful internships at top companies like 
                  <strong> IBM, Diebold Nixdorf, and MulticoreWare</strong>, where I&apos;ve worked on projects 
                  ranging from computer vision systems to large language models. I&apos;m passionate about 
                  leveraging technology to solve real-world problems and create meaningful impact.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Key Highlights
                </h3>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUpVariants}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Competitive Programming */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Competitive Programming
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {competitiveSites.competitiveSites.map((site) => (
                    <motion.a
                      key={site.siteName}
                      href={site.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeInUpVariants}
                      className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="text-center">
                        <div 
                          className="w-8 h-8 mx-auto mb-2"
                          style={{ color: site.style.color }}
                        >
                          <div className="w-full h-full bg-current rounded opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {site.siteName}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div variants={fadeInUpVariants} className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeInUpVariants}
                    className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <motion.div
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Skills Preview */}
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-none">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Technical Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'LangChain',
                      'React', 'Next.js', 'Docker', 'Kubernetes', 'AWS', 'GCP'
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-none">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Let&apos;s Connect
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">
                      📧 venkatnarla0@gmail.com
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      📍 Eluru, Andhra Pradesh, India
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      🎓 B.Tech CSE (AI & ML) Student
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
