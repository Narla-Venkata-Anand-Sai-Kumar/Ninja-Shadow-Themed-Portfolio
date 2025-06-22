'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import InteractiveAbout from '@/components/InteractiveAbout'
import { fadeInUpVariants } from '@/lib/utils'

export default function AboutPage() {
  return (
    <motion.main 
      className="relative min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
    >
      <Navigation />
      <div className="pt-20">
        <InteractiveAbout />
      </div>
    </motion.main>
  )
}
