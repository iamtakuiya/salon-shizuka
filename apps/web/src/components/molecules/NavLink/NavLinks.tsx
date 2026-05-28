import { Link } from '@/components/atoms/Link/Link';
import { NAV_LINKS } from '@/config/navigation';

interface NavLinksProps {
  itemClassName?: string;
  linkClassName?: string;
  // Optional ref callback for GSAP animations if you need to track individual `li` elements
  itemRef?: (el: HTMLLIElement | null, index: number) => void;
}

export function NavLinks({ 
  itemClassName, 
  linkClassName, 
  itemRef 
}: NavLinksProps) {
  return (
    <>
      {NAV_LINKS.map(({ label, href }, index) => (
        <li 
          key={label} 
          className={itemClassName}
          ref={(el) => itemRef?.(el, index)}
        >
          <Link href={href} className={linkClassName}>
            {label}
          </Link>
        </li>
      ))}
    </>
  );
}