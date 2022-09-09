import React from "react";

function AppDrawer(props) {
  const isOpen = props.isOpen;

  if (isOpen) {
    return (
        <div className="app-drawer">
          <div className="menu"></div>
          <div className="drawer-tint"></div>
        </div>
    );
  } else {
    return (<div className="app-drawer__hidden"></div>);
  }
}

export default AppDrawer;
