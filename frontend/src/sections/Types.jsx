import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

export default function Types() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const types = [
    {
      title: 'PCIe NIC',
      desc: 'Dedicated expansion card installed in a PCIe slot on the motherboard',
      features: ['Highest performance', 'Low latency', 'Common in servers and gaming PCs'],
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <rect x="10" y="25" width="60" height="35" rx="2" stroke="#00d4ff" strokeWidth="2" />
          <rect x="15" y="30" width="50" height="25" fill="#00d4ff" fillOpacity="0.1" />
          {[...Array(5)].map((_, i) => (
            <rect key={i} x={20 + i * 8} y="58" width="5" height="8" fill="#00d4ff" />
          ))}
          <line x1="20" y1="35" x2="40" y2="35" stroke="#00d4ff" strokeWidth="1.5" />
          <line x1="20" y1="40" x2="50" y2="40" stroke="#7c3aed" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'USB NIC',
      desc: 'External adapter that connects via USB port, portable and plug-and-play',
      features: ['Portable and flexible', 'Easy to install', 'Good for laptops'],
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <rect x="25" y="20" width="30" height="40" rx="3" stroke="#00d4ff" strokeWidth="2" />
          <rect x="30" y="25" width="20" height="30" fill="#00d4ff" fillOpacity="0.1" />
          <rect x="35" y="60" width="10" height="10" fill="#00d4ff" fillOpacity="0.3" />
          <circle cx="40" cy="35" r="2" fill="#00d4ff" />
          <line x1="35" y1="40" x2="45" y2="40" stroke="#7c3aed" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Onboard NIC',
      desc: 'Built directly into the motherboard, most common in modern computers',
      features: ['Integrated design', 'No extra cost', 'Sufficient for most users'],
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <rect x="15" y="20" width="50" height="40" rx="2" stroke="#00d4ff" strokeWidth="2" />
          <rect x="20" y="25" width="40" height="30" fill="#00d4ff" fillOpacity="0.1" />
          <rect x="25" y="30" width="8" height="8" fill="#00d4ff" fillOpacity="0.3" />
          <rect x="35" y="30" width="8" height="8" fill="#7c3aed" fillOpacity="0.3" />
          <rect x="45" y="30" width="8" height="8" fill="#00d4ff" fillOpacity="0.3" />
          <circle cx="29" cy="48" r="2" fill="#00ff88" />
          <circle cx="51" cy="48" r="2" fill="#ffaa00" />
        </svg>
      )
    },
    {
      title: 'Wireless NIC',
      desc: 'WiFi adapter with antenna for wireless network connectivity',
      features: ['No cables needed', 'Mobile freedom', 'WiFi 6/7 support'],
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <rect x="25" y="35" width="30" height="20" rx="2" stroke="#00d4ff" strokeWidth="2" />
          <rect x="30" y="40" width="20" height="10" fill="#00d4ff" fillOpacity="0.1" />
          <line x1="40" y1="35" x2="40" y2="20" stroke="#00d4ff" strokeWidth="2" />
          <circle cx="40" cy="18" r="3" fill="#00d4ff" />
          <motion.path
            d="M 30 15 Q 40 10 50 15"
            stroke="#00d4ff" strokeWidth="1.5" fill="none"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M 25 10 Q 40 5 55 10"
            stroke="#7c3aed" strokeWidth="1.5" fill="none"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      )
    },
  ]

  return (
    <SectionWrapper id="types">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={item} className="font-heading text-section gradient-text mb-4">
          Types of Network Interface Cards
        </motion.h2>

        <motion.p variants={item} className="font-body text-body text-text-muted mb-16 max-w-3xl">
          NICs come in various form factors to suit different needs, from high-performance server
          cards to compact wireless adapters for laptops.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {types.map((type, i) => (
            <motion.div
              key={i}
              variants={item}
              className="glass-panel p-8 hover-card group"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-20 h-20 glass-panel flex items-center justify-center group-hover:border-accent-cyan/30 transition-colors">
                  {type.svg}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-sub text-text-primary mb-2">{type.title}</h3>
                  <p className="font-body text-body text-text-muted mb-4">{type.desc}</p>
                  <ul className="space-y-2">
                    {type.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-small text-text-dim">
                        <span className="text-accent-cyan">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="mt-12 glass-panel p-6">
          <p className="text-small text-text-muted text-center">
            <span className="text-accent-cyan font-semibold">Did you know?</span> Most modern laptops and smartphones have multiple NICs built-in — one for WiFi and one for Bluetooth!
          </p>
        </motion.div>

        {/* Comparison Chart */}
        <motion.div variants={item} className="mt-12 glass-panel p-8">
          <h3 className="font-heading text-sub text-text-primary mb-6">NIC Type Comparison</h3>
          <div className="space-y-6">
            {[
              { type: 'PCIe', performance: 95, cost: 60, portability: 30, latency: 5 },
              { type: 'USB', performance: 60, cost: 40, portability: 90, latency: 15 },
              { type: 'Onboard', performance: 50, cost: 10, portability: 100, latency: 20 },
              { type: 'Wireless', performance: 70, cost: 50, portability: 95, latency: 25 },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-text-muted text-small font-medium">{item.type}</span>
                  <span className="text-accent-cyan text-small font-mono">{item.performance}%</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  <div>
                    <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden mb-1">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.performance}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                      />
                    </div>
                    <span className="text-text-dim">Performance</span>
                  </div>
                  <div>
                    <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden mb-1">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent-purple to-pink-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.cost}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 + 0.05 }}
                      />
                    </div>
                    <span className="text-text-dim">Cost</span>
                  </div>
                  <div>
                    <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden mb-1">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-pink-500 to-accent-cyan"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.portability}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 + 0.1 }}
                      />
                    </div>
                    <span className="text-text-dim">Portability</span>
                  </div>
                  <div>
                    <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden mb-1">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${100 - item.latency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 + 0.15 }}
                      />
                    </div>
                    <span className="text-text-dim">Low Latency</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
