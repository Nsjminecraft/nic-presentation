import SectionWrapper from '../components/SectionWrapper'
import { motion } from 'framer-motion'

const sources = [
  {
    title: 'IEEE 802.3 Ethernet Standard',
    url: 'ieee.org',
    desc: 'The definitive standard for Ethernet networking — defines physical layer and MAC specifications.',
  },
  {
    title: 'IEEE 802.11ax/be (WiFi 6/7)',
    url: 'wifi.org',
    desc: 'Wireless LAN standards defining modern WiFi specifications including MU-MIMO and OFDMA.',
  },
  {
    title: 'Intel Network Adapters',
    url: 'intel.com/network',
    desc: 'Product specifications, datasheets, and driver downloads for Intel\'s full NIC lineup.',
  },
  {
    title: 'Realtek NIC Products',
    url: 'realtek.com',
    desc: 'Specifications for Realtek\'s widely-used integrated and discrete network controllers.',
  },
  {
    title: 'NVIDIA Networking (Mellanox)',
    url: 'nvidia.com/networking',
    desc: 'ConnectX and BlueField product lines — high-performance NICs and DPUs for data centers.',
  },
  {
    title: 'Broadcom NetXtreme Adapters',
    url: 'broadcom.com/products/ethernet-connectivity',
    desc: 'Enterprise-grade NIC specifications and data center networking solutions.',
  },
  {
    title: 'TP-Link Network Adapters',
    url: 'tp-link.com/network-adapter',
    desc: 'Consumer-friendly 10GbE adapters and product specifications.',
  },
  {
    title: 'MediaTek Networking Solutions',
    url: 'mediatek.com/products/networking',
    desc: 'Integrated Ethernet and WiFi solutions for routers, SoCs, and laptop combo cards.',
  },
  {
    title: 'PCI-SIG (PCI Express Standard)',
    url: 'pcisig.com',
    desc: 'The official body governing the PCI Express specification used by modern NICs.',
  },
  {
    title: 'Wikipedia: Network Interface Card',
    url: 'en.wikipedia.org',
    desc: 'Comprehensive overview of NIC history, types, standards, and technical architecture.',
  },
  {
    title: "Tom's Hardware — NIC Reviews",
    url: 'tomshardware.com',
    desc: 'Independent reviews and benchmarks of consumer and prosumer network adapters.',
  },
  {
    title: 'Linus Tech Tips — Networking Guides',
    url: 'linustechtips.com',
    desc: 'Community-driven reviews and tutorials on consumer networking hardware.',
  },
  {
    title: '"Computer Networking: A Top-Down Approach"',
    url: 'Kurose & Ross — Pearson',
    desc: 'University textbook covering network layer architecture including NIC functionality.',
  },
  {
    title: '"Network Warrior" (2nd Edition)',
    url: "O'Reilly Media — Gary A. Donahue",
    desc: 'Practical guide to real-world networking hardware and infrastructure.',
  },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function Bibliography() {
  return (
    <SectionWrapper id="bibliography">
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-accent-cyan font-heading text-sm tracking-widest uppercase mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          10 — Sources
        </motion.p>
        <motion.h2
          className="font-heading text-section text-text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Bibliography</span>
        </motion.h2>
        <motion.p
          className="text-text-muted font-body text-body max-w-2xl mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          All sources used in researching this presentation.
        </motion.p>

        <motion.div
          className="space-y-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {sources.map((src, i) => (
            <motion.div
              key={i}
              variants={item}
              className="glass-panel p-6 flex items-start gap-6 hover-card group"
            >
              {/* Number */}
              <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center font-heading font-mono font-bold text-accent-cyan text-sm">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-text-primary text-lg mb-1 group-hover:text-accent-cyan transition-colors">
                  {src.title}
                </h3>
                <p className="text-accent-purple font-body text-small mb-2">
                  {src.url}
                </p>
                <p className="text-text-muted font-body text-small leading-relaxed">
                  {src.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
