import { useCallback } from 'react'

interface HomeHeroProps {
  nav: (page: string) => void
  onOpenEgg?: () => void
}

export default function HomeHero({ nav, onOpenEgg }: HomeHeroProps) {
  const scrollToNext = useCallback(() => {
    const nextEl = document.getElementById('countdown') || document.getElementById('after-hero')
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' })
    }
  }, [])

  return (
    <section className="home-hero-section" aria-label="Hero section for Tejaswi">
      <div className="home-hero-canvas">
        {/* Full bleed hero collage image */}
        <img
          src="/images/hero/hero-main.png"
          alt="Tejaswi - 2019 to Infinity"
          className="home-hero-img"
          loading="eager"
          fetchPriority="high"
        />

        {/* Button 1: ENTER THE JOURNEY → (Exact small hotspot on image) */}
        <button
          type="button"
          className="hero-hotspot btn-journey-hotspot"
          onClick={() => nav('reels')}
          aria-label="Enter the Journey"
          title="Enter the Journey"
        />

        {/* Button 2: EXPLORE MEMORIES (Exact small hotspot on image) */}
        <button
          type="button"
          className="hero-hotspot btn-memories-hotspot"
          onClick={() => nav('memories')}
          aria-label="Explore Memories"
          title="Explore Memories"
        />

        {/* Hotspot 3: SCROLL TO FOLLOW THE ROAD */}
        <button
          type="button"
          className="hero-hotspot scroll-road-hotspot"
          onClick={scrollToNext}
          aria-label="Scroll to follow the road"
          title="Scroll to follow the road"
        />

        {/* Hotspot 4: Road Pin 2019 */}
        <button
          type="button"
          className="hero-hotspot pin-2019-hotspot"
          onClick={() => nav('reels')}
          aria-label="2019 - Explore the reels"
          title="2019"
        />

        {/* Hotspot 5: Road Pin ∞ */}
        <button
          type="button"
          className="hero-hotspot pin-inf-hotspot"
          onClick={() => {
            if (onOpenEgg) onOpenEgg()
            else nav('birthday')
          }}
          aria-label="Infinity"
          title="∞"
        />
      </div>
      <div id="after-hero" aria-hidden="true" />
    </section>
  )
}
