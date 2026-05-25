"use client"

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react'

// ── Helpers ──────────────────────────────────────────────────────────────────
const formatTime = (s) => {
  const m = Math.floor(s / 60).toString().padStart(2, '0')
  const sec = Math.floor(s % 60).toString().padStart(2, '0')
  return `${m}:${sec}`
}

const TOTAL = 108 // 1:48

// ── Sub-components ────────────────────────────────────────────────────────────

function TopBar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-12 pb-4 border-b-4 border-black gap-4 sm:gap-0">
      <div className="flex items-center gap-4">
        <span className="font-bold text-xs sm:text-sm tracking-widest uppercase bg-[#e1e61b] text-black border-2 border-black px-3 py-1 shadow-[4px_4px_0_0_#000]">
          Showreel 2026
        </span>
        <span className="font-bold text-xs sm:text-sm tracking-widest uppercase text-black">
          Motion & Identity
        </span>
      </div>
      <div className="font-bold text-xs sm:text-sm tracking-widest uppercase text-black flex gap-4">
        <span>FILE_SIZE: 2.4 GB</span>
        <span>RES: 4K</span>
      </div>
    </div>
  )
}

function HeroTitle() {
  return (
    <div className="mb-8 sm:mb-12">
      <h2 className="font-black text-6xl sm:text-[8rem] md:text-[10rem] leading-[0.85] tracking-tighter uppercase text-black break-words">
        The <br />
        <span className="text-white relative z-10 inline-block">
          <span className="absolute inset-0 bg-[#FF007F] -z-10 translate-y-2 sm:translate-y-4 -translate-x-2 sm:-translate-x-4 border-4 border-black" />
          <span className="relative text-stroke-black">Portfolio</span>
        </span>
      </h2>
    </div>
  )
}

function ControlsBar({ isPlaying, elapsed, progress, onToggle, onSeek, isMuted, toggleMute }) {
  const progressBarRef = useRef(null)

  const handleSeek = (e) => {
    if (!progressBarRef.current) return
    const rect = progressBarRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const pct = Math.max(0, Math.min(1, x / rect.width))
    onSeek(pct)
  }

  return (
    <div className="bg-white border-t-4 border-black flex flex-col">
      {/* Interactive Progress Bar */}
      <div
        ref={progressBarRef}
        className="w-full h-8 sm:h-12 bg-gray-200 cursor-pointer relative border-b-4 border-black"
        onClick={handleSeek}
      >
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#00E5FF] border-r-4 border-black"
          style={{ width: `${progress}%` }}
          layout
        />
        {/* Scrubber lines for aesthetic */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '10px 100%' }} />
      </div>

      {/* Buttons & Timers */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={onToggle}
            className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-black hover:bg-[#FF007F] hover:-translate-y-1 hover:translate-x-1 transition-all active:translate-y-1 active:translate-x-0 shadow-[4px_4px_0_0_#e1e61b] hover:shadow-[8px_8px_0_0_#e1e61b] active:shadow-none"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current" />
            ) : (
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current ml-1 sm:ml-2" />
            )}
          </button>
          <div className="flex items-baseline gap-2 font-black text-xl sm:text-3xl tracking-tighter">
            <span>{formatTime(elapsed)}</span>
            <span className="text-black/30">/</span>
            <span className="text-black/30">{formatTime(TOTAL)}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleMute} className="p-2 sm:p-3 bg-white border-4 border-black hover:bg-[#e1e61b] transition-colors shadow-[4px_4px_0_0_#000]">
            {isMuted ? <VolumeX className="w-6 h-6 sm:w-8 sm:h-8" /> : <Volume2 className="w-6 h-6 sm:w-8 sm:h-8" />}
          </button>
        </div>
      </div>
    </div>
  )
}

function StatsStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-t-4 border-black divide-x-0 sm:divide-x-4 divide-y-4 sm:divide-y-0 divide-black bg-white">
      {[
        { label: 'CLIENT', val: 'NIKE LABS' },
        { label: 'ROLE', val: 'CGI / MOTION' },
        { label: 'YEAR', val: '2026' },
        { label: 'AWARDS', val: 'Awwwards SOTD' },
      ].map((s, i) => (
        <div key={i} className="px-6 py-4 flex flex-col justify-center">
          <span className="text-[10px] font-black text-black/50 tracking-widest uppercase">{s.label}</span>
          <span className="text-sm sm:text-lg font-black text-black uppercase tracking-tight">{s.val}</span>
        </div>
      ))}
    </div>
  )
}

function MarqueeTicker() {
  return (
    <div className="w-full bg-[#FF007F] border-t-4 border-black py-3 sm:py-4 overflow-hidden relative">
      <motion.div
        className="flex whitespace-nowrap text-black font-black text-2xl sm:text-4xl uppercase tracking-tighter items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <span className="pr-8">▶ PLAY THE REEL ▶ PLAY THE REEL ▶ PLAY THE REEL ▶</span>
        <span className="pr-8">▶ PLAY THE REEL ▶ PLAY THE REEL ▶ PLAY THE REEL ▶</span>
      </motion.div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function ShowreelSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [elapsed, setElapsed] = useState(0)
  const intervalRef = useRef(null)
  const videoRef = useRef(null)

  const progress = (elapsed / TOTAL) * 100

  const togglePlay = useCallback(() => {
    setIsPlaying(p => !p)
  }, [])

  const handleSeek = useCallback((pct) => {
    setElapsed(Math.round(pct * TOTAL))
    if (videoRef.current) {
      videoRef.current.currentTime = pct * TOTAL
    }
  }, [])

  const toggleMute = useCallback(() => {
    setIsMuted(m => !m)
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
    }
  }, [])

  useEffect(() => {
    if (isPlaying) {
      if (videoRef.current) videoRef.current.play()
      intervalRef.current = setInterval(() => {
        setElapsed(e => {
          if (e >= TOTAL) { setIsPlaying(false); return 0 }
          return e + 1
        })
      }, 1000)
    } else {
      if (videoRef.current) videoRef.current.pause()
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPlaying])

  return (
    <div className="relative w-full bg-[#f5f5f0] border-t-4 border-black pt-16 pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        
        <TopBar />
        <HeroTitle />

        {/* The Brutalist Player Container */}
        <div className="w-full border-4 border-black shadow-[16px_16px_0px_0px_#000] bg-white flex flex-col group relative z-10">
          
          {/* Video Area */}
          <div 
            className="relative w-full bg-black cursor-pointer overflow-hidden border-b-4 border-black flex items-center justify-center group"
            style={{ aspectRatio: '16/9' }}
            onClick={togglePlay}
          >
            {/* The Video loop */}
            <video
              ref={videoRef}
              src="https://videos.pexels.com/video-files/3163534/3163534-uhd_3840_2160_30fps.mp4"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              loop
              muted={isMuted}
              playsInline
            />

            {/* Giant Play Overlay when Paused */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10"
                >
                  <div className="bg-[#e1e61b] border-4 border-black px-8 py-4 sm:px-12 sm:py-6 flex items-center gap-4 transform -rotate-3 shadow-[8px_8px_0_0_#FF007F]">
                    <Play className="w-12 h-12 sm:w-16 sm:h-16 text-black fill-current" />
                    <span className="font-black text-4xl sm:text-6xl uppercase tracking-tighter">Play</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Glitch Overlay Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-difference z-20"
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          </div>

          <ControlsBar
            isPlaying={isPlaying}
            elapsed={elapsed}
            progress={progress}
            onToggle={togglePlay}
            onSeek={handleSeek}
            isMuted={isMuted}
            toggleMute={toggleMute}
          />

          <StatsStrip />
          <MarqueeTicker />
        </div>

        {/* Giant background text just for texture */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 pointer-events-none overflow-hidden w-full opacity-5">
          <h1 className="text-[30vw] font-black leading-none whitespace-nowrap">REEL 2026</h1>
        </div>

      </div>
    </div>
  )
}
