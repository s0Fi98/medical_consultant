'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const InputField = ({ placeholder, type = 'text', className = '', id, name, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    aria-label={placeholder}
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    className={`w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a6fa8]/40 focus:border-[#1a6fa8] transition-all duration-200 ${className}`}
  />
)

const SelectField = ({ placeholder, options, id, name, value, onChange }) => (
  <select
    aria-label={placeholder}
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a6fa8]/40 focus:border-[#1a6fa8] transition-all duration-200 appearance-none cursor-pointer"
  >
    <option value="" disabled>{placeholder}</option>
    {options.map(o => <option key={o} value={o} className="text-slate-700">{o}</option>)}
  </select>
)

export default function ContactUs() {

  const URL = process.env.NEXT_PUBLIC_GET_MAIL_URL
  const ACCESS_KEY = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY
  const ACCESS_KEY_2 = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY_2

  const initialQueryData = {
    query_name: '',
    query_phone: '',
    query_email: '',
    query_score: '',
    query_course: '',
    query_category: '',
    query_city: '',
    query_message: '',
  }

  const initialFormData = {
    name: '',
    phone: '',
    email: '',
    neet_score: '',
    course: '',
    category: '',
    city: '',
    message: '',
  }

  const [queryData, setQueryData] = useState(initialQueryData)
  const [formData, setFormData] = useState(initialFormData)
  const [submitted, setSubmitted] = useState(false)

  const handleQueryChange = (e) => {
    const { id, value } = e.target
    setQueryData(prev => ({ ...prev, [id]: value }))
  }

  const submitEnquiry = async (event) => {
    event.preventDefault()
    console.log(queryData)
    const payload = new FormData(event.target);
    payload.append("access_key", ACCESS_KEY);
    const response = await fetch(URL, {
      method: "POST",
      body: payload
    });

    const data = await response.json();
    if (data.success) {
      setQueryData(initialQueryData)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = new FormData(e.target);
    payload.append("access_key", ACCESS_KEY_2);
    const response = await fetch(URL, {
      method: "POST",
      body: payload
    });

    const data = await response.json();
    if (data.success) {
      setFormData(initialFormData)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    }
  };

  return (
    <main className="font-sans bg-slate-50">

      {/* ── HERO BANNER ── */}
      <section className="relative bg-[#0a3d62] overflow-hidden min-h-[340px] flex items-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#48cae4] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1a6fa8] rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left text */}
          <div className="space-y-4 flex-1">
            {/* Breadcrumb */}
            {/* <div className="flex items-center gap-2 text-xs text-[#48cae4]/80">
              <Link href="/" className="hover:text-[#48cae4] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Contact Us</span>
            </div> */}
            <h1
              className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none"
              style={{ fontFamily: "'Merriweather', Georgia, serif" }}
            >
              CONTACT
              <span className="block text-[#48cae4]">US</span>
            </h1>
            <p className="text-slate-300 text-base max-w-md leading-relaxed">
              Have questions about MBBS admissions or NEET counselling? We're here to guide you every step of the way.
            </p>
            {/* Quick info pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', text: '+91 60036 83021' },
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', text: 'edumedabroad97@gmail.com' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <svg className="w-3.5 h-3.5 text-[#48cae4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>x
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                  <span className="text-white text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — decorative doctor illustration box */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="relative w-72 h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a6fa8]/40 to-[#48cae4]/20 rounded-[2.5rem] rotate-6 border border-white/20" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a3d62]/80 to-[#1a6fa8]/60 rounded-[2rem] -rotate-3 border border-white/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                <div className="w-20 h-20 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#48cae4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-lg" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>Expert Guidance</div>
                  <div className="text-[#48cae4] text-xs mt-1">MBBS Admissions & NEET Counselling</div>
                </div>
                <div className="flex gap-2">
                  {['UG', 'PG', 'Abroad'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-white bg-[#1a6fa8]/60 border border-[#48cae4]/30 rounded-full px-2.5 py-1">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK ENQUIRY + INTRO ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Left — text */}
        <div className="space-y-6 pt-2">
          <div className="inline-flex items-center gap-2 bg-[#eff8ff] border border-[#1a6fa8]/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#48cae4] animate-pulse" />
            <span className="text-[#1a6fa8] text-xs font-semibold uppercase tracking-wider">We're Online</span>
          </div>
          <h2
            className="text-4xl font-black text-[#0a3d62] leading-tight"
            style={{ fontFamily: "'Merriweather', Georgia, serif" }}
          >
            Feel Free to Contact Us for Any Questions and Doubts
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            We invite you to contact us for your NEET UG and PG counselling and come up with all the questions that you long for. We know that we would be of much help to you and that is why we are here at your service. Simply pick up the phone and give us a call.
          </p>

          {/* Contact detail cards */}
          <div className="space-y-3 pt-2">
            {[
              {
                icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                label: 'Phone',
                value: '+91 69000 35233 / +91 60036 83021',
              },
              {
                icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                label: 'Email',
                value: 'edumedabroad97@gmail.com',
              },
              {
                icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                label: 'Address',
                value: 'Station Road, Ward No. 9, Dhubri, Assam – 783301',
              },
              {
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                label: 'Office Hours',
                value: 'Monday – Saturday: 9:00 AM to 6:00 PM',
              },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#1a6fa8]/20 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0a3d62] to-[#1a6fa8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#48cae4] uppercase tracking-widest">{label}</p>
                  <p className="text-slate-700 text-sm mt-0.5 leading-relaxed">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Quick Enquiry Form */}
        <div className="bg-gradient-to-br from-[#0a3d62] to-[#1a6fa8] rounded-3xl p-8 shadow-[0_20px_60px_rgba(10,61,98,0.3)] sticky top-24">
          <div className="text-center mb-7">
            <h3 className="text-white text-2xl font-bold" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
              Quick Enquiry
            </h3>
            <p className="text-[#48cae4] text-sm mt-1">Get a free consultation call today</p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 gap-4">
              <div className="w-16 h-16 rounded-full bg-green-400/20 border-2 border-green-400 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white text-center font-semibold">Thank you! We'll contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={submitEnquiry} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <InputField placeholder="Name *" id="query_name" name="query_name" value={queryData.query_name} onChange={handleQueryChange} />
                <InputField placeholder="Phone *" type="tel" id="query_phone" name="query_phone" value={queryData.query_phone} onChange={handleQueryChange} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <InputField placeholder="Email" type="email" id="query_email" name="query_email" value={queryData.query_email} onChange={handleQueryChange} />
                <InputField placeholder="NEET Score" type="number" id="query_score" name="query_score" value={queryData.query_score} onChange={handleQueryChange} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <SelectField
                    placeholder="Course"
                    id="query_course"
                    name="query_course"
                    value={queryData.query_course}
                    onChange={handleQueryChange}
                    options={['MBBS', 'BDS', 'BAMS', 'BHMS', 'MD', 'MS', 'MDS']}
                  />
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="relative">
                  <SelectField
                    placeholder="Category"
                    id="query_category"
                    name="query_category"
                    value={queryData.query_category}
                    onChange={handleQueryChange}
                    options={['General', 'OBC', 'SC', 'ST', 'EWS', 'PwD']}
                  />
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <InputField placeholder="City" id="query_city" name="query_city" value={queryData.query_city} onChange={handleQueryChange} />
              <textarea
                placeholder="Message (optional)"
                rows={3}
                id="query_message"
                name="query_message"
                value={queryData.query_message}
                onChange={handleQueryChange}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#48cae4]/40 focus:border-[#48cae4] transition-all duration-200 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-white hover:bg-[#eff8ff] text-[#0a3d62] font-bold py-3.5 rounded-xl text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Submit Enquiry
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <p className="text-[#48cae4]/70 text-xs text-center">🔒 Your information is 100% secure with us</p>
            </form>
          )}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-gradient-to-r from-[#0a3d62] to-[#1a6fa8]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/15 border border-white/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[#48cae4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">
                If You Have Any Query, Feel Free To Call Us On
              </p>
              <p className="text-[#48cae4] font-black text-xl tracking-wide">+91 69000 35233</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 border-2 border-white text-white hover:bg-white hover:text-[#0a3d62] font-semibold px-8 py-3 rounded-xl transition-all duration-200 text-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ── DETAILED CONTACT + FULL FORM ── */}
      <section className="bg-[#e8f4fd] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-[0_8px_48px_rgba(10,61,98,0.1)] overflow-hidden">
            <div className="grid md:grid-cols-5">

              {/* Left panel — contact info */}
              <div className="md:col-span-2 bg-gradient-to-br from-[#0a3d62] to-[#071e2e] p-10 flex flex-col justify-between gap-10">
                <div className="space-y-6">
                  <div>
                    <h3
                      className="text-white text-3xl font-black"
                      style={{ fontFamily: "'Merriweather', Georgia, serif" }}
                    >
                      Contact Us
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      Reach out to our team for personalized MBBS admission guidance.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {[
                      { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Email', value: 'support.edumed@gmail.com' },
                      { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'Phone', value: '+91 69000 35233' },
                      { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', label: 'Address', value: 'Station Road, Ward No. 9, Dhubri, Assam – 783301' },
                    ].map(({ icon, label, value }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#1a6fa8]/30 border border-[#48cae4]/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#48cae4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#48cae4] text-xs font-bold uppercase tracking-widest">{label}</p>
                          <p className="text-slate-300 text-sm mt-0.5 leading-relaxed">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative circles */}
                <div className="relative h-20">
                  <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full border-2 border-[#1a6fa8]/30 translate-x-8 translate-y-8" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-[#1a6fa8]/20 translate-x-4 translate-y-4" />
                  <div className="absolute bottom-4 right-8 w-4 h-4 rounded-full bg-[#48cae4]/60" />
                </div>
              </div>

              {/* Right panel — full form */}
              <div className="md:col-span-3 p-10">
                <h3
                  className="text-[#0a3d62] text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Merriweather', Georgia, serif" }}
                >
                  Send Your Query To Us
                </h3>
                <p className="text-slate-400 text-sm mb-8">Fill in the form and our team will reach out within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Name *" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a6fa8]/30 focus:border-[#1a6fa8] transition-all"
                      id='name' name='name' value={formData.name} onChange={handleChange} />
                    <input type="tel" placeholder="Phone *" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a6fa8]/30 focus:border-[#1a6fa8] transition-all"
                      id='phone' name='phone' value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="email" placeholder="Email" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a6fa8]/30 focus:border-[#1a6fa8] transition-all"
                      id='email' name='email' value={formData.email} onChange={handleChange} />
                    <input type="number" placeholder="NEET Score" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a6fa8]/30 focus:border-[#1a6fa8] transition-all"
                      id='neet_score' name='neet_score' value={formData.neet_score} onChange={handleChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a6fa8]/30 focus:border-[#1a6fa8] transition-all appearance-none cursor-pointer"
                        id='course' name='course' value={formData.course} onChange={handleChange}>
                        <option value="" disabled>Course</option>
                        {['MBBS', 'BDS', 'BAMS', 'BHMS', 'MD', 'MS', 'MDS'].map(o => <option key={o} className="text-slate-700">{o}</option>)}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <div className="relative">
                      <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a6fa8]/30 focus:border-[#1a6fa8] transition-all appearance-none cursor-pointer"
                        id='category' name='category' value={formData.category} onChange={handleChange}>
                        <option value="" disabled>Category</option>
                        {['General', 'OBC', 'SC', 'ST', 'EWS', 'PwD'].map(o => <option key={o} className="text-slate-700">{o}</option>)}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                  <input type="text" placeholder="City" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a6fa8]/30 focus:border-[#1a6fa8] transition-all"
                    id='city' name='city' value={formData.city} onChange={handleChange} />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a6fa8]/30 focus:border-[#1a6fa8] transition-all resize-none"
                    id='message' name='message' value={formData.message} onChange={handleChange} />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0a3d62] to-[#1a6fa8] hover:from-[#0c4a77] hover:to-[#1e7fc0] text-white font-bold py-4 rounded-xl text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    Submit Query
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-[#48cae4] text-xs font-bold uppercase tracking-widest">Find Us</p>
            <h3 className="text-[#0a3d62] text-2xl font-bold" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
              Our Location
            </h3>
          </div>
          <div className="w-full h-80 rounded-3xl overflow-hidden border border-slate-100 shadow-md">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d771.82713358901!2d89.9786158320785!3d26.022575328838148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1773567587979!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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