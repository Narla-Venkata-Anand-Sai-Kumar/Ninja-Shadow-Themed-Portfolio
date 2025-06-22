'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import InteractiveContact from '@/components/InteractiveContact'
import { fadeInUpVariants } from '@/lib/utils'

export default function ContactPage() {
  return (
    <motion.main 
      className="relative min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
    >
      <Navigation />
      <div className="pt-20">
        <InteractiveContact />
      </div>
    </motion.main>
  )
}
