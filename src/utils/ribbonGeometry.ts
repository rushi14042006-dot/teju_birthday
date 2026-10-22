export interface Pt{x:number;y:number}
// Builds one continuous ribbon path through chapter anchors (measured from the real layout).
export function buildRibbonPath(anchors:Pt[],o:{cx:number;amp:number;height:number;mobile:boolean;loops:boolean[]}){
  let d=`M ${o.cx} 0`,px=o.cx,py=0
  anchors.forEach((a,i)=>{const x=o.mobile?o.cx+(i%2?8:-8):o.cx+(i%2?o.amp:-o.amp),m=py+(a.y-py)/2
    d+=` C ${px} ${m} ${x} ${m} ${x} ${a.y}`;px=x;py=a.y
    if(o.loops[i]&&!o.mobile) d+=' c 70 -10 70 90 0 80 c -70 -10 -50 -60 0 -80'})
  return d+` C ${px} ${py+80} ${o.cx} ${o.height-80} ${o.cx} ${o.height}`
}
// Lemniscate (infinity). t from PI/2 starts and ends at the centre crossing.
export function infinityPath(w:number,h:number,t0=Math.PI/2,t1=Math.PI*2.5,n=160){
  const a=w*.42,pts:string[]=[]
  for(let i=0;i<=n;i++){const t=t0+(t1-t0)*i/n,s=1+Math.sin(t)**2
    pts.push(`${(w/2+a*Math.cos(t)/s).toFixed(1)} ${(h/2+1.3*a*Math.sin(t)*Math.cos(t)/s).toFixed(1)}`)}
  return 'M'+pts.join(' L')
}
