import { styled } from "@mui/material";
import { FC } from "react";

const Input = styled("input")({
  width: 250,
  height: 40,
  borderRadius: 5,
  border: "2px solid #323232",
  backgroundColor: "#fff",
  boxShadow: "4px 4px #323232",
  fontSize: 15,
  fontWeight: 600,
  color: "#323232",
  padding: "5px 10px",
  outline: "none",
  "::placeholder": {
    color: "#666",
    opacity: 0.8,
  },
  "&:focus": {
    border: "2px solid #2d8cf0",
  },
});

interface IAppInputProps {
  placeholder: string;
  type: "email" | "password" | "text";
}

const AppInput: FC<IAppInputProps> = ({ placeholder, type }) => {
  return <Input placeholder={placeholder} type={type} />;
};

export default AppInput;
