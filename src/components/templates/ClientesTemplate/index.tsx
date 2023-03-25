import React from "react";
import { Wrapper } from "../../../styles/base";
import Header from "../../Header";
import MenuGenerico from "../../MenuGenerico";

const ClientesTemplate = () => {
  return (
    <>
      <Header title="Clientes" />

      <Wrapper>
        <MenuGenerico />
      </Wrapper>
    </>
  );
};

export default ClientesTemplate;
