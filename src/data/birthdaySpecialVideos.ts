const firstBirthdayFilm = new URL('../../video/billori [9B0F2F9].mp4', import.meta.url).href
const secondBirthdayFilm = new URL('../../video/O Meri Laila [1F0ED91].mp4', import.meta.url).href

export type BirthdaySpecialVideo = {
  id: string
  title: string
  subtitle: string
  caption: string
  src: string
  poster: string
  description?: string
}

// These imports bundle the two existing root-level video files with the site.
// Poster images use existing project photos and can be replaced here.
export const birthdaySpecialVideos: BirthdaySpecialVideo[] = [
  {
    id: 'birthday-film-one',
    title: 'A Little Birthday Surprise',
    subtitle: 'A film made just for you',
    caption: 'For all the little things that make you, you. ♡',
    src: firstBirthdayFilm,
    poster: '/images/timeline/milestone-2025-01.jpg',
    description: 'The first birthday-special film for Teju.',
  },
  {
    id: 'birthday-film-two',
    title: 'Our Story, Still Unfolding',
    subtitle: 'A little more of us',
    caption: 'One more little film for my favourite Kothi. 🎀',
    src: secondBirthdayFilm,
    poster: '/images/timeline/milestone-2026-01.jpg',
    description: 'The second birthday-special film for Teju.',
  },
]
