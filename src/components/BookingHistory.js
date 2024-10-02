import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/api/bookings/history').then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div className="booking-history">
      <h2>Your Booking History</h2>
      <table>
        <thead>
          <tr>
            <th>Train ID</th>
            <th>Booking Date</th>
            <th>Journey Date</th>
            <th>Status</th>
            <th>Cancellation Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.trainId}</td>
              <td>{booking.bookingDate}</td>
              <td>{booking.journeyDate}</td>
              <td>{booking.status}</td>
              <td>{booking.cancellationStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
