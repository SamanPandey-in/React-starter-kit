import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Card from '@/components/common/Card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useAuth();
  const { success, error } = useToast();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) { success('Login successful!'); navigate('/dashboard'); }
    else error('Login failed.');
  };
  return <div className="min-h-screen flex items-center justify-center p-4 bg-page"><Card className="w-full max-w-md"><h2 className="text-3xl font-bold text-text-primary mb-2">Welcome Back</h2><p className="text-text-secondary mb-8">Login to your account</p><form onSubmit={handleSubmit} className="space-y-4"><Input label="Email" type="email" icon={Mail} placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required /><Input label="Password" type="password" icon={Lock} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required /><Button type="submit" fullWidth loading={loading}>Login</Button></form><p className="mt-6 text-center text-sm text-text-secondary">Don't have an account? <Link to="/register" className="text-primary-500 hover:underline">Sign up</Link></p></Card></div>;
}
