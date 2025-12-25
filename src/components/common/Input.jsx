import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
export default function Input({ label, type = 'text', error, icon: Icon, className = '', ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;
  return <div className={className}>{label && <label className="block text-sm font-medium text-text-primary mb-2">{label}</label>}<div className="relative">{Icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary"><Icon className="w-5 h-5" /></div>}<input type={inputType} className={`w-full rounded-lg border border-border-default bg-surface px-4 py-2 ${Icon ? 'pl-10' : ''} ${type === 'password' ? 'pr-10' : ''} text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-500 ${error ? 'border-red-500' : ''}`} {...props} />{type === 'password' && <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary">{showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}</button>}</div>{error && <p className="mt-1 text-sm text-red-500">{error}</p>}</div>;
}
