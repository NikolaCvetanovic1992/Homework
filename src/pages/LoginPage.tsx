import { Button } from "@mui/material";
import React, { useContext } from "react";
import { GlassesContext } from "../context/context";
import LoginForm from "../components/loginForm/LoginForm";

const LoginPage = () => {
  const ctx = useContext(GlassesContext);

  return (
    <React.Fragment>
      <LoginForm />
    </React.Fragment>
  );
};

export default LoginPage;
