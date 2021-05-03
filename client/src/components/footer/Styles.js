import {makeStyles} from '@material-ui/core';
import {primaryColor} from '../../auxiliar/constants/themes/materialUI';

export default makeStyles ((theme) => ({
    Container: {
        position: "absolute",
        display: "flex",
        alignSelf: "flex-end",
        backgroundColor: primaryColor,
        minHeight: "200px",
        height: "calc(100%/3)",
        minWidth: "100%"
    }
}))