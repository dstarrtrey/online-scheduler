import { createMuiTheme } from "@material-ui/core/styles";
export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: "#ffc107",
      contrastText: "#000"
    },
    secondary: {
      main: "#b71c1c",
      contrastText: "#fff"
    }
  }
});