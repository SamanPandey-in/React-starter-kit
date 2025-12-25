import { useState } from 'react';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import Card from '@/components/common/Card';
import Select from '@/components/common/Select';
import { useTheme } from '@/contexts/ThemeContext';
export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, changeTheme } = useTheme();
  const stats = [
    { icon: TrendingUp, label: 'Revenue', value: '$45,231', change: '+12.5%', color: 'text-green-500' },
    { icon: Users, label: 'Users', value: '2,345', change: '+8.2%', color: 'text-blue-500' },
    { icon: DollarSign, label: 'Sales', value: '$12,426', change: '+23.1%', color: 'text-purple-500' },
    { icon: Activity, label: 'Active', value: '573', change: '+4.3%', color: 'text-orange-500' },
  ];
  const themeOptions = [
    { value: 'minimal', label: 'Minimal' },
    { value: 'glass', label: 'Glassmorphism' },
    { value: 'brutal', label: 'Neo-brutalism' },
    { value: 'corporate', label: 'Corporate' },
  ];
  return <div className="min-h-screen bg-page"><Navbar onMenuClick={() => setSidebarOpen(true)} /><div className="flex"><Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} /><main className="flex-1 p-6 lg:p-8"><div className="max-w-7xl mx-auto"><div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"><div><h1 className="text-3xl font-bold text-text-primary">Dashboard</h1><p className="text-text-secondary mt-1">Welcome back!</p></div><Select options={themeOptions} value={theme} onChange={(e) => changeTheme(e.target.value)} className="w-full sm:w-48" /></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">{stats.map((stat, i) => <Card key={i}><div className="flex items-center justify-between"><div><p className="text-sm text-text-secondary mb-1">{stat.label}</p><p className="text-2xl font-bold text-text-primary">{stat.value}</p><p className={`text-sm mt-1 ${stat.color}`}>{stat.change}</p></div><stat.icon className={`w-10 h-10 ${stat.color}`} /></div></Card>)}</div><div className="grid grid-cols-1 lg:grid-cols-2 gap-6"><Card><h3 className="text-lg font-semibold text-text-primary mb-4">Recent Activity</h3><div className="space-y-3">{[1,2,3,4].map(i => <div key={i} className="flex items-center gap-3 pb-3 border-b border-border-default last:border-0"><div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center"><Activity className="w-5 h-5 text-primary-500" /></div><div className="flex-1"><p className="text-sm font-medium text-text-primary">New user registered</p><p className="text-xs text-text-tertiary">2 minutes ago</p></div></div>)}</div></Card><Card><h3 className="text-lg font-semibold text-text-primary mb-4">Quick Stats</h3><div className="space-y-4"><div><div className="flex justify-between text-sm mb-2"><span className="text-text-secondary">Conversion Rate</span><span className="font-medium text-text-primary">67%</span></div><div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"><div className="bg-primary-500 h-2 rounded-full" style={{width:'67%'}} /></div></div></div></Card></div></div></main></div></div>;
}
