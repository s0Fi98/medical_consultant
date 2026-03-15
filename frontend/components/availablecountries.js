'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ── COUNTRY DATA ──────────────────────────────────────────────
// To update a flag: change the `flag` field to your image path e.g. '/flags/russia.png'
// To update a landscape: change the `image` field to your image path e.g. '/countries/russia.jpg'
const countries = [
  {
    id: 1,
    name: 'Russia',
    slug: 'russia',
    flag: '/Flag_of_Russia.svg.png',                  // ← replace with '/flags/russia.png'
    image: '/russian_college.jpg',                 // ← replace with '/countries/russia.jpg'
    flagEmoji: '🇷🇺',
    duration: '6 Years',
    avgFee: '₹20–35 Lakhs',
    topUniversity: 'Sechenov University',
    highlight: 'Most Popular',
    bgGradient: 'from-red-800 to-red-600',
    cardAccent: '#dc2626',
  },
  {
    id: 2,
    name: 'Georgia',
    slug: 'georgia',
    flag: '/georgia_flag.png',
    image: '/georgia_college.jpg',
    flagEmoji: '🇬🇪',
    duration: '6 Years',
    avgFee: '₹25–40 Lakhs',
    topUniversity: 'Tbilisi State Medical Univ.',
    highlight: 'Trending',
    bgGradient: 'from-red-700 to-slate-800',
    cardAccent: '#b91c1c',
  },
  {
    id: 3,
    name: 'Kyrgyzstan',
    slug: 'kyrgyzstan',
    flag: '/kyrgy_flag.png',
    image: '/kyrgy_college.jpg',
    flagEmoji: '🇰🇬',
    duration: '6 Years',
    avgFee: '₹15–25 Lakhs',
    topUniversity: 'Kyrgyz State Medical Academy',
    highlight: 'Most Affordable',
    bgGradient: 'from-red-700 to-red-500',
    cardAccent: '#b91c1c',
  },
  {
    id: 4,
    name: 'Uzbekistan',
    slug: 'uzbekistan',
    flag: '/uzbek_flag.png',
    image: '/uzbek_college.jpg',
    flagEmoji: '🇺🇿',
    duration: '6 Years',
    avgFee: '₹18–30 Lakhs',
    topUniversity: 'Tashkent Medical Academy',
    highlight: 'Emerging Destination',
    bgGradient: 'from-sky-600 to-green-600',
    cardAccent: '#0284c7',
  },
  {
    id: 5,
    name: 'Bangladesh',
    slug: 'bangladesh',
    flag: '/bangladesh_flag.png',
    image: '/bangladesh_college.jpg',
    flagEmoji: '🇧🇩',
    duration: '5.5 Years',
    avgFee: '₹25–35 Lakhs',
    topUniversity: 'Dhaka Medical College',
    highlight: 'English Medium',
    bgGradient: 'from-blue-800 to-yellow-600',
    cardAccent: '#1d4ed8',
  },
]

const highlightColors = {
  'Most Popular': 'bg-orange-100 text-orange-600 border-orange-200',
  'Trending': 'bg-purple-100 text-purple-600 border-purple-200',
  'English Medium': 'bg-blue-100 text-blue-600 border-blue-200',
  'Budget Friendly': 'bg-green-100 text-green-600 border-green-200',
  'WHO Recognised': 'bg-teal-100 text-teal-600 border-teal-200',
  'European Degree': 'bg-indigo-100 text-indigo-600 border-indigo-200',
  'NMC Approved': 'bg-emerald-100 text-emerald-600 border-emerald-200',
  'Most Affordable': 'bg-lime-100 text-lime-600 border-lime-200',
  'Emerging Destination': 'bg-sky-100 text-sky-600 border-sky-200',
}

