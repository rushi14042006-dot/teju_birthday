import { useEffect, useState } from 'react'
export default function useNow(ms=1000){const [n,setN]=useState(Date.now());useEffect(()=>{const id=setInterval(()=>setN(Date.now()),ms);return()=>clearInterval(id)},[ms]);return n}
