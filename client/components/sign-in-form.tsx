import React, { useState } from "react";

interface Props {
  switchForm: () => void;
  handleSignIn: (result: { user: string; token: string }) => void;
}

export default function SignInForm(props: Props) {
  const { switchForm, handleSignIn } = props;
  const [inputState, setInputState] = useState({
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [passShowing, setPassShowing] = useState(false);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const element = e.target as HTMLInputElement;
    setInputState(prev => ({
      ...prev,
      [element.id]: element.value
    }));
  }

  function handleSubmit(e: React.SyntheticEvent) {
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

  function handleDemoSignIn(e: React.SyntheticEvent) {
    e.preventDefault();

    fetch('/api/users/sign-in/demo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: 'Demo', password: 'demo' })
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
    <main className="auth-main">
      <div className="auth-container">
        <h2 className="auth-title">Sign In</h2>
        <form onSubmit={handleSubmit} className="auth-form">
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
          <div className="auth__button-row">
            <button className="auth-btn" type="submit">Submit</button>
            <button onClick={handleDemoSignIn} className="demo-btn" type="button">Demo User</button>
          </div>
        </form>
        {/* <button onClick={handleDemoSignIn} className="demo-btn" type="button">Demo User</button> */}
      </div>
    </main >
  );
}
