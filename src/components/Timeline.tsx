import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { chapters } from '../data/timeline'
import Photo from './Photo'
gsap.registerPlugin(ScrollTrigger)
export default function Timeline() {
  const root=useRef<HTMLDivElement>(null)
  useEffect(()=>{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx=gsap.context(()=>{
      const p=root.current!.querySelector<SVGPathElement>('.road')!; const len=p.getTotalLength()
      gsap.set(p,{strokeDasharray:len,strokeDashoffset:len})
      gsap.to(p,{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:root.current,start:'top 60%',end:'bottom 80%',scrub:true}})
      gsap.utils.toArray<HTMLElement>('.chap').forEach((el,i)=>gsap.from(el,{opacity:0,x:i%2?60:-60,duration:.9,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 85%'}}))
      gsap.utils.toArray<HTMLElement>('.chap img').forEach(el=>gsap.fromTo(el,{yPercent:6},{yPercent:-6,ease:'none',scrollTrigger:{trigger:el,scrub:true,start:'top bottom',end:'bottom top'}}))
    },root); return()=>ctx.revert()
  },[])
  return <div className="tl" ref={root}>
    <svg className="roadsvg" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true">
      <path d="M50 0 C 20 100,80 150,50 250 S 20 400,50 500 S 80 650,50 750 S 40 900,50 1000" fill="none" stroke="#D98BA5" strokeWidth="2" className="road" vectorEffect="non-scaling-stroke"/></svg>
    {chapters.map((c,i)=><article key={c.date} className={`chap ${i%2?'r':'l'}`}>
      <Photo src={c.img} alt={`${c.date}: ${c.title}`}/><div><small>{c.date}</small><h3>{c.title}</h3><p>{c.text}</p></div></article>)}
  </div>
}
