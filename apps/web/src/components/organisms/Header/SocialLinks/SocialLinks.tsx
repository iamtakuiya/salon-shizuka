import styles from './SocialLinks.module.scss';
import { Row } from '@/components/primitives/Row/Row';
import { Link } from '@/components/atoms/Link/Link';
import { Icon } from '@/components/atoms/Icon/Icon';

// Type for one item in the list
interface SocialLinkItem {
  label: string;
  href:  string;
  icon:  'Facebook' | 'Instagram' | 'LinkedIn' | 'YouTube'; // should be lowercase
}

// Props for the component
interface SocialLinksProps {
  items: readonly SocialLinkItem[]; // readonly — matches "as const" arrays
  className?: string;
}

export function SocialLinks({ items, className }: SocialLinksProps) {
  return (
    <Row gap="sm" className={className}>
      {items.map(({ label, href, icon }) => (
        <Link
          key={label}
          href={href}
          aria-label={label}
          className={styles.social__link}
        >
          <Icon
            icon={icon}
            width={20}
            height={20}
            className={styles.social__icon}
            aria-hidden="true"
          />
        </Link>
      ))}
    </Row>
  );
}