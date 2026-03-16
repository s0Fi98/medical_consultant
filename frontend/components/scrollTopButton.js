'use client'

import React from "react"

export default function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-7 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
      style={{ background: 'linear-gradient(135deg, #0a3d62, #1a6fa8)' }}
      aria-label="Scroll to top"
    >
      <span className="absolute inset-0 rounded-full border-2 border-[#48cae4]/40 animate-ping"
        style={{ animationDuration: '2s' }} />
      <svg className="w-5 h-5 text-white relative z-10" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}