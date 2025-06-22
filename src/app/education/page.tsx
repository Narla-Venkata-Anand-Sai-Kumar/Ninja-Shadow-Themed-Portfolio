'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import InteractiveEducation from '@/components/InteractiveEducation'
import { fadeInUpVariants } from '@/lib/utils'

export default function EducationPage() {
  return (
    <motion.main 
      className="relative min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
    >
      <Navigation />
      <div className="pt-20">
        <InteractiveEducation />
      </div>
    </motion.main>
  )
}
