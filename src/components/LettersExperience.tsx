import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, CakeSlice, Heart, MailOpen, Sparkles, X } from 'lucide-react'
import Modal from './Modal'
import { letterCollection } from '../data/letterCollection'
import { getBirthdayCountdown } from '../data/kothiTimes'
import useNow from '../hooks/useNow'
import './LettersExperience.css'

type Entry = typeof letterCollection.daily[number] | typeof letterCollection.extras[number]
const storageKey = 'teju-letter-read-v1'
function readIds(): string[] { try { const value = localStorage.getItem(storageKey); return value ? JSON.parse(value) as string[] : [] } catch { return [] } }
function markRead(id: string) { try { localStorage.setItem(storageKey, JSON.stringify([...new Set([...readIds(), id])])) } catch { /* the collection works without storage */ } }

function EnvelopeCard({ letter, read, opening, index, open }: { letter: Entry; read: boolean; opening: boolean; index: number; open: () => void }) {
  const theme = letter.theme
  return <button className={`letter-card theme-${theme}${read ? ' is-read' : ''}${opening ? ' is-opening' : ''}`} style={{ '--card-index': index } as React.CSSProperties} onClick={open} aria-label={`Open ${letter.title}${read ? ', already read' : ''}`}>
    <span className="card-date">{letter.date}</span>
    <span className="envelope-art" aria-hidden="true"><span className="env-back"/><span className="env-letter"/>{theme === 'birthday-final' && <><span className="gift-ribbon gift-ribbon-vertical"/><span className="gift-ribbon gift-ribbon-horizontal"/><span className="gift-bow"><i/><b/></span></>}<span className="env-flap"/><span className="env-seal">{letter.id === 'day6' ? '1' : theme === 'newspaper' ? '✦' : theme === 'scrapbook' ? '✿' : theme === 'countdown' ? '6' : theme === 'mirror' ? '✧' : theme === 'birthday-final' ? '23' : '♥'}</span></span>
    <span className="card-day">{letter.id === 'day7' ? 'FINAL BIRTHDAY LETTER' : 'kind' in letter && letter.kind === 'companion' ? 'NEWSPAPER INSERT' : 'kind' in letter && letter.kind === 'countdown' ? 'COUNTDOWN CARD' : 'kind' in letter && letter.kind === 'bonus' ? 'BONUS NOTE' : `DAY ${letter.day}`}</span>
    <span className="card-title">{letter.title}</span><span className="card-subtitle">{letter.subtitle}</span>
    <span className="card-action">{read ? 'Read again' : 'Open letter'} <span aria-hidden="true">→</span></span>
    {read && <span className="read-mark" aria-label="Read"><Heart size={13} fill="currentColor"/></span>}
  </button>
}

function Newspaper({ letter }: { letter: Entry }) {
  return <div className="newspaper-paper">
    <div className="paper-kicker"><span>23 OCTOBER · SPECIAL BIRTHDAY EDITION</span><span>THE PERSONAL EDITION</span></div>
    <h2 className="paper-masthead">{letterCollection.newspaper.masthead}</h2>
    <div className="paper-submast">{letterCollection.newspaper.subheading} <span>✦</span></div>
    <div className="paper-headline">{letterCollection.newspaper.headline}</div>
    <p className="paper-deck">{letterCollection.newspaper.secondary}</p>
    <div className="paper-columns">{letterCollection.newspaper.sections.map((section, i) => <section className={`paper-story paper-story-${i}`} key={section.title}><h3>{section.title}</h3>{section.body.map((p, j) => <p key={j}>{p}</p>)}</section>)}</div>
    <p className="paper-editor">— THE EDITOR, NANI <span>✉</span></p>
  </div>
}

