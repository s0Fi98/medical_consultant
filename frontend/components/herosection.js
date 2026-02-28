'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const slides = [
  {
    tag: 'NEET UG Counselling 2025',
    headline: ['Your Dream', 'Medical College', 'Starts Here'],
    sub: 'Expert NEET UG & PG counselling with a 98% success rate. Get into the college you deserve with personalised guidance.',
    cta: { label: 'Start Free Consultation', href: '/contact_us' },
    secondary: { label: 'Explore Colleges', href: '/mbbs_admission/neet_ug' },
    accent: '#48cae4',
    stat: { value: '90,000+', label: 'Students Guided' },
  },
  {
    tag: 'MBBS Admissions India',
    headline: ['Secure Your', 'MBBS Seat in', 'Top Colleges'],
    sub: 'From government medical colleges to private institutions — we map the best options for your NEET rank and category.',
    cta: { label: 'Check My College', href: '/neet_predictor/ug_college' },
    secondary: { label: 'Admissions in India', href: '/mbbs_admission/admissions_india' },
    accent: '#90e0ef',
    stat: { value: '4,100+', label: 'MBBS Admissions' },
  },
  {
    tag: 'Study Abroad',
    headline: ['MBBS Abroad', 'NMC Approved', 'Universities'],
    sub: 'Russia, Georgia, Philippines, China — we guide you from university selection to visa to landing in your dream country.',
    cta: { label: 'Explore Study Abroad', href: '/mbbs_admission/study_abroad' },
    secondary: { label: 'Contact Us', href: '/contact_us' },
    accent: '#48cae4',
    stat: { value: '20+', label: 'Countries Covered' },
  },
]

