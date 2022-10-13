import React, { useEffect, useState } from "react";

export default function SignIn(props) {
  const [userState, setUserState] = useState({
    username: '',
    password: ''
  });

  function handleChange(e) {
    setUserState(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/api/users/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userState)
    })
      .then(res => res.json())
      // .then(result => {

      // })
      .catch(err => console.error(err));
  }



  return (
    <main className="sign-in-main">
      <div className="sign-in-container">
        <form onSubmit={handleSubmit} className="sign-in-form">
          <div>
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} type="text" id="username" />
          </div>
          <div>
            <label htmlFor="username">Password</label>
            <input onChange={handleChange} type="password" id="password" />
          </div>
          <button>
            <p>Looking to sign up instead? Click here.</p>
          </button>
          <button className="sign-btn" type="submit">Sign In</button>
        </form>
      </div>
    </main>
  );
}
