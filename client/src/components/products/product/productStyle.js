import { makeStyles } from "@material-ui/core/styles";
import { color4 } from "../../../auxiliar/constants/themes/materialUI";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    minWidth: "100%",
    "&:hover": {
      boxShadow: `8px 8px 8px 4px ${color4}`,
      cursor: "pointer",
    },
    borderRadius: "20px",
    transition: "box-shadow 0.2s"
  },
  container: {
    borderRadius: "20px"
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",    
  },
  cardContent: {
    display: "flex",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  price: {
    position: "absolute",
    minWidth: "15%",
    backgroundColor: "rgba(0,0,0,0.6)",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.5)",
    },
    borderRadius: "20px 0px 20px 0px"
  },
  priceButton: {
    color: "white",
    marginRight: "10%",
    "&:hover": {
      cursor: "pointer"
    }
  },
}));
