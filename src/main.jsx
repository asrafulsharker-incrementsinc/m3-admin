import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PrivateRoute from "./components/Root/PrivateRoute.jsx";
import "./index.css";
import Root from "./components/Root/Root";
import Login from "./components/auth/Login";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Register from "./components/auth/Register";
import VerifyAccount from "./components/VerifyAccount/VerifyAccount";
import CreateResturent from "./components/CreateResturent/CreateResturent";
import ResturentInformation from "./components/ResturentInformation/ResturentInformation";
import ForgetPassword from "./components/auth/ForgetPassword";
import ResetPassword from "./components/auth/ResetPassword";
import Dashboard from "./components/Pannel/Dashboard/Dashboard";
import Steper from "./components/Steper/Steper.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/verifyaccount',
        element: <VerifyAccount />,
      },
      {
        path: '/create-restaurant',
        element: <CreateResturent />,
      },
      {
        path: '/restaurantinformation',
        element: <ResturentInformation />,
      },
      {
        path: '/forget-password',
        element: <ForgetPassword />,
      },
      {
        path: '/reset-password/:token',
        element: <ResetPassword />,
      },{
        path: '/dashboard',
        element: <PrivateRoute element={<Dashboard />} />,
      },
      {
        path: '/steper',
        element: <Steper />,
      },
      {
        path: '/dashboar',
        element: <Dashboard />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);