function LetterReader({ letter, index, count, close, go, mark }: { letter: Entry; index: number; count: number; close: () => void; go: (i: number) => void; mark: () => void }) {
  const [ready, setReady] = useState(false)
  const onKey = useCallback((key: string) => { if (key === 'ArrowLeft' && index > 0) go(index - 1); if (key === 'ArrowRight' && index < count - 1) go(index + 1) }, [count, go, index])
  useEffect(() => { const timer = window.setTimeout(() => { setReady(true); mark() }, 680); return () => window.clearTimeout(timer) }, [mark])
  const isPaper = letter.theme === 'newspaper'
  return <Modal onClose={close} label={letter.title} onKey={onKey}>
    <div className={`letter-reader theme-${letter.theme}${ready ? ' reader-ready' : ''}`}>
      <div className="reader-top"><span>{letter.date}</span><button onClick={close} className="reader-close" aria-label="Close letter"><X size={18}/></button></div>
      <div className="reader-scroll" key={letter.id}>
        <div className={`letter-sheet${isPaper ? ' sheet-news' : ''}`}>
            {letter.id === 'day7' && <div className="final-letter-banner"><span>✧</span> A BIRTHDAY LETTER, WRAPPED WITH LOVE <span>✧</span></div>}
            {letter.theme === 'countdown-extra' && <div className="big-two" aria-hidden="true">2</div>}
          {letter.theme === 'mirror' && <div className="mirror-glint" aria-hidden="true">✧　♡　✧</div>}
          {isPaper ? <Newspaper letter={letter}/> : <>
            {letter.theme === 'scrapbook' && <div className="mood-stickers" aria-label="Kothi moods">{['Cute','Dramatic','Angry','Sleepy','Caring','Random'].map(x=><span key={x}>{x} Kothi</span>)}</div>}
            <p className="reader-eyebrow">{letter.id === 'day7' ? 'THE BIRTHDAY LETTER · 23 OCTOBER' : letter.day ? `A LETTER FOR TEJU · DAY ${letter.day}` : 'A LITTLE NOTE FOR KOTHI'}</p>
            <h2 className="reader-title">{letter.title}</h2><p className="reader-subtitle">{letter.subtitle}</p>
            <div className="reader-body">{letter.body.map((p, i) => <p className="revealed-paragraph" key={`${letter.id}-${i}`} style={{ '--para-index': i } as React.CSSProperties}>{p}</p>)}</div>
            {letter.signature.length > 0 && <div className="reader-signature">{letter.signature.map((p, i) => <p key={i}>{p}</p>)}</div>}
            {letter.id === 'day1' && <p className="reader-postscript">First letter opened. Six more days of countdown letters are waiting. 💌</p>}
            {letter.id === 'day2' && <p className="reader-postscript">Every universe has its own magic. Yours is being you. 💗</p>}
            {letter.id === 'day4' && <div className="mirror-glint ending-glint" aria-hidden="true">✧　♡　✧</div>}
            {letter.id === 'day5' && <p className="reader-postscript">Two days to go. One very special birthday. And so many more memories waiting to happen. 💗</p>}
            {letter.id === 'day7' && <p className="reader-postscript">2019 → ∞ · Our story, still unfolding. Happy Birthday, Teju! 💗</p>}
          </>}
        </div>
      </div>
      <div className="reader-actions"><button className="reader-back" onClick={close}><ArrowLeft size={16}/> Back to All Letters</button><div className="reader-paging"><button onClick={() => go(index - 1)} disabled={index <= 0} aria-label="Previous letter"><ArrowLeft size={17}/></button><span>{index + 1} / {count}</span><button onClick={() => go(index + 1)} disabled={index >= count - 1} aria-label="Next letter"><ArrowRight size={17}/></button></div><button className="reader-skip" onClick={() => { setReady(true); mark() }}><BookOpen size={15}/> Read letter</button></div>
    </div>
  </Modal>
}

