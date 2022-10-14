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
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="sign-in-form">
          <div>
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} type="text" id="username" placeholder=" " minLength={2} required/>
            <span>Username needs to have a minimum length of 2 characters</span>
          </div>
          <div>
            <label htmlFor="username">Password</label>
            <input onChange={handleChange} type="password" id="password" placeholder=" " minLength={2} required/>
            <span>Password needs to have a minimum length of 2 characters</span>
          </div>
          <button onClick={switchForm} type="button">
            <p style={{ textDecoration: 'underline' }}>Have an account? Click here to sign in.</p>
          </button>
          <button className="sign-btn" type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
