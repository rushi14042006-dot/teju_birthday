// Each caption is a short Roman Telugu note; photos are intentionally interleaved by category.
export type Category = 'Outdoor Moments'|'Portrait Vibes'|'Selfie Samayam'|'Chinnappati Photos'|'Mirror Moments'|'Mana Moments'|'Special Rojulu'|'Throwback Photos'
export const categories: Category[] = ["Outdoor Moments","Portrait Vibes","Selfie Samayam","Chinnappati Photos","Mirror Moments","Mana Moments","Special Rojulu","Throwback Photos"]
export interface Memory { id:number; src:string; title:string; caption:string; date?:string; category:Category; story?:string; note?:string }
export const memories: Memory[] = [
  {
    "id": 1,
    "src": "/images/memories/memory-001.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 2,
    "src": "/images/memories/memory-002.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nee look ki oka separate fan page open cheyyali 😍✨",
    "category": "Portrait Vibes"
  },
  {
    "id": 3,
    "src": "/images/memories/memory-003.jpg",
    "title": "Selfie samayam",
    "caption": "Cute ga unnav ani cheppadaniki selfie chaalu 😍💗",
    "category": "Selfie Samayam"
  },
  {
    "id": 4,
    "src": "/images/memories/memory-004.jpg",
    "title": "Chinnappati gurthulu",
    "caption": "Chinna Teju… cuteness appati nunchi full on 😍🧸",
    "category": "Chinnappati Photos"
  },
  {
    "id": 5,
    "src": "/images/memories/memory-005.jpg",
    "title": "Mirror moment",
    "caption": "Mirror kuda “nenu inka enduku?” ani feel avuthundi 😏💕",
    "category": "Mirror Moments"
  },
  {
    "id": 6,
    "src": "/images/memories/memory-006.jpg",
    "title": "Manam kalisi",
    "caption": "Ninnu chusthe photo kante smile ekkuva vasthundi 🥰✨",
    "category": "Mana Moments"
  },
  {
    "id": 7,
    "src": "/images/memories/memory-007.jpg",
    "title": "Oka special roju",
    "caption": "Ready ayi vachhina nee style ki salaam 😌💕",
    "category": "Special Rojulu"
  },
  {
    "id": 8,
    "src": "/images/memories/memory-008.jpg",
    "title": "Paatha photo",
    "caption": "Throwback lo kuda full heroine vibes 😚🎞️",
    "category": "Throwback Photos"
  },
  {
    "id": 9,
    "src": "/images/memories/memory-009.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 10,
    "src": "/images/memories/memory-010.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nee look ki oka separate fan page open cheyyali 😍✨",
    "category": "Portrait Vibes"
  },
  {
    "id": 11,
    "src": "/images/memories/memory-011.jpg",
    "title": "Selfie samayam",
    "caption": "Selfie lo kuda full attention nuvve 🥰📱",
    "category": "Selfie Samayam"
  },
  {
    "id": 12,
    "src": "/images/memories/memory-012.jpg",
    "title": "Chinnappati gurthulu",
    "caption": "Appude intha cute aa? Ippudu double cute 🥹💕",
    "category": "Chinnappati Photos"
  },
  {
    "id": 13,
    "src": "/images/memories/memory-013.jpg",
    "title": "Mirror moment",
    "caption": "Mirror kuda “nenu inka enduku?” ani feel avuthundi 😏💕",
    "category": "Mirror Moments"
  },
  {
    "id": 14,
    "src": "/images/memories/memory-014.jpg",
    "title": "Manam kalisi",
    "caption": "Phone loki chusthunna… nee kallaloki direct ga chudaleka 😳💞",
    "category": "Mana Moments"
  },
  {
    "id": 15,
    "src": "/images/memories/memory-015.jpg",
    "title": "Oka special roju",
    "caption": "Ee roju highlight nuvve, Kothi 💖🌸",
    "category": "Special Rojulu"
  },
  {
    "id": 16,
    "src": "/images/memories/memory-016.jpg",
    "title": "Paatha photo",
    "caption": "Throwback lo kuda full heroine vibes 😚🎞️",
    "category": "Throwback Photos"
  },
  {
    "id": 17,
    "src": "/images/memories/memory-017.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 18,
    "src": "/images/memories/memory-018.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nee look ki oka separate fan page open cheyyali 😍✨",
    "category": "Portrait Vibes"
  },
  {
    "id": 19,
    "src": "/images/memories/memory-019.jpg",
    "title": "Selfie samayam",
    "caption": "Selfie lo kuda full attention nuvve 🥰📱",
    "category": "Selfie Samayam"
  },
  {
    "id": 20,
    "src": "/images/memories/memory-020.jpg",
    "title": "Chinnappati gurthulu",
    "caption": "Ee tiny smile ki appude fans undevaaru emo 🥰✨",
    "category": "Chinnappati Photos"
  },
  {
    "id": 21,
    "src": "/images/memories/memory-021.jpg",
    "title": "Mirror moment",
    "caption": "Mirror kuda “nenu inka enduku?” ani feel avuthundi 😏💕",
    "category": "Mirror Moments"
  },
  {
    "id": 22,
    "src": "/images/memories/memory-022.jpg",
    "title": "Manam kalisi",
    "caption": "Phone loki chusthunna… nee kallaloki direct ga chudaleka 😳💞",
    "category": "Mana Moments"
  },
  {
    "id": 23,
    "src": "/images/memories/memory-023.jpg",
    "title": "Oka special roju",
    "caption": "Celebration kanna nee smile ekkuva bright ga undi 🥰🎉",
    "category": "Special Rojulu"
  },
  {
    "id": 24,
    "src": "/images/memories/memory-024.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 25,
    "src": "/images/memories/memory-025.jpg",
    "title": "Paatha photo",
    "caption": "Appati nunchi ila cute ga unte ela Kothi? 🥹✨",
    "category": "Throwback Photos"
  },
  {
    "id": 26,
    "src": "/images/memories/memory-026.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nuvvu ila unte camera ki kuda crush vasthundi 📸🥰",
    "category": "Portrait Vibes"
  },
  {
    "id": 27,
    "src": "/images/memories/memory-027.jpg",
    "title": "Selfie samayam",
    "caption": "Selfie lo kuda full attention nuvve 🥰📱",
    "category": "Selfie Samayam"
  },
  {
    "id": 28,
    "src": "/images/memories/memory-028.jpg",
    "title": "Chinnappati gurthulu",
    "caption": "Chinna Teju… cuteness appati nunchi full on 😍🧸",
    "category": "Chinnappati Photos"
  },
  {
    "id": 29,
    "src": "/images/memories/memory-029.jpg",
    "title": "Mirror moment",
    "caption": "Mirror ni andhani chusi kullukontundhi 😌🪞✨",
    "category": "Mirror Moments"
  },
  {
    "id": 30,
    "src": "/images/memories/memory-030.jpg",
    "title": "Manam kalisi",
    "caption": "Phone loki chusthunna… nee kallaloki direct ga chudaleka 😳💞",
    "category": "Mana Moments"
  },
  {
    "id": 31,
    "src": "/images/memories/memory-031.jpg",
    "title": "Oka special roju",
    "caption": "Ready ayi vachhina nee style ki salaam 😌💕",
    "category": "Special Rojulu"
  },
  {
    "id": 32,
    "src": "/images/memories/memory-032.jpg",
    "title": "Paatha photo",
    "caption": "Appati nunchi ila cute ga unte ela Kothi? 🥹✨",
    "category": "Throwback Photos"
  },
  {
    "id": 33,
    "src": "/images/memories/memory-033.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 34,
    "src": "/images/memories/memory-034.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nuvvu ila unte camera ki kuda crush vasthundi 📸🥰",
    "category": "Portrait Vibes"
  },
  {
    "id": 35,
    "src": "/images/memories/memory-035.jpg",
    "title": "Selfie samayam",
    "caption": "Ee selfie chusthe naa mood automatic ga set 😚✨",
    "category": "Selfie Samayam"
  },
  {
    "id": 36,
    "src": "/images/memories/memory-036.jpg",
    "title": "Mirror moment",
    "caption": "Mirror kuda “nenu inka enduku?” ani feel avuthundi 😏💕",
    "category": "Mirror Moments"
  },
  {
    "id": 37,
    "src": "/images/memories/memory-037.jpg",
    "title": "Manam kalisi",
    "caption": "Phone loki chusthunna… nee kallaloki direct ga chudaleka 😳💞",
    "category": "Mana Moments"
  },
  {
    "id": 38,
    "src": "/images/memories/memory-038.jpg",
    "title": "Oka special roju",
    "caption": "Special day ki special look… full points neeke 😍✨",
    "category": "Special Rojulu"
  },
  {
    "id": 39,
    "src": "/images/memories/memory-039.jpg",
    "title": "Paatha photo",
    "caption": "Throwback lo kuda full heroine vibes 😚🎞️",
    "category": "Throwback Photos"
  },
  {
    "id": 40,
    "src": "/images/memories/memory-040.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 41,
    "src": "/images/memories/memory-041.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nuvvu ila unte camera ki kuda crush vasthundi 📸🥰",
    "category": "Portrait Vibes"
  },
  {
    "id": 42,
    "src": "/images/memories/memory-042.jpg",
    "title": "Selfie samayam",
    "caption": "Selfie lo kuda full attention nuvve 🥰📱",
    "category": "Selfie Samayam"
  },
  {
    "id": 43,
    "src": "/images/memories/memory-043.jpg",
    "title": "Mirror moment",
    "caption": "Mirror kuda “nenu inka enduku?” ani feel avuthundi 😏💕",
    "category": "Mirror Moments"
  },
  {
    "id": 44,
    "src": "/images/memories/memory-044.jpg",
    "title": "Manam kalisi",
    "caption": "Phone loki chusthunna… nee kallaloki direct ga chudaleka 😳💞",
    "category": "Mana Moments"
  },
  {
    "id": 45,
    "src": "/images/memories/memory-045.jpg",
    "title": "Oka special roju",
    "caption": "Celebration kanna nee smile ekkuva bright ga undi 🥰🎉",
    "category": "Special Rojulu"
  },
  {
    "id": 46,
    "src": "/images/memories/memory-046.jpg",
    "title": "Paatha photo",
    "caption": "Throwback lo kuda full heroine vibes 😚🎞️",
    "category": "Throwback Photos"
  },
  {
    "id": 47,
    "src": "/images/memories/memory-047.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 48,
    "src": "/images/memories/memory-048.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nee look ki oka separate fan page open cheyyali 😍✨",
    "category": "Portrait Vibes"
  },
  {
    "id": 49,
    "src": "/images/memories/memory-049.jpg",
    "title": "Selfie samayam",
    "caption": "Selfie lo kuda full attention nuvve 🥰📱",
    "category": "Selfie Samayam"
  },
  {
    "id": 50,
    "src": "/images/memories/memory-050.jpg",
    "title": "Mirror moment",
    "caption": "Mirror kuda “nenu inka enduku?” ani feel avuthundi 😏💕",
    "category": "Mirror Moments"
  },
  {
    "id": 51,
    "src": "/images/memories/memory-051.jpg",
    "title": "Manam kalisi",
    "caption": "Ninnu chusthe photo kante smile ekkuva vasthundi 🥰✨",
    "category": "Mana Moments"
  },
  {
    "id": 52,
    "src": "/images/memories/memory-052.jpg",
    "title": "Paatha photo",
    "caption": "Old pic, same cute face… unfair kada 😌💕",
    "category": "Throwback Photos"
  },
  {
    "id": 53,
    "src": "/images/memories/memory-053.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 54,
    "src": "/images/memories/memory-054.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Andam ante nuvve ani dictionary lo add cheyyali 😌🌸",
    "category": "Portrait Vibes"
  },
  {
    "id": 55,
    "src": "/images/memories/memory-055.jpg",
    "title": "Selfie samayam",
    "caption": "Cute ga unnav ani cheppadaniki selfie chaalu 😍💗",
    "category": "Selfie Samayam"
  },
  {
    "id": 56,
    "src": "/images/memories/memory-056.jpg",
    "title": "Mirror moment",
    "caption": "Ee look chusi mirror kuda malli malli chusukuntundi 😚✨",
    "category": "Mirror Moments"
  },
  {
    "id": 57,
    "src": "/images/memories/memory-057.jpg",
    "title": "Manam kalisi",
    "caption": "Nee pakkana unte naa face automatic ga happy mode lo untundi 😁💕",
    "category": "Mana Moments"
  },
  {
    "id": 58,
    "src": "/images/memories/memory-058.jpg",
    "title": "Paatha photo",
    "caption": "Ee look ki time kuda emi cheyyalekapoyindi 😍💗",
    "category": "Throwback Photos"
  },
  {
    "id": 59,
    "src": "/images/memories/memory-059.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 60,
    "src": "/images/memories/memory-060.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Cute ga unnav, Kothi 😚💖",
    "category": "Portrait Vibes"
  },
  {
    "id": 61,
    "src": "/images/memories/memory-061.jpg",
    "title": "Selfie samayam",
    "caption": "Filter em chesthundi, original cute already ila undaga 😌💕",
    "category": "Selfie Samayam"
  },
  {
    "id": 62,
    "src": "/images/memories/memory-062.jpg",
    "title": "Mirror moment",
    "caption": "Mirror selfie pichidi… pose maatram super pichidi 😜🪞",
    "category": "Mirror Moments"
  },
  {
    "id": 63,
    "src": "/images/memories/memory-063.jpg",
    "title": "Manam kalisi",
    "caption": "Nuvvu pakkana unte camera kuda jealous avuthundi 😌📸",
    "category": "Mana Moments"
  },
  {
    "id": 64,
    "src": "/images/memories/memory-064.jpg",
    "title": "Paatha photo",
    "caption": "Cute appudu, cute ippudu… consistency chudu 😌💕",
    "category": "Throwback Photos"
  },
  {
    "id": 65,
    "src": "/images/memories/memory-065.jpg",
    "title": "Bayata oka moment",
    "caption": "Ee pose ki background kuda fan aipoyindi 😚🌿",
    "category": "Outdoor Moments"
  },
  {
    "id": 66,
    "src": "/images/memories/memory-066.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Ee pic lo nee smile naa favourite 💕",
    "category": "Portrait Vibes"
  },
  {
    "id": 67,
    "src": "/images/memories/memory-067.jpg",
    "title": "Selfie samayam",
    "caption": "Selfie pichidi… aa smile maatram naadhi 😜📸",
    "category": "Selfie Samayam"
  },
  {
    "id": 68,
    "src": "/images/memories/memory-068.jpg",
    "title": "Mirror moment",
    "caption": "Mirror lo reflection okkate… cuteness double 😍🪞",
    "category": "Mirror Moments"
  },
  {
    "id": 69,
    "src": "/images/memories/memory-069.jpg",
    "title": "Manam kalisi",
    "caption": "Mana combo ki filter avasaram ledhu kada 😚💖",
    "category": "Mana Moments"
  },
  {
    "id": 70,
    "src": "/images/memories/memory-070.jpg",
    "title": "Paatha photo",
    "caption": "Appati nunchi ila cute ga unte ela Kothi? 🥹✨",
    "category": "Throwback Photos"
  },
  {
    "id": 71,
    "src": "/images/memories/memory-071.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 72,
    "src": "/images/memories/memory-072.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nuvvu ila unte camera ki kuda crush vasthundi 📸🥰",
    "category": "Portrait Vibes"
  },
  {
    "id": 73,
    "src": "/images/memories/memory-073.jpg",
    "title": "Selfie samayam",
    "caption": "Ee selfie chusthe naa mood automatic ga set 😚✨",
    "category": "Selfie Samayam"
  },
  {
    "id": 74,
    "src": "/images/memories/memory-074.jpg",
    "title": "Mirror moment",
    "caption": "Mirror ni andhani chusi kullukontundhi 😌🪞✨",
    "category": "Mirror Moments"
  },
  {
    "id": 75,
    "src": "/images/memories/memory-075.jpg",
    "title": "Manam kalisi",
    "caption": "Phone loki chusthunna… nee kallaloki direct ga chudaleka 😳💞",
    "category": "Mana Moments"
  },
  {
    "id": 76,
    "src": "/images/memories/memory-076.jpg",
    "title": "Paatha photo",
    "caption": "Throwback lo kuda full heroine vibes 😚🎞️",
    "category": "Throwback Photos"
  },
  {
    "id": 77,
    "src": "/images/memories/memory-077.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 78,
    "src": "/images/memories/memory-078.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nee look ki oka separate fan page open cheyyali 😍✨",
    "category": "Portrait Vibes"
  },
  {
    "id": 79,
    "src": "/images/memories/memory-079.jpg",
    "title": "Selfie samayam",
    "caption": "Selfie lo kuda full attention nuvve 🥰📱",
    "category": "Selfie Samayam"
  },
  {
    "id": 80,
    "src": "/images/memories/memory-080.jpg",
    "title": "Mirror moment",
    "caption": "Mirror kuda “nenu inka enduku?” ani feel avuthundi 😏💕",
    "category": "Mirror Moments"
  },
  {
    "id": 81,
    "src": "/images/memories/memory-081.jpg",
    "title": "Manam kalisi",
    "caption": "Ninnu chusthe photo kante smile ekkuva vasthundi 🥰✨",
    "category": "Mana Moments"
  },
  {
    "id": 82,
    "src": "/images/memories/memory-082.jpg",
    "title": "Paatha photo",
    "caption": "Old pic, same cute face… unfair kada 😌💕",
    "category": "Throwback Photos"
  },
  {
    "id": 83,
    "src": "/images/memories/memory-083.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 84,
    "src": "/images/memories/memory-084.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Andam ante nuvve ani dictionary lo add cheyyali 😌🌸",
    "category": "Portrait Vibes"
  },
  {
    "id": 85,
    "src": "/images/memories/memory-085.jpg",
    "title": "Selfie samayam",
    "caption": "Cute ga unnav ani cheppadaniki selfie chaalu 😍💗",
    "category": "Selfie Samayam"
  },
  {
    "id": 86,
    "src": "/images/memories/memory-086.jpg",
    "title": "Mirror moment",
    "caption": "Ee look chusi mirror kuda malli malli chusukuntundi 😚✨",
    "category": "Mirror Moments"
  },
  {
    "id": 87,
    "src": "/images/memories/memory-087.jpg",
    "title": "Manam kalisi",
    "caption": "Nee pakkana unte naa face automatic ga happy mode lo untundi 😁💕",
    "category": "Mana Moments"
  },
  {
    "id": 88,
    "src": "/images/memories/memory-088.jpg",
    "title": "Paatha photo",
    "caption": "Ee look ki time kuda emi cheyyalekapoyindi 😍💗",
    "category": "Throwback Photos"
  },
  {
    "id": 89,
    "src": "/images/memories/memory-089.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 90,
    "src": "/images/memories/memory-090.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Cute ga unnav, Kothi 😚💖",
    "category": "Portrait Vibes"
  },
  {
    "id": 91,
    "src": "/images/memories/memory-091.jpg",
    "title": "Selfie samayam",
    "caption": "Filter em chesthundi, original cute already ila undaga 😌💕",
    "category": "Selfie Samayam"
  },
  {
    "id": 92,
    "src": "/images/memories/memory-092.jpg",
    "title": "Mirror moment",
    "caption": "Mirror selfie pichidi… pose maatram super pichidi 😜🪞",
    "category": "Mirror Moments"
  },
  {
    "id": 93,
    "src": "/images/memories/memory-093.jpg",
    "title": "Manam kalisi",
    "caption": "Nuvvu pakkana unte camera kuda jealous avuthundi 😌📸",
    "category": "Mana Moments"
  },
  {
    "id": 94,
    "src": "/images/memories/memory-094.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 95,
    "src": "/images/memories/memory-095.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Ee pic lo nee smile naa favourite 💕",
    "category": "Portrait Vibes"
  },
  {
    "id": 96,
    "src": "/images/memories/memory-096.jpg",
    "title": "Selfie samayam",
    "caption": "Ee selfie chusthe naa mood automatic ga set 😚✨",
    "category": "Selfie Samayam"
  },
  {
    "id": 97,
    "src": "/images/memories/memory-097.jpg",
    "title": "Mirror moment",
    "caption": "Mirror ni andhani chusi kullukontundhi 😌🪞✨",
    "category": "Mirror Moments"
  },
  {
    "id": 98,
    "src": "/images/memories/memory-098.jpg",
    "title": "Manam kalisi",
    "caption": "Mana combo ki filter avasaram ledhu kada 😚💖",
    "category": "Mana Moments"
  },
  {
    "id": 99,
    "src": "/images/memories/memory-099.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 100,
    "src": "/images/memories/memory-100.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nee look ki oka separate fan page open cheyyali 😍✨",
    "category": "Portrait Vibes"
  },
  {
    "id": 101,
    "src": "/images/memories/memory-101.jpg",
    "title": "Selfie samayam",
    "caption": "Selfie lo kuda full attention nuvve 🥰📱",
    "category": "Selfie Samayam"
  },
  {
    "id": 102,
    "src": "/images/memories/memory-102.jpg",
    "title": "Mirror moment",
    "caption": "Ee look chusi mirror kuda malli malli chusukuntundi 😚✨",
    "category": "Mirror Moments"
  },
  {
    "id": 103,
    "src": "/images/memories/memory-103.jpg",
    "title": "Manam kalisi",
    "caption": "Ninnu chusthe photo kante smile ekkuva vasthundi 🥰✨",
    "category": "Mana Moments"
  },
  {
    "id": 104,
    "src": "/images/memories/memory-104.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 105,
    "src": "/images/memories/memory-105.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Cute ga unnav, Kothi 😚💖",
    "category": "Portrait Vibes"
  },
  {
    "id": 106,
    "src": "/images/memories/memory-106.jpg",
    "title": "Selfie samayam",
    "caption": "Filter em chesthundi, original cute already ila undaga 😌💕",
    "category": "Selfie Samayam"
  },
  {
    "id": 107,
    "src": "/images/memories/memory-107.jpg",
    "title": "Manam kalisi",
    "caption": "Nuvvu pakkana unte camera kuda jealous avuthundi 😌📸",
    "category": "Mana Moments"
  },
  {
    "id": 108,
    "src": "/images/memories/memory-108.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 109,
    "src": "/images/memories/memory-109.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nuvvu ila unte camera ki kuda crush vasthundi 📸🥰",
    "category": "Portrait Vibes"
  },
  {
    "id": 110,
    "src": "/images/memories/memory-110.jpg",
    "title": "Bayata oka moment",
    "caption": "Ee pose ki background kuda fan aipoyindi 😚🌿",
    "category": "Outdoor Moments"
  },
  {
    "id": 111,
    "src": "/images/memories/memory-111.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Ee pic lo nee smile naa favourite 💕",
    "category": "Portrait Vibes"
  },
  {
    "id": 112,
    "src": "/images/memories/memory-112.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 113,
    "src": "/images/memories/memory-113.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Andam ante nuvve ani dictionary lo add cheyyali 😌🌸",
    "category": "Portrait Vibes"
  },
  {
    "id": 114,
    "src": "/images/memories/memory-114.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 115,
    "src": "/images/memories/memory-115.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nee look ki oka separate fan page open cheyyali 😍✨",
    "category": "Portrait Vibes"
  },
  {
    "id": 116,
    "src": "/images/memories/memory-116.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 117,
    "src": "/images/memories/memory-117.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nuvvu ila unte camera ki kuda crush vasthundi 📸🥰",
    "category": "Portrait Vibes"
  },
  {
    "id": 118,
    "src": "/images/memories/memory-118.jpg",
    "title": "Bayata oka moment",
    "caption": "Ee pose ki background kuda fan aipoyindi 😚🌿",
    "category": "Outdoor Moments"
  },
  {
    "id": 119,
    "src": "/images/memories/memory-119.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Cute ga unnav, Kothi 😚💖",
    "category": "Portrait Vibes"
  },
  {
    "id": 120,
    "src": "/images/memories/memory-120.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 121,
    "src": "/images/memories/memory-121.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Andam ante nuvve ani dictionary lo add cheyyali 😌🌸",
    "category": "Portrait Vibes"
  },
  {
    "id": 122,
    "src": "/images/memories/memory-122.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 123,
    "src": "/images/memories/memory-123.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nee look ki oka separate fan page open cheyyali 😍✨",
    "category": "Portrait Vibes"
  },
  {
    "id": 124,
    "src": "/images/memories/memory-124.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 125,
    "src": "/images/memories/memory-125.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Ee pic lo nee smile naa favourite 💕",
    "category": "Portrait Vibes"
  },
  {
    "id": 126,
    "src": "/images/memories/memory-126.jpg",
    "title": "Bayata oka moment",
    "caption": "Ee pose ki background kuda fan aipoyindi 😚🌿",
    "category": "Outdoor Moments"
  },
  {
    "id": 127,
    "src": "/images/memories/memory-127.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Cute ga unnav, Kothi 😚💖",
    "category": "Portrait Vibes"
  },
  {
    "id": 128,
    "src": "/images/memories/memory-128.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 129,
    "src": "/images/memories/memory-129.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Andam ante nuvve ani dictionary lo add cheyyali 😌🌸",
    "category": "Portrait Vibes"
  },
  {
    "id": 130,
    "src": "/images/memories/memory-130.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 131,
    "src": "/images/memories/memory-131.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nuvvu ila unte camera ki kuda crush vasthundi 📸🥰",
    "category": "Portrait Vibes"
  },
  {
    "id": 132,
    "src": "/images/memories/memory-132.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 133,
    "src": "/images/memories/memory-133.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Ee pic lo nee smile naa favourite 💕",
    "category": "Portrait Vibes"
  },
  {
    "id": 134,
    "src": "/images/memories/memory-134.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 135,
    "src": "/images/memories/memory-135.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Cute ga unnav, Kothi 😚💖",
    "category": "Portrait Vibes"
  },
  {
    "id": 136,
    "src": "/images/memories/memory-136.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 137,
    "src": "/images/memories/memory-137.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nee look ki oka separate fan page open cheyyali 😍✨",
    "category": "Portrait Vibes"
  },
  {
    "id": 138,
    "src": "/images/memories/memory-138.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 139,
    "src": "/images/memories/memory-139.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nuvvu ila unte camera ki kuda crush vasthundi 📸🥰",
    "category": "Portrait Vibes"
  },
  {
    "id": 140,
    "src": "/images/memories/memory-140.jpg",
    "title": "Bayata oka moment",
    "caption": "Ee pose ki background kuda fan aipoyindi 😚🌿",
    "category": "Outdoor Moments"
  },
  {
    "id": 141,
    "src": "/images/memories/memory-141.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Ee pic lo nee smile naa favourite 💕",
    "category": "Portrait Vibes"
  },
  {
    "id": 142,
    "src": "/images/memories/memory-142.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 143,
    "src": "/images/memories/memory-143.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Andam ante nuvve ani dictionary lo add cheyyali 😌🌸",
    "category": "Portrait Vibes"
  },
  {
    "id": 144,
    "src": "/images/memories/memory-144.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 145,
    "src": "/images/memories/memory-145.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nee look ki oka separate fan page open cheyyali 😍✨",
    "category": "Portrait Vibes"
  },
  {
    "id": 146,
    "src": "/images/memories/memory-146.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 147,
    "src": "/images/memories/memory-147.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nuvvu ila unte camera ki kuda crush vasthundi 📸🥰",
    "category": "Portrait Vibes"
  },
  {
    "id": 148,
    "src": "/images/memories/memory-148.jpg",
    "title": "Bayata oka moment",
    "caption": "Ee pose ki background kuda fan aipoyindi 😚🌿",
    "category": "Outdoor Moments"
  },
  {
    "id": 149,
    "src": "/images/memories/memory-149.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Cute ga unnav, Kothi 😚💖",
    "category": "Portrait Vibes"
  },
  {
    "id": 150,
    "src": "/images/memories/memory-150.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 151,
    "src": "/images/memories/memory-151.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Andam ante nuvve ani dictionary lo add cheyyali 😌🌸",
    "category": "Portrait Vibes"
  },
  {
    "id": 152,
    "src": "/images/memories/memory-152.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 153,
    "src": "/images/memories/memory-153.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nee look ki oka separate fan page open cheyyali 😍✨",
    "category": "Portrait Vibes"
  },
  {
    "id": 154,
    "src": "/images/memories/memory-154.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 155,
    "src": "/images/memories/memory-155.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Ee pic lo nee smile naa favourite 💕",
    "category": "Portrait Vibes"
  },
  {
    "id": 156,
    "src": "/images/memories/memory-156.jpg",
    "title": "Bayata oka moment",
    "caption": "Ee pose ki background kuda fan aipoyindi 😚🌿",
    "category": "Outdoor Moments"
  },
  {
    "id": 157,
    "src": "/images/memories/memory-157.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Cute ga unnav, Kothi 😚💖",
    "category": "Portrait Vibes"
  },
  {
    "id": 158,
    "src": "/images/memories/memory-158.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 159,
    "src": "/images/memories/memory-159.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Andam ante nuvve ani dictionary lo add cheyyali 😌🌸",
    "category": "Portrait Vibes"
  },
  {
    "id": 160,
    "src": "/images/memories/memory-160.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 161,
    "src": "/images/memories/memory-161.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nuvvu ila unte camera ki kuda crush vasthundi 📸🥰",
    "category": "Portrait Vibes"
  },
  {
    "id": 162,
    "src": "/images/memories/memory-162.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 163,
    "src": "/images/memories/memory-163.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Ee pic lo nee smile naa favourite 💕",
    "category": "Portrait Vibes"
  },
  {
    "id": 164,
    "src": "/images/memories/memory-164.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 165,
    "src": "/images/memories/memory-165.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Cute ga unnav, Kothi 😚💖",
    "category": "Portrait Vibes"
  },
  {
    "id": 166,
    "src": "/images/memories/memory-166.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 167,
    "src": "/images/memories/memory-167.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nee look ki oka separate fan page open cheyyali 😍✨",
    "category": "Portrait Vibes"
  },
  {
    "id": 168,
    "src": "/images/memories/memory-168.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 169,
    "src": "/images/memories/memory-169.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Nuvvu ila unte camera ki kuda crush vasthundi 📸🥰",
    "category": "Portrait Vibes"
  },
  {
    "id": 170,
    "src": "/images/memories/memory-170.jpg",
    "title": "Bayata oka moment",
    "caption": "Ee pose ki background kuda fan aipoyindi 😚🌿",
    "category": "Outdoor Moments"
  },
  {
    "id": 171,
    "src": "/images/memories/memory-171.jpg",
    "title": "Nee style, nee vibe",
    "caption": "Ee pic lo nee smile naa favourite 💕",
    "category": "Portrait Vibes"
  },
  {
    "id": 172,
    "src": "/images/memories/memory-172.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 173,
    "src": "/images/memories/memory-173.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 174,
    "src": "/images/memories/memory-174.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 175,
    "src": "/images/memories/memory-175.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 176,
    "src": "/images/memories/memory-176.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 177,
    "src": "/images/memories/memory-177.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 178,
    "src": "/images/memories/memory-178.jpg",
    "title": "Bayata oka moment",
    "caption": "Ee pose ki background kuda fan aipoyindi 😚🌿",
    "category": "Outdoor Moments"
  },
  {
    "id": 179,
    "src": "/images/memories/memory-179.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 180,
    "src": "/images/memories/memory-180.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 181,
    "src": "/images/memories/memory-181.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 182,
    "src": "/images/memories/memory-182.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 183,
    "src": "/images/memories/memory-183.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 184,
    "src": "/images/memories/memory-184.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 185,
    "src": "/images/memories/memory-185.jpg",
    "title": "Bayata oka moment",
    "caption": "Ee pose ki background kuda fan aipoyindi 😚🌿",
    "category": "Outdoor Moments"
  },
  {
    "id": 186,
    "src": "/images/memories/memory-186.jpg",
    "title": "Bayata oka moment",
    "caption": "Ee pose ki background kuda fan aipoyindi 😚🌿",
    "category": "Outdoor Moments"
  },
  {
    "id": 187,
    "src": "/images/memories/memory-187.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 188,
    "src": "/images/memories/memory-188.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 189,
    "src": "/images/memories/memory-189.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 190,
    "src": "/images/memories/memory-190.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 191,
    "src": "/images/memories/memory-191.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 192,
    "src": "/images/memories/memory-192.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 193,
    "src": "/images/memories/memory-193.jpg",
    "title": "Bayata oka moment",
    "caption": "Ee pose ki background kuda fan aipoyindi 😚🌿",
    "category": "Outdoor Moments"
  },
  {
    "id": 194,
    "src": "/images/memories/memory-194.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 195,
    "src": "/images/memories/memory-195.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 196,
    "src": "/images/memories/memory-196.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 197,
    "src": "/images/memories/memory-197.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 198,
    "src": "/images/memories/memory-198.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 199,
    "src": "/images/memories/memory-199.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 200,
    "src": "/images/memories/memory-200.jpg",
    "title": "Bayata oka moment",
    "caption": "Ee pose ki background kuda fan aipoyindi 😚🌿",
    "category": "Outdoor Moments"
  },
  {
    "id": 201,
    "src": "/images/memories/memory-201.jpg",
    "title": "Bayata oka moment",
    "caption": "Ee pose ki background kuda fan aipoyindi 😚🌿",
    "category": "Outdoor Moments"
  },
  {
    "id": 202,
    "src": "/images/memories/memory-202.jpg",
    "title": "Bayata oka moment",
    "caption": "Bayata view baagundi… kaani nee look inka baagundi 🌿😍",
    "category": "Outdoor Moments"
  },
  {
    "id": 203,
    "src": "/images/memories/memory-203.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 204,
    "src": "/images/memories/memory-204.jpg",
    "title": "Bayata oka moment",
    "caption": "Nee smile chusthe flowers kuda jealous avuthayi 🌷🥰",
    "category": "Outdoor Moments"
  },
  {
    "id": 205,
    "src": "/images/memories/memory-205.jpg",
    "title": "Bayata oka moment",
    "caption": "Prakruthi pakkana, andam madhyalo nuvvu 🌸✨",
    "category": "Outdoor Moments"
  },
  {
    "id": 206,
    "src": "/images/memories/memory-206.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  },
  {
    "id": 207,
    "src": "/images/memories/memory-207.jpg",
    "title": "Bayata oka moment",
    "caption": "Scenery super… main attraction maatram nuvve 😌💖",
    "category": "Outdoor Moments"
  }
]
export const hero = { src:'/images/hero/teju-hero.jpg', alt:'Teju and me' }
