/* ===========================================================
   Athenium — helpers de UI compartilhados
=========================================================== */

const ICONS = {
  home: `<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  book: `<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5v-16Z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>`,
  back: `<svg viewBox="0 0 24 24" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
  card: `<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>`,
  info: `<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>`,
  exit: `<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
  user: `<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>`
};

function owlSVG(size=56){
  return `<svg viewBox="0 0 64 64" width="${size}" height="${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 4C18 4 8 15 8 30v10c0 12 10 20 24 20s24-8 24-20V30C56 15 46 4 32 4Z" fill="currentColor"/>
    <circle cx="22" cy="27" r="8" fill="white"/>
    <circle cx="42" cy="27" r="8" fill="white"/>
    <circle cx="22" cy="27" r="3.2" fill="currentColor"/>
    <circle cx="42" cy="27" r="3.2" fill="currentColor"/>
    <path d="M27 34l5 6 5-6" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 50c4-3 20-3 24 0" stroke="white" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M14 52h6M44 52h6" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}

function renderBottomNav(active){
  const items = [
    {key:"inicio", label:"Início", href:"home.html", icon:ICONS.home},
    {key:"prazos", label:"Prazos", href:"prazos.html", icon:ICONS.clock},
    {key:"livros", label:"Meus Livros", href:"meus-livros.html", icon:ICONS.book},
    {key:"historico", label:"Histórico", href:"historico.html", icon:ICONS.calendar},
    {key:"menu", label:"Menu", href:"menu.html", icon:ICONS.menu},
  ];
  return `<nav class="bottom-nav">${items.map(i => `
    <a class="${i.key===active?'active':''}" href="${i.href}">${i.icon}<span>${i.label}</span></a>
  `).join("")}</nav>`;
}

function mountNav(active){
  const el = document.getElementById("bottom-nav-slot");
  if(el) el.outerHTML = renderBottomNav(active);
}

function coverEl(book, size="cover"){
  const label = initials(book.title);
  return `<div class="${size}" style="background:${book.color}">${label}</div>`;
}
