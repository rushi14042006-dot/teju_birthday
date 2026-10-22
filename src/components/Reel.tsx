import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { reel } from '../data/reel'
import Photo from './Photo'
import Modal from './Modal'
gsap.registerPlugin(ScrollTrigger)
export default function Reel() {
  const root=useRef<HTMLDivElement>(null); const [open,setOpen]=useState<number|null>(null)
  const step=useCallback((d:number)=>setOpen(o=>o===null?o:(o+d+reel.length)%reel.length),[])
  const onKey=useCallback((k:string)=>{if(k==='ArrowRight')step(1);if(k==='ArrowLeft')step(-1)},[step])
  const close=useCallback(()=>setOpen(null),[])
  useEffect(()=>{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx=gsap.context(()=>{
      gsap.from('.reel-h .w>span',{yPercent:110,duration:1,stagger:.09,ease:'power3.out',scrollTrigger:{trigger:'.reel-h',start:'top 85%'}})
      gsap.fromTo('.s1',{xPercent:0},{xPercent:-35,ease:'none',scrollTrigger:{trigger:'.strips',scrub:.6,start:'top bottom',end:'bottom top'}})
      gsap.fromTo('.s2',{xPercent:-35},{xPercent:0,ease:'none',scrollTrigger:{trigger:'.strips',scrub:.6,start:'top bottom',end:'bottom top'}})
      const n={v:0}; gsap.to(n,{v:reel.length,duration:2.2,ease:'power2.out',snap:{v:1},scrollTrigger:{trigger:'.reel-count',start:'top 90%'},onUpdate:()=>{const e=root.current?.querySelector('.reel-count b'); if(e) e.textContent=String(n.v)}})
      gsap.utils.toArray<HTMLElement>('.rv').forEach((el,i)=>{
        const r=((i%5)-2)*1.4
        gsap.fromTo(el,{clipPath:'inset(0 0 100% 0)',y:80,rotate:r*3,opacity:0},{clipPath:'inset(0 0 0% 0)',y:0,rotate:r,opacity:1,duration:1.3,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%'}})
        gsap.fromTo(el.firstElementChild,{scale:1.35},{scale:1,ease:'none',scrollTrigger:{trigger:el,scrub:true,start:'top bottom',end:'center 40%'}})
        gsap.to(el,{y:(i%3-1)*-25,ease:'none',scrollTrigger:{trigger:el,scrub:true,start:'top bottom',end:'bottom top'}})
      })
    },root); return()=>ctx.revert()
  },[])
  const m=open!==null?reel[open]:null
  const strip=(a:number)=>[...reel.slice(a),...reel.slice(0,a)].map(x=><Photo key={x.id} src={x.src} alt={x.caption}/> )
  return <div ref={root}>
    <h2 className="reel-h" aria-label="A wall of everything we kept.">{'A wall of everything we kept.'.split(' ').map((w,i)=><span key={i} className="w" aria-hidden="true"><span>{w}</span></span>)}</h2>
    <p className="reel-count serif"><b>0</b> photographs, and still counting.</p>
    <div className="strips" aria-hidden="true"><div className="strip s1">{strip(0)}</div><div className="strip s2">{strip(10)}</div></div>
    <div className="reelgrid">{reel.map((x,i)=><button key={x.id} className={`rv a${i%4}`} onClick={()=>setOpen(i)} aria-label={`Open ${x.caption}`}><Photo src={x.src} alt={x.caption}/></button>)}</div>
    {m&&<Modal onClose={close} label="Memory reel viewer" onKey={onKey}><div className="lb"><button className="nav l" onClick={()=>step(-1)} aria-label="Previous"><ChevronLeft/></button>
      <figure key={m.id}><Photo src={m.src} alt={m.caption}/><figcaption><p>{m.caption}</p>{m.date&&<i>{m.date}</i>}</figcaption></figure>
      <button className="nav r" onClick={()=>step(1)} aria-label="Next"><ChevronRight/></button></div></Modal>}
  </div>
}
