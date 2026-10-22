import { useCallback, useEffect, useState } from 'react'
import { Award, ArrowLeft, ArrowRight, CakeSlice, Gift, Heart, Home, Mail, Sparkles, Star, Trophy, X } from 'lucide-react'
import Modal from './Modal'
import Photo from './Photo'
import Countdown from './Countdown'
import Cake from './Cake'
import { InfinityRoad } from './Sections'
import { birthdayExperience as content } from '../data/birthdayExperience'
import './BirthdayExperience.css'

type Scene = 'welcome' | 'gifts' | 'awards' | 'cake' | 'letter'
const sceneOrder: Scene[] = ['welcome', 'gifts', 'awards', 'cake', 'letter']
const storageKey = 'teju-birthday-gifts-v1'
function getOpened(): string[] { try { return JSON.parse(localStorage.getItem(storageKey) || '[]') as string[] } catch { return [] } }
function saveOpened(ids: string[]) { try { localStorage.setItem(storageKey, JSON.stringify(ids)) } catch { /* works without browser storage */ } }

export default function BirthdayExperience({ nav }: { nav: (route: string) => void }) {
  const [scene, setScene] = useState<Scene | 'invitation'>('invitation')
  const [invitationOpen, setInvitationOpen] = useState(false)
  const [opened, setOpened] = useState<string[]>(getOpened)
  const [giftId, setGiftId] = useState<string | null>(null)
  const [awardStarted, setAwardStarted] = useState(false)
  const [awardIndex, setAwardIndex] = useState(0)
  const [cakeComplete, setCakeComplete] = useState(false)
  const [letterOpen, setLetterOpen] = useState(false)
  const closeGift = useCallback(() => setGiftId(null), [])
  const activeGift = content.gifts.find(g => g.id === giftId)
  const currentAward = content.awards[awardIndex]

  useEffect(() => { saveOpened(opened) }, [opened])
  const openGift = (id: string) => { setGiftId(id); setOpened(previous => previous.includes(id) ? previous : [...previous, id]) }
  const goScene = (next: Scene) => { setScene(next); document.getElementById('birthday-experience')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }) }
  const ceremonyNext = () => { if (awardIndex < content.awards.length - 1) setAwardIndex(index => index + 1); else goScene('cake') }
  const ceremonyPrevious = () => setAwardIndex(index => Math.max(0, index - 1))

  if (scene === 'invitation') return <main id="birthday-experience" className="birthday-world invitation-world">
    <div className="invitation-sparkles" aria-hidden="true">✦　✧　♡　✧　✦</div>
    <div className={`invitation-layout${invitationOpen ? ' invitation-unfolded' : ''}`}>
      <div className="invitation-copy"><p className="birthday-kicker">{content.invitation.title}</p><h1>A little world<br/><em>just for you.</em></h1><p>{content.invitation.teaser}</p>
        {!invitationOpen ? <button className="birthday-primary" onClick={() => setInvitationOpen(true)}><Mail size={17}/> OPEN YOUR INVITATION</button> : <button className="birthday-primary" onClick={() => goScene('welcome')}><Sparkles size={17}/> ENTER YOUR CELEBRATION</button>}
        <button className="birthday-skip" onClick={() => goScene('welcome')}>Skip the invitation and enter →</button>
      </div>
      <div className="invitation-envelope" aria-label="A birthday invitation envelope addressed to Teju">
        <div className="invitation-paper"><p className="paper-overline">YOU ARE CORDIALLY INVITED</p>{content.invitation.copy.slice(1).map((line, i) => <p key={i}>{line}</p>)}{invitationOpen && <button className="paper-enter" onClick={() => goScene('welcome')}>ENTER YOUR CELEBRATION <ArrowRight size={16}/></button>}</div>
        <div className="invite-envelope-body"><span className="invite-to">For Teju</span><span className="invite-from">A little note from Nani ❤️</span><span className="invite-seal">♥</span><span className="invite-flap"/></div>
      </div>
      <p className="invitation-foot">Made with love, birthday wishes and a little bit of chaos.</p>
    </div>
  </main>

  return <main id="birthday-experience" className={`birthday-world scene-${scene}`}>
    <div className="birthday-scene-nav" aria-label="Birthday experience scenes">{sceneOrder.map((item, i) => <button key={item} className={scene === item ? 'current' : ''} aria-current={scene === item ? 'step' : undefined} onClick={() => goScene(item)}><span>{String(i + 1).padStart(2, '0')}</span>{item === 'welcome' ? 'Welcome' : item === 'gifts' ? 'Gifts' : item === 'awards' ? 'Awards' : item === 'cake' ? 'Cake' : 'Letter'}</button>)}</div>
    {scene === 'welcome' && <section className="birthday-welcome birthday-scene-panel">
      <div className="welcome-ornament ornament-left" aria-hidden="true">✦</div><div className="welcome-ornament ornament-right" aria-hidden="true">♡</div>
      <p className="birthday-kicker"><Sparkles size={14}/> THE ROAD WE TOOK · BIRTHDAY EDITION</p><h1>{content.welcome.title}</h1><p className="welcome-headline">{content.welcome.headline}</p><p className="welcome-message">{content.welcome.message}</p>
      <Countdown/><div className="birthday-ribbon-label">A DAY MADE FOR YOU <span>✧</span> {content.birthday.label.toUpperCase()}</div><button className="birthday-primary" onClick={() => goScene('gifts')}><Gift size={17}/> DISCOVER YOUR SURPRISES</button>
    </section>}

    {scene === 'gifts' && <section className="birthday-scene-panel gifts-scene">
      <header className="birthday-section-heading"><p className="birthday-kicker"><Gift size={15}/> A LITTLE BOX OF BIRTHDAY THINGS</p><h1>Seven surprises<br/><em>for my Kothi.</em></h1><p>Open them in any order and come back to your favourites.</p><div className="gift-progress" role="status"><span className="progress-track"><i style={{ width: `${opened.length / content.gifts.length * 100}%` }}/></span><b>{opened.length} of 7</b> surprises discovered</div></header>
      <div className="birthday-gift-grid">{content.gifts.map((gift, i) => <button key={gift.id} className={`birthday-gift gift-${gift.effect}${opened.includes(gift.id) ? ' gift-opened' : ''}`} onClick={() => openGift(gift.id)} aria-label={`Open gift ${i + 1}: ${gift.title}${opened.includes(gift.id) ? ', already discovered' : ''}`}><span className="gift-number">GIFT {String(i + 1).padStart(2, '0')}</span><span className="gift-box-art" aria-hidden="true"><i className="box-lid"/><i className="box-body"/><i className="box-ribbon-v"/><i className="box-ribbon-h"/><i className="box-bow"/><b>{opened.includes(gift.id) ? '✓' : gift.icon}</b></span><span className="gift-label">{gift.title}</span><span className="gift-open-label">{opened.includes(gift.id) ? 'Open again' : 'Open this gift'} →</span></button>)}</div>
      <div className="scene-next-row"><p>When you’re ready, the awards are waiting.</p><button className="birthday-secondary" onClick={() => goScene('awards')}>CONTINUE TO AWARDS NIGHT <ArrowRight size={16}/></button></div>
    </section>}

    {scene === 'awards' && <section className="awards-scene birthday-scene-panel">
      <div className="award-spotlight" aria-hidden="true"/><p className="birthday-kicker"><Award size={15}/> THE FIRST ANNUAL CELEBRATION</p><h1>THE TEJU<br/><em>AWARDS</em></h1><p className="awards-subtitle">Recognising achievements that absolutely nobody asked us to measure.</p>
      <div className={`award-stage${awardStarted ? ' ceremony-started' : ''}`}>
        {!awardStarted ? <div className="stage-intro"><div className="award-envelope"><Trophy size={48}/></div><p>The stage is yours, birthday girl.</p><button className="birthday-gold-button" onClick={() => setAwardStarted(true)}>BEGIN THE CEREMONY <Sparkles size={15}/></button></div> : <>
          <p className="award-counter">{'final' in currentAward ? 'THE GRAND FINAL AWARD' : `AWARD ${awardIndex + 1} OF 6`}</p><div className={`award-card${'final' in currentAward ? ' grand-award' : ''}`} key={currentAward.title}><div className="award-seal"><Trophy size={37}/></div><p className="award-presented">PRESENTED WITH AFFECTION TO</p><h2>{currentAward.title}</h2><p className="award-citation">{currentAward.citation}</p>{'signed' in currentAward && <p className="award-signature">{currentAward.signed}</p>}</div>
          <div className="award-controls"><button className="birthday-secondary" onClick={ceremonyPrevious} disabled={awardIndex === 0}><ArrowLeft size={16}/> PREVIOUS</button><span>{awardIndex + 1} / {content.awards.length}</span><button className="birthday-gold-button" onClick={ceremonyNext}>{awardIndex === content.awards.length - 1 ? 'TO THE BIRTHDAY CAKE' : 'NEXT AWARD'} <ArrowRight size={16}/></button></div>
          <div className="award-gallery" aria-label="Revisit awards">{content.awards.map((award, i) => <button key={award.title} aria-label={`View ${award.title}`} aria-current={awardIndex === i ? 'step' : undefined} onClick={() => setAwardIndex(i)}>{i === content.awards.length - 1 ? '✦' : i + 1}</button>)}</div>
        </>}
      </div><div className="scene-next-row"><p>The celebration is yours to explore in any order.</p><button className="birthday-secondary" onClick={() => goScene('cake')}>SKIP TO THE CAKE <CakeSlice size={16}/></button></div>
    </section>}

    {scene === 'cake' && <section className="cake-scene birthday-scene-panel">
      <p className="birthday-kicker"><CakeSlice size={15}/> MAKE A WISH</p><h1>{content.cake.heading}</h1><p className="cake-intro">{content.cake.prompt}</p><div className="cake-spotlight"><div className="cake-flower flower-a">✿</div><div className="cake-flower flower-b">✧</div><Cake onComplete={() => setCakeComplete(true)}/></div>
      {cakeComplete && <div className="cake-celebration" role="status"><p className="birthday-kicker">✦ THE CANDLES ARE OUT ✦</p><h2>{content.cake.reveal}</h2><p>{content.cake.afterBlow}</p><button className="birthday-primary" onClick={() => goScene('letter')}><Mail size={17}/> CONTINUE TO YOUR LETTER</button></div>}
      {!cakeComplete && <div className="cake-note">Your wish stays yours. No need to write it down or share it. ❤️</div>}
    </section>}

    {scene === 'letter' && <section className="final-letter-scene birthday-scene-panel">
      <div className="letter-lamp" aria-hidden="true"/><p className="birthday-kicker">{content.finalLetter.eyebrow}</p><h1>For the birthday girl,<br/><em>from Nani.</em></h1><p className="final-letter-intro">{content.finalLetter.intro}</p>
      {!letterOpen ? <button className="final-letter-envelope" onClick={() => setLetterOpen(true)} aria-label="Open your birthday letter"><span className="final-envelope-paper">A little letter, just for you</span><span className="final-env-flap"/><span className="final-env-ribbon-v"/><span className="final-env-ribbon-h"/><span className="final-env-bow">♡</span><span className="final-env-seal">♥</span><span className="final-envelope-label">OPEN YOUR LETTER</span></button> : <article className="birthday-final-paper"><button className="paper-close" aria-label="Close and fold the letter" onClick={() => setLetterOpen(false)}><X size={17}/></button><p className="paper-overline">A BIRTHDAY LETTER · {content.birthday.label.toUpperCase()}</p><h2>{content.finalLetter.title}</h2><div className="final-letter-copy">{content.finalLetter.paragraphs.map((p, i) => <p key={i} style={{ '--letter-line': i } as React.CSSProperties}>{p}</p>)}</div><span className="final-signature-mark">With love, always ♡</span></article>}
      <div className="final-actions"><button className="birthday-secondary" onClick={() => goScene('gifts')}><Gift size={16}/> REVISIT THE GIFTS</button><button className="birthday-secondary" onClick={() => nav(content.routes.letters)}><Mail size={16}/> MORE LETTERS</button><button className="birthday-primary" onClick={() => nav(content.routes.home)}><Home size={16}/> RETURN HOME</button></div>
      <div className="birthday-road"><p>Our story, from 2019 to infinity.</p><InfinityRoad/><strong>2019 — ∞</strong></div>
    </section>}

    {activeGift && <GiftDetail gift={activeGift} close={closeGift} nextAwards={() => { closeGift(); goScene(activeGift.id === 'grand' ? 'awards' : 'gifts') }} />}
  </main>
}

