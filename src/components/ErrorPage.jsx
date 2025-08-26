import React from "react";
import { useRouteError, NavLink } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {error && <p className="text-gray-600 text-6xl mb-4">{error.status} !</p>}
      <h1 className="text-3xl font-bold mb-4 text-red-600">
        Oops! An Error Occurred
      </h1>

      {error && <p className="text-gray-600 mb-4">{error.data}</p>}
      <NavLink to="/">
        <button className="bg-blue-500 cursor-pointer text-white rounded-2xl hover:bg-blue-600 transition-colors px-6 py-2">
          Go Home
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
