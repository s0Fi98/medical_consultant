'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// ── IMAGE DATA ─────────────────────────────────────────────────
// To add more images: push more objects into any `images` array
// src: use your /public path e.g. '/gallery/classroom1.jpg'
const galleryCategories = [
  {
    id: 'classroom',
    label: 'Classrooms',
    emoji: '🎓',
    color: 'from-[#0a3d62] to-[#1a6fa8]',
    tagline: 'World-class medical education, hands-on from Day 1',
    images: [
      { src: '/class_view.jpeg', caption: 'Clinical Skills Lab' },
      { src: '/class_sitting_structure.jpeg', caption: 'Welcome Ceremony at Campus' },
      { src: '/classroom_view.jpeg', caption: 'Orientation & Oath Taking' },
    ],
  },
  {
    id: 'hostel',
    label: 'Hostel Rooms',
    emoji: '🏠',
    color: 'from-[#1a6fa8] to-[#0891b2]',
    tagline: 'Clean, safe & fully furnished student accommodation',
    images: [
      { src: '/hostel_room.jpeg', caption: 'Student Hostel Room' },
      { src: '/hostel_room.jpeg', caption: 'Well-furnished Double Room' },
      { src: '/hostel_room.jpeg', caption: 'Clean & Spacious Living' },
    ],
  },
  {
    id: 'food',
    label: 'Indian Food',
    emoji: '🍛',
    color: 'from-[#0a3d62] to-[#48cae4]',
    tagline: 'Taste of home — Indian mess available every day',
    images: [
      { src: '/Indian_lunch.jpeg', caption: 'Dal, Roti, Sabzi & More' },
      { src: '/dianning.jpeg', caption: 'Fresh Indian Meals Daily' },
      { src: '/dianning_order.jpeg', caption: 'Indian Mess Facility' },
    ],
  },
  {
    id: 'campus',
    label: 'Campus Life',
    emoji: '🏫',
    color: 'from-[#0891b2] to-[#0a3d62]',
    tagline: 'Vibrant Indian student community abroad',
    images: [
      { src: '/practical_class.jpeg', caption: 'Grand Student Welcome Day' },
      { src: '/classroom.jpeg', caption: 'Practical Learning Sessions' },
      { src: '/white_coat.jpeg', caption: 'Indian Students Abroad' },
    ],
  },
]

