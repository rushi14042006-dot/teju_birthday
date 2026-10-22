import { useState } from 'react'
export default function HiddenNote({text}:{text:string}){
  const [open,setOpen]=useState(false)
  return <div className="rr-note"><button className="hnote" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'Note ni malli mooseyyi ♡':'Oka chinna note ikkada dachanu ✉'}</button>
    {open&&<p className="paper" role="note">{text} ♡</p>}</div>
}
