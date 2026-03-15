'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Animated counter hook
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatCard({ icon, value, suffix, label, started }) {
  const count = useCounter(value, 2200, started)
  return (
    <div className="flex flex-col items-center gap-3 group">
      <div className="w-20 h-20 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center group-hover:bg-white/25 transition-all duration-300">
        <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <div className="text-4xl font-black text-white tracking-tight">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-[#48cae4] text-sm font-semibold text-center leading-tight">{label}</div>
    </div>
  )
}

export default function AboutUs() {
  const statsRef = useRef(null)
  const [statsStarted, setStatsStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="font-sans bg-white">

      {/* ── HERO BANNER ── */}
      <section className="relative bg-[#0a3d62] overflow-hidden min-h-[340px] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#48cae4] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1a6fa8] rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 flex-1">
            {/* <div className="flex items-center gap-2 text-xs text-[#48cae4]/80">
              <Link href="/" className="hover:text-[#48cae4] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </div> */}
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
              ABOUT
              <span className="block text-[#48cae4]">US</span>
            </h1>
            <p className="text-slate-300 text-base max-w-md leading-relaxed">
              India's one of the trusted MBBS admission consultancy — guiding aspiring doctors since 2025.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              {['Since 2025', 'NMC Approved', '50+ Students'].map(tag => (
                <span key={tag} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#48cae4]" />{tag}
                </span>
              ))}
            </div>
          </div>
          {/* Decorative card */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="relative w-72 h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-[#48cae4]/30 to-[#1a6fa8]/20 rounded-[2.5rem] rotate-6 border border-white/20" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a3d62]/80 to-[#1a6fa8]/60 rounded-[2rem] -rotate-3 border border-white/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center">
                  <svg className="w-9 h-9 text-[#48cae4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <p className="text-white font-bold text-lg text-center" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>EduMed Abroad Services</p>
                <p className="text-[#48cae4] text-xs text-center">Medical Education Consultants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#eff8ff] border border-[#1a6fa8]/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#48cae4]" />
            <span className="text-[#1a6fa8] text-xs font-semibold uppercase tracking-wider">Who We Are</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a3d62] leading-tight" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
            EduMed Abroad Services – Medical Education Consultants
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            {/* If you're serious about getting into medical school, you need the best NEET Counselling. And that's exactly what we offer at MedConsult. We have a team of young specialists dedicated to helping you with every aspect of the process, from the initial application to the final paperwork and admission procedures. */}
            At EduMed Abroad, we are dedicated to helping aspiring medical students achieve their dream of becoming successful doctors through globally recognized MBBS programs. With increasing competition and limited medical seats in India, studying MBBS abroad has become a practical and affordable solution for many students
          </p>
          <p className="text-slate-500 text-base leading-relaxed">
            {/* Whether you're looking to study in India or anywhere else in the world, we can help you get into the medical school of your dreams. Our cutting-edge offerings are tailored to meet the needs of NEET aspirants at both the undergraduate and postgraduate levels. */}
            We provide complete admission guidance for top medical universities that are compliant with NMC guidelines and recognized by international medical bodies such as WHO. Our goal is to ensure students receive high-quality education, modern infrastructure, and strong clinical exposure in a safe & supportive environment.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Expert NEET Counselling' },
              { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: 'India & Abroad Admissions' },
              { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: 'UG & PG Guidance' },
              { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Personalised Support' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-[#f0fdf4] border border-green-200 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
                <span className="text-slate-700 text-xs font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right image placeholder */}
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-[#e8f4fd] to-[#dbeafe] rounded-3xl overflow-hidden border border-[#1a6fa8]/10 flex items-center justify-center">
            {/* <div className="text-center space-y-3 p-8">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#0a3d62] to-[#1a6fa8] flex items-center justify-center mx-auto shadow-xl">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <p className="text-[#0a3d62] font-bold text-lg" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>Your Dream Doctor Career</p>
              <p className="text-slate-500 text-sm">Replace with your team photo</p>
            </div> */}
            <Image src="/EduMed Abroad students.png" alt="Doctor" width={600} height={600} className="rounded-3xl mx-auto shadow-xl" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-slate-100 px-5 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0a3d62] to-[#1a6fa8] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <div>
              <p className="text-[#0a3d62] font-black text-xl leading-none">1+</p>
              <p className="text-slate-500 text-xs font-medium">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-gradient-to-r from-[#0a3d62] to-[#1a6fa8]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/15 border border-white/30 flex items-center justify-center flex-shrink-0 animate-pulse">
              <svg className="w-6 h-6 text-[#48cae4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-lg">If You Have Any Query, Feel Free To Call Us On</p>
              <p className="text-[#48cae4] font-black text-2xl tracking-wide">+91 69000 35233</p>
            </div>
          </div>
          <a
            href="tel:+916900035233"
            className="flex-shrink-0 border-2 border-white text-white hover:bg-white hover:text-[#0a3d62] font-semibold px-8 py-3 rounded-xl transition-all duration-200 text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Now
          </a>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-2">
            <p className="text-[#48cae4] text-xs font-bold uppercase tracking-widest">What Drives Us</p>
            <h2 className="text-3xl font-black text-[#0a3d62]" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
              EduMed's Vision & Mission
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Our Mission',
                icon: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
                text: 'Our mission is to be a one-stop solution for all medical aspirants to guide them throughout their NEET journey so they can get MBBS admissions to the college of their choice. We assure all deserving Medical Aspirants to secure their seats with our counselling assistance and expertise since 2025 in medical counselling for Indian students.',
                color: 'from-[#0a3d62] to-[#1a6fa8]',
                bg: 'bg-[#eff8ff]',
                accent: 'text-[#1a6fa8]',
              },
              {
                title: 'Our Vision',
                icon: 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
                text: 'Our vision is to be the number one provider of NEET Counselling services in India, and we\'re well on our way to achieving that goal. With our unrivalled experience and expertise, we can offer our clients the best chance of getting into the best medical colleges.',
                color: 'from-[#0a3d62] to-[#48cae4]',
                bg: 'bg-[#ecfeff]',
                accent: 'text-[#0891b2]',
              },
            ].map(({ title, icon, text, color, bg, accent }) => (
              <div key={title} className={`${bg} rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300`}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md`}>
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <h3 className={`text-xl font-black ${accent} mb-3`} style={{ fontFamily: "'Merriweather', Georgia, serif" }}>{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS / ACHIEVEMENTS ── */}
      <section ref={statsRef} className="bg-gradient-to-br from-[#071e2e] via-[#0a3d62] to-[#1a6fa8] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-2">
            <p className="text-[#48cae4] text-xs font-bold uppercase tracking-widest">By The Numbers</p>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
              Our Achievements as Medical Education Consultants
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCard
              icon="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"
              value={50} suffix="+" label="Students Assisted" started={statsStarted}
            />
            <StatCard
              icon="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              value={50} suffix="+" label="Counselling One to One" started={statsStarted}
            />
            <StatCard
              icon="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              value={50} suffix="+" label="MBBS Admissions" started={statsStarted}
            />
            <StatCard
              icon="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              value={50} suffix="+" label="MD & MS Admissions" started={statsStarted}
            />
          </div>
        </div>
      </section>

      {/* ── OUR PROMISE ── */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#eff8ff] border border-[#1a6fa8]/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#48cae4]" />
            <span className="text-[#1a6fa8] text-xs font-semibold uppercase tracking-wider">Our Commitment</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a3d62] leading-tight" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
            Our Promise – Assured MBBS Admissions in India & Abroad
          </h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-3xl mx-auto">
            We promise to provide you with guaranteed <strong className="text-[#0a3d62]">MBBS Admissions in India</strong> with expert NEET Counselling Services to secure the MBBS Seats in their dream medical college or university in India. If you have qualified NEET then we assure you that we can get your <strong className="text-[#0a3d62]">MBBS Admissions</strong> done at any cost. We'll help you understand the process from start to finish and give you all the tips you need to ace your interviews.
          </p>
          {/* Promise pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {[
              { icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', label: 'Guaranteed Admission' },
              { icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25', label: 'Expert Guidance' },
              { icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z', label: 'Pan India Network' },
              { icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418', label: 'Study Abroad Options' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#1a6fa8]/30 hover:bg-[#eff8ff] transition-all duration-200 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a3d62] to-[#1a6fa8] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <p className="text-[#0a3d62] text-xs font-bold text-center leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLEVER CONTACT CTA ── */}
      <section className="bg-[#e8f4fd] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-[#071e2e] to-[#0a3d62] rounded-3xl overflow-hidden p-10 md:p-14">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#1a6fa8]/20 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#48cae4]/10 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#48cae4] animate-ping" />
                  <span className="text-[#48cae4] text-xs font-bold uppercase tracking-widest">We're Here For You</span>
                </div>
                <h3 className="text-white text-3xl md:text-4xl font-black leading-tight" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
                  Ready to Start Your Medical Journey?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  Don't navigate NEET admissions alone. Our experts are just a call or click away — reach out and let's make your dream a reality.
                </p>
              </div>

              {/* Contact option cards */}
              <div className="flex flex-col gap-4 flex-shrink-0 w-full md:w-auto">
                <a
                  href="tel:+919876543210"
                  className="group flex items-center gap-4 bg-white/10 hover:bg-white border border-white/20 hover:border-transparent rounded-2xl px-6 py-4 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#48cae4] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white group-hover:text-[#0a3d62] text-xs font-semibold uppercase tracking-wider transition-colors">Call Us Now</p>
                    <p className="text-[#48cae4] group-hover:text-[#1a6fa8] font-black text-lg transition-colors">+91 69000 35233</p>
                  </div>
                  <svg className="w-4 h-4 text-white/40 group-hover:text-[#1a6fa8] ml-auto group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <Link
                  href="https://wa.me/918527158440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white/10 hover:bg-green-500 border border-white/20 hover:border-transparent rounded-2xl px-6 py-4 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-500 group-hover:bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all">
                    <svg className="w-5 h-5 text-white group-hover:text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold uppercase tracking-wider">WhatsApp Us</p>
                    <p className="text-green-400 group-hover:text-white font-black text-lg transition-colors">Chat Instantly</p>
                  </div>
                  <svg className="w-4 h-4 text-white/40 group-hover:text-white ml-auto group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="/contact_us"
                  className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#48cae4] to-[#1a6fa8] hover:from-[#1a6fa8] hover:to-[#0a3d62] rounded-2xl px-6 py-4 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="text-white font-bold text-sm">Send Us a Detailed Query</span>
                  <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp floating button */}
      {/* <Link
        href="https://wa.me/918527158440"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.5)] flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link> */}

    </main>
  )
}