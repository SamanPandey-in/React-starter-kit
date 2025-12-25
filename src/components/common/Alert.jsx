import { CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
export default function Alert({ type = 'info', title, children, className = '' }) {
  const icons = { success: <CheckCircle className="w-5 h-5" />, error: <AlertCircle className="w-5 h-5" />, warning: <AlertTriangle className="w-5 h-5" />, info: <Info className="w-5 h-5" /> };
  const colors = { success: 'bg-green-50 border-green-200 text-green-800', error: 'bg-red-50 border-red-200 text-red-800', warning: 'bg-yellow-50 border-yellow-200 text-yellow-800', info: 'bg-blue-50 border-blue-200 text-blue-800' };
  return <div className={`flex gap-3 p-4 rounded-lg border ${colors[type]} ${className}`}><div className="flex-shrink-0 mt-0.5">{icons[type]}</div><div className="flex-1">{title && <h4 className="font-semibold mb-1">{title}</h4>}<div className="text-sm">{children}</div></div></div>;
}
