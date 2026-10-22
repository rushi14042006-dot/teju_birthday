import Photo from '../Photo'
import { TimelineImage } from '../../types/timeline'
export default function PolaroidCard({img,i,featured,onOpen}:{img:TimelineImage;i:number;featured:boolean;onOpen:()=>void}){
  return <button className={`rr-pol${featured?' rr-feat':''}`} style={{'--r':`${((i%3)-1)*3}deg`} as React.CSSProperties} onClick={onOpen} aria-label={`Memory ni chudu: ${img.caption}`}>
    <Photo src={img.src} alt={img.alt}/><span className="hand">{img.caption}</span></button>
}
