import { useCallback } from 'react'

interface ManaKathaHeroProps {
  nav: (page: string) => void
}

export default function ManaKathaHero({ nav }: ManaKathaHeroProps) {
  const scrollToChapter = useCallback((chapterId: string) => {
    const el = document.getElementById(chapterId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const startJourney = useCallback(() => {
    const el = document.getElementById('ch-beginning') || document.getElementById('rr-top')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' })
    }
  }, [])

  return (
    <section className="mana-katha-hero-section" aria-label="Hero section for Mana Katha">
      <div className="mana-katha-hero-canvas">
        {/* Full bleed Mana Katha hero collage image */}
        <img
          src="/images/hero/mana-katha-hero.png"
          alt="Mana Katha - Our Story, from an ordinary classroom to a road full of memories"
          className="mana-katha-hero-img"
          loading="eager"
          fetchPriority="high"
        />

        {/* Back to Home Button */}
        <button
          type="button"
          className="mana-katha-back-btn"
          onClick={() => nav('home')}
          aria-label="Back to home"
          title="Back to home"
        >
          ← Intiki tirigi
        </button>

        {/* Primary Action: CONTINUE THE STORY → */}
        <button
          type="button"
          className="mana-katha-hotspot btn-continue-story-hotspot"
          onClick={startJourney}
          aria-label="Continue the story"
          title="Continue the story"
        />

        {/* Scroll Indicator Hotspot */}
        <button
          type="button"
          className="mana-katha-hotspot btn-scroll-hotspot"
          onClick={startJourney}
          aria-label="Scroll to explore timeline"
          title="Scroll down"
        />

        {/* Timeline Milestones Hotspots */}
        {/* 2019 8TH CLASS */}
        <button
          type="button"
          className="mana-katha-hotspot milestone-2019-hotspot"
          onClick={() => scrollToChapter('ch-beginning')}
          aria-label="Chapter 1: 2019 Mana Beginning"
          title="2019 · 8th Class"
        />

        {/* 10TH CLASS */}
        <button
          type="button"
          className="mana-katha-hotspot milestone-10th-hotspot"
          onClick={() => scrollToChapter('ch-between')}
          aria-label="Chapter 3: 10th Class"
          title="10th Class · More trust, more talks"
        />

        {/* 11TH + 12TH */}
        <button
          type="button"
          className="mana-katha-hotspot milestone-inter-hotspot"
          onClick={() => scrollToChapter('ch-growing')}
          aria-label="Chapter 4: Intermediate"
          title="11th + 12th · A little gap"
        />

        {/* ENGINEERING */}
        <button
          type="button"
          className="mana-katha-hotspot milestone-eng-hotspot"
          onClick={() => scrollToChapter('ch-y2024')}
          aria-label="Chapter 5: Engineering"
          title="Engineering · Found again"
        />

        {/* 2024 */}
        <button
          type="button"
          className="mana-katha-hotspot milestone-2024-hotspot"
          onClick={() => scrollToChapter('ch-y2024')}
          aria-label="2024: Stronger than ever"
          title="2024 · Stronger than ever"
        />

        {/* 15 APR 2025 */}
        <button
          type="button"
          className="mana-katha-hotspot milestone-2025-hotspot"
          onClick={() => scrollToChapter('ch-y2025')}
          aria-label="Chapter 6: 15 April 2025"
          title="15 Apr 2025 · A special chapter"
        />

        {/* 18 MAY 2026 */}
        <button
          type="button"
          className="mana-katha-hotspot milestone-2026-hotspot"
          onClick={() => scrollToChapter('ch-y2026')}
          aria-label="Chapter 7: 18 May 2026"
          title="18 May 2026 · And so much more"
        />

        {/* 2019 — ∞ */}
        <button
          type="button"
          className="mana-katha-hotspot milestone-inf-hotspot"
          onClick={() => scrollToChapter('ch-birthday')}
          aria-label="Chapter 8: Infinity"
          title="2019 — ∞"
        />
      </div>
      <div id="after-mana-hero" aria-hidden="true" />
    </section>
  )
}
