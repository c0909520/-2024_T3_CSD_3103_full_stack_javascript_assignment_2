import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { useState } from "react";

export const Navbar = (props) => {
  const [cart,setCart] = useState(  <ShoppingCart size={32} />)
  return (
    <div className="navvbar">
      <div className="links">
        <Link to="/"> {props.navbaritem1} </Link>
        <Link to="/contact"> {props.navbaritem2} </Link>
     
        <Link to="/cart">
          {cart}
        </Link>
    
      </div>
    </div>
  );
};
