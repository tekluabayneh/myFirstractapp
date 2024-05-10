import React from "react";
import Reginput from "./impors_Register_comp";
function Register(props) {
  return (
    <form className="form">
      <h1 className="gretting">Welcome</h1>
      <Reginput type="text" placeholder="User Name" />
      <Reginput type="password" placeholder="password" />
      <Reginput type="password" placeholder="quanfirsm password" />
      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
}
export default Register;
