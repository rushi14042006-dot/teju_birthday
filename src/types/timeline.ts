export type TimelineImage={id:string;src:string;alt:string;caption:string;date?:string;story?:string;featured?:boolean}
export type TimelineChapter={id:string;year:string;date?:string;label:string;title:string;description:string;longStory?:string;images:TimelineImage[];handwrittenNote?:string;layout:'left'|'right'|'center'|'wide';accent?:'blush'|'lilac'|'cream'}
