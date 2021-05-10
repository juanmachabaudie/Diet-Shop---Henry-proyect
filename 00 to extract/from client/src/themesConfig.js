import { lightGreen } from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
palette: {
    primary: {
       main: lightGreen[600]
    },
    secondary: {
        main: lightGreen[900]
    }
}
})

export default theme;