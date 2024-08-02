/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Avatar, Stack } from "@mui/material";

const Cards = ({ description, title }) => {
  return (
    <Card
      sx={{
        minWidth: 270,
      }}
    >
      <CardContent>
        <Stack direction="row" spacing={2} mt={2} ml={2}>
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: "#F9E2AF",
            }}
          >
            {description.charAt(0).toUpperCase()}
          </Avatar>
          <Typography variant="h5">{title}</Typography>
        </Stack>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
