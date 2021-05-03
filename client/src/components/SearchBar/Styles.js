import {makeStyles} from '@material-ui/core/styles' 
import { input2 } from '../../auxiliar/constants/Fonts'

export default makeStyles((theme) => ({
    SearchBar: {
        display: "flex",
        minWidth: "200px",
        [theme.breakpoints.down('xs')]:{ 
            order: "2",
        }
    },
    TextInput: {
        fontFamily: input2
    }
}))