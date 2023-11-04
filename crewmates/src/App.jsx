import React, { useState } from 'react';
import './App.css';
import CreateCrewmateForm from '../src/component/CreateCrewmateForm.jsx';
import CrewmateGallery from '../src/component/CrewmateGallery';
import CrewmateInfo from '../src/component/Crewmate.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [crewmates, setCrewmates] = useState([]);

  const addOrUpdateCrewmate = (crewmate) => {
    const existing = crewmates.findIndex(c => c.id === crewmate.id);
    if (existing > -1) {
      const updatedCrewmates = [...crewmates];
      updatedCrewmates[existing] = crewmate;
      setCrewmates(updatedCrewmates);
    } else {
      setCrewmates([...crewmates, { ...crewmate, id: Date.now() }]);
    }
  };

  const deleteCrewmate = (id) => {
    setCrewmates(crewmates.filter(crewmate => crewmate.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <h1>Welcome! This is the Crewmate Creator Center!</h1>
        <h2>Come and Design Your Crewmate :D</h2>
        <img src={"../src/assets/picture.jpeg"} style={{ maxWidth: '60%', height: 'auto' }} alt="Crewmate Picture" />

        <Routes>
          <Route path="/" element={<CreateCrewmateForm addOrUpdateCrewmate={addOrUpdateCrewmate} />} />
          <Route path="/gallery" element={<CrewmateGallery crewmates={crewmates} deleteCrewmate={deleteCrewmate} />} />
          <Route path="/crewmate/:id" element={<CrewmateInfo crewmates={crewmates} updateCrewmate={addOrUpdateCrewmate} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

