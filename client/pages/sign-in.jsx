import React from "react";

export default function SignIn(props) {
  return (
    <main className="sign-in-main">
      <div className="sign-in-container">
        {/* <h2 className="sign-in-title">SIGN IN</h2> */}
        <form className="sign-in-form">
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="username">Password</label>
            <input type="password" id="password" />
          </div>
          <button className="sign-in-btn" type="submit">Sign In</button>
        </form>
      </div>
    </main>
  );
}
