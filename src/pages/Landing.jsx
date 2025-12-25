import { Link } from 'react-router-dom';
import { Zap, Palette, Code, Shield } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
export default function Landing() {
  const features = [
    { icon: Zap, title: 'Fast Development', desc: 'Pre-built components to speed up development.' },
    { icon: Palette, title: '4 Modern Themes', desc: 'Minimal, Glass, Brutal, and Corporate themes.' },
    { icon: Code, title: 'Clean Code', desc: 'Well-structured, maintainable code.' },
    { icon: Shield, title: 'Auth Ready', desc: 'Authentication system out of the box.' },
  ];
  return <div className="min-h-screen bg-page"><Navbar /><section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"><div className="text-center mb-16"><h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">Build Faster with <span className="text-gradient">Hackathon Starter</span></h1><p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">A production-ready React starter kit with beautiful UI and everything you need.</p><div className="flex flex-wrap gap-4 justify-center"><Link to="/register"><Button size="lg">Get Started</Button></Link><Link to="/dashboard"><Button variant="outline" size="lg">View Demo</Button></Link></div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">{features.map((f, i) => <Card key={i} hover padding="lg" className="text-center"><f.icon className="w-12 h-12 mx-auto mb-4 text-primary-500" /><h3 className="text-lg font-semibold text-text-primary mb-2">{f.title}</h3><p className="text-sm text-text-secondary">{f.desc}</p></Card>)}</div></section><Footer /></div>;
}
