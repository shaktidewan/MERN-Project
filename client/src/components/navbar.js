import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import logo from "../res/images/coffee.png";
import { UserContext } from "../App";

const Navbar = () => {
  const {state,dispatch} = useContext(UserContext);



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            {/* <img src={logo} alt="logo" height="5%" width="5%"/> */}
          </NavLink>
        
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              {state !== true ? <><li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </li></> :<li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Log Out
                </NavLink>
              </li>}
              
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
