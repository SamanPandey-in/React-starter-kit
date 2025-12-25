import { useTheme } from '@/contexts/ThemeContext';
export default function Card({ children, hover, padding = 'md', className = '', ...props }) {
  const { isGlass, isBrutal } = useTheme();
  const paddings = { none: '', sm: 'p-3', md: 'p-6', lg: 'p-8' };
  return <div className={`rounded-lg bg-surface ${isGlass ? 'glass-effect border border-border-default' : ''} ${isBrutal ? 'border-3 border-border-default shadow-card' : 'shadow-card'} ${hover ? 'hover:-translate-y-1 hover:shadow-elevated transition-all cursor-pointer' : ''} ${paddings[padding]} ${className}`} {...props}>{children}</div>;
}
