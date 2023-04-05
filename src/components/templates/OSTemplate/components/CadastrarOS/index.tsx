import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  Column,
  FormWrapper,
  Label,
  Spacing,
  Wrapper,
} from "../../../../../styles/base";
import Header from "../../../../Header";

const CadastrarOS = () => {
  return (
    <div>
      <>
        <Header title="Cadastrar Ordem de Serviço" />

        <Wrapper>
          <Column justify="center">
            <Spacing size={14} />

            <FormWrapper>
              <TextField
                fullWidth
                id="cliente"
                label="Cliente"
                variant="outlined"
                size="small"
                onChange={({ target }) => console.log(target.value)}
              />

              <Spacing size={8} />

              <TextField
                fullWidth
                id="marca"
                label="Marca"
                variant="outlined"
                size="small"
                onChange={({ target }) => console.log(target.value)}
              />

              <Spacing size={8} />

              <TextField
                fullWidth
                id="modelo"
                label="Modelo"
                variant="outlined"
                size="small"
                onChange={({ target }) => console.log(target.value)}
              />

              <Spacing size={8} />

              <TextField
                fullWidth
                id="n_serie"
                label="Nº de série"
                variant="outlined"
                size="small"
                onChange={({ target }) => console.log(target.value)}
              />

              <Spacing size={8} />

              <FormControl fullWidth>
                <InputLabel id="categoria">Categoria</InputLabel>
                <Select
                  labelId="categoria"
                  id="select_categoria"
                  label="Categoria"
                  onChange={({ target }) => console.log(target.value)}
                  value={"Oe"}
                >
                  <MenuItem value="sim">SP</MenuItem>
                  <MenuItem value="nao">RJ</MenuItem>
                </Select>
              </FormControl>

              <Spacing size={8} />

              <TextField
                fullWidth
                id="defeito"
                label="Defeito relatado"
                variant="outlined"
                size="small"
                multiline
                rows={4}
                onChange={({ target }) => console.log(target.value)}
              />

              <Spacing size={8} />

              <TextField
                fullWidth
                id="observacao"
                label="Observação"
                variant="outlined"
                size="small"
                multiline
                rows={4}
                onChange={({ target }) => console.log(target.value)}
              />

              <Spacing size={8} />

              <FormControl fullWidth>
                <InputLabel id="acessorios">Acessórios</InputLabel>
                <Select
                  labelId="acessorios"
                  id="select_acessorios"
                  label="Acessórios"
                  onChange={({ target }) => console.log(target.value)}
                  value={"Oe"}
                >
                  <MenuItem value="sim">SP</MenuItem>
                  <MenuItem value="nao">RJ</MenuItem>
                </Select>
              </FormControl>

              <Spacing size={8} />

              <div style={{ display: "flex", flex: 1 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => console.log("oi")}
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
    </div>
  );
};

export default CadastrarOS;
