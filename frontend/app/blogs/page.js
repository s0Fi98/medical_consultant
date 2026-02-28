'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const blogs = [
  {
    id: 1,
    slug: 'neet-ug-college-predictor-crucial-2025',
    category: 'NEET UG',
    title: 'Why Using a NEET UG College Predictor Is Crucial for 2025 Medical Counseling?',
    excerpt: 'Every year, several students dream of becoming doctors and appear for the NEET UG examination across India. Attempting the exam and clearing it is just the beginning. The real challenge lies in navigating the complex counseling process...',
    author: 'Sandeep',
    date: 'Jun 13, 2025',
    readTime: '5 min read',
    tag: 'Trending',
    color: 'from-[#0a3d62] to-[#1a6fa8]',
  },
  {
    id: 2,
    slug: 'neet-ug-rank-college-predictor',
    category: 'NEET UG',
    title: 'NEET UG Rank & College Predictor – Find Out Where You Stand!',
    excerpt: 'Your NEET UG rank determines which college you can get into. But with thousands of medical colleges across India, understanding where you stand can be overwhelming. Our predictor tool makes it simple...',
    author: 'Sandeep',
    date: 'May 28, 2025',
    readTime: '4 min read',
    tag: 'Popular',
    color: 'from-[#0a3d62] to-[#0891b2]',
  },
  {
    id: 3,
    slug: 'neet-ug-2025-overview',
    category: 'NEET UG',
    title: 'NEET UG 2025: An Overview',
    excerpt: 'NEET UG 2025 is around the corner and aspirants need to be fully prepared. From eligibility criteria to exam pattern, syllabus changes, and important dates — here is everything you need to know...',
    author: 'Priya Sharma',
    date: 'May 10, 2025',
    readTime: '6 min read',
    tag: 'Must Read',
    color: 'from-[#1a6fa8] to-[#48cae4]',
  },
  {
    id: 4,
    slug: 'understanding-neet-reservation-system',
    category: 'Counselling',
    title: 'Understanding the NEET Reservation System',
    excerpt: 'India\'s medical admission system uses a complex reservation structure. SC, ST, OBC, EWS, and PwD categories all have specific seat allocations. Understanding your category and quota can significantly improve your admission chances...',
    author: 'Rahul Verma',
    date: 'Apr 22, 2025',
    readTime: '7 min read',
    tag: 'Guide',
    color: 'from-[#0a3d62] to-[#1a6fa8]',
  },
  {
    id: 5,
    slug: 'mbbs-abroad-top-countries-2025',
    category: 'Study Abroad',
    title: 'Top Countries for MBBS Abroad in 2025: Complete Guide',
    excerpt: 'Studying MBBS abroad is becoming increasingly popular among Indian students. Countries like Russia, Ukraine, Philippines, and Georgia offer NMC-approved medical degrees at a fraction of the cost. Here\'s your complete guide...',
    author: 'Anita Gupta',
    date: 'Apr 5, 2025',
    readTime: '8 min read',
    tag: 'Guide',
    color: 'from-[#0891b2] to-[#0a3d62]',
  },
  {
    id: 6,
    slug: 'neet-pg-counselling-process',
    category: 'NEET PG',
    title: 'NEET PG Counselling Process Explained Step by Step',
    excerpt: 'NEET PG counselling is a multi-round process managed by MCC and state authorities. From registration to reporting at your allotted college, each step requires careful attention. Miss one deadline and you could lose your seat...',
    author: 'Dr. Ravi Kumar',
    date: 'Mar 18, 2025',
    readTime: '9 min read',
    tag: 'Detailed',
    color: 'from-[#1a6fa8] to-[#0a3d62]',
  },
]

const categories = ['All', 'NEET UG', 'NEET PG', 'Counselling', 'Study Abroad']

const tagColors = {
  'Trending': 'bg-orange-100 text-orange-600 border-orange-200',
  'Popular': 'bg-purple-100 text-purple-600 border-purple-200',
  'Must Read': 'bg-red-100 text-red-600 border-red-200',
  'Guide': 'bg-green-100 text-green-600 border-green-200',
  'Detailed': 'bg-blue-100 text-blue-600 border-blue-200',
}

