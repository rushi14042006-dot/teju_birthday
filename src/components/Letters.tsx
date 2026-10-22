import { useState, useCallback } from 'react'
import { letters, unsent, Letter } from '../data/letters'
import Modal from './Modal'
export default function Letters({which}:{which:'openwhen'|'unsent'}) {
  const [o,setO]=useState<Letter|null>(null); const [op,setOp]=useState<string|null>(null)
  const close=useCallback(()=>setO(null),[])
  const items=which==='unsent'?[unsent]:letters
  return <><div className={which==='unsent'?'env-one':'env-grid'}>{items.map(l=>
    <button key={l.id} className={`env${op===l.id?' opening':''}`} onClick={()=>{setOp(l.id);setTimeout(()=>{setO(l);setOp(null)},600)}}><i className="seal" aria-hidden="true">♥</i><span>{which==='unsent'?'Open the letter':l.title}</span></button>)}</div>
    {o&&<Modal onClose={close} label={o.title}><article className="letter"><h3>{o.title}</h3>{o.body.map((p,i)=><p key={i}>{p}</p>)}</article></Modal>}</>
}
