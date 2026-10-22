// EDIT ME: birthday copy, gifts, awards, routes and the final letter live together here.
import { BIRTHDAY } from './config'
const birthdayDate = new Date(BIRTHDAY)
const birthdayDateLabel = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long' }).format(birthdayDate)

export const birthdayExperience = {
  recipient: 'Teju',
  nickname: 'Kothi',
  author: 'Nani',
  birthday: { timestamp: BIRTHDAY, label: birthdayDateLabel, year: birthdayDate.getFullYear() },
  invitation: {
    title: 'A SPECIAL INVITATION FOR TEJU',
    teaser: 'Someone has prepared a little world of birthday surprises just for you.',
    copy: [
      'YOU ARE CORDIALLY INVITED',
      'To a little celebration dedicated to someone extraordinary.',
      'Featuring unexpected surprises, completely unnecessary awards, a birthday cake, a few happy moments, and one very special letter.',
      'Guest of honour: Teju',
      'Prepared with love and a little bit of chaos.',
      '— Nani ❤️'
    ]
  },
  welcome: {
    title: 'HAPPY BIRTHDAY, TEJU!',
    headline: 'Today, the spotlight belongs to you.',
    message: "Here's a little collection of surprises, memories, wishes and reasons to celebrate the person you are."
  },
  gifts: [
    { id: 'wish', title: 'A Wish for You', label: 'A Little Birthday Wish', icon: '✧', message: 'May this new chapter bring you genuine happiness, wonderful opportunities, unexpected reasons to smile and beautiful memories you will carry for years.', effect: 'wish' },
    { id: 'smile', title: 'Reasons to Smile', label: 'The Smile Award', icon: '♡', message: 'A little reminder that your smile, your laughter and the small things that make you yourself can make an ordinary day feel special.', effect: 'hearts' },
    { id: 'memory', title: 'A Memory', label: 'A Memory From Our Story', icon: '▧', message: 'Our story began with an unexpected introduction and a tiny first “hi.” We could not have known then how many chapters, conversations and laughs would follow.', image: '/images/memories/memory-001.jpg', imageAlt: 'A photograph from Teju and Nani’s shared memory collection', caption: 'One little beginning in a story still being written.', effect: 'scrapbook' },
    { id: 'appreciation', title: 'A Little Appreciation', label: 'The Compliment Box', icon: '✿', message: 'A little reminder that you do not have to be perfect, cheerful or extraordinary every day to be appreciated. Being yourself is already enough.', effect: 'note' },
    { id: 'future', title: 'For Your Future', label: 'The Future Wish', icon: '☆', message: 'I hope this year brings you closer to your dreams, introduces you to wonderful opportunities and gives you the confidence to keep becoming the person you want to be.', effect: 'stars' },
    { id: 'secret', title: 'Keep This Secret', label: 'A Secret Surprise', icon: '⌑', clue: 'A little note from Nani is waiting inside. Tap the sealed note to read it.', message: 'I’m glad our paths crossed, Teju. I hope today gives you plenty of reasons to smile, and that you always remember how much your friendship means to me.', effect: 'secret' },
    { id: 'grand', title: 'One Last Surprise', label: 'The Grand Gift', icon: '❦', message: 'One last thing, Teju. Something I wanted to tell you.', effect: 'grand' }
  ],
  awards: [
    { title: 'The Main Character Award', citation: 'For being the main character of her own wonderfully unpredictable universe.' },
    { title: 'Best Dramatic Reactions', citation: 'For reactions that deserve their own background music and cinematic slow motion.' },
    { title: 'Queen of Random Conversations', citation: 'For proving that the most unexpected conversations can become the most entertaining ones.' },
    { title: 'The Little Things Matter Award', citation: 'For the little gestures and ordinary moments that can make a day feel special.' },
    { title: 'The One-of-One Award', citation: 'For being herself in a way nobody else can exactly recreate.' },
    { title: 'The Birthday Star Award', citation: "For being today's guest of honour and deserving a day filled with happiness, kindness and celebration." },
    { title: 'THE AWARD FOR BEING YOU', citation: 'For being a person with her own dreams, personality, quirks, strengths and possibilities. You do not have to earn appreciation by being perfect. You deserve room to grow, to laugh, to rest, to learn and to be yourself.', signed: 'THE AWARDS COMMITTEE — NANI ❤️', final: true }
  ],
  cake: {
    heading: 'HAPPY BIRTHDAY, TEJU',
    prompt: 'Take a little moment for yourself. Make a wish.',
    wishPrompt: 'Close your eyes for a moment and make a wish. It can be something big, something small, or something only you know.',
    afterBlow: 'May your wishes find their way into the world, one beautiful little step at a time.',
    reveal: 'THIS MOMENT IS ALL YOURS, TEJU. ❤️'
  },
  finalLetter: {
    eyebrow: 'ONE LAST THING, TEJU...',
    intro: "Before you leave this little celebration, there's something I wanted to tell you.",
    title: 'A letter from Nani',
    paragraphs: [
      'Dear Teju,',
      'Happy birthday! ❤️',
      'I wanted this little corner of the website to be something more than just a birthday greeting. So I filled it with a few surprises, some silly awards, a little celebration and, finally, these words.',
      'I hope this new chapter of your life brings you beautiful opportunities, genuine happiness, confidence in yourself and countless reasons to smile.',
      'I hope you keep chasing the things that matter to you, discovering new parts of yourself, making memories you will treasure and giving yourself permission to grow at your own pace.',
      'You do not have to have everything figured out. You do not have to be happy every single day. And you do not have to become someone else to deserve good things.',
      'Keep being yourself, keep dreaming and keep making space for the little moments that make life special.',
      "I'm glad our paths crossed, and I hope this birthday becomes the beginning of a wonderful new chapter for you.",
      'Happy birthday, Teju. May this year be kind to you and bring you many beautiful surprises.',
      'With affection,',
      'Yours,\nNani ❤️'
    ]
  },
  routes: { home: 'home', letters: 'letters' }
} as const
