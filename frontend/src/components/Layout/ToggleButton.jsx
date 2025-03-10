// ToggleButton.js
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md border-2 border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all"
        >
            {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
    );
};

export default ToggleButton;
