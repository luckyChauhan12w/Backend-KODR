import { Outlet, NavLink } from "react-router";

const Layout = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/AddPost">AddPost</NavLink>
        <NavLink to="/Post">Post</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
