/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogTitle,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const HowToPlayDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Bem vindo!</DialogTitle>
      
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        pb={2}
        mb={1}
      >
        <Grid item mx={4}>
          <Stack direction="column" spacing={2} alignItems="center">
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
              }}
            >
              Os pokemons invadiram as olimpíadas e você precisa ajudar o
              Brasil!
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
              }}
            >
              Seu objetivo é conquistar medalhas nas competiçoes Pokemon e
              chegar ao topo da classificação!
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
              }}
            >
              Vença selecionando suas habilidades e não se esqueça de conferir o
              quadro de medalhas para ver se o Brasil consegiu alcançar o pódio!
            </Typography>
            <Typography variant="body1">Boa sorte!</Typography>
          </Stack>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={onClose}>
            Começar!
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default HowToPlayDialog;
