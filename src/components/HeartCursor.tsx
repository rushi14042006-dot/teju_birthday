import { useEffect, useRef } from 'react'
import './HeartCursor.css'

const palette = ['#e99bb6', '#d87898', '#c87894', '#eab6d1', '#d7bde9', '#f1c3cf']
const maxParticles = 28
const interactiveSelector = 'a,button,[role="button"],summary,label,select,input[type="button"],input[type="submit"]'
const textInputSelector = 'input:not([type="button"]):not([type="submit"]):not([type="checkbox"]):not([type="radio"]),textarea,[contenteditable="true"],[role="textbox"]'

export default function HeartCursor() {
  const rootRef = useRef<HTMLDivElement>(null)
  const heartRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: -100, y: -100 })
  const current = useRef({ x: -100, y: -100 })
  const frame = useRef(0)
  const lastSpawn = useRef({ x: -100, y: -100, time: 0 })
  const enabled = useRef(false)
  const reduced = useRef(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateAvailability = () => {
      enabled.current = finePointer.matches
      reduced.current = reduceMotion.matches
      document.body.classList.toggle('custom-heart-cursor', enabled.current)
      if (!enabled.current && heartRef.current) heartRef.current.style.opacity = '0'
    }

    const animateCursor = () => {
      const node = heartRef.current
      if (!node) { frame.current = 0; return }
      current.current.x += (target.current.x - current.current.x) * .82
      current.current.y += (target.current.y - current.current.y) * .82
      node.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`
      if (Math.abs(target.current.x - current.current.x) > .15 || Math.abs(target.current.y - current.current.y) > .15) frame.current = requestAnimationFrame(animateCursor)
      else frame.current = 0
    }

    const removeOldestIfNeeded = (root: HTMLDivElement) => {
      const particles = root.querySelectorAll<HTMLElement>('.heart-cursor-particle')
      if (particles.length >= maxParticles) particles[0]?.remove()
    }

    const spawn = (x: number, y: number, burst = false) => {
      const root = rootRef.current
      if (!root) return
      removeOldestIfNeeded(root)
      const particle = document.createElement('span')
      const spark = burst && Math.random() < .25
      particle.className = `heart-cursor-particle${burst ? ' is-burst' : ''}${spark ? ' is-spark' : ''}`
      particle.textContent = spark ? (Math.random() < .5 ? '✧' : '✦') : (Math.random() < .5 ? '♡' : '♥')
      particle.setAttribute('aria-hidden', 'true')
      const size = burst ? 7 + Math.random() * 8 : 6 + Math.random() * 8
      particle.style.left = `${x}px`
      particle.style.top = `${y}px`
      particle.style.color = palette[Math.floor(Math.random() * palette.length)]
      particle.style.fontSize = `${size}px`
      particle.style.setProperty('--tilt', `${Math.round(Math.random() * 54 - 27)}deg`)
      particle.style.setProperty('--drift-x', `${Math.round(Math.random() * 32 - 16)}px`)
      particle.style.setProperty('--drift-y', `${Math.round(18 + Math.random() * 34)}px`)
      particle.style.setProperty('--particle-time', `${burst ? 430 + Math.random() * 180 : 480 + Math.random() * 320}ms`)
      root.appendChild(particle)
      particle.addEventListener('animationend', () => particle.remove(), { once: true })
    }

    const onMove = (event: PointerEvent) => {
      if (!enabled.current || event.pointerType !== 'mouse') return
      const node = heartRef.current
      const targetElement = event.target instanceof Element ? event.target : null
      const isTextInput = !!targetElement?.closest(textInputSelector)
      if (node) {
        node.style.opacity = isTextInput ? '0' : '1'
        node.classList.toggle('over-interactive', !isTextInput && !!targetElement?.closest(interactiveSelector))
      }
      target.current.x = event.clientX
      target.current.y = event.clientY
      if (!frame.current) {
        if (current.current.x < 0) current.current = { x: event.clientX, y: event.clientY }
        frame.current = requestAnimationFrame(animateCursor)
      }

      if (reduced.current || isTextInput) return
      const now = performance.now()
      const dx = event.clientX - lastSpawn.current.x
      const dy = event.clientY - lastSpawn.current.y
      if (dx * dx + dy * dy >= 24 * 24 && now - lastSpawn.current.time >= 24) {
        spawn(event.clientX, event.clientY)
        lastSpawn.current = { x: event.clientX, y: event.clientY, time: now }
      }
    }

    const onDown = (event: PointerEvent) => {
      if (!enabled.current || reduced.current || event.pointerType !== 'mouse' || event.button !== 0) return
      const targetElement = event.target instanceof Element ? event.target : null
      if (targetElement?.closest(textInputSelector)) return
      for (let i = 0; i < 7; i++) spawn(event.clientX + (Math.random() * 16 - 8), event.clientY + (Math.random() * 16 - 8), true)
    }

    const onLeave = (event: PointerEvent) => { if (!event.relatedTarget && heartRef.current) heartRef.current.style.opacity = '0' }
    const onEnter = () => { if (enabled.current && heartRef.current && current.current.x >= 0) heartRef.current.style.opacity = '1' }

    updateAvailability()
    finePointer.addEventListener('change', updateAvailability)
    reduceMotion.addEventListener('change', updateAvailability)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointerout', onLeave, { passive: true })
    window.addEventListener('pointerover', onEnter, { passive: true })

    return () => {
      finePointer.removeEventListener('change', updateAvailability)
      reduceMotion.removeEventListener('change', updateAvailability)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerout', onLeave)
      window.removeEventListener('pointerover', onEnter)
      if (frame.current) cancelAnimationFrame(frame.current)
      document.body.classList.remove('custom-heart-cursor')
      rootRef.current?.replaceChildren()
    }
  }, [])

  return <div ref={rootRef} className="heart-cursor-layer" aria-hidden="true">
    <div ref={heartRef} className="heart-cursor-main">
      <svg viewBox="0 0 32 32" width="25" height="25" aria-hidden="true">
        <defs><linearGradient id="cursorHeartFill" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#ffdce7"/><stop offset=".45" stopColor="#ef9eb9"/><stop offset="1" stopColor="#c85c80"/></linearGradient><filter id="cursorHeartShadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="1.4" stdDeviation="1.3" floodColor="#7a304b" floodOpacity=".28"/></filter></defs>
        <path d="M16 28.1 4.5 16.9C-2 9.8 7.7.8 15.1 7.5l.9.9.9-.9C24.3.8 34 9.8 27.5 16.9L16 28.1Z" fill="url(#cursorHeartFill)" stroke="#b94f73" strokeWidth="1.2" filter="url(#cursorHeartShadow)"/>
        <path d="M7.3 10.8c.8-2.4 3.8-3.5 6-1.8" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" opacity=".9"/>
        <circle cx="22.9" cy="20.4" r="1.2" fill="#fff" opacity=".7"/>
      </svg>
    </div>
  </div>
}
