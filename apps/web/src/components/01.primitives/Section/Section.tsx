// src/components/primitives/Section/Section.tsx
import type { ComponentPropsWithoutRef } from 'react';
import styles from './Section.module.scss';
import clsx from 'clsx';

type SectionProps = {
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
} & ComponentPropsWithoutRef<'section'>;

export function Section({
  spacing = 'lg',
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={clsx(styles.section, styles[`spacing--${spacing}`], className)}
      {...rest}
    >
      {children}
    </section>
  );
}