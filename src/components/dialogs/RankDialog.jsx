/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const RankDialog = ({ open, onClose }) => {
  const columns = [
    { id: "name", label: "País", minWidth: 80 },
    { id: "goldMedals", label: "Ouro", minWidth: 80, align: "center" },
    { id: "silverMedals", label: "Prata", minWidth: 80, align: "center" },
    { id: "bronzeMedals", label: "Bronze", minWidth: 80, align: "center" },
    {
      id: "pokeNumbers",
      label: "Medalhas Pokemon",
      minWidth: 80,
      align: "center",
    },
    {
      id: "total",
      label: "Total ",
      minWidth: 80,
      align: "center",
    },
  ];

  const rows = [
    {
      name: "Brasil",
      goldMedals: 12,
      silverMedals: 2,
      bronzeMedals: 2,
      pokeNumbers: 23,
      total: 36,
    },
    {
      name: "Japão",
      goldMedals: 10,
      silverMedals: 5,
      bronzeMedals: 3,
      pokeNumbers: 20,
      total: 38,
    },
    {
      name: "Estados Unidos",
      goldMedals: 8,
      silverMedals: 6,
      bronzeMedals: 5,
      pokeNumbers: 15,
      total: 34,
    },
    {
      name: "Alemanha",
      goldMedals: 6,
      silverMedals: 8,
      bronzeMedals: 4,
      pokeNumbers: 10,
      total: 28,
    },
    {
      name: "China",
      goldMedals: 4,
      silverMedals: 10,
      bronzeMedals: 6,
      pokeNumbers: 5,
      total: 25,
    },
  ];

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Quadro de medalhas</DialogTitle>
      <TableContainer
        sx={{
          maxHeight: 300,
        }}
      >
        <Table sx={{ minWidth: 200 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{}}>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.goldMedals}</TableCell>
                <TableCell align="center">{row.silverMedals}</TableCell>
                <TableCell align="center">{row.bronzeMedals}</TableCell>
                <TableCell align="center">{row.pokeNumbers}</TableCell>
                <TableCell align="center">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row-reverse" spacing={2} m={2}>
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Fechar
        </Button>
      </Stack>
    </Dialog>
  );
};

export default RankDialog;
