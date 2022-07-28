import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav1">
      <ul className="nav justify-content-end nav-dark mb-3">
        <li className="nav-item">
          <Link className="nav-link active"  to="/Home" >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="About">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Login">Login</Link>
        </li>
      </ul>
      </nav>
    </div>
  );
};

export default Navbar;
