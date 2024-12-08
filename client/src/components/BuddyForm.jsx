import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Card } from '@chakra-ui/react';

import { ADD_POST } from '../utils/mutations';
import { QUERY_POSTS } from '../utils/queries';

const BuddyForm = () => {
  const [formState, setFormState] = useState({
    author: '',
    game: '',
    platform: '',
    description: '',
    playersNeeded: ''
  });

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
      setFormState({
        author: '',
        game: '',
        platform: '',
        description: '',
        playersNeeded: ''
      });
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
      <Card.Root>
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
            <div>
              <label>What game are you playing?</label>
              <input
                name='game'
                placeholder='Game here'
                value = {formState.game}
                style = {{ color: 'white' }}
                onChange={handleFormChange}
              ></input>
            </div>
            <div>
              <label>What platform are you playing on?</label>
              <input
                name='platform'
                placeholder='platform here'
                value = {formState.platform}
                style = {{ color: 'white' }}
                onChange={handleFormChange}
              ></input>
            </div>
            <div>
              <label>What will you be doing?</label>
              <textarea
                name='description'
                placeholder='Your description here'
                value = {formState.description}
                style = {{ color: 'white' }}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label>How many players do you need?</label>
              <input
                name='playersNeeded'
                placeholder='number of players here'
                value = {formState.playersNeeded}
                style = {{ color: 'white' }}
                onChange={handleFormChange}
              ></input>
            </div>
            <div>
              <button type="submit">
                Add post
              </button>
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