// Import the packages
import { Outlet, useLocation } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";

import Nav from './components/Navigation';
import './App.css';
import Header from "./components/Header";

// Import global context
// import { GbProvider } from "./utils/GlobalState";
// Uncomment the line above when the Globale Context is ready

// Create graphql playground
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Create a new instance of ApolloClient
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Define the app
// Add the global context to wrap around the Outlet when it is ready
function App() {
  // const [user, setUser] = useState({});???
  // useEffect(() into the an if token function then setUser??
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("id_token");
    setIsLogged(!!token);
  }, []);

  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        {/* <Nav /> */}
        {location.pathname !== "/" && isLogged && <Header />}
        <main className="content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

// Export the App
export default App;
