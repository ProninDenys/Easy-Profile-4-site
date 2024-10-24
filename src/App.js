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
            {/* Кнопка переключения темы */}
            <div className="theme-toggle-wrapper">
                <label className="theme-toggle">
                    <input 
                        type="checkbox" 
                        checked={isDarkMode} 
                        onChange={toggleTheme} 
                    />
                    <span className="slider"></span>
                </label>
            </div>

            {/* Секция для создания аккаунта */}
            <div className="form-container">
                <h1 className="form-title">Create an Account</h1>
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
                                <option value="country1">United States</option>
                                <option value="country2">Ireland</option>
                                <option value="country3">United Kingdom</option>
                                <option value="country4">Canada</option>
                                <option value="country5">Australia</option>
                                <option value="country6">Germany</option>
                                <option value="country7">France</option>
                                <option value="country8">Spain</option>
                                <option value="country9">Italy</option>
                                <option value="country10">Japan</option>
                                <option value="country11">Netherlands</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" name="city" required />
                        </div>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p className="terms narrow-text">
                    By clicking the 'Sign Up' button, you confirm that you accept our
                    <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a>
                </p>
                <p className="login narrow-text">
                    Have an account? <a href="/">Log In</a>
                </p>
            </div>

            {/* Секция профиля */}
            <div className="form-container">
                <h1 className="form-title">Profile</h1>
                <form>
                    <div className="profile-section">
                        <div className="profile-pic">
                            <img src={`${process.env.PUBLIC_URL}/img 2/Image.svg`} alt="Profile" />
                        </div>
                        <div className="profile-actions">
                            <div className="file-input">
                                <input type="file" accept="image/*" />
                                <img src={`${process.env.PUBLIC_URL}/img 2/Photo Camera.svg`} alt="Upload" />
                            </div>
                            <button type="button" className="delete-btn">
                                <img src={`${process.env.PUBLIC_URL}/img 2/Text + Right Icon.svg`} alt="Delete" />
                            </button>
                        </div>
                    </div>
                    <p className="profile-note">Up to 1 MB (300x300 px)</p>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email-profile">E-mail</label>
                            <input type="email" id="email-profile" name="email" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="country-profile">Country</label>
                            <select id="country-profile" name="country" required>
                                <option value="" disabled selected>Select</option>
                                <option value="country1">United States</option>
                                <option value="country2">Ireland</option>
                                <option value="country3">United Kingdom</option>
                                <option value="country4">Canada</option>
                                <option value="country5">Australia</option>
                                <option value="country6">Germany</option>
                                <option value="country7">France</option>
                                <option value="country8">Spain</option>
                                <option value="country9">Italy</option>
                                <option value="country10">Japan</option>
                                <option value="country11">Netherlands</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city-profile">City</label>
                            <input type="text" id="city-profile" name="city" required />
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
        </div>
    );
}

export default App;
