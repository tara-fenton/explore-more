import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  let nav = props.user ? (
    <div>
      <NavLink to='/' onClick={props.handleLogout} >Logout</NavLink>

      <span>WELCOME, {props.user.name}</span>
    </div>
  ) : (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </div>
  );

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {nav}
    </div>
  );
};

export default Nav;
