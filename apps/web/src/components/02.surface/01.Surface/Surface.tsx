import React, {
  forwardRef,
  type ElementType,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
} from 'react';;
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

type SurfaceOwnProps = {
  variant?: SurfaceVariant;
  padding?: SurfacePadding;
  radius?: SurfaceRadius;
  className?: string;
};

type SurfaceProps<T extends ElementType> =
  SurfaceOwnProps & {
    as?: T;
  } & Omit<ComponentPropsWithoutRef<T>, keyof SurfaceOwnProps | 'as'>;

type SurfaceComponent = <T extends ElementType = 'div'>(
  props: SurfaceProps<T> & {
    ref?: ComponentPropsWithRef<T>['ref'];
  }
) => React.ReactElement | null;

const SurfaceRender = <T extends ElementType = 'div'>(
{
  as,
  variant  = 'default',
  padding  = 'none',
  radius   = 'none',
  className,
  children,
  ...rest
}: SurfaceProps<T>,
ref: ComponentPropsWithRef<T>['ref']
) => {
  const Comp = as ?? 'div';

  return (
    <Comp
      ref={ref}
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

export const Surface = forwardRef(SurfaceRender) as SurfaceComponent;

// Surface.displayName = 'Surface';