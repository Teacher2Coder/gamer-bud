import { Button, Textarea } from '@chakra-ui/react';
import { useState } from 'react'
import { useMutation } from '@apollo/client';
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { EDIT_USER } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

const EditProfileModal = (user) => {
  
  const [formState, setFormState] = useState({
    bio: user.bio,
    xboxTag: user.xboxTag,
    psTag: user.psTag,
    nintendoTag: user.nintendoTag,
    twitchTag: user.twitchTag,
    steamTag: user.steamTag,
    appleTag: user.appleTag,
    galaxyTag: user.galaxyTag,
  });

  const [editUser, { editError }] = useMutation(EDIT_USER, {
    refetchQueries: [
      QUERY_ME,
      'me'
    ]
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(formState)
  }
  
  return (
    <DialogRoot size="cover" placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit your profile</DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Your bio</label>
              <Textarea 
                name='bio'
                value={formState.status}
                style={{color: 'white', border: '1px solid white'}}
                onChange={handleFormChange}
              />
            </div>
            <div className='tag-inputs'>
              <div className='input-trio'>
                <div className='tag-input-group'>
                  <label>Xbox Gamer Tag</label>
                  <input
                    name='xboxTag'
                    value={formState.xboxTag}
                    style={{color: 'white'}}
                    onChange={handleFormChange}
                  />
                </div>
                <div className='tag-input-group'>
                  <label>PSN Gamer Tag</label>
                  <input 
                    name='psTag'
                    value={formState.psTag}
                    style={{color: 'white'}}
                    onChange={handleFormChange}
                  />
                </div>
                <div className='tag-input-group'>
                  <label>Nintendo Gamer Tag</label>
                  <input 
                    name='nintendoTag'
                    value={formState.nintendoTag}
                    style={{color: 'white'}}
                    onChange={handleFormChange}
                  />
                </div>
              </div>
              <div className='input-pair'>
                <div className='tag-input-group'>
                  <label>Steam Gamer Tag</label>
                  <input 
                    name='steamTag'
                    value={formState.nintendoTag}
                    style={{color: 'white'}}
                    onChange={handleFormChange}
                  />
                </div>
                <div className='tag-input-group'>
                  <label>Twitch Tag</label>
                  <input 
                    name='twitchTag'
                    value={formState.twitchTag}
                    style={{color: 'white'}}
                    onChange={handleFormChange}
                  />
                </div>
              </div>
                <div className='input-pair'>
                  <div className='tag-input-group'>
                    <label>Apple Gamer Tag</label>
                    <input 
                      name='appleTag'
                      value={formState.nintendoTag}
                      style={{color: 'white'}}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className='tag-input-group'>
                    <label>Android Gamer Tag</label>
                    <input 
                      name='galaxyTag'
                      value={formState.nintendoTag}
                      style={{color: 'white'}}
                    onChange={handleFormChange}
                  />
                </div>
                </div>
            </div>
            <div>
              <Button type='submit'>
                Submit Changes
              </Button>
            </div>
          </form>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  )
}

export default EditProfileModal;