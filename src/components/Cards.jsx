/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Avatar, Stack } from "@mui/material";

const Cards = ({ description, title, avatar }) => {
  return (
    <Card
      sx={{
        minWidth: 270,
      }}
    >
      <CardContent>
        <Stack direction="row" spacing={2} mt={1} ml={2}>
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: "#F9E2AF",
            }}
          >
            {description.charAt(0).toUpperCase() || avatar}
          </Avatar>
          <Typography variant="h5">{title}</Typography>
        </Stack>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
