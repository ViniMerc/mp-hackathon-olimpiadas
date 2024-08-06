/* eslint-disable react/prop-types */
import {
  Autocomplete,
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
// import listPokemons from "../../services/listPokemons";
// import listModalities from "../../services/listModalities";
// import listCountries from "../../services/listCountries";

const MenuDialog = ({ open, onClose, setGameOptions, gameOptions }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [modalityList, setModalityList] = useState([]);
  const [countryList, setCountryList] = useState([]);

  const [openValidateSnackbar, setOpenValidateSnackbar] = useState(false);

  useEffect(() => {
    if (!open) return;
    setCountryList([
      {
        name: "Brasil",
        id: 1,
      },
      {
        name: "Japão",
        id: 2,
      },
    ]);
    setModalityList([
      {
        name: "Atletismo",
        id: 1,
      },
      {
        name: "Natação",
        id: 2,
      },
    ]);
    setPokemonList([
      {
        name: "bulbasaur",
        id: 1,
      },
      {
        name: "Ivysaur",
        id: 2,
      },
    ]);
    // listPokemons().then((response) => {
    //   console.log(response);
    //   setPokemonList(response.data.results);
    // });
    // listModalities().then((response) => {
    //   console.log(response);
    //   setModalityList(response.data.data);
    // });
    // listCountries().then((response) => {
    //   console.log(response);
    //   setCountryList(response.data.data);
    // });
  }, [open]);

  const handleValidate = () => {
    if (
      gameOptions.modality === "" ||
      gameOptions.country === "" ||
      gameOptions.pokemon === ""
    ) {
      setOpenValidateSnackbar(true);
    } else {
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Menu</DialogTitle>
      <Stack direction="column" spacing={2} m={2} width={450}>
        <FormControl fullWidth>
          <InputLabel>Escolha a modalidade</InputLabel>
          <Select
            label="Escolha a modalidade"
            value={gameOptions.modality}
            onChange={(event) =>
              setGameOptions((prev) => ({
                ...prev,
                modality: event.target.value,
              }))
            }
          >
            {modalityList.map((modality) => (
              <MenuItem key={modality.id} value={modality.name}>
                {modality.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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

        <FormControl fullWidth>
          <InputLabel>Escolha o país</InputLabel>
          <Select
            label="Escolha o país"
            value={gameOptions.country}
            onChange={(event) =>
              setGameOptions((prev) => ({
                ...prev,
                country: event.target.value,
              }))
            }
          >
            {countryList.map((country) => (
              <MenuItem key={country.id} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
          <Button variant="text" color="primary" onClick={onClose}>
            Fechar
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
