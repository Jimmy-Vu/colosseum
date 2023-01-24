import React, { useState } from "react";
import AuthForm from "../components/auth-form";

export default function Auth(props: { handleSignInSuccess: (result: { user: string; token: string }) => void; }) {
  const { handleSignInSuccess } = props;
  const [formState, setFormState] = useState('sign-in');

  return (
    <AuthForm formState={formState} setFormState={setFormState} handleSignInSuccess={handleSignInSuccess} />
  )
}
