import React from 'react';
import { Link } from 'react-router-dom';

const CrewmateGallery = ({ crewmates, deleteCrewmate }) => {
  return (
    <div>
      {crewmates.map(crewmate => (
        <div key={crewmate.id}>
          <h3>{crewmate.name}</h3>
          <Link to={`/crewmate/${crewmate.id}`}>View Info</Link>
          <button onClick={() => deleteCrewmate(crewmate.id)}>Delete</button>
        </div>
      ))}
      <Link to="/">Go Back to Creator</Link>
    </div>
  );
};

export default CrewmateGallery;

