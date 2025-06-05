import { FC } from "react";
import FlipBox from "../modules/FlipBox";
import RegisterForm from "./forms/register";
import LoginForm from "./forms/login";

const AuthForm: FC = () => {
  return (
    <FlipBox title1="Register" title2="Login">
      <RegisterForm />
      <LoginForm />
    </FlipBox>
  );
};

export default AuthForm;
