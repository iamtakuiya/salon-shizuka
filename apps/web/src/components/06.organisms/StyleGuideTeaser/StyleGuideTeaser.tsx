/**
 * StyleGuideTeaser
 * ────────────────
 * Uses the same <ImageSlider> + <SliderGrid variant="uniform"> as GallerySlider
 * but with a completely different section layout:
 *
 *  ┌──────────────────────────────────────────────┐
 *  │  [text column]      [uniform image slider]   │  ← two-column grid
 *  │  label                ○ ○ ● ○               │
 *  │  heading              [ ← ] [ → ]            │
 *  │  body copy                                   │
 *  └──────────────────────────────────────────────┘
 *
 * No slider logic lives here — it's all in <ImageSlider>.
 * No grid logic lives here — it's all in <SliderGrid>.
 */

import styles from './StyleGuideTeaser.module.scss';
import { Section }      from '@/components/01.primitives/Section/Section';
import { Container }    from '@/components/01.primitives/Container/Container';
import { Stack }        from '@/components/01.primitives/Stack/Stack';
import { ImageSlider }  from '@/components/05.molecules/ImageSlider/ImageSlider';
import { SliderGrid }   from '@/components/05.molecules/SliderGrid/SliderGrid';
import { useScrollReveal } from '@/animations/hooks/useScrollReveal';
import type { SliderPage } from '@/components/05.molecules/ImageSlider/ImageSlider';

// ── Data ────────────────────────────────────────────────────────────────────
// Each page shows 4 equal-width style tiles. No span values needed.
const SLIDES: SliderPage[] = [
  [
    { id:  1, alt: 'ナチュラルスタイル',  label: 'Natural',  labelJa: 'ナチュラル', tint: '#D9BF97' },
    { id:  2, alt: 'シックスタイル',      label: 'Chic',     labelJa: 'シック',     tint: '#C9A96E' },
    { id:  3, alt: 'アクティブスタイル',  label: 'Active',   labelJa: 'アクティブ', tint: '#BF9A5A' },
    { id:  4, alt: 'クラシックスタイル',  label: 'Classic',  labelJa: 'クラシック', tint: '#A8834A' },
  ],
  [
    { id:  5, alt: 'フェミニンスタイル',  label: 'Feminine', labelJa: 'フェミニン', tint: '#D4C4A8' },
    { id:  6, alt: 'モダンスタイル',      label: 'Modern',   labelJa: 'モダン',     tint: '#C5AD80' },
    { id:  7, alt: 'カジュアルスタイル',  label: 'Casual',   labelJa: 'カジュアル', tint: '#BAA070' },
    { id:  8, alt: 'エレガントスタイル',  label: 'Elegant',  labelJa: 'エレガント', tint: '#C9A96E' },
  ],
];

// ── Component ───────────────────────────────────────────────────────────────

export default function StyleGuideTeaser() {
  const labelRef   = useScrollReveal<HTMLSpanElement>();
  const headingRef = useScrollReveal<HTMLHeadingElement>();
  const bodyRef    = useScrollReveal<HTMLParagraphElement>();

  return (
    <Section id="style-guide" spacing="lg" aria-label="Style Guide">
      <Container>
        <div className={styles.styleGuide__layout}>

          {/* ── Left: text ── */}
          <Stack gap="lg" className={styles.styleGuide__text}>
            <Stack gap="xs">
              <span ref={labelRef} className="section-label">Style Guide</span>
              <h2 ref={headingRef} className={styles.styleGuide__heading}>
                あなたの<br />スタイルを見つける
              </h2>
            </Stack>

            <p ref={bodyRef} className={styles.styleGuide__body}>
              骨格・肌色・ライフスタイルから
              あなたに似合うスタイルをご提案します。
              カウンセリングではお気軽にご相談ください。
            </p>
          </Stack>

          {/* ── Right: uniform image slider ── */}
          <div className={styles.styleGuide__slider}>
            <ImageSlider
              slides={SLIDES}
              renderSlide={(items) => (
                <SliderGrid
                  items={items}
                  variant="uniform"
                  aspectRatio="3 / 4"
                />
              )}
              ariaLabel="スタイルガイドギャラリー"
            >
              {({ ArrowPrev, ArrowNext, Dots }) => (
                <div className={styles.styleGuide__sliderControls}>
                  <Dots />
                  <div className={styles.styleGuide__arrows}>
                    <ArrowPrev />
                    <ArrowNext />
                  </div>
                </div>
              )}
            </ImageSlider>
          </div>

        </div>
      </Container>
    </Section>
  );
}
