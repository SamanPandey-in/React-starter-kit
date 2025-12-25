import { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);
  const login = async (email, password) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    const mockUser = { id: '1', name: 'John Doe', email };
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
    setLoading(false);
    return { success: true };
  };
  const register = async (name, email, password) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    const mockUser = { id: '1', name, email };
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
    setLoading(false);
    return { success: true };
  };
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };
  return <AuthContext.Provider value={{ user, loading, isAuthenticated: !!user, login, register, logout }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
