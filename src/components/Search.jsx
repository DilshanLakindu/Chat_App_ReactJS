import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input placeholder="Find a user" type="text" />
      </div>
      <div className="userChat">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucjoeTIFRgKG9T2E2Bsnv90UHWc3taieOYQ&usqp=CAU"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
