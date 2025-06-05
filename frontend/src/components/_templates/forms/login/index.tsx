import React, { FC } from "react";
import { Typography } from "@mui/material";
import AppInput from "../../../modules/AppInput";
import AppSubmitBtn from "../../../modules/AppSubmitBtn";

const LoginForm: FC = () => {
  return (
    <>
      <Typography
        sx={{ fontSize: 25, fontWeight: 900, color: "#323232", mb: 2 }}
      >
        Log in
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <AppInput type="email" placeholder="Email" />
        <AppInput type="password" placeholder="Password" />
        <AppSubmitBtn>Let`s go!</AppSubmitBtn>
      </form>
    </>
  );
};

export default LoginForm;
