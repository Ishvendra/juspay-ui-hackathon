import { type LucideIcon } from 'lucide-react';

interface IconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
}

export const Icon = ({
  icon: IconComponent,
  size = 16,
  className = '',
}: IconProps) => {
  return <IconComponent size={size} className={className} />;
};
