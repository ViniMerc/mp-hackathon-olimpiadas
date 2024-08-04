import { useState } from "react";
import "./css/App.css";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import Cards from "./components/Cards";
import GlobalTheme from "./theme/GlobalTheme";
import MenuDialog from "./components/dialogs/MenuDialog";
import Game1 from "./components/Game1";
import RankDialog from "./components/dialogs/RankDialog";
import HowToPlayDialog from "./components/dialogs/HowToPlayDialog";

function App() {
  const [openMenuDialog, setOpenMenuDialog] = useState(false);
  const [openRankDialog, setOpenRankDialog] = useState(false);
  const [howToPlayDialog, setHowToPlayDialog] = useState(true);

  const [points, setPoints] = useState(0);

  const [disabled, setDisabled] = useState(false);

  const [gameOptions, setGameOptions] = useState({
    modality: "",
    country: "",
    pokemon: "",
  });

  return (
    <GlobalTheme>
      <img
        src="/logo.svg"
        style={{
          marginBottom: "20px",
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
                <Cards title="Modalidade" description={gameOptions.modality} />
                <Cards title="Pokemon" description={gameOptions.pokemon} />
                <Cards title="Medalhas" description="" avatar={points} />
              </Stack>
            </Grid>

            <Grid item xs={12} mt={2}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: "0px",
                  backgroundColor: "#F6F5F5",
                  width: "100%",
                  height: "350px",
                }}
              >
                {gameOptions.modality === "" ||
                gameOptions.country === "" ||
                gameOptions.pokemon === "" ? (
                  <Stack
                    direction="column"
                    spacing={2}
                    mt={2}
                    pt={15}
                    alignItems="center"
                  >
                    <Typography>
                      Selecione a modalidade, país e pokemon para começar
                    </Typography>
                    <Button
                      sx={{
                        maxWidth: "200px",
                      }}
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setOpenMenuDialog(true);
                      }}
                    >
                      Jogar
                    </Button>
                  </Stack>
                ) : (
                  <Game1
                    disabled={disabled}
                    setDisabled={setDisabled}
                    points={points}
                    setPoints={setPoints}
                  />
                )}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row-reverse" spacing={2} m={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setOpenMenuDialog(true);
                  }}
                  disabled={disabled}
                >
                  Menu
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    setHowToPlayDialog(true);
                  }}
                >
                  Como jogar
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    setOpenRankDialog(true);
                  }}
                >
                  Mural de Medalhas
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {openMenuDialog && (
        <MenuDialog
          open={openMenuDialog}
          setGameOptions={setGameOptions}
          gameOptions={gameOptions}
          onClose={() => {
            setOpenMenuDialog(false);
            if (gameOptions.pokemon !== "") {
              // pesquisa o sprite do pokemon e seta na image
            }
          }}
        />
      )}
      {openRankDialog && (
        <RankDialog
          open={openRankDialog}
          onClose={() => setOpenRankDialog(false)}
        />
      )}
      {howToPlayDialog && (
        <HowToPlayDialog
          open={howToPlayDialog}
          onClose={() => setHowToPlayDialog(false)}
        />
      )}
    </GlobalTheme>
  );
}

export default App;
