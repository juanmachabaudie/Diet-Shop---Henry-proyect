import { createMuiTheme } from "@material-ui/core";
import { lightGreen, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[700],
    },
    secondary: {
      main: orange[300],
    },
  },
});

export default theme;
