import React from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import EngineeringIcon from "@mui/icons-material/Engineering";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuCard from "../MenuCard";
import { MenuWrapper } from "./style";
import { colors } from "../../global/styles/colors";
import { Row } from "../../styles/base";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <Row justify="center">
      <MenuWrapper>
        <MenuCard
          label="Técnicos"
          icon={
            <EngineeringIcon sx={{ fontSize: 60 }} htmlColor={colors.primary} />
          }
          onClick={() => navigate("/tecnicos")}
        />
        <MenuCard
          label="Ordens de Serviço"
          icon={
            <DescriptionIcon sx={{ fontSize: 60 }} htmlColor={colors.primary} />
          }
          onClick={() => navigate("/os")}
        />
        <MenuCard
          label="Perfil"
          icon={
            <HowToRegIcon sx={{ fontSize: 60 }} htmlColor={colors.primary} />
          }
          onClick={() => navigate("/perfil")}
        />
        <MenuCard
          label="Clientes"
          icon={<PersonIcon sx={{ fontSize: 60 }} htmlColor={colors.primary} />}
          onClick={() => navigate("/clientes")}
        />
        <MenuCard
          label="Parâmetros"
          icon={<SettingsIcon sx={{ fontSize: 60 }} htmlColor={colors.primary} />}
          onClick={() => navigate("/parametros")}
        />
      </MenuWrapper>
    </Row>
  );
};

export default Menu;
