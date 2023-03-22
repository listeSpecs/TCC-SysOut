import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginTemplate from "../../components/templates/LoginTemplate";

const defaultValues = {
  email: "",
  senha: "",
};

const Login = () => {
  const [values, setValues] = useState(defaultValues);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <LoginTemplate
      values={values}
      setValues={setValues}
      handleLogin={handleLogin}
    />
  );
};

export default Login;
