import React from "react";
import { Link } from "react-router-dom"
import './styles/Nav.css'

const RouteSwitch = () => {
  return (
    <nav className="nav-bar">
      <Link to="/"><h3>Logo</h3></Link>
      <ul className="nav-links">
        <Link to="/shop"><li>Shop</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
      </ul>
    </nav>
  );
};

export default RouteSwitch;