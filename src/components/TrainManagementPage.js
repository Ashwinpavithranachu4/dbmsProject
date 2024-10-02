import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainManagementPage = () => {
  const [trains, setTrains] = useState([]);
  const [trainName, setTrainName] = useState('');
  const [totalSeats, setTotalSeats] = useState('');

  // Fetch train data
  useEffect(() => {
    axios.get('/api/trains').then((response) => {
      setTrains(response.data);
    });
  }, []);

  const addTrain = () => {
    axios
      .post('/api/trains', { trainName, totalSeats })
      .then(() => {
        alert('Train added successfully');
        window.location.reload(); // Refresh page after adding a train
      });
  };

  const deleteTrain = (trainId) => {
    axios.delete(`/api/trains/${trainId}`).then(() => {
      alert('Train deleted successfully');
      window.location.reload(); // Refresh page after deleting a train
    });
  };

  return (
    <div className="train-management">
      <h2>Manage Trains</h2>

      <input
        type="text"
        value={trainName}
        onChange={(e) => setTrainName(e.target.value)}
        placeholder="Train Name"
      />
      <input
        type="number"
        value={totalSeats}
        onChange={(e) => setTotalSeats(e.target.value)}
        placeholder="Total Seats"
      />
      <button onClick={addTrain}>Add Train</button>

      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Total Seats</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.id}>
              <td>{train.trainName}</td>
              <td>{train.totalSeats}</td>
              <td>
                <button onClick={() => deleteTrain(train.id)}>Delete</button>
                {/* You can add an "Edit" button here for updating train info */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainManagementPage;
