import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GameLibrary.css';

const GameLibrary = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fetch games from the backend
    axios.get('http://localhost:5000/games')
      .then((response) => setGames(response.data))
      .catch((error) => console.error('Error fetching games:', error));
  }, []);

  return (
    <div className="game-library">
      <h1>Game Library</h1>
      <div className="game-grid">
        {games.map((game) => (
          <div key={game._id} className="game-card">
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

