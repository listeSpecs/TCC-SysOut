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

interface OS {
  id: string;
  marca: string;
  modelo: string;
  cliente: string;
  situacao: string;
  data_entrada: string;
  hora: string;
  n_serie: string;
  categoria: string;
  responsavel: string;
  defeito: string;
  resumo: string;
}

const ordemValues = {
  id: "",
  marca: "",
  modelo: "",
  cliente: "",
  situacao: "",
  data_entrada: "",
  hora: "",
  n_serie: "",
  categoria: "",
  responsavel: "",
  defeito: "",
  resumo: "",
};

const testeOrdens = [
  {
    id: "001",
    marca: "Acer",
    modelo: "Inspiron",
    cliente: "Caio Andradas",
    situacao: "Aguardando retirada",
    data_entrada: "27/03/2023",
    hora: "13:45",
    n_serie: "1484141577EA",
    categoria: "LAPTOP",
    responsavel: "Manoel",
    defeito: "Aquecimento e falha no teclado.",
    resumo:
      "Necessário realizar a troca dos coolers e troca do painel do teclado.",
  },
  {
    id: "002",
    marca: "HP",
    modelo: "Verdana",
    cliente: "Bruno Henrique",
    situacao: "Em análise",
    data_entrada: "30/03/2023",
    hora: "17:24",
    n_serie: "1444181597CD",
    categoria: "COMPUTADOR DE MESA",
    responsavel: "Manoel",
    defeito: "Limpeza",
    resumo: "Em análise",
  },
];

const ConsultarOS = (props: any) => {
  const [ordens, setOrdens] = useState<OS[]>(testeOrdens);
  const [ordemSelected, setOrdemSelected] = useState(ordemValues);

  useEffect(() => {
    //api.get("/os").then((resp) => setOrdens(resp.data));
  }, [ordemSelected]);

  if (!ordens.length) {
    return null;
  }

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/os/${id}`);
    } catch (error) {
      console.log(error);
    }
    setOrdemSelected(ordemValues);
  };

  if (ordemSelected.id) {
    return (
      <>
        <Header title="Consultar Ordem de Serviço" />

        <Wrapper>
          <Spacing size={8} />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => setOrdemSelected(ordemValues)}
          >
            Voltar
          </Button>

          <Row justify="center" style={{ alignItems: "center" }}>
            <div>
              <div>
                <Label bold color={colors.black}>
                  Data entrada:
                </Label>{" "}
                <Label color={colors.black}>{ordemSelected.data_entrada}</Label>
              </div>

              <Spacing size={4} />

              <div>
                <Label bold color={colors.black}>
                  Hora:
                </Label>{" "}
                <Label color={colors.black}>{ordemSelected.hora}</Label>
              </div>

              <Spacing size={4} />

              <div>
                <Label bold color={colors.black}>
                  Marca:
                </Label>{" "}
                <Label color={colors.black}>{ordemSelected.marca}</Label>
              </div>

              <Spacing size={4} />

              <div>
                <Label bold color={colors.black}>
                  Modelo:
                </Label>{" "}
                <Label color={colors.black}>{ordemSelected.modelo}</Label>
              </div>

              <Spacing size={4} />

              <div>
                <Label bold color={colors.black}>
                  Nº Série:
                </Label>{" "}
                <Label color={colors.black}>{ordemSelected.n_serie}</Label>
              </div>

              <Spacing size={4} />

              <div>
                <Label bold color={colors.black}>
                  Categoria:
                </Label>{" "}
                <Label color={colors.black}>{ordemSelected.categoria}</Label>
              </div>

              <Spacing size={4} />

              <div>
                <Label bold color={colors.black}>
                  Cliente:
                </Label>{" "}
                <Label color={colors.black}>{ordemSelected.cliente}</Label>
              </div>

              <Spacing size={4} />

              <div>
                <Label bold color={colors.black}>
                  Responsável:
                </Label>{" "}
                <Label color={colors.black}>{ordemSelected.responsavel}</Label>
              </div>

              <Spacing size={4} />

              <div>
                <Label bold block color={colors.black}>
                  Defeito relatado:
                </Label>{" "}
                <Label color={colors.black}>{ordemSelected.defeito}</Label>
              </div>

              <Spacing size={4} />

              <div>
                <Label bold block color={colors.black}>
                  Resumo técnico:
                </Label>{" "}
                <Label color={colors.black}>{ordemSelected.resumo}</Label>
              </div>

              <Spacing size={8} />

              <Button
                variant="contained"
                color="warning"
                size="large"
                onClick={() => handleDelete(ordemSelected.id.toString())}
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
      <Header title="Consultar Ordem de Serviço" />

      <Spacing size={14} />

      <Row justify="center">
        <Table sx={{ minWidth: 650, maxWidth: 1200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nº</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Situação</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordens.map((data) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell>{data.marca}</TableCell>
                <TableCell>{data.modelo}</TableCell>
                <TableCell>{data.cliente}</TableCell>
                <TableCell>{data.situacao}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => setOrdemSelected(data)}
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

export default ConsultarOS;
