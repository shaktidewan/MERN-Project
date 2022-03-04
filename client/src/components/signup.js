import React, { useState } from "react";
import { MdWork } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: ""
  });

  let name,value;
  const handleInputs = (e) =>{
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;

    //spread operator;[name]=>key and it's value
    setUser({...user,[name]:value});
  }

  console.log(user.name);
  
  return (
    // <div style={{ alignItems: "center" }}>
    //   <section className="signup">
    //     <div className="container mt-5">

    //         {/* RIGHT SIDE */}
    //         <div className="signup-image">
    //           <figure>
    //             <img/>
    //           </figure>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-12" style={{}}>
          <div className="container">
            <div className="row">
              <div className="col-2" style={{}} />
              <div className="col-6" style={{}}>
                <div className="signup-form">
                  <h2 className="form-title">Sign Up</h2>
                  <form>
                    <div className="mb-3">
                      <label for="exampleInputName1" className="form-label">
                        Name*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        autoComplete="off"
                        value={user.name}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="phone" className="form-label">
                        Phone*
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="phone"
                        id="phone"
                        autoComplete="off"
                        value={user.phone}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="phone" className="form-label">
                        Work*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="work"
                        id="work"
                        autoComplete="off"
                        value={user.work}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address*
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="emailHelp"
                        value={user.email}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="confirm password" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="cpassword"
                        id="cpassword"
                        value={user.cpassword}
                        onChange={handleInputs}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="signup"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-4" style={{}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
