import React from "react";
import "./sign-in-and-sign-up.scss";

import SignIn from "../../components/sign-in/signin";
import SignUp from "../../components/sign-up/sign-up";
export default function SignInAndSignUp() {
  return (
    <div className="sign-in-sign-up-container">
      <SignIn />
      <SignUp />
    </div>
  );
}
