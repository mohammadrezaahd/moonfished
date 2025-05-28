import React, { useState } from "react";
import { userApi } from "../api/user.api";

const Test = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      username: username,
      email: email,
      password: password,
      repeat_password: repeatPassword,
    };
    const res = await userApi.creatUser(data);
    console.log(res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="repeat_password">Repeat Password:</label>
        <input
          type="password"
          id="repeat_password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Test;
