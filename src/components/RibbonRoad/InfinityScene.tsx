import { useEffect, useRef } from 'react'
import { gsap } from '../../utils/gsap'
import { infinityPath } from '../../utils/ribbonGeometry'
import { ribbon } from '../../data/ribbonConfig'
import { chapters } from '../../data/timelineChapters'
import Photo from '../Photo'
const full=infinityPath(600,260), over=infinityPath(600,260,Math.PI/2-.45,Math.PI/2+.45,30)
const layers=[['base',ribbon.colors.base,ribbon.widths.base],['mid',ribbon.colors.mid,ribbon.widths.mid],['shine',ribbon.colors.shine,ribbon.widths.shine]] as const
const pics=[[0,'2%','0%'],[1,'74%','6%'],[3,'36%','86%']] as const
export default function InfinityScene({reduced,onAgain,onArchive}:{reduced:boolean;onAgain:()=>void;onArchive:()=>void}){
  const ref=useRef<HTMLElement>(null)
  useEffect(()=>{
    const el=ref.current!, ps=Array.from(el.querySelectorAll<SVGPathElement>('.inf-p')), len=ps[0].getTotalLength()
    ps.forEach(p=>{p.style.strokeDasharray=String(len);p.style.strokeDashoffset=String(reduced?0:len)})
    if(reduced) return
    const ctx=gsap.context(()=>{
      gsap.timeline({scrollTrigger:{trigger:el,start:'top 65%',end:'center 45%',scrub:.8}})
        .to(ps,{strokeDashoffset:0,ease:'none',duration:3}).from('.inf-o',{opacity:0,duration:.4})
        .from('.inf-pic',{scale:.6,opacity:0,stagger:.2,duration:.6}).from('.inf-txt>*',{opacity:0,y:16,stagger:.2,duration:.6},'<')
      gsap.to('.inf-svg',{y:-6,repeat:-1,yoyo:true,duration:4,ease:'sine.inOut'})
    },el); return()=>ctx.revert()
  },[reduced])
  const layer=(cls:string)=>layers.map(([n,c,w])=><path key={n} className={cls} d={cls==='inf-p'?full:over} fill="none" stroke={c} strokeWidth={w} strokeLinecap="round"/>)
  return <section id="rr-end" ref={ref} className="inf-scene" aria-labelledby="inf-h">
    <div className="inf-txt"><h3 id="inf-h" className="rr-h">2019 Nunchi Infinity Varaku ♾️</h3>
      <p>Naa Teju ki, naa Kothi ki... malli mana story start chese chance vachhina, mana paths kalisina aa beginning gurinchi nenu happy gaane feel avutha. Yashu valla parichayam, aa chinna “hi,” 10th class closeness, intermediate gap, engineering lo malli manam close avvadam... mana katha perfect kaakapovachu, kaani naaku chala special. Happy Birthday, naa Teju. Mana friendship ni cherish cheskuntu, inka enno memories create cheskundham. Mana katha 2019 lo modalayyindi; ending maatram infinity. ♾️</p><p className="serif big">2019 → ∞</p><p className="hand">Mana katha... inka raayalsina pages chala unnayi. · Forever nee Nani, Rushi ♡</p></div>
    <div className="inf-stage"><svg className="inf-svg" viewBox="0 0 600 260" role="img" aria-label="Infinity ga maarina satin ribbon">
      {layer('inf-p')}<g className="inf-o"><path d={over} fill="none" stroke="#8E304D" strokeOpacity=".2" strokeWidth="38" strokeLinecap="round" style={{filter:'blur(4px)'}}/>{layer('inf-o2')}</g></svg>
      {pics.map(([ci,l,t])=><span key={ci} className="inf-pic" style={{left:l,top:t}} aria-hidden="true"><Photo src={chapters[ci].images[0].src} alt=""/></span>)}</div>
    <p><button className="btn" onClick={onAgain}>Mana katha malli chuddam</button> <button className="btn ghost" onClick={onArchive}>Mana memories chuddam</button></p></section>
}
