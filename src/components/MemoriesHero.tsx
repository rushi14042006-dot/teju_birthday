import { useCallback } from 'react'

interface MemoriesHeroProps {
  nav: (page: string) => void
}

export default function MemoriesHero({ nav }: MemoriesHeroProps) {
  const scrollToNext = useCallback(() => {
    const nextEl = document.getElementById('reel') || document.getElementById('archive')
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' })
    }
  }, [])

  return (
    <section className="memories-hero-section" aria-label="Hero section for Memories">
      <div className="memories-hero-canvas">
        {/* Full bleed Memories hero collage image */}
        <img
          src="/images/hero/memories-hero.png"
          alt="Memories - A thousand little pieces of us"
          className="memories-hero-img"
          loading="eager"
          fetchPriority="high"
        />

        {/* Back to Home Button */}
        <button
          type="button"
          className="memories-back-btn"
          onClick={() => nav('home')}
          aria-label="Back to home"
          title="Back to home"
        >
          ← Back to home
        </button>

        {/* Center / Camera Scroll Hotspot */}
        <button
          type="button"
          className="memories-scroll-hotspot"
          onClick={scrollToNext}
          aria-label="Scroll to explore memories"
          title="Scroll to explore memories"
        />
      </div>
      <div id="after-memories-hero" aria-hidden="true" />
    </section>
  )
}
