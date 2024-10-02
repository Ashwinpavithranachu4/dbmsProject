import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RouteManagement = () => {
  const [routes, setRoutes] = useState([]);
  const [trainId, setTrainId] = useState('');
  const [stationId, setStationId] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [dayOfTravel, setDayOfTravel] = useState('');

  useEffect(() => {
    axios.get('/api/routes').then((response) => {
      setRoutes(response.data);
    });
  }, []);

  const addRoute = () => {
    axios
      .post('/api/routes', { trainId, stationId, arrivalTime, departureTime, dayOfTravel })
      .then(() => {
        alert('Route added successfully');
        window.location.reload();
      });
  };

  return (
    <div className="route-management">
      <h2>Manage Routes</h2>

      <input
        type="text"
        value={trainId}
        onChange={(e) => setTrainId(e.target.value)}
        placeholder="Train ID"
      />
      <input
        type="text"
        value={stationId}
        onChange={(e) => setStationId(e.target.value)}
        placeholder="Station ID"
      />
      <input
        type="text"
        value={arrivalTime}
        onChange={(e) => setArrivalTime(e.target.value)}
        placeholder="Arrival Time"
      />
      <input
        type="text"
        value={departureTime}
        onChange={(e) => setDepartureTime(e.target.value)}
        placeholder="Departure Time"
      />
      <input
        type="text"
        value={dayOfTravel}
        onChange={(e) => setDayOfTravel(e.target.value)}
        placeholder="Day of Travel"
      />
      <button onClick={addRoute}>Add Route</button>

      <table>
        <thead>
          <tr>
            <th>Train ID</th>
            <th>Station ID</th>
            <th>Arrival Time</th>
            <th>Departure Time</th>
            <th>Day of Travel</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route) => (
            <tr key={route.id}>
              <td>{route.trainId}</td>
              <td>{route.stationId}</td>
              <td>{route.arrivalTime}</td>
              <td>{route.departureTime}</td>
              <td>{route.dayOfTravel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RouteManagement;
