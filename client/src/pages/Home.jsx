import RetroTitle from "../components/RetroTitle";
import { Link } from 'react-router-dom';
import "../styles/RetroButtons.css";
import EditProfileModal from "../components/EditProfileModal";


const Home = () => {
  return (
    <div>
      <header />

      <main>
        <RetroTitle>
          <div className="home-buttons">
          <Link to="/login">
            <button className="retro-button">Login</button>
            </Link>
            <Link to="/signup">
            <button className="retro-button">Sign Up</button>
            </Link>
          </div>
        <section>
          <h2>Join or Create a Team</h2>
          <Link to="/posts">
            <p>
              Find a team to join or create your own team to play with others.
            </p>
          </Link>
          {/* </section><button style={styles.button}>Join a Team</button> */}
        </section>
        </RetroTitle>
      </main>

      <EditProfileModal />

    </div>
  );
};

export default Home;
