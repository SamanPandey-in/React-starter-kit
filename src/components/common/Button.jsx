import { useTheme } from '@/contexts/ThemeContext';
import { Loader2 } from 'lucide-react';
export default function Button({ children, variant = 'primary', size = 'md', loading, disabled, fullWidth, className = '', ...props }) {
  const { isBrutal } = useTheme();
  const variants = { primary: isBrutal ? 'bg-primary-500 text-white btn-brutal' : 'bg-primary-500 hover:bg-primary-600 text-white', secondary: 'bg-gray-200 hover:bg-gray-300', outline: 'border-2 border-gray-300 hover:bg-gray-50', ghost: 'hover:bg-gray-100', danger: 'bg-red-500 hover:bg-red-600 text-white' };
  const sizes = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3 text-lg' };
  return <button className={`rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-all ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} disabled:opacity-50 disabled:cursor-not-allowed ${className}`} disabled={disabled || loading} {...props}>{loading && <Loader2 className="w-4 h-4 animate-spin" />}{children}</button>;
}
