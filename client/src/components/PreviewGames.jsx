import { Link } from 'react-router-dom';
import { Card, Button } from '@chakra-ui/react';

const PreviewGames = ({ games }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <Card.Root backgroundColor='black'>
              <Card.Header>
                <h2 style={{textAlign: 'center', color: 'white'}}>{game.name}</h2>
              </Card.Header>
              <Card.Body>
                <img src={game.background_image} alt={game.name} className="game-cover" />
                <h3 style={{textAlign: 'center', marginTop: '20px'}}>Platforms</h3>
                {game.platforms.map((platformName) => (
                  <div key={platformName.id} >
                    <p>{platformName.platform.name}</p>
                  </div>
                ))}
                <Link to={`/posts/games/${game.name}`} style={{ alignSelf: 'center', marginTop: '20px', marginBottom: '10px' }}>
                  <Button>Find a buddy!</Button>
                </Link>
              </Card.Body>
            </Card.Root>
          </div>
        ))}
      </div>
  )
}

export default PreviewGames;