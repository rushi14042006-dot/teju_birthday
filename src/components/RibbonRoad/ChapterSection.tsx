import { useEffect, useRef } from 'react'
import { gsap } from '../../utils/gsap'
import { Bow } from '../Floaties'
import PolaroidCard from './PolaroidCard'
import HiddenNote from './HiddenNote'
import { TimelineChapter } from '../../types/timeline'
export default function ChapterSection({c,reduced,openImage,openStory}:{c:TimelineChapter;reduced:boolean;openImage:(id:string)=>void;openStory:()=>void}){
  const ref=useRef<HTMLElement>(null)
  useEffect(()=>{
    if(reduced) return
    const ctx=gsap.context(()=>{
      gsap.timeline({scrollTrigger:{trigger:ref.current,start:'top 70%'}})
        .from('.rr-lab,.rr-date',{opacity:0,y:14,duration:.5,stagger:.1})
        .from('.rr-h .w>span',{yPercent:110,stagger:.07,duration:.7,ease:'power3.out'},'<.1')
        .from('.rr-desc',{opacity:0,y:20,duration:.7},'<.2')
        .fromTo('.rr-feat',{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',duration:1,ease:'power3.out'},'<')
        .from('.rr-pol',{x:(k:number)=>k%2?60:-60,rotate:(k:number)=>k%2?10:-10,opacity:0,stagger:.18,duration:.8,ease:'power2.out'},'<.3')
        .from('.rr-bow',{scale:0,rotate:-30,duration:.6,ease:'back.out(2)'},'<.2')
        .from('.rr-note,.rr-more',{opacity:0,y:10,duration:.5})
    },ref); return()=>ctx.revert()
  },[reduced])
  const feat=c.images.findIndex(i=>i.featured)
  return <section id={`ch-${c.id}`} ref={ref} className={`rr-ch l-${c.layout} a-${c.accent??'cream'}`} aria-labelledby={`h-${c.id}`}>
    <span className="rr-anchor" aria-hidden="true"><span className="rr-bow"><Bow s={44}/></span></span>
    <div className="rr-txt"><p className="rr-lab">{c.label}</p><p className="rr-date">{c.date??c.year}</p>
      <h3 id={`h-${c.id}`} className="rr-h" aria-label={c.title}>{c.title.split(' ').map((w,i)=><span key={i} className="w" aria-hidden="true"><span>{w}</span></span>)}</h3>
      <p className="rr-desc">{c.description}</p>
      {c.handwrittenNote&&<HiddenNote text={c.handwrittenNote}/>}
      {c.longStory&&<p className="rr-more"><button className="btn ghost" onClick={openStory}>Ee chapter katha motham chaduvu</button></p>}</div>
    <div className="rr-pics">{c.images.map((img,i)=><PolaroidCard key={img.id} img={img} i={i} featured={i===Math.max(feat,0)} onOpen={()=>openImage(img.id)}/>)}</div>
  </section>
}
