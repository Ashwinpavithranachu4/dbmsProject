import React from 'react';
import './BookingPage.css';

const BookingPage = () => {
  return (
    <div className="booking-container">
      <header className="booking-header">
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

      <div className="search-section">
        <input type="text" placeholder="Keywords" />
        <select>
          <option value="any">Any</option>
        </select>
        <select>
          <option value="any">Any</option>
        </select>
        <input type="date" />
        <button>Search</button>
      </div>

      <div className="trip-options">
        <div className="trip">
          <h3>12:00 Sai Gon</h3>
          <h3>12:00 Ha Noi</h3>
          <p>First class - 24hrs00mins travel</p>
          <p>Price: 1,000,000 VND</p>
        </div>
        {/* Add more trips as needed */}
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

export default BookingPage;
