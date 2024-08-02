import { useState } from "react";
import "./css/App.css";
import { Button, Grid, Paper, Stack } from "@mui/material";
import Cards from "./components/Cards";
import GlobalTheme from "./theme/GlobalTheme";
import MenuDialog from "./components/dialogs/MenuDialog";

function App() {
  const [openMenuDialog, setOpenMenuDialog] = useState(false);

  return (
    <GlobalTheme>
      <img
        src="src\assets\logo.svg"
        style={{
          marginBottom: "30px",
        }}
      />
      <Grid container spacing={2}>
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "white",
            width: "100%",
            height: "600px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack direction="row" fullWidth spacing={2} mt={2} ml={2} mr={2}>
                <Cards title="Modalidade" description="Corrida 100mts" />
                <Cards title="Pais" description="Brasil" />
                <Cards title="Pokemon" description="Pikachu" />
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "350px",
                }}
              ></Paper>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row-reverse" spacing={2} m={2}>
                <Button variant="contained" color="primary">
                  Jogar
                </Button>
                <Button variant="contained" color="secondary">
                  Como jogar
                </Button>
                <Button variant="contained" color="secondary">
                  Placar
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    setOpenMenuDialog(true);
                  }}
                >
                  Menu
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {openMenuDialog && (
        <MenuDialog
          open={openMenuDialog}
          onClose={() => {
            setOpenMenuDialog(false);
          }}
        />
      )}
    </GlobalTheme>
  );
}

export default App;
