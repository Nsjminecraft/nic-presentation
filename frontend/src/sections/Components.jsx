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


export default function Components() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const [hovered, setHovered] = useState(null)

  const toggleComponent = (id) => {
    setHovered(prev => prev === id ? null : id)
  }

  const components = [
    { id: 'pcie', name: 'PCIe Interface', desc: 'Bus interface connecting NIC to motherboard, provides power and data pathway', x: 70, y: 220, w: 160, h: 40 },
    { id: 'rom', name: 'Boot ROM', desc: 'Enables network boot (PXE) — loads OS from network server', x: 70, y: 150, w: 80, h: 45 },
    { id: 'eeprom', name: 'EEPROM', desc: 'Stores unique MAC address and configuration data', x: 180, y: 150, w: 80, h: 45 },
    { id: 'mac', name: 'MAC Controller', desc: 'Media Access Control — handles framing, addressing, error detection', x: 100, y: 70, w: 140, h: 60 },
    { id: 'phy', name: 'PHY Transceiver', desc: 'Physical layer transceiver — converts digital data to analog signals', x: 270, y: 70, w: 130, h: 60 },
    { id: 'connector', name: 'RJ-45', desc: 'Physical connector for network cable (copper or fiber optic)', x: 420, y: 75, w: 50, h: 50 },
    { id: 'led', name: 'LED', desc: 'Show link status (green) and activity (amber blinking)', x: 420, y: 140, w: 50, h: 35 },
  ]

  return (
    <SectionWrapper id="components">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={item} className="font-heading text-2xl md:text-section gradient-text mb-4">
          Inside a Network Interface Card
        </motion.h2>

        <motion.p variants={item} className="font-body text-body text-text-muted mb-16 max-w-3xl">
          A NIC contains specialized components working together to handle network communication.
          Tap or click each part to learn its function.
        </motion.p>

        <motion.div variants={item} className="glass-panel p-8 mb-12">
          <svg viewBox="0 0 500 320" className="w-full max-w-4xl mx-auto">
            {/* NIC board outline */}
            <rect x="20" y="20" width="460" height="270" rx="6" fill="#12121a" stroke="#00d4ff" strokeWidth="2" strokeOpacity="0.3" />
            <rect x="26" y="26" width="448" height="258" fill="#0a0a0f" stroke="#00d4ff" strokeWidth="1" strokeOpacity="0.1" />

            {/* Circuit traces connecting components */}
            <path d="M 240 100 L 270 100" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
            <path d="M 400 100 L 420 100" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
            <path d="M 150 100 L 150 150" stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
            <path d="M 170 130 L 170 150" stroke="#00d4ff" strokeWidth="1" strokeOpacity="0.3" fill="none" />
            <path d="M 220 130 L 220 150" stroke="#00d4ff" strokeWidth="1" strokeOpacity="0.3" fill="none" />
            <path d="M 150 220 L 150 195" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.3" fill="none" />
            <path d="M 230 240 L 280 240 L 280 130 L 335 130" stroke="#00d4ff" strokeWidth="1" strokeOpacity="0.25" fill="none" />

            {/* Components */}
            {components.map((comp) => (
              <g key={comp.id} onClick={() => toggleComponent(comp.id)} className="cursor-pointer">
                <motion.rect
                  x={comp.x} y={comp.y} width={comp.w} height={comp.h}
                  rx="4"
                  fill={hovered === comp.id ? '#00d4ff' : '#00d4ff'}
                  fillOpacity={hovered === comp.id ? 0.2 : 0.1}
                  stroke={hovered === comp.id ? '#00d4ff' : '#00d4ff'}
                  strokeWidth={hovered === comp.id ? 2 : 1.5}
                  strokeOpacity={hovered === comp.id ? 1 : 0.5}
                  className="transition-all"
                />
                <text x={comp.x + comp.w / 2} y={comp.y + comp.h / 2} textAnchor="middle" dominantBaseline="middle" fill="#e4e4e7" fontSize="9" fontWeight="500" className="pointer-events-none">
                  {comp.name}
                </text>
              </g>
            ))}

            {/* PCIe connector pins */}
            {[...Array(12)].map((_, i) => (
              <rect key={i} x={80 + i * 12} y="262" width="8" height="15" fill="#00d4ff" fillOpacity="0.25" rx="1" />
            ))}
          </svg>
        </motion.div>

        {/* Real NIC photo */}
        <motion.div variants={item} className="mb-12">
          <MediaImage
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Network_card.jpg/640px-Network_card.jpg"
            alt="Real Ethernet NIC showing internal components"
            caption="A real Ethernet NIC — compare with the diagram above to identify the MAC controller, PHY chip, EEPROM, and RJ-45 connector"
            className="max-w-lg mx-auto"
          />
        </motion.div>

        {/* Component details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map((comp, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`glass-panel p-4 hover-card cursor-pointer ${hovered === comp.id ? 'border-accent-cyan/50' : ''}`}
              onClick={() => toggleComponent(comp.id)}
            >
              <h3 className="font-heading text-body text-text-primary mb-2">{comp.name}</h3>
              <p className="text-small text-text-muted">{comp.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="mt-12 glass-panel p-6">
          <h3 className="font-heading text-sub text-text-primary mb-4">The Blueprint of Connectivity</h3>
          <p className="text-body text-text-muted">
            Each component plays a specialized role: the MAC controller handles the rules of network communication,
            the PHY transceiver converts between digital and physical signals, and the EEPROM ensures every NIC
            has a unique identity. Together, they form a sophisticated piece of engineering that enables all modern networking.
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
