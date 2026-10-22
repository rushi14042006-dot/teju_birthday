import { useEffect, useRef } from 'react'
type P={s?:number}
export const Defs=()=><svg width="0" height="0" style={{position:'absolute'}} aria-hidden="true"><defs>
  <radialGradient id="gHeart" cx=".35" cy=".3" r=".9"><stop offset="0" stopColor="#fbd9e3"/><stop offset=".5" stopColor="#D98BA5"/><stop offset="1" stopColor="#8E304D"/></radialGradient>
  <radialGradient id="gPearl" cx=".35" cy=".3" r=".8"><stop offset="0" stopColor="#fff"/><stop offset="1" stopColor="#e6d6d9"/></radialGradient>
  <linearGradient id="gSatin" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fbd9e3"/><stop offset=".5" stopColor="#D98BA5"/><stop offset="1" stopColor="#f6c8d5"/></linearGradient>
  <linearGradient id="gWing" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#DCD3F4" stopOpacity=".95"/><stop offset="1" stopColor="#bfe0f2" stopOpacity=".6"/></linearGradient></defs></svg>
export const Heart=({s=40}:P)=><svg width={s} height={s} viewBox="0 0 24 24"><path d="M12 21C5 16.500 2 12.700 2 8.800 2 5.900 4.200 4 6.600 4c1.900 0 3.700 1 5.400 3.100C13.700 5 15.500 4 17.400 4 19.800 4 22 5.900 22 8.800c0 3.900-3 7.700-10 12.200z" fill="url(#gHeart)"/><ellipse cx="8" cy="8" rx="2.600" ry="1.400" fill="#fff" opacity=".55" transform="rotate(-35 8 8)"/></svg>
export const Bow=({s=60}:P)=><svg width={s} height={s*.67} viewBox="0 0 48 32"><path d="M24 16C14 2 2 4 3 16c1 10 12 12 21 0z" fill="url(#gSatin)"/><path d="M24 16C34 2 46 4 45 16c-1 10-12 12-21 0z" fill="url(#gSatin)"/><path d="M22 20l-6 11 6-3 2-8zM26 20l6 11-6-3-2-8z" fill="#D98BA5"/><rect x="20" y="11" width="8" height="10" rx="3" fill="#C9708F"/><ellipse cx="11" cy="11" rx="4" ry="1.600" fill="#fff" opacity=".5" transform="rotate(-25 11 11)"/></svg>
export const Pearl=({s=22}:P)=><svg width={s} height={s} viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" fill="url(#gPearl)"/></svg>
export const Sparkle=({s=22}:P)=><svg width={s} height={s} viewBox="0 0 24 24"><path d="M12 1l2.400 8.600L23 12l-8.600 2.400L12 23l-2.400-8.600L1 12l8.600-2.400z" fill="#E9CFA0"/></svg>
export const Butterfly=({s=44}:P)=><svg width={s} height={s*.75} viewBox="0 0 40 30"><g className="wing"><ellipse cx="11" cy="10" rx="10" ry="8" fill="url(#gWing)" stroke="#fff" strokeOpacity=".7"/><ellipse cx="13" cy="21" rx="6" ry="6" fill="url(#gWing)"/></g><g className="wing r"><ellipse cx="29" cy="10" rx="10" ry="8" fill="url(#gWing)" stroke="#fff" strokeOpacity=".7"/><ellipse cx="27" cy="21" rx="6" ry="6" fill="url(#gWing)"/></g><rect x="19" y="6" width="2" height="18" rx="1" fill="#8E304D" opacity=".6"/></svg>
export const Petal=({s=24}:P)=><svg width={s} height={s} viewBox="0 0 24 24"><path d="M12 2C19 8 19 16 12 22 5 16 5 8 12 2z" fill="#F6C8D5" opacity=".85"/></svg>
const comp={heart:Heart,bow:Bow,pearl:Pearl,star:Sparkle,fly:Butterfly,petal:Petal}
const items:{k:keyof typeof comp;x:number;y:number;s:number;d:number;t:number;dl:number}[]=[
 {k:'heart',x:3,y:18,s:34,d:18,t:7,dl:0},{k:'fly',x:92,y:12,s:46,d:26,t:9,dl:1},{k:'bow',x:90,y:64,s:52,d:14,t:8,dl:.5},{k:'pearl',x:5,y:70,s:22,d:30,t:6,dl:2},
 {k:'star',x:94,y:38,s:20,d:22,t:5,dl:1.5},{k:'petal',x:7,y:44,s:26,d:20,t:10,dl:3},{k:'heart',x:93,y:86,s:28,d:16,t:8,dl:2.5},{k:'pearl',x:88,y:24,s:16,d:34,t:7,dl:.8},
 {k:'star',x:4,y:88,s:18,d:24,t:6,dl:1.2},{k:'fly',x:6,y:56,s:36,d:28,t:11,dl:4},{k:'petal',x:95,y:52,s:22,d:18,t:9,dl:2},{k:'bow',x:3,y:6,s:40,d:12,t:9,dl:3.5}]
export default function Floaties() {
  const ref=useRef<HTMLDivElement>(null)
  useEffect(()=>{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||!matchMedia('(hover:hover) and (pointer:fine)').matches) return
    let raf=0
    const h=(e:MouseEvent)=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{const el=ref.current;if(!el)return;el.style.setProperty('--mx',String(e.clientX/innerWidth*2-1));el.style.setProperty('--my',String(e.clientY/innerHeight*2-1))})}
    addEventListener('mousemove',h,{passive:true}); return()=>{removeEventListener('mousemove',h);cancelAnimationFrame(raf)}
  },[])
  return <div className="floaties" ref={ref} aria-hidden="true">{items.map((it,i)=>{const C=comp[it.k];return <span key={i} className="fl" style={{left:`${it.x}%`,top:`${it.y}%`,'--d':it.d,'--t':`${it.t}s`,'--dl':`${it.dl}s`} as React.CSSProperties}><span className="fi"><C s={it.s}/></span></span>})}</div>
}
