import React from 'react';
import { useTheme } from './ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  return <button onClick={handleToggle} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
    {theme === 'dark' ? (
        // Иконка луны
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            style={{ width: '24px', height: '24px', color: '#f39c12' }}
        >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4V2m0 20v-2m8-8h2M4 12H2m15.364-6.364l1.414-1.414M6.343 6.343 4.93 4.93m12.02 12.02 1.414 1.414M6.343 17.657l-1.414 1.414M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
    ) : (
        // Иконка солнца
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            style={{ width: '24px', height: '24px', color: '#3498db' }}
        >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
          />
        </svg>
    )}
  </button>
};

export default ThemeToggle;
