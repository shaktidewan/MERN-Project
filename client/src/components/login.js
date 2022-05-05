import React, { useContext, useState } from "react";
import { MdWork } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";

const Login = () => {

  const {state,dispatch} = useContext(UserContext);


  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginUser = async (e) =>{
    e.preventDefault();

    const res = await fetch('/signin',{
      method:'POST',
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    });

    const data = res.json();

    if(res.status === 400 || !data){
      window.alert("Invalid Credentials");
    }else{
      dispatch({type:"USER",payload:true})
      window.alert("login Successful");
      navigate("/");
    }
  }

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
            <div className="col-2" style={{}}/>
              <div className="col-6" style={{}}>
                <div className="signup-form">
                  <h2 className="form-title">Log In</h2>
                  <form method="POST">
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address*
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit" onClick={loginUser} className="btn btn-primary" id="signup">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-4" style={{}}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;