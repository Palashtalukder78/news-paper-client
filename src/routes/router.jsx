import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import NewsLayout from "../layout/NewsLayout";
import Category from "../components/Category/Category";
import News from "../components/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <News />,
      },
    ],
  },
]);

export default router;
