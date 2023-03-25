import React from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MenuCard from "../MenuCard";
import { colors } from "../../global/styles/colors";
import { Row } from "../../styles/base";
import { useNavigate } from "react-router-dom";
import { MenuWrapper } from "./style";

const MenuGenerico = (props: any) => {
  const navigate = useNavigate();

  return (
    <Row justify="center">
      <MenuWrapper>
        <MenuCard
          label="Cadastrar"
          icon={
            <AddIcon sx={{ fontSize: 60 }} htmlColor={colors.primary} />
          }
          onClick={() => navigate('cadastrar')}
        />
        <MenuCard
          label="Consultar"
          icon={
            <SearchIcon sx={{ fontSize: 60 }} htmlColor={colors.primary} />
          }
          onClick={() => navigate('consultar')}
        />
      </MenuWrapper>
    </Row>
  );
};

export default MenuGenerico;
