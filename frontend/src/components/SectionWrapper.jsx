import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({ id, children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-100px' })

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen section-padding relative ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}
