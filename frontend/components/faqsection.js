'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const faqData = [
  {
    category: 'NEET Counselling',
    icon: '🎓',
    questions: [
      {
        q: 'What is NEET UG counselling and how does it work?',
        a: 'NEET UG counselling is the process through which qualified NEET candidates are allotted seats in medical colleges based on their rank, category, and preferences. It is conducted by MCC (Medical Counselling Committee) for All India Quota seats and by respective state authorities for state quota seats. The process involves registration, choice filling, seat allotment, and reporting to the allotted college.',
      },
      {
        q: 'When does NEET UG 2025 counselling start?',
        a: 'NEET UG 2025 counselling typically begins 4–6 weeks after the NEET UG results are declared. MCC conducts 4 rounds: Round 1, Round 2, Mop-Up Round, and Stray Vacancy Round. Exact dates are announced by MCC on their official website. Our team monitors these dates in real time and will notify you immediately.',
      },
      {
        q: 'What is the difference between All India Quota and State Quota?',
        a: '15% of seats in government medical colleges are reserved under All India Quota (AIQ), managed by MCC. The remaining 85% are filled through State Quota counselling, managed by state authorities. Private colleges have their own separate counselling. Candidates can participate in both AIQ and their home state counselling simultaneously.',
      },
      {
        q: 'How does NEET PG counselling differ from NEET UG counselling?',
        a: 'NEET PG counselling is for MD/MS/Diploma admissions after completing MBBS. It follows a similar process but the seat matrix, college options, and speciality preferences are different. PG counselling has more rounds and the strategy for choice filling is much more critical — choosing the wrong order can cost you a better speciality. Our PG counselling experts guide you specifically for this.',
      },
    ],
  },
  {
    category: 'Admissions & Eligibility',
    icon: '📋',
    questions: [
      {
        q: 'What is the minimum NEET score required for MBBS admission in India?',
        a: 'For government medical colleges, General category candidates typically need 600+ marks for top colleges. For private colleges, the cutoff varies widely — some accept scores as low as 400–450. OBC/SC/ST categories have lower cutoffs. Our college predictor tool gives you an accurate picture based on your exact rank and category.',
      },
      {
        q: 'Can I get MBBS admission with a low NEET rank?',
        a: 'Yes! With a lower rank, you have options like private medical colleges in India, deemed universities, or MBBS abroad (NMC-approved universities in Russia, Georgia, Philippines, China, etc.). Our counsellors specialise in identifying the best realistic option for every rank range — no rank is too low for us to work with.',
      },
      {
        q: 'What documents are required for MBBS admission counselling?',
        a: 'Essential documents include: NEET scorecard, Class 10 & 12 mark sheets and certificates, identity proof (Aadhaar/Passport), category certificate (if applicable), domicile/state certificate, passport-size photos, and character certificate. For study abroad, a valid passport is mandatory. We provide a personalised document checklist based on your specific situation.',
      },
      {
        q: 'Is there an age limit for NEET?',
        a: 'The minimum age for NEET is 17 years as of December 31 of the admission year. There is currently no upper age limit for NEET UG after the Supreme Court struck down the previous 25/30 year restriction. For NEET PG, there is no age limit — you must have completed MBBS from a recognised institution.',
      },
    ],
  },
  {
    category: 'Study Abroad',
    icon: '✈️',
    questions: [
      {
        q: 'Which countries are best for MBBS abroad for Indian students?',
        a: 'Top destinations include Russia (Sechenov, Kazan), Georgia (Tbilisi State Medical University), Philippines (UST, AUF), China (Jilin, Capital Medical University), Kazakhstan, and Kyrgyzstan. These universities are NMC-approved and offer English-medium MBBS at much lower costs than Indian private colleges. We have direct tie-ups with reputed universities in all these countries.',
      },
      {
        q: 'Is an MBBS degree from abroad valid in India?',
        a: 'Yes — provided the university is listed in NMC\'s (National Medical Commission) approved list and you clear the FMGE (Foreign Medical Graduate Examination) / NExT exam after returning. We only recommend NMC-approved universities and provide FMGE preparation guidance as part of our post-admission support.',
      },
      {
        q: 'What is the total cost of MBBS abroad vs India?',
        a: 'MBBS abroad (Russia, Georgia, Philippines) typically costs ₹25–50 lakhs total for 5–6 years including tuition and living. Indian private MBBS can cost ₹50–1.5 crore. Government MBBS in India is the most affordable but extremely competitive. We give you a complete transparent cost comparison for every option.',
      },
    ],
  },
  {
    category: 'About EduMed Abroad Services',
    icon: '🏥',
    questions: [
      {
        q: 'How is EduMed Abroad Services different from other counselling services?',
        a: 'We have 20+ years of experience since 2003, a team of dedicated ex-MCC and state counselling experts, real-time monitoring of every counselling round, a 98% success rate, and zero commission from colleges — meaning our advice is always unbiased. We have guided 90,000+ students across India and abroad.',
      },
      {
        q: 'Is EduMed Abroad Services\'s counselling service free?',
        a: 'We offer a free initial consultation call where our experts assess your situation and guide you on the best path forward. Detailed personalised counselling packages are available at transparent, affordable fees — no hidden charges. Contact us to know about our current plans.',
      },
      {
        q: 'Can EduMed Abroad Services guarantee admission to a specific college?',
        a: 'No ethical consultancy can guarantee a specific college as admissions depend on your NEET rank, seat availability, and counselling rounds. However, we guarantee expert guidance to maximise your chances. Our 4,100+ MBBS admissions and 550+ MD/MS admissions speak for our track record.',
      },
    ],
  },
]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [openIndex, setOpenIndex] = useState(null)

  const allQuestions = faqData.flatMap((cat, ci) =>
    cat.questions.map((q, qi) => ({ ...q, catIndex: ci, qIndex: qi, key: `${ci}-${qi}` }))
  )
  const displayed = activeCategory === -1
    ? allQuestions
    : faqData[activeCategory].questions.map((q, qi) => ({ ...q, catIndex: activeCategory, qIndex: qi, key: `${activeCategory}-${qi}` }))

  const toggle = (key) => setOpenIndex(prev => prev === key ? null : key)

  return (
    <section className="bg-white py-20 font-sans">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#eff8ff] border border-[#1a6fa8]/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#48cae4]" />
            <span className="text-[#1a6fa8] text-xs font-bold uppercase tracking-widest">Got Questions?</span>
          </div>
          <h2
            className="text-4xl font-black text-[#0a3d62]"
            style={{ fontFamily: "'Merriweather', Georgia, serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
            Everything you need to know about NEET counselling, MBBS admissions, and how EduMed Abroad Services works.
          </p>
        </div>

        {/* ── Category pills ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[{ label: 'All Questions', icon: '💡' }, ...faqData.map(c => ({ label: c.category, icon: c.icon }))].map((cat, i) => {
            const idx = i === 0 ? -1 : i - 1
            const isActive = activeCategory === idx
            return (
              <button
                key={cat.label}
                onClick={() => { setActiveCategory(idx); setOpenIndex(null) }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0a3d62] text-white border-[#0a3d62] shadow-md'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-[#1a6fa8]/40 hover:text-[#1a6fa8]'
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* ── Accordion list ── */}
        <div className="space-y-3">
          {displayed.map((item) => {
            const isOpen = openIndex === item.key
            return (
              <div
                key={item.key}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#1a6fa8]/40 shadow-[0_4px_24px_rgba(10,61,98,0.1)] bg-white'
                    : 'border-slate-100 bg-white hover:border-[#1a6fa8]/20 hover:shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggle(item.key)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left group"
                >
                  {/* Number badge */}
                  <span className={`flex-shrink-0 w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center transition-all duration-200 ${
                    isOpen ? 'bg-[#0a3d62] text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-[#eff8ff] group-hover:text-[#1a6fa8]'
                  }`}>
                    {(item.qIndex + 1).toString().padStart(2, '0')}
                  </span>

                  <span className={`flex-1 text-sm font-semibold leading-snug transition-colors duration-200 ${
                    isOpen ? 'text-[#0a3d62]' : 'text-slate-700 group-hover:text-[#0a3d62]'
                  }`}>
                    {item.q}
                  </span>

                  {/* Category badge — shown in All mode */}
                  {activeCategory === -1 && (
                    <span className="hidden sm:block flex-shrink-0 text-[10px] font-bold uppercase tracking-wider text-[#48cae4] bg-[#eff8ff] border border-[#1a6fa8]/15 rounded-full px-2.5 py-1">
                      {faqData[item.catIndex].icon} {faqData[item.catIndex].category}
                    </span>
                  )}

                  {/* Chevron */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-[#0a3d62] rotate-180' : 'bg-slate-100 group-hover:bg-[#eff8ff]'
                  }`}>
                    <svg className={`w-4 h-4 transition-colors ${isOpen ? 'text-white' : 'text-slate-400 group-hover:text-[#1a6fa8]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Answer panel */}
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="px-6 pb-6">
                    <div className="ml-11 border-l-2 border-[#48cae4]/40 pl-5">
                      <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 relative bg-gradient-to-br from-[#0a3d62] to-[#071e2e] rounded-3xl p-10 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#1a6fa8]/20 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#48cae4]/10 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
          <div className="relative space-y-4">
            <p className="text-[#48cae4] text-xs font-bold uppercase tracking-widest">Still Confused?</p>
            <h3
              className="text-white text-2xl font-black"
              style={{ fontFamily: "'Merriweather', Georgia, serif" }}
            >
              Can't Find Your Answer? Talk to Our Experts.
            </h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Our counsellors are available 6 days a week to answer every question personally — no bots, no scripts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/contact_us"
                className="group flex items-center gap-2 bg-gradient-to-r from-[#48cae4] to-[#1a6fa8] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Ask Us Anything
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="https://wa.me/918527158440"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}