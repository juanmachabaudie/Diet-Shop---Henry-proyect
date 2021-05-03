import { makeStyles } from '@material-ui/core/styles';

import { Height } from '@material-ui/icons';
import {color4} from '../../../auxiliar/constants/themes/materialUI';


export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    minWidth: "100%",
    
  },
  link: { 
    
    cursor: "pointer",
    fontSize: "small"
  },

  description:{
    display: "flex",
    flexDirection: "column"
  },
  remove: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
  },
  name:{
    
    fontWeight: "bold",
    fontSize: "large"
  },
  container: {
    margin: "10px",
    height:"fit-content",
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgb(224,224,224)",
    minWidth: "fit-content"
  },
  container1: {
    display: "flex",
    height: "fit-content",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "15px",
    
  },
  quantityContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid rgb(224,224,224)",
    padding: "10px"
  },



  cardContent: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  
}));