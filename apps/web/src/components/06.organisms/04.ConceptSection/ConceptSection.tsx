import { useRef } from "react";
import { useScrollReveal } from '@/animations/hooks/useScrollReveal';
import styles from './ConceptSection.module.scss';
import { Section } from "@/components/01.primitives/Section/Section";
import { Container } from "@/components/01.primitives/Container/Container";
import { Stack } from "@/components/01.primitives/Stack/Stack";
import { Box } from "@/components/01.primitives/Box/Box";

import conceptImg from '@/assets/images/02.concept/concept.png';
import { Card } from "@/components/02.surface/02.Card/Card";

export default function ConceptSection() {
  const labelRef = useScrollReveal<HTMLSpanElement>();
  const headingRef = useScrollReveal<HTMLHeadingElement>();
  const imgRef = useScrollReveal<HTMLDivElement>();
  const cardRef = useScrollReveal<HTMLDivElement>();
  const textRef = useScrollReveal<HTMLParagraphElement>();

  return (
    <Section
      id="concept"
      className={styles.concept}
      spacing="lg"
      aria-label="Concept"
    >
      <Container>
        <div
          className={styles.concept__grid}
        >

          <Stack 
            className={styles.concept__headline}
          >
            {/* Tagline */}
            <span
              ref={labelRef}
              className={styles.concept__label}
            >
              CONCEPT
            </span>
            {/* Headline */}
            <h2
              ref={headingRef}
              className={styles.concept__heading}
            >
              <p>
                あなたの髪と
              </p>
              <p>
                ゆっくり向き合う
              </p>
            </h2>
          </Stack>

          {/* Image */}
          <Box
            ref={imgRef}
            className={styles.concept__imageWrapper}
          >

            <picture>
              <source 
                media="(min-width: 768px)"
                // srcSet={heroDesktopImg}
              />

              <img
                src={conceptImg}
                alt="サロン外観 — 静かで落ち着いた外観"
                className={styles.concept__image}
                loading="lazy"
              />
            </picture>
          </Box>

          <Card 
            ref={cardRef}
            className={styles.concept__card}
            padding="none"
          >
            {/* TODO: Text Stagger animation */}
            <p ref={textRef}>今日は静かに本を読みたい。</p>
            <p ref={textRef}>何も考えずに、ただ目を閉じたい。</p>
            <p ref={textRef}>あるいは、誰にも言えない髪の悩みをゆっくり聞いてほしい。</p>
            <p ref={textRef}>SALON SHIZUKAでは、落ち着いた寛ぎの空間のなかで、その日のあなたの心に合わせた距離感で寄り添います。 カウンセリングの最初に「今日の過ごし方のご希望」をお伺いします。どうぞ遠慮なく、友人のような気さくさで、リラックスしてお過ごしください。</p>
          </Card>

        </div>
      </Container>

      {/* Body Text */}

    </Section>
  );
};