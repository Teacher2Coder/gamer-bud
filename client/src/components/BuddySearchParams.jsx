import { Link } from 'react-router-dom'

const BuddySearchParams = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
      <Link to="/posts/platforms/Xbox">
        <h3>Xbox</h3>
      </Link>
      <Link to="/posts/platforms/Playstation">
        <h3>Playstation</h3>
      </Link>
      <Link to="/posts/platforms/Nintendo Switch">
        <h3>Nintendo Switch</h3>
      </Link>
      <Link to="/posts/platforms/PC">
        <h3>PC</h3>
      </Link>
      <Link to="/posts/platforms/Apple">
        <h3>Apple</h3>
      </Link>
      <Link to="/posts/platforms/Android">
        <h3>Android</h3>
      </Link>
    </div>
  )
}

export default BuddySearchParams;