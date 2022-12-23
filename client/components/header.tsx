import React, { useEffect, useState } from "react";
import AppDrawer from "./app-drawer";
import { useSelector } from 'react-redux';
import { RootState } from "../redux/rootState";

function Header(props: { handleSignOut: () => void; }) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [navBarScrolled, setNavBarScrolled] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.app.isLoggedIn);
  const handleSignOut = props.handleSignOut;

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, [window.scrollY]);


  function changeBackground() {
    if (window.scrollY >= 40) {
      setNavBarScrolled(true);
    } else {
      setNavBarScrolled(false);
    }
  }

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
          ? <a onClick={handleSignOut} className="navbar__sign-in">Sign Out</a>
          : <a onClick={handleSignInClick} className="navbar__sign-in">Sign In</a>
        }
      </div>
    </header>
  );
}

export default Header;
