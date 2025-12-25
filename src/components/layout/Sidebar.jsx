import { Link, useLocation } from 'react-router-dom';
import { Home, Settings, Users, BarChart, X } from 'lucide-react';
export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const menuItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/dashboard/analytics', icon: BarChart, label: 'Analytics' },
    { path: '/dashboard/users', icon: Users, label: 'Users' },
    { path: '/dashboard/settings', icon: Settings, label: 'Settings' },
  ];
  return <>{isOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onClose} />}<aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-surface border-r border-border-default transform transition-transform lg:transform-none ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}><div className="flex items-center justify-between h-16 px-6 border-b border-border-default lg:hidden"><h2 className="text-xl font-bold text-text-primary">Menu</h2><button onClick={onClose} className="text-text-tertiary hover:text-text-primary"><X className="w-6 h-6" /></button></div><nav className="p-4 space-y-2">{menuItems.map(item => <Link key={item.path} to={item.path} onClick={onClose} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path ? 'bg-primary-500 text-white' : 'text-text-primary hover:bg-elevated'}`}><item.icon className="w-5 h-5" /><span className="font-medium">{item.label}</span></Link>)}</nav></aside></>;
}
