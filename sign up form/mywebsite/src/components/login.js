import React from "react";
import {Link} from "react-router-dom";
const Login = () => {
    return (
      <>
    <div style={signup}>
      <h1>Login</h1>
      <div style={form}>
      <label htmlFor="First-name"> USERNAME:</label>
      <input type="text" id="first-name" name="first-name" />
      </div>

      <div style={form2}>
      <label htmlFor="password"> PASSWORD:</label>
      <input type="password" id="password" name="password" />
      </div>
     {/* <div>
    <button style={buttonStyle}>Login</button> */}
    <div>
        <Link to="/Home">
          <button style={buttonStyle}>Login</button>
        </Link>

    </div>
    <h2>Don't have an account</h2>
    <Link to="/signup">
          <button style={buttonStyle}>Signup</button>
        </Link>
    </div>
    </>
  );
};

const signup = {
//   backgroundColor: "beige",
  textAlign: "center",
  height: "15rem",
  display: "flex",                       
  flexDirection: "column",
  // justifyContent: "center",
  alignItems: "center",
};
const form={
    display:"flex",
    margin:"10px",
};
const form2={
    display:"flex",
    margin:"10px",
    
};
const buttonStyle={
    color:"red",
    // textAlign: "center",
    // alignItems: "center",
    // display:"center",
}
export default Login;
