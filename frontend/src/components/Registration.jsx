import React from "react";
import "./registration.css";
function Registration() {
  return (
    <>
      <div id="registration">
        <form method="post" >
          <h1>Registration Form</h1>
          <div id="regFormDiv">
            <label className="regLabel">Name &nbsp;</label>
            <input type="text" className="regInp"></input>
            <br />
            <label className="regLabel">Mobile</label>
            <input type="text" className="regInp"></input>
            <br />
          </div>
          <button id="regBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Registration;
