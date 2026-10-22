import { useState, useCallback } from 'react'
import Photo from './Photo'
import Modal from './Modal'
import { memories } from '../data/memories'
const pts=[[12,16],[40,8],[68,14],[86,40],[60,50],[30,46],[14,76],[46,84],[78,78]]
export function Universe() {
  const [o,setO]=useState<number|null>(null); const close=useCallback(()=>setO(null),[])
  const items=pts.map((p,i)=>({p,m:memories[i*3]})); const m=o!==null?items[o].m:null
  return <><div className="uni">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points={pts.map(p=>p.join(',')).join(' ')} fill="none" stroke="#D98BA5" strokeWidth="1" strokeDasharray="3 4" vectorEffect="non-scaling-stroke"/></svg>
    {items.map(({p,m},i)=><button key={m.id} className="star" style={{left:p[0]+'%',top:p[1]+'%',animationDelay:`${i*.5}s`}} onClick={()=>setO(i)} aria-label={`Open ${m.title}`}><Photo src={m.src} alt={m.caption}/></button>)}</div>
    {m&&<Modal onClose={close} label={m.title}><article className="letter"><Photo src={m.src} alt={m.caption}/><h3>{m.title}</h3><p>{m.story}</p><p className="hand">{m.note}</p></article></Modal>}</>
}
const little:[string,string][]=[
 ['Conversations that went nowhere','Some talks had no point and no ending, and somehow lasted hours. Nobody remembers the topic, only that time disappeared. [Add a real one.]'],
 ['Random photos that became favorites','The blurry, badly framed ones turn out to be the ones we open most. They caught us before we thought to pose.'],
 ['Jokes that make sense to nobody else','Explain one to a stranger and it dies instantly. That is how you know it is ours. [Add your inside joke.]'],
 ['Tiny moments that look ordinary','To anyone else it was a Tuesday. To us it was part of the story.'],
 ['Laughter at the worst possible moment','The kind that arrives exactly when it should not, and only gets worse when you try to stop. [Add the time it happened.]'],
 ['Memories we never planned','Nothing on the schedule turned out to matter as much as what happened between the plans.'],
 ['Everyday moments, appreciated later','We might only realise years from now how much these ordinary days were holding.']]
const hidden:[string,string][]=[['Hidden memory 1','[Add a memory you have never told anyone else.]'],['Hidden memory 2','[Add another small detail only you remember.]'],['Hidden memory 3','[Add a joke that needs a whole backstory.]']]
export function LittleThings() {
  const [more,setMore]=useState(false); const all=more?[...little,...hidden]:little
  return <><div className="notes">{all.map(([t,p],i)=><article key={t} className={`note n${i%4}`}><h3>{t}</h3><p>{p}</p></article>)}</div>
    <p style={{textAlign:'center'}}><button className="btn" aria-expanded={more} onClick={()=>setMore(!more)}>{more?'Hide the extras':'Show hidden memories'}</button></p></>
}
export function PhotoStory() {
  const picks=['Portrait Vibes','Mana Moments','Outdoor Moments','Special Rojulu']
    .flatMap(category=>memories.filter(memory=>memory.category===category).slice(3,6))
    .sort((a,b)=>((a.id*37)%101)-((b.id*37)%101))
  return <div className="pstory">
    <p className="hand story-note">Cute looks, mirror pichidi, mana little poses… anni ikkade 💕✨</p>
    <div className="story-wall">
      {picks.map(memory=><figure key={memory.id}>
        <Photo src={memory.src} alt={memory.caption}/>
        <figcaption>{memory.caption}</figcaption>
      </figure>)}
    </div>
  </div>
}
export function InfinityRoad() {
  return <svg className="inf" viewBox="0 0 400 160" aria-hidden="true"><defs><linearGradient id="fade" x1="0" x2="1"><stop offset="0" stopColor="#D98BA5"/><stop offset="1" stopColor="#D98BA5" stopOpacity="0"/></linearGradient></defs>
    <path d="M0 150 C90 140,120 60,200 70 S320 40,400 30" fill="none" stroke="url(#fade)" strokeWidth="2" strokeLinecap="round"/><path d="M0 158 C90 150,130 80,210 85 S330 55,400 45" fill="none" stroke="url(#fade)" strokeWidth="1" strokeDasharray="4 6"/></svg>
}
