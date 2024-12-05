import React from "react";

const Home = () => {
  return (
    <div>
      <header>
      <h1>Welcome to Gamer Bud!</h1>
      <p>Find your next gaming buddy!</p>
      </header>

    <div style={styles.container}>
      <main>
        <section>
          <h2>Join or Create a Team</h2>
          <p>
            Find a team to join or create your own team to play with others.
          </p>
          {/* </section><button style={styles.button}>Join a Team</button> */}
        </section>
      </main>
    </div>
    </div>
  );
};

export default Home;
