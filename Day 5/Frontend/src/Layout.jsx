import { Outlet, NavLink } from "react-router";

import React, { useState, useEffect } from "react";

const Layout = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg-light)",
        color: "var(--color-text-light)",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <nav
        className="flex gap-4 p-4"
        style={{
          background: "var(--color-card-bg-light)",
          borderBottom: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg font-medium transition ${
                isActive
                  ? "bg-teal-400 text-black"
                  : "text-white hover:bg-gray-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/AddPost"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg font-medium transition ${
                isActive
                  ? "bg-teal-400 text-black"
                  : "text-white hover:bg-gray-700"
              }`
            }
          >
            AddPost
          </NavLink>
          <NavLink
            to="/Post"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg font-medium transition ${
                isActive
                  ? "bg-teal-400 text-black"
                  : "text-white hover:bg-gray-700"
              }`
            }
          >
            Post
          </NavLink>
        </div>
        <button
          onClick={toggleTheme}
          style={{
            background: "var(--color-primary)",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            fontWeight: 600,
            transition: "background 0.2s",
          }}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
