import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.scss';
import { Container } from '@/components/01.primitives/Container/Container';
import { Stack } from '@/components/01.primitives/Stack/Stack';
import { Link } from '@/components/atoms/Link/Link';
// import heroImg from '@/assets/images/hero/hero-mobile.png';

export default function Hero() {
  const labelRef    = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set(
      [overlayRef.current, labelRef.current, headlineRef.current, subRef.current, ctaRef.current],
      { autoAlpha: 0 }
    );

    tl.to(overlayRef.current,  { autoAlpha: 1, duration: 1.2 })
      .to(labelRef.current,    { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.6')
      .to(headlineRef.current, { autoAlpha: 1, y: 0, duration: 0.9 }, '-=0.4')
      .to(subRef.current,      { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.5')
      .to(ctaRef.current,      { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.4');

    gsap.set([labelRef.current, headlineRef.current, subRef.current, ctaRef.current], { y: 24 });

    return () => { tl.kill(); };
  }, []);

  return (
    <section id="home" className={styles.hero} aria-label="Hero">
      {/* Background image */}
      <div className={styles.hero__bg}>
        <img
          // src={heroImg}
          alt=""
          aria-hidden="true"
          className={styles.hero__bgImg}
        />
        <div ref={overlayRef} className={styles.hero__overlay} />
      </div>

      {/* Content */}
      <Container size="xl" className={styles.hero__container}>
        <Stack gap="lg" align="start" className={styles.hero__content}>
          <span ref={labelRef} className={styles.hero__label}>
            Private Salon · Jingumae · Tokyo
          </span>

          <h1 ref={headlineRef} className={styles.hero__headline}>
            <span className={styles.hero__headlineSub}>静けさの中の</span>
            <span className={styles.hero__headlineMain}>美しさ</span>
          </h1>

          <p ref={subRef} className={styles.hero__sub}>
            完全予約制のプライベートサロン。<br />
            あなただけの時間と空間をお届けします。
          </p>

          <div ref={ctaRef} className={styles.hero__cta}>
            <Link href="#reservation" className={styles.hero__ctaBtn}>
              ご予約はこちら
            </Link>
            <Link href="#concept" className={styles.hero__ctaBtnGhost}>
              詳しく見る
            </Link>
          </div>
        </Stack>
      </Container>

      {/* Scroll indicator */}
      {/* <div className={styles.hero__scroll} aria-hidden="true">
        <span className={styles.hero__scrollLine} />
        <span className={styles.hero__scrollText}>Scroll</span>
      </div> */}
    </section>
  );
}
