import { useEffect } from 'react';
import { X } from 'lucide-react';
export default function Modal({ isOpen, onClose, title, children, footer, size = 'md' }) {
  useEffect(() => { document.body.style.overflow = isOpen ? 'hidden' : 'unset'; return () => { document.body.style.overflow = 'unset'; }; }, [isOpen]);
  if (!isOpen) return null;
  const sizes = { sm: 'max-w-md', md: 'max-w-lg', lg: 'max-w-2xl', xl: 'max-w-4xl' };
  return <div className="fixed inset-0 z-50 overflow-y-auto"><div className="flex min-h-screen items-center justify-center p-4"><div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} /><div className={`relative ${sizes[size]} w-full bg-surface rounded-lg shadow-elevated`}>{title && <div className="flex items-center justify-between p-6 border-b border-border-default"><h3 className="text-xl font-semibold text-text-primary">{title}</h3><button onClick={onClose} className="text-text-tertiary hover:text-text-primary"><X className="w-6 h-6" /></button></div>}<div className="p-6">{children}</div>{footer && <div className="flex justify-end gap-3 p-6 border-t border-border-default">{footer}</div>}</div></div></div>;
}
