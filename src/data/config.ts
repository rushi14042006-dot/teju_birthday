// EDIT ME: dates, password and secrets. NOTE: everything here ships to the browser, so the password is a
// cute gate, not real security.
export const BIRTHDAY=new Date(2026,9,23,0,0,0).getTime()
export const CAPSULE=new Date(2027,9,23,0,0,0).getTime()
export const FRIENDS_SINCE=new Date(2019,0,1,0,0,0).getTime() // EDIT: the real day your friendship began
export const PASSWORD='kothi'      // front-end gate only; not real security
export const PASSWORD_HINT='Psst… your special nickname is the secret 🤫'
export const EGG_WORD='kothi'     // type this anywhere on the site, or click the ∞ in the footer
export const EGG_NOTE='[Add a secret note only she will find.]'
export const PREVIEW_KEY='letmein' // open the site with ?preview=letmein to see everything unlocked
export const preview=new URLSearchParams(location.search).get('preview')===PREVIEW_KEY
export const fmt=(ms:number)=>{const s=Math.floor(ms/1000);return `${Math.floor(s/86400)}d ${Math.floor(s/3600)%24}h ${Math.floor(s/60)%60}m ${s%60}s`}
