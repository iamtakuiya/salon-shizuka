export interface NavLinkItem {
  readonly label: string;
  readonly href: string;
}

// NAV_LINKS lives here — DesktopNav owns its own data
export const NAV_LINKS: readonly NavLinkItem[] = [
  { label: 'Home',        href: '#home'        },
  { label: 'Concept',     href: '#concept'     },
  { label: 'Gallery',     href: '#gallery'     },
  { label: 'Style Guide', href: '#style-guide' },
  { label: 'Menu',        href: '#menu'        },
  { label: 'Voice',       href: '#voice'       },
  { label: 'Reservation', href: '#reservation' },
  { label: 'Map & Hours', href: '#map'         },
] as const;
