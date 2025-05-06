import {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 25px;
  width: 60px;
  height: 30px;
  background-color: #555;
  transition: all 0.3s ease-in-out;

  ${({theme}) =>
    theme === 'dark' &&
    css`
      background-color: #fff;
    `}
`;

const ToggleButton = styled.button`
  outline: none;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  margin: 2px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;

  ${({theme}) =>
    theme === 'dark' &&
    css`
      background-color: #555;
      transform: translateX(100%);
    `}
`;

export function ThemeToggle({className}) {
  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function themeHandler() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ToggleWrapper theme={theme} className={className}>
      <ToggleButton
        theme={theme}
        onClick={themeHandler}
        aria-label="Toggle theme"
      />
    </ToggleWrapper>
  );
}
