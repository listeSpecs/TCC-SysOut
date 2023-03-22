import React from "react";
import { Route, Routes } from "react-router-dom";
import Cadastrar from "../components/templates/TecnicosTemplate/components/Cadastrar";
import Consultar from "../components/templates/TecnicosTemplate/components/Consultar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Tecnicos from "../pages/Tecnicos";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/tecnicos" element={<Tecnicos />} />
    <Route path="/tecnicos/cadastrar" element={<Cadastrar />} />
    <Route path="/tecnicos/consultar" element={<Consultar />} />
  </Routes>
);

export default AppRoutes;
