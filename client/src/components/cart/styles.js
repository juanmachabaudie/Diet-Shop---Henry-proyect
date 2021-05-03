import {makeStyles} from '@material-ui/core';

export default makeStyles ((theme) => ({
    DialogContainer: {
        display: "flex",
        justifyContent: "flex-end",
        minHeight: "100vh",
        boxSizing: "border-box",
        fontFamily: "Oswald, sans-serif"
    },

    DialogContent: {
        display: "flex",
        flexDirection: "column",
        minHeight: "80vh",        
    },

    PaperProps: {
        minWidth: "70%", 
        minHeight: "100%",
        borderBottomLeftRadius: "15px",
        borderTopLeftRadius: "15px",
        margin: 0,
        overflow: "hidden"
    },

    cartHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: "100%",
    },
    
    hr: {
        display: "flex",
        width: "100%",
        marginBottom: "2vh"
    },

    headerTitle: {
        fontWeight: "bold",
        marginRight: 0,
    },

    headerXButton: {
        justifyContent: "flex-end",
        fontWeight: "bold",
        color: "black",
        height: "25px"
    },

    cartBody: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: "20vh"
    },

    cartFooter: {
        position: "absolute",
        zIndex: 999,
        bottom: 0,
        left: 0,
        width: "95%",
        padding: "0 0px 24px 20px",
        boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.2)",
        backgroundColor: "white",
    },

    footerPrice: {
      paddingTop: "15px",
      paddingBottom: "15px",
      width: "100%",
      letterSpacing: "0.06em",
      boxSizing: "border-box",
    },

    price: {
        float: "right",
        marginRight: "2vh"
    },

    footerButtonDiv: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        
    }, 

    proceedButton: {
        backgroundColor: "black",
        color: "white",
        maxWidth: "70%"
    }
}))