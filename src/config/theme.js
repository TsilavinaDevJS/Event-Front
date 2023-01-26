import { createTheme } from "@mui/material";

// #FA03B5
const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#05055e",
      contrastText: "#FFFFFE",
    },
    secondary: {
      main: "#17FA03",
    },
    background: {
      default: "linear-gradient(45deg, #36d1dc 30%, #5b86e5 90%)",
    },
    divider: "rgba(230,221,221,0.12)",
  },
  typography: {
    fontWeightMedium: 500,
    fontWeightBold: 800,
  },
  overrides: {
    MuiButton: {
      root: {
        background: "linear-gradient(45deg,  #B712A5 30%, #7181F7 90%)",
        border: 0,
        borderRadius: 30,
        boxShadow: "0 3px 5px 2px #05055e",
        color: "black",
        height: 48,
        padding: "20px 35px",
      },
    },
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: 40,
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "inherit",
    },
    MuiTooltip: {
      arrow: true,
    },
  },
};

export const theme = createTheme(themeOptions);
