/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Avatar, Stack } from "@mui/material";

const Cards = ({ description, title, points, avatar }) => {
  return (
    <Card
      sx={{
        width: 270,
      }}
    >
      <CardContent
        sx={{
          padding: 1,
        }}
      >
        <Stack direction="row" spacing={2} mt={1} ml={2}>
          {avatar ? (
            <img src={avatar} alt="avatar" style={{ width: 50, height: 50 }} />
          ) : (
            <Avatar
              variant="rounded"
              sx={{
                backgroundColor: "#F9E2AF",
                color: "#000",
              }}
            >
              {description.charAt(0).toUpperCase() || points}
            </Avatar>
          )}
          <Typography variant="h5">{title}</Typography>
        </Stack>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
