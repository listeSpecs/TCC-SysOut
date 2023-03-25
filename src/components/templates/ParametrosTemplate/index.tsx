import React from "react";
import { Wrapper } from "../../../styles/base";
import Header from "../../Header";
import MenuGenerico from "../../MenuGenerico";
import MenuParametros from "../../MenuParametros";

const ParametrosTemplate = () => {
  return (
    <>
      <Header title="Parametros do Sistema" />

      <Wrapper>
        <MenuParametros />
      </Wrapper>
    </>
  );
};

export default ParametrosTemplate;
