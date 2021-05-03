import { makeStyles } from '@material-ui/core/styles';
import { text, subtext, title } from "../../auxiliar/constants/Fonts";
export default makeStyles((theme) => ({
  Container: {
      padding: "0px",
  },
  Artist: {
    fontFamily: subtext,
  },
  Description: {
    fontFamily: text
  },
  ProductName: {
    fontFamily: title
  }
}));