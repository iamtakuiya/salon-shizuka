import { useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/store';
import { toggleMobileMenu, closeMobileMenu } from '@/app/store/slices/uiSlice';
import styles from './Header.module.scss';

import { Container } from '@/components/primitives/Container/Container';
import { Row } from '@/components/primitives/Row/Row';
// import { Box } from '@/components/primitives/Box/Box';
import { Logo } from '@/components/atoms/Logo/Logo';
// import { Icon } from '@/components/atoms/Icon/Icon';
import { Link } from '@/components/atoms/Link/Link';
import LogoWrapper from './LogoWrapper/LogoWrapper';
import DesktopNav from './DesktopNav/DesktopNav';
import { SocialLinks } from './SocialLinks/SocialLinks';
import MobileMenu from './MobileMenu/MobileMenu';

// Config
const SOCIAL_LINKS = [
  { label: 'Facebook',  href: 'https://facebook.com',  icon: 'Facebook'  },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
  { label: 'LinkedIn',  href: 'https://linkedin.com',  icon: 'LinkedIn'  },
  { label: 'YouTube',   href: 'https://youtube.com',   icon: 'YouTube'   },
] as const;

export default function Header() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.mobileMenuOpen);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const [isMobile, setIsMobile] = useState();

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        dispatch(closeMobileMenu());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, dispatch]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <Row
            justify="between"
            align="center"
            className={styles.header__navbar}
          >
            <LogoWrapper className={styles.header__logo}>
              <Link href="#home" aria-label="Salon Shizuka - ホームへ" className={styles.logoWrapper__link}>
                <Logo width={85} height={32} />
              </Link>
            </LogoWrapper>
            <DesktopNav />
            {!isMobile && (
              <SocialLinks items={SOCIAL_LINKS} className={styles.header__social} />
            )}
            <button
              ref={hamburgerRef}
              className={`${styles.header__hamburger} ${isOpen ? styles['header__hamburger--open'] : ''}`}
              onClick={() => dispatch(toggleMobileMenu())}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              <span className={styles.header__hamburgerBar} />
              <span className={styles.header__hamburgerBar} />
              <span className={styles.header__hamburgerBar} />
            </button>
          </Row>
        </Container>
      </header>

      <MobileMenu 
        isOpen={isOpen}
        onClose={() => dispatch(closeMobileMenu())}
      />
    </>
  );
}