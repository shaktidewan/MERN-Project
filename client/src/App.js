import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Errorpage from "./components/Errorpage";
import 'bootstrap/dist/css/bootstrap.css';
import Logout from "./components/logout";

const App = () => {
  return (
    <>
      <Navbar/>
      {/* Navbar will always be on top  */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
};

export default App;