// ── LIGHTBOX ──────────────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIdx(p => (p + 1) % images.length)
      if (e.key === 'ArrowLeft') setIdx(p => (p - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [images.length, onClose])

  return (
    <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6" onClick={onClose}>
      <div className="relative w-full max-w-5xl" onClick={e => e.stopPropagation()}>
        <img
          src={images[idx].src}
          alt={images[idx].caption}
          className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
          style={{ background: '#0a0a0a' }}
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5 rounded-b-2xl">
          <p className="text-white font-semibold text-sm">{images[idx].caption}</p>
          <p className="text-white/40 text-xs mt-0.5">{idx + 1} / {images.length} — press ← → to navigate</p>
        </div>
        {/* Prev */}
        <button onClick={() => setIdx(p => (p - 1 + images.length) % images.length)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#1a6fa8] border border-white/20 flex items-center justify-center transition-all">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Next */}
        <button onClick={() => setIdx(p => (p + 1) % images.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#1a6fa8] border border-white/20 flex items-center justify-center transition-all">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Close */}
        <button onClick={onClose}
          className="absolute -top-5 -right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-red-500 border border-white/20 flex items-center justify-center transition-all">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`rounded-full transition-all duration-300 ${i === idx ? 'w-6 h-2.5 bg-[#48cae4]' : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ── MAIN COMPONENT ────────────────────────────────────────────
export default function StudentLifeGallery() {
  const [activeTab, setActiveTab] = useState('classroom')
  const [lightbox, setLightbox] = useState(null)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  const cat = galleryCategories.find(c => c.id === activeTab)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const switchTab = (id) => {
    setVisible(false)
    setActiveTab(id)
    setTimeout(() => setVisible(true), 60)
  }

  return (
    <section ref={sectionRef} className="bg-[#071e2e] py-20 font-sans relative overflow-hidden">

      {/* Subtle dot grid bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#48cae4 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#48cae4] animate-pulse" />
            <span className="text-[#48cae4] text-xs font-bold uppercase tracking-widest">Real Students. Real Life.</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
            Life at Your Medical College Abroad
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            See exactly what awaits you — classrooms, hostel rooms, food & campus life. All real photos from our students.
          </p>
        </div>

        {/* ── Tab selector ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {galleryCategories.map(c => (
            <button
              key={c.id}
              onClick={() => switchTab(c.id)}
              className={`relative flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold border transition-all duration-300 ${
                activeTab === c.id
                  ? 'bg-gradient-to-r from-[#0a3d62] to-[#1a6fa8] text-white border-[#1a6fa8] shadow-lg shadow-[#1a6fa8]/30 scale-105'
                  : 'bg-white/8 text-white/60 border-white/15 hover:bg-white/15 hover:text-white hover:scale-105'
              }`}
            >
              <span className="text-lg">{c.emoji}</span>
              {c.label}
              {activeTab === c.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#48cae4]" />
              )}
            </button>
          ))}
        </div>

        {/* ── Active category badge ── */}
        <div className="flex justify-center mb-8">
          <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${cat.color} rounded-2xl px-6 py-3 shadow-xl`}>
            <span className="text-2xl">{cat.emoji}</span>
            <div>
              <p className="text-white font-black text-sm leading-tight" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>{cat.label}</p>
              <p className="text-white/70 text-xs">{cat.tagline}</p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            3 LARGE IMAGES IN A ROW — MAIN GRID
        ══════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cat.images.map((img, i) => (
            <div
              key={`${activeTab}-${i}`}
              onClick={() => setLightbox({ images: cat.images, index: i })}
              className="group relative overflow-hidden rounded-3xl cursor-zoom-in shadow-[0_8px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(26,111,168,0.4)] transition-all duration-500"
              style={{
                height: '480px',           // ← tall cards
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
                transition: `opacity 0.6s ease ${i * 0.13}s, transform 0.6s ease ${i * 0.13}s, box-shadow 0.3s ease`,
              }}
            >
              {/* Photo */}
              <Image
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                width={500}
                height={500}
              />

              {/* Dark gradient overlay — always subtle, stronger on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/10 group-hover:from-black/75 transition-all duration-300" />

              {/* Glowing border on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#48cae4]/60 transition-all duration-400" />

              {/* Top-left: number badge */}
              <div className="absolute top-4 left-4 w-8 h-8 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <span className="text-white text-xs font-black">{i + 1}</span>
              </div>

              {/* Top-right: zoom icon (shows on hover) */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/0 border border-white/0 group-hover:bg-white/20 group-hover:border-white/30 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>

              {/* Bottom: caption — slides up on hover */}
              <div className="absolute bottom-0 inset-x-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-base leading-snug drop-shadow-lg">{img.caption}</p>
                <p className="text-[#48cae4] text-xs font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                  Click to enlarge
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Category thumbnail switcher strip ── */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryCategories.map(c => (
            <button
              key={c.id}
              onClick={() => switchTab(c.id)}
              className={`relative group overflow-hidden rounded-2xl h-24 transition-all duration-300 hover:scale-105 ${
                activeTab === c.id
                  ? 'ring-2 ring-[#48cae4] ring-offset-2 ring-offset-[#071e2e]'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={c.images[0].src}
                alt={c.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${c.color} opacity-75`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <span className="text-2xl drop-shadow">{c.emoji}</span>
                <p className="text-white text-xs font-bold drop-shadow">{c.label}</p>
              </div>
              {activeTab === c.id && (
                <div className="absolute bottom-0 inset-x-0 h-1 bg-[#48cae4]" />
              )}
            </button>
          ))}
        </div>

        {/* ── Trust bar ── */}
        <div className="mt-10 pt-8 border-t border-white/8 flex flex-wrap items-center justify-center gap-8">
          {[
            { emoji: '📷', text: '100% Real Photos — No Stock Images' },
            { emoji: '✅', text: 'Verified by Our Students' },
            { emoji: '🇮🇳', text: 'Indian Students Currently Studying Abroad' },
          ].map(({ emoji, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/40 text-xs font-medium">
              <span className="text-base">{emoji}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

    </section>
  )
}