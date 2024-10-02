import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <header className="about-header">
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

      <div className="about-section">
        <h2>Your Gateway to Memorable Train Journeys</h2>
        <button>Click Here</button>
      </div>

      <section className="our-story">
        <h3>Our Story</h3>
        <p>
          At Van Lang Tour, we believe that every journey holds the promise of adventure, discovery, and unforgettable memories. 
          Established with a passion for travel and a commitment to seamless experiences, we are your trusted partner in exploring the world through train travel.
        </p>
      </section>

      <section className="who-we-are">
        <h3>Who We Are</h3>
        <p>
          Van Lang Tour is a dedicated online platform designed to revolutionize the way you embark on train journeys. Whether you're a first-time traveler, a seasoned explorer, or planning a memorable trip with family and friends, we're here to make your travel dreams a reality.
        </p>
      </section>

      <section className="our-mission">
        <h3>Our Mission</h3>
        <p>
          Our mission is simple: to provide you with a hassle-free and enjoyable travel experience. We understand that the journey itself is an integral part of your adventure, and that's why we're committed to offering a wide selection of train routes, impeccable service, and competitive prices.
        </p>
      </section>

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

export default AboutUsPage;
