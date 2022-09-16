import React from "react";
import { useTransition, animated } from '@react-spring/web';

function AppDrawer(props) {
  const isOpen = props.isOpen;
  const setDrawerIsOpen = props.setDrawerIsOpen;
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
                <ul><a onClick={() => setDrawerIsOpen(false)} href="#listings">Arenas</a></ul>
                <ul><a onClick={() => setDrawerIsOpen(false)} href="#create">Add An Arena</a></ul>
                <ul><a href="#">Favorites</a></ul>
                <ul><a href="#">My Account</a></ul>
              </nav>
            </animated.div>
            <div onClick={() => setDrawerIsOpen(false)} className="drawer-overlay"></div>
          </>
        ) : '')}
    </div>
  );
}

export default AppDrawer;
