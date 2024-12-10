import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Card, Button } from '@chakra-ui/react';
import { ADD_POST } from '../utils/mutations';
import { QUERY_POSTS, QUERY_MY_GAMES } from '../utils/queries';

// Look here https://www.chakra-ui.com/docs/components/select

const BuddyForm = () => {
  const [formState, setFormState] = useState({
    author: '',
    game: '',
    platform: '',
    description: '',
    playersNeeded: ''
  });


  const { loading, data } = useQuery(QUERY_MY_GAMES);

  const games = data?.userGames.games || ['Call of Duty: Black Ops 6'];
  const platforms = [
    'Xbox Series X/S',
    'PlayStation 5',
    'PC',
    'Nintendo Switch',
    'Xbox One',
    'PlayStation 4',
    'Wii U',
    'Xbox 360',
    'PlayStation 3',
    'iOS',
    'Android',
    'macOS'
  ];


  const [addPost, { error }] = useMutation(ADD_POST, {
    refetchQueries: [
      QUERY_POSTS,
      'allPosts'
    ]
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault()

      try {
        const { data } = await addPost({
          variables: {...formState}
        });
        window.location.href = '/posts'
      } catch(err) {
        console.error(err);
      }
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }


  return (
    <div>
      <Card.Root width='85%' margin='0 auto'>
        <Card.Body>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Post Author</label>
              <input
                name='author'
                placeholder='Your name here'
                value = {formState.author}
                style = {{ color: 'white' }}
                onChange={handleFormChange}
              ></input>
            </div>
            <div className='form-group'>
              <div className='form-item'>
                <label>What game are you playing?</label>
                <select name='game' onChange={handleFormChange} style={{ border: '2px solid white', padding: '5px' }}>
                  <option value=''>-- Choose a game from your library --</option>
                  {games.map((game) => (
                      <option key={game} value={game}>{game}</option>
                  ))}
                </select>
              </div>
              <div className='form-item'>
                <label>What platform are you playing on?</label>
                <select name='platform' onChange={handleFormChange} style={{ border: '2px solid white', padding: '5px' }}>
                  <option value=''>-- Pick a platform --</option>
                  {platforms.map((platform) => (
                      <option key={platform} value={platform}>{platform}</option>
                  ))}
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <label>What will you be doing?</label>
              <textarea
                name='description'
                placeholder='Your description here'
                value = {formState.description}
                style = {{ color: 'white', border: '2px solid white', padding: '3px', minHeight: '100px' }}
                onChange={handleFormChange}
              />
            </div>
            <div style={{ margin: '0 auto', marginTop: '30px' }}>
              <label style={{ marginRight: '10px' }}>How many players do you need?</label>
              <input
                name='playersNeeded'
                placeholder='number of players here'
                value = {formState.playersNeeded}
                style = {{ color: 'white', border: '2px solid white', padding: '3px' }}
                onChange={handleFormChange}
              ></input>
            </div>
            <div>
              <Button type="submit">
                Add post
              </Button>
            </div>
            {error && (
              <div style={{color: 'red'}}>Something went wrong...</div>
            )}
          </form>
        </Card.Body>
      </Card.Root>
    </div>
  )
}

export default BuddyForm;