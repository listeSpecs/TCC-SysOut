import React from "react";
import { Route, Routes } from "react-router-dom";
import ClientesTemplate from "../components/templates/ClientesTemplate";
import CadastrarCliente from "../components/templates/ClientesTemplate/components/CadastrarCliente";
import OSTemplate from "../components/templates/OSTemplate";
import CadastrarOS from "../components/templates/OSTemplate/components/CadastrarOS";
import ConsultarOS from "../components/templates/OSTemplate/components/ConsultarOS";
import ParametrosTemplate from "../components/templates/ParametrosTemplate";
import Acessorios from "../components/templates/ParametrosTemplate/components/Acessorios";
import CadastrarAcessorios from "../components/templates/ParametrosTemplate/components/Acessorios/CadastrarAcessorios";
import Categorias from "../components/templates/ParametrosTemplate/components/Categorias";
import CadastrarCategorias from "../components/templates/ParametrosTemplate/components/Categorias/CadastrarCategorias";
import Empresa from "../components/templates/ParametrosTemplate/components/Empresa";
import CadastrarEmpresas from "../components/templates/ParametrosTemplate/components/Empresa/CadastrarEmpresas";
import Servicos from "../components/templates/ParametrosTemplate/components/Servicos";
import CadastrarServicos from "../components/templates/ParametrosTemplate/components/Servicos/CadastrarServicos";
import Situacoes from "../components/templates/ParametrosTemplate/components/Situacoes";
import CadastrarSituacoes from "../components/templates/ParametrosTemplate/components/Situacoes/CadastrarSituacoes";
import CadastrarTecnico from "../components/templates/TecnicosTemplate/components/CadastrarTecnico";
import ConsultarTecnico from "../components/templates/TecnicosTemplate/components/ConsultarTecnico";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Tecnicos from "../pages/Tecnicos";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/tecnicos" element={<Tecnicos />} />
    <Route path="/tecnicos/cadastrar" element={<CadastrarTecnico />} />
    <Route path="/tecnicos/consultar" element={<ConsultarTecnico />} />
    <Route path="/clientes" element={<ClientesTemplate />} />
    <Route path="/clientes/cadastrar" element={<CadastrarCliente />} />
    <Route path="/os" element={<OSTemplate />} />
    <Route path="/os/cadastrar" element={<CadastrarOS />} />
    <Route path="/os/consultar" element={<ConsultarOS />} />
    <Route path="/parametros" element={<ParametrosTemplate />} />
    <Route path="/parametros/servicos" element={<Servicos />} />
    <Route
      path="/parametros/servicos/cadastrar"
      element={<CadastrarServicos />}
    />
    <Route path="/parametros/situacoes" element={<Situacoes />} />
    <Route
      path="/parametros/situacoes/cadastrar"
      element={<CadastrarSituacoes />}
    />
    <Route path="/parametros/categorias" element={<Categorias />} />
    <Route
      path="/parametros/categorias/cadastrar"
      element={<CadastrarCategorias />}
    />
    <Route path="/parametros/acessorios" element={<Acessorios />} />
    <Route
      path="/parametros/acessorios/cadastrar"
      element={<CadastrarAcessorios />}
    />
    <Route path="/parametros/empresa" element={<Empresa />} />
    <Route
      path="/parametros/empresa/cadastrar"
      element={<CadastrarEmpresas />}
    />
  </Routes>
);

export default AppRoutes;
