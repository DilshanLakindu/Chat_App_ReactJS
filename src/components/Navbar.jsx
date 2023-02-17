import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">ChatLINE</span>
      <div className="user">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucjoeTIFRgKG9T2E2Bsnv90UHWc3taieOYQ&usqp=CAU"
          alt=""
        />
        <span>User</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
