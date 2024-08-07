import { ThemeProvider, createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4A249D",
      background: "#F6F5F5",
      dark: "#141B34",
    },
    secondary: {
      main: "#009FBD",
      light: "#F9E2AF",
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

const GlobalTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

GlobalTheme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalTheme;
