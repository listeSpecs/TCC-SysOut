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
          onClick={() => navigate("/parametros")}
        />
        <MenuCard
          label="Situações"
          icon={
            <CheckCircleIcon sx={{ fontSize: 60 }} htmlColor={colors.primary} />
          }
          onClick={() => navigate("/parametros")}
        />
        <MenuCard
          label="Categorias"
          icon={
            <Category sx={{ fontSize: 60 }} htmlColor={colors.primary} />
          }
          onClick={() => navigate("/parametros")}
        />
        <MenuCard
          label="Acessórios"
          icon={<Build sx={{ fontSize: 60 }} htmlColor={colors.primary} />}
          onClick={() => navigate("/parametros")}
        />
        <MenuCard
          label="Informações da Empresa"
          icon={<Apartment sx={{ fontSize: 60 }} htmlColor={colors.primary} />}
          onClick={() => navigate("/parametros")}
        />
      </MenuWrapper>
    </Row>
  );
};

export default MenuParametros;
