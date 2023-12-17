import React from "react";
import "./Navbar.css";

const Navbar = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <h1 className="nav-logo-text">Skilline</h1>
      </div>
      <div className="nav-buttons">
        <a href="/">Home</a>
        <a href="/">Careers</a>
        <a href="/">Blog</a>
        <a href="/">About Us</a>
        <div className="nav-sign-buttons">
          <p className="nav-sign-in">
            Sign In
          </p>
          <p className="nav-sign-up">
            Sign Up
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
