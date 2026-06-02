import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { heroReveal } from "@/animations/gsap/heroReveal";

import { Section } from "@/components/01.primitives/Section/Section";
import { Container } from "@/components/01.primitives/Container/Container";
import { Stack } from "@/components/01.primitives/Stack/Stack";
import { Box } from "@/components/01.primitives/Box/Box";
import LogoWrapper from "../01.Header/LogoWrapper/LogoWrapper";
import { Logo } from "@/components/atoms/Logo/Logo";
import { Button } from "@/components/atoms/Button/Button";

import styles from "./Hero.module.scss";
import heroMobileImg from "@assets/images/01.hero/hero-mobile.png";

export default function Hero() {
  const logoRef     = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  // const overlayRef  = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!logoRef.current && !headlineRef.current && !subRef.current && !ctaRef.current) return;

    const ctx = gsap.context(() => {
      heroReveal({
        // overlay: overlayRef.current,
        logo: logoRef.current,
        headline: headlineRef.current,
        sub: subRef.current,
        cta: ctaRef.current,
      });
    });

    return () => ctx.revert();  // Safely cleans up on unmount/re-render
  }, []);


  return (
    <Section
      id="hero"
      className={styles.hero}
      aria-label="Salon Shizuka Introduction"
      // style={{ backgroundImage: `url(${heroMobileImg})`}}
    >
      <Box className={styles.hero__bg}>
        <picture>
          <source 
            media="(min-width: 768px)"
            // srcSet={heroDesktopImg}
          />

          <img
            src={heroMobileImg}
            alt=""
            aria-hidden="true"
            className={styles.hero__bgImg}
          />
        </picture>
        <div 
          // ref={overlayRef}
          className={styles.hero__overlay} 
        />
      </Box>

      <Container
        size="xl" 
        className={styles.hero__container}
      >
        <Stack 
          gap="lg" 
          align="start" 
          className={styles.hero__content}
        >
          {/* Content */}
          <Box
            className={styles.hero__headlineContainer}
          >
            {/* Logo */}
            <LogoWrapper ref={logoRef} className={styles.header__logoWrapper}>
              <Logo className={styles.hero__logo} width={338} height={128} />
            </LogoWrapper>
            
            <p
              ref={subRef}
              className={styles.hero__sub}
            >
              あなた本来の美しさと艶を呼び覚ます、<br />
              プライベートサロンで特別なひとときを。
            </p>
            <h1
              ref={headlineRef}
              className={styles.hero__headline}
            >
              髪が変わる、自分のための贅沢を！ 
            </h1>
          </Box>
          {/* CTA */}
          <Box
            ref={ctaRef}
            className={styles.hero__cta}
          >
            <Button as='a' href="#reservation" aria-label="サロンを予約する" className={styles.hero__ctaBtnGhost}>
              サロンを予約する
            </Button>          
          </Box>
        </Stack>
      </Container>
    </Section>
  );
}