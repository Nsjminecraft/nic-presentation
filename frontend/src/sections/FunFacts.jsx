import SectionWrapper from '../components/SectionWrapper'
import { motion } from 'framer-motion'

const facts = [
  {
    emoji: '🏛️',
    fact: 'The first Ethernet NIC was made by Xerox in 1975',
    detail: 'Along with DEC and Intel, Xerox developed the original Ethernet standard that became the foundation of all wired networking.',
  },
  {
    emoji: '🔑',
    fact: 'Every NIC has a unique 48-bit MAC address',
    detail: 'Burned into ROM at the factory, no two NICs share the same address — that\'s 281 trillion possible addresses.',
  },
  {
    emoji: '⚡',
    fact: 'Modern NICs handle millions of packets per second',
    detail: 'A 100GbE NIC can process over 150 million small packets every single second.',
  },
  {
    emoji: '🧠',
    fact: 'Some NICs have their own processors',
    detail: 'SmartNICs include dedicated CPUs to offload encryption, compression, and virtualization from the main processor.',
  },
  {
    emoji: '🌌',
    fact: '"Ethernet" comes from 19th-century physics',
    detail: 'Named after "luminiferous aether" — the hypothetical medium light was once believed to travel through.',
  },
  {
    emoji: '💰',
    fact: 'Server NICs can cost more than the server',
    detail: 'A 400GbE InfiniBand NIC can cost $1,000+ — sometimes more than the host server it plugs into.',
  },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function FunFacts() {
  return (
    <SectionWrapper id="fun-facts">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-accent-cyan font-heading text-sm tracking-widest uppercase mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          09 — Fun Facts
        </motion.p>
        <motion.h2
          className="font-heading text-section text-text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Did You <span className="gradient-text">Know</span>?
        </motion.h2>
        <motion.p
          className="text-text-muted font-body text-body max-w-2xl mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Some surprising things about the humble network card.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {facts.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="glass-panel hover-card p-8 relative overflow-hidden group"
            >
              {/* Emoji */}
              <div className="text-4xl mb-4">{f.emoji}</div>
              <h3 className="font-heading font-semibold text-text-primary text-lg mb-3 leading-tight">
                {f.fact}
              </h3>
              <p className="text-text-muted font-body text-small leading-relaxed">
                {f.detail}
              </p>

              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