function GiftDetail({ gift, close, nextAwards }: { gift: typeof content.gifts[number]; close: () => void; nextAwards: () => void }) {
  const [secretRevealed, setSecretRevealed] = useState(false)
  const onKey = useCallback((key: string) => { if (key === 'Enter' && gift.effect === 'secret' && !secretRevealed) setSecretRevealed(true) }, [gift.effect, secretRevealed])
  return <Modal onClose={close} label={gift.label} onKey={onKey}>
    <article className={`gift-detail gift-detail-${gift.effect}`}>
      <p className="birthday-kicker">A LITTLE SOMETHING FOR TEJU</p><span className="gift-detail-icon" aria-hidden="true">{gift.icon}</span><p className="gift-detail-index">{gift.label}</p><h2>{gift.title}</h2>
      {gift.effect === 'secret' && !secretRevealed ? <><p>{gift.clue}</p><button className="birthday-primary" onClick={() => setSecretRevealed(true)}>OPEN THE SEALED NOTE <Heart size={16}/></button></> : <>
        {'image' in gift && <figure className="gift-memory-photo"><Photo src={gift.image} alt={gift.imageAlt}/><figcaption>{gift.caption}</figcaption></figure>}
        <p className="gift-detail-message">{gift.effect === 'secret' ? gift.message : gift.message}</p>
        {gift.effect === 'grand' ? <button className="birthday-primary" onClick={nextAwards}>ONE LAST THING, TEJU <ArrowRight size={16}/></button> : <button className="gift-close-action" onClick={close}>KEEP THIS LITTLE WISH <Heart size={15}/></button>}
      </>}
    </article>
  </Modal>
}