// ── COUNTRY CARD ──────────────────────────────────────────────
function CountryCard({ country }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/mbbs_admission/study_abroad/${country.slug}`}
      className="group block bg-white rounded-3xl border border-slate-100 hover:border-[#1a6fa8]/20 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Landscape image area ── */}
      <div className="relative h-44 overflow-hidden">
        {country.image ? (
          <img
            src={country.image}
            alt={`MBBS in ${country.name}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Placeholder gradient until you add real images */
          <div className={`w-full h-full bg-gradient-to-br ${country.bgGradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
            <span className="text-white/20 font-black text-5xl select-none" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
              {country.name[0]}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            {/* Replace image hint overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="bg-black/40 text-white text-[10px] font-semibold px-3 py-1 rounded-full">
                Add image: /countries/{country.slug}.jpg
              </span>
            </div>
          </div>
        )}

        {/* Highlight badge — top left */}
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-bold uppercase tracking-wider border rounded-full px-2.5 py-1 bg-white/90 backdrop-blur-sm ${highlightColors[country.highlight]}`}>
            {country.highlight}
          </span>
        </div>

        {/* Flag circle — bottom centre, overlapping */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-10">
          <div className="w-14 h-14 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center">
            {country.flag ? (
              /* ── Real flag image ── replace flag: null with '/flags/russia.png' etc. */
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="w-full h-full object-cover"
              />
            ) : (
              /* Emoji fallback until real flag images are added */
              <span className="text-2xl leading-none">{country.flagEmoji}</span>
            )}
          </div>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="pt-9 px-5 pb-5 space-y-3">
        {/* Country name */}
        <h3
          className="text-center text-[#0a3d62] font-black text-lg group-hover:text-[#1a6fa8] transition-colors"
          style={{ fontFamily: "'Merriweather', Georgia, serif" }}
        >
          MBBS in {country.name}
        </h3>

        {/* Stats row */}
        <div className="flex items-center justify-between text-xs pt-1">
          <div className="text-center">
            <p className="text-slate-400 font-medium">Duration</p>
            <p className="text-[#0a3d62] font-bold mt-0.5">{country.duration}</p>
          </div>
          <div className="w-px h-8 bg-slate-100" />
          <div className="text-center">
            <p className="text-slate-400 font-medium">Avg. Cost</p>
            <p className="text-[#0a3d62] font-bold mt-0.5">{country.avgFee}</p>
          </div>
          <div className="w-px h-8 bg-slate-100" />
          <div className="text-center max-w-[90px]">
            <p className="text-slate-400 font-medium">Top Univ.</p>
            <p className="text-[#0a3d62] font-bold mt-0.5 leading-tight line-clamp-2">{country.topUniversity}</p>
          </div>
        </div>

        {/* CTA */}
        <div className={`flex items-center justify-center gap-1.5 text-xs font-bold transition-all duration-200 pt-1 ${hovered ? 'text-[#1a6fa8]' : 'text-slate-400'}`}>
          Learn More
          <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${hovered ? 'translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

// ── MAIN COMPONENT ────────────────────────────────────────────
export default function StudyAbroadCountries() {
  return (
    <section className="bg-[#e8f4fd] py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Top intro ── */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white border border-[#1a6fa8]/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#48cae4]" />
            <span className="text-[#1a6fa8] text-xs font-bold uppercase tracking-widest">Study Abroad</span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-black text-[#0a3d62] leading-tight"
            style={{ fontFamily: "'Merriweather', Georgia, serif" }}
          >
            Best MBBS Abroad Destinations for Indian Students (2025–26)
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Choosing the right MBBS abroad destination is crucial. At EduMed, we carefully select only the best medical universities that are <strong className="text-[#0a3d62]">100% NMC, WHO, and ECFMG compliant</strong> — ensuring your degree is globally recognised. From free counselling to visa processing and accommodation arrangements, we provide complete end-to-end support for students aspiring to study medicine overseas.
          </p>
        </div>

        {/* ── Countries grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {countries.map(country => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 text-center space-y-4">
          <p className="text-slate-500 text-sm">Not sure which country is right for you?</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact_us"
              className="group flex items-center gap-2 bg-gradient-to-r from-[#0a3d62] to-[#1a6fa8] hover:from-[#0c4a77] hover:to-[#1e7fc0] text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get Free Counselling
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="https://wa.me/918527158440"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ask on WhatsApp
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}