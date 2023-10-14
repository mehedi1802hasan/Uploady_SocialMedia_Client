import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Home/Media";
import PostDetails from "../Pages/Home/PostDetails";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/media',
          element:<Media></Media>
        },{
          path:'/media/:id',
          element:<PostDetails></PostDetails>,
          loader: ({ params }) => fetch(`http://localhost:4000/media/${params.id}`)
        }
      ]

    },
  ]);
  export default router;