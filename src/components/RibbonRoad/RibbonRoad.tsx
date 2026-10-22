import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../../utils/gsap'
import { chapters } from '../../data/timelineChapters'
import { ribbon } from '../../data/ribbonConfig'
import { buildRibbonPath } from '../../utils/ribbonGeometry'
import useReducedMotion from '../../hooks/useReducedMotion'
import ChapterSection from './ChapterSection'
import TimelineNav from './TimelineNav'
import InfinityScene from './InfinityScene'
import MemoryModal from './MemoryModal'
import Modal from '../Modal'
export default function RibbonRoad(){
  const root=useRef<HTMLDivElement>(null), reduced=useReducedMotion()
  const [active,setActive]=useState(0), [open,setOpen]=useState<number|null>(null), [story,setStory]=useState<number|null>(null)
  const flat=useMemo(()=>chapters.flatMap(c=>c.images),[])
  const closeImg=useCallback(()=>setOpen(null),[]), closeStory=useCallback(()=>setStory(null),[])
  const scroll=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'})
  const jump=(i:number)=>scroll(`ch-${chapters[i].id}`)
  useEffect(()=>{
    const el=root.current!, paths=Array.from(el.querySelectorAll<SVGPathElement>('.rr-p')), bar=el.querySelector<HTMLElement>('.rr-bar'), st={p:0}
    let len=0
    const apply=()=>{paths.forEach(p=>{p.style.strokeDashoffset=String(len*(1-(reduced?1:st.p)))});if(bar)bar.style.transform=`scaleX(${reduced?1:st.p})`}
    const build=()=>{ // geometry is recomputed from the real layout, so it survives any width
      const box=el.getBoundingClientRect(), mobile=box.width<720
      const anchors=Array.from(el.querySelectorAll<HTMLElement>('.rr-anchor')).map(a=>({x:0,y:a.getBoundingClientRect().top-box.top}))
      const d=buildRibbonPath(anchors,{cx:mobile?28:box.width/2,amp:Math.min(ribbon.amp,box.width*.07),height:box.height,mobile,loops:chapters.map(c=>ribbon.loopAfter.includes(c.id))})
      el.querySelector('.rr-svg')!.setAttribute('viewBox',`0 0 ${box.width} ${box.height}`)
      paths.forEach(p=>p.setAttribute('d',d)); len=paths[0].getTotalLength(); paths.forEach(p=>{p.style.strokeDasharray=String(len)}); apply()
    }
    build()
    const ctx=gsap.context(()=>{
      gsap.to(st,{p:1,ease:'none',onUpdate:apply,scrollTrigger:{trigger:el,start:'top 60%',end:'bottom 70%',scrub:.6}})
      chapters.forEach((c,i)=>ScrollTrigger.create({trigger:`#ch-${c.id}`,start:'top 55%',end:'bottom 55%',onToggle:s=>{if(s.isActive)setActive(i)}}))
      // Chapters setup
    },el)
    let t=0; const ro=new ResizeObserver(()=>{clearTimeout(t);t=window.setTimeout(()=>{build();ScrollTrigger.refresh()},120)}); ro.observe(el)
    return()=>{clearTimeout(t);ro.disconnect();ctx.revert()}
  },[reduced])
  return <div className="rr" ref={root} id="rr-top">
    <svg className="rr-svg" aria-hidden="true" preserveAspectRatio="none">
      {([['base',ribbon.colors.base,ribbon.widths.base],['mid',ribbon.colors.mid,ribbon.widths.mid],['shine',ribbon.colors.shine,ribbon.widths.shine]] as const).map(([n,c,w])=><path key={n} className="rr-p" fill="none" stroke={c} strokeWidth={w} strokeLinecap="round"/>)}</svg>
    <TimelineNav chapters={chapters} active={active} jump={jump}/>
    {chapters.map((c,i)=><ChapterSection key={c.id} c={c} reduced={reduced} openImage={id=>setOpen(flat.findIndex(f=>f.id===id))} openStory={()=>setStory(i)}/>)}
    <InfinityScene reduced={reduced} onAgain={()=>scroll('rr-top')} onArchive={()=>scroll('archive')}/>
    {open!==null&&<MemoryModal items={flat} index={open} onIndex={setOpen} onClose={closeImg}/>}
    {story!==null&&<Modal onClose={closeStory} label={chapters[story].title}><article className="letter"><h3>{chapters[story].title}</h3><p>{chapters[story].longStory}</p></article></Modal>}
  </div>
}
