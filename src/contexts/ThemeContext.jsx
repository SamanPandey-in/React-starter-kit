import { createContext, useContext, useState, useEffect } from 'react';
const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'minimal');
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');
  useEffect(() => {
    document.documentElement.className = `theme-${theme} ${mode}`;
    if (theme === 'glass') document.body.style.background = mode === 'light' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
    else document.body.style.background = '';
    localStorage.setItem('theme', theme);
    localStorage.setItem('mode', mode);
  }, [theme, mode]);
  return <ThemeContext.Provider value={{ theme, mode, themes: { minimal: 'minimal', glass: 'glass', brutal: 'brutal', corporate: 'corporate' }, toggleMode: () => setMode(m => m === 'light' ? 'dark' : 'light'), changeTheme: setTheme, isDark: mode === 'dark', isGlass: theme === 'glass', isBrutal: theme === 'brutal' }}>{children}</ThemeContext.Provider>;
};
export const useTheme = () => useContext(ThemeContext);
