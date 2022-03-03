import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar/>
      {/* Navbar will always be on top  */}
      <Routes>
        <Route extact path="/" element={<Home />} />
        <Route extact path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
