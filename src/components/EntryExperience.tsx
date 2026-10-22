import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Eye, EyeOff, Heart, LockKeyhole, Sparkles, X } from 'lucide-react'
import { PASSWORD } from '../data/config'
import { entryExperience as copy } from '../data/entryExperience'
import './EntryExperience.css'

function Bow({ className = '' }: { className?: string }) {
  return <svg className={`entry-bow ${className}`} viewBox="0 0 72 46" aria-hidden="true">
    <path d="M34 21C23 4 5 3 5 14c0 9 13 13 29 11M38 21C49 4 67 3 67 14c0 9-13 13-29 11" fill="#efb2c5" stroke="#bc718b" strokeWidth="2.5"/>
    <path d="m31 24-7 19 12-9 12 9-7-19" fill="#df91aa" stroke="#bc718b" strokeWidth="2"/>
    <circle cx="36" cy="22" r="5" fill="#fff3f2" stroke="#bc718b" strokeWidth="2"/>
  </svg>
}

function HeartLock({ focused, unlocked, onClick }: { focused: boolean; unlocked: boolean; onClick: () => void }) {
  return <button type="button" disabled={unlocked} className={`heart-lock${focused ? ' is-focused' : ''}${unlocked ? ' is-unlocked' : ''}`} onClick={onClick} aria-label={unlocked ? 'Unlocked heart lock' : 'Focus the secret word field'}>
    <svg viewBox="0 0 180 190" role="img" aria-label="A heart-shaped pink lock">
      <defs><linearGradient id="entryHeart" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f9dce5"/><stop offset=".55" stopColor="#edabc1"/><stop offset="1" stopColor="#cf7896"/></linearGradient><filter id="entryShadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#a84f70" floodOpacity=".22"/></filter></defs>
      <path className="lock-shackle" d="M59 83V55a31 31 0 0 1 62 0v28" fill="none" stroke="#ad637b" strokeWidth="9" strokeLinecap="round"/>
      <path d="M90 74C72 54 40 65 40 91c0 28 35 53 50 68 15-15 50-40 50-68 0-26-32-37-50-17Z" fill="url(#entryHeart)" stroke="#b76480" strokeWidth="3" filter="url(#entryShadow)"/>
      <path d="M90 86c-7 0-12 5-12 12 0 5 3 9 7 11v13h10v-13c4-2 7-6 7-11 0-7-5-12-12-12Z" fill="#9b3154"/>
      <circle cx="67" cy="82" r="5" fill="#fffdfb" opacity=".8"/><path d="M112 128c9-8 17-17 20-27" fill="none" stroke="#fbe8ef" strokeWidth="3" strokeLinecap="round" opacity=".8"/>
    </svg>
    <span className="lock-glint" aria-hidden="true">✦</span><span className="lock-pearl" aria-hidden="true"/>
  </button>
}

