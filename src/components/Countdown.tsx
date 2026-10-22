import { useEffect, useState } from 'react'
import { getBirthdayCountdown } from '../data/kothiTimes'
import { BIRTHDAY } from '../data/config'
const calc=()=>{const t=getBirthdayCountdown(new Date());return{done:t.today,days:t.days,h:t.hours,m:t.minutes,s:t.seconds}}
const dateLabel=new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long'}).format(new Date(BIRTHDAY))
export default function Countdown() {
  const [t,setT]=useState(calc)
  useEffect(()=>{const id=setInterval(()=>setT(calc()),1000);return()=>clearInterval(id)},[])
  const u:[string,number][]=[['Days',t.days],['Hours',t.h],['Minutes',t.m],['Seconds',t.s]]
  return <section id="countdown" className="count" aria-label="Countdown to Teju's birthday">
    <p className="hand">Until {dateLabel}, Teju’s birthday</p>
    {t.done?<h2>It’s today. Happy birthday, Teju.</h2>
    :<div className="units" role="timer">{u.map(([l,v])=><div key={l} className="unit"><span key={v} className="num">{String(v).padStart(2,'0')}</span><small>{l}</small></div>)}</div>}
  </section>
}
