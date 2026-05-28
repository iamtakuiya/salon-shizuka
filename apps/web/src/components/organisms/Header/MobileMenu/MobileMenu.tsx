import { useEffect, useRef, PropsWithChildren } from "react";
import { gsap } from "gsap/gsap-core";

import { menuOverlayIn, menuOverlayOut } from '@/animations/gsap/mobileMenu';
import styles from './MobileMenu.module.scss';
import { Box } from "@/components/primitives/Box/Box";
import { Stack } from "@/components/primitives/Stack/Stack";
import { NavLinks } from "@/components/molecules/NavLink/NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ 
  isOpen, 
  onClose,
  children,
  ...rest
}: PropsWithChildren<MobileMenuProps>) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLLIElement[]>([]);
  const socialRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);


  useEffect(() => {
    if (!overlayRef.current) return;
    gsap.set(overlayRef.current, { autoAlpha: 0 });
  }, []);

  useEffect(() => {
    if (!overlayRef.current) return;

    const navEls = navItemsRef.current.filter(Boolean);
    const socialEl = socialRef.current;

    if (isOpen) {
      overlayRef.current.style.pointerEvents = 'all';
      timelineRef.current = menuOverlayIn(
        overlayRef.current,
        navEls,
        socialEl
      );
    } else {
      overlayRef.current.style.pointerEvents = 'none';
      timelineRef.current = menuOverlayOut(overlayRef.current);
    }

  }, [isOpen]);

  // Safely capture elements for GSAP animation
  const setNavItemRef = (el: HTMLLIElement | null, index: number) => {
    if (el) {
      navItemsRef.current[index] = el;
    }
  };

  return (
    <Box
      ref={overlayRef}
      id="mobile-menu"
      className={styles.menu}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      {...rest}
    > 
      <nav 
        aria-label="Mobile navigation"
      >
        <Stack as="ul" className={styles.menu__list}>
          <NavLinks 
            itemClassName={styles.menu__item}
            linkClassName={styles.menu__link}
            itemRef={setNavItemRef}
          />
          {children}
        </Stack>
      </nav>
    </Box>
  );
};