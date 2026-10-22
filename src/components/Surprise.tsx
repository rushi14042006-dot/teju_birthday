import { ReactNode } from 'react'
import { Lock } from 'lucide-react'
import useNow from '../hooks/useNow'
import { fmt, preview, FRIENDS_SINCE } from '../data/config'
import { daily } from '../data/fun'
export function Sealed({at,label,children}:{at:number;label:string;children:ReactNode}) {
  const now=useNow(); if(preview||now>=at) return <>{children}</>
  return <div className="locked" role="status"><Lock size={22}/><p>{label}</p><b>{fmt(at-now)}</b></div>
}
export function Daily() {
  return <div className="daily">{daily.map(([d,t,p])=><article key={d} className="dcard">
    <Sealed at={new Date(2026,9,d).getTime()} label={`Opens at midnight on ${d} October`}><h3>{t}</h3><p>{p}</p></Sealed></article>)}</div>
}
export function Since() {
  const n=useNow(); const d=n-FRIENDS_SINCE
  const u:[string,number][]=[['Days',Math.floor(d/864e5)],['Hours',Math.floor(d/36e5)%24],['Minutes',Math.floor(d/6e4)%60],['Seconds',Math.floor(d/1e3)%60]]
  return <div className="units">{u.map(([l,v])=><div key={l} className="unit"><span className="num">{v}</span><small>{l}</small></div>)}</div>
}
