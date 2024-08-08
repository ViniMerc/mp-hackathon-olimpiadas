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
  const [myAttack, setMyAttack] = useState(0);
  const [opponentAttack, setOpponentAttack] = useState(0);
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
    setTimeout(() => {
      setOpponentAttack(Math.floor(Math.random() * 3) + 1);
      setDisabled(false);
    }, 1200);
  };

  useEffect(() => {
    if (winner === "Você venceu!") {
      setPoints((prevPoints) => prevPoints + 1);
      setRandomSprite(Math.floor(Math.random() * 151) + 1);
      setTimeout(() => setHideSnackbar(true), 1000);
    }
  }, [setPoints, winner]);

  const AttackIcon = ({ attack }) => {
    if (attack === 1 || attack === 2 || attack === 3) {
      return (
        <img
          src={`src/assets/game1/attack${attack}.png`}
          style={{ width: "100px" }}
          alt={`Attack ${attack}`}
        />
      );
    }
    return <HelpOutlineIcon sx={{ fontSize: 100 }} />;
  };

  const ResultIcon = ({ winner, disabled }) => {
    if (disabled) return <SyncIcon sx={{ fontSize: 100 }} />;
    if (winner === "Você venceu!")
      return <EmojiEventsIcon sx={{ fontSize: 100 }} />;
    if (winner === "Você perdeu!") return <ClearIcon sx={{ fontSize: 100 }} />;
    if (winner === "Empate!") return <Handshake sx={{ fontSize: 100 }} />;
    return null;
  };

  const AttackButtons = ({ setMyAttack, handleAttack, disabled }) => {
    const attackList = [1, 2, 3];
    return attackList.map((attack) => (
      <IconButton
        key={attack}
        onClick={() => {
          setMyAttack(attack);
          handleAttack();
        }}
        sx={{ width: "80px", height: "80px" }}
        disabled={disabled}
      >
        <img
          src={`src/assets/game1/attack${attack}.png`}
          style={{ width: "80px", height: "80px" }}
          alt={`Attack ${attack}`}
        />
      </IconButton>
    ));
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Stack direction="row" fullWidth spacing="auto" mt={2} mx={30}>
          <AttackIcon attack={myAttack} />
          <ResultIcon winner={winner} disabled={disabled} />
          <AttackIcon attack={opponentAttack} />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          {disabled
            ? "Competindo..."
            : myAttack === 0
            ? "Escolha um ataque"
            : winner}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" fullWidth spacing="auto" mt={2} mx={8}>
          <img
            src={sprite}
            style={{ width: "150px", height: "150px" }}
            alt="Sprite"
          />
          <AttackButtons
            setMyAttack={setMyAttack}
            handleAttack={handleAttack}
            disabled={disabled}
          />
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomSprite}.png`}
            style={{ width: "150px", height: "150px" }}
            alt="Random Sprite"
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
