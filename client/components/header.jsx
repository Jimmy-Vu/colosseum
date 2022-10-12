import React, { useState } from "react";
import AppDrawer from "./app-drawer";
import { useSelector } from 'react-redux';

function Header(props) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const loggedIn = useSelector(state => state.app.loggedIn);

  return (
    <header>
      <AppDrawer isOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen}></AppDrawer>
      <div className="header">
        <button onClick={() => setDrawerIsOpen(prevState => !prevState)} type="button">
          <i className="menu-button fa-solid fa-bars"></i>
        </button>
        <h1 className="header__title"><a href="#">COLOSSEUM</a></h1>
        <a className="header__sign-in" href="#sign-in">{loggedIn ? 'Sign Out' : 'Sign In'}</a>
      </div>
    </header>
  );
}

export default Header;
