import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from "../../api";
import LoginTemplate from "../../components/templates/LoginTemplate";

const defaultValues = {
  login: "",
  senha: "",
};

const Login = () => {
  const [values, setValues] = useState(defaultValues);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const resp = await api.post("/login", values);
      console.log(resp.data);
      window.localStorage.setItem('token', resp.data.token);
      window.localStorage.setItem('user', resp.data.username);
    } catch (error: any) {
      console.log(error);
      return toast.error("Email ou senha inválidos!");
    }
    navigate("/home");
  };

  return (
    <>
      <LoginTemplate
        values={values}
        setValues={setValues}
        handleLogin={handleLogin}
      />

      <ToastContainer />
    </>
  );
};

export default Login;
