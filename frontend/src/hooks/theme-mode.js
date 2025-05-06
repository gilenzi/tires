import {useEffect} from 'react';
import {useState} from 'react';

export function useThemeMode() {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setMode(current === 'dark' ? 'dark' : 'light');

    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute('data-theme');
      setMode(newTheme === 'dark' ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return {theme: {mode}};
}
