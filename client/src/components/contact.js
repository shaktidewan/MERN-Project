import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData,setUserData] = useState();

  useEffect(()=>{
    userContact();
  },[]);

  const userContact = async() =>{
    try {
        const res = await fetch('/getData',{
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
      console.log("CONTACT PAGE",error);
    }
  }

  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                {/* <img/> */}
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact-info_text">+977 9810138740</div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                {/* <img/> */}
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact-info_text">
                    shaktiyakhha@gmail.com
                  </div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                {/* <img/> */}
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact-info_text">Chakrapath, Kathmandu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FORM for contact   */}
      <div className="contact_form" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get in Touch</div>
                <form className="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="conact_form_name input_field"
                      placeholder="Your Name"
                      value={userData.name}
                      required
                    />
                    <input
                      type="email"
                      id="contact_form_email"
                      className="conact_form_email input_field"
                      placeholder="Your Email"
                      value={userData.email}
                      required
                    />
                    <input
                      type="number"
                      id="contact_form_phone"
                      className="conact_form_phone input_field"
                      placeholder="Your Phone"
                      value={userData.phone}
                      required
                    />
                  </div>

                  <div className="contact_form_text mt-5">
                    <textarea className="text_field contact_from_message" placeholder="Message" cols="30" rows="10"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" id="contact">
                      Submit
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
