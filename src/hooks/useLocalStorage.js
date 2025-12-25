import { useState } from 'react';
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try { return JSON.parse(window.localStorage.getItem(key)) || initialValue; }
    catch { return initialValue; }
  });
  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
