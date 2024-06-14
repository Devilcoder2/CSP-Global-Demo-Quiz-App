import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./Components/Test/Test.jsx";
import AllQuestions from "./Components/AllQuestions/AllQuestions.jsx";
import User from "./Components/User/User.jsx";
import LiveTest from "./Components/Test/LiveTest.jsx";
import Result from "./Components/User/Result.jsx";

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
        element: <User theme="dark" />,
      },
      {
        path: "/user/result/:index",
        element: <Result theme="dark" />,
      },
    ],
  },
  {
    path: "/liveTest",
    element: <LiveTest />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
