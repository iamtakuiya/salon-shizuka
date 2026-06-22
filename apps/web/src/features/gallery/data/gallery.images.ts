import Gallery01 from '@assets/images/03.gallery/gallery-01.png';
import Gallery02 from '@assets/images/03.gallery/gallery-02.png';
import Gallery03 from '@assets/images/03.gallery/gallery-03.png';
import Gallery04 from '@assets/images/03.gallery/gallery-04.png';
import Gallery05 from '@assets/images/03.gallery/gallery-05.png';
import Gallery06 from '@assets/images/03.gallery/gallery-06.png';
import Gallery07 from '@assets/images/03.gallery/gallery-07.png';
import Gallery08 from '@assets/images/03.gallery/gallery-08.png';

import GalleryMobile01 from '@assets/images/03.gallery/mobile/gallery-01-m.png';
import GalleryMobile02 from '@assets/images/03.gallery/mobile/gallery-02-m.png';
import GalleryMobile03 from '@assets/images/03.gallery/mobile/gallery-03-m.png';
import GalleryMobile04 from '@assets/images/03.gallery/mobile/gallery-04-m.png';
import GalleryMobile05 from '@assets/images/03.gallery/mobile/gallery-05-m.png';
import GalleryMobile06 from '@assets/images/03.gallery/mobile/gallery-06-m.png';
import GalleryMobile07 from '@assets/images/03.gallery/mobile/gallery-07-m.png';
import GalleryMobile08 from '@assets/images/03.gallery/mobile/gallery-08-m.png';

export const galleryImages = {
  extensionToolsMenu: {
    desktop: Gallery01,
    mobile: GalleryMobile01, // Corresponds to gallery-01.png
  },
  hairFoilingHighlighting: {
    desktop: Gallery02,
    mobile: GalleryMobile02, // Corresponds to gallery-02.png
  },
  shizukaPrivatePodLounge: {
    desktop: Gallery03,
    mobile: GalleryMobile03, // Corresponds to gallery-03.png
  },
  salonStationsShampooArea: {
    desktop: Gallery04,
    mobile: GalleryMobile04, // Corresponds to gallery-04.png
  },
  hairWashShampooing: {
    desktop: Gallery05,
    mobile: GalleryMobile05, // Corresponds to gallery-05.png
  },
  shampooStationAmbience: {
    desktop: Gallery06,
    mobile: GalleryMobile06, // Corresponds to gallery-06.png
  },
  haircutDetailingCloseUp: {
    desktop: Gallery07,
    mobile: GalleryMobile07, // Corresponds to gallery-07.png
  },
  hairTrimFocus: {
    desktop: Gallery08,
    mobile: GalleryMobile08, // Corresponds to gallery-08.png
  },
} as const;