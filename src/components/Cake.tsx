import { useEffect, useRef, useState } from 'react'
import { birthdayExperience } from '../data/birthdayExperience'
const N=5
export default function Cake({onComplete}:{onComplete?:()=>void}) {
  const [lit,setLit]=useState<boolean[]>(Array(N).fill(false)); const [out,setOut]=useState(false); const [wished,setWished]=useState(false); const [mic,setMic]=useState<'off'|'on'|'denied'>('off')
  const litRef=useRef(lit); litRef.current=lit
  const stream=useRef<MediaStream|null>(null); const ctx=useRef<AudioContext|null>(null); const raf=useRef(0)
  const stop=()=>{cancelAnimationFrame(raf.current);stream.current?.getTracks().forEach(t=>t.stop());stream.current=null;ctx.current?.close().catch(()=>{});ctx.current=null;setMic(m=>m==='denied'?m:'off')}
  useEffect(()=>stop,[])
  const blow=()=>{if(!litRef.current.some(Boolean)||!wished)return;setLit(Array(N).fill(false));setOut(true);stop();onComplete?.()}
  const light=()=>{setOut(false);setWished(false);setLit(Array(N).fill(true))}
  const listen=async()=>{
    if(mic==='on'){stop();return}
    try{
      const s=await navigator.mediaDevices.getUserMedia({audio:true}); stream.current=s
      const c=new AudioContext(); ctx.current=c; const an=c.createAnalyser(); an.fftSize=512; c.createMediaStreamSource(s).connect(an)
      const d=new Uint8Array(an.fftSize); let hits=0; setMic('on')
      const loop=()=>{an.getByteTimeDomainData(d);let sum=0;for(const v of d){const x=(v-128)/128;sum+=x*x}
        hits=Math.sqrt(sum/d.length)>0.22?hits+1:0; if(hits>8){blow();return}; raf.current=requestAnimationFrame(loop)}
      loop()
    }catch{setMic('denied')}
  }
  const anyLit=lit.some(Boolean)
  return <div className={`cakebox birthday-cakebox${out?' candles-out':''}`}>
    <div className="cake" aria-hidden={false} role="group" aria-label={birthdayExperience.cake.heading}>
      <div className="candles">{lit.map((on,i)=><button key={i} className="candle" aria-pressed={on} aria-label={`Candle ${i+1}, ${on?'lit':'unlit'}`} onClick={()=>{setOut(false);setLit(l=>l.map((v,k)=>k===i?!v:v))}}>
        {on&&<span className="flame"/>}{out&&<span className="smoke" style={{animationDelay:`${i*.15}s`}}/>}</button>)}</div>
      <div className="tier t2"/><div className="tier t1"/><h2 className="birthday-cake-text">HAPPY BIRTHDAY, TEJU</h2></div>
    <div className="cakectl birthday-cake-controls">
      <button className="btn" onClick={light}>LIGHT THE CANDLES</button>
      <button className="btn ghost" onClick={()=>setWished(true)} disabled={!anyLit||wished}>I MADE MY WISH</button>
      <button className="btn ghost" onClick={listen} disabled={!anyLit||!wished}>{mic==='on'?'Stop listening':'Blow with your microphone'}</button>
      <button className="btn ghost" onClick={blow} disabled={!anyLit||!wished}>BLOW OUT THE CANDLES</button></div>
    <p className="birthday-wish-prompt" role="status">{out?birthdayExperience.cake.afterBlow:mic==='on'?'Listening… blow gently towards your device.':mic==='denied'?`Microphone unavailable. Use “${'BLOW OUT THE CANDLES'}” instead.`:!anyLit?'Light the candles when you’re ready.':!wished?birthdayExperience.cake.wishPrompt:'Your wish is yours to keep. Blow out the candles when you’re ready.'}</p>
  </div>
}
