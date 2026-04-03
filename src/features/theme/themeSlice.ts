import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark';

const getInitialTheme = (): ThemeMode => {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
