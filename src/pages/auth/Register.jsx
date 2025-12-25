import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Card from '@/components/common/Card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, loading } = useAuth();
  const { success, error } = useToast();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register(name, email, password);
    if (result.success) { success('Account created!'); navigate('/dashboard'); }
    else error('Registration failed.');
  };
  return <div className="min-h-screen flex items-center justify-center p-4 bg-page"><Card className="w-full max-w-md"><h2 className="text-3xl font-bold text-text-primary mb-2">Create Account</h2><p className="text-text-secondary mb-8">Sign up to get started</p><form onSubmit={handleSubmit} className="space-y-4"><Input label="Name" type="text" icon={User} placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required /><Input label="Email" type="email" icon={Mail} placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required /><Input label="Password" type="password" icon={Lock} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required /><Button type="submit" fullWidth loading={loading}>Create Account</Button></form><p className="mt-6 text-center text-sm text-text-secondary">Already have an account? <Link to="/login" className="text-primary-500 hover:underline">Login</Link></p></Card></div>;
}
