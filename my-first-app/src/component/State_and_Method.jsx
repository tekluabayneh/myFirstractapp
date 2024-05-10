import React, { Component, useState } from "react";

function Method_and_State() {
  const [FullName, setFullName] = useState({
    FName: "",
    LName: "",
    Email: "",
  });

  function HandelChange(event) {
    const { value, name } = event.target;

    setFullName((prevName) => {
      return {
        ...prevName,
        [name]: value,
      };

      
      /*    if (name === "FName") {
        return {
          FName: value,
          LName: prevName.LName,
        };
      } else if (name === "LName") {
        return {
          FName: prevName.FName,
          LName: value,
        };
      } else if (name === "Email") {
        return {
          FName: prevName.FName,
          LName: prevName.LName,
          Email: value,
        };
      } */
    });
  }

  /* 
  const [FName, setFName] = useState("");

  const [LName, setLName] = useState("");

  function updateFName(event) {
    const FirstName = event.target.value;
    setFName(FirstName);

    event.preventDefault();
  }

  function updateLName(event) {
    const LastTName = event.target.value;
    setLName(LastTName);

    event.preventDefault();
  }
 */
  const [ismouseover, setmouseover] = useState(false);

  function changebg() {
    setmouseover(true);
  }
  function changebg2() {
    setmouseover(false);
  }

  /*  function chanheinput(event) {
    console.log(event.target.value);
    console.log(event.target.placeholder);
    console.log(event.target.type);
    setLName(event.target.value);
  } */
  return (
    <div className="container" id="Method_form">
      <form id="Method_form">
        <div className="head_and_apar_conatoner">
          <h1>
            Hello {FullName.FName} {FullName.LName}
          </h1>
          <p>{FullName.Email}</p>
        </div>
        <input
          type="text"
          name="FName"
          placeholder="Enter Name"
          onChange={HandelChange}
          value={FullName.FName}
        />
        <input
          type="text"
          name="LName"
          placeholder="Enter LastName"
          onChange={HandelChange}
          value={FullName.LName}
        />
        <input
          type="Email"
          name="Email"
          placeholder="Enter Email"
          onChange={HandelChange}
          value={FullName.Email}
        />
        <button
          type="submit"
          className="btn1"
          /* onClick={change} */
          /*  onMouseOver={changebg}
        onMouseOut={changebg2}
        style={{ backgroundColor: ismouseover ? "black" : "white" }} */
        >
          sign in
        </button>
      </form>
    </div>
  );
}
export default Method_and_State;


