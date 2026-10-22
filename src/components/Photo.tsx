import { useState } from 'react'
export default function Photo({src,alt,className=''}:{src:string;alt:string;className?:string}) {
  const [bad,setBad]=useState(false); const [ok,setOk]=useState(false)
  if(bad) return <div className={`ph ${className}`} role="img" aria-label={alt}><span>Add photo<br/><small>{src}</small></span></div>
  return <img className={`${className} ${ok?'dev':'undev'}`} src={src} alt={alt} loading="lazy" onLoad={()=>setOk(true)} onError={()=>{console.warn('Missing image:',src);setBad(true)}}/>
}
