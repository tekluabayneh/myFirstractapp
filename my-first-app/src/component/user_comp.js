import React, { useState } from "react";
import Input from "./log_input_comp";

function Login() {
  return (
    <form className="form">
      <h1 className="gretting">Hello</h1>
      <Input type="text" placeholder="User Name" />
      <Input type="password" placeholder="password" />
      <button type="submit" className="btn1">
        sign in
      </button>
    </form>
  );
}
export default Login;
