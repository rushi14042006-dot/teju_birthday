import { useEffect, useRef, useState } from 'react'
import { Heart, Play, Sparkles, X } from 'lucide-react'
import { birthdaySpecialVideos } from '../data/birthdaySpecialVideos'
import './BirthdaySpecials.css'

export default function BirthdaySpecials() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [mediaError, setMediaError] = useState(false)
  const [loading, setLoading] = useState(false)
  const loadingTimer = useRef<number | undefined>(undefined)
  const opener = useRef<HTMLButtonElement | null>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const active = birthdaySpecialVideos.find(video => video.id === activeId)

  const close = () => {
    videoRef.current?.pause()
    if (videoRef.current && Number.isFinite(videoRef.current.duration)) videoRef.current.currentTime = 0
    setActiveId(null)
    setMediaError(false)
    setLoading(false)
  }

  useEffect(() => {
    if (!activeId) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusTimer = window.requestAnimationFrame(() => closeButton.current?.focus())
    loadingTimer.current = window.setTimeout(() => { setMediaError(true); setLoading(false) }, 12000)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); close() }
      if (event.key === 'Tab') {
        const first = closeButton.current
        const last = videoRef.current
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      cancelAnimationFrame(focusTimer)
      window.clearTimeout(loadingTimer.current)
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      videoRef.current?.pause()
      videoRef.current?.removeAttribute('src')
      videoRef.current?.load()
      window.requestAnimationFrame(() => opener.current?.focus())
    }
  }, [activeId])

  return <>
    <section className="birthday-specials" aria-labelledby="birthday-specials-title">
      <div className="birthday-specials-glow" aria-hidden="true"/>
      <div className="birthday-specials-inner">
        <p className="birthday-specials-label"><Sparkles size={14}/> BIRTHDAY SPECIAL <Sparkles size={14}/></p>
        <h2 id="birthday-specials-title">Just for You, Teju <Heart size={25} fill="currentColor" aria-hidden="true"/></h2>
        <p className="birthday-specials-subtitle">Two little films. A thousand feelings. Memories made just for you.</p>
        <div className="birthday-specials-divider" aria-hidden="true"><span/><Heart size={15} fill="currentColor"/><span/></div>
        <div className="birthday-specials-grid">
          {birthdaySpecialVideos.map((video, index) => <button
            className="birthday-film-card"
            key={video.id}
            onClick={event => { opener.current = event.currentTarget; setMediaError(false); setLoading(true); setActiveId(video.id) }}
            aria-label={`Play ${video.title}`}
          >
            <span className="birthday-film-art">
              <img src={video.poster} alt="" loading="lazy" onError={event => { event.currentTarget.style.visibility = 'hidden' }}/>
              <span className="birthday-film-vignette" aria-hidden="true"/>
              <span className="birthday-film-play" aria-hidden="true"><Play size={24} fill="currentColor"/></span>
              <span className="birthday-film-number" aria-hidden="true">FILM 0{index + 1}</span>
            </span>
            <span className="birthday-film-copy"><span className="birthday-film-subtitle">{video.subtitle}</span><strong>{video.title}</strong><span className="birthday-film-caption">{video.caption}</span></span>
          </button>)}
        </div>
        <p className="birthday-specials-signoff">A little premiere, made with love <span>♡</span></p>
      </div>
    </section>

    {active && <div className="birthday-cinema" role="dialog" aria-modal="true" aria-label={`${active.title} video player`}>
      <header className="birthday-cinema-top"><div><p>JUST FOR YOU, TEJU <span>✦</span></p><h2>{active.title}</h2></div><button ref={closeButton} type="button" onClick={close} className="birthday-cinema-close" aria-label="Close video player"><X size={24}/></button></header>
      <div className="birthday-cinema-stage">
        {!mediaError ? <>
          <video ref={videoRef} src={active.src} poster={active.poster} controls playsInline preload="metadata" aria-label={active.description || active.title} onLoadedData={() => { window.clearTimeout(loadingTimer.current); setLoading(false); setMediaError(false) }} onError={() => { window.clearTimeout(loadingTimer.current); setLoading(false); setMediaError(true) }}/>
          {loading&&<p className="birthday-cinema-loading" role="status">Preparing your private screening…</p>}
        </> : <div className="birthday-cinema-error" role="status"><Heart size={28} fill="currentColor"/><h3>This little film isn’t ready yet.</h3><p>Add the video file at <code>{active.src}</code> to make this birthday special playable.</p><button type="button" onClick={close}>Close this film</button></div>}
      </div>
      <p className="birthday-cinema-caption">{active.caption}</p>
    </div>}
  </>
}
