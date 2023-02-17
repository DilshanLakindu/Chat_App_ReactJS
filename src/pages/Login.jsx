import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChatLINE</span>
        <span className="title">Login</span>
        <form>
          {/* <input type="text" placeholder="User name" /> */}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {/* <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label> */}
          <button>Sign In</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
