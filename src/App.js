import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components for Railway Reservation System
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import AboutUsPage from './components/AboutUsPage';

// Importing components for User Management System
import MainPage from './components/MainPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

// Importing components for Admin Dashboard System
import AdminDashboard from './components/AdminDashboard';
import TrainManagementPage from './components/TrainManagementPage';
import StationManagement from './components/StationManagement';
import RouteManagement from './components/RouteManagement';
import BookingHistory from './components/BookingHistory';
import PaymentHistory from './components/PaymentHistory';
import PassengerProfile from './components/PassengerProfile';
import BookingCancellation from './components/BookingCancellation';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Routes for Railway Reservation System */}
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />

          {/* Routes for User Management System */}
          <Route path="/main" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Routes for Admin Dashboard System */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/train-management" element={<TrainManagementPage />} />
          <Route path="/station-management" element={<StationManagement />} />
          <Route path="/route-management" element={<RouteManagement />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/payment-history" element={<PaymentHistory />} />
          <Route path="/passenger-profile" element={<PassengerProfile />} />
          <Route path="/booking-cancellation" element={<BookingCancellation />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
