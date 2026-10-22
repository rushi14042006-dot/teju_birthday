import { BIRTHDAY } from './config'

export function getNextBirthday(now = new Date()) {
  const configured = new Date(BIRTHDAY)
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  let date = new Date(now.getFullYear(), configured.getMonth(), configured.getDate())
  if (date < today) date = new Date(now.getFullYear() + 1, configured.getMonth(), configured.getDate())
  return date
}

export function getBirthdayCountdown(now = new Date()) {
  const target = getNextBirthday(now)
  const milliseconds = Math.max(0, target.getTime() - now.getTime())
  const sameDay = target.getFullYear() === now.getFullYear() && target.getMonth() === now.getMonth() && target.getDate() === now.getDate()
  const totalSeconds = Math.floor(milliseconds / 1000)
  return { target, today: sameDay, days: Math.floor(totalSeconds / 86400), hours: Math.floor(totalSeconds / 3600) % 24, minutes: Math.floor(totalSeconds / 60) % 60, seconds: totalSeconds % 60 }
}

export const kothiTimes = {
  edition: {
    title: 'THE KOTHI TIMES',
    tagline: 'LATEST UPDATES | HEARTWARMING STORIES | EXCLUSIVE INTERVIEWS | HIGHLY UNNECESSARY INVESTIGATIONS',
    special: 'SPECIAL BIRTHDAY EDITION',
    editionNote: 'A PERSONAL EDITION FOR KOTHI',
    volume: 'VOL. 01 | NO. 1',
    newChapter: 'A NEW CHAPTER APPROACHES',
    issueLabel: 'BIRTHDAY SPECIAL · REPORTED BY NANI'
  },
  breaking: {
    headline: 'BREAKING NEWS: KOTHI IS GETTING OLDER!',
    subheadline: 'Sources confirm: A brand-new, even more amazing, kinder, funnier, brighter version of Kothi is expected to arrive on {date}!',
    reportTitle: 'NEWS FROM THE COUNTDOWN DESK',
    report: 'Yes, dear readers, you heard that correctly! The countdown has officially entered the news cycle, and our newsroom is experiencing unusually high levels of excitement, emotional reactions, and completely unnecessary birthday planning.\n\nOur chief reporter has been following this important development very closely and can confirm that the birthday girl is getting closer to her special day with every passing moment.',
    eventTitle: 'THE EVENT FILE',
    publicInterest: 'EXTREMELY HIGH',
    reportersExcitement: 'OUT OF CONTROL',
    newsroomNote: 'Newsroom note: our countdown manager has been asked to remain calm. This request has not been successful.',
    stamp: 'BREAKING · CASE 1023',
    stampClueTitle: 'A clue from the newsroom',
    stampClue: 'The reporter’s first notes mention a little “hi,” a connection through Yashu, and an ordinary day that quietly opened a whole new story.'
  },
  topStories: [
    { title: 'Kothi officially enters another beautiful chapter of her life.', target: 'final-edition' },
    { title: 'The countdown manager is preparing for the big day.', target: 'countdown-update' },
    { title: 'Friends are getting ready to celebrate the birthday girl.', target: 'birthday-bulletin' },
    { title: 'Happiness levels are reportedly increasing.', target: 'weather-report' },
    { title: 'Cuteness levels remain under investigation.', target: 'investigation' }
  ],
  localReport: {
    title: 'LOCAL GIRL REPORTEDLY MAKES ORDINARY DAYS LESS ORDINARY',
    body: 'According to eyewitness reports, a girl named Kothi has repeatedly been observed making normal conversations more entertaining, turning little moments into memories, and creating situations that leave people either laughing, smiling, or wondering what exactly just happened.',
    witnesses: [
      'Witness No. 1 says: “The normal conversation never stays normal for long.”',
      'Witness No. 2 reports: “Unexpected reactions are apparently part of the experience.”',
      'Witness No. 3 confirms: “Even ordinary moments seem to keep their own little story.”'
    ],
    conclusionTitle: 'OUR NEWSROOM’S CONCLUSION',
    conclusion: 'The evidence is convincing. Kothi may not even realise the effect she has on the people around her, but sometimes a person’s presence makes an ordinary day feel a little more special without them even trying.',
    witnessNote: 'Playful witness statements written for this birthday edition; these are not real quotations.'
  },
  awards: {
    title: 'THE KOTHI AWARDS',
    subtitle: 'AN OFFICIAL CEREMONY NOBODY ASKED FOR',
    disclaimer: 'The awards are imaginary, but the appreciation behind them is genuine.',
    items: [
      { title: 'The Main Character Award', text: 'For being the main character of her own wonderfully unpredictable universe.', detail: 'No casting call required. This category recognises the one-of-one energy of being fully yourself in your own story.' },
      { title: 'Best Dramatic Reactions Award', text: 'For expressions that deserve their own background music.', detail: 'The judges considered timing, expression, and the ability to make a small moment entertaining. The imaginary jury remains delighted.' },
      { title: 'Cutest Randomness Award', text: 'For saying or doing things nobody saw coming.', detail: 'Unexpected turns keep the day interesting. This award honours the joy of being a little delightfully unpredictable.' },
      { title: 'Mood-Switching Champion Award', text: 'For keeping everyone around her curious about which version will appear next.', detail: 'Every version is still Kothi. This prize celebrates the range, not a demand to stay in any one mood.' },
      { title: 'The Little Things Matter Award', text: 'For the small ways she makes moments feel special.', detail: 'Some of the best parts of friendship are quiet and ordinary until you look back and realise how much they mean.' },
      { title: 'The One-of-One Award', text: 'For being herself in a way nobody else can exactly recreate.', detail: 'No copy, no replacement, no improved edition needed. The original is already the point.' },
      { title: 'The Most Important Award of All', text: 'For simply being herself, without needing to entertain everyone or prove anything.', detail: 'A reminder from Nani: you are appreciated on quiet days, silly days, energetic days and every version in between.' }
    ]
  },
  investigation: {
    caseLabel: 'CASE NO. 1023 — THE MYSTERY OF KOTHI',
    title: 'SPECIAL INVESTIGATION: WHAT MAKES KOTHI, KOTHI?',
    opening: 'Our investigative team has spent several hours studying this mysterious individual. After extensive observation, multiple imaginary interviews, and absolutely no scientific equipment, we have identified the following characteristics.',
    exhibits: [
      { id: 'cute', label: 'EXHIBIT A — THE CUTE VERSION', text: 'Can make an ordinary moment adorable without realising it.', detail: 'Finding: the smallest expression or passing moment can become a favourite detail. No special effects were used in this observation.' },
      { id: 'dramatic', label: 'EXHIBIT B — THE DRAMATIC VERSION', text: 'Can turn a tiny incident into a full three-hour movie with an unexpected climax.', detail: 'Finding: the imaginary film has excellent pacing, powerful reactions and at least one plot twist. The drama is reported with affection.' },
      { id: 'sleepy', label: 'EXHIBIT C — THE SLEEPY VERSION', text: 'May temporarily disconnect from the entire world when sleep arrives.', detail: 'Finding: when sleep arrives, it appears to take priority. The bureau recommends letting this exhibit rest.' },
      { id: 'angry', label: 'EXHIBIT D — THE ANGRY VERSION', text: 'Strong expressions, powerful reactions, and no guarantee that the reporter will survive the interview.', detail: 'Finding: the expressions are powerful enough to make the reporter choose their words carefully. This is a playful report, not a criticism of anyone’s feelings.' },
      { id: 'caring', label: 'EXHIBIT E — THE CARING VERSION', text: 'May care about people in little ways that she doesn’t even realise.', detail: 'Finding: care does not always announce itself. Sometimes it is tucked into small gestures and the way people matter to one another.' },
      { id: 'random', label: 'EXHIBIT F — THE RANDOM VERSION', text: 'Can produce the most unexpected thoughts, reactions, and conversations at the most unexpected times.', detail: 'Finding: surprise remains a key feature of the Kothi file. The newsroom has stopped trying to predict the next turn.' }
    ],
    reportTitle: 'FINAL INVESTIGATION REPORT',
    report: 'All six exhibits point toward one conclusion: Kothi is a combination of different moods, little habits, random thoughts, cute moments, and her own unique personality. And honestly, that is what makes her her. There is no need for a perfect version of Kothi when the original is already one of a kind.',
    verdict: 'INVESTIGATION COMPLETE. After reviewing all available evidence, the newsroom confirms that Kothi is an original, unpredictable, funny, caring and unforgettable individual. CASE CLOSED. APPRECIATION CONTINUES.'
  },
  editorial: {
    label: 'THE EDITORIAL — A PERSONAL MESSAGE FROM TODAY’S REPORTER',
    paragraphs: [
      'Heyyyyy, naa Kothiiii!',
      'Ivaala news lo biggest headline enti ante... nee birthday daggariki vachesthundhi! {countdownPhrase} ee prapancham nee special day ni celebrate chesukobothundhi. Andhuke ee special newspaper.',
      'Nuvvu eppudu unnanta, nee presence valla chuttu unna vaallu happier ga feel avuthaaru. Nee alari, nee navvu, nee random thoughts, nee cute reactions... ivanni kalisthe ne Kothi avuthaav.',
      'Nuvvu perfect ga undaalani nenu expect cheyyanu. Konni rojulu energetic ga untaav, inkonni rojulu silent ga untaav. Adhi normal ye. Nuvvu nee own personality tho, nee own pace tho life grow avuthu undadam naaku chaalu.',
      'So, ee countdown lo oka special newspaper edition, repu inkoka surprise... nee birthday ni konchem special ga marchadaniki naa chinna efforts anthe.',
      'Ee birthday ki nee kosam manchi memories, genuine happiness, and nuvvu deserve chese antha love undaali ani korukuntunna.'
    ],
    signature: '— Nani ❤️'
  },
  interview: {
    title: 'EXCLUSIVE INTERVIEW: THE KOTHI QUESTIONNAIRE',
    questions: [
      {q:'Madam, intha cute ga ela untaru?',a:'Adhi maaku kuda thelidhu, natural talent anukunta!'},
      {q:'Mee birthday plans enti?',a:'Surprise! Cheppanu!'},
      {q:'Mee mood ni ardham chesukovadam easy aa, difficult aa?',a:'Adhi naa mood batti decide avuthundhi.'},
      {q:'Mee secret talent enti?',a:'Nenu normal ga unna kuda people ni entertain cheyyagalanu.'},
      {q:'Future Kothi ki em message istharu?',a:'Keep smiling, overthink cheyyaku, nee meedha nammakam pettuko, nee dreams kosam work chesthu undu.'},
      {q:'Birthday girl ki ippudu em kaavali?',a:'Cake, happiness, surprises... and please, no spoilers!'}
    ],
    disclaimer: 'Disclaimer: These answers are fictional and have not been approved by the birthday girl herself.'
  },
  trending: {
    title: 'TRENDING TODAY',
    items: [
      'Kothi’s birthday is approaching.',
      'Countdown manager is becoming increasingly dramatic.',
      'Birthday girl is expected to receive an unreasonable amount of affection and teasing.',
      'Happiness levels are predicted to rise.',
      'Public advised to remain calm.',
      'Reporter refuses to follow this instruction.'
    ]
  },
  weather: {
    title: 'WEATHER REPORT — BIRTHDAY WEEK SPECIAL',
    items: [
      ['Happiness', 'High probability.'],
      ['Random smiles', 'Expected throughout the day.'],
      ['Cute moments', 'No shortage anticipated.'],
      ['Kothi drama', 'Conditions remain unpredictable.'],
      ['Good memories', 'Strong possibility of accumulation.'],
      ['Birthday excitement', 'Increasing as {date} approaches.']
    ],
    note: 'Experts recommend drinking enough water, smiling whenever possible, and not taking the countdown manager’s dramatic announcements too seriously.',
    disclaimer: 'A fictional birthday-week forecast, prepared by the Chronicle’s entirely unqualified weather desk.'
  },
  countdown: {
    title: 'COUNTDOWN UPDATE',
    before: 'until another chapter begins, and until another year of learning, growing, laughing and discovering new things.',
    today: 'It’s today! Happy birthday, Kothi. A new chapter begins right now.',
    publicInterest: 'PUBLIC INTEREST: EXTREMELY HIGH',
    reportersExcitement: 'REPORTERS’ EXCITEMENT: OUT OF CONTROL'
  },
  finale: {
    headline: 'SAME KOTHI. NEW CHAPTER. MORE DREAMS. MORE LAUGHTER. MORE BEAUTIFUL MEMORIES AHEAD.',
    message: 'Kothi, nee life lo mundhu inka chaala beautiful chapters raavaali. Konni chapters full comedy tho nindipovaali, konni nee growth ni chupinchaali, konni nee dreams nijam avvadam gurinchi undaali. Ee chapter ela untundho manaki ippude thelidhu... kaani nuvvu nee own story ni nee own way lo raasukuntu mundhuku vellali. And aa journey lo navvulu, manchi people, genuine happiness, unexpected magic chaala undaalani manaspoorthiga korukuntunnaanu.',
    signature: ['SIGNED,', 'Nee navvulaki lifetime fan,', 'Nee alariki permanent audience,', 'Nee dramas ki VIP pass holder,', 'Nee happiness ki secret supporter,', 'Nee birthday countdown ki full-time employee. ❤️'],
    closing: 'Nee life ane story lo konchem comedy, konchem chaos, chaala genuine care, inka gurthundipoye manchi memories add cheyyali anukune person. ❤️'
  },
  links: {letters:'letters',birthday:'birthday'}
} as const
