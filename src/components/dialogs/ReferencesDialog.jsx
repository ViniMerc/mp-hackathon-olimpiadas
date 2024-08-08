/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogTitle,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";

const ReferencesDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Referências</DialogTitle>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        pb={2}
        mb={1}
      >
        <Grid item xs={12} mx={4}>
          <Stack direction="column" spacing={2} alignItems="left">
            <Typography variant="body1">
              Ferramentas utilizadas para criação do projeto:
            </Typography>
            <Link
              variant="body1"
              target="_blank"
              href="https://www.figma.com/design/OYNRggFx4LgChpm6kwzuAC/Prot%C3%B3tipo?node-id=0-1&t=X2r1Ez4moXKbrpf2-1"
            >
              Prototipação & Design Figma
            </Link>
            <Link
              variant="body1"
              target="_blank"
              href="https://mui.com/material-ui/"
            >
              Material UI
            </Link>
            <Link variant="body1" target="_blank" href="https://pokeapi.co/">
              PokeAPI
            </Link>
          </Stack>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={onClose}>
            Voltar
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ReferencesDialog;
