import SectionWrapper from '../components/SectionWrapper'
import { motion } from 'framer-motion'

const specs = [
  {
    title: 'Speed',
    value: '100 Gbps',
    range: '10 Mbps → 100 Gbps',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    color: '#00d4ff',
  },
  {
    title: 'Bus Interface',
    value: 'PCIe Gen 5',
    range: 'PCIe Gen 3/4/5 · USB 3.2',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    ),
    color: '#7c3aed',
  },
  {
    title: 'Form Factor',
    value: 'Low Profile',
    range: 'Full-height · Low-profile · M.2 · Mini PCIe',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 10h4M14 10h4M6 14h12" />
      </svg>
    ),
    color: '#ec4899',
  },
  {
    title: 'Connectors',
    value: 'RJ-45',
    range: 'RJ-45 · SFP+ · QSFP28 · LC Fiber',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 9a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V9z" />
        <path d="M8 7V5M12 7V5M16 7V5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    color: '#00d4ff',
  },
  {
    title: 'MTBF',
    value: '2M hrs',
    range: '1-2 million hours mean time between failures',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    color: '#7c3aed',
  },
  {
    title: 'Power Draw',
    value: '1-25W',
    range: 'Integrated ~1W · Discrete up to 25W',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2z" />
        <path d="M7 12h10M12 7v10" />
      </svg>
    ),
    color: '#ec4899',
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

export default function Specs() {
  return (
    <SectionWrapper id="specs">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-accent-cyan font-heading text-sm tracking-widest uppercase mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          06 — Technical Specifications
        </motion.p>
        <motion.h2
          className="font-heading text-section text-text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Built for <span className="gradient-text">Performance</span>
        </motion.h2>
        <motion.p
          className="text-text-muted font-body text-body max-w-2xl mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          From 10 Mbps to 100 Gbps — modern NICs span a massive range of capabilities.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {specs.map((spec) => (
            <motion.div
              key={spec.title}
              variants={item}
              className="glass-panel hover-card p-8 relative overflow-hidden group"
            >
              {/* Glow */}
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: spec.color }}
              />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${spec.color}15`, color: spec.color }}
                >
                  {spec.icon}
                </div>
                <p className="text-text-dim font-body text-small uppercase tracking-wider mb-2">
                  {spec.title}
                </p>
                <p
                  className="font-heading font-bold mb-2"
                  style={{ fontSize: '2.5rem', color: spec.color }}
                >
                  {spec.value}
                </p>
                <p className="text-text-muted font-body text-small">
                  {spec.range}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Comparison Chart */}
        <motion.div variants={item} className="mt-12 glass-panel p-8">
          <h3 className="font-heading text-sub text-text-primary mb-6">Performance Metrics Comparison</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Speed Scale */}
            <div>
              <h4 className="text-text-muted text-small uppercase tracking-wider mb-4">Speed Scale (Gbps)</h4>
              <div className="space-y-3">
                {[
                  { label: '100 Mbps', value: 0.1, color: '#7c3aed' },
                  { label: '1 Gbps', value: 1, color: '#00d4ff' },
                  { label: '10 Gbps', value: 10, color: '#00d4ff' },
                  { label: '25 Gbps', value: 25, color: '#7c3aed' },
                  { label: '100 Gbps', value: 100, color: '#ec4899' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-text-muted text-small w-20">{item.label}</span>
                    <div className="flex-1 h-2 bg-bg-elevated rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: item.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.value / 100) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MTBF Comparison */}
            <div>
              <h4 className="text-text-muted text-small uppercase tracking-wider mb-4">Reliability (MTBF Hours)</h4>
              <div className="space-y-3">
                {[
                  { label: 'Consumer', value: 500000, max: 2000000, color: '#00d4ff' },
                  { label: 'Pro', value: 1000000, max: 2000000, color: '#7c3aed' },
                  { label: 'Enterprise', value: 1500000, max: 2000000, color: '#ec4899' },
                  { label: 'Data Center', value: 2000000, max: 2000000, color: '#00d4ff' },
                ].map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-text-muted text-small">{item.label}</span>
                      <span className="text-accent-cyan text-small font-mono">
                        {item.value >= 1000000 ? `${(item.value / 1000000).toFixed(1)}M` : `${(item.value / 1000).toFixed(0)}K`} hrs
                      </span>
                    </div>
                    <div className="h-2 bg-bg-elevated rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: item.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.value / item.max) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
