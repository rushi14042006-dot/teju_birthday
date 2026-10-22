// Put ORIGINAL photos in photos-original/ using the same sub-folders as public/images (archive/, reel/, ...).
// Run: npm run images  -> resized, compressed .jpg copies are written into public/images/. Originals are untouched.
import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import path from 'node:path'
const IN='photos-original', OUT='public/images'
async function walk(d){for(const e of await readdir(d,{withFileTypes:true})){const p=path.join(d,e.name)
  if(e.isDirectory()) await walk(p)
  else if(/\.(jpe?g|png|webp)$/i.test(e.name)){const out=path.join(OUT,path.relative(IN,p).replace(/\.[^.]+$/,'.jpg'))
    await mkdir(path.dirname(out),{recursive:true})
    await sharp(p).rotate().resize({width:1600,withoutEnlargement:true}).jpeg({quality:78,mozjpeg:true}).toFile(out); console.log('✓',out)}}}
await walk(IN)
