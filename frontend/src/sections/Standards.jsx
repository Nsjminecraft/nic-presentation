import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

export default function Standards() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const standards = [
    {
      name: 'Ethernet 1GbE',
      ieee: 'IEEE 802.3',
      speed: 1,
      speedLabel: '1 Gbps',
      year: '1998',
      features: ['Most common standard', 'Cat5e/Cat6 cables', 'Up to 100m distance'],
      color: '#00d4ff'
    },
    {
      name: 'Ethernet 10GbE',
      ieee: 'IEEE 802.3ae',
      speed: 10,
      speedLabel: '10 Gbps',
      year: '2002',
      features: ['Enterprise/servers', 'Cat6a/Cat7 cables', 'Up to 100m distance'],
      color: '#00d4ff'
    },
    {
      name: 'Ethernet 25GbE',
      ieee: 'IEEE 802.3by',
      speed: 25,
      speedLabel: '25 Gbps',
      year: '2016',
      features: ['Data center standard', 'SFP28 transceivers', 'High-density servers'],
      color: '#7c3aed'
    },
    {
      name: 'WiFi 6/6E',
      ieee: 'IEEE 802.11ax',
      speed: 9.6,
      speedLabel: '9.6 Gbps',
      year: '2019/2020',
      features: ['OFDMA technology', '2.4/5/6 GHz bands', 'Better device density'],
      color: '#00d4ff'
    },
    {
      name: 'WiFi 7',
      ieee: 'IEEE 802.11be',
      speed: 46,
      speedLabel: '46 Gbps',
      year: '2024',
      features: ['320 MHz channels', 'Multi-link operation', '4K QAM modulation'],
      color: '#7c3aed'
    },
  ]

  const maxSpeed = 46

  return (
    <SectionWrapper id="standards">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={item} className="font-heading text-2xl md:text-section gradient-text mb-4">
          Network Standards & Protocols
        </motion.h2>

        <motion.p variants={item} className="font-body text-body text-text-muted mb-16 max-w-3xl">
          Network standards define the rules and technologies that enable devices to communicate.
          Here are the most common modern standards you'll encounter.
        </motion.p>

        <div className="space-y-4">
          {standards.map((std, i) => (
            <motion.div
              key={i}
              variants={item}
              className="glass-panel p-6 hover-card"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="lg:w-64 shrink-0">
                  <h3 className="font-heading text-sub text-text-primary mb-1">{std.name}</h3>
                  <p className="text-small text-text-dim">{std.ieee} • {std.year}</p>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-small text-text-muted">Speed</span>
                    <span className="text-small font-semibold" style={{ color: std.color }}>{std.speedLabel}</span>
                  </div>
                  <div className="h-3 bg-bg-elevated rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${std.color} 0%, ${std.color}88 100%)`,
                        width: `${(std.speed / maxSpeed) * 100}%`
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(std.speed / maxSpeed) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1 }}
                    />
                  </div>
                </div>

                <div className="lg:w-64 shrink-0">
                  <ul className="space-y-1">
                    {std.features.map((feat, j) => (
                      <li key={j} className="text-small text-text-dim flex items-center gap-2">
                        <span style={{ color: std.color }}>•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="glass-panel p-6">
            <h3 className="font-heading text-sub text-text-primary mb-3">Wired Standards</h3>
            <p className="text-body text-text-muted">
              Ethernet remains the gold standard for reliability and speed. Newer standards like
              25GbE and 40GbE are becoming common in data centers.
            </p>
          </div>
          <div className="glass-panel p-6">
            <h3 className="font-heading text-sub text-text-primary mb-3">Wireless Standards</h3>
            <p className="text-body text-text-muted">
              WiFi continues to evolve rapidly. WiFi 7 brings speeds that rival wired Ethernet,
              with lower latency and better performance in crowded environments.
            </p>
          </div>
        </motion.div>

        {/* Network Speed Evolution Chart */}
        <motion.div variants={item} className="mt-12 glass-panel p-8">
          <h3 className="font-heading text-sub text-text-primary mb-6">Network Speed Evolution (Gbps)</h3>
          <svg viewBox="0 0 500 200" className="w-full">
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map(i => (
              <line key={i} x1="50" y1={40 + i * 35} x2="480" y2={40 + i * 35} stroke="#1a1a2e" strokeWidth="1" />
            ))}

            {/* Data points and lines */}
            <motion.path
              d="M 80 160 L 150 155 L 220 145 L 290 120 L 360 80 L 430 40"
              fill="none"
              stroke="#00d4ff"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />

            {/* Data points */}
            {[
              { x: 80, y: 160, year: '1998', speed: '1GbE' },
              { x: 150, y: 155, year: '2002', speed: '10GbE' },
              { x: 220, y: 145, year: '2006', speed: '10GbE+' },
              { x: 290, y: 120, year: '2016', speed: '25GbE' },
              { x: 360, y: 80, year: '2019', speed: 'WiFi 6' },
              { x: 430, y: 40, year: '2024', speed: 'WiFi 7' },
            ].map((point, i) => (
              <g key={i}>
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r="6"
                  fill="#00d4ff"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                />
                <text x={point.x} y={point.y - 12} textAnchor="middle" fill="#e4e4e7" fontSize="11" fontWeight="500">{point.speed}</text>
                <text x={point.x} y="185" textAnchor="middle" fill="#a1a1aa" fontSize="10">{point.year}</text>
              </g>
            ))}

            {/* Y-axis labels */}
            <text x="30" y="45" textAnchor="end" fill="#a1a1aa" fontSize="10">40+</text>
            <text x="30" y="80" textAnchor="end" fill="#a1a1aa" fontSize="10">25</text>
            <text x="30" y="115" textAnchor="end" fill="#a1a1aa" fontSize="10">10</text>
            <text x="30" y="150" textAnchor="end" fill="#a1a1aa" fontSize="10">1</text>
          </svg>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
