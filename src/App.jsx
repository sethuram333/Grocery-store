import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AllProducts from "./components/Home/AllProducts";
import Fruit from "./pages/categories/Fruit";
import Meat from "./pages/categories/Meat";
import Vegitables from "./pages/categories/Vegitables";
import Dairy from './pages/categories/Dairy'
import Cart from "./pages/Cart/Cart";

const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path:'allproducts',
          element:<AllProducts/>
        },
        {
          path:'allfruits',
          element:<Fruit/>
        },
        {
          path:'meatproducts',
          element:<Meat/>
        },
        {
          path:'allvegetables',
          element:<Vegitables/>
        },
        {
          path:'dairyproducts',
          element:<Dairy/>
        },
        {
          path:'shopcart',
          element:<Cart/>
        }
     
      ],
    },
    {
      path: "*",
      element:<NotFound/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
