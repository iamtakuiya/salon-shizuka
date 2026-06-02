import styles from './DesktopNav.module.scss';
import { Row } from '@/components/01.primitives/Row/Row';
import { NavLinks } from '@/components/molecules/NavLink/NavLinks';

export default function DesktopNav() {
  return (
    <nav
      className={styles.nav}
      aria-label="Main navigation"
    >
      <Row as="ul" className={styles.nav__list}>
        <NavLinks 
          itemClassName={styles.nav__item}
          linkClassName={styles.nav__link}
        />
      </Row>
    </nav>
  );
}