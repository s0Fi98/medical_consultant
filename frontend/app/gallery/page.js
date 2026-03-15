'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ── GALLERY DATA ──────────────────────────────────────────────
// All images are landscape (like your uploaded photo — wide seminar/event shots)
// aspectRatio: '16/10' matches your uploaded image dimensions
// Add more by pushing to this array — the layout adapts automatically
// src: replace null with '/gallery/students/img1.jpg' etc.
const galleryImages = [
    {
        id: 1,
        src: '/white_coat.jpeg',
        caption: 'Welcome Day — Indian Students at University Abroad',
        tag: 'Campus Life',
    },
    {
        id: 2,
        src: '/white_coat_ceremony.jpeg',
        caption: 'Orientation Ceremony — Oath Taking & White Coat Day',
        tag: 'Orientation',
    },
    {
        id: 3,
        src: '/class_view.jpeg',
        caption: 'Classroom View',
        tag: 'Classroom',
    },
    {
        id: 4,
        src: '/Lab_class.jpeg',
        caption: 'Clinical Skills Lab — Hands-on Practical Training',
        tag: 'Laboratory',
    },
    {
        id: 5,
        src: '/hostel_room.jpeg',
        caption: 'Student Hostel Room — Clean & Fully Furnished',
        tag: 'Hostel',
    },
    {
        id: 6,
        src: '/Indian_lunch.jpeg',
        caption: 'Indian Mess Facility — Taste of Home Every Day',
        tag: 'Food',
    },
    // ← Add more images here
]

