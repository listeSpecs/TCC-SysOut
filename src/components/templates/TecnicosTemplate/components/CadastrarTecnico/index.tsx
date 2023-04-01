import React from "react";
import Header from "../../../../Header";
import { Wrapper } from "../../../../../styles/base";
import MenuGenerico from "../../../../MenuGenerico";
import TecnicosForm from "../../../../TecnicosForm";

const CadastrarTecnico = (props: any) => {
  return (
    <>
      <Header title="Cadastrar Técnico" />

      <Wrapper>
        <TecnicosForm />
      </Wrapper>
    </>
  );
};

export default CadastrarTecnico;
