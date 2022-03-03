import React from "react";
import { FaBeer } from "react-icons/fa";

const Signup = () => {
  return (
    <div style={{ alignItems: "center" }}>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-form">
            <h2 className="form-title">Sign Up</h2>
            <form className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="name">
                  <FaBeer />
                </label>
                <input
                  type="text"
                  id="name"
                  autoComplete="off"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <FaBeer />
                </label>
                <input
                  type="text"
                  id="email"
                  autoComplete="off"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  <FaBeer />
                </label>
                <input
                  type="text"
                  id="phone"
                  autoComplete="off"
                  placeholder="Your Phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <FaBeer />
                </label>
                <input
                  type="text"
                  id="password"
                  autoComplete="off"
                  placeholder="Your Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="work">
                  <FaBeer />
                </label>
                <input
                  type="password"
                  id="work"
                  autoComplete="off"
                  placeholder="Your Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">
                  <FaBeer />
                </label>
                <input
                  type="password"
                  id="cpassword"
                  autoComplete="off"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="form-group form-button">
                <input type="submit" name="signup" id="signup" className="form-submit" value="register"/>
              </div>
            </form>
            {/* RIGHT SIDE */}
            <div className="signup-image">
              <figure>
                {/* <img/> */}
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
