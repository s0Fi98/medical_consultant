'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about_us' },
    // {
    //   label: 'MBBS Admission',
    //   dropdown: [
    //     { label: 'NEET UG Counselling', href: '/mbbs_admission/neet_ug' },
    //     { label: 'NEET PG Counselling', href: '/mbbs_admission/neet_pg' },
    //     { label: 'Admissions in India', href: '/mbbs_admission/admissions_india' },
    //     { label: 'Study Abroad', href: '/mbbs_admission/study_abroad' },
    //   ],
    // },
    {
      label: 'Countries',
      dropdown: [
        { label: 'Russia', href: '/countries/russia' },
        { label: 'Uzbekistan', href: '/countries/uzbekistan' },
        { label: 'Kyrgyzstan', href: '/countries/kyrgyzstan' },
        { label: 'Georgia', href: '/countries/georgia' },
        { label: 'Bangladesh', href: '/countries/bangladesh' },
      ],
    },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blogs', href: '/blogs' },
    {
      label: 'NEET Predictor',
      dropdown: [
        { label: 'NEET UG College Predictor', href: '/neet_predictor/ug_college' },
        { label: 'Predictor Tool', href: '/neet_predictor/tool' },
      ],
    },
    { label: 'Contact Us', href: '/contact_us' },
  ]

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0a3d62] text-white text-xs py-1.5 px-6 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#48cae4]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +91 69000 35233
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#48cae4]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            edumedabroad97@gmail.com
          </span>
        </div>
        <span className="text-[#90e0ef]">Mon – Sat: 9:00 AM – 6:00 PM</span>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white shadow-[0_4px_24px_rgba(10,61,98,0.12)]'
          : 'bg-white border-b border-slate-100'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0a3d62] to-[#1a6fa8] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div> */}
            <div className=''>
              <Image src="/EduMed_Logo.png" alt="Logo" width={62} height={62} />
            </div>
            <div className="leading-tight">
              <div className="text-[#0a3d62] font-bold text-md tracking-tight" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
                EduMed Abroad Services
              </div>
              <div className="text-[#1a6fa8] text-[9px] tracking-widest uppercase font-semibold -mt-0.5">
                Your Career, Our Mission
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#1a6fa8] rounded-lg hover:bg-[#eff8ff] transition-all duration-200">
                      {item.label}
                      <svg
                        className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1a6fa8] transition-transform duration-200 group-hover:rotate-180"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-1 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-[0_8px_32px_rgba(10,61,98,0.15)] border border-slate-100 overflow-hidden py-1.5">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-600 hover:text-[#1a6fa8] hover:bg-[#eff8ff] transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#48cae4] flex-shrink-0"></span>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#1a6fa8] rounded-lg hover:bg-[#eff8ff] transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact_us"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#0a3d62] to-[#1a6fa8] hover:from-[#0c4a77] hover:to-[#1e7fc0] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              Free Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 bg-[#0a3d62] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-5 h-0.5 bg-[#0a3d62] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-[#0a3d62] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-slate-100 bg-white ${mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <details className="group/det">
                    <summary className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 rounded-lg hover:bg-[#eff8ff] cursor-pointer list-none">
                      {item.label}
                      <svg className="w-4 h-4 text-slate-400 group-open/det:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-[#48cae4] pl-3">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-3 py-2 text-sm text-slate-600 hover:text-[#1a6fa8] rounded-lg hover:bg-[#eff8ff] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-[#1a6fa8] rounded-lg hover:bg-[#eff8ff] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 pb-1">
              <Link
                href="/contact_us"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#0a3d62] to-[#1a6fa8] text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-md"
                onClick={() => setMobileOpen(false)}
              >
                Free Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}