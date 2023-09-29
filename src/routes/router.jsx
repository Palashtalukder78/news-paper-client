import {  Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import NewsLayout from "../layout/NewsLayout";
import Category from "../components/Category/Category";
import News from "../components/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Term from "../components/shared/Term/Term";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/term",
        element: <Term />,
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      /* {
        path: "/",
        element: <Category />,
        loader: () => fetch(`http://localhost:5000/news`),
      }, */
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
