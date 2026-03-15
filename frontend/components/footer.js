import React from 'react'
import Link from 'next/link'

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    className="flex items-center gap-2 text-slate-300 hover:text-[#48cae4] text-sm transition-colors duration-200 group"
  >
    <span className="w-1.5 h-1.5 rounded-full bg-[#1a6fa8] group-hover:bg-[#48cae4] transition-colors flex-shrink-0" />
    {children}
  </Link>
)

export default function Footer() {
  return (
    <footer className="bg-[#071e2e] text-white">

      {/* ── Disclaimer Banner ── */}
      <div className="bg-[#0a3d62] border-b border-[#1a6fa8]/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-start gap-3">
          <svg className="w-5 h-5 text-[#48cae4] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-xs text-slate-300 leading-relaxed">
            <span className="text-[#48cae4] font-semibold">Disclaimer:</span> EduMed Abroad Services is an independent educational consultancy. We are not affiliated with NMC, MCI, or any government body. All information provided is for guidance purposes only. Please verify all details with the respective institutions before making admission decisions.
          </p>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Brand + About */}
        <div className="lg:col-span-1 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0a3d62] to-[#1a6fa8] flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-lg tracking-tight" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
                EduMed
              </div>
              <div className="text-[#48cae4] text-[10px] tracking-widest uppercase font-semibold -mt-0.5">
                Your Career, Our Mission
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            India's trusted MBBS admission consultancy. We guide aspiring doctors through NEET counselling, college selection, and study-abroad opportunities with transparency and expertise.
          </p>

          {/* Accreditation badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['NEET Experts', 'NMC Approved', 'ISO Certified'].map((badge) => (
              <span key={badge} className="text-[10px] font-semibold tracking-wide text-[#48cae4] border border-[#1a6fa8]/60 rounded-full px-3 py-1 bg-[#0a3d62]/40">
                ✓ {badge}
              </span>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 pt-1">
            {[
              { label: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
              { label: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11A4.5 4.5 0 0117.5 22h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z' },
              { label: 'YouTube', icon: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
              { label: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
            ].map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-[#0a3d62] hover:bg-[#1a6fa8] flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="space-y-5">
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest border-b border-[#1a6fa8]/40 pb-2">
            Quick Links
          </h3>
          <div className="space-y-2.5">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/blogs">Blogs</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms & Conditions</FooterLink>
            <FooterLink href="/refund-policy">Refund Policy</FooterLink>
          </div>
        </div>

        {/* Col 3 — Our Services */}
        <div className="space-y-5">
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest border-b border-[#1a6fa8]/40 pb-2">
            Our Services
          </h3>
          <div className="space-y-2.5">
            <FooterLink href="/neet-ug">NEET UG Counselling</FooterLink>
            <FooterLink href="/neet-pg">NEET PG Counselling</FooterLink>
            <FooterLink href="/admissions-india">Admissions in India</FooterLink>
            <FooterLink href="/study-abroad">Study Abroad (MBBS)</FooterLink>
            <FooterLink href="/predictor/ug">NEET UG College Predictor</FooterLink>
            <FooterLink href="/gallery/team">Our Team</FooterLink>
            <FooterLink href="/gallery/students">Our Students</FooterLink>
          </div>
        </div>

        {/* Col 4 — Contact + Hours */}
        <div className="space-y-5">
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest border-b border-[#1a6fa8]/40 pb-2">
            Get In Touch
          </h3>
          <div className="space-y-4">
            {[
              {
                icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                text: 'Station Road, Ward No. 9, Dhubri, Assam – 783301',
              },
              {
                icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                text: '+91 69000 35233\n+91 60036 83012',
              },
              {
                icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                text: 'edumedabroad97@gmail.com\nsupport.edumed@gmail.com',
              },
            ].map(({ icon, text }, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0a3d62] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#48cae4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">{text}</p>
              </div>
            ))}
          </div>

          {/* Office Hours */}
          <div className="bg-[#0a3d62]/50 rounded-xl p-4 border border-[#1a6fa8]/20 space-y-1.5">
            <p className="text-[#48cae4] text-xs font-semibold uppercase tracking-widest">Office Hours</p>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Mon – Sat</span>
              <span className="text-white font-medium">9:00 AM – 6:00 PM</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Sunday</span>
              <span className="text-red-400 font-medium">Closed</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-[#1a6fa8]/20" />

      {/* ── Bottom Bar ── */}
      <div className="bg-[#04141f]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} EduMed Abroad Services. All Rights Reserved.</span>
          <span className="flex items-center gap-1">
            Made with <span className="text-red-500 text-base leading-none">❤️</span> by{' '}
            <Link href="https://insightinnova.com" target="_blank" className="text-[#48cae4] font-semibold ml-0.5">Insight Innova</Link>
          </span>
        </div>
      </div>

    </footer>
  )
}