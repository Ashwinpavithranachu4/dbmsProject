import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [upcomingTrains, setUpcomingTrains] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [sourceStation, setSourceStation] = useState('');
  const [destinationStation, setDestinationStation] = useState('');

  // Fetch upcoming trains dynamically from the backend
  useEffect(() => {
    axios.get('/api/trains/upcoming').then((response) => {
      setUpcomingTrains(response.data);
    });

    axios.get('/api/routes').then((response) => {
      setRoutes(response.data);
    });
  }, []);

  // Handle searching for train availability
  const handleSearch = () => {
    axios
      .post('/api/trains/search', { sourceStation, destinationStation })
      .then((response) => {
        setUpcomingTrains(response.data);
      });
  };

  return (
    <div className="home-page">
      <h2>Upcoming Trains</h2>
      <ul>
        {upcomingTrains.map((train) => (
          <li key={train.id}>
            Train {train.name} from {train.source} to {train.destination} at {train.departureTime}
          </li>
        ))}
      </ul>

      <h3>Search for Train Availability</h3>
      <div className="quick-booking">
        <label>Source Station:</label>
        <input
          type="text"
          value={sourceStation}
          onChange={(e) => setSourceStation(e.target.value)}
          placeholder="Enter Source Station"
        />

        <label>Destination Station:</label>
        <input
          type="text"
          value={destinationStation}
          onChange={(e) => setDestinationStation(e.target.value)}
          placeholder="Enter Destination Station"
        />

        <button onClick={handleSearch}>Search Trains</button>
      </div>
    </div>
  );
};

export default HomePage;
