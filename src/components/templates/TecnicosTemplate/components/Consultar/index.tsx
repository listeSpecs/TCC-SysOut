import React, { useEffect, useState } from "react";
import { api } from "../../../../../api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Button } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../../../../Header";
import { Label, Row, Spacing, Wrapper } from "../../../../../styles/base";
import { colors } from "../../../../../global/styles/colors";

interface Tec {
  email: string;
  id: number;
  telefone: string;
  nome: string;
  rg: string;
  cpf: string;
  perfis: [];
}

const tecnicoValues = {
  id: 0,
  nome: "",
  cpf: "",
  rg: "",
  telefone: "",
  email: "",
  perfis: [],
};

const Consultar = (props: any) => {
  const [tecnicos, setTecnicos] = useState<Tec[]>([]);
  const [tecnicoSelected, setTecnicoSelected] = useState(tecnicoValues);

  useEffect(() => {
    api.get("/usuarios").then((resp) => setTecnicos(resp.data));
  }, [tecnicoSelected]);

  if (!tecnicos.length) {
    return null;
  }

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/usuarios/${id}`);
    } catch (error) {
      console.log(error);
    }
    setTecnicoSelected(tecnicoValues);
  };

  if (tecnicoSelected.id) {
    return (
      <>
        <Header title="Consultar Técnicos" />

        <Wrapper>
          <Spacing size={8} />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => setTecnicoSelected(tecnicoValues)}
          >
            Voltar
          </Button>

          <Row justify="center" style={{ alignItems: "center" }}>
            <div>
              <div>
                <Label bold size={24} color={colors.black}>
                  {tecnicoSelected.nome}
                </Label>
              </div>

              <Spacing size={4} />

              <div>
                <Label bold color={colors.black}>
                  CPF:
                </Label>{" "}
                <Label color={colors.black}>{tecnicoSelected.cpf}</Label>
              </div>

              <Spacing size={4} />

              <div>
                <Label bold color={colors.black}>
                  RG:
                </Label>{" "}
                <Label color={colors.black}>{tecnicoSelected.rg}</Label>
              </div>

              <Spacing size={4} />

              <div>
                <Label bold color={colors.black}>
                  Telefone:
                </Label>{" "}
                <Label color={colors.black}>{tecnicoSelected.telefone}</Label>
              </div>

              <Spacing size={4} />

              <div>
                <Label bold color={colors.black}>
                  Email:
                </Label>{" "}
                <Label color={colors.black}>{tecnicoSelected.email}</Label>
              </div>

              <Spacing size={8} />

              <Button
                variant="contained"
                color="warning"
                size="large"
                onClick={() => handleDelete(tecnicoSelected.id.toString())}
              >
                Deletar
              </Button>
            </div>
          </Row>
        </Wrapper>
      </>
    );
  }

  return (
    <>
      <Header title="Consultar Técnicos" />

      <Spacing size={14} />

      <Row justify="center">
        <Table sx={{ minWidth: 650, maxWidth: 1200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tecnicos.map((data) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell>{data.nome}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.telefone}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => setTecnicoSelected(data)}
                  >
                    Detalhes
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Row>
    </>
  );
};

export default Consultar;
