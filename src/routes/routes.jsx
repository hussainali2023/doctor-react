import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path:"/",
      element:<Main/>,
      children: [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/register",
            element: <Register/>
        },
        {
            path:"/login",
            element: <Login/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/services",
            element:<Services/>
        },
        {
            path:"/blog",
            element:<Blog/>
        },
        {
            path:"/contact",
            element:<Contact/>
        }
      ]
    }
])

export default router;