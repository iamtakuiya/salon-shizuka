import clsx from 'clsx';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './LogoWrapper.module.scss';

// Components
import { Box } from '@/components/01.primitives/Box/Box';


interface LogoWrapperProps extends ComponentPropsWithoutRef<typeof Box> {
  variant?: 'light' | 'dark';
  className?: string;
  children: ReactNode;
}

export default function LogoWrapper({ 
  variant = 'light',
  className,
  children,
  ...rest
}: LogoWrapperProps) {
  return (
    <Box 
    className={clsx(
      styles.logoWrapper, 
      styles[variant],
      className
    )} 
    {...rest}
    >
      {children}
    </Box>
  );
}