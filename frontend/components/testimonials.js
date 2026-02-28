'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    college: 'AIIMS New Delhi',
    course: 'MBBS',
    year: '2024',
    rank: 'AIR 312',
    state: 'Delhi',
    rating: 5,
    text: 'MedConsult made the entire NEET UG counselling process feel effortless. I was overwhelmed with the options, but their team sat with me personally and mapped out the best colleges for my rank. Got into AIIMS Delhi — my dream! Forever grateful.',
    avatar: 'PS',
    color: 'from-[#0a3d62] to-[#1a6fa8]',
    category: 'NEET UG',
  },
  {
    id: 2,
    name: 'Rohit Mehta',
    college: 'Maulana Azad Medical College',
    course: 'MBBS',
    year: '2024',
    rank: 'AIR 1,840',
    state: 'Maharashtra',
    rating: 5,
    text: 'I was confused between state quota and All India quota. The counsellors at MedConsult explained everything in detail with real data. Their college predictor tool was spot-on! Secured Maulana Azad which I never thought was possible.',
    avatar: 'RM',
    color: 'from-[#1a6fa8] to-[#0891b2]',
    category: 'NEET UG',
  },
  {
    id: 3,
    name: 'Dr. Sneha Patel',
    college: 'JIPMER Puducherry',
    course: 'MD Radiology',
    year: '2024',
    rank: 'AIR 520',
    state: 'Gujarat',
    rating: 5,
    text: 'NEET PG counselling is incredibly complex and stressful. MedConsult guided me through every round — from choice filling to seat upgradation. Their knowledge of the system is unmatched. Now doing MD Radiology at JIPMER!',
    avatar: 'SP',
    color: 'from-[#0a3d62] to-[#48cae4]',
    category: 'NEET PG',
  },
  {
    id: 4,
    name: 'Arjun Nair',
    college: 'Tbilisi State Medical University',
    course: 'MBBS',
    year: '2023',
    rank: 'NEET Qualified',
    state: 'Kerala',
    rating: 5,
    text: 'I wanted to study abroad but had no idea where to start. MedConsult handled everything — from university selection in Georgia to visa documentation and pre-departure briefing. Best decision of my life!',
    avatar: 'AN',
    color: 'from-[#0891b2] to-[#0a3d62]',
    category: 'Study Abroad',
  },
  {
    id: 5,
    name: 'Kavya Reddy',
    college: 'Osmania Medical College',
    course: 'MBBS',
    year: '2024',
    rank: 'AIR 4,210',
    state: 'Telangana',
    rating: 5,
    text: 'The team helped me understand the state counselling process for Telangana completely. I had a mid-range rank and thought I wouldn\'t get a government seat. MedConsult\'s strategy got me into Osmania. Truly life-changing advice!',
    avatar: 'KR',
    color: 'from-[#1a6fa8] to-[#0a3d62]',
    category: 'NEET UG',
  },
  {
    id: 6,
    name: 'Vikram Singh',
    college: 'Sri Ramachandra Institute',
    course: 'MBBS',
    year: '2023',
    rank: 'AIR 7,500',
    state: 'Rajasthan',
    rating: 4,
    text: 'I was stuck between private colleges and didn\'t know which one had the best infrastructure. MedConsult gave me an honest, unbiased comparison. No pressure, just genuine guidance. Ended up at Sri Ramachandra and loving it!',
    avatar: 'VS',
    color: 'from-[#48cae4] to-[#1a6fa8]',
    category: 'NEET UG',
  },
  {
    id: 7,
    name: 'Aisha Khan',
    college: 'King George\'s Medical University',
    course: 'MS Orthopaedics',
    year: '2024',
    rank: 'AIR 290',
    state: 'Uttar Pradesh',
    rating: 5,
    text: 'For NEET PG, timing and strategy matter everything. MedConsult\'s team monitored every counselling round in real time and advised me exactly when to upgrade. Got MS Orthopaedics at KGMU — couldn\'t be happier!',
    avatar: 'AK',
    color: 'from-[#0a3d62] to-[#1a6fa8]',
    category: 'NEET PG',
  },
  {
    id: 8,
    name: 'Dev Anand',
    college: 'Jilin University, China',
    course: 'MBBS',
    year: '2023',
    rank: 'NEET Qualified',
    state: 'Punjab',
    rating: 5,
    text: 'Studying MBBS in China was a dream. MedConsult made it real — they guided me on NMC-approved universities, helped with application, and even connected me with seniors studying there. Full end-to-end support!',
    avatar: 'DA',
    color: 'from-[#0a3d62] to-[#0891b2]',
    category: 'Study Abroad',
  },
  {
    id: 9,
    name: 'Meera Iyer',
    college: 'Madras Medical College',
    course: 'MBBS',
    year: '2024',
    rank: 'AIR 2,100',
    state: 'Tamil Nadu',
    rating: 5,
    text: 'Tamil Nadu counselling is extremely state-specific and complex. MedConsult had a dedicated expert for TN quota who guided me step by step. I got into MMC — one of the oldest and best medical colleges in Asia!',
    avatar: 'MI',
    color: 'from-[#1a6fa8] to-[#48cae4]',
    category: 'NEET UG',
  },
]

