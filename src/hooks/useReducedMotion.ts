import { useEffect, useState } from 'react'
const q='(prefers-reduced-motion: reduce)'
export default function useReducedMotion(){const [r,setR]=useState(()=>matchMedia(q).matches);useEffect(()=>{const m=matchMedia(q);const h=()=>setR(m.matches);m.addEventListener('change',h);return()=>m.removeEventListener('change',h)},[]);return r}
