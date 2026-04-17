'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ── WHY CHOOSE US — reasons list (from screenshots)
const whyChooseUs = [
  {
    icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
    title: '1+ Years of MBBS Abroad Counselling',
    desc: 'More then one years of hands-on experience guiding Indian students to top medical universities worldwide.',
  },
  {
    icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
    title: 'Highly Experienced MBBS Abroad Consultants',
    desc: 'Our team includes ex-university officials, visa experts, and senior academic counsellors.',
  },
  {
    icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
    title: 'International Experts & Foreign Counselors',
    desc: 'Direct partnerships with universities across Russia, Georgia, Kyrgyzstan, Uzbekistan, Bangladesh and more.',
  },
  {
    icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
    title: 'Connect with Indian Students Studying Abroad',
    desc: 'We connect you directly with current Indian students at your target university for authentic, honest insights.',
  },
  {
    icon: 'M2.25 21l8.954-8.955c.44-.439 1.152-.439 1.591 0l3.454 3.454c.44.44 1.152.44 1.591 0l6.16-6.16M3 9l9-9 9 9M3 12h18',
    title: 'Strong Network & Multiple Offices in India',
    desc: 'Offices across Delhi, Mumbai, Bangalore, Hyderabad — with local support wherever you are in India.',
  },
  {
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    title: 'Verified References from Your Local Area',
    desc: 'We provide local verified references from students and parents near you for complete peace of mind.',
  },
]

// ── WHY STUDY ABROAD — benefit cards (from screenshots)
const whyAbroadBenefits = [
  {
    emoji: '💰',
    title: 'Affordable Tuition Fee',
    desc: 'Study MBBS abroad at 30–60% lower cost than Indian private medical colleges. No capitation fees, no donations.',
    image: null, // ← replace with '/why-abroad/affordable.png'
    color: 'from-[#0a3d62] to-[#1a6fa8]',
  },
  {
    emoji: '🏥',
    title: 'Top Medical Universities',
    desc: 'World-class infrastructure, advanced labs, and experienced faculty at NMC-approved universities abroad.',
    image: null,
    color: 'from-[#1a6fa8] to-[#0891b2]',
  },
  {
    emoji: '✅',
    title: 'Approved by NMC & WHO',
    desc: 'All recommended universities are 100% compliant with NMC (formerly MCI), WHO, and ECFMG guidelines.',
    image: null,
    color: 'from-[#0a3d62] to-[#0891b2]',
  },
  {
    emoji: '📝',
    title: 'No Entrance Exam',
    desc: 'Most countries require only a valid NEET qualification — no additional entrance exam needed for admission.',
    image: null,
    color: 'from-[#1a6fa8] to-[#48cae4]',
  },
  {
    emoji: '🚫',
    title: 'No Donation, Direct Admissions',
    desc: 'Zero donation or management quota. Merit-based direct admissions with full transparency at every step.',
    image: null,
    color: 'from-[#0a3d62] to-[#1a6fa8]',
  },
  {
    emoji: '🌍',
    title: 'Global Exposure to Students',
    desc: 'Study alongside international peers, gain global perspectives, and build a worldwide medical network.',
    image: null,
    color: 'from-[#0891b2] to-[#0a3d62]',
  },
  {
    emoji: '🗣️',
    title: 'No IELTS / TOEFL Test',
    desc: 'English-medium programs in most countries. No language proficiency tests required for Indian students.',
    image: null,
    color: 'from-[#1a6fa8] to-[#0a3d62]',
  },
  {
    emoji: '🍛',
    title: 'Indian Food & Mess Facilities',
    desc: 'Dedicated Indian mess facilities available at most partner universities for a comfortable home-away-from-home.',
    image: null,
    color: 'from-[#0a3d62] to-[#48cae4]',
  },
]

