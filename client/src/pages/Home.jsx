import RetroTitle from "../components/RetroTitle";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <header />

      <main>
        <RetroTitle>
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

    </div>
  );
};

export default Home;
