import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { albumPhotos } from '../data/reel'
import Photo from './Photo'

const spreads=Array.from({length:Math.ceil(albumPhotos.length/2)},(_,i)=>({left:albumPhotos[i*2],right:albumPhotos[i*2+1]}))
type Direction='forward'|'backward'

function Page({photo,side}:{photo:typeof albumPhotos[number]|undefined;side:'left'|'right'}) {
  return <div className={`album-page ${side}`}>
    {photo?<figure><Photo src={photo.src} alt={photo.caption}/><figcaption>{photo.caption}</figcaption></figure>
      :<div className="album-note"><span>To be continued…</span><small>♡</small></div>}
    <small className="page-number">{photo?.id ?? '♡'}</small>
  </div>
}

export default function Flipbook() {
  const [page,setPage]=useState(0)
  const [opened,setOpened]=useState(false)
  const [turning,setTurning]=useState<Direction|null>(null)
  const timer=useRef<number|undefined>(undefined)
  useEffect(()=>()=>{if(timer.current)window.clearTimeout(timer.current)},[])

  const turn=(direction:Direction)=>{
    if(turning)return
    if(direction==='forward'&&!opened){setOpened(true);return}
    if(direction==='backward'&&page===0){setOpened(false);return}
    if(direction==='forward'&&page===spreads.length-1)return
    setTurning(direction)
    timer.current=window.setTimeout(()=>{
      setPage(current=>Math.max(0,Math.min(spreads.length-1,current+(direction==='forward'?1:-1))))
      setTurning(null)
    },window.matchMedia('(prefers-reduced-motion: reduce)').matches?0:850)
  }

  const current=spreads[page]
  const forward=spreads[page+1]
  const backward=spreads[page-1]
  const front=turning==='backward'?current.left:current.right
  const back=turning==='backward'?backward?.right:forward?.left

  return <div className="albumwrap" tabIndex={0} aria-label="Photo album, use arrow keys to turn pages" onKeyDown={event=>{if(event.key==='ArrowRight')turn('forward');if(event.key==='ArrowLeft')turn('backward')}}>
    <div className="album-book">
      <div className="album-spread" aria-hidden={!opened}>
        <Page photo={current.left} side="left"/><Page photo={current.right} side="right"/>
      </div>
      {turning&&<div className={`flip-leaf ${turning}`} aria-hidden="true">
        <div className="leaf-face front"><Page photo={front} side={turning==='forward'?'right':'left'}/></div>
        <div className="leaf-face back"><Page photo={back} side={turning==='forward'?'left':'right'}/></div>
      </div>}
      <button className={`album-cover ${opened?'open':''}`} onClick={()=>setOpened(true)} aria-label="Open the photo album" tabIndex={opened?-1:0}>
        <span className="cover-title">Our Album</span><span className="cover-years">2019 — ∞</span><span className="cover-hint">tap to open ♡</span>
      </button>
    </div>
    <div className="albumnav">
      <button onClick={()=>turn('backward')} disabled={!opened&&!turning} aria-label="Previous page"><ChevronLeft/></button>
      <span aria-live="polite">{opened?`Spread ${page+1} of ${spreads.length}`:'Our photo album'}</span>
      <button onClick={()=>turn('forward')} disabled={opened&&page===spreads.length-1} aria-label={opened?'Next page':'Open album'}>{opened?<ChevronRight/>:'Open'}</button>
    </div>
  </div>
}
