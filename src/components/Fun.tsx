import { useState } from 'react'
import { quiz, verdicts, awards } from '../data/fun'
export function Quiz() {
  const [i,setI]=useState(0); const [score,setScore]=useState(0); const [pick,setPick]=useState<number|null>(null)
  if(i>=quiz.length) return <div><p className="serif">{verdicts[score]}</p><p>You scored {score} out of {quiz.length}.</p><button className="btn" onClick={()=>{setI(0);setScore(0);setPick(null)}}>Play again</button></div>
  const q=quiz[i]
  return <div className="quiz"><p className="serif">{i+1}/{quiz.length}. {q.q}</p>
    <div className="opts">{q.o.map((o,k)=><button key={k} disabled={pick!==null} className={pick===null?'':k===q.a?'good':k===pick?'bad':''} onClick={()=>{setPick(k);if(k===q.a)setScore(s=>s+1)}}>{o}</button>)}</div>
    {pick!==null&&<p aria-live="polite">{pick===q.a?'Correct.':'Not quite.'} <button className="btn" onClick={()=>{setI(i+1);setPick(null)}}>{i+1===quiz.length?'See result':'Next'}</button></p>}</div>
}
export function Awards() {
  const [on,setOn]=useState<number[]>([])
  return <div className="awards">{awards.map(([t,w],i)=>{const o=on.includes(i);return <button key={t} className={`award${o?' open':''}`} aria-expanded={o} onClick={()=>setOn(o?on.filter(x=>x!==i):[...on,i])}>
    <small>Best in category</small><h3>{t}</h3><p>{o?`And the award goes to… ${w}`:'Tap to open the envelope'}</p></button>})}</div>
}
