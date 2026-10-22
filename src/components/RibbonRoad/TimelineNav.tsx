import { TimelineChapter } from '../../types/timeline'
export default function TimelineNav({chapters,active,jump}:{chapters:TimelineChapter[];active:number;jump:(i:number)=>void}){
  return <nav className="rr-nav" aria-label="Mana katha chapters">
    <span><b>Mana Katha</b> · Adhyayam {String(active+1).padStart(2,'0')} · {chapters[active].year}</span>
    <span className="rr-dots">{chapters.map((c,i)=><button key={c.id} className={i===active?'on':''} aria-label={`${c.label} ki vellu`} aria-current={i===active?'true':undefined} onClick={()=>jump(i)}/>)}</span>
    <button className="rr-next" onClick={()=>jump(Math.min(active+1,chapters.length-1))}>Tarvatha adhyayam ↓</button><span className="rr-bar" aria-hidden="true"/></nav>
}
