import React from "react";

function Header(props) {
  return (
    <header>
      <div className="topbar">
        <button type="button">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h1 className="header-title">COLLOSSEUM</h1>
      </div>
    </header>
  );
}

export default Header;
