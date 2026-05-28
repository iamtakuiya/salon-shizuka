import FaceBookIcon from '@/assets/svg/social-icons-m/Facebook.svg?react';
import InstagramIcon from '@/assets/svg/social-icons-m/Instagram.svg?react';
import LinkedInIcon from '@/assets/svg/social-icons-m/LinkedIn.svg?react';
import XIcon from '@/assets/svg/social-icons-m/X.svg?react';
import YouTubeIcon from '@/assets/svg/social-icons-m/YouTube.svg?react';

const iconMap = {
  Facebook: FaceBookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
  YouTube: YouTubeIcon,
};

interface IconProps {
  className?: string;
  icon?: keyof typeof iconMap;
  width?: number | string;
  height?: number | string;
}

export const Icon = ({ className, icon, width, height }: IconProps) => {
  const IconComponent = icon ? iconMap[icon] : undefined;

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} width={width} height={height} />;
};