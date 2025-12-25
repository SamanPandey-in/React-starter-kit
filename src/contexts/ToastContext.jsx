import { createContext, useContext, useState } from 'react';
const ToastContext = createContext();
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const addToast = (message, type = 'info', duration = 3000) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    if (duration > 0) setTimeout(() => removeToast(id), duration);
  };
  const removeToast = (id) => setToasts(prev => prev.filter(t => t.id !== id));
  return <ToastContext.Provider value={{ toasts, addToast, removeToast, success: (m, d) => addToast(m, 'success', d), error: (m, d) => addToast(m, 'error', d), warning: (m, d) => addToast(m, 'warning', d), info: (m, d) => addToast(m, 'info', d) }}>{children}</ToastContext.Provider>;
};
export const useToast = () => useContext(ToastContext);
