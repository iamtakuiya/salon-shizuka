// src/components/primitives/Row/Row.tsx
import React, { 
  type ElementType, 
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
} from 'react';

import styles from './Row.module.scss';
import clsx from 'clsx';

type RowOwnProps<T extends ElementType> = {
  as?: T;
  gap?: 'xs' | 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
  className?: string;
};

type RowProps<T extends ElementType> = RowOwnProps<T> & 
  Omit<ComponentPropsWithoutRef<T>, keyof RowOwnProps<T>>;

type RowComponent = <T extends ElementType = 'div'>(
  props: RowProps<T> & {
    ref?: ComponentPropsWithRef<T>['ref'];
  }
) => React.ReactElement | null;

export const Row: RowComponent = React.forwardRef(function Row
<T extends ElementType = 'div'>(
  {
    as,
    gap = 'md',
    align = 'center',
    justify = 'start',
    wrap = false,
    className,
    children,
    ...rest
  }: RowProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const Comp = as || 'div';

  return (
    <Comp
      ref={ref}
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
});