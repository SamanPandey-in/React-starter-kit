import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, User, LogOut } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import Button from '../common/Button';
export default function Navbar({ onMenuClick }) {
  const { mode, toggleMode } = useTheme();
  const { user, logout, isAuthenticated } = useAuth();
  return <nav className="sticky top-0 z-40 bg-surface border-b border-border-default"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-center justify-between h-16"><div className="flex items-center gap-4">{onMenuClick && <button onClick={onMenuClick} className="lg:hidden text-text-primary"><Menu className="w-6 h-6" /></button>}<Link to="/" className="text-2xl font-bold text-gradient">Starter</Link></div><div className="flex items-center gap-4"><button onClick={toggleMode} className="p-2 rounded-lg hover:bg-elevated text-text-primary">{mode === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}</button>{isAuthenticated ? <div className="flex items-center gap-3"><div className="flex items-center gap-2"><User className="w-5 h-5 text-text-secondary" /><span className="text-sm text-text-primary">{user?.name}</span></div><Button variant="ghost" size="sm" onClick={logout}><LogOut className="w-4 h-4" />Logout</Button></div> : <div className="flex items-center gap-2"><Link to="/login"><Button variant="ghost" size="sm">Login</Button></Link><Link to="/register"><Button variant="primary" size="sm">Sign Up</Button></Link></div>}</div></div></div></nav>;
}
