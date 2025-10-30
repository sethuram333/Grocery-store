import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


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
