import RetroTitle from "../components/RetroTitle";
import { Link } from 'react-router-dom';
import "../styles/RetroButtons.css";

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
          <Link to="/posts">
            <button className="retro-button">Find a buddy!</button>
          </Link>
          {/* </section><button style={styles.button}>Join a Team</button> */}
        </section>
        </RetroTitle>
      </main>
    </div>
  );
};

export default Home;
