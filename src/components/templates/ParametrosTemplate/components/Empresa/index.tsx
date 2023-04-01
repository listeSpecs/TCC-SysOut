import React from "react";
import { Wrapper } from "../../../../../styles/base";
import Header from "../../../../Header";
import MenuGenerico from "../../../../MenuGenerico";

const Empresa = () => {
  return (
    <>
      <Header title="Informações da Empresa" />

      <Wrapper>
        <MenuGenerico />
      </Wrapper>
    </>
  );
};

export default Empresa;
