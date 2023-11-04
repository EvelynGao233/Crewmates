import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CrewmateInfo = ({ crewmates, updateCrewmate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const crewmate = crewmates.find(c => c.id === parseInt(id));
  const [name, setName] = useState(crewmate ? crewmate.name : '');
  const [speed, setSpeed] = useState(crewmate ? crewmate.speed : '');
  const [color, setColor] = useState(crewmate ? crewmate.color : 'red');

  useEffect(() => {
    if (!crewmate) {
      navigate('/gallery');
    }
  }, [crewmate, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCrewmate({ id: parseInt(id), name, speed, color });
    navigate('/gallery');
  };

  if (!crewmate) return null;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="number" value={speed} onChange={(e) => setSpeed(e.target.value)} placeholder="Speed" required />
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
        <option value="black">Black</option>
      </select>
      <button type="submit">Update Crewmate</button>
      <button onClick={() => navigate('/gallery')}>Cancel</button>
    </form>
  );
};

export default CrewmateInfo;
