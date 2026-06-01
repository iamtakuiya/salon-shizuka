import type { ElementType, ComponentPropsWithoutRef } from 'react';
import { Surface } from '../Surface/Surface';
import styles from './Card.module.scss';
import clsx from 'clsx';

// Card is an opinionated Surface — always elevated, always has radius.
// Use Surface directly when you need full variant control.
// Use Card when the content is clearly a grouped, elevated unit.

type CardVariant = 'default' | 'interactive';

type CardProps<T extends ElementType = 'div'> = {
  as?:       T;
  variant?:  CardVariant;
  padding?:  'sm' | 'md' | 'lg';
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

export function Card<T extends ElementType = 'div'>({
  as,
  variant = 'default',
  padding = 'md',
  className,
  children,
  ...rest
}: CardProps<T>) {
  return (
    <Surface
      as={as}
      variant="elevated"
      padding={padding}
      radius="md"
      className={clsx(
        styles.card,
        styles[`card--${variant}`],
        className
      )}
      {...rest}
    >
      {children}
    </Surface>
  );
}
