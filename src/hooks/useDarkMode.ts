import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return false;
    
    // Check localStorage first
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    
    // If no saved preference, use system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    
    // Apply dark class to html element for better compatibility
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  return { isDark, toggleDark };
}