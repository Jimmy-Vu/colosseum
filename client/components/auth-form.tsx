import React, { useState } from "react";

interface Props {
  formState: string;
  setFormState: (state: string) => void;
  handleSignInSuccess: (result: { user: string; token: string }) => void;
}

export default function AuthForm(props: Props) {
  const { formState, setFormState, handleSignInSuccess } = props;
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

  function handleSignInSubmit(e: React.SyntheticEvent) {
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
          : handleSignInSuccess(result);
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
          : handleSignInSuccess(result);
      })
      .catch(err => console.error(err));
  }

  function handleRegisterSubmit(e: React.SyntheticEvent) {
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
        result.error
          ? setErrorMessage(result.error)
          : setFormState('sign-in');
      })
      .catch(err => console.error(err));
  }

  if (formState === 'sign-in') {
    return (
      <main className="auth__main">
        <div className="auth__container">
          <h2 className="auth__title">Sign In</h2>
          <form onSubmit={handleSignInSubmit} className="auth__form">
            <div>
              <label htmlFor="username">Username</label>
              <input onChange={handleChange} type="text" id="username" required />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input onChange={handleChange} type={passShowing ? 'text' : 'password'} id="password" required />
              {passShowing &&
                <i onClick={() => setPassShowing(false)} id="password-toggle" className="fa-solid fa-eye-slash"></i>
              }
              {!passShowing &&
                <i onClick={() => setPassShowing(true)} id="password-toggle" className="fa-solid fa-eye"></i>
              }
            </div>
            <button onClick={() => setFormState('sign-out')} type="button">
              <p style={{ textDecoration: 'underline' }}>Don't have an account? Click here to register.</p>
              <p style={{ textAlign: 'center', color: 'red' }}>{errorMessage}</p>
            </button>
            <div className="auth__button-row">
              <button className="auth__submit-btn" type="submit">Submit</button>
              <button onClick={handleDemoSignIn} className="auth__demo-btn" type="button">Demo User</button>
            </div>
          </form>
        </div>
      </main >
    );
  } else {
    return (
      <main className="auth__main">
        <div className="auth__container">
          <h2 className="auth__title">Register</h2>
          <form onSubmit={handleRegisterSubmit} className="auth__form">
            <div>
              <label htmlFor="username">Username</label>
              <input onChange={handleChange} type="text" id="username" placeholder=" " minLength={3} required />
              <span className="auth__form__error">Usernames needs to have a minimum length of 3 characters</span>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input onChange={handleChange} type={passShowing ? 'text' : 'password'} id="password" placeholder=" " minLength={3} required />
              {passShowing &&
                <i onClick={() => setPassShowing(false)} id="password-toggle" className="fa-solid fa-eye-slash"></i>
              }
              {!passShowing &&
                <i onClick={() => setPassShowing(true)} id="password-toggle" className="fa-solid fa-eye"></i>
              }
              <span className="auth__form__error">Passwords needs to have a minimum length of 2 characters</span>
            </div>
            <button onClick={() => setFormState('sign-in')} type="button">
              <p style={{ textDecoration: 'underline' }}>Have an account? Click here to sign in.</p>
              <p style={{ textAlign: 'center', color: 'red' }}>{errorMessage}</p>
            </button>
            <div className="auth__button-row">
              <button className="auth__submit-btn" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}
