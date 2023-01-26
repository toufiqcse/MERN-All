// @ts-nocheck

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import UserDetails from "./Components/Users/UserDetails";
import Users from "./Components/Users/Users";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Navbar></Navbar> },
        { path: "home", element: <Navbar></Navbar> },
        { path: "about", element: <About></About> },
        {
          path: "products",
          loader: async () => {
            return fetch(
              "https://openapi.programming-hero.com/api/phones?search=iphone"
            );
          },
          element: <Products></Products>,
        },
        {
          path: "users",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Users></Users>,
        },
        // for details link route
        {
          path: "/users/:usersId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.usersId}`
            );
          },
          element: <UserDetails></UserDetails>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
