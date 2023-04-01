import React from "react";
import PaidIcon from "@mui/icons-material/Paid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Category from "@mui/icons-material/Category";
import Build from "@mui/icons-material/Build";
import Apartment from "@mui/icons-material/Apartment";
import MenuCard from "../MenuCard";
import { MenuWrapper } from "./style";
import { colors } from "../../global/styles/colors";
import { Row } from "../../styles/base";
import { useNavigate } from "react-router-dom";

const MenuParametros = () => {
  const navigate = useNavigate();

  return (
    <Row justify="center">
      <MenuWrapper>
        <MenuCard
          label="Serviços e Valores"
          icon={
            <PaidIcon sx={{ fontSize: 60 }} htmlColor={colors.primary} />
          }
          onClick={() => navigate("servicos")}
        />
        <MenuCard
          label="Situações"
          icon={
            <CheckCircleIcon sx={{ fontSize: 60 }} htmlColor={colors.primary} />
          }
          onClick={() => navigate("situacoes")}
        />
        <MenuCard
          label="Categorias"
          icon={
            <Category sx={{ fontSize: 60 }} htmlColor={colors.primary} />
          }
          onClick={() => navigate("categorias")}
        />
        <MenuCard
          label="Acessórios"
          icon={<Build sx={{ fontSize: 60 }} htmlColor={colors.primary} />}
          onClick={() => navigate("acessorios")}
        />
        <MenuCard
          label="Informações da Empresa"
          icon={<Apartment sx={{ fontSize: 60 }} htmlColor={colors.primary} />}
          onClick={() => navigate("empresa")}
        />
      </MenuWrapper>
    </Row>
  );
};

export default MenuParametros;
