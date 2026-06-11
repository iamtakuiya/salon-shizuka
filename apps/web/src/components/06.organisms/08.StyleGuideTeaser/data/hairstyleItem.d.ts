import { HairStyleItem } from '../types/hairstyle.types';

import HairStyle01 from '@assets/images/05.hairstyle/hairstyle-1-m.png';
import HairStyle02 from '@assets/images/05.hairstyle/hairstyle-2-m.png';
import HairStyle03 from '@assets/images/05.hairstyle/hairstyle-3-m.png';
import HairStyle04 from '@assets/images/05.hairstyle/hairstyle-4-m.png';

// ── Data ────────────────────────────────────────────────────────────────────
export const STYLES: HairStyleItem[] = [
  {
    id: '1',
    image: HairStyle01,
    alt: 'Salon interior',
    label: 'Salon Interior',
  },
  {
    id: '2',
    image: HairStyle03,
    alt: 'Hair styling',
    label: 'Hair Styling',
  },
  {
    id: '3',
    image: HairStyle03,
    alt: 'Private room',
    label: 'Private Room',
  },
  {
    id: '4',
    image: HairStyle04,
    alt: 'Treatment',
    label: 'Treatment',
  },
];