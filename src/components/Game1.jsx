/* eslint-disable react/prop-types */
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ClearIcon from "@mui/icons-material/Clear";
import SyncIcon from "@mui/icons-material/Sync";
import Snackbar from "@mui/material/Snackbar";

import { useEffect, useState } from "react";
import { Handshake } from "@mui/icons-material";
const Game1 = ({ disabled, setDisabled, setPoints, sprite }) => {
  const [myAttack, setMyAttack] = useState(-1);
  const [opponentAttack, setOpponentAttack] = useState(-1);
  const [hideSnackbar, setHideSnackbar] = useState(false);
  const [randomSprite, setRandomSprite] = useState(0);

  const winner =
    myAttack > opponentAttack
      ? "Você venceu!"
      : myAttack === opponentAttack
      ? "Empate!"
      : "Você perdeu!";

  const handleAttack = () => {
    setDisabled(true);
    // show loafing
    setTimeout(() => {
      setOpponentAttack(Math.floor(Math.random() * 3) + 1);
      setDisabled(false);
    }, 1200);
  };

  useEffect(() => {
    if (winner === "Você venceu!") {
      setPoints((prevPoints) => prevPoints + 1);
      setRandomSprite(Math.floor(Math.random() * 151) + 1);
      setHideSnackbar(true);
    }
  }, [setPoints, winner]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Stack direction="row" fullWidth spacing="auto" mt={2} mx={30}>
          {myAttack === 1 && (
            <img
              src="src\assets\game1\attack1.png"
              style={{ width: "100px" }}
            />
          )}
          {myAttack === 2 && (
            <img
              src="src\assets\game1\attack2.png"
              style={{ width: "100px" }}
            />
          )}
          {myAttack === 3 && (
            <img
              src="src\assets\game1\attack3.png"
              style={{ width: "100px" }}
            />
          )}
          {myAttack === 0 && (
            <HelpOutlineIcon
              sx={{
                fontSize: 100,
              }}
            />
          )}
          {disabled === true && <SyncIcon sx={{ fontSize: 100 }} />}

          {!disabled && winner === "Você venceu!" && (
            <EmojiEventsIcon sx={{ fontSize: 100 }} />
          )}
          {!disabled && winner === "Você perdeu!" && (
            <ClearIcon sx={{ fontSize: 100 }} />
          )}

          {!disabled &&
            winner === "Empate!" &&
            myAttack !== -1 &&
            opponentAttack !== -1 && <Handshake sx={{ fontSize: 100 }} />}

          {opponentAttack === 1 && (
            <img
              src="src\assets\game1\attack1.png"
              style={{ width: "100px" }}
            />
          )}
          {opponentAttack === 2 && (
            <img
              src="src\assets\game1\attack2.png"
              style={{ width: "100px" }}
            />
          )}
          {opponentAttack === 3 && (
            <img
              src="src\assets\game1\attack3.png"
              style={{ width: "100px" }}
            />
          )}
          {opponentAttack === 0 && (
            <HelpOutlineIcon
              sx={{
                fontSize: 100,
              }}
            />
          )}
        </Stack>
      </Grid>
      <Grid item xs={12}>
        {disabled && <Typography variant="h6">Competindo...</Typography>}
        {!disabled && (
          <Typography variant="h6">
            {myAttack === -1 ? "Escolha um ataque" : winner}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" fullWidth spacing="auto" mt={2} mx={8}>
          <img src={sprite} style={{ width: "150px", height: "150px" }} />
          <IconButton
            onClick={() => {
              setMyAttack(1);
              handleAttack();
            }}
            disabled={disabled}
          >
            <img src="src\assets\game1\attack1.png" style={{ width: "80px" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              setMyAttack(2);
              handleAttack();
            }}
            disabled={disabled}
          >
            <img src="src\assets\game1\attack2.png" style={{ width: "80px" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              setMyAttack(3);
              handleAttack();
            }}
            disabled={disabled}
          >
            <img src="src\assets\game1\attack3.png" style={{ width: "80px" }} />
          </IconButton>

          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomSprite}.png`}
            style={{ width: "150px", height: "150px" }}
          />
        </Stack>
      </Grid>

      <Snackbar
        open={hideSnackbar}
        autoHideDuration={2500}
        onClose={() => setHideSnackbar(false)}
        message="+1 Medalha Pokemon!"
      />
    </Grid>
  );
};

export default Game1;