const floatingCards = [
  { icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', label: 'NMC Approved', sub: 'Verified Colleges Only', delay: '0s' },
  { icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z', label: '1-on-1 Counselling', sub: 'Dedicated Advisor', delay: '0.4s' },
  { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z', label: '98% Success Rate', sub: 'Proven Track Record', delay: '0.8s' },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const timerRef = useRef(null)

  // Parallax mouse tracking
  useEffect(() => {
    const handleMouse = (e) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  // Auto-advance
  const goTo = (idx) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 300)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => goTo((idx + 1) % slides.length), 5500)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % slides.length
        return next
      })
    }, 5500)
    return () => clearInterval(timerRef.current)
  }, [])

  const slide = slides[current]

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[#071e2e] overflow-hidden flex flex-col"
    >
      {/* ── Deep layered background ── */}
      <div className="absolute inset-0">
        {/* Mesh gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#071e2e] via-[#0a3d62] to-[#071e2e]" />
        {/* Animated orbs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl transition-transform duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, #1a6fa8 0%, transparent 70%)',
            top: '-10%', left: '-10%',
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, #48cae4 0%, transparent 70%)',
            bottom: '-5%', right: '-5%',
            transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)`,
          }}
        />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#48cae4 1px, transparent 1px), linear-gradient(90deg, #48cae4 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Diagonal accent stripe */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          style={{ background: 'linear-gradient(135deg, transparent 40%, #1a6fa8 40%, #1a6fa8 42%, transparent 42%)' }}
        />
      </div>

      {/* ── Floating medical cross pattern ── */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-[0.04] text-[#48cae4] font-black select-none pointer-events-none"
          style={{
            fontSize: `${40 + i * 15}px`,
            top: `${10 + i * 14}%`,
            left: `${5 + i * 16}%`,
            animation: `floatDot ${6 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        >+</div>
      ))}

      {/* ── Main content ── */}
      <div className="relative flex-1 max-w-7xl mx-auto px-6 w-full flex items-center py-24 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full min-h-[80vh]">

          {/* LEFT — Text content */}
          <div className="space-y-8 z-10">

            {/* Slide tag pill */}
            <div
              key={`tag-${current}`}
              className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2"
              style={{ animation: 'fadeSlideUp 0.5s ease forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#48cae4] animate-ping" />
              <span className="text-[#48cae4] text-xs font-bold uppercase tracking-widest">{slide.tag}</span>
            </div>

            {/* Headline */}
            <div className="space-y-1" key={`headline-${current}`} style={{ animation: 'fadeSlideUp 0.5s ease 0.1s both' }}>
              {slide.headline.map((line, i) => (
                <h1
                  key={i}
                  className="font-black leading-none tracking-tight"
                  style={{
                    fontFamily: "'Merriweather', Georgia, serif",
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    color: i === 1 ? slide.accent : 'white',
                    animation: `fadeSlideUp 0.5s ease ${0.1 + i * 0.08}s both`,
                  }}
                >
                  {line}
                </h1>
              ))}
            </div>

            {/* Subtext */}
            <p
              key={`sub-${current}`}
              className="text-slate-300 text-base leading-relaxed max-w-md"
              style={{ animation: 'fadeSlideUp 0.5s ease 0.35s both' }}
            >
              {slide.sub}
            </p>

            {/* CTA buttons */}
            <div
              key={`cta-${current}`}
              className="flex flex-wrap items-center gap-4"
              style={{ animation: 'fadeSlideUp 0.5s ease 0.45s both' }}
            >
              <Link
                href={slide.cta.href}
                className="group flex items-center gap-2.5 bg-gradient-to-r from-[#48cae4] to-[#1a6fa8] hover:from-[#1a6fa8] hover:to-[#0a3d62] text-white font-bold px-7 py-4 rounded-2xl shadow-[0_8px_32px_rgba(72,202,228,0.3)] hover:shadow-[0_8px_32px_rgba(26,111,168,0.4)] transition-all duration-300"
              >
                {slide.cta.label}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={slide.secondary.href}
                className="flex items-center gap-2 text-white/80 hover:text-white font-semibold text-sm border border-white/20 hover:border-white/50 px-6 py-4 rounded-2xl transition-all duration-200"
              >
                {slide.secondary.label}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Slide stat + trust bar */}
            <div
              key={`stat-${current}`}
              className="flex items-center gap-6 pt-2"
              style={{ animation: 'fadeSlideUp 0.5s ease 0.55s both' }}
            >
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl leading-none" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
                  {slide.stat.value}
                </span>
                <span className="text-[#48cae4] text-xs font-semibold mt-0.5">{slide.stat.label}</span>
              </div>
              <div className="w-px h-10 bg-white/20" />
              {/* Avatars row */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2.5">
                  {['PS', 'RM', 'AK', 'KR', 'MV'].map((init, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#071e2e] flex items-center justify-center text-white text-[10px] font-bold"
                      style={{ background: `hsl(${200 + i * 20}, 70%, ${35 + i * 5}%)` }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/60 text-[10px] font-medium">Trusted by thousands</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Visual panel */}
          <div
            className="hidden md:flex justify-end items-center z-10"
            style={{ transform: `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.1}px)`, transition: 'transform 0.6s ease' }}
          >
            <div className="relative w-full max-w-md">

              {/* Main card */}
              <div className="relative bg-white/8 backdrop-blur-xl border border-white/15 rounded-[2rem] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                {/* Central icon */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-[#0a3d62] to-[#1a6fa8] flex items-center justify-center shadow-2xl">
                      <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                      </svg>
                    </div>
                    {/* Pulse rings */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-[#48cae4]/30 scale-110 animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-0 rounded-3xl border border-[#48cae4]/15 scale-125" />
                  </div>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'NEET UG', icon: '🎓', count: '60K+ guided' },
                    { label: 'NEET PG', icon: '🏥', count: '18K+ sessions' },
                    { label: 'India Admissions', icon: '🇮🇳', count: '4100+ seats' },
                    { label: 'Study Abroad', icon: '✈️', count: '20+ countries' },
                  ].map(({ label, icon, count }) => (
                    <div key={label} className="bg-white/8 hover:bg-white/15 border border-white/10 hover:border-[#48cae4]/30 rounded-xl p-3.5 cursor-pointer transition-all duration-200 group">
                      <span className="text-xl">{icon}</span>
                      <p className="text-white text-xs font-bold mt-2 leading-tight">{label}</p>
                      <p className="text-[#48cae4] text-[10px] mt-0.5">{count}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA inside card */}
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-between w-full bg-gradient-to-r from-[#0a3d62] to-[#1a6fa8] hover:from-[#48cae4]/20 hover:to-[#1a6fa8] border border-[#48cae4]/30 rounded-xl px-4 py-3 group transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#48cae4]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#48cae4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">Call for Free Advice</p>
                      <p className="text-[#48cae4] text-xs font-black">+91 98765 43210</p>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-white/40 group-hover:text-[#48cae4] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Floating micro-cards */}
              {floatingCards.map(({ icon, label, sub, delay }, i) => (
                <div
                  key={i}
                  className="absolute bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg"
                  style={{
                    top: i === 0 ? '-16px' : i === 1 ? '30%' : 'auto',
                    bottom: i === 2 ? '-16px' : 'auto',
                    left: i === 1 ? '-60px' : 'auto',
                    right: i === 0 ? '20px' : i === 2 ? '30px' : 'auto',
                    animation: `floatCard 4s ease-in-out infinite`,
                    animationDelay: delay,
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0a3d62] to-[#1a6fa8] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#48cae4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold leading-tight">{label}</p>
                    <p className="text-white/50 text-[10px]">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Slide controls ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 flex items-center justify-between">
        {/* Progress dots */}
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group flex items-center gap-2"
              aria-label={`Slide ${i + 1}`}
            >
              <div className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-[#48cae4]' : 'w-3 bg-white/25 group-hover:bg-white/50'}`} />
            </button>
          ))}
          <span className="text-white/30 text-xs ml-1">{String(current + 1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}</span>
        </div>

        {/* Scroll hint */}
        <div className="hidden md:flex items-center gap-2 text-white/30 text-xs">
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          Scroll to explore
        </div>
      </div>

      {/* ── Bottom trust bar ── */}
      <div className="relative z-10 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center md:justify-between gap-4">
          {[
            { icon: '🏆', text: 'Since 2003 — 20+ Years of Excellence' },
            { icon: '✅', text: 'NMC & ISO Certified Consultancy' },
            { icon: '📍', text: 'Pan India + 20 Countries Abroad' },
            { icon: '🎯', text: '98% Admission Success Rate' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/60 text-xs font-medium">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.04; }
          50%       { transform: translateY(-20px) rotate(15deg); opacity: 0.07; }
        }
      `}</style>
    </section>
  )
}