import React, { useState } from "react";

export default function SignUpForm(props) {
  const { switchForm } = props;
  const [inputState, setInputState] = useState({
    username: '',
    password: ''
  });

  function handleChange(e) {
    setInputState(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/api/users/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputState)
    })
      .then(res => res.json())
      .then(result => {
        switchForm('sign-in');
      })
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
          <button onClick={switchForm} type="button">
            <p>Looking to sign up instead? Click here.</p>
          </button>
          <button className="sign-btn" type="submit">Sign Up</button>
        </form>
      </div>
    </main>
  );
}
