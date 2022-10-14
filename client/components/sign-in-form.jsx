import React, { useState } from "react";

export default function SignInForm(props) {
  const { switchForm, handleSignIn } = props;
  const [inputState, setInputState] = useState({
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [passShowing, setPassShowing] = useState(false);

  function handleChange(e) {
    setInputState(prev => ({
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
      body: JSON.stringify(inputState)
    })
      .then(res => res.json())
      .then(result => {
        result.error
          ? setErrorMessage(result.error)
          : handleSignIn(result);
      })
      .catch(err => console.error(err));
  }

  return (
    <main className="sign-in-main">
      <div className="sign-in-container">
        <h2 className="sign-in-title">Sign In</h2>
        <form onSubmit={handleSubmit} className="sign-in-form">
          <div>
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} type="text" id="username" required />
          </div>
          <div>
            <label htmlFor="username">Password</label>
            <input onChange={handleChange} type={passShowing ? 'text' : 'password'} id="password" required />
            {passShowing &&
              <i onClick={() => setPassShowing(false)} id="password-toggle" className="fa-solid fa-eye-slash"></i>
            }
            {!passShowing &&
              <i onClick={() => setPassShowing(true)} id="password-toggle" className="fa-solid fa-eye"></i>
            }
          </div>
          <button onClick={switchForm} type="button">
            <p style={{ textDecoration: 'underline' }}>Don't have an account? Click here to register.</p>
            <p style={{ textAlign: 'center', color: 'red' }}>{errorMessage}</p>
          </button>
          <button className="sign-btn" type="submit">Submit</button>
        </form>
      </div>
    </main >
  );
}
