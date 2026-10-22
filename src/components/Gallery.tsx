import { useState, useCallback } from 'react'
import { memories, categories } from '../data/memories'
import Photo from './Photo'
import Modal from './Modal'
import { ChevronLeft, ChevronRight } from 'lucide-react'
export default function Gallery() {
  const [cat,setCat]=useState<string>('All Memories'); const [open,setOpen]=useState<number|null>(null)
  const list=cat==='All Memories'?memories:memories.filter(m=>m.category===cat)
  const step=useCallback((d:number)=>setOpen(o=>o===null?o:(o+d+list.length)%list.length),[list.length])
  const onKey=useCallback((k:string)=>{if(k==='ArrowRight')step(1);if(k==='ArrowLeft')step(-1)},[step])
  const close=useCallback(()=>setOpen(null),[])
  const m=open!==null?list[open]:null
  return <>
    <div className="chips" role="group" aria-label="Filter memories">
      {['All Memories',...categories].map(c=><button key={c} aria-pressed={c===cat} className={c===cat?'on':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
    <div className="masonry">{list.map((x,i)=><button key={x.id} className="tile" style={{'--r':`${((x.id%5)-2)*0.6}deg`} as React.CSSProperties} onClick={()=>setOpen(i)} aria-label={`Open ${x.title}`}>
      <Photo src={x.src} alt={x.caption}/></button>)}</div>
    {m&&<Modal onClose={close} label="Photo viewer" onKey={onKey}>
      <div className="lb"><button className="nav l" onClick={()=>step(-1)} aria-label="Previous"><ChevronLeft/></button>
        <figure key={m.id}><Photo src={m.src} alt={m.caption}/><figcaption><b>{m.title}</b> {m.date&&<i>{m.date}</i>}<p>{m.caption}</p>{m.story&&<p>{m.story}</p>}{m.note&&<span className="hand">{m.note}</span>}</figcaption></figure>
        <button className="nav r" onClick={()=>step(1)} aria-label="Next"><ChevronRight/></button></div></Modal>}
  </>
}