export default function LettersExperience() {
  const now = useNow(); const countdown = getBirthdayCountdown(new Date(now))
  const [started, setStarted] = useState(false); const [includeBonus, setIncludeBonus] = useState(false); const [selected, setSelected] = useState<string | null>(null); const [opening, setOpening] = useState<string | null>(null); const [read, setRead] = useState<string[]>(readIds); const openTimer = useRef<number | undefined>(undefined)
  const entries = useMemo<Entry[]>(() => [...letterCollection.daily, ...letterCollection.extras.filter(x => x.kind !== 'bonus' || includeBonus)], [includeBonus])
  const selectedIndex = entries.findIndex(x => x.id === selected); const active = entries[selectedIndex]
  const showLetter = (entry: Entry) => { window.clearTimeout(openTimer.current); setOpening(entry.id); const finish = () => { setOpening(null); setSelected(entry.id); setRead(readIds()) }; if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) finish(); else openTimer.current = window.setTimeout(finish, 520) }
  useEffect(() => () => window.clearTimeout(openTimer.current), [])
  const close = useCallback(() => { setSelected(null); setRead(readIds()) }, [])
  const mark = useCallback(() => { if (!selected) return; markRead(selected); setRead(readIds()) }, [selected])
  const go = useCallback((i: number) => { const next = entries[i]; if (next) { setSelected(next.id); markRead(next.id); setRead(readIds()) } }, [entries])
  return <div className="letters-experience">
    <section className={`letters-cover${started ? ' cover-open' : ''}`}>
      <div className="cover-copy"><p className="letters-overline"><Sparkles size={14}/> A LITTLE COLLECTION, JUST FOR YOU</p><h2>Letters for<br/><em>My Kothi</em></h2><span className="cover-edition">♡ &nbsp; SEVEN DAYS · ONE VERY SPECIAL YOU &nbsp; ♡</span><p className="cover-telugu">Konni feelings messages lo cheppagalamu… inkonni letters lo raasthe inka special ga anipisthaayi. 💌</p><p className="cover-small">A little collection of words, wishes, memories, and feelings — just for you, Teju. 🎀</p>
        {!started ? <button className="open-collection" onClick={() => setStarted(true)}><MailOpen size={18}/> Open Your Letters 💌</button> : <a className="skip-opening" href="#letter-collection">Skip the opening and browse ↓</a>}
      </div>
      <div className="cover-art-wrap"><span className="cover-orbit orbit-one"/><span className="cover-orbit orbit-two"/><span className="cover-art-caption">A keepsake, written with love</span><button className="cover-envelope" onClick={() => setStarted(true)} aria-label="Open the stationery box for Teju"><span className="cover-note">To My Kothi 💗</span><span className="cover-sender">From Nani 😻</span><span className="cover-stamp">♥</span><span className="cover-flap"/><span className="cover-glint">✦</span></button></div>
      <div className="cover-sparkle sparkle-one">✦</div><div className="cover-sparkle sparkle-two">♡</div>
    </section>
    <section id="letter-collection" className={`collection-section${started ? ' collection-visible' : ''}`}>
      <header className="collection-heading"><p className="letters-overline"><CakeSlice size={15}/> 17—23 OCTOBER 2026</p><h2>Seven days, seven little letters.</h2><p>Open them in any order. Keep the words. Come back whenever you like.</p><span className="live-countdown">{countdown.today ? 'It’s Teju’s birthday today! 🎂' : countdown.days === 0 ? 'The birthday is less than a day away ✨' : `${countdown.days} ${countdown.days === 1 ? 'day' : 'days'} until 23 October 🎂`}</span></header>
      <div className="daily-grid">{letterCollection.daily.map((letter, i) => <EnvelopeCard key={letter.id} letter={letter} read={read.includes(letter.id)} opening={opening === letter.id} index={i} open={() => showLetter(letter)}/>)}</div>
      <div className="extras-heading"><span/> LITTLE EXTRAS <span/></div>
      <div className="extras-grid">{letterCollection.extras.filter(x => x.kind !== 'bonus').map((letter, i) => <EnvelopeCard key={letter.id} letter={letter} read={read.includes(letter.id)} opening={opening === letter.id} index={i + 7} open={() => showLetter(letter)}/>)}</div>
      <div className="bonus-wrap"><div><p className="letters-overline">A PRIVATE NOTE, TUCKED AWAY</p><h3>A little something extra?</h3><p>There’s one more envelope tucked behind the collection. Open it whenever you want.</p></div><button className="bonus-toggle" onClick={() => setIncludeBonus(v => !v)} aria-expanded={includeBonus}>{includeBonus ? 'Put the note away' : 'Reveal the bonus envelope'} <span aria-hidden="true">{includeBonus ? '↑' : '↓'}</span></button>{includeBonus && <div className="bonus-card"><EnvelopeCard letter={letterCollection.extras.find(x => x.kind === 'bonus')!} read={read.includes('little-place')} opening={opening === 'little-place'} index={9} open={() => showLetter(letterCollection.extras.find(x => x.kind === 'bonus')!)}/></div>}</div>
    </section>
    {active && <LetterReader key={active.id} letter={active} index={selectedIndex} count={entries.length} close={close} go={go} mark={mark}/>}
  </div>
}
