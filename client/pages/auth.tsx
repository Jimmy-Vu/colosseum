import React, { useState } from "react";
import SignInForm from "../components/sign-in-form";
import SignUpForm from "../components/sign-up-form";

export default function Auth(props: { handleSignIn: () => void; }) {
  const { handleSignIn } = props;
  const [formState, setFormState] = useState('sign-in');

  function switchForm() {
    if (formState === 'sign-in') {
      setFormState('sign-up');
    } else {
      setFormState('sign-in');
    }
  }

  if (formState === 'sign-in') {
    return (
      <SignInForm switchForm={switchForm} handleSignIn={handleSignIn} />
    );
  } else {
    return (
      <SignUpForm switchForm={switchForm} />
    );
  }
}
