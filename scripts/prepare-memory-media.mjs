import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const folder = (name) => path.join(root, 'photos-original', name)
const activeImages = (name) => fs.readdirSync(folder(name)).filter((file) => /\.(jpe?g|png)$/i.test(file)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}))
const allUs = activeImages('us')
const allChild = activeImages('child teju')
const extra = [
  ['asthetics','IMG-20250109-WA0004.jpg'],
  ['asthetics','IMG-20260813-WA0108.jpg'],
  ['mirror','IMG-20260813-WA0082.jpg'],
  ['mirror','IMG-20260813-WA0128.jpg'],
  ['archive','1723544187023.jpg'],
  ['archive','IMG-20240806-WA0012.jpg'],
]
const seedShuffle = (arr, seed) => {
  let state = seed >>> 0
  const random = () => { state = (state * 1664525 + 1013904223) >>> 0; return state / 4294967296 }
  const out = [...arr]
  for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [out[i],out[j]] = [out[j],out[i]] }
  return out
}
if (allUs.length !== 20 || allChild.length !== 4) throw new Error(`Expected 20 us and 4 child photos, found ${allUs.length} and ${allChild.length}`)
for (const [dir,file] of extra) if (!fs.existsSync(path.join(folder(dir),file))) throw new Error(`Missing selected photo ${dir}/${file}`)
const reelInputs = seedShuffle([
  ...allUs.map(file=>({dir:'us',file,kind:'us'})),
  ...allChild.map(file=>({dir:'child teju',file,kind:'child'})),
  ...extra.map(([dir,file])=>({dir,file,kind:dir==='mirror'?'mirror':dir==='archive'?'throwback':'outdoor'})),
], 20190518)
const albumInputs = seedShuffle(allUs.map(file=>({dir:'us',file,kind:'us'})), 20190522)
const pools = {
  us: [
    'Phone loki chusthunna… nee kallaloki direct ga chudaleka 😳💞',
    'Nuvvu pakkana unte camera kuda jealous avuthundi 😌📸',
    'Ninnu chusthe photo kante smile ekkuva vasthundi 🥰✨',
    'Mana combo ki filter avasaram ledhu kada 😚💖',
    'Nee pakkana unte naa face automatic ga happy mode lo untundi 😁💕',
  ],
  child: [
    'Appude intha cute aa? Ippudu double cute 🥹💕',
    'Chinna Teju… cuteness appati nunchi full on 😍🧸',
    'Ee tiny smile ki appude fans undevaaru emo 🥰✨',
    'Kothi cuteness ki starting nunchi limit ledhu 😚💗',
  ],
  mirror: [
    'Mirror ni andhani chusi kullukontundhi 😌🪞✨',
    'Mirror selfie pichidi… pose maatram super pichidi 😜🪞',
    'Mirror kuda “nenu inka enduku?” ani feel avuthundi 😏💕',
  ],
  outdoor: [
    'Bayata view baagundi… kaani nee look inka baagundi 🌿😍',
    'Prakruthi pakkana, andam madhyalo nuvvu 🌸✨',
    'Ee pose ki background kuda fan aipoyindi 😚🌿',
  ],
  throwback: [
    'Old pic, same cute face… unfair kada 😌💕',
    'Appati nunchi ila cute ga unte ela Kothi? 🥹✨',
    'Ee look ki time kuda emi cheyyalekapoyindi 😍💗',
  ],
}
const captions = (kind,index)=>{const pool=pools[kind];return pool[index%pool.length]}
const category = {us:'Mana Moments',child:'Chinnappati Photos',mirror:'Mirror Moments',outdoor:'Outdoor Moments',throwback:'Throwback Photos'}
const title = {us:'Naa favorite person 💞',child:'Chinna Teju 🧸',mirror:'Mirror selfie pichidi 🪞',outdoor:'Andamaina pose 🌸',throwback:'Cute then, cute now ✨'}
const writeAssets = async (items, dir, prefix) => {
  const dest=path.join(root,'public','images',dir);fs.mkdirSync(dest,{recursive:true})
  const out=[]
  for(let i=0;i<items.length;i++){
    const item=items[i], num=String(i+1).padStart(3,'0'), src=path.join(folder(item.dir),item.file), file=`${prefix}-${num}.jpg`
    await sharp(src).rotate().resize({width:1600,withoutEnlargement:true}).jpeg({quality:82,mozjpeg:true}).toFile(path.join(dest,file))
    const kind=item.kind, caption=captions(kind,i)
    out.push({id:i+1,src:`/images/${dir}/${file}`,title:title[kind],caption,category:category[kind],source:`photos-original/${item.dir}/${item.file}`})
  }
  return out
}
const reel=await writeAssets(reelInputs,'reel','reel')
const album=await writeAssets(albumInputs,'album','album')
const toTs=(arr)=>JSON.stringify(arr,null,2)
const reelSrc=`// The 30 mixed photos used by the opposite-moving strips and reel gallery.\nexport interface ReelItem { id:number; src:string; title:string; caption:string; category:string; source:string; date?:string }\nexport const reel: ReelItem[] = ${toTs(reel)}\n\nexport interface AlbumItem { id:number; src:string; title:string; caption:string; category:string; source:string; date?:string }\nexport const albumPhotos: AlbumItem[] = ${toTs(album)}\n`
fs.writeFileSync(path.join(root,'src','data','reel.ts'),reelSrc)
console.log(`Prepared ${reel.length} reel images (${allUs.length} us, ${allChild.length} childhood, ${extra.length} other) and ${album.length} album images.`)
