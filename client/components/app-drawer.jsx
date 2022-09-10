import React from "react";

function AppDrawer(props) {
  const isOpen = props.isOpen;
  const setDrawerIsOpen = props.setDrawerIsOpen;
  if (isOpen) {
    return (
      <div className="app-drawer">
        <div className="menu">
          <i onClick={() => setDrawerIsOpen(false)} className="close-button fa-solid fa-xmark"></i>
          <nav className="menu__nav">
            <ul>Gyms</ul>
            <ul>Favorites</ul>
            <ul>My Account</ul>
          </nav>
        </div>
        <div onClick={() => setDrawerIsOpen(false)} className="drawer-tint"></div>
      </div>
    );
  } else {
    return (<div className="app-drawer--hidden"></div>);
  }
}

export default AppDrawer;
