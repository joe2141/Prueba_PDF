import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <ul>
        
        <li><Link to="/FDA01">FDA01</Link></li>
        <li><Link to="/FDA02">FDA02</Link></li>
        <li><Link to="/FDA04">FDA04</Link></li>
        <li><Link to="/FDA06">FDA06</Link></li>

        <li><Link to="/FDP02">FDP02</Link></li>
        <li><Link to="/FDP05">FDP05</Link></li>
      </ul>
    </div>
  );
}

export default Home;
