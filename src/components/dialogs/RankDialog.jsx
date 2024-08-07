/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import listCountries from "../../services/listCountries";

const RankDialog = ({ open, onClose, points }) => {
  const [countryList, setCountryList] = useState([]);

  const columns = [
    { id: "rank", label: "Rank", minWidth: 80, align: "center" },
    { id: "flag_url", label: "País", minWidth: 80 },
    { id: "gold_medals", label: "Ouro", minWidth: 80, align: "center" },
    { id: "silver_medals", label: "Prata", minWidth: 80, align: "center" },
    { id: "bronze_medals", label: "Bronze", minWidth: 80, align: "center" },
    {
      id: "pokeNumbers",
      label: "Medalhas Pokemon",
      minWidth: 80,
      align: "center",
    },
    {
      id: "total_medals",
      label: "Total ",
      minWidth: 80,
      align: "center",
    },
  ];

  const rows = countryList;

  useEffect(() => {
    if (!open) return;

    listCountries().then((response) => {
      setCountryList(
        response.data.data.map((country) => ({
          ...country,
          pokeNumbers:
            country.id === "BRA" ? points : Math.floor(Math.random() * 3),
        }))
      );
    });
  }, [open, points]);

  const orderedRowsByTotalMedals = rows.sort(
    (a, b) => b.total_medals + b.pokeNumbers - (a.total_medals + a.pokeNumbers)
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xl">
      <DialogTitle>Quadro de medalhas</DialogTitle>
      <DialogContent
        sx={{
          width: 1000,
        }}
      >
        <TableContainer
          sx={{
            maxHeight: 600,
            minHeight: 600,
            width: 998,
            border: "1px solid #F6F5F5",
          }}
        >
          <Table>
            <TableHead
              sx={{
                backgroundColor: "#F6F5F5",
              }}
            >
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                    }}
                  >
                    <Typography fontSize={16}>{column.label}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orderedRowsByTotalMedals.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor:
                      row.name === "Brasil" ? "#FFD700" : "white",
                  }}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    if (column.id === "flag_url") {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Stack direction="row" spacing={2}>
                            <img
                              src={`${row.flag_url}`}
                              alt={row.name}
                              style={{ width: 30, height: 20 }}
                            />{" "}
                            <Typography fontSize={14}>{row.name}</Typography>
                          </Stack>
                        </TableCell>
                      );
                    }
                    if (column.id === "total_medals") {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {row.total_medals + row.pokeNumbers}
                        </TableCell>
                      );
                    }
                    if (column.id === "rank") {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {orderedRowsByTotalMedals.indexOf(row) + 1}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack direction="row-reverse" spacing={2} m={2}>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Voltar
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default RankDialog;
