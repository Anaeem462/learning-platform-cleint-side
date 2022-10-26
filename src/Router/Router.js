import { createBrowserRouter } from "react-router-dom";
import Category from "../Components/Category/Category";
import CategoryDetails from "../Components/Category/CategoryDetails";
import Courses from "../Components/Courses/Courses";
import Login from "../Components/Login/Login";
import PremiumPage from "../Components/PremiumPage/PremiumPage.js";
import Signup from "../Components/SignUp/Signup";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./../Components/Error-page/ErrorPage";
import Home from "../Components/Home/Home";
import Blog from "../Components/Blogs/Blog";
import ProfilePage from "../Components/PremiumPage/PremiumPage.js";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://course-server.vercel.app/course"),
      },
      {
        path: "/category/:id",
        element: <CategoryDetails></CategoryDetails>,
        loader: ({ params }) =>
          fetch(`https://course-server.vercel.app/course/${params.id}`),
      },
      {
        path: "/profilePage",
        element: (
          <PrivateRoute>
            <ProfilePage></ProfilePage>
          </PrivateRoute>
        ),
      },
      {
        path: "/premiumPage/:id",
        loader: ({ params }) =>
          fetch(`https://course-server.vercel.app/course/${params.id}`),
        element: (
          <PrivateRoute>
            <PremiumPage></PremiumPage>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