export default function Blogs() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = blogs.filter(b => {
    const matchCat = activeCategory === 'All' || b.category === activeCategory
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main className="font-sans bg-white">

      {/* ── HERO ── */}
      <section className="relative bg-[#0a3d62] overflow-hidden min-h-[280px] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#48cae4] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1a6fa8] rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-14 w-full">
          <div className="flex items-center gap-2 text-xs text-[#48cae4]/80 mb-4">
            <Link href="/" className="hover:text-[#48cae4] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Blogs</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
                OUR
                <span className="block text-[#48cae4]">BLOGS</span>
              </h1>
              <p className="text-slate-300 text-sm mt-3 max-w-md">
                Expert insights on NEET counselling, MBBS admissions, and medical career guidance.
              </p>
            </div>
            {/* Search bar */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/25 text-white placeholder-white/50 rounded-2xl px-5 py-3.5 pr-12 text-sm focus:outline-none focus:bg-white/20 focus:border-[#48cae4]/60 transition-all"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <div className="border-b border-slate-100 bg-white sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 py-0 flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-4 text-sm font-semibold border-b-2 transition-all duration-200 ${
                activeCategory === cat
                  ? 'border-[#1a6fa8] text-[#1a6fa8]'
                  : 'border-transparent text-slate-500 hover:text-[#1a6fa8] hover:border-[#1a6fa8]/30'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto flex-shrink-0 text-xs text-slate-400 pl-4 py-4">
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* ── BLOG GRID ── */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        {filtered.length === 0 ? (
          <div className="text-center py-20 space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <p className="text-slate-500 font-medium">No articles found for "{search}"</p>
            <button onClick={() => { setSearch(''); setActiveCategory('All') }} className="text-[#1a6fa8] text-sm font-semibold hover:underline">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((blog, i) => (
              <article
                key={blog.id}
                className="group bg-white rounded-3xl border border-slate-100 hover:border-[#1a6fa8]/20 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Card image/banner area */}
                <div className={`relative h-48 bg-gradient-to-br ${blog.color} overflow-hidden flex-shrink-0`}>
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-8 -translate-y-8" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-6 translate-y-6" />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <span className={`text-[10px] font-bold uppercase tracking-widest border rounded-full px-3 py-1 mb-2 ${tagColors[blog.tag]}`}>
                      {blog.tag}
                    </span>
                    <span className="text-white/80 text-xs font-semibold uppercase tracking-wider bg-white/15 rounded-full px-3 py-1">
                      {blog.category}
                    </span>
                  </div>
                  {/* Article number watermark */}
                  <div className="absolute top-4 right-5 text-white/10 font-black text-7xl leading-none select-none" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <h2 className="text-[#0a3d62] font-bold text-base leading-snug group-hover:text-[#1a6fa8] transition-colors line-clamp-2" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
                    {blog.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1">
                    {blog.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-2 pt-1">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0a3d62] to-[#1a6fa8] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[10px] font-bold">{blog.author[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-600 truncate">{blog.author}</p>
                      <p className="text-[10px] text-slate-400">{blog.date}</p>
                    </div>
                    <span className="flex items-center gap-1 text-[10px] text-slate-400 flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Read more */}
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="mt-1 flex items-center gap-2 text-[#1a6fa8] text-sm font-semibold hover:gap-3 transition-all duration-200 group/link"
                  >
                    Read Article
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section className="bg-[#e8f4fd] py-14">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white border border-[#1a6fa8]/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#48cae4] animate-pulse" />
            <span className="text-[#1a6fa8] text-xs font-semibold uppercase tracking-wider">Stay Updated</span>
          </div>
          <h2 className="text-3xl font-black text-[#0a3d62]" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
            Never Miss an Important NEET Update
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Get counselling tips, admission alerts, and expert guidance delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white border border-slate-200 rounded-xl px-5 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a6fa8]/30 focus:border-[#1a6fa8] transition-all"
            />
            <button className="bg-gradient-to-r from-[#0a3d62] to-[#1a6fa8] hover:from-[#0c4a77] hover:to-[#1e7fc0] text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-md hover:shadow-lg transition-all duration-200 flex-shrink-0">
              Subscribe
            </button>
          </div>
          <p className="text-slate-400 text-xs">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.5)] flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

    </main>
  )
}