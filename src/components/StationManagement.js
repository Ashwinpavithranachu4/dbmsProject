import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StationManagement = () => {
  const [stations, setStations] = useState([]);
  const [stationName, setStationName] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    axios.get('/api/stations').then((response) => {
      setStations(response.data);
    });
  }, []);

  const addStation = () => {
    axios
      .post('/api/stations', { stationName, location })
      .then(() => {
        alert('Station added successfully');
        window.location.reload();
      });
  };

  return (
    <div className="station-management">
      <h2>Manage Stations</h2>
      <input
        type="text"
        value={stationName}
        onChange={(e) => setStationName(e.target.value)}
        placeholder="Station Name"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />
      <button onClick={addStation}>Add Station</button>

      <table>
        <thead>
          <tr>
            <th>Station Name</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stations.map((station) => (
            <tr key={station.id}>
              <td>{station.stationName}</td>
              <td>{station.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StationManagement;
