import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  About,
  Listings,
  SingleListing,
  ChefProfiles,
  SingleChefProfile,
  Reservation,
  Confirmation,
  Error,
  PrivateRoute,
  AuthWrapper,
  Root,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "listings",
        element: <Listings />,
        errorElement: <Error />,
      },
      {
        path: "listings/:id",
        element: <SingleListing />,
        errorElement: <Error />,
      },
      {
        path: "chef-profiles",
        element: <ChefProfiles />,
        errorElement: <Error />,
      },
      {
        path: "chef-profiles/:id",
        element: <SingleChefProfile />,
        errorElement: <Error />,
      },
      {
        path: "reservation",
        element: <Reservation />,
        errorElement: <Error />,
      },
      {
        path: "confirmation",
        element: <Confirmation />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
