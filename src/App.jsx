import { useState } from "react";
import "./App.css";
import { Button, Dialog, Grid, Paper, Select, Stack, Typography } from "@mui/material";

function App() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Typography variant="h2" align="center" color="white" mb={6}>
        {" "}
        PokéOlympics{" "}
      </Typography>
      <Grid container spacing={2}>
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "green",
            width: "800px",
            height: "600px",
          }}
        >
          <Grid container spacing={2}>
            {/*Stack of buttons like a row in the top of the paper*/}
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} mt={2} ml={2}>
                <button>Modalidade</button>
                <button>Pais</button>
                <button>Pokemon</button>
              </Stack>
            </Grid>
            {/** A empty block that will contains some data later  */}
            <Grid item xs={12}>
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: "white",
                  width: "400px",
                  height: "400px",
                }}
              ></Paper>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} mt={2} ml={2}>
                <Button variant="contained" color="primary">
                  Jogar
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setOpenDialog(true)}
                >
                  Menu
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {openDialog && (
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}   >
            {/* a column stack with 4 select fields and a button  */}
          <Stack direction="column" spacing={2} m={2} width={450} height={600}>
            <Select label="Modalidades" />
            <Select label="Escolher pokemon" />
            <Select label="Escolher país" />
 
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setOpenDialog(false)}
            >
              Fechar
            </Button>
            <Typography variant="h6" align="center" color="white">
              Como Jogar
            </Typography>
          </Stack>
        </Dialog>
      )}
    </>
  );
}

export default App;
