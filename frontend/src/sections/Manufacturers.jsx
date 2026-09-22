import SectionWrapper from '../components/SectionWrapper'
import { motion } from 'framer-motion'

const brands = [
  {
    name: 'Intel',
    tagline: 'The Industry Standard',
    products: [
      { name: 'I225-T', speed: '2.5 GbE', price: '$30', feature: 'Multi-Gigabit desktop' },
      { name: 'X710-DA2', speed: '10 GbE', price: '$200', feature: 'SFP+ server grade' },
    ],
    color: '#00d4ff',
    initial: 'IN',
  },
  {
    name: 'Realtek',
    tagline: 'Value & Integration',
    products: [
      { name: 'RTL8125', speed: '2.5 GbE', price: '$20', feature: 'Budget PCIe card' },
      { name: 'RTL8111', speed: '1 GbE', price: 'Integrated', feature: 'Most common onboard' },
    ],
    color: '#7c3aed',
    initial: 'RT',
  },
  {
    name: 'Broadcom',
    tagline: 'Enterprise Networking',
    products: [
      { name: 'BCM57416', speed: '10 GbE', price: '$150', feature: 'Data center staple' },
    ],
    color: '#ec4899',
    initial: 'BC',
  },
  {
    name: 'NVIDIA',
    tagline: 'High Performance Computing',
    products: [
      { name: 'ConnectX-6', speed: '100 GbE', price: '$500+', feature: 'HDR InfiniBand ready' },
    ],
    color: '#00d4ff',
    initial: 'NV',
  },
  {
    name: 'TP-Link',
    tagline: 'Consumer Friendly',
    products: [
      { name: 'TX401', speed: '10 GbE', price: '$80', feature: 'Affordable 10G upgrade' },
    ],
    color: '#7c3aed',
    initial: 'TP',
  },
  {
    name: 'MediaTek',
    tagline: 'Mobile & IoT Integration',
    products: [
      { name: 'MT7988A', speed: '2.5 GbE', price: 'Integrated', feature: 'Built into routers & SoCs' },
      { name: 'MT7922', speed: '1 GbE + WiFi 6E', price: 'Integrated', feature: 'Laptop combo cards' },
    ],
    color: '#ec4899',
    initial: 'MT',
  },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Manufacturers() {
  return (
    <SectionWrapper id="manufacturers">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-accent-cyan font-heading text-sm tracking-widest uppercase mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          07 — Manufacturers & Costs
        </motion.p>
        <motion.h2
          className="font-heading text-section text-text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Who Makes <span className="gradient-text">NICs</span>?
        </motion.h2>
        <motion.p
          className="text-text-muted font-body text-body max-w-2xl mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          From budget consumer cards to data-center beasts — here are the major players and what they cost.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={item}
              className="glass-panel hover-card p-8 relative overflow-hidden group"
            >
              {/* Background glow */}
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-10 blur-3xl group-hover:opacity-25 transition-opacity duration-500"
                style={{ background: brand.color }}
              />

              <div className="relative z-10">
                {/* Brand header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-heading font-bold text-sm"
                    style={{ background: `${brand.color}15`, color: brand.color }}
                  >
                    {brand.initial}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-text-primary text-lg">
                      {brand.name}
                    </h3>
                    <p className="text-text-dim text-small">{brand.tagline}</p>
                  </div>
                </div>

                {/* Products */}
                <div className="space-y-3">
                  {brand.products.map((product) => (
                    <div
                      key={product.name}
                      className="bg-bg-elevated/50 rounded-xl p-4 border border-white/5"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-heading font-medium text-text-primary">
                          {product.name}
                        </span>
                        <span
                          className="font-heading font-bold text-sm"
                          style={{ color: brand.color }}
                        >
                          {product.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-text-dim text-small">{product.speed}</span>
                        <span className="text-text-muted text-small">{product.feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Price range bar */}
        <motion.div
          className="mt-12 glass-panel p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-text-dim font-body text-small uppercase tracking-wider mb-4">Price Range Overview</p>
          <div className="space-y-3">
            {[
              { label: 'Realtek', low: 5, high: 10, color: '#7c3aed' },
              { label: 'TP-Link', low: 10, high: 25, color: '#7c3aed' },
              { label: 'Intel', low: 10, high: 50, color: '#00d4ff' },
              { label: 'Broadcom', low: 30, high: 60, color: '#ec4899' },
              { label: 'NVIDIA', low: 50, high: 100, color: '#00d4ff' },
              { label: 'MediaTek', low: 5, high: 15, color: '#ec4899' },
            ].map((bar) => (
              <div key={bar.label} className="flex items-center gap-4">
                <span className="text-text-muted text-small w-20 shrink-0">{bar.label}</span>
                <div className="flex-1 h-3 bg-bg-elevated rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${bar.color}80, ${bar.color})` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.high}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
                <span className="text-text-dim text-small w-16 text-right">
                  ${bar.low === 5 ? '20' : bar.low * 10}+
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Market Share & Value Chart */}
        <motion.div
          className="mt-12 grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Market Share Donut */}
          <div className="glass-panel p-8">
            <h3 className="font-heading text-sub text-text-primary mb-6">Market Presence</h3>
            <div className="flex items-center gap-8">
              <svg viewBox="0 0 120 120" className="w-32 h-32 shrink-0">
                {[
                  { brand: 'Realtek', share: 35, color: '#7c3aed', offset: 0 },
                  { brand: 'Intel', share: 25, color: '#00d4ff', offset: 35 },
                  { brand: 'Broadcom', share: 15, color: '#ec4899', offset: 60 },
                  { brand: 'MediaTek', share: 12, color: '#00d4ff', offset: 75 },
                  { brand: 'Others', share: 13, color: '#52525b', offset: 87 },
                ].map((seg, i) => (
                  <motion.circle
                    key={i}
                    cx="60"
                    cy="60"
                    r="45"
                    fill="none"
                    stroke={seg.color}
                    strokeWidth="20"
                    strokeDasharray={`${seg.share * 2.83} ${283 - seg.share * 2.83}`}
                    strokeDashoffset={`${-seg.offset * 2.83}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  />
                ))}
                <text x="60" y="55" textAnchor="middle" fill="#e4e4e7" fontSize="10" fontWeight="600">NIC</text>
                <text x="60" y="70" textAnchor="middle" fill="#a1a1aa" fontSize="8">Market</text>
              </svg>
              <div className="space-y-2 flex-1">
                {[
                  { brand: 'Realtek', share: '35%', color: '#7c3aed' },
                  { brand: 'Intel', share: '25%', color: '#00d4ff' },
                  { brand: 'Broadcom', share: '15%', color: '#ec4899' },
                  { brand: 'MediaTek', share: '12%', color: '#00d4ff' },
                  { brand: 'Others', share: '13%', color: '#52525b' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                    <span className="text-text-muted text-small flex-1">{item.brand}</span>
                    <span className="text-text-primary text-small font-mono">{item.share}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Speed-to-Price Efficiency */}
          <div className="glass-panel p-8">
            <h3 className="font-heading text-sub text-text-primary mb-6">Speed-per-Dollar Efficiency</h3>
            <svg viewBox="0 0 250 180" className="w-full">
              {/* Axes */}
              <line x1="30" y1="150" x2="240" y2="150" stroke="#27272a" strokeWidth="1" />
              <line x1="30" y1="20" x2="30" y2="150" stroke="#27272a" strokeWidth="1" />

              {/* Data points */}
              {[
                { x: 60, y: 130, brand: 'Realtek', spd: 2.5, prc: 20 },
                { x: 100, y: 100, brand: 'TP-Link', spd: 10, prc: 80 },
                { x: 140, y: 80, brand: 'Intel', spd: 10, prc: 200 },
                { x: 180, y: 50, brand: 'Broadcom', spd: 10, prc: 150 },
                { x: 220, y: 30, brand: 'NVIDIA', spd: 100, prc: 500 },
              ].map((point, i) => (
                <g key={i}>
                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r="8"
                    fill="#00d4ff"
                    fillOpacity="0.3"
                    stroke="#00d4ff"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                  />
                  <text x={point.x} y={point.y - 14} textAnchor="middle" fill="#e4e4e7" fontSize="7">{point.brand}</text>
                  <text x={point.x} y={point.y + 20} textAnchor="middle" fill="#a1a1aa" fontSize="6">{point.spd}G/${point.prc}</text>
                </g>
              ))}

              {/* Axis labels */}
              <text x="135" y="170" textAnchor="middle" fill="#a1a1aa" fontSize="8">Price →</text>
              <text x="15" y="85" textAnchor="middle" fill="#a1a1aa" fontSize="8" transform="rotate(-90, 15, 85)">Speed →</text>
            </svg>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
