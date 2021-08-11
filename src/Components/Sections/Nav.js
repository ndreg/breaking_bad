import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="header-nav">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
