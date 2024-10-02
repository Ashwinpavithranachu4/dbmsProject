import React, { useState, useEffect } from 'react';

const BookingCancellation = () => {
  const [bookings, setBookings] = useState([]);
  const [reason, setReason] = useState('');

  useEffect(() => {
    // Fetch active bookings
    fetch('/api/active-bookings')
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const cancelBooking = (bookingId) => {
    // API call to cancel booking
    fetch(`/api/bookings/${bookingId}/cancel`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reason }),
    }).then(() => {
      setBookings(bookings.filter(booking => booking.id !== bookingId));
      alert('Booking cancelled successfully');
    });
  };

  return (
    <div className="booking-cancellation">
      <h1>Booking Cancellation</h1>
      <div className="booking-list">
        {bookings.map(booking => (
          <div key={booking.id} className="booking-item">
            <span>Train ID: {booking.trainID}</span>
            <span>Journey Date: {booking.journeyDate}</span>
            <input
              type="text"
              placeholder="Cancellation Reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            <button onClick={() => cancelBooking(booking.id)}>Cancel Booking</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCancellation;