const categories = ['All', 'NEET UG', 'NEET PG', 'Study Abroad']

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(s => (
        <svg key={s} className={`w-3.5 h-3.5 ${s <= rating ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

// Auto-scrolling marquee row
function MarqueeRow({ items, reverse = false }) {
  return (
    <div className={`flex gap-5 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} w-max`}>
      {[...items, ...items].map((t, i) => (
        <div
          key={`${t.id}-${i}`}
          className="w-80 flex-shrink-0 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
        >
          <div className="flex items-start justify-between mb-3">
            <StarRating rating={t.rating} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#48cae4] bg-[#eff8ff] border border-[#1a6fa8]/15 rounded-full px-2.5 py-1">
              {t.category}
            </span>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-4 mb-4">"{t.text}"</p>
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-xs font-bold">{t.avatar}</span>
            </div>
            <div className="min-w-0">
              <p className="text-[#0a3d62] text-xs font-bold truncate">{t.name}</p>
              <p className="text-slate-400 text-[10px] truncate">{t.college} · {t.rank}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [active, setActive] = useState(0)
  const intervalRef = useRef(null)

  const filtered = testimonials.filter(t => activeCategory === 'All' || t.category === activeCategory)

  // Featured carousel auto-play
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % filtered.length)
    }, 4000)
    return () => clearInterval(intervalRef.current)
  }, [filtered.length])

  useEffect(() => { setActive(0) }, [activeCategory])

  const row1 = testimonials.slice(0, 5)
  const row2 = testimonials.slice(4)

  return (
    <main className="font-sans bg-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-[#0a3d62] overflow-hidden min-h-[320px] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#48cae4] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1a6fa8] rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="flex items-center gap-2 text-xs text-[#48cae4]/80 mb-4">
            <Link href="/" className="hover:text-[#48cae4] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Testimonials</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
                SUCCESS
                <span className="block text-[#48cae4]">STORIES</span>
              </h1>
              <p className="text-slate-300 text-sm mt-3 max-w-lg">
                Real students. Real colleges. Real results. See how MedConsult has transformed medical careers across India and abroad.
              </p>
            </div>
            {/* Stats */}
            <div className="flex gap-6">
              {[
                { value: '90K+', label: 'Students' },
                { value: '4.9★', label: 'Rating' },
                { value: '20+', label: 'Years' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-white font-black text-2xl leading-none">{value}</p>
                  <p className="text-[#48cae4] text-xs font-semibold mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE WALL ── */}
      <section className="bg-slate-50 py-12 overflow-hidden">
        <div className="mb-5 space-y-5">
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" style={{position:'relative', marginTop:'-100%', height:'100%'}} />
      </section>

      {/* ── FEATURED CAROUSEL ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 space-y-2">
            <p className="text-[#48cae4] text-xs font-bold uppercase tracking-widest">Hear From Our Students</p>
            <h2 className="text-3xl font-black text-[#0a3d62]" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
              What They're Saying
            </h2>
          </div>

          {/* Category filter */}
          <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#0a3d62] text-white border-[#0a3d62] shadow-md'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-[#1a6fa8]/40 hover:text-[#1a6fa8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Big featured card */}
          {filtered.length > 0 && (
            <div className="grid lg:grid-cols-5 gap-6">
              {/* Main spotlight card */}
              <div className="lg:col-span-3 relative">
                <div className={`bg-gradient-to-br ${filtered[active].color} rounded-3xl p-10 min-h-[340px] flex flex-col justify-between overflow-hidden relative`}>
                  {/* Bg decoration */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/4 translate-y-1/4" />
                  {/* Quote mark */}
                  <div className="absolute top-6 right-8 text-white/10 font-black text-[120px] leading-none select-none" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>"</div>

                  <div className="relative space-y-5">
                    <StarRating rating={filtered[active].rating} />
                    <p className="text-white text-lg leading-relaxed font-medium" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
                      "{filtered[active].text}"
                    </p>
                  </div>

                  <div className="relative flex items-center justify-between mt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center">
                        <span className="text-white font-black text-lg">{filtered[active].avatar}</span>
                      </div>
                      <div>
                        <p className="text-white font-bold text-base">{filtered[active].name}</p>
                        <p className="text-white/70 text-sm">{filtered[active].college}</p>
                        <p className="text-[#48cae4] text-xs font-semibold">{filtered[active].course} · {filtered[active].rank} · {filtered[active].year}</p>
                      </div>
                    </div>
                    <span className="text-white/60 text-xs font-semibold bg-white/10 rounded-full px-3 py-1.5">{filtered[active].state}</span>
                  </div>
                </div>

                {/* Dot navigation */}
                <div className="flex items-center justify-center gap-2 mt-5">
                  {filtered.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setActive(i); clearInterval(intervalRef.current) }}
                      className={`rounded-full transition-all duration-300 ${
                        i === active ? 'w-6 h-2.5 bg-[#0a3d62]' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-[#1a6fa8]/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Side mini cards */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                {filtered.filter((_, i) => i !== active).slice(0, 3).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActive(filtered.indexOf(t))}
                    className="text-left group bg-white rounded-2xl border border-slate-100 hover:border-[#1a6fa8]/30 hover:shadow-md p-5 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white text-xs font-bold">{t.avatar}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-[#0a3d62] text-sm font-bold truncate">{t.name}</p>
                          <StarRating rating={t.rating} />
                        </div>
                        <p className="text-slate-400 text-xs truncate">{t.college}</p>
                        <p className="text-slate-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">"{t.text}"</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── ALL TESTIMONIALS GRID ── */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 space-y-2">
            <p className="text-[#48cae4] text-xs font-bold uppercase tracking-widest">All Reviews</p>
            <h2 className="text-3xl font-black text-[#0a3d62]" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
              Every Story Counts
            </h2>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="break-inside-avoid bg-white rounded-2xl border border-slate-100 hover:border-[#1a6fa8]/20 hover:shadow-lg p-6 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <StarRating rating={t.rating} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a6fa8] bg-[#eff8ff] border border-[#1a6fa8]/15 rounded-full px-2.5 py-1">
                    {t.category}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-50">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs font-bold">{t.avatar}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[#0a3d62] text-sm font-bold truncate">{t.name}</p>
                    <p className="text-slate-400 text-xs truncate">{t.college}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[#48cae4] text-xs font-bold">{t.rank}</p>
                    <p className="text-slate-400 text-[10px]">{t.state} · {t.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-[#071e2e] to-[#0a3d62] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#48cae4] animate-ping" />
            <span className="text-[#48cae4] text-xs font-bold uppercase tracking-widest">Your Turn</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
            Join 90,000+ students who trusted MedConsult to navigate their NEET journey. Let our experts guide you to your dream medical college.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact_us"
              className="flex items-center gap-2 bg-gradient-to-r from-[#48cae4] to-[#1a6fa8] hover:from-[#1a6fa8] hover:to-[#0a3d62] text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 group"
            >
              Get Free Counselling
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200"
            >
              <svg className="w-4 h-4 text-[#48cae4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.5)] flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Marquee animation styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  )
}