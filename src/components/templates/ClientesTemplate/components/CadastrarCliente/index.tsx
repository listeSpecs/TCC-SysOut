import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Column, FormWrapper, Row, Spacing, Wrapper } from "../../../../../styles/base";
import Header from "../../../../Header";

const CadastrarCliente = () => {
  return (
    <>
      <Header title="Cadastro Cliente" />

      <Wrapper>
        <Column justify="center">
          <Spacing size={14} />

          <FormWrapper>
            <Row>
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
                id="cnpj"
                label="CNPJ"
                variant="outlined"
                size="small"
                onChange={({ target }) => console.log(target.value)}
              />
            </Row>

            <Spacing size={8} />

            <Row>
              <TextField
                fullWidth
                id="rg"
                label="RG"
                variant="outlined"
                size="small"
                onChange={({ target }) => console.log(target.value)}
              />

              <Spacing size={8} />

              <TextField
                fullWidth
                id="cep"
                label="CEP"
                variant="outlined"
                size="small"
                onChange={({ target }) => console.log(target.value)}
              />
            </Row>

            <Spacing size={8} />

            <Row>
              <TextField
                fullWidth
                id="cpf"
                label="CPF"
                variant="outlined"
                size="small"
                onChange={({ target }) => console.log(target.value)}
              />

              <Spacing size={8} />

              <TextField
                fullWidth
                id="endereco"
                label="Endereço"
                variant="outlined"
                size="small"
                onChange={({ target }) => console.log(target.value)}
              />
            </Row>

            <Spacing size={8} />

            <Row>
              <TextField
                fullWidth
                id="telefone"
                label="Telefone"
                variant="outlined"
                size="small"
                onChange={({ target }) => console.log(target.value)}
              />

              <Spacing size={8} />

              <FormControl fullWidth>
                <InputLabel id="destado">Estado</InputLabel>
                <Select
                  labelId="estado"
                  id="select_estado"
                  label="Estado"
                  onChange={({ target }) => console.log(target.value)}
                  value={"Oe"}
                >
                  <MenuItem value="sim">SP</MenuItem>
                  <MenuItem value="nao">RJ</MenuItem>
                </Select>
              </FormControl>
            </Row>

            <Spacing size={8} />

            <Row>
              <TextField
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                onChange={({ target }) => console.log(target.value)}
              />

              <Spacing size={8} />

              <TextField
                fullWidth
                id="cidade"
                label="Cidade"
                variant="outlined"
                size="small"
                onChange={({ target }) => console.log(target.value)}
              />
            </Row>

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
  );
};

export default CadastrarCliente;
