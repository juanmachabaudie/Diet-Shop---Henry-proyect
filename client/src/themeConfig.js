import { createMuiTheme } from "@material-ui/core";
import { lightGreen, teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[400],
    },
    secondary: {
      main: teal[100],
    },
  },
});

export default theme;
