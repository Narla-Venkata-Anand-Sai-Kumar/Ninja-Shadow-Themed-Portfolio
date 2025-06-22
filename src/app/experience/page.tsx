'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import InteractiveExperience from '@/components/InteractiveExperience'
import { fadeInUpVariants } from '@/lib/utils'

export default function ExperiencePage() {
  return (
    <motion.main 
      className="relative min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
    >
      <Navigation />
      <div className="pt-20">
        <InteractiveExperience />
      </div>
    </motion.main>
  )
}
