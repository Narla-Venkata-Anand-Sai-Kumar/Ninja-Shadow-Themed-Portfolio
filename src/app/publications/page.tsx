'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import InteractivePublications from '@/components/InteractivePublications'
import { fadeInUpVariants } from '@/lib/utils'

export default function PublicationsPage() {
  return (
    <motion.main 
      className="relative min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
    >
      <Navigation />
      <div className="pt-20">
        <InteractivePublications />
      </div>
    </motion.main>
  )
}
