import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'hero', label: 'Home', number: '00' },
  { id: 'what-is-nic', label: 'What is a NIC?', number: '01' },
  { id: 'types', label: 'Types', number: '02' },
  { id: 'standards', label: 'Standards', number: '03' },
  { id: 'how-it-works', label: 'How It Works', number: '04' },
  { id: 'components', label: 'Components', number: '05' },
  { id: 'specs', label: 'Tech Specs', number: '06' },
  { id: 'manufacturers', label: 'Manufacturers', number: '07' },
  { id: 'future', label: 'The Future', number: '08' },
  { id: 'fun-facts', label: 'Fun Facts', number: '09' },
  { id: 'bibliography', label: 'Sources', number: '10' },
  { id: 'quiz', label: 'Quiz', number: '11' },
]

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      if (e.detail?.id) setActiveSection(e.detail.id)
    }
    window.addEventListener('section-change', handler)
    return () => window.removeEventListener('section-change', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-xl bg-bg-surface/90 backdrop-blur-xl border border-white/10 flex items-center justify-center text-text-primary"
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {mobileOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <motion.nav
        initial={false}
        animate={{
          x: 0,
          width: typeof window !== 'undefined' && window.innerWidth < 768 ? 240 : (collapsed ? 64 : 240),
        }}
        className={`fixed left-0 top-0 h-screen z-40 bg-bg-surface/90 backdrop-blur-2xl border-r border-white/5 flex flex-col overflow-hidden transition-transform duration-300 ${
          typeof window !== 'undefined' && window.innerWidth < 768
            ? mobileOpen ? 'translate-x-0' : '-translate-x-full'
            : ''
        }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-white/5 min-h-[64px]">
        <motion.div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M6 12h4M14 12h4M6 9v6M18 9v6" />
          </svg>
        </motion.div>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-heading font-semibold text-text-primary text-sm whitespace-nowrap"
          >
            NIC Explorer
          </motion.span>
        )}
      </div>

      {/* Toggle - desktop only */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="hidden md:flex absolute -right-3 top-20 w-6 h-6 rounded-full bg-bg-elevated border border-white/10 items-center justify-center text-text-muted hover:text-accent-cyan transition-colors z-50"
      >
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {collapsed ? <path d="M4 2l4 4-4 4" /> : <path d="M8 2l-4 4 4 4" />}
        </svg>
      </button>

      {/* Nav Items */}
      <div className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        {sections.map((s) => {
          const isActive = activeSection === s.id
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 relative"
            >
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-accent-cyan/10 rounded-xl border border-accent-cyan/20"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className={`relative font-heading text-xs font-mono ${isActive ? 'text-accent-cyan' : 'text-text-dim'} transition-colors`}>
                {s.number}
              </span>
              {!collapsed && (
                <span className={`relative text-sm whitespace-nowrap transition-colors ${isActive ? 'text-text-primary font-medium' : 'text-text-muted group-hover:text-text-primary'}`}>
                  {s.label}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-white/5">
          <p className="text-small text-text-dim">English 10 Comp</p>
          <p className="text-xs text-text-dim mt-1">NIC Presentation</p>
        </div>
      )}
    </motion.nav>
    </>
  )
}
