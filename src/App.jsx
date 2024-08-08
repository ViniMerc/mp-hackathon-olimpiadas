import { useState } from "react";
import "./css/App.css";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import Cards from "./components/Cards";
import GlobalTheme from "./theme/GlobalTheme";
import MenuDialog from "./components/dialogs/MenuDialog";
import Game1 from "./components/Game1";
import RankDialog from "./components/dialogs/RankDialog";
import HowToPlayDialog from "./components/dialogs/HowToPlayDialog";
import listPokemonsSprite from "./services/listPokemonsSprite";
import ReferencesDialog from "./components/dialogs/ReferencesDialog";

function App() {
  const [dialogs, setDialogs] = useState({
    menu: false,
    rank: false,
    howToPlay: true,
  });

  const handleDialogs = (dialog) => {
    setDialogs({
      ...dialogs,
      [dialog]: !dialogs[dialog],
    });
  };

  const [pokeSprite, setPokeSprite] = useState("");

  const [points, setPoints] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [gameOptions, setGameOptions] = useState({
    modality: "",
    modalityPicture: "",
    pokemon: "",
    references: "",
  });

  return (
    <GlobalTheme>
      <img
        src="/logo.svg"
        style={{
          marginBottom: "40px",
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
                <Cards
                  title="Modalidade"
                  description={gameOptions.modality}
                  avatar={gameOptions.modalityPicture}
                />
                <Cards
                  title="Pokemon"
                  description={gameOptions.pokemon}
                  avatar={pokeSprite}
                />
                <Cards
                  title="Medalhas Pokemon"
                  description=""
                  points={points}
                />
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
                        handleDialogs("menu");
                      }}
                    >
                      Jogar
                    </Button>
                  </Stack>
                ) : (
                  <Game1
                    disabled={disabled}
                    setDisabled={setDisabled}
                    setPoints={setPoints}
                    sprite={pokeSprite}
                  />
                )}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row-reverse" spacing={2} mb={2} mr={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleDialogs("menu");
                  }}
                  disabled={disabled}
                >
                  Menu
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    handleDialogs("howToPlay");
                  }}
                >
                  Como jogar
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    handleDialogs("rank");
                  }}
                >
                  Mural de Medalhas
                </Button>
                <Button
                  variant="text"
                  color="secondary"
                  onClick={() => {
                    handleDialogs("references");
                  }}
                >
                  Referências
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {dialogs.menu && (
        <MenuDialog
          open={dialogs.menu}
          setGameOptions={setGameOptions}
          gameOptions={gameOptions}
          onClose={() => {
            handleDialogs("menu");
            if (gameOptions.pokemon !== "") {
              listPokemonsSprite(gameOptions.pokemon).then((response) => {
                setPokeSprite(response.data.sprites.front_default);
              });
            }
          }}
        />
      )}
      {dialogs.rank && (
        <RankDialog
          open={dialogs.rank}
          onClose={() => {
            handleDialogs("rank");
          }}
          points={points}
        />
      )}
      {dialogs.howToPlay && (
        <HowToPlayDialog
          open={dialogs.howToPlay}
          onClose={() => handleDialogs("howToPlay")}
        />
      )}
      {dialogs.references && (
        <ReferencesDialog
          open={dialogs.references}
          onClose={() => handleDialogs("references")}
        />
      )}
    </GlobalTheme>
  );
}

export default App;
