import React from "react";
import { Wrapper } from "../../../styles/base";
import Header from "../../Header";
import MenuGenerico from "../../MenuGenerico";

const OSTemplate = () => {
  return (
    <>
      <Header title="Ordem de Serviço" />

      <Wrapper>
        <MenuGenerico />
      </Wrapper>
    </>
  );
};

export default OSTemplate;
