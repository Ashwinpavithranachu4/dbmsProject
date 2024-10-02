import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-options">
        <Link to="/train-management">
          <button>Manage Trains</button>
        </Link>
        <Link to="/station-management">
          <button>Manage Stations</button>
        </Link>
        <Link to="/route-management">
          <button>Manage Routes</button>
        </Link>
        <Link to="/booking-history">
          <button>Booking History</button>
        </Link>
        <Link to="/payment-history">
          <button>Payment History</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
