import { styled } from "@mui/material";
import { ChangeEvent, forwardRef } from "react";

const Input = styled("input")<{
  $error?: boolean;
}>(({ $error }) => ({
  width: 250,
  height: 40,
  borderRadius: 5,
  border: `2px solid ${$error ? "#d32f2f" : "#323232"}`,
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
    border: `2px solid ${$error ? "#d32f2f" : "#2d8cf0"}`,
  },
}));

const HelperText = styled("span")({
  fontSize: 12,
  color: "#d32f2f",
  marginTop: 4,
  alignSelf: "flex-start",
  paddingLeft: 4,
});

interface IAppInputProps {
  placeholder: string;
  type: "email" | "password" | "text";
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  name?: string;
}

const AppInput = forwardRef<HTMLInputElement, IAppInputProps>(
  (
    { placeholder, type, value, onChange, error, helperText, name, ...rest },
    ref
  ) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          $error={error}
          ref={ref}
          {...rest}
        />
        {error && helperText && <HelperText>{helperText}</HelperText>}
      </div>
    );
  }
);

export default AppInput;
