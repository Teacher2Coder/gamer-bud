import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import RetroTitle from "../components/RetroTitle";
import "../styles/RetroButtons.css";


const Home = () => {
  return (
    <div>
      <header />

      <main>
        <RetroTitle>
          <div className="home-buttons">
            <button className="retro-button">Login</button>
            <button className="retro-button">Sign Up</button>
          </div>
        <section>
          <h2>Join or Create a Team</h2>
          <p>
            Find a team to join or create your own team to play with others.
          </p>
          {/* </section><button style={styles.button}>Join a Team</button> */}
        </section>
        </RetroTitle>
      </main>

    </div>
  );
};

export default Home;
