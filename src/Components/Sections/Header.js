import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container wrapper">
        <div className="logo">
          <Link to="/">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2FLogos%2Fbreaking_bad1600.png&f=1&nofb=1"
              alt=""
            />
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
