import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "./components/ui/provider"

import App from "./App";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

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
        path: "/Profile",
        element: <Profile />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>
);
