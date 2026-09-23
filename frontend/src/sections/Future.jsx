import SectionWrapper from '../components/SectionWrapper'
import { motion } from 'framer-motion'
import { useState } from 'react'

function VideoEmbed({ videoId, title }) {
  const [error, setError] = useState(false)
  if (error) return (
    <div className="glass-panel p-8 text-center">
      <p className="text-text-muted mb-4">Video: {title}</p>
      <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="text-accent-cyan underline">
        Watch on YouTube
      </a>
    </div>
  )
  return (
    <div className="glass-panel p-4">
      <p className="text-xs text-text-dim mb-3 text-center">{title}</p>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onError={() => setError(true)}
          className="absolute inset-0 w-full h-full rounded-lg"
        />
      </div>
    </div>
  )
}

const milestones = [
  {
    year: '2024',
    title: 'WiFi 7 Adoption',
    desc: 'IEEE 802.11be — up to 46 Gbps, 320 MHz channels, multi-link operation. Consumer routers and NICs going mainstream.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
      </svg>
    ),
  },
  {
    year: '2025',
    title: '25GbE for Consumers',
    desc: '25 Gigabit Ethernet enters the prosumer market. Single-lane 25G replacing 10G as the fast standard of choice.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    year: '2025',
    title: 'SmartNICs & DPUs',
    desc: 'NVIDIA BlueField and AMD Pensando offload networking, storage, and security to dedicated processors on the NIC itself.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3" />
      </svg>
    ),
  },
  {
    year: '2026',
    title: 'AI/ML Offloading',
    desc: 'NICs with built-in AI accelerators handle inference workloads directly — reducing latency for real-time AI applications.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    year: '2026',
    title: 'CXL Interconnect',
    desc: 'Compute Express Link — enables shared memory pools across servers. The next evolution beyond PCIe for data center NICs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="8" cy="6" r="2" fill="currentColor" />
        <circle cx="16" cy="12" r="2" fill="currentColor" />
        <circle cx="10" cy="18" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    year: '2027+',
    title: '400GbE & 800GbE',
    desc: 'Data centers pushing 400 and 800 Gigabit Ethernet. QSFP-DD and OSFP connectors. The bleeding edge of networking speed.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
      </svg>
    ),
  },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Future() {
  return (
    <SectionWrapper id="future">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-accent-cyan font-heading text-sm tracking-widest uppercase mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          08 — The Future
        </motion.p>
        <motion.h2
          className="font-heading text-2xl md:text-section text-text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What's <span className="gradient-text">Next</span>?
        </motion.h2>
        <motion.p
          className="text-text-muted font-body text-body max-w-2xl mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Networking speeds are exploding. Here's the roadmap of what's coming.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent" />

          <motion.div
            className="space-y-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
          >
            {milestones.map((m, i) => (
              <motion.div key={i} variants={item} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-bg-surface border-2 border-accent-cyan flex items-center justify-center text-accent-cyan z-10">
                  {m.icon}
                </div>
                {/* Glow behind dot */}
                <div className="absolute left-1 top-3 w-10 h-10 rounded-full bg-accent-cyan/20 blur-xl" />

                <div className="glass-panel hover-card p-6 ml-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-heading font-bold text-accent-cyan text-sm">
                      {m.year}
                    </span>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>
                  <h3 className="font-heading font-semibold text-text-primary text-xl mb-2">
                    {m.title}
                  </h3>
                  <p className="text-text-muted font-body text-body">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Speed Growth Projection */}
        <motion.div
          className="mt-16 glass-panel p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-sub text-text-primary mb-6">Projected Network Speed Growth (Gbps)</h3>
          <svg viewBox="0 0 500 200" className="w-full">
            {/* Grid */}
            {[0, 1, 2, 3, 4].map(i => (
              <line key={i} x1="50" y1={30 + i * 38} x2="480" y2={30 + i * 38} stroke="#1a1a2e" strokeWidth="1" />
            ))}

            {/* Growth area fill */}
            <motion.path
              d="M 80 180 L 150 170 L 220 150 L 290 120 L 360 70 L 430 30 L 430 180 Z"
              fill="url(#growthGrad)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />

            {/* Growth line */}
            <motion.path
              d="M 80 180 L 150 170 L 220 150 L 290 120 L 360 70 L 430 30"
              fill="none"
              stroke="#00d4ff"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />

            <defs>
              <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Data points */}
            {[
              { x: 80, y: 180, year: '2010', speed: '1 GbE' },
              { x: 150, y: 170, year: '2015', speed: '10 GbE' },
              { x: 220, y: 150, year: '2020', speed: '25 GbE' },
              { x: 290, y: 120, year: '2024', speed: '100 GbE' },
              { x: 360, y: 70, year: '2026', speed: '400 GbE' },
              { x: 430, y: 30, year: '2028+', speed: '800 GbE' },
            ].map((point, i) => (
              <g key={i}>
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r="5"
                  fill="#0a0a0f"
                  stroke="#00d4ff"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
                />
                <text x={point.x} y={point.y - 12} textAnchor="middle" fill="#e4e4e7" fontSize="10" fontWeight="500">{point.speed}</text>
                <text x={point.x} y="198" textAnchor="middle" fill="#a1a1aa" fontSize="10">{point.year}</text>
              </g>
            ))}

            {/* Y-axis */}
            <text x="30" y="35" textAnchor="end" fill="#a1a1aa" fontSize="10">800</text>
            <text x="30" y="73" textAnchor="end" fill="#a1a1aa" fontSize="10">400</text>
            <text x="30" y="111" textAnchor="end" fill="#a1a1aa" fontSize="10">100</text>
            <text x="30" y="149" textAnchor="end" fill="#a1a1aa" fontSize="10">25</text>
            <text x="30" y="185" textAnchor="end" fill="#a1a1aa" fontSize="10">1</text>
          </svg>
        </motion.div>

        {/* Video: Future of Networking */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <VideoEmbed
            videoId="tMCBN3X8x1A"
            title="The Future of Network Interface Cards"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
