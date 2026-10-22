import { useState } from 'react'
const qs=['Where would you like to be a year from now?','What are you proud of from this past year?','What are you ready to let go of?']
const blank='(you left this one blank, and that is allowed)'
export default function FutureYou() {
  const [a,setA]=useState(['','','']); const [done,setDone]=useState(false); const [copied,setCopied]=useState(false)
  const v=(i:number)=>a[i].trim()||blank
  const paras=[
   'Dear you,',
   `I am writing from a year ahead. You asked where you would like to be, and you said: “${v(0)}”. Whatever has actually happened, I hope some of that came true, and I hope the parts that did not turned into something better than you planned.`,
   `You told yourself you were proud of: “${v(1)}”. Keep hold of that. It was real when you said it, and it is still real.`,
   `You wanted to let go of: “${v(2)}”. You do not have to be finished with it. Putting it down a little more each day counts.`,
   'One more thing. You are allowed to change your mind about all of this, and you are allowed to be proud of yourself without a reason. Be kind to the person who wrote these answers. She was doing her best.',
   'With love, from the future']
  const text=paras.join('\n\n')
  return <div className="future">{!done?<form onSubmit={e=>{e.preventDefault();setDone(true)}}>
      {qs.map((q,i)=><div key={q}><label htmlFor={`f${i}`}>{q}</label><textarea id={`f${i}`} rows={3} value={a[i]} onChange={e=>setA(a.map((x,k)=>k===i?e.target.value:x))}/></div>)}
      <p className="note-s">Your answers stay in this browser tab. Nothing is saved or sent.</p><button className="btn">Write my letter</button></form>
    :<article className="letter">{paras.map((p,i)=><p key={i}>{p}</p>)}
      <p><button className="btn" onClick={()=>navigator.clipboard?.writeText(text).then(()=>setCopied(true))}>{copied?'Copied':'Copy my letter'}</button> <button className="btn ghost" onClick={()=>{setDone(false);setCopied(false)}}>Write it again</button></p></article>}</div>
}
