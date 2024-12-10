import { Link } from 'react-router-dom';
import { Card, Button } from '@chakra-ui/react';

const PreviewGames = ({ games }) => {
  return (
    <div className="game-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <Card.Root>
              <Card.Header>
                <h2 style={{textAlign: 'center'}}>{game.name}</h2>
              </Card.Header>
              <img src={game.background_image} alt={game.name} className="game-cover" />
              <h3 style={{textAlign: 'center', marginTop: '20px'}}>Platforms</h3>
              {game.platforms.map((platformName) => (
                <div key={platformName.id} >
                  <p>{platformName.platform.name}</p>
                </div>
              ))}
              <Link to={`/posts/games/${game.name}`} style={{ alignSelf: 'center', marginTop: '20px' }}>
                <Button>Find a buddy for this game!</Button>
              </Link>
            </Card.Root>
          </div>
        ))}
      </div>
  )
}

export default PreviewGames;