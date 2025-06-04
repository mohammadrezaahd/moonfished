import { styled } from "@mui/material";
import { FC } from "react";

interface IAppSubmitBtnProps {
  children: string;
}

const SubmitButton = styled("button")({
  margin: "20px 0",
  width: 120,
  height: 40,
  borderRadius: 5,
  border: "2px solid #323232",
  backgroundColor: "#fff",
  boxShadow: "4px 4px #323232",
  fontSize: 17,
  fontWeight: 600,
  color: "#323232",
  cursor: "pointer",
  "&:active": {
    boxShadow: "0 0 #323232",
    transform: "translate(3px, 3px)",
  },
});

const AppSubmitBtn: FC<IAppSubmitBtnProps> = ({ children }) => {
  return <SubmitButton type="submit">{children}</SubmitButton>;
};

export default AppSubmitBtn;
