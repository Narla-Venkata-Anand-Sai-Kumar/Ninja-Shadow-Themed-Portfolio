'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import InteractiveSkills from '@/components/InteractiveSkills'
import { fadeInUpVariants } from '@/lib/utils'

export default function SkillsPage() {
  return (
    <motion.main 
      className="relative min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
    >
      <Navigation />
      <div className="pt-20">
        <InteractiveSkills />
      </div>
    </motion.main>
  )
}
