import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashBoards from "../Layout/DashBoards";
import MyCarts from "../DashBoard/MyCarts/MyCarts";
import PrivateRoute from "../Private/PrivateRoute";
import Users from "../DashBoard/Users/Users";
import Payment from "../DashBoard/Payment/Payment";
import PaymentHistory from "../DashBoard/Payment/PaymentHistory/PaymentHistory";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
      },
      {
        path:'/order/:category',
        element:<Order></Order>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><DashBoards></DashBoards></PrivateRoute>,
      children:[
        {
          path:'myCart',
          element:<PrivateRoute><MyCarts></MyCarts></PrivateRoute>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymenthistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'user',
          element:<Users></Users>
        }
      ]
    }
  ]);
  