import React, { useState, useEffect } from 'react';
import './style.css';
import face from './assets/face.svg';
import camera from './assets/camera.svg';
import bin2 from './assets/bin2.svg';

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
            {/* Переключатель темы */}
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

            {/* Карточка "Profile" */}
            <div className="form-container">
                <h1>Profile</h1>
                <div className="profile-section">
                    {/* Фото профиля */}
                    <div className="profile-pic">
                        <img src={face} alt="Profile" />
                    </div>
                    {/* Действия: загрузка и удаление фото */}
                    <div className="profile-actions">
                        <div className="file-input">
                            <input type="file" accept="image/*" />
                            <img src={camera} alt="Upload" />
                        </div>
                        <button type="button" className="delete-btn">
                            <img src={bin2} alt="Delete" />
                        </button>
                    </div>
                </div>
                <p className="profile-note">Up to 1 MB (300x300 px)</p>

                {/* Поля формы */}
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <select id="country" name="country" required>
                                <option value="" disabled selected>Select</option>
                                <option value="United States">United States</option>
                                <option value="Ireland">Ireland</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Canada">Canada</option>
                                <option value="Australia">Australia</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="Spain">Spain</option>
                                <option value="Italy">Italy</option>
                                <option value="Japan">Japan</option>
                                <option value="Netherlands">Netherlands</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" name="city" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="zip-code">Zip Code</label>
                            <input type="text" id="zip-code" name="zip_code" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone-number">Phone Number</label>
                            <input type="tel" id="phone-number" name="phone_number" required />
                        </div>
                    </div>
                    <button type="submit" className="update-btn">Update</button>
                </form>
            </div>

            {/* Карточка "Create an Account" */}
            <div className="form-container">
                <h1>Create an Account</h1>
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="first_name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="last_name" required />
                        </div>
                    </div>

                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" required />
                    <p className="email-note">
                        We'll never share your email with anyone else.
                    </p>

                    <div className="gender">
                        <input type="radio" id="male" name="gender" value="male" required />
                        <label htmlFor="male">Male</label>

                        <input type="radio" id="female" name="gender" value="female" required />
                        <label htmlFor="female">Female</label>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <select id="country" name="country" required>
                                <option value="" disabled selected>Select</option>
                                <option value="United States">United States</option>
                                <option value="Ireland">Ireland</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Canada">Canada</option>
                                <option value="Australia">Australia</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="Spain">Spain</option>
                                <option value="Italy">Italy</option>
                                <option value="Japan">Japan</option>
                                <option value="Netherlands">Netherlands</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" name="city" required />
                        </div>
                    </div>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default App;
