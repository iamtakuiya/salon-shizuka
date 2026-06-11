/**
 * GallerySlider
 * ─────────────
 * Salon gallery section. Uses <ImageSlider> + <SliderGrid variant="varied">
 * for mixed-span images.
 *
 * Layout:
 *  ┌────────────────────────────────────────┐
 *  │  sub-label + heading      [ ← ] [ → ] │  ← header row
 *  │  ┌──────────────────────────────────┐  │
 *  │  │  mixed-size image grid           │  │  ← viewport (overflow: hidden)
 *  │  └──────────────────────────────────┘  │
 *  │           ●  ○  ○  ○  ○  ○            │  ← dots
 *  └────────────────────────────────────────┘
 */


/*
TODO:
To achieve your goal of eliminating hard-coded values and introducing polymorphism and generics, 
I have structured this into a flexible Notification System pattern.

Class name
- galery -> style
*/

import {
  useLayoutEffect,
  useRef,
} from 'react';

import { gsap } from 'gsap';

import { useSlider } from '@/animations/hooks/useSlider';

import { Section } from '@/components/01.primitives/Section/Section';
import { Container } from '@/components/01.primitives/Container/Container';
import { Stack } from '@/components/01.primitives/Stack/Stack';
import { Row } from '@/components/01.primitives/Row/Row';
import { Box } from '@/components/01.primitives/Box/Box';

import { ImageSlider } from '@/components/05.molecules/ImageSlider/ImageSlider';
import { SliderGrid } from '@/components/05.molecules/SliderGrid/SliderGrid';

import styles from './StyleGuideTeaser.module.scss';

import { STYLES } from './data/hairstyleItem.d';

// ── Component ───────────────────────────────────────────────────────────────

export function StyleGuideTeaser() {
  const {
    current,
    next,
    prev,
    goTo,
    // totalSteps,
  } = useSlider({
    totalItems: STYLES.length,
    visibleItems: 3,
  });

  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const items = Array.from(
      track.querySelectorAll<HTMLElement>(
        '[data-gallery-item]'
      )
    );

    const activeItem = items[current];

    if (!activeItem) return;

    gsap.to(items, {
      width: 150,
      // height: 180,
      opacity: 0.6,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.to(activeItem, {
      width: 220,
      // height: 260,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Centering Logic
    // const offset =
    //   activeItem.offsetLeft -
    //   track.parentElement!.clientWidth / 2 +
    //   activeItem.clientWidth / 1.67;

    const ITEM_WIDTH = 166;  // OPTION 1
    // const target = items[current]?.offsetLeft ?? 0;  // OPTION 2

    gsap.to(track, {
      // x: -offset,
      x: -(current * ITEM_WIDTH),  // OPTION 1
      // x: -target,  // OPTION 2
      duration: 0.8,
      ease: 'power3.out',
    });
  }, [current]);

  return (
    <Section
      id="gallery"
      spacing="lg"
      className={styles.gallery}
    >
      <Container as="header" className={styles.gallery__header}>
        <Stack gap="xs">
          <span className={styles.gallery__label}>
            完全予約制・プライベートサロン SHIZUKA
          </span>

          <h2 className={styles.gallery__heading}>
            Salon Gallery
          </h2>
        </Stack>

        <Row className={styles.gallery__controls}>
          <button
            onClick={prev}
            className={styles.gallery__arrow}
            aria-label="Previous Slide"
          >
            ←
          </button>

          <button
            onClick={next}
            className={styles.gallery__arrow}
            aria-label="Next Slide"
          >
            →
          </button>
        </Row>
      </Container>

      <ImageSlider>
        <SliderGrid
          ref={trackRef}
          items={STYLES}
          currentIndex={current}
          variant="default"
          onSelect={goTo}
        />
      </ImageSlider>

      <Box className={styles.gallery__pagination}>
        {STYLES.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={
              current === index
                ? styles.activeDot
                : styles.dot
            }
          />
        ))}
      </Box>
    </Section>
  );
}