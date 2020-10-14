import React from "react";
import { NavLink } from "react-router-dom";

const Locations = () => {
  return (
    <div>
      <h1>Locations</h1>
      <NavLink to='/addLocation'  >Add a Location</NavLink>
    </div>
  );
};

export default Locations;