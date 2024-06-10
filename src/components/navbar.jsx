import { ShoppingCart } from "phosphor-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = (props) => {
  const [cart] = useState(<ShoppingCart size={32} />);
  const [assignment_name] = useState("Assignment 2 s24"); /* to remove for the sample */
  return (
    <div className="navvbar">
      <div className="title">{assignment_name}</div>
      <div className="links">
        <Link to="/"> {props.navbaritem1} </Link>
        <Link to="/contact"> {props.navbaritem2} </Link>
        <Link to="/cart">{cart}</Link>
      </div>
    </div>
  );
};
