import {makeStyles} from '@material-ui/core/styles';
import {input1} from '../../auxiliar/constants/Fonts'

export default makeStyles(() => ({
    Filter: {
        fontFamily: input1,
        maxWidth: "370px", 
        minWidth: "250px", 
        marginTop:"105px", 
        position: "fixed", 
        marginLeft: "-10px"
    }
}))

export const optionsStyles = {
    menuList: () => ({
        position:  "abasolute"
    })
}