
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [form, setForm] = useState({
    nature: false,
    nightlife: false,
    schools: false,
    publicTransport: false
  });

  const [match, setMatch] = useState(null);

  const handleChange = e => {
    const { name, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async () => {
    const response = await axios.post('http://localhost:5000/match', form);
    setMatch(response.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Find Your Perfect Neighborhood</h2>
      <label><input type="checkbox" name="nature" onChange={handleChange} /> Likes Nature</label><br />
      <label><input type="checkbox" name="nightlife" onChange={handleChange} /> Likes Nightlife</label><br />
      <label><input type="checkbox" name="schools" onChange={handleChange} /> Good Schools</label><br />
      <label><input type="checkbox" name="publicTransport" onChange={handleChange} /> Public Transport</label><br />
      <button onClick={handleSubmit}>Find Match</button>

      {match && (
        <div style={{ marginTop: 20 }}>
          <h3>Best Match: {match.name}</h3>
          <p>Score: {match.score}</p>
        </div>
      )}
    </div>
  );
};

export default App;
