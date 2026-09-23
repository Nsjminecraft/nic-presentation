import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'

function MediaImage({ src, alt, caption, className = '' }) {
  const [error, setError] = useState(false)
  if (error) return null
  return (
    <figure className={`text-center ${className}`}>
      <img
        src={src}
        alt={alt}
        onError={() => setError(true)}
        className="rounded-xl border border-white/10 shadow-2xl mx-auto max-w-full"
        loading="lazy"
      />
      {caption && <figcaption className="text-xs text-text-dim mt-2 italic">{caption}</figcaption>}
    </figure>
  )
}

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <SectionWrapper id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 30%, #00d4ff22 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 70%, #7c3aed22 0%, transparent 50%)',
            'radial-gradient(ellipse at 40% 80%, #00d4ff22 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-cyan rounded-full opacity-40"
          style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 3) * 20}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        />
      ))}

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 text-center max-w-5xl px-8">
        {/* NIC Icon */}
        <motion.div variants={item} className="mb-12 flex justify-center">
          <div className="relative">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="drop-shadow-2xl">
              <motion.rect
                x="20" y="40" width="80" height="50" rx="4"
                stroke="url(#grad1)" strokeWidth="2"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.rect x="25" y="45" width="70" height="35" fill="#00d4ff" fillOpacity="0.1" />
              <motion.line x1="35" y1="55" x2="55" y2="55" stroke="#00d4ff" strokeWidth="2" />
              <motion.line x1="35" y1="65" x2="65" y2="65" stroke="#7c3aed" strokeWidth="2" />
              <motion.line x1="35" y1="75" x2="45" y2="75" stroke="#00d4ff" strokeWidth="2" />

              {/* Connector pins */}
              {[...Array(4)].map((_, i) => (
                <motion.rect
                  key={i}
                  x={30 + i * 12} y="85" width="8" height="6"
                  fill="#00d4ff"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}

              {/* LEDs */}
              <motion.circle cx="85" cy="50" r="2" fill="#00ff88" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} />
              <motion.circle cx="92" cy="50" r="2" fill="#ffaa00" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.8, repeat: Infinity }} />

              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>
            <motion.div
              className="absolute inset-0 blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <motion.h1 variants={item} className="font-heading text-4xl md:text-hero gradient-text mb-6 text-balance">
          Network Interface Card
        </motion.h1>

        <motion.p variants={item} className="font-body text-sub text-text-muted mb-12 max-w-2xl mx-auto">
          The Bridge Between You and the Network
        </motion.p>

        <motion.div variants={item} className="flex gap-4 justify-center flex-wrap">
          <div className="glass-panel px-6 py-3 hover-card">
            <p className="text-small text-text-muted">Connects devices to networks</p>
          </div>
          <div className="glass-panel px-6 py-3 hover-card">
            <p className="text-small text-text-muted">Converts data to signals</p>
          </div>
          <div className="glass-panel px-6 py-3 hover-card">
            <p className="text-small text-text-muted">Assigns MAC addresses</p>
          </div>
        </motion.div>

        {/* Animated Speed Stats */}
        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto"
        >
          {[
            { value: '100', unit: 'Gbps', label: 'Max Speed', color: '#00d4ff' },
            { value: '2M', unit: 'hrs', label: 'MTBF', color: '#7c3aed' },
            { value: '<1', unit: 'µs', label: 'Latency', color: '#ec4899' },
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-4 text-center">
              <motion.p
                className="font-heading font-bold"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: stat.color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.3 }}
              >
                {stat.value}
                <span className="text-sm ml-1">{stat.unit}</span>
              </motion.p>
              <p className="text-xs text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Real NIC Photo */}
        <motion.div variants={item} className="mt-16">
          <MediaImage
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Network_card.jpg/640px-Network_card.jpg"
            alt="A real Ethernet network interface card (NIC) with RJ-45 connector and circuitry"
            caption="A typical Ethernet NIC — the hardware that connects computers to networks (Photo: Wikimedia Commons)"
            className="max-w-md mx-auto"
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-small text-text-dim">Scroll to explore</p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round">
          <path d="M10 3v14M5 12l5 5 5-5" />
        </svg>
      </motion.div>
    </SectionWrapper>
  )
}
