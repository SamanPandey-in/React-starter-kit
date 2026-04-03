import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store';
import { toggleTheme, setTheme } from './themeSlice';

export function useTheme() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', mode);
  }, [mode]);

  return {
    theme: mode,
    toggleTheme: () => dispatch(toggleTheme()),
    setTheme: (mode: 'light' | 'dark') => dispatch(setTheme(mode)),
  };
}
