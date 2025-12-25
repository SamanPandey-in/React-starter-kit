import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useToast } from '@/contexts/ToastContext';
const Toast = ({ toast }) => {
  const { removeToast } = useToast();
  const icons = { success: <CheckCircle className="w-5 h-5" />, error: <AlertCircle className="w-5 h-5" />, warning: <AlertTriangle className="w-5 h-5" />, info: <Info className="w-5 h-5" /> };
  const colors = { success: 'bg-green-500', error: 'bg-red-500', warning: 'bg-yellow-500', info: 'bg-blue-500' };
  return <div className={`flex items-center gap-3 p-4 rounded-lg shadow-elevated text-white ${colors[toast.type]}`}>{icons[toast.type]}<p className="flex-1 font-medium">{toast.message}</p><button onClick={() => removeToast(toast.id)} className="hover:opacity-70"><X className="w-5 h-5" /></button></div>;
};
export default function ToastContainer() {
  const { toasts } = useToast();
  return <div className="fixed top-4 right-4 z-50 space-y-2 max-w-md">{toasts.map(toast => <Toast key={toast.id} toast={toast} />)}</div>;
}
