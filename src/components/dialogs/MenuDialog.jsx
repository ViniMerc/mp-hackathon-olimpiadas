/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

const MenuDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Menu</DialogTitle>
      <Stack direction="column" spacing={2} m={2} width={450}>
        <FormControl fullWidth>
          <InputLabel>Escolha a modalidade</InputLabel>
          <Select label="Escolha a modalidade">
            <MenuItem value="1">Corrida</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Escolha o pokemon</InputLabel>
          <Select label="Escolha o pokemon">
            <MenuItem value="1">Pikachu</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Escolha o país</InputLabel>
          <Select label="Escolha o país">
            <MenuItem value="1">Brasil</MenuItem>
          </Select>
        </FormControl>
        <Stack direction="row-reverse" spacing={2}>
          <Button variant="contained" color="primary" onClick={onClose}>
            Salvar
          </Button>
          <Button variant="text" color="primary" onClick={onClose}>
            Fechar
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default MenuDialog;
