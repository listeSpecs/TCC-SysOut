import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import { Column, Row, Spacing } from "../../styles/base";
import { TecnicosContainer } from "./styles";

// TODO VALIDAÇÕES

const defaultValues = {
  login: "",
  senha: "",
  repetirSenha: "",
  perfis: "sim",
  nome: "",
  cpf: "",
  rg: "",
  email: "",
  telefone: "",
};

const TecnicosForm = (props: any) => {
  const [values, setValues] = useState(defaultValues);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await api.post("/usuarios", {
        login: values.login,
        senha: values.senha,
        perfis: values.perfis === "sim" ? [1, 2] : [1],
        nome: values.nome,
        cpf: values.cpf,
        rg: values.rg,
        email: values.email,
        telefone: values.telefone,
      });

      navigate('/tecnicos');
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Column justify="center">
      <Spacing size={14} />

      <TecnicosContainer>
        <TextField
          fullWidth
          id="nome"
          label="Nome Completo"
          variant="outlined"
          size="small"
          onChange={({ target }) =>
            setValues({
              ...values,
              nome: target.value,
            })
          }
        />

        <Spacing size={8} />

        <Row>
          <TextField
            fullWidth
            id="rg"
            label="RG"
            variant="outlined"
            size="small"
            onChange={({ target }) =>
              setValues({
                ...values,
                rg: target.value,
              })
            }
          />

          <Spacing size={8} />

          <TextField
            fullWidth
            id="cpf"
            label="CPF"
            variant="outlined"
            size="small"
            onChange={({ target }) =>
              setValues({
                ...values,
                cpf: target.value,
              })
            }
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
            onChange={({ target }) =>
              setValues({
                ...values,
                telefone: target.value,
              })
            }
          />

          <Spacing size={8} />

          <TextField
            fullWidth
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            onChange={({ target }) =>
              setValues({
                ...values,
                email: target.value,
              })
            }
          />
        </Row>

        <Spacing size={8} />

        <Row>
          <TextField
            fullWidth
            id="login"
            label="Login"
            variant="outlined"
            size="small"
            onChange={({ target }) =>
              setValues({
                ...values,
                login: target.value,
              })
            }
          />
        </Row>

        <Spacing size={8} />

        <Row>
          <TextField
            fullWidth
            id="senha"
            label="Senha"
            variant="outlined"
            size="small"
            type="password"
            onChange={({ target }) =>
              setValues({
                ...values,
                senha: target.value,
              })
            }
          />

          <Spacing size={8} />

          <TextField
            fullWidth
            id="repetir-senha"
            label="Repetir Senha"
            variant="outlined"
            size="small"
            type="password"
            onChange={({ target }) =>
              setValues({
                ...values,
                repetirSenha: target.value,
              })
            }
          />
        </Row>

        <Spacing size={8} />

        <FormControl fullWidth>
          <InputLabel id="admin">Admin</InputLabel>
          <Select
            labelId="admin"
            id="select_admin"
            label="Admin"
            onChange={({ target }) =>
              setValues({
                ...values,
                perfis: target.value,
              })
            }
            value={values.perfis}
          >
            <MenuItem value="sim">Sim</MenuItem>
            <MenuItem value="nao">Não</MenuItem>
          </Select>
        </FormControl>

        <Spacing size={8} />

        <div style={{ display: "flex", flex: 1 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => handleSubmit()}
            sx={{
              flex: 1,
            }}
          >
            Cadastrar
          </Button>
        </div>
      </TecnicosContainer>
    </Column>
  );
};

export default TecnicosForm;
