import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PreviewGames from '../components/PreviewGames';
// import './GameLibrary.css';
// const { REACT_APP_RAWG_KEY } = process.env;

const GameLibraryPlatform = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const { platformKind } = useParams();
  const [formState, setFormState] = useState({
    search: ''
  });

  useEffect(() => {
    // Fetch games from the backend
    axios.get(`https://api.rawg.io/api/games?key=d34ea2467e8445f3b3a5876dd97c80c6&page=${page}&platform=${platformKind}`)
      .then((response) => setGames(response.data.results))
      .catch((error) => console.error('Error fetching games:', error));
  }, [page, platformKind]);

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
      <h1>Game Library</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Seach for a game</label>
          <input
            name='search'
            placeholder='Search...'
            value = {formState.search}
            style = {{ color: 'white' }}
            onChange={handleFormChange}
          ></input>
        </div>
        <button type='submit'>Search</button>
      </form>
      <div>
        <button onClick={previousPage}>Previous page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
      <PreviewGames games={games} />
      <div>
        <button onClick={previousPage}>Previous page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
    </div>
  )
    
};

export default GameLibraryPlatform;