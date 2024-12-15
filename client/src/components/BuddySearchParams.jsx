import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const BuddySearchParams = () => {
  return (
    <div>
      <div>
        <h2 style={{ textAlign: 'center' }}>Pick a platform to filter your search:</h2>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        <Link to={`/posts/platforms/Xbox Series S%2FX`}>
          <Button color='white' backgroundColor='blue'>Xbox Series S/X</Button>
        </Link>
        <Link to="/posts/platforms/PlayStation 5">
          <Button color='white' backgroundColor='blue'>PlayStation 5</Button>
        </Link>
        <Link to="/posts/platforms/Xbox One">
          <Button color='white' backgroundColor='blue'>Xbox One</Button>
        </Link>
        <Link to="/posts/platforms/PlayStation 4">
          <Button color='white' backgroundColor='blue'>PlayStation 4</Button>
        </Link>
        <Link to="/posts/platforms/Xbox 360">
          <Button color='white' backgroundColor='blue'>Xbox 360</Button>
        </Link>
        <Link to="/posts/platforms/PlayStation 3">
          <Button color='white' backgroundColor='blue'>PlayStation 3</Button>
        </Link>
        <Link to="/posts/platforms/Wii U">
          <Button color='white' backgroundColor='blue'>Wii U</Button>
        </Link>
        <Link to="/posts/platforms/Nintendo Switch">
          <Button color='white' backgroundColor='blue'>Nintendo Switch</Button>
        </Link>
        <Link to="/posts/platforms/PC">
          <Button color='white' backgroundColor='blue'>PC</Button>
        </Link>
        <Link to="/posts/platforms/iOS">
          <Button color='white' backgroundColor='blue'>iOS</Button>
        </Link>
        <Link to="/posts/platforms/Android">
          <Button color='white' backgroundColor='blue'>Android</Button>
        </Link>
        <Link to="/posts/platforms/macOS">
          <Button color='white' backgroundColor='blue'>macOS</Button>
        </Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
        <Link to="/find-a-buddy">
          <Button color='white' backgroundColor='blue'>Find a buddy of your own!</Button>
        </Link>
      </div>
    </div>
  )
}

export default BuddySearchParams;