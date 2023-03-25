import React from "react";
import { Route, Routes } from "react-router-dom";
import ClientesTemplate from "../components/templates/ClientesTemplate";
import OSTemplate from "../components/templates/OSTemplate";
import ParametrosTemplate from "../components/templates/ParametrosTemplate";
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
    <Route path="/clientes" element={<ClientesTemplate />} />
    <Route path="/os" element={<OSTemplate />} />
    <Route path="/parametros" element={<ParametrosTemplate />} />
  </Routes>
);

export default AppRoutes;
