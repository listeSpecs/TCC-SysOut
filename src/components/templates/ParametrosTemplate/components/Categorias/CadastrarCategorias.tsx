import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import { Column, FormWrapper, Spacing, Wrapper } from "../../../../../styles/base";
import Header from "../../../../Header";

const CadastrarCategorias = () => {
  return (
    <>
      <Header title="Acessórios" />

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

export default CadastrarCategorias;
