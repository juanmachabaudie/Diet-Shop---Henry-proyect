import { makeStyles } from '@material-ui/core/styles';
import { text, subtext, title } from "../../auxiliar/constants/Fonts";
export default makeStyles((theme) => ({
    
    Title:{
        marginBottom:"1vh",
        fontSize:"large",
        fontWeight:"bold"
    }, 
    
  reviewForm: {
      backgroundColor: "white",
      variant: "contained",
      display: "flex",
      flexDirection: "column",
      marginTop: "1vh"
    },
   ratingAverage:{
        marginTop: "0",
        marginBottom: "1vh",
        fontSize:"large",
        fontWeight:"bold"
    },
    
    reviewButton:{
        margin: "1vh 1vh 1vh 0",
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "20px"
    },
    
    container:{
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        width: "100%",
        
    },
    reviewCard:{
        variant: "contained",
        display: "flex",
        flexDirection: "column",
        margin: "1vh 0 1vh 0",
        width: "90%"
    },
    reviewHeader:{
        display: "flex",
        displayDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "0"
    },
    reviewInfoContainer:{
        display: "flex",
        displayDirection: "row",
        justifyContent: "space-between",
        marginTop: "0px",
        marginLeft: "0px"
    },
    reviewInfo:{
        display: "flex",
        displayDirection: "row",
        justifyContent: "space-around",
        marginTop: "0px",
        padding: "0 0 1vh 0"
    },
    viewMoreButton: {
        border: "none",
        backgroundColor: "white",
        marginTop: "1vh"
    },
    Message:{
        border: "1px solid grey",
        width: "auto",
        margin: "1vh",
        padding: "1vh"
    },
    names:{
        paddingRight: "1vh",
        minWidth:"fit-content",
        font: "Algerian",
        fontSize: "small",
        fontWeight: "bold" 
        
    },
    reviewFormButton:{
        backgroundColor: "white",
    },
}));