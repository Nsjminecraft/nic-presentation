import { useEffect, useRef } from 'react'

export function useActiveSection(sectionIds) {
  const activeRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeRef.current = entry.target.id
            // Dispatch custom event so Sidebar can listen
            window.dispatchEvent(new CustomEvent('section-change', {
              detail: { id: entry.target.id }
            }))
          }
        })
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeRef
}
