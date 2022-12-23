import React, { useState } from "react";

export default function SignUpForm(props: { switchForm: () => void; }) {
  const { switchForm } = props;
  const [inputState, setInputState] = useState({
    username: '',
    password: ''
  });
  const [passShowing, setPassShowing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const element = e.target as HTMLInputElement;
    setInputState(prev => ({
      ...prev,
      [element.id]: element.value
    }));
  }

  function handleSubmit(e: React.SyntheticEvent) {
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
          : switchForm();
      })
      .catch(err => console.error(err));
  }

  return (
    <main className="sign-in-main">
      <div className="sign-in-container">
        <h2 className="sign-in-title">Register</h2>
        <form onSubmit={handleSubmit} className="sign-in-form">
          <div>
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} type="text" id="username" placeholder=" " minLength={2} required />
            <span>Usernames needs to have a minimum length of 2 characters</span>
          </div>
          <div>
            <label htmlFor="username">Password</label>
            <input onChange={handleChange} type={passShowing ? 'text' : 'password'} id="password" placeholder=" " minLength={2} required />
            {passShowing &&
              <i onClick={() => setPassShowing(false)} id="password-toggle" className="fa-solid fa-eye-slash"></i>
            }
            {!passShowing &&
              <i onClick={() => setPassShowing(true)} id="password-toggle" className="fa-solid fa-eye"></i>
            }
            <span>Passwords needs to have a minimum length of 2 characters</span>
          </div>
          <button onClick={switchForm} type="button">
            <p style={{ textDecoration: 'underline' }}>Have an account? Click here to sign in.</p>
            <p style={{ textAlign: 'center', color: 'red' }}>{errorMessage}</p>
          </button>
          <button className="sign-btn" type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