export default function EntryExperience({ onContinue }: { onContinue: () => void }) {
  const input = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [focused, setFocused] = useState(false)
  const [phase, setPhase] = useState<'locked' | 'unlocked'>('locked')
  const [noteOpen, setNoteOpen] = useState(false)

  useEffect(() => {
    if (phase !== 'unlocked') return
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1450
    const timer = window.setTimeout(onContinue, delay)
    return () => window.clearTimeout(timer)
  }, [onContinue, phase])

  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (!value.trim() || phase === 'unlocked') return
    if (value.trim().toLocaleLowerCase() === PASSWORD.toLocaleLowerCase()) {
      setError(false)
      setPhase('unlocked')
    } else setError(true)
  }

  return <main className={`entry-world${phase === 'unlocked' ? ' entry-unlocked' : ''}`}>
    <div className="entry-sky" aria-hidden="true"><i className="entry-cloud cloud-a"/><i className="entry-cloud cloud-b"/><i className="entry-cloud cloud-c"/></div>
    <div className="entry-decorations" aria-hidden="true">
      <span className="entry-heart heart-a">♡</span><span className="entry-heart heart-b">♥</span><span className="entry-heart heart-c">♡</span>
      <span className="entry-butterfly butterfly-a">🦋</span><span className="entry-butterfly butterfly-b">🦋</span>
      <span className="entry-flower flower-a">✿</span><span className="entry-flower flower-b">✿</span><span className="entry-flower flower-c">❀</span>
      <span className="entry-sparkle sparkle-a">✧</span><span className="entry-sparkle sparkle-b">✦</span><span className="entry-sparkle sparkle-c">✧</span>
      <span className="entry-pearl pearl-a"/><span className="entry-pearl pearl-b"/><span className="entry-pearl pearl-c"/>
      <div className="tiny-teddy teddy-left"><span className="teddy-ear left-ear"/><span className="teddy-ear right-ear"/><span className="teddy-face"><i/><b/><em/></span><Heart size={13} fill="currentColor"/></div>
      <div className="tiny-teddy teddy-right"><span className="teddy-ear left-ear"/><span className="teddy-ear right-ear"/><span className="teddy-face"><i/><b/><em/></span></div>
      <Bow className="corner-bow bow-left"/><Bow className="corner-bow bow-right"/>
    </div>

    <section className="entry-card" aria-live="polite">
      {phase === 'locked' ? <>
        <div className="entry-heading-bow"><Bow/><span>✧</span></div>
        <p className="entry-eyebrow">{copy.eyebrow}</p>
        <h1>{copy.heading}</h1>
        <p className="entry-intro">{copy.introduction}</p>
        <div className={`entry-lock-stage${error ? ' entry-error' : ''}`}>
          <HeartLock focused={focused} unlocked={false} onClick={() => input.current?.focus()}/>
          <span className="lock-caption"><LockKeyhole size={13}/> YOUR LITTLE SECRET KEEPER</span>
        </div>
        <form className="entry-form" onSubmit={submit}>
          <label htmlFor="entry-secret">{copy.fieldLabel}</label>
          <div className="entry-input-wrap"><input ref={input} id="entry-secret" type={showPassword ? 'text' : 'password'} value={value} placeholder={copy.placeholder} autoComplete="off" onFocus={() => { setError(false); setFocused(true) }} onBlur={() => setFocused(false)} onChange={e => { setValue(e.target.value); setError(false) }}/><button type="button" className="entry-eye" onClick={() => setShowPassword(v => !v)} aria-label={showPassword ? 'Hide secret word' : 'Show secret word'}>{showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}</button></div>
          <button className="entry-submit" type="submit">{copy.enterLabel}<Heart size={15} fill="currentColor"/></button>
          <p className="entry-hint">{copy.hint}</p>
          <p className={`entry-error-message${error ? ' visible' : ''}`} role="alert">{error ? copy.error : ''}</p>
        </form>
      </> : <div className="entry-welcome">
        <div className="unlock-burst" aria-hidden="true">{['♡','✦','♡','✧','💗','✦','♡','✧'].map((x,i)=><span key={i} style={{'--i':i} as React.CSSProperties}>{x}</span>)}</div>
        <div className="welcome-lock"><HeartLock focused unlocked onClick={() => undefined}/></div>
        <p className="entry-eyebrow">THE SECRET IS YOURS</p>
        <h1>{copy.welcomeHeading}</h1>
        <p className="welcome-body">{copy.welcomeBody}</p>
        <p className="welcome-note">{copy.welcomeNote}</p>
        <p className="continue-story" role="status">{copy.continueLabel}<Sparkles size={17}/></p>
      </div>}

      {phase === 'locked' && <div className={`entry-love-note${noteOpen ? ' note-open' : ''}`}>
        <button type="button" className="love-note-toggle" aria-expanded={noteOpen} onClick={() => setNoteOpen(v => !v)}>{noteOpen ? 'Close your tiny note' : copy.loveNoteLabel}<span aria-hidden="true">{noteOpen ? ' ×' : ' ↓'}</span></button>
        {noteOpen && <div className="love-note-paper"><button type="button" className="love-note-close" onClick={() => setNoteOpen(false)} aria-label="Close the note"><X size={15}/></button><p>{copy.loveNote}</p><span>— Nani ♡</span></div>}
      </div>}
      <p className="entry-footer">Made with love, just for Teju ♡</p>
    </section>
    {copy.photo && phase === 'locked' && <figure className="entry-polaroid"><img src={copy.photo} alt="Teju in the photo collage made for her"/><figcaption>{copy.photoCaption}</figcaption><span aria-hidden="true">♡</span></figure>}
    <span className="entry-side-note side-left" aria-hidden="true">a little love, tied with a bow</span><span className="entry-side-note side-right" aria-hidden="true">♡ &nbsp; 2019 → ∞</span>
  </main>
}
