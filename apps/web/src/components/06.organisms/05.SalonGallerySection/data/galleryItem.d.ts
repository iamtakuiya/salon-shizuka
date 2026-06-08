import { GalleryItem } from '../types/gallery.types';

import Gallery01 from '@assets/images/03.gallery/gallery-1-m.png';
import Gallery02 from '@assets/images/03.gallery/gallery-2-m.png';
import Gallery03 from '@assets/images/03.gallery/gallery-3-m.png';
import Gallery04 from '@assets/images/03.gallery/gallery-4-m.png';
import Gallery05 from '@assets/images/03.gallery/gallery-5-m.png';

// ── Data ────────────────────────────────────────────────────────────────────
export const ITEMS: GalleryItem[] = [
  {
    id: '1',
    image: Gallery01,
    alt: 'Salon interior',
    label: 'Salon Interior',
  },
  {
    id: '2',
    image: Gallery03,
    alt: 'Hair styling',
    label: 'Hair Styling',
  },
  {
    id: '3',
    image: Gallery03,
    alt: 'Private room',
    label: 'Private Room',
  },
  {
    id: '4',
    image: Gallery04,
    alt: 'Treatment',
    label: 'Treatment',
  },
  {
    id: '5',
    image: Gallery05,
    alt: 'Relaxation',
    label: 'Relaxation',
  },
];