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
import Qr from "./components/Pannel/QR/Qr.jsx";
import Settings from "./components/Pannel/Setting/Settings.jsx";
import Offers from "./components/Pannel/Offers/Offers.jsx";

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
        path: '/dashboard',exact: true,
        element:<PrivateRoute>
          <Dashboard/>
        </PrivateRoute>
      },
      {
        path: '/qr',exact: true,
        element:<PrivateRoute>
          <Qr/>
        </PrivateRoute>
      },
      {
        path: '/steper',
        element: <Steper />,
      },
      {
        path: '/dashboar',
        element: <Dashboard />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },

      {
        path: '/offers',exact: true,
        element:<PrivateRoute>
          <Offers />
        </PrivateRoute>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);