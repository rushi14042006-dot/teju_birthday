import Photo from './Photo'
import { Bow } from './Floaties'
// EDIT ME: page titles, taglines and cover photos (public/images/pages/<id>.jpg)
export const PAGES=[
 {id:'reels',short:'Mana Katha',title:'Mana Katha',tag:'2019 Nunchi Infinity Varaku ♾️',note:'Nani & Kothi, 2019 nunchi',desc:'Oka chinna beginning nunchi infinity varaku mana friendship journey.',cover:'/images/timeline/beginning-01.jpg'},
 {id:'memories',short:'Memories',title:'Memories',tag:'A thousand little pieces of us.',note:'all the photographs',desc:'The full archive, photo album and photo stories.',cover:'/images/memories/memory-001.jpg'},
 {id:'teju',short:'Teju',title:'The Kothi Times',tag:'Special Birthday Edition · Exclusives from Nani',note:'the birthday paper',desc:'Headlines, playful investigations, awards and a personal editorial from Nani.',cover:'/images/hero/hero-main.png'},
 {id:'letters',short:'Letters',title:'Letters for My Kothi',tag:'Words, wishes and little surprises from Nani.',note:'sealed with love',desc:'Seven daily letters, a newspaper, a bonus note and more.',cover:'/images/album/album-001.jpg'},
 {id:'birthday',short:'Birthday',title:'The Birthday Page',tag:'Another year of you.',note:'23 October',desc:'The countdown, daily surprises, the cake, the finale and a time capsule.',cover:'/images/album/album-007.jpg'}]
type Nav={nav:(r:string)=>void}
export function PageHero({id,nav}:{id:string}&Nav){
  const p=PAGES.find(x=>x.id===id)!
  return <section className="phero"><button className="back" onClick={()=>nav('home')}>{id==='reels'?'← Intiki tirigi':'← Back to home'}</button>
    <div><p className="hand">{p.note}</p><h1>{p.title}</h1><p className="serif">{p.tag}</p></div>
    <div className="pimg"><span className="sticker s1" aria-hidden="true"><Bow s={70}/></span><Photo src={p.cover} alt={`${p.title} cover`}/></div></section>
}
export function HomeCards({nav}:Nav){
  return <section className="sec blush"><h2>Choose a chapter.</h2><div className="cards">{PAGES.map(p=>
    <button key={p.id} className="pcard" onClick={()=>nav(p.id)}><span className="pcard-photo"><Photo src={p.cover} alt=""/></span><span className="pcard-note">{p.note}</span><h3>{p.title}</h3><p>{p.desc}</p><span className="hand">Open this chapter →</span></button>)}</div></section>
}
export function NextPage({id,nav}:{id:string}&Nav){
  const i=PAGES.findIndex(x=>x.id===id); const n=PAGES[i+1]
  return <section className="sec next"><p className="hand">{id==='reels'?'Mana katha ikkadi nunchi munduku':n?'next chapter':'that is every chapter'}</p>
    {n&&<button className="btn" onClick={()=>nav(n.id)}>{id==='reels'?'Mana memories chuddam':n.title} →</button>}<button className="btn ghost" onClick={()=>nav('home')}>{id==='reels'?'Intiki tirigi':'Back to home'}</button></section>
}
