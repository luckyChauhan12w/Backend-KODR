import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import Home from "./components/Home";
import Post from "./components/Post";
import AddPost from "./components/AddPost";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/AddPost",
          element: <AddPost />,
        },
        {
          path: "/Post",
          element: <Post />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
