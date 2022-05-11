import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import "../styles/signin.css"

const SignIn = (props) => {
  return (
    <div>
      <Login />
    </div>
  )
}
export default SignIn;
