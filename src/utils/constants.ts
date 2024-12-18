export const LAYOUT = {
  headerHeight: '60px',
  footerHeight: '56px',
  contentHeight: 'calc(100vh - 116px)',
} as const;

export const NAV_ITEMS = [
  { path: '/', label: '_hello' },
  { path: '/about', label: '_about-me' },
  { path: '/work', label: '_work-experience' },
  { path: '/projects', label: '_projects' },
  { path: '/contact', label: '_contact-me' },
] as const;