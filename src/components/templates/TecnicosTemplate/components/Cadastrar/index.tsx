import React from "react";
import Header from "../../../../organisms/Header";
import { Wrapper } from "../../../../../styles/base";
import MenuTecnicos from "../../../../molecules/MenuTecnicos";
import TecnicosForm from "../../../../molecules/TecnicosForm";

const Cadastrar = (props: any) => {
  return (
    <>
      <Header title="Cadastrar Técnico" />

      <Wrapper>
        <TecnicosForm />
      </Wrapper>
    </>
  );
};

export default Cadastrar;
