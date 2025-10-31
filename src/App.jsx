import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AllProducts from "./components/Home/AllProducts";


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
