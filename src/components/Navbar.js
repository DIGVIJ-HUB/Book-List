import React from "react";
import { Link } from "react-router-dom";
import { useLog } from "../hooks/useLogout";

export default function Navbar() {
  const { logout } = useLog();
  return (
    <nav>
      <h1>
        <Link to="/">My Reading List</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li onClick={logout}>Logout</li>
      </ul>
    </nav>
  );
}
