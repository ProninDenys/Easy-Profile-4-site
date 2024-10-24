import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        document.body.className = isDarkMode ? 'dark' : 'light';
    }, [isDarkMode]);

    return (
        <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="theme-toggle-wrapper">
                <span className="theme-label">
                    {isDarkMode ? '🌙 Dark Mode' : '🌞 Light Mode'}
                </span>
                <label className="theme-toggle">
                    <input 
                        type="checkbox" 
                        checked={isDarkMode} 
                        onChange={toggleTheme} 
                    />
                    <span className="slider"></span>
                </label>
            </div>

           

         
        </div>
    );
}

export default App;
