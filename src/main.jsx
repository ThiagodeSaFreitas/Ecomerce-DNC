import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./views copy/Login/login";
import Home from "./views copy/Home/home";
import Products from "./views copy/Products/Products";
import Pay from "./views copy/Pay/Pay";
import {PRODUCTS_MOCK} from "./mock/products.mock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={PRODUCTS_MOCK} />,
    
  },
  {
    path: "/home",
    element: <Login />,
  },
  {
    path: "/products/:productId",
    element: <Products />,
  },
  {
    path: "/pay/:payId",
    element: <Pay />,

  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
