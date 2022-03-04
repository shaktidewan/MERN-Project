import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <h1>404 Error</h1>
      <NavLink to="/">
        <h1>Back to Home Page</h1>
      </NavLink>
    </div>
  );
};

export default Errorpage;
