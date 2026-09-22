import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

export default function WhatIsNic() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const cards = [
    { title: 'Enables Communication', desc: 'Allows your computer to send and receive data across a network', icon: '🔗' },
    { title: 'MAC Address', desc: 'Each NIC has a unique hardware address for identification', icon: '🆔' },
    { title: 'Signal Conversion', desc: 'Converts digital data into electrical, optical, or wireless signals', icon: '📡' },
  ]

  return (
    <SectionWrapper id="what-is-nic">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={item} className="font-heading text-2xl md:text-section gradient-text mb-4">
          What is a Network Interface Card?
        </motion.h2>

        <motion.p variants={item} className="font-body text-body text-text-muted mb-16 max-w-3xl">
          A Network Interface Card (NIC) is a hardware component that connects a computer to a network,
          enabling communication between devices. It's the physical bridge that allows your computer to
          participate in local and wide-area networks.
        </motion.p>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              className="glass-panel p-8 hover-card"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="font-heading text-sub text-text-primary mb-3">{card.title}</h3>
              <p className="font-body text-body text-text-muted">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Data flow diagram */}
        <motion.div variants={item} className="glass-panel p-8">
          <h3 className="font-heading text-sub text-text-primary mb-8 text-center">Data Flow Path</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 glass-panel flex items-center justify-center text-3xl">💻</div>
              <p className="text-small text-text-muted">Computer</p>
            </div>

            <motion.div
              className="hidden md:flex flex-1 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent min-w-[60px]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 glass-panel flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="5" y="10" width="30" height="20" rx="2" stroke="#00d4ff" strokeWidth="2" />
                  <rect x="8" y="13" width="24" height="14" fill="#00d4ff" fillOpacity="0.1" />
                  <line x1="12" y1="18" x2="20" y2="18" stroke="#00d4ff" strokeWidth="1.5" />
                  <line x1="12" y1="22" x2="25" y2="22" stroke="#7c3aed" strokeWidth="1.5" />
                </svg>
              </div>
              <p className="text-small text-text-muted">NIC</p>
            </div>

            <motion.div
              className="hidden md:flex flex-1 h-0.5 bg-gradient-to-r from-accent-purple to-transparent min-w-[60px]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />

            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 glass-panel flex items-center justify-center text-3xl">🔌</div>
              <p className="text-small text-text-muted">Cable</p>
            </div>

            <motion.div
              className="hidden md:flex flex-1 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent min-w-[60px]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />

            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 glass-panel flex items-center justify-center text-3xl">🌐</div>
              <p className="text-small text-text-muted">Network</p>
            </div>
          </div>
        </motion.div>

        {/* Bullet points */}
        <motion.div variants={item} className="mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-heading text-sub text-text-primary mb-4">Key Functions</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent-cyan mt-1">•</span>
                <span className="text-body text-text-muted">Data transmission and reception</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-cyan mt-1">•</span>
                <span className="text-body text-text-muted">Media access control (MAC)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-cyan mt-1">•</span>
                <span className="text-body text-text-muted">Signal encoding and decoding</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sub text-text-primary mb-4">Why It Matters</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent-purple mt-1">•</span>
                <span className="text-body text-text-muted">Without a NIC, no network connectivity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-purple mt-1">•</span>
                <span className="text-body text-text-muted">Determines network speed capabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-purple mt-1">•</span>
                <span className="text-body text-text-muted">Essential for internet access</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
