import React, { useEffect, useState } from "react";
import AppDrawer from "./app-drawer";
import { useSelector } from 'react-redux';
import { RootState } from "../redux/rootState";

function Header(props: { handleSignOut: () => void; }) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [navBarScrolled, setNavBarScrolled] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.app.isLoggedIn);
  const handleSignOut = props.handleSignOut;

  function handleSignInClick() {
    window.location.hash = '#auth';
  }

  return (
    <header className={navBarScrolled ? 'scrolled' : ''}>
      <AppDrawer handleSignOut={handleSignOut} isOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen}></AppDrawer>
      <div className="navbar">
        <button onClick={() => setDrawerIsOpen(prevState => !prevState)} aria-label="open sidebar menu" type="button">
          <i className="menu-button fa-solid fa-bars"></i>
        </button>
        <a href="#"><h1 className="navbar__title">COLOSSEUM</h1></a>
        {isLoggedIn
          ? <a onClick={handleSignOut} href="#auth" className="navbar__sign-in-btn">Sign Out</a>
          : <a onClick={handleSignInClick} href="#auth" className="navbar__sign-in-btn">Sign In</a>
        }
      </div>
    </header>
  );
}

export default Header;
