// src/components/primitives/Row/Row.tsx
import type { ElementType, ComponentPropsWithoutRef } from 'react';
import styles from './Row.module.scss';
import clsx from 'clsx';

type RowProps<T extends ElementType = 'div'> = {
  as?: T;
  gap?: 'xs' | 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

export function Row<T extends ElementType = 'div'>({
  as,
  gap = 'md',
  align = 'center',
  justify = 'start',
  wrap = false,
  className,
  children,
  ...rest
}: RowProps<T>) {
  const Comp = as ?? 'div';

  return (
    <Comp
      className={clsx(
        styles.row,
        styles[`gap--${gap}`],
        styles[`align--${align}`],
        styles[`justify--${justify}`],
        wrap && styles['wrap'],
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}