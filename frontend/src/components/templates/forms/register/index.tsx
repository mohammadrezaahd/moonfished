import { Typography } from "@mui/material";
import AppInput from "../../../modules/AppInput";
import AppSubmitBtn from "../../../modules/AppSubmitBtn";
import { FC } from "react";

const RegisterForm: FC = () => {
  return (
    <>
      <Typography
        sx={{ fontSize: 25, fontWeight: 900, color: "#323232", mb: 2 }}
      >
        Sign up
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <AppInput type="text" placeholder="Name" />
        <AppInput type="email" placeholder="Email" />
        <AppInput type="password" placeholder="Password" />
        <AppSubmitBtn>Confirm!</AppSubmitBtn>
      </form>
    </>
  );
};

export default RegisterForm;
