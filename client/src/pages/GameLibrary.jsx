import React from 'react';
import gameData from './seeds'; // Adjust the path if needed
import './GameLibrary.css'; // Optional for styling

const GameLibrary = () => {
  return (
    <div className="game-library">
      <h1>Game Library</h1>
      <div className="game-grid">
        {gameData.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.coverImage} alt={game.title} className="game-cover" />
            <h2>{game.title}</h2>
            <p><strong>Platform:</strong> {game.platform}</p>
            <p>{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameLibrary;
