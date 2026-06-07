import { useRef, useEffect } from 'react';
import { useScrollReveal } from '@/animations/hooks/useScrollReveal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './GallerySlider.module.scss';

import { Section } from '@/components/01.primitives/Section/Section';
import { Container } from '@/components/01.primitives/Container/Container';
import { Stack } from '@/components/01.primitives/Stack/Stack';
import { Box } from '@/components/01.primitives/Box/Box';
import { Row } from '@/components/01.primitives/Row/Row';

import GalleryOne from '@assets/images/03.gallery/gallery-1-m.png';


export default function GallerySlider() {

  return (
    <Section
      id="gallery"
      className={styles.gallery}
      spacing="lg"
      aria-label="Salon Photo Gallery"
    >
      <Container
        as="header"
        className={styles.gallery__header}
      >
        {/* Headline */}
        <Stack
          className={styles.gallery__headline}
          align="center"
          gap="xl"
        >
          {/* Tagline */}
          <span
            // ref={labelRef}
            className={styles.gallery__label}
          >
            完全予約制・プライベートサロン SHIZUKA
          </span>
          {/* Headline */}
          <h2
            // ref={headingRef}
            className={styles.gallery__heading}
          >
            Salon Gallery
          </h2>
        </Stack>

        {/* Slider Controls */}
        <Row
          className={styles.gallery__controls}
          role='group'
          aria-label="スライダーコントロール"
        >
          <button
            // onClick={prev}
            className={styles.gallery__arrow}
            aria-label="前のスライド"
            // disabled={animating}
          >
            ←
          </button>
          <button
            // onClick={next}
            className={styles.gallery__arrow}
            aria-label="次のスライド"
            // disabled={animating}
          >
            →
          </button>
        </Row>
      </Container>

      <Container
        className={styles.gallery__sliderContainer}
      >
        {/* Image Gallery */}
        <Box
          className={styles.gallery__slideWrapper}
          
        >
          <picture>
            <source 
              media="(min-width: 768px)"
              // srcSet={heroDesktopImg}
            />

            <img
              src={GalleryOne}
              alt="シャンプー中の様子"
              className={styles.gallery__image}
              width={140}
              height={156}
              loading="lazy"
            />
          </picture>
          <picture>
            <source 
              media="(min-width: 768px)"
              // srcSet={heroDesktopImg}
            />

            <img
              src={GalleryOne}
              alt="シャンプー中の様子"
              className={styles.gallery__image}
              width={200}
              height={200}
              loading="lazy"
            />
          </picture>
        </Box>
      </Container>

      {/* Dot pagination */}
      <Box
        className={styles.gallery__dotsWrapper}
      >
        <Row
          className={styles.gallery__dots}
          role="tablist"
          aria-label="スライドナビゲーション"
        >
          <button
            // onClick={}
            role="tab"
            className={styles.gallery__dot}
            aria-selected={true}
          >
            .
          </button>
        </Row>
      </Box>

    </Section>
  );
};