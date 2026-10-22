import { useState, useMemo } from 'react'
import { Heart } from './Floaties'
const cols=['#C4A66B','#DDBCC4','#E8E0F2','#D8E2D4','#6D3748']
export default function Finale() {
  const [wish,setWish]=useState(''); const [shown,setShown]=useState(''); const [n,setN]=useState(0)
  const bits=useMemo(()=>Array.from({length:36},(_,i)=>({l:Math.random()*100,d:Math.random()*1.2,t:3+Math.random()*2,c:cols[i%5],r:Math.random()*360})),[n])
  return <div className="wish">
    <div className="stars" aria-hidden="true">{Array.from({length:14},(_,i)=><i key={i} style={{left:`${(i*37)%100}%`,top:`${(i*53)%90}%`,animationDelay:`${i*.3}s`}}>✦</i>)}</div>
    <div className="stars" aria-hidden="true">{[0,1,2,3].map(i=><span key={i} className="fh" style={{left:`${10+i*26}%`,animationDelay:`${i*1.3}s`}}><Heart s={26}/></span>)}</div>
    {n>0&&<div className="confetti" key={n} aria-hidden="true">{bits.map((b,i)=><b key={i} style={{left:`${b.l}%`,background:b.c,animationDelay:`${b.d}s`,animationDuration:`${b.t}s`,transform:`rotate(${b.r}deg)`}}/>)}</div>}
    <form onSubmit={e=>{e.preventDefault();if(!wish.trim())return;setShown(wish.trim());setN(n+1)}}>
    <label htmlFor="w">Make a wish. It stays in this browser tab.</label>
    <input id="w" value={wish} onChange={e=>setWish(e.target.value)} placeholder="Type your wish…"/><button className="btn">Release it</button></form>
    {shown&&<p className="bloom" aria-live="polite">✦ {shown} ✦</p>}</div>
}
