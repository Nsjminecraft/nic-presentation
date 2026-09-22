import { motion } from 'framer-motion'

export default function ProgressBar({ progress }) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{
        scaleX: progress,
        background: 'linear-gradient(90deg, #00d4ff 0%, #7c3aed 100%)',
      }}
    />
  )
}
