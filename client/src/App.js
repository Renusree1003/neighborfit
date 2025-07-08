import React, { useState } from 'react';
import axios from 'axios';
import './styles/App.css';

const App = () => {
  const [form, setForm] = useState({
    nature: false,
    nightlife: false,
    schools: false,
    publicTransport: false
  });

  const [match, setMatch] = useState(null);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async () => {
    const response = await axios.post('http://localhost:5000/match', form);
    setMatch(response.data);
  };

  return (
    <div className="container">
      <h1>Welcome to NeighborFit</h1>
      <h2>Find Your Perfect Neighborhood</h2>

      <div className="form-group">
        <label><input type="checkbox" name="nature" onChange={handleChange} /> Likes Nature</label>
        <label><input type="checkbox" name="nightlife" onChange={handleChange} /> Likes Nightlife</label>
        <label><input type="checkbox" name="schools" onChange={handleChange} /> Good Schools</label>
        <label><input type="checkbox" name="publicTransport" onChange={handleChange} /> Public Transport</label>
      </div>

      <button onClick={handleSubmit}>Find Match</button>

      {match && (
        <div className="result-box">
          <h3>Best Match: {match.name}</h3>
          <p>Score: {match.score}</p>
        </div>
      )}
    </div>
  );
};

export default App;