// ── Animated check list item
function CheckItem({ icon, title, desc, index, visible }) {
  return (
    <div
      className="flex items-start gap-4 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-24px)',
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`,
      }}
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0a3d62] to-[#1a6fa8] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform shadow-md">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <div>
        <p className="text-[#0a3d62] font-bold text-sm leading-tight">{title}</p>
        <p className="text-slate-500 text-xs mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

// ── Benefit card
function BenefitCard({ benefit, index, visible }) {
  return (
    <div
      className="group bg-white rounded-3xl border border-slate-100 hover:border-[#1a6fa8]/25 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col items-center text-center p-6 gap-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s`,
      }}
    >
      {/* Circle image / emoji */}
      <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
        {benefit.image ? (
          <img
            src={benefit.image}
            alt={benefit.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${benefit.color} flex flex-col items-center justify-center gap-1`}>
            <span className="text-3xl leading-none">{benefit.emoji}</span>
            {/* Hint on hover */}
            <span className="text-white/0 group-hover:text-white/80 text-[8px] font-semibold transition-all duration-200 text-center px-1 leading-tight">
              Add image
            </span>
          </div>
        )}
      </div>

      <div>
        <h4
          className="text-[#0a3d62] font-black text-sm leading-snug group-hover:text-[#1a6fa8] transition-colors"
          style={{ fontFamily: "'Merriweather', Georgia, serif" }}
        >
          {benefit.title}
        </h4>
        <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">{benefit.desc}</p>
      </div>
    </div>
  )
}

// ── MAIN COMPONENT ────────────────────────────────────────────
export default function WhyChooseAndAbroad() {
  const chooseRef = useRef(null)
  const abroadRef = useRef(null)
  const [chooseVisible, setChooseVisible] = useState(false)
  const [abroadVisible, setAbroadVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setChooseVisible(true) }, { threshold: 0.15 })
    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAbroadVisible(true) }, { threshold: 0.1 })
    if (chooseRef.current) obs.observe(chooseRef.current)
    if (abroadRef.current) obs2.observe(abroadRef.current)
    return () => { obs.disconnect(); obs2.disconnect() }
  }, [])

  return (
    <div className="font-sans">

      {/* ══════════════════════════════════════════
          SECTION 1 — WHY CHOOSE EduMed
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20" ref={chooseRef}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT — text + list */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#eff8ff] border border-[#1a6fa8]/20 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-[#48cae4]" />
                <span className="text-[#1a6fa8] text-xs font-bold uppercase tracking-widest">Why EduMed Abroad Services</span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-black text-[#0a3d62] leading-tight"
                style={{ fontFamily: "'Merriweather', Georgia, serif" }}
              >
                Why Choose EduMed – MBBS Abroad Consultants in India?
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                EduMed has been a trusted name in MBBS abroad consultancy in India for over <strong className="text-[#0a3d62]">1+ years</strong>, helping aspiring medical students fulfil their dream of studying medicine overseas. With a strong commitment to transparency, reliability, and personalised guidance, we ensure students and their parents receive expert counselling at every step. We offer a <strong className="text-[#0a3d62]">free MBBS abroad consultation</strong> where our advisors analyse your academic background, career goals, and financial preferences to suggest the best-fit medical universities worldwide.
              </p>
            </div>

            {/* Check list */}
            <div className="space-y-4">
              {whyChooseUs.map((item, i) => (
                <CheckItem key={i} {...item} index={i} visible={chooseVisible} />
              ))}
            </div>

            <Link
              href="/contact_us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0a3d62] to-[#1a6fa8] hover:from-[#0c4a77] hover:to-[#1e7fc0] text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group text-sm"
            >
              Get Free Consultation
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* RIGHT — image placeholder + floating badges */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              {/* Circle image — replace null with your doctor/advisor image path */}
              {/* <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-[#e8f4fd] shadow-2xl bg-gradient-to-br from-[#0a3d62] to-[#1a6fa8] flex items-center justify-center">
                <div className="text-center space-y-2 px-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto">
                    <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-sm" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>Doctor Image Here</p>
                  <p className="text-white/60 text-xs"><br /></p>
                </div>
              </div> */}
              <Image src="/doctor_image.png" alt="Advisor" className="w-full h-full object-cover" width={250} height={250} />

              {/* Floating stat badges */}
              {[
                { val: '1+', sub: 'Years Experience', pos: '-top-4 -left-6' },
                { val: '30+', sub: 'Students Guided', pos: 'top-1/2 -right-8 -translate-y-1/2' },
                { val: '98%', sub: 'Success Rate', pos: '-bottom-4 left-8' },
              ].map(({ val, sub, pos }) => (
                <div key={val} className={`absolute ${pos} bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3`}>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0a3d62] to-[#1a6fa8] flex items-center justify-center">
                    <span className="text-white text-[10px] font-black leading-none">{val.replace('+', '').replace('%', '')}</span>
                  </div>
                  <div>
                    <p className="text-[#0a3d62] font-black text-base leading-none">{val}</p>
                    <p className="text-slate-400 text-[10px] font-medium mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — WHY STUDY MBBS ABROAD
      ══════════════════════════════════════════ */}
      <section className="bg-[#e8f4fd] py-20" ref={abroadRef}>
        <div className="max-w-7xl mx-auto px-6 space-y-14">

          {/* Top header + intro */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white border border-[#1a6fa8]/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#48cae4]" />
              <span className="text-[#1a6fa8] text-xs font-bold uppercase tracking-widest">Why Go Abroad</span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-black text-[#0a3d62] leading-tight"
              style={{ fontFamily: "'Merriweather', Georgia, serif" }}
            >
              Why Choose to Study MBBS Abroad?
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              While India remains an excellent destination for medical education, the <strong className="text-[#0a3d62]">highly competitive nature of NEET</strong> and the exorbitant fees of private medical colleges make it challenging for many aspirants. Countries abroad offer <strong className="text-[#0a3d62]">world-class medical education, affordable tuition fees, and globally recognised degrees</strong> from NMC-approved universities — making MBBS abroad in 2025–26 a smart, accessible choice for thousands of Indian students every year.
            </p>
          </div>

          {/* 8-benefit grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {whyAbroadBenefits.map((benefit, i) => (
              <BenefitCard key={i} benefit={benefit} index={i} visible={abroadVisible} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center space-y-4 pt-2">
            <p className="text-slate-500 text-sm">Ready to explore MBBS abroad options tailored to your budget and NEET score?</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact_us"
                className="group flex items-center gap-2 bg-gradient-to-r from-[#0a3d62] to-[#1a6fa8] hover:from-[#0c4a77] hover:to-[#1e7fc0] text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-sm"
              >
                Get Free MBBS Abroad Consultation
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="https://wa.me/918527158440"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}