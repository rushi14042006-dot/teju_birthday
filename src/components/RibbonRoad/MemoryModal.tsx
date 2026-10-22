import { useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Modal from '../Modal'
import Photo from '../Photo'
import { TimelineImage } from '../../types/timeline'
export default function MemoryModal({items,index,onIndex,onClose}:{items:TimelineImage[];index:number;onIndex:(i:number)=>void;onClose:()=>void}){
  const step=useCallback((d:number)=>onIndex((index+d+items.length)%items.length),[index,items.length,onIndex])
  const onKey=useCallback((k:string)=>{if(k==='ArrowRight')step(1);if(k==='ArrowLeft')step(-1)},[step])
  const m=items[index]
  return <Modal onClose={onClose} label="Mana memory chudandi" onKey={onKey}><div className="lb">
    <button className="nav l" onClick={()=>step(-1)} aria-label="Mundhu memory"><ChevronLeft/></button>
    <figure key={m.id}><Photo src={m.src} alt={m.alt}/><figcaption><b>{m.caption}</b> {m.date&&<i>{m.date}</i>}<p>{m.story}</p></figcaption></figure>
    <button className="nav r" onClick={()=>step(1)} aria-label="Tarvatha memory"><ChevronRight/></button></div></Modal>
}
