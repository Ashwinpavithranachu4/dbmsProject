import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Van Lang Tour</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Booking</li>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </nav>
      </header>

      <div className="hero-section">
        <h2>Relax with Van Lang Tour</h2>
        <button>Read More</button>
      </div>

      <div className="popular-tours">
        <h3>Popular Tour Packages</h3>
        <div className="tour-package">
          <h4>Hà Nội</h4>
          <p>From $60</p>
        </div>
        <div className="tour-package">
          <h4>Đà Nẵng</h4>
          <p>From $30</p>
        </div>
        <div className="tour-package">
          <h4>Vịnh Hạ Long</h4>
          <p>From $10</p>
        </div>
      </div>

      <footer>
        <p>We Are Very Happy That You Choose Us</p>
        <p>Contact us: 0703169545, contact@vanlang.tour</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
