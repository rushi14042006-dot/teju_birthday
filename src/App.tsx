import { useEffect, useState, useCallback } from 'react'
import { ArrowUp, Menu } from 'lucide-react'
import Photo from './components/Photo'
import Gallery from './components/Gallery'
import Letters from './components/Letters'
import Countdown from './components/Countdown'
import Reel from './components/Reel'
import Modal from './components/Modal'
import Floaties, { Defs, Heart, Bow } from './components/Floaties'
import { PAGES, PageHero, HomeCards, NextPage } from './components/Pages'
import RibbonRoad from './components/RibbonRoad/RibbonRoad'
import Flipbook from './components/Flipbook'
import { Sealed, Since } from './components/Surprise'
import { BIRTHDAY, CAPSULE, EGG_WORD, EGG_NOTE, preview } from './data/config'
import { capsule } from './data/fun'
import { PhotoStory } from './components/Sections'
import HomeHero from './components/HomeHero'
import ManaKathaHero from './components/ManaKathaHero'
import MemoriesHero from './components/MemoriesHero'
import KothiTimes from './components/KothiTimes'
import LettersExperience from './components/LettersExperience'
import BirthdayExperience from './components/BirthdayExperience'
import EntryExperience from './components/EntryExperience'
import HeartCursor from './components/HeartCursor'
import BirthdaySpecials from './components/BirthdaySpecials'
const wishes=['I hope you get a life that feels right to you, not only one that looks right from the outside. The kind where you wake up and recognise the person living it.','I hope you find the courage to pursue what matters, even when it is quiet and nobody is clapping. Most important things start that way.','I hope you are surrounded by people who appreciate the real you, without edits, explanations or performance.','I hope you always have the freedom to change and grow. You do not owe anyone the version of you from five years ago.','I hope ordinary days feel quietly happy: a good cup of something, a message that makes you laugh, nothing urgent.','I hope life surprises you in the best ways, with openings you did not plan and doors you did not know were there.','I hope you have the strength for the hard chapters, and the sense to ask for help when you need it. I will always be nearby.','I hope you collect memories that make you smile years later, the way these ones make me smile now.']
export default function App() {
  const [ok,setOk]=useState(preview); const [celebrating,setCelebrating]=useState(false); const [egg,setEgg]=useState(false); const closeEgg=useCallback(()=>setEgg(false),[]); const [prog,setProg]=useState(0); const [top,setTop]=useState(false); const [menu,setMenu]=useState(false)
  useEffect(()=>{const f=()=>{const h=document.documentElement;setProg(h.scrollTop/(h.scrollHeight-h.clientHeight||1));setTop(h.scrollTop>600)};addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[])
  useEffect(()=>{if(!celebrating)return;const timer=window.setTimeout(()=>setCelebrating(false),1900);return()=>window.clearTimeout(timer)},[celebrating])
  useEffect(()=>{let buf='';const h=(e:KeyboardEvent)=>{if(e.target instanceof HTMLInputElement||e.key.length!==1)return;buf=(buf+e.key.toLowerCase()).slice(-EGG_WORD.length);if(buf===EGG_WORD)setEgg(true)};addEventListener('keydown',h);return()=>removeEventListener('keydown',h)},[])
  const [route,setRoute]=useState(()=>location.hash.replace(/^#\/?/,'')||'home'); const [veil,setVeil]=useState(false)
  useEffect(()=>{const h=()=>{setRoute(location.hash.replace(/^#\/?/,'')||'home');scrollTo(0,0)};addEventListener('hashchange',h);return()=>removeEventListener('hashchange',h)},[])
  const page=PAGES.some(q=>q.id===route)?route:'home'
  const nav=(r:string)=>{if(r===page)return;setVeil(true);setTimeout(()=>{location.hash=r==='home'?'#/':`#/${r}`},450);setTimeout(()=>setVeil(false),1000)}
  const go=(id:string)=>()=>document.getElementById(id)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})
  if(!ok) return <><EntryExperience onContinue={()=>{setOk(true);setCelebrating(true)}}/><HeartCursor/></>
  return <>
    <HeartCursor/>
    <Defs/>{page!=='teju'&&page!=='letters'&&page!=='birthday'&&<Floaties/>}
    <div className="bar" style={{transform:`scaleX(${prog})`}} aria-hidden="true"/>
    <header className="nav"><b className="logo" onClick={()=>nav('home')}>{page==='reels'?'Mana Katha':'The Road We Took'}</b><button className="burger" aria-label="Menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}><Menu size={20}/></button><nav aria-label="Main" className={menu?'open':''}>
      {[['Home','home'],...PAGES.map(q=>[q.short,q.id])].map(([t,id])=><a key={id} href={id==='home'?'#/':`#/${id}`} aria-current={page===id?'page':undefined} onClick={e=>{e.preventDefault();setMenu(false);nav(id)}}>{t}</a>)}</nav></header>
    <div className={`veil${veil?' on':''}`} aria-hidden="true"><Heart s={64}/><p className="hand">turning the page…</p></div>
    {celebrating&&<div className="entry-welcome-burst" aria-hidden="true">{['♡','✿','♥','✧','❀','♡','✦','🌸','♥','✿','♡','✧','❀','♥','♡','✦','✿','🌸'].map((item,i)=><span key={i} style={{'--i':i} as React.CSSProperties}>{item}</span>)}</div>}
    <main id="top" key={page} className={celebrating&&page==='home'?'home-entry-reveal':''}>
      {page==='home'&&<><HomeHero nav={nav} onOpenEgg={()=>setEgg(true)}/><Countdown/><section className="sec quiet"><h2>We have been friends for</h2><Since/></section><HomeCards nav={nav}/></>}
      {page==='reels'&&<><ManaKathaHero nav={nav}/><RibbonRoad/><NextPage id="reels" nav={nav}/></>}
      {page==='memories'&&<><MemoriesHero nav={nav}/><section id="reel" className="sec reel"><Reel/></section><BirthdaySpecials/><section id="archive" className="sec"><h2>A thousand little pieces of us.</h2><Gallery/></section><section className="sec"><h2>Our photo album</h2><Flipbook/></section><section className="sec"><h2>If these photographs could speak…</h2><PhotoStory/></section><NextPage id="memories" nav={nav}/></>}
      {page==='teju'&&<KothiTimes nav={nav}/>}
      {page==='letters'&&<><PageHero id="letters" nav={nav}/><LettersExperience/><details className="legacy-letters sec"><summary>Open the original letter archive</summary><p className="serif">The original Open When letters and birthday letter are still here.</p><section className="sec blush"><h2>Open when…</h2><Letters which="openwhen"/></section><section className="sec quiet"><h2>There are some things that are easier to write than say.</h2><p className="serif">So, for once, I put them somewhere they could stay.</p><Sealed at={BIRTHDAY} label="The letter opens at midnight on 23 October."><Letters which="unsent"/></Sealed></section><section className="sec narrow garden"><h2>The things I hope life gives you.</h2>{wishes.map(w=><p key={w} className="wishp">{w}</p>)}</section></details><NextPage id="letters" nav={nav}/></>}
      {page==='birthday'&&<><BirthdayExperience nav={nav}/><details className="birthday-capsule sec"><summary>The time capsule · opens 23 October 2027</summary><Sealed at={CAPSULE} label="Sealed until Teju’s birthday on 23 October 2027."><article className="letter"><p>{capsule}</p></article></Sealed></details></>}
    </main>
    <footer>{page==='reels'?'Mana Katha · Naa Teju kosam ·':'The Road We Took · For Teju ·'} <button className="inf-btn" onClick={()=>setEgg(true)} aria-label={page==='reels'?'Dachina note':'Secret'}>∞</button></footer>
    {egg&&<Modal onClose={closeEgg} label="Secret note"><article className="letter"><h3>You found it.</h3><p>{EGG_NOTE}</p></article></Modal>}
    {top&&<button className="up" onClick={go('top')} aria-label="Back to top"><ArrowUp size={18}/></button>}
  </>
}
