import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Comoponent/Root/root";
import Donations from "./Comoponent/Donation/Donations";
import Statistics from "./Comoponent/Statistics/Statistics";
import Homes from "./Comoponent/Home/Homes";
import Cartdetails from "./Comoponent/Carts/Cartdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Homes></Homes>,
      },
      {
        path: "/Donation",
        element: <Donations></Donations>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Cartdetails/:cartID",
        loader: () => fetch("../Data_of_color.json"),
        element: <Cartdetails></Cartdetails>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
