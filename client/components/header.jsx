import React, { useEffect, useState } from "react";
import AppDrawer from "./app-drawer";
import parseRoute from "../lib/parseRoute";
import { useSelector, useDispatch } from 'react-redux';

function Header(props) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const isLoggedIn = useSelector(state => state.app.isLoggedIn);
  const handleSignOut = props.handleSignOut;
  const setStateRoute = props.setStateRoute;

  function handleSignInClick() {
    setStateRoute({ route: parseRoute('#sign-in') });
  }

  return (
    <header>
      <AppDrawer isOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen}></AppDrawer>
      <div className="header">
        <button onClick={() => setDrawerIsOpen(prevState => !prevState)} type="button">
          <i className="menu-button fa-solid fa-bars"></i>
        </button>
        <h1 className="header__title"><a href="#">COLOSSEUM</a></h1>
        {isLoggedIn
          ? <a onClick={handleSignOut} className="header__sign-in">Sign Out</a>
          : <a onClick={handleSignInClick} className="header__sign-in">Sign In</a>
        }
      </div>
    </header>
  );
}

export default Header;
