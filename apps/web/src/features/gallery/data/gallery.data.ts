import type { GalleryItem } from '../types/gallery.types';

import { galleryImages } from './gallery.images';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'extension-tools-menu',
    image: galleryImages.extensionToolsMenu.desktop,
    imageMobile: galleryImages.extensionToolsMenu.mobile,
    alt: 'Hair extension tools, clips, and IBE brand emblem on a marble countertop next to a service menu',
    label: 'Extensions & Tools',
  },
  {
    id: 'hair-foiling-highlighting',
    image: galleryImages.hairFoilingHighlighting.desktop,
    imageMobile: galleryImages.hairFoilingHighlighting.mobile,
    alt: 'Stylist applying foil highlights to a client\'s hair',
    label: 'Coloring & Highlighting',
  },
  {
    id: 'shizuka-private-pod-lounge',
    image: galleryImages.shizukaPrivatePodLounge.desktop,
    imageMobile: galleryImages.shizukaPrivatePodLounge.mobile,
    alt: 'Warmly lit, upscale salon waiting area and lounge featuring Shizuka Private Pod 1',
    label: 'Private Pod Lounge',
  },
  {
    id: 'salon-stations-shampoo-area',
    image: galleryImages.salonStationsShampooArea.desktop,
    imageMobile: galleryImages.salonStationsShampooArea.mobile,
    alt: 'Overview of the salon interior showing styling stations and a client getting a hair wash',
    label: 'Salon Overview',
  },
  {
    id: 'hair-wash-shampooing',
    image: galleryImages.hairWashShampooing.desktop,
    imageMobile: galleryImages.hairWashShampooing.mobile,
    alt: 'Stylist carefully shampooing and massaging a client\'s hair at the wash basin',
    label: 'Shampoo Service',
  },
  {
    id: 'shampoo-station-ambience',
    image: galleryImages.shampooStationAmbience.desktop,
    imageMobile: galleryImages.shampooStationAmbience.mobile,
    alt: 'Luxurious and relaxing shampoo station framed by elegant ribbed glass partitions and warm hanging lights',
    label: 'Relaxation Area',
  },
  {
    id: 'haircut-detailing-close-up',
    image: galleryImages.haircutDetailingCloseUp.desktop,
    imageMobile: galleryImages.haircutDetailingCloseUp.mobile,
    alt: 'Close-up of the stylist using shears and a comb to precisely trim damp hair',
    label: 'Precision Cutting',
  },
  {
    id: 'hair-trim-focus',
    image: galleryImages.hairTrimFocus.desktop,
    imageMobile: galleryImages.hairTrimFocus.mobile,
    alt: 'Stylist focusing intensely while trimming hair sections under a ring light',
    label: 'Hair Styling & Trimming',
  },
];