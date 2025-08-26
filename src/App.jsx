import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Country from "./components/Country";
import Contact from "./components/Contact";
import AppLayout from "./components/AppLayout";
import ErrorPage from "./components/ErrorPage";
import CountryDetails from "./components/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/country/:id",
        element: <CountryDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
};

export default App;
