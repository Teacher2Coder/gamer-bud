import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "./components/ui/provider"

import App from "./App";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Profile from "./pages/Profile";
import BuddySearch from "./pages/BuddySearch";
import BuddySearchPlatform from "./pages/BuddySearchPlatform";
import BuddySearchGame from "./pages/BuddySearchGames";
import BuddyPost from "./pages/BuddyPost";
import FindBuddies from "./pages/FindBuddies";
import GameLibrary from "./pages/GameLibrary";
import GameLibraryPlatform from "./pages/GameLibraryPlatform";
import GameLibraryGame from "./pages/GameLibraryGame";
import SignUpPage from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/myprofile",
        element: <MyProfile />,
      },
      {
        path: '/profile/:userParam',
        element: <Profile />
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: '/posts',
        element: <BuddySearch />
      },
      {
        path: '/posts/platforms/:platformKind',
        element: <BuddySearchPlatform />
      },
      {
        path: '/posts/games/:gameName',
        element: <BuddySearchGame />
      },
      {
        path: '/post/:postId',
        element: <BuddyPost />
      },
      {
        path: '/find-a-buddy',
        element: <FindBuddies />
      },
      {
        path: '/gamelibrary',
        element: <GameLibrary />
      },
      {
        path: '/gamelibrary/platform/:platformKind',
        element: <GameLibraryPlatform />
      },
      {
        path: '/gamelibrary/games/:gameName',
        element: <GameLibraryGame />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>
);
