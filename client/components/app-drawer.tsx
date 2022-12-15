import React from "react";
import { useTransition, animated } from '@react-spring/web';
import { useSelector } from 'react-redux';
import { RootState } from "../redux/rootState";

interface Props {
  isOpen: boolean;
  setDrawerIsOpen: (boolean: boolean) => void;
  handleSignOut: () => void;
}

function AppDrawer(props: Props) {
  const { isOpen, setDrawerIsOpen, handleSignOut } = props;
  const isLoggedIn = useSelector((state: RootState) => state.app.isLoggedIn);
  const username = useSelector((state: RootState) => state.user.username);
  const transition = useTransition(isOpen, {
    from: { x: "-100%" },
    enter: { x: "0" },
    leave: { x: "-100%" }
  });

  return (
    <div className="app-drawer">
      {transition((style, item) =>
        item ? (
          <>
            <animated.div style={style} className="menu">
              <i onClick={() => setDrawerIsOpen(false)} className="close-button fa-solid fa-xmark"></i>
              <nav className="menu__nav">
                {isLoggedIn
                  ? <span className="welcome-message">{`Hiya ${username}!`}</span>
                  : null
                }
                <ul><a onClick={() => setDrawerIsOpen(false)} href="#listings">Arenas</a></ul>
                <ul><a onClick={() => setDrawerIsOpen(false)} href="#create">Add An Arena</a></ul>
                {isLoggedIn &&
                  <>
                    <ul><a onClick={() => setDrawerIsOpen(false)} href="#account">My Account</a></ul>
                  </>
                }
                {!isLoggedIn &&
                  <a onClick={() => setDrawerIsOpen(false)} className="nav__sign-in-btn" href="#auth">Sign In</a>
                }
                {isLoggedIn &&
                  <a onClick={() => { setDrawerIsOpen(false); handleSignOut(); }} className="nav__sign-in-btn">Sign Out</a>
                }
              </nav>
            </animated.div>
            <div onClick={() => setDrawerIsOpen(false)} className="drawer-overlay"></div>
          </>
        ) : '')
      }
    </div >
  );
}

export default AppDrawer;
