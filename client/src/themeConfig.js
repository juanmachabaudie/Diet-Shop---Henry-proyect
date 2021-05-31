import { createMuiTheme } from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[300],
    },
  },
});

export default theme;
