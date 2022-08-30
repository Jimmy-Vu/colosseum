import React from "react";

function Header(props) {
  return (
    <header>
      <div className="header">
        <button type="button">
          <i className="menu-button fa-solid fa-bars"></i>
        </button>
        <h1 className="header__title">COLLOSSEUM</h1>
      </div>
    </header>
  );
}

export default Header;
