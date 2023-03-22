import React from "react";
import { Button, TextField } from "@mui/material";
import { Spacing } from "../../../styles/base";
import { LoginContainer } from "./styles";
import { flexbox } from "@mui/system";

// TODO CRIAR BOTÕES LINKS PARA RECUPERAR SENHA E RECUPERAR ACESSO
// TODO LIMPAR CSS INLINE E TRANSFORMAR EM COMPONENTES OU CLASSES

const LoginForm = (props: any) => {
  console.log('oi', props);
  return (
    <LoginContainer>
      <TextField
        fullWidth
        id="email"
        label="Usuário"
        variant="outlined"
        size="small"
      />

      <Spacing size={8} />

      <TextField
        fullWidth
        id="senha"
        label="Senha"
        variant="outlined"
        size="small"
        type="password"
      />

      <Spacing size={16} />

      <div style={{ display: "flex", flex: 1 }}>
        <Button
          variant="contained"
          size="large"
          onClick={props.handleLogin}
          sx={{
            flex: 1,
          }}
        >
          Entrar
        </Button>
      </div>

      <Spacing size={8} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Recuperar Senha</span>
        <span>Recuperar Acesso</span>
      </div>
    </LoginContainer>
  );
};

export default LoginForm;
