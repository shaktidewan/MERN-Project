import React, { useEffect, useState } from "react";

 const Home = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    userHomePage();
  }, []);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          Accept: "application/json", //for cookies in web
          "Content-Type": "application/json",
        },
        credentials: "include", //getting cookies to backend
      });
      //above code will send cookise to our backend

      //getting back our response from server
      const data = await res.json(); //converting into json
      // console.log(data);
      setUserName(data.name);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log("CONTACT PAGE", error);
    }
  };
  return (
    <div className="mt-5">
      <p>WELCOME,{userName ?<h1>{userName}</h1> : null}</p>
      <h1>We are THE MERN Developers</h1>
    </div>
  );
};

export default Home;