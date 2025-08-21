import { Outlet, NavLink } from "react-router";

const Layout = () => {
  return (
    <>
      <nav className="flex gap-4 p-4 bg-gray-900">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg font-medium transition 
          ${
            isActive ? "bg-teal-400 text-black" : "text-white hover:bg-gray-700"
          }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/AddPost"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg font-medium transition 
          ${
            isActive ? "bg-teal-400 text-black" : "text-white hover:bg-gray-700"
          }`
          }
        >
          AddPost
        </NavLink>

        <NavLink
          to="/Post"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg font-medium transition 
          ${
            isActive ? "bg-teal-400 text-black" : "text-white hover:bg-gray-700"
          }`
          }
        >
          Post
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
