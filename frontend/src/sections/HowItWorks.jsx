import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

export default function HowItWorks() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  }

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  const steps = [
    { num: '01', title: 'Application Generates Data', desc: 'Your web browser, email client, or any app creates data that needs to be sent over the network.' },
    { num: '02', title: 'OS Network Stack', desc: 'The operating system breaks data into packets, adds headers (IP, TCP/UDP), and routes to the NIC driver.' },
    { num: '03', title: 'Bus Interface', desc: 'Data travels from the CPU to the NIC via the system bus (PCIe, USB, or integrated bus for onboard NICs).' },
    { num: '04', title: 'Frame Encapsulation', desc: 'The NIC wraps the data in a frame, adding MAC addresses (source and destination) and error-checking (FCS).' },
    { num: '05', title: 'Signal Conversion', desc: 'The NIC converts the digital frame into electrical signals (copper), light pulses (fiber), or radio waves (wireless).' },
    { num: '06', title: 'Transmission', desc: 'Signals travel over the network medium to a switch, router, or wireless access point, continuing to the destination.' },
  ]

  return (
    <SectionWrapper id="how-it-works">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={item} className="font-heading text-section gradient-text mb-4">
          How Does a NIC Work?
        </motion.h2>

        <motion.p variants={item} className="font-body text-body text-text-muted mb-16 max-w-3xl">
          Understanding the journey of data from your application to the network reveals the critical
          role the NIC plays in modern computing.
        </motion.p>

        {/* Flow diagram */}
        <motion.div variants={item} className="mb-16 relative">
          <div className="flex items-center justify-between flex-wrap gap-4 glass-panel p-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-2xl">💻</div>
              <p className="text-small text-text-muted text-center">App</p>
            </div>

            <motion.div className="flex-1 h-1 bg-gradient-to-r from-accent-cyan/50 to-accent-purple/50 rounded min-w-[40px]"
              animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />

            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-2xl">⚙️</div>
              <p className="text-small text-text-muted text-center">OS</p>
            </div>

            <motion.div className="flex-1 h-1 bg-gradient-to-r from-accent-purple/50 to-accent-cyan/50 rounded min-w-[40px]"
              animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />

            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="8" width="24" height="16" rx="2" stroke="#00d4ff" strokeWidth="2" />
                  <rect x="7" y="11" width="18" height="10" fill="#00d4ff" fillOpacity="0.1" />
                </svg>
              </div>
              <p className="text-small text-text-muted text-center">NIC</p>
            </div>

            <motion.div className="flex-1 h-1 bg-gradient-to-r from-accent-cyan/50 to-accent-purple/50 rounded min-w-[40px]"
              animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />

            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-2xl">📡</div>
              <p className="text-small text-text-muted text-center">Network</p>
            </div>
          </div>
        </motion.div>

        {/* Detailed steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={item}
              className="glass-panel p-6 hover-card flex gap-6"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30 flex items-center justify-center">
                  <span className="font-heading font-bold text-accent-cyan">{step.num}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-sub text-text-primary mb-2">{step.title}</h3>
                <p className="font-body text-body text-text-muted">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="mt-12 glass-panel p-6 border-l-4 border-accent-cyan">
          <p className="text-body text-text-muted">
            <span className="text-accent-cyan font-semibold">Key insight:</span> The NIC handles both the physical transmission (converting data to signals)
            and the data link layer (framing, MAC addressing). It's the bridge between your computer's digital world and the network's physical medium.
          </p>
        </motion.div>

        {/* Latency Breakdown Chart */}
        <motion.div variants={item} className="mt-12 glass-panel p-8">
          <h3 className="font-heading text-sub text-text-primary mb-6">Processing Latency at Each Stage</h3>
          <div className="space-y-4">
            {[
              { stage: 'Application', latency: 50, desc: 'Data creation & buffering' },
              { stage: 'OS Network Stack', latency: 30, desc: 'Packet formation & routing' },
              { stage: 'Bus Transfer', latency: 5, desc: 'PCIe data transfer' },
              { stage: 'MAC Processing', latency: 10, desc: 'Frame encapsulation' },
              { stage: 'PHY Conversion', latency: 8, desc: 'Digital to analog' },
              { stage: 'Transmission', latency: 1, desc: 'Signal on wire' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-text-muted text-small font-medium">{item.stage}</span>
                    <span className="text-text-dim text-xs">{item.desc}</span>
                  </div>
                  <span className="text-accent-cyan text-small font-mono">{item.latency}µs</span>
                </div>
                <div className="h-2 bg-bg-elevated rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: i < 3
                        ? 'linear-gradient(90deg, #7c3aed, #ec4899)'
                        : 'linear-gradient(90deg, #00d4ff, #7c3aed)',
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.latency / 50) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Data Packet Journey */}
        <motion.div variants={item} className="mt-12 glass-panel p-8">
          <h3 className="font-heading text-sub text-text-primary mb-6">Data Packet Journey</h3>
          <svg viewBox="0 0 500 120" className="w-full">
            {/* Path */}
            <path
              d="M 40 60 Q 120 20 200 60 Q 280 100 360 60 Q 440 20 480 60"
              fill="none"
              stroke="#1a1a2e"
              strokeWidth="2"
            />
            <motion.path
              d="M 40 60 Q 120 20 200 60 Q 280 100 360 60 Q 440 20 480 60"
              fill="none"
              stroke="url(#packetGradient)"
              strokeWidth="2"
              strokeDasharray="8 4"
              initial={{ strokeDashoffset: 100 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <defs>
              <linearGradient id="packetGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>

            {/* Waypoints */}
            {[
              { x: 40, y: 60, label: 'App', sub: 'Data' },
              { x: 200, y: 60, label: 'OS', sub: 'Packets' },
              { x: 360, y: 60, label: 'NIC', sub: 'Frames' },
              { x: 480, y: 60, label: 'Network', sub: 'Signals' },
            ].map((point, i) => (
              <g key={i}>
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r="12"
                  fill="#12121a"
                  stroke="#00d4ff"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                />
                <text x={point.x} y={point.y - 18} textAnchor="middle" fill="#e4e4e7" fontSize="9" fontWeight="500">{point.label}</text>
                <text x={point.x} y={point.y + 28} textAnchor="middle" fill="#a1a1aa" fontSize="8">{point.sub}</text>
              </g>
            ))}
          </svg>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
