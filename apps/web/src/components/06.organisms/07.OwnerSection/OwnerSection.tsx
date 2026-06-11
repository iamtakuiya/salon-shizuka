/*
TODO: Do this when finishing styling
To achieve your goal of eliminating hard-coded values and introducing polymorphism and generics, 
I have structured this into a flexible Notification System pattern.


Class name
- owner


*/

import { useRef } from "react";
import { useScrollReveal } from '@/animations/hooks/useScrollReveal';
import styles from './OwnerSection.module.scss';
import { Section } from "@/components/01.primitives/Section/Section";
import { Container } from "@/components/01.primitives/Container/Container";
import { Stack } from "@/components/01.primitives/Stack/Stack";
import { Box } from "@/components/01.primitives/Box/Box";

import ownerImg from '@/assets/images/04.owner/owner-m.png';
import { Card } from "@/components/02.surface/02.Card/Card";

export default function OwnerSection() {
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
              Owner shizuka 
            </span>
            {/* Headline */}
            <h2
              ref={headingRef}
              className={styles.concept__heading}
            >
              <p>
                髪のお悩み,
              </p>
              <p>
                ここではゆっくり
              </p>
              <p>
                話してくださいね
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
                src={ownerImg}
                alt="オーナー 静花の写真"
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
            <p ref={textRef}>お客様とお話ししていて、いつも思うことがあります。皆様それぞれ違う悩みを持っていて、その場しのぎではない「根本的な改善」で、ずっと自分の髪を好きでいてほしいな、と。</p>
            <p ref={textRef}>Salon Shizukaを完全予約制のプライベート空間にしたのは、まわりの目を気にせず、ホッと一息ついてほしかったからです。他店だとちょっと緊張して言いにくいようなお悩みも、ここでは肩の力を抜いて何でもお話ししてください。</p>
            <p ref={textRef}>丁寧なヘアケアとお家でのちょっとしたコツを一緒におさらいしながら、柔らかいツヤやふんわりとした健やかさなど、あなた本来の美しさを引き出していきます！</p>
          </Card>

        </div>
      </Container>

      {/* Body Text */}

    </Section>
  );
};