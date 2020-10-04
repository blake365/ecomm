import React from "react";

import SignIn from "../../components/sign-in/sign-in.comonent";
import SignUp from "../../components/signup/sign-up.component";

import "./signin.styles.scss";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
