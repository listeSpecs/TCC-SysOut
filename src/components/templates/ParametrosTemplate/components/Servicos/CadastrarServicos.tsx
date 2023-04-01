import { Button, TextField } from "@mui/material";
import React from "react";
import {
  Column,
  FormWrapper,
  Spacing,
  Wrapper,
} from "../../../../../styles/base";
import Header from "../../../../Header";

const CadastrarServicos = () => {
  return (
    <>
      <Header title="Serviços e Valores" />

      <Wrapper>
        <Column justify="center">
          <Spacing size={14} />

          <FormWrapper>
            <TextField
              fullWidth
              id="nome"
              label="Nome"
              variant="outlined"
              size="small"
              onChange={({ target }) => console.log(target.value)}
            />

            <Spacing size={8} />

            <TextField
              fullWidth
              id="nome"
              label="Descrição"
              variant="outlined"
              size="small"
              onChange={({ target }) => console.log(target.value)}
            />

            <Spacing size={8} />

            <TextField
              fullWidth
              id="nome"
              label="Valor R$"
              variant="outlined"
              size="small"
              onChange={({ target }) => console.log(target.value)}
            />

            <Spacing size={8} />

            <div style={{ display: "flex", flex: 1 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => console.log('oi')}
                sx={{
                  flex: 1,
                }}
              >
                Cadastrar
              </Button>
            </div>
          </FormWrapper>
        </Column>
      </Wrapper>
    </>
  );
};

export default CadastrarServicos;
