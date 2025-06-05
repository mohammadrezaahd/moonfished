import { Typography } from "@mui/material";
import AppInput from "../../../modules/AppInput";
import AppSubmitBtn from "../../../modules/AppSubmitBtn";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthSchema } from "../../../../schemas/auth.schema";
import { IUserCreate } from "../../../../models/user.dto";

const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserCreate>({
    resolver: yupResolver(AuthSchema.registerSchema),
  });

  const onSubmit = (data: IUserCreate) => {
    console.log("Register data:", data);
  };

  return (
    <>
      <Typography
        sx={{ fontSize: 25, fontWeight: 900, color: "#323232", mb: 2 }}
      >
        Sign up
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <AppInput
          type="text"
          placeholder="Username"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <AppInput
          type="email"
          placeholder="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <AppInput
          type="password"
          placeholder="Password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <AppInput
          type="password"
          placeholder="Repeat password"
          {...register("repeat_password")}
          error={!!errors.repeat_password}
          helperText={errors.repeat_password?.message}
        />
        <AppSubmitBtn>Confirm!</AppSubmitBtn>
      </form>
    </>
  );
};

export default RegisterForm;
