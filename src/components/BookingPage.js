import React, { useState, useEffect } from 'react';
import axios from 'axios';  // You can use axios to fetch data from your backend API

const BookingPage = () => {
  const [stations, setStations] = useState([]);
  const [sourceStation, setSourceStation] = useState('');
  const [destinationStation, setDestinationStation] = useState('');
  const [serviceClass, setServiceClass] = useState('');
  const [fare, setFare] = useState(0);
  const [paymentDetails, setPaymentDetails] = useState('');

  // Fetch station data dynamically from the backend
  useEffect(() => {
    axios.get('/api/stations').then((response) => {
      setStations(response.data); // Populate the stations dynamically
    });
  }, []);

  // Fetch fares based on selected service class
  const calculateFare = (source, destination, serviceClass) => {
    axios
      .post('/api/fare', { source, destination, serviceClass })
      .then((response) => {
        setFare(response.data.fare);
      });
  };

  // Handle booking submission and payment integration
  const handleBooking = () => {
    const bookingData = {
      sourceStation,
      destinationStation,
      serviceClass,
      fare,
      paymentDetails
    };

    axios.post('/api/bookings', bookingData).then((response) => {
      // Handle payment integration (e.g., with Stripe or PayPal)
      console.log('Booking successful:', response.data);
    });
  };

  return (
    <div className="booking-page">
      <h2>Book Your Train Ticket</h2>
      <form>
        <label>Source Station:</label>
        <select value={sourceStation} onChange={(e) => setSourceStation(e.target.value)}>
          {stations.map((station) => (
            <option key={station.id} value={station.name}>
              {station.name}
            </option>
          ))}
        </select>

        <label>Destination Station:</label>
        <select value={destinationStation} onChange={(e) => setDestinationStation(e.target.value)}>
          {stations.map((station) => (
            <option key={station.id} value={station.name}>
              {station.name}
            </option>
          ))}
        </select>

        <label>Class of Service:</label>
        <select value={serviceClass} onChange={(e) => {
          setServiceClass(e.target.value);
          calculateFare(sourceStation, destinationStation, e.target.value);
        }}>
          <option value="first">First Class</option>
          <option value="second">Second Class</option>
          <option value="third">Third Class</option>
        </select>

        <label>Fare: {fare} VND</label>

        {/* Payment Details Section */}
        <label>Payment Details:</label>
        <input
          type="text"
          value={paymentDetails}
          onChange={(e) => setPaymentDetails(e.target.value)}
          placeholder="Payment Info (e.g. Card Details)"
        />

        <button type="button" onClick={handleBooking}>
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
