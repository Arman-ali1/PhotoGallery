import RegisterUser from "../../../backend/public/RegisterUser.js"

import "./registration.css";
import { useEffect, useState } from "react";


function Registration() {
  // const [regUsers,setRegUser] =  useState();
  let formdata ;
  const RegUser = async (event)=>{
    formdata = event;
  }

  return (
    <>
      <div id="registration">
        <form method="GET" action="">
          <h1>Registration Form</h1>
          <div id="regFormDiv">
            <label htmlFor="name" className="regLabel">Name &nbsp;</label>
            <input type="text"  id="name" className="regInp" ></input>
            <br />
            <label htmlFor="mobile" className="regLabel">Mobile</label>
            <input type="text" id="mobile" className="regInp"></input>
            <br />
          </div>
          <button id="regBtn" type="submit" onClick={RegUser}>
            Submit
          </button>
        </form>
      </div>
      
    </>
  );
}

export default Registration;
