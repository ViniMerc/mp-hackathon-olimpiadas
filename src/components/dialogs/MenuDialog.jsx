/* eslint-disable react/prop-types */
import {
  Autocomplete,
  Button,
  Dialog,
  DialogTitle,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import listPokemons from "../../services/listPokemons";
import listModalities from "../../services/listModalities";

const MenuDialog = ({ open, onClose, setGameOptions, gameOptions }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [modalityList, setModalityList] = useState([]);

  const [openValidateSnackbar, setOpenValidateSnackbar] = useState(false);

  useEffect(() => {
    if (!open) return;
    listPokemons().then((response) => {
      setPokemonList(response.data.results);
    });
    listModalities().then((response) => {
      setModalityList(response.data.data);
    });
  }, [open]);

  const handleValidate = () => {
    if (gameOptions.modality === "" || gameOptions.pokemon === "") {
      setOpenValidateSnackbar(true);
    } else {
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Menu</DialogTitle>
      <Stack direction="column" spacing={2} m={2} width={450}>
        <Autocomplete
          value={{
            name: gameOptions.modality,
          }}
          onChange={(event, newValue) => {
            setGameOptions((prev) => ({
              ...prev,
              modality: newValue.name,
              modalityPicture: newValue.pictogram_url,
            }));
          }}
          options={modalityList}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Escolha a modalidade"
              variant="outlined"
            />
          )}
        />

        <Autocomplete
          value={{
            name: gameOptions.pokemon,
          }}
          onChange={(event, newValue) => {
            setGameOptions((prev) => ({
              ...prev,
              pokemon: newValue.name,
            }));
          }}
          options={pokemonList}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Escolha o pokemon"
              variant="outlined"
            />
          )}
        />

        <Stack direction="row-reverse" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleValidate();
            }}
          >
            Salvar
          </Button>
        </Stack>
      </Stack>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openValidateSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenValidateSnackbar(false)}
        message="Preencha todos os campos!"
      />
    </Dialog>
  );
};

export default MenuDialog;
