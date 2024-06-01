import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./Components/Test/Test.jsx";
import AllQuestions from "./Components/AllQuestions/AllQuestions.jsx";
import User from "./Components/User/User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/papers",
        element: <AllQuestions />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
