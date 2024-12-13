import { Link } from 'react-router-dom';
import { Card, Button } from '@chakra-ui/react';
import { useQuery, useMutation } from '@apollo/client'
// import the query and the mutation when ready
import { QUERY_MY_GAMES } from '../utils/queries';
import { ADD_GAME, REMOVE_GAME } from '../utils/mutations';


const PreviewGames = ({ games }) => {

  const { loading, data } = useQuery(QUERY_MY_GAMES)

  const gameArray = data?.userGames.games || [];
  console.log(gameArray);

  const [addGame, { error }] = useMutation(ADD_GAME, {
    refetchQueries: [
      QUERY_MY_GAMES,
      'userGames'
    ]
  });
  const [removeGame, { removeError }] = useMutation(REMOVE_GAME, {
    refetchQueries: [
      QUERY_MY_GAMES,
      'userGames'
    ]
  });

  const handleAddGame = async (e) => {
    e.preventDefault();

    // need a way to send this to the server to store in User Model
    console.log(e.target.value);

    try {
      const { data } = await addGame({
        variables: { game: e.target.value }
      })
    } catch (err) {
      console.error(err);
    }
  }

  const handleRemoveGame = async (e) => {
    e.preventDefault();

    console.log(e.target.value);

    try {
      const { data } = await removeGame({
        variables: { game: e.target.value }
      })
    } catch (err) {
      console.error(err);
    }
  }

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
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  {
                    gameArray.includes(game.name) ? (
                      <Button onClick={handleRemoveGame} style={{ backgroundColor: 'red', alignSelf: 'center' }} value={game.name}>In your Library</Button>
                    ) : (
                      <Button onClick={handleAddGame} style={{ backgroundColor: 'orange', alignSelf: 'center' }} value={game.name} >
                        Add to Library
                      </Button>
                    )
                  }
                  <Link to={`/posts/games/${game.name}`} style={{ alignSelf: 'center', marginTop: '20px', marginBottom: '10px' }}>
                    <Button>Find a buddy!</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card.Root>
          </div>
        ))}
      </div>
  )
}

export default PreviewGames;