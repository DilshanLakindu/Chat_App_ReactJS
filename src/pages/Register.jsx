import React from "react";
import AddImg from "./../img/AddImg.png";
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChatLINE</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="User name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={AddImg} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
