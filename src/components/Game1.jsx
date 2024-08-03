import { Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ClearIcon from "@mui/icons-material/Clear";
import SyncIcon from "@mui/icons-material/Sync";

import { useState } from "react";
const Game1 = () => {
  const [myAttack, setMyAttack] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [opponentAttack, setOpponentAttack] = useState(0);

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

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Stack direction="row" fullWidth spacing="auto" mt={2} mx={30}>
          {myAttack === "1" && (
            <img
              src="src\assets\game1\attack1.png"
              style={{ width: "100px" }}
            />
          )}
          {myAttack === "2" && (
            <img
              src="src\assets\game1\attack2.png"
              style={{ width: "100px" }}
            />
          )}
          {myAttack === "3" && (
            <img
              src="src\assets\game1\attack3.png"
              style={{ width: "100px" }}
            />
          )}
          {myAttack === "" && (
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
        {disabled && <Typography variant="h6">Carregando...</Typography>}
        {!disabled && <Typography variant="h6">{winner}</Typography>}
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" fullWidth spacing="auto" mt={2} mx={10}>
          <Paper
            sx={{
              backgroundColor: "red",
              width: "100px",
              height: "100px",
            }}
          />
          <IconButton
            onClick={() => {
              setMyAttack("1");
              handleAttack();
            }}
            disabled={disabled}
          >
            <img
              src="src\assets\game1\attack1.png"
              style={{ width: "100px" }}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              setMyAttack("2");
              handleAttack();
            }}
            disabled={disabled}
          >
            <img
              src="src\assets\game1\attack2.png"
              style={{ width: "100px" }}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              setMyAttack("3");
              handleAttack();
            }}
            disabled={disabled}
          >
            <img
              src="src\assets\game1\attack3.png"
              style={{ width: "100px" }}
            />
          </IconButton>

          <Paper
            sx={{
              backgroundColor: "red",
              width: "100px",
              height: "100px",
            }}
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Escolha um ataque</Typography>
      </Grid>
    </Grid>
  );
};

export default Game1;
