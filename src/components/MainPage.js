import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';  // Assuming we have CSS for styling

const MainPage = () => {
    return (
        <div className="main-page">
            <nav className="navbar">
                <h1>Van Lang Tour</h1>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/booking">Booking</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register" className="signup-btn">Sign Up</Link>
                </div>
            </nav>
            <section className="welcome-section">
                <h2>Welcome to Van Lang Tour</h2>
                <button className="view-page-btn">View Page</button>
            </section>
            <footer>
                <p>We are very happy that you choose us!</p>
                <div className="footer-links">
                    <a href="contact">Contact Us</a>
                    <a href="https://facebook.com">Facebook</a>
                    <a href="https://instagram.com">Instagram</a>
                </div>
            </footer>
        </div>
    );
}

export default MainPage;
