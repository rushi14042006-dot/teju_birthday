import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useReducedMotion from '../../hooks/useReducedMotion'
import Photo from '../Photo'
import { Pearl } from '../Floaties'
gsap.registerPlugin(ScrollTrigger)
const D='M200 100 C250 28 352 28 352 100 C352 172 250 172 200 100 C150 28 48 28 48 100 C48 172 150 172 200 100'
const B='M352 100 C352 172 250 172 200 100 C150 28 48 28 48 100' // the strand that crosses OVER at the centre
const layers=[['#E8AABD',16,.35,'translate(2 4)'],['#F6C8D5',14,1,''],['#D98BA5',6,.8,''],['#fff',1.2,.75,'translate(-1.5 -1.5)']] as const
export default function RibbonInfinity({onAgain,photos}:{onAgain:()=>void;photos:{src:string;alt:string}[]}) {
  const ref=useRef<HTMLElement>(null); const reduced=useReducedMotion()
  useEffect(()=>{
    if(reduced||!ref.current) return
    const ctx=gsap.context(()=>{
      const ps=gsap.utils.toArray<SVGPathElement>('.ib')
      ps.forEach(p=>{const L=p.getTotalLength();gsap.set(p,{strokeDasharray:L,strokeDashoffset:L})})
      gsap.set('.iover',{opacity:0})
      gsap.timeline({scrollTrigger:{trigger:ref.current,start:'top 70%',end:'center 45%',scrub:.8}})
        .to(ps,{strokeDashoffset:0,ease:'none',duration:3}).to('.iover',{opacity:1,duration:.4})
        .from('.ifade',{opacity:0,y:20,stagger:.3,duration:1},'-=1.5').from('.ipol,.ipearl',{opacity:0,scale:.8,stagger:.15,duration:1},'<')
    },ref); return()=>ctx.revert()
  },[reduced])
  return <section id="ribbon-end" data-end ref={ref} className="rend" aria-label="The ribbon becomes infinity">
    <div className="iwrap">
      <svg viewBox="0 0 400 200" className="isvg" role="img" aria-label="A satin ribbon forming an infinity symbol">
        <defs><clipPath id="icx"><circle cx="200" cy="100" r="32"/></clipPath></defs>
        {layers.map(([c,w,o,t],i)=><path key={i} className="ib" d={D} stroke={c} strokeWidth={w} strokeOpacity={o} transform={t||undefined}/>)}
        <g className="iover" clipPath="url(#icx)">{layers.map(([c,w,o,t],i)=><path key={i} className="ibo" d={B} stroke={c} strokeWidth={i===0?w+4:w} strokeOpacity={o} transform={t||undefined}/>)}</g>
      </svg>
      {photos.slice(0,3).map((p,i)=><span key={i} className={`ipol ip${i}`}><Photo src={p.src} alt={p.alt}/></span>)}
      {[['a',12],['b',18],['c',14]].map(([k,s])=><span key={k} className={`ipearl pe${k}`} aria-hidden="true"><Pearl s={Number(s)}/></span>)}
    </div>
    <h2 className="ifade">And the story keeps going.</h2>
    <p className="ifade">Some memories belong to the pages we've already lived. Others are still waiting for us somewhere ahead.</p>
    <p className="serif ifade">2019 — ∞</p><p className="hand ifade">our story is still being written ♡</p>
    <p className="ifade"><button className="btn" onClick={onAgain}>Walk Through It Again</button> <button className="btn ghost" onClick={()=>document.getElementById('archive')?.scrollIntoView({behavior:reduced?'auto':'smooth'})}>Visit the Memory Archive</button></p>
  </section>
}
