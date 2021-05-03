import {makeStyles} from '@material-ui/core';
import { formsTitle, input2 } from '../../auxiliar/constants/Fonts';
import {primaryColor, color4} from '../../auxiliar/constants/themes/materialUI';

export default makeStyles ((theme) => ({

    DialogContainer: {
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        borderRadius: "80px"
    },
    DialogContent: {
        minWidth: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: `linear-gradient(to right bottom, ${primaryColor}, ${color4})`
    },
    Title: {
        display: "flex",
        flexDirection: "row"
    },
    ArrowBack: {
        borderRadius: "50%",
        color: "black",
        width: "50px", 
        height: "50px",
        marginBottom: "-60px"
    },
    Form: {
        display: "flex",
        flexDirection: "column",
        minWidth: "100%"
    },
    Input: {
        marginBottom: "10px",
        minWidth: "80%",
        fontFamily: "Helvetica",
        borderRadius: 20,
        border: 0,
    },
    Register: {
        display: "flex",
        justifyContent: "center",
        fontFamily: formsTitle,
        fontSize: "1.7em"
    },
    Button: {
        background: "lightblue",
        borderRadius: "50%",
        width: "50px", 
        height: "50px",
        display: "flex",
        alignSelf: "center",
        marginTop: "20px",
        marginBottom: "5px",
        "&:hover": {
            background: "black"
        }
    },
    InputText: {
        fontFamily: input2,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: "50px"
    },
    InputTextLabel: {
        fontFamily: input2,
    },
}))