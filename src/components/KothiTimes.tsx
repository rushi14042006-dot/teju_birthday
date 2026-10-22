import { useEffect, useRef, useState, type ReactNode } from 'react'
import Photo from './Photo'
import useNow from '../hooks/useNow'
import { getBirthdayCountdown, kothiTimes } from '../data/kothiTimes'
import './KothiTimes.css'

const CASE_KEY = 'kothi-times-case-1023-v1'
type ModalContent = {title:string; paragraphs:string[]; label?:string; extra?:ReactNode}

function Overlay({content,onClose}:{content:ModalContent;onClose:()=>void}) {
  const closeRef=useRef<HTMLButtonElement>(null)
  useEffect(()=>{closeRef.current?.focus();const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){onClose();return}if(e.key==='Tab'){const items=[...document.querySelectorAll<HTMLElement>('.kt-dialog button:not([disabled]), .kt-dialog a[href]')];if(!items.length)return;const first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}};addEventListener('keydown',key);return()=>removeEventListener('keydown',key)},[onClose])
  return <div className="kt-scrim" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}><article className="kt-dialog" role="dialog" aria-modal="true" aria-labelledby="kt-dialog-title"><button className="kt-dialog-close" ref={closeRef} onClick={onClose} aria-label="Close article">×</button><p className="kt-meta">{content.label||'THE KOTHI TIMES · SPECIAL EDITION'}</p><h2 id="kt-dialog-title">{content.title}</h2>{content.paragraphs.map((p,i)=><p key={i} className="kt-dialog-copy">{p}</p>)}{content.extra}</article></div>
}

const details=(title:string,text:string,label?:string):ModalContent=>({title,paragraphs:text.split('\n\n'),label})
const formatDate=(date:Date,year=true)=>new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',...(year?{year:'numeric'}:{})}).format(date).toUpperCase()

