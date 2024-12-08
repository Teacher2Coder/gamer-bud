import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "./components/ui/provider"

import App from "./App";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import BuddySearch from "./pages/BuddySearch";
import BuddySearchPlatform from "./pages/BuddySearchPlatform";
import BuddySearchGame from "./pages/BuddySearchGames";
import BuddyPost from "./pages/BuddyPost";
import FindBuddies from "./pages/FindBuddies";


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
        path: "/profile",
        element: <Profile />,
      },
      {

        path: "/editprofile",
        element: <EditProfile />,
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
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>
);
