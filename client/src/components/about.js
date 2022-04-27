import React, { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const [userData,setUserData] = useState();

  useEffect(()=>{
    callAboutPage();
  },[]);

  const callAboutPage = async() =>{
    try {
        const res = await fetch('/about',{
          method:"GET",
          headers:{
            Accept:"application/json",//for cookies in web
            "Content-Type":"application/json"
          },
          credentials:'include'//getting cookies to backend
        });
        //above code will send cookise to our backend
        
        //getting back our response from server
        const data = await res.json();//converting into json
        console.log(data);
        setUserData(data);

        if(!res.status === 200){
          const error = new Error(res.error);
          throw error;
        }

    } catch (error) {
      console.log("ABOUT PAGE",error);
      navigate("/");
    }
  }

  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">{/* <img/> */}</div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="profile-rating mt-3 mb-5">
                  Rankings: <span>1/10</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-primary" id="edit">
                Edit
              </button>
            </div>
          </div>

          <div className="row">
            {/* LEFT SIDE  */}
            <div className="col-md-4">
              <div className="profile-work">
                <a href="#work" target="_shakti">
                  Youtube
                </a>
                <br />
                <a href="#work" target="_shakti">
                  Instagram
                </a>
                <br />
                <a href="#work" target="_shakti">
                  Google
                </a>
                <br />
                <a href="#work" target="_shakti">
                  LinkedIn
                </a>
                <br />
                <a href="#work" target="_shakti">
                  Facebook
                </a>
                <br />
              </div>
            </div>
            {/* RIGHT SIDE  */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="User Id">User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>1455522</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <label htmlFor="User Id">Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <label htmlFor="User Id">Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Shakti</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <label htmlFor="User Id">Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Shakti</p>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="User Id"> ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>1455522</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <label htmlFor="User Id"></label>
                    </div>
                    <div className="col-md-6">
                      <p>Shakti</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <label htmlFor="User Id">Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Shakti</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <label htmlFor="User Id">Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Shakti</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