const tagColors = {
    'Seminar': 'bg-purple-100 text-purple-600 border-purple-200',
    'Classroom': 'bg-blue-100 text-blue-600 border-blue-200',
    'Campus Life': 'bg-green-100 text-green-600 border-green-200',
    'Orientation': 'bg-orange-100 text-orange-600 border-orange-200',
    'Hostel': 'bg-teal-100 text-teal-600 border-teal-200',
    'Food': 'bg-yellow-100 text-yellow-700 border-yellow-200',
}

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

    const img = images[idx]

    return (
        <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            <div className="relative w-full max-w-5xl" onClick={e => e.stopPropagation()}>
                {/* Image — landscape ratio preserved */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/10' }}>
                    <Image
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-full object-cover"
                        width={1920}
                        height={1080}
                    />
                    {/* Caption overlay */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-6 py-6">
                        <span className={`inline-block text-[10px] font-bold uppercase tracking-wider border rounded-full px-2.5 py-1 mb-2 ${tagColors[img.tag] || 'bg-white/20 text-white border-white/30'}`}>
                            {img.tag}
                        </span>
                        <p className="text-white font-semibold text-base">{img.caption}</p>
                        <p className="text-white/40 text-xs mt-1">{idx + 1} / {images.length} &nbsp;·&nbsp; ← → to navigate &nbsp;·&nbsp; Esc to close</p>
                    </div>
                </div>

                {/* Prev */}
                <button
                    onClick={() => setIdx(p => (p - 1 + images.length) % images.length)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-11 h-11 rounded-full bg-white/10 hover:bg-[#1a6fa8] border border-white/20 flex items-center justify-center transition-all"
                >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                {/* Next */}
                <button
                    onClick={() => setIdx(p => (p + 1) % images.length)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-11 h-11 rounded-full bg-white/10 hover:bg-[#1a6fa8] border border-white/20 flex items-center justify-center transition-all"
                >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-red-500 border border-white/20 flex items-center justify-center transition-all"
                >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Dot nav */}
                <div className="flex justify-center gap-2 mt-4">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIdx(i)}
                            className={`rounded-full transition-all duration-300 ${i === idx ? 'w-6 h-2.5 bg-[#48cae4]' : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

// ── FEATURED CAROUSEL (top 4 images auto-slide) ───────────────
function FeaturedCarousel({ images, onImageClick }) {
    const [current, setCurrent] = useState(0)
    const [prev, setPrev] = useState(null)
    const [direction, setDirection] = useState('right')
    const timerRef = useRef(null)

    const goTo = useCallback((idx, dir = 'right') => {
        setDirection(dir)
        setPrev(current)
        setCurrent(idx)
        clearInterval(timerRef.current)
        timerRef.current = setInterval(() => goTo((idx + 1) % images.length), 4500)
    }, [current, images.length])

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCurrent(p => (p + 1) % images.length)
        }, 4500)
        return () => clearInterval(timerRef.current)
    }, [images.length])

    const img = images[current]

    return (
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group" style={{ aspectRatio: '16/9' }}>
            {/* Slides */}
            {images.map((im, i) => (
                <div
                    key={im.id}
                    className="absolute inset-0 transition-all duration-700 ease-in-out"
                    style={{ opacity: i === current ? 1 : 0, transform: i === current ? 'scale(1)' : 'scale(1.03)' }}
                >
                    <img src={im.src} alt={im.caption} className="w-full h-full object-cover" />
                </div>
            ))}

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Click to enlarge */}
            <div
                className="absolute inset-0 cursor-zoom-in"
                onClick={() => onImageClick(current)}
            />

            {/* Zoom icon */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 inset-x-0 px-6 py-5">
                <span className={`inline-block text-[10px] font-bold uppercase tracking-wider border rounded-full px-2.5 py-1 mb-2 ${tagColors[img.tag] || 'bg-white/20 text-white border-white/30'}`}>
                    {img.tag}
                </span>
                <p className="text-white font-bold text-lg leading-snug drop-shadow">{img.caption}</p>
            </div>

            {/* Prev / Next */}
            <button
                onClick={(e) => { e.stopPropagation(); goTo((current - 1 + images.length) % images.length, 'left') }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-[#1a6fa8] backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); goTo((current + 1) % images.length, 'right') }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-[#1a6fa8] backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dot controls */}
            <div className="absolute bottom-4 right-6 flex gap-1.5">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); goTo(i) }}
                        className={`rounded-full transition-all duration-300 ${i === current ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
                    />
                ))}
            </div>
        </div>
    )
}

// ── MAIN PAGE ────────────────────────────────────────────────
export default function Gallery() {
    const [lightbox, setLightbox] = useState(null)
    const [visible, setVisible] = useState(false)
    const gridRef = useRef(null)

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.08 })
        if (gridRef.current) obs.observe(gridRef.current)
        return () => obs.disconnect()
    }, [])

    // First 4 go to carousel, rest to grid
    const carouselImages = galleryImages.slice(0, 4)
    const gridImages = galleryImages

    return (
        <main className="font-sans bg-white">

            {/* ── HERO BANNER ── */}
            <section className="relative bg-[#0a3d62] overflow-hidden min-h-[260px] flex items-center">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#48cae4] rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1a6fa8] rounded-full translate-x-1/3 translate-y-1/3" />
                    <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="relative max-w-7xl mx-auto px-6 py-14 w-full">
                    {/* <div className="flex items-center gap-2 text-xs text-[#48cae4]/80 mb-4">
            <Link href="/" className="hover:text-[#48cae4] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/gallery" className="hover:text-[#48cae4] transition-colors">Gallery</Link>
            <span>/</span>
            <span className="text-white">Our Students</span>
          </div> */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
                                OUR
                                <span className="block text-[#48cae4]">GALLERY</span>
                            </h1>
                            <p className="text-slate-300 text-sm mt-3 max-w-md">
                                Real moments. Real campuses. Real students who trusted EduMed to shape their medical careers.
                            </p>
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-4 py-2">
                            <span className="w-2 h-2 rounded-full bg-[#48cae4] animate-pulse" />
                            <span className="text-white text-xs font-semibold">{galleryImages.length} Photos &nbsp;·&nbsp; 100% Real</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEATURED AUTO-CAROUSEL ── */}
            <section className="bg-[#071e2e] py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#48cae4] animate-pulse" />
                        <p className="text-[#48cae4] text-xs font-bold uppercase tracking-widest">Featured Moments</p>
                    </div>
                    <FeaturedCarousel
                        images={carouselImages}
                        onImageClick={(i) => setLightbox(i)}
                    />
                </div>
            </section>

            {/* ── ALL PHOTOS GRID — 3 per row, landscape ratio ── */}
            <section ref={gridRef} className="bg-slate-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
                        <div>
                            <p className="text-[#48cae4] text-xs font-bold uppercase tracking-widest mb-1">All Photos</p>
                            <h2
                                className="text-2xl font-black text-[#0a3d62]"
                                style={{ fontFamily: "'Merriweather', Georgia, serif" }}
                            >
                                Gallery — {galleryImages.length} Moments
                            </h2>
                        </div>
                        <p className="text-slate-400 text-xs">Click any photo to expand</p>
                    </div>

                    {/* 3-column landscape grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {gridImages.map((img, i) => (
                            <div
                                key={img.id}
                                onClick={() => setLightbox(i)}
                                className="group relative overflow-hidden rounded-2xl cursor-zoom-in shadow-sm hover:shadow-xl transition-all duration-400 bg-[#071e2e]"
                                style={{
                                    aspectRatio: '16/10',          // ← matches your landscape photos
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
                                    transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s, box-shadow 0.3s ease`,
                                }}
                            >
                                {/* Photo */}
                                <Image
                                    src={img.src}
                                    alt={img.caption}
                                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-600 ease-out"
                                    style={{ '--tw-scale-x': 1.06, '--tw-scale-y': 1.06 }}
                                    width={1920}
                                    height={1080}
                                />

                                {/* Gradient — subtle always, stronger on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300" />

                                {/* Hover border */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#48cae4]/50 transition-all duration-300" />

                                {/* Tag badge — top left */}
                                <div className="absolute top-3 left-3">
                                    <span className={`text-[10px] font-bold uppercase tracking-wider border rounded-full px-2.5 py-1 bg-white/90 backdrop-blur-sm ${tagColors[img.tag] || 'text-slate-600 border-slate-200'}`}>
                                        {img.tag}
                                    </span>
                                </div>

                                {/* Zoom icon — top right on hover */}
                                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                    </svg>
                                </div>

                                {/* Caption — bottom, slides up on hover */}
                                <div className="absolute bottom-0 inset-x-0 px-4 py-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white text-sm font-semibold leading-snug drop-shadow line-clamp-2">{img.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add more hint */}
                    {/* <p className="text-center text-slate-400 text-xs mt-6 font-mono">
            💡 Add more photos to the <code className="bg-slate-200 px-1.5 py-0.5 rounded">galleryImages</code> array — grid fills automatically
          </p> */}
                </div>
            </section>

            {/* ── Trust bar ── */}
            <div className="bg-[#071e2e] py-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8">
                    {[
                        { emoji: '📷', text: '100% Real Photos — No Stock Images' },
                        { emoji: '✅', text: 'Verified by Our Students' },
                        { emoji: '🇮🇳', text: 'Indian Students Currently Studying Abroad' },
                    ].map(({ emoji, text }) => (
                        <div key={text} className="flex items-center gap-2 text-white/40 text-xs font-medium">
                            <span>{emoji}</span><span>{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* WhatsApp float */}
            {/* <Link href="https://wa.me/918527158440" target="_blank" rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.5)] flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </Link> */}

            {/* Lightbox */}
            {lightbox !== null && (
                <Lightbox
                    images={galleryImages}
                    startIndex={lightbox}
                    onClose={() => setLightbox(null)}
                />
            )}

        </main>
    )
}