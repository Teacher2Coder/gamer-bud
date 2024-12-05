// Import the packages

// Removed the Outlet since we're calling specific routes
// import { Outlet } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile"; // Noah is currently working on this component

import Nav from './components/Navigation'
import Footer from "./components/Footer";

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
  return (
    <ApolloProvider client={client}>
        <Nav />
        <Outlet />
        <Footer />
    </ApolloProvider>
  );
}

// Export the App
export default App;
