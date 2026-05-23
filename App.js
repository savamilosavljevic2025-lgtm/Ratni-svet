import React, { useState } from 'react';
import './App.css';

function App() {
  const [gold, setGold] = useState(100);
  const [pop, setPop] = useState(50);

  return (
    <div className="game-container">
      <div className="res-bar">
        <span>Zlato: {gold} 🪙</span>
        <span>Narod: {pop} 👥</span>
      </div>
      <div className="map-area">
        <h1 className="medieval-text">TRON RATA</h1>
        <p>Tvoja tvrđava je spremna, kralju!</p>
      </div>
      <div className="actions">
        <button onClick={() => setGold(gold + 20)}>Sakupljaj porez</button>
        <button onClick={() => setPop(pop + 5)}>Regrutuj seljake</button>
      </div>
    </div>
  );
}

export default App;
                         
