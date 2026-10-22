import { useEffect, useRef, ReactNode } from 'react'
import { X } from 'lucide-react'
export default function Modal({onClose,label,children,onKey}:{onClose:()=>void;label:string;children:ReactNode;onKey?:(k:string)=>void}) {
  const ref=useRef<HTMLButtonElement>(null)
  useEffect(()=>{
    const prev=document.activeElement as HTMLElement|null
    ref.current?.focus(); document.body.style.overflow='hidden'
    const h=(e:KeyboardEvent)=>{ if(e.key==='Escape') onClose(); else onKey?.(e.key) }
    window.addEventListener('keydown',h)
    return()=>{window.removeEventListener('keydown',h);document.body.style.overflow='';prev?.focus()}
  },[onClose,onKey])
  return <div className="modal" role="dialog" aria-modal="true" aria-label={label} onClick={onClose}>
    <div className="modal-in" onClick={e=>e.stopPropagation()}>
      <button ref={ref} className="close" onClick={onClose} aria-label="Close"><X size={20}/></button>{children}</div></div>
}
