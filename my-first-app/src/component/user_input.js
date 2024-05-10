import React from "react";
import Login from "./user_comp";
import Register from "./Register_user_comp";

/* = document.addEventListener("click", function () {
  return true;
});  */
/* function renderconditionaly() {
  return;
} */

/* let curenttime = 12; */

let setfalse = document.getElementsByClassName("btn");

/* setfalse.addEventListener("click", function () {
  console.log("clicked"); 
}); */
var islogedin = !true;

function User() {
  return (
    <div className="container" id="teklu">
      {islogedin ? <Register /> : <Login />}

      {/* {islogedin ? <h1>Hello User</h1> : <Login />} we can do it like this if we want to do */}
      {/* {curenttime > 12 && <h1>waht are you staill working</h1>} */}
    </div>
  );
}
export default User;
/*       {renderconditionaly()} */
