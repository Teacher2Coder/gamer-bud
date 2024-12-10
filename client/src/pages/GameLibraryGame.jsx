import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PreviewGames from '../components/PreviewGames';
import { Button } from '@chakra-ui/react';
// import './GameLibrary.css';
// const { REACT_APP_RAWG_KEY } = process.env;

const GameLibraryGame = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const { gameName } = useParams();
  const [formState, setFormState] = useState({
    search: ''
  });

  useEffect(() => {
    // Fetch games from the backend
    axios.get(`https://api.rawg.io/api/games?key=d34ea2467e8445f3b3a5876dd97c80c6&page=${page}&search=${gameName}`)
      .then((response) => setGames(response.data.results))
      .catch((error) => console.error('Error fetching games:', error));
  }, [page, gameName]);

  const nextPage = () => {
    setPage(page + 1);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const previousPage = () => {
    setPage(page - 1);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    // If searchbar isn't blank, redirect to the appropriate url
    if (formState.search !== '') {
      window.location.href = `/gamelibrary/games/${formState.search}`
    }
      
    // make form blank again
    setFormState({ search: '' });
  }
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }

  return (
    <div className="game-library">
      <h1 style={{ textAlign: 'center' }}>Game Library</h1>
      <form className='game-search' onSubmit={handleFormSubmit} >
        <div className='game-search'>
          <input
            name='search'
            placeholder='Search for games...'
            value = {formState.search}
            style = {{ color: 'white', padding: '5px', backgroundColor: 'black', marginRight: '10px' }}
            onChange={handleFormChange}
          ></input>
        </div>
        <Button backgroundColor='blue' color='white' type='submit'>Search</Button>
      </form>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '20px' }}>
        <Button backgroundColor='blue' color='white' onClick={previousPage}>Previous page</Button>
        <Button backgroundColor='blue' color='white' onClick={nextPage}>Next Page</Button>
      </div>
      <PreviewGames games={games} />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button backgroundColor='blue' color='white' onClick={previousPage}>Previous page</Button>
        <Button backgroundColor='blue' color='white' onClick={nextPage}>Next Page</Button>
      </div>
    </div>
  )
    
};

export default GameLibraryGame;