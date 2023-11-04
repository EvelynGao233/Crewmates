import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCrewmateForm = ({ addOrUpdateCrewmate }) => {
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
    const [color, setColor] = useState('red');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !speed) return;
      addOrUpdateCrewmate({ name, speed, color });
      setName('');
      setSpeed('');
    };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="number" value={speed} onChange={(e) => setSpeed(e.target.value)} placeholder="Speed" required />
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
        <option value="black">Black</option>
      </select>
      <button type="submit">Create Crewmate</button>
      <button type="button" onClick={() => navigate('/gallery')} className="btn-to-gallery">
        Go to Gallery
      </button>

    </form>
  );
};

export default CreateCrewmateForm;
