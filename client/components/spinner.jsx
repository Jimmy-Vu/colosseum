import React from "react";
import { MoonLoader } from "react-spinners";

export default function Spinner(props) {
  const isLoading = props.isLoading;
  const override = {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    margin: "auto",
    "zIndex": 1
  };

  const overlayStyle = {
    position: "absolute",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  };

  if (isLoading) {
    return (
      <div className="spinner-overlay" style={overlayStyle}>
        <MoonLoader loading={isLoading} cssOverride={override} size="70px" color="#FFDB51" />
      </div>
    );
  } else {
    return (null);
  }

}
