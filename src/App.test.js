import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Assuming the App.js file is in the same directory

// Test the HomePage Route
test('renders HomePage component', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  // Since HomePage is the default route, we should check for content unique to it
  const homeElement = screen.getByText(/Welcome to the Railway Reservation System/i);
  expect(homeElement).toBeInTheDocument();
});

// Test the BookingPage Route
test('renders BookingPage component', () => {
  render(
    <Router initialEntries={['/booking']}>
      <App />
    </Router>
  );
  const bookingElement = screen.getByText(/Book Your Train Tickets/i);
  expect(bookingElement).toBeInTheDocument();
});

// Test the AboutUsPage Route
test('renders AboutUsPage component', () => {
  render(
    <Router initialEntries={['/about-us']}>
      <App />
    </Router>
  );
  const aboutUsElement = screen.getByText(/About Us/i);
  expect(aboutUsElement).toBeInTheDocument();
});

// Test the RegisterPage Route
test('renders RegisterPage component', () => {
  render(
    <Router initialEntries={['/register']}>
      <App />
    </Router>
  );
  const registerElement = screen.getByText(/Register/i);
  expect(registerElement).toBeInTheDocument();
});

// Test the LoginPage Route
test('renders LoginPage component', () => {
  render(
    <Router initialEntries={['/login']}>
      <App />
    </Router>
  );
  const loginElement = screen.getByText(/Login/i);
  expect(loginElement).toBeInTheDocument();
});

// Test the AdminDashboard Route
test('renders AdminDashboard component', () => {
  render(
    <Router initialEntries={['/admin-dashboard']}>
      <App />
    </Router>
  );
  const adminDashboardElement = screen.getByText(/Admin Dashboard/i);
  expect(adminDashboardElement).toBeInTheDocument();
});

// Test the TrainManagement Route
test('renders TrainManagement component', () => {
  render(
    <Router initialEntries={['/train-management']}>
      <App />
    </Router>
  );
  const trainManagementElement = screen.getByText(/Manage Trains/i);
  expect(trainManagementElement).toBeInTheDocument();
});

// Test the PassengerProfile Route
test('renders PassengerProfile component', () => {
  render(
    <Router initialEntries={['/passenger-profile']}>
      <App />
    </Router>
  );
  const profileElement = screen.getByText(/Passenger Profile/i);
  expect(profileElement).toBeInTheDocument();
});
