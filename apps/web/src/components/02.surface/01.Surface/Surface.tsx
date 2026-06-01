import type { ElementType, ComponentPropsWithoutRef } from 'react';
import styles from './Surface.module.scss';
import clsx from 'clsx';

export type SurfaceVariant =
  | 'default'
  | 'muted'
  | 'elevated'
  | 'dark'
  | 'overlay'
  | 'glass'
  | 'bordered';

export type SurfacePadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type SurfaceRadius  = 'none' | 'sm' | 'md' | 'lg' | 'full';

type SurfaceProps<T extends ElementType = 'div'> = {
  as?:       T;
  variant?:  SurfaceVariant;
  padding?:  SurfacePadding;
  radius?:   SurfaceRadius;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

export function Surface<T extends ElementType = 'div'>({
  as,
  variant  = 'default',
  padding  = 'none',
  radius   = 'none',
  className,
  children,
  ...rest
}: SurfaceProps<T>) {
  const Comp = as ?? 'div';

  return (
    <Comp
      className={clsx(
        styles.surface,
        styles[`surface--${variant}`],
        padding !== 'none' && styles[`padding--${padding}`],
        radius  !== 'none' && styles[`radius--${radius}`],
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
