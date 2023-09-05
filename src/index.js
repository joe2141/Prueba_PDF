import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes y Route
import FDA01 from './FDA01';
import FDA02 from './FDA02';
import FDA04 from './FDA04';
import FDA06 from './FDA06';
import FDP02 from './FDP02';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FDA01" element={<FDA01 />} />
        <Route path="/FDA02" element={<FDA02 />} />
        <Route path="/FDA04" element={<FDA04 />} />
        <Route path="/FDA06" element={<FDA06 />} />
        <Route path="/FDP02" element={<FDP02 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
