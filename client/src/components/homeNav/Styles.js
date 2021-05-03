import {makeStyles} from '@material-ui/core';
import {primaryColor} from '../../auxiliar/constants/themes/materialUI';

export default makeStyles ((theme) => ({
    Container: {        
        display: "flex",
        backgroundColor: primaryColor,
        minHeight: "2vh",
        minWidth: "100vw",
        clipPath: "polygon(0 0%, 100% 0, 100% 0%, 100% 60%, 53% 100%, 20% 100%, 0 100%, 0% 20%)",
    }
}))