export default function KothiTimes({nav}:{nav:(route:string)=>void}) {
  const now=useNow(1000)
  const countdown=getBirthdayCountdown(new Date(now))
  const birthdayDate=formatDate(countdown.target)
  const shortDate=formatDate(countdown.target,false)
  const countdownPhrase=countdown.today?'Ee roju,':countdown.days>0?`Inka ${countdown.days} ${countdown.days===1?'day':'days'} lo,`:countdown.hours>0?`Inka ${countdown.hours} ${countdown.hours===1?'hour':'hours'} lo,`:countdown.minutes>0?`Inka ${countdown.minutes} ${countdown.minutes===1?'minute':'minutes'} lo,`:'Inka konni nimishaallo,'
  const remainingLabel=countdown.today?'IT’S THE BIRTHDAY!':countdown.days===0?'LESS THAN A DAY LEFT':`${countdown.days} ${countdown.days===1?'DAY':'DAYS'} LEFT!`
  const [modal,setModal]=useState<ModalContent|null>(null)
  const [examined,setExamined]=useState<string[]>(()=>{try{const saved:unknown=JSON.parse(localStorage.getItem(CASE_KEY)||'[]');return Array.isArray(saved)?[...new Set(saved.filter((id):id is string=>typeof id==='string'&&kothiTimes.investigation.exhibits.some(x=>x.id===id)))]:[]}catch{return []}})
  const complete=examined.length===kothiTimes.investigation.exhibits.length
  const inspect=(exhibit:typeof kothiTimes.investigation.exhibits[number])=>{
    setExamined(previous=>{if(previous.includes(exhibit.id))return previous;const next=[...previous,exhibit.id];try{localStorage.setItem(CASE_KEY,JSON.stringify(next))}catch{/* Keep the case playable if storage is unavailable. */}return next})
    setModal(details(exhibit.label,`${exhibit.text}\n\n${exhibit.detail}`,'CASE NO. 1023 · EVIDENCE EXAMINED'))
  }
  const scrollTo=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})
  const showNewsroomClue=()=>setModal(details(kothiTimes.breaking.stampClueTitle,kothiTimes.breaking.stampClue,'A RED-PENCIL NOTE FROM NANI'))
  const dateIn=(text:string)=>text.replace(/\{date\}/g,shortDate)

  return <div className="kothi-times" id="top">
    <main className="kt-newspaper" aria-label="The Kothi Times birthday edition">
      <header className="kt-masthead">
        <div className="kt-mast-rule"/>
        <div className="kt-edition-row"><div className="kt-edition-box"><b>{kothiTimes.edition.special}</b><span>{kothiTimes.edition.editionNote}</span></div><p className="kt-edition-center">{kothiTimes.edition.issueLabel}</p><div className="kt-edition-box kt-edition-right"><b>{birthdayDate}</b><span>{kothiTimes.edition.volume}</span><span>{kothiTimes.edition.newChapter}</span></div></div>
        <h1 aria-label="The Kothi Times"><span>THE </span><em>KOTHI</em><span> TIMES</span></h1>
        <div className="kt-mast-tag">{kothiTimes.edition.tagline}</div>
        <div className="kt-mast-rule kt-double"/>
      </header>

      <section className="kt-breaking" aria-labelledby="kt-breaking-title">
        <div className="kt-breaking-kicker"><span>EXTRA · EXTRA · READ ALL ABOUT IT</span><button className="kt-red-stamp" onClick={showNewsroomClue}>{kothiTimes.breaking.stamp}</button></div>
        <button className="kt-headline-button" onClick={()=>setModal(details(kothiTimes.breaking.headline,`${kothiTimes.breaking.subheadline.replace('{date}',shortDate)}\n\n${kothiTimes.breaking.report}`,'BREAKING NEWS · THE COUNTDOWN DESK'))}>
          <h2 id="kt-breaking-title">{kothiTimes.breaking.headline.replace('GETTING OLDER!','')}<span>GETTING OLDER!</span></h2>
        </button>
        <p className="kt-subheadline">{kothiTimes.breaking.subheadline.replace('{date}',shortDate)}</p>
        <div className="kt-lead-grid">
          <article className="kt-news-report"><p className="kt-section-label">{kothiTimes.breaking.reportTitle}</p><p>{kothiTimes.breaking.report}</p><span className="kt-byline">BY THE CHRONICLE’S VERY EXCITED REPORTER</span></article>
          <section className="kt-event-box" id="birthday-bulletin"><p className="kt-section-label">{kothiTimes.breaking.eventTitle}</p><dl><div><dt>DATE OF THE BIG EVENT</dt><dd>{shortDate}</dd></div><div><dt>COUNTDOWN STATUS</dt><dd>{countdown.today?'TODAY IS THE DAY':`${countdown.days} ${countdown.days===1?'DAY':'DAYS'} REMAINING`}</dd></div><div><dt>PUBLIC INTEREST</dt><dd>{kothiTimes.breaking.publicInterest}</dd></div><div><dt>REPORTERS’ EXCITEMENT</dt><dd>{kothiTimes.breaking.reportersExcitement}</dd></div></dl><p className="kt-editor-note">{kothiTimes.breaking.newsroomNote}</p></section>
          <aside className="kt-top-stories"><h3>{"TODAY'S TOP STORIES"}</h3><ol>{kothiTimes.topStories.map((story,i)=><li key={story.title}><span>{String(i+1).padStart(2,'0')}</span><button onClick={()=>scrollTo(story.target)}>{story.title}</button></li>)}</ol></aside>
        </div>
      </section>

      <section className="kt-columns" aria-label="Newspaper stories and features">
        <div className="kt-column kt-column-one">
          <article className="kt-story" id="local-reports"><p className="kt-section-label">LOCAL REPORTS · PEOPLE’S DESK</p><button className="kt-title-button" onClick={()=>setModal(details(kothiTimes.localReport.title,kothiTimes.localReport.body,'LOCAL REPORT'))}><h2>{kothiTimes.localReport.title}</h2></button><p>{kothiTimes.localReport.body}</p><div className="kt-witnesses">{kothiTimes.localReport.witnesses.map((w,i)=><button key={w} onClick={()=>setModal(details(`WITNESS STATEMENT NO. ${i+1}`,`${w}\n\n${kothiTimes.localReport.witnessNote}`,'IMAGINARY NEWSROOM WITNESS'))}><span>WITNESS {String(i+1).padStart(2,'0')}</span><q>{w.split('“')[1]?.split('”')[0]||w}</q></button>)}</div><div className="kt-conclusion"><b>{kothiTimes.localReport.conclusionTitle}</b><p>{kothiTimes.localReport.conclusion}</p></div></article>

          <article className="kt-story kt-awards" id="awards"><p className="kt-section-label">THE CEREMONIAL DESK</p><h2>{kothiTimes.awards.title}</h2><p className="kt-deck">{kothiTimes.awards.subtitle}</p><ol>{kothiTimes.awards.items.map((award,i)=><li key={award.title}><button onClick={()=>setModal(details(award.title,`${award.text}\n\n${award.detail}`,'IMAGINARY KOTHI AWARD'))}><span className="kt-award-no">{String(i+1).padStart(2,'0')}</span><span><b>{award.title}</b><small>{award.text}</small></span><i aria-hidden="true">↗</i></button></li>)}</ol><p className="kt-disclaimer">{kothiTimes.awards.disclaimer}</p></article>
        </div>

        <div className="kt-column kt-column-two">
          <article className="kt-investigation" id="investigation"><p className="kt-section-label">SPECIAL INVESTIGATION · {kothiTimes.investigation.caseLabel}</p><button className="kt-title-button" onClick={()=>setModal(details(kothiTimes.investigation.title,kothiTimes.investigation.opening,'THE DETECTIVE BUREAU'))}><h2>{kothiTimes.investigation.title}</h2></button><p>{kothiTimes.investigation.opening}</p><div className="kt-case-tracker" role="status" aria-live="polite"><span>CASE CLUES EXAMINED</span><b>{examined.length} / {kothiTimes.investigation.exhibits.length}</b><div className="kt-progress"><i style={{width:`${examined.length/kothiTimes.investigation.exhibits.length*100}%`}}/></div></div><div className="kt-exhibits">{kothiTimes.investigation.exhibits.map(exhibit=><button key={exhibit.id} className={`kt-exhibit ${examined.includes(exhibit.id)?'examined':''}`} onClick={()=>inspect(exhibit)}><span>{exhibit.label}</span><b>{exhibit.text}</b><small>{examined.includes(exhibit.id)?'EXAMINED ✓':'OPEN CASE FILE ↗'}</small>{examined.includes(exhibit.id)&&<i className="kt-examined-stamp">EXAMINED</i>}</button>)}</div><div className="kt-investigation-report"><b>{kothiTimes.investigation.reportTitle}</b><p>{kothiTimes.investigation.report}</p></div>
            {complete&&<div className="kt-verdict" role="status"><p className="kt-section-label">CASE NO. 1023 · FINAL VERDICT</p><h3>INVESTIGATION COMPLETE.</h3><p>{kothiTimes.investigation.verdict.replace('INVESTIGATION COMPLETE. ','').replace(' CASE CLOSED. APPRECIATION CONTINUES.','')}</p><b>CASE CLOSED.<br/>APPRECIATION CONTINUES.</b><div><button onClick={()=>nav(kothiTimes.links.letters)}>OPEN THE LETTERS PAGE</button><button onClick={()=>nav(kothiTimes.links.birthday)}>GO TO THE BIRTHDAY PAGE</button></div></div>}
          </article>

          <article className="kt-editorial" id="editorial"><div className="kt-editorial-head"><p className="kt-section-label">THE EDITORIAL</p><h2>{kothiTimes.editorial.label.replace('THE EDITORIAL — ','')}</h2><span>AN OPEN LETTER FROM TODAY’S REPORTER · NANI</span></div><div className="kt-editorial-copy">{kothiTimes.editorial.paragraphs.map((p,i)=><p key={i}>{p.replace('{countdownPhrase}',countdownPhrase)}</p>)}<p className="kt-signature">{kothiTimes.editorial.signature}</p></div></article>
          <aside className="kt-photo-clip"><Photo src="/images/memories/memory-006.jpg" alt="A shared photograph from the existing memories archive"/><p>FROM THE PHOTO ARCHIVE · ONE OF OUR SHARED PAGES</p></aside>
        </div>

        <div className="kt-column kt-column-three">
          <article className="kt-story kt-interview" id="interview"><p className="kt-section-label">THE PEOPLE’S MICROPHONE</p><button className="kt-title-button" onClick={()=>setModal({title:kothiTimes.interview.title,paragraphs:kothiTimes.interview.questions.map(({q,a})=>`${q}\nA: ${a}`),label:'FICTIONAL INTERVIEW · NOT APPROVED BY THE SUBJECT'})}><h2>{kothiTimes.interview.title}</h2></button><div className="kt-qa">{kothiTimes.interview.questions.map(({q,a},i)=><button key={q} onClick={()=>setModal(details(`QUESTION ${i+1}`,`${q}\nA: ${a}`,'THE KOTHI QUESTIONNAIRE'))}><b>Q{i+1}</b><span>{q}</span><i>A: {a}</i></button>)}</div><p className="kt-disclaimer">{kothiTimes.interview.disclaimer}</p></article>

          <article className="kt-sidebar-story" id="trending"><h2>{kothiTimes.trending.title}</h2><ul>{kothiTimes.trending.items.map((item,i)=><li key={item}><button onClick={()=>setModal(details(`TRENDING STORY 0${i+1}`,item,'A PLAYFUL BIRTHDAY HEADLINE'))}>{item}</button></li>)}</ul></article>

          <article className="kt-weather" id="weather-report"><p className="kt-section-label">THE FICTIONAL FORECAST DESK</p><h2>{kothiTimes.weather.title}</h2><dl>{kothiTimes.weather.items.map(([name,report])=><div key={name}><dt>{name}</dt><dd>{dateIn(report)}</dd></div>)}</dl><p>{kothiTimes.weather.note}</p><small>{kothiTimes.weather.disclaimer}</small></article>

          <article className="kt-countdown" id="countdown-update"><p className="kt-section-label">{kothiTimes.countdown.title}</p><h2>{remainingLabel}</h2>{countdown.today?<p>{kothiTimes.countdown.today}</p>:<><div className="kt-countdown-units" role="timer" aria-label={`Time until ${birthdayDate}`}><div><b>{String(countdown.days).padStart(2,'0')}</b><span>DAYS</span></div><div><b>{String(countdown.hours).padStart(2,'0')}</b><span>HOURS</span></div><div><b>{String(countdown.minutes).padStart(2,'0')}</b><span>MINUTES</span></div><div><b>{String(countdown.seconds).padStart(2,'0')}</b><span>SECONDS</span></div></div><p>{countdown.days===1?'One day':countdown.days===0?'Less than a day':`${countdown.days} days`} {kothiTimes.countdown.before.replace(/^days /,'')}</p></>}<span className="kt-countdown-date">EDITION DATE · {birthdayDate}</span></article>

          <article className="kt-classifieds" id="classifieds"><h2>PERSONAL NOTICES</h2><button onClick={()=>setModal(details('WANTED: ONE SMILE', 'Wanted: one smile from Teju. Reward: a happier day. 🌷', 'A SMALL CLASSIFIED'))}><b>WANTED</b><span>One smile from Teju. Reward: a happier day.</span></button><button onClick={()=>setModal(details('MISSING: THE REPORTER’S COMPOSURE','Missing after Kothi did something cute. If found, return gently. 😌','A SMALL CLASSIFIED'))}><b>MISSING</b><span>Reporter’s ability to remain unaffected.</span></button><button onClick={()=>setModal(details('SPECIAL NOTICE','Birthday girl deserves extra happiness, cake, and absolutely no spoilers. 🎂','A SMALL CLASSIFIED'))}><b>SPECIAL NOTICE</b><span>Birthday girl deserves an excellent day.</span></button></article>
        </div>
      </section>

      <section className="kt-final-edition" id="final-edition"><div className="kt-final-rule"/><p className="kt-section-label">THE LAST WORD · STILL ONLY PAGE ONE</p><h2>{kothiTimes.finale.headline}</h2><div className="kt-final-grid"><p>{kothiTimes.finale.message}</p><div className="kt-final-sign"><b>{kothiTimes.finale.signature[0]}</b>{kothiTimes.finale.signature.slice(1).map(line=><span key={line}>{line}</span>)}</div></div><p className="kt-handwritten">{kothiTimes.finale.closing}</p><div className="kt-final-rule kt-double"/><div className="kt-final-actions"><button onClick={()=>nav('home')}>RETURN HOME</button><button onClick={()=>nav(kothiTimes.links.letters)}>CONTINUE TO LETTERS</button><button onClick={()=>nav(kothiTimes.links.birthday)}>CONTINUE TO BIRTHDAY</button></div><footer>THE KOTHI TIMES · A PERSONAL BIRTHDAY EDITION · FILED WITH LOVE BY NANI ♡</footer></section>
    </main>
    {modal&&<Overlay content={modal} onClose={()=>setModal(null)}/>}
  </div>
}
