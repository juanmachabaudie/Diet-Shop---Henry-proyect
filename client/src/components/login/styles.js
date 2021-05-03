import { makeStyles } from "@material-ui/core";
import {
  formsSubtitle,
  formsTitle,
  input2,
  link2,
} from "../../auxiliar/constants/Fonts";
import {
  color4,
  primaryColor,
} from "../../auxiliar/constants/themes/materialUI";

export default makeStyles((theme) => ({
  DialogContainer: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "80px",
    textAlign: "center",
  },
  DialogContent: {
    minWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: `linear-gradient(to right bottom, ${primaryColor}, ${color4})`,
  },
  Title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  ArrowBack: {
    borderRadius: "50%",
    color: "black",
    width: "50px",
    height: "50px",
    marginBottom: "-60px",
    justifySelf: "flex-start",
  },
  Form: {
    display: "flex",
    flexDirection: "column",
    minWidth: "100%",
  },
  Input: {
    marginBottom: "10px",
    minWidth: "80%",
    borderRadius: 20,
    border: 0,
  },
  Register: {
    display: "flex",
    justifySelf: "flex-end",
    fontFamily: formsTitle,
    justifyContent: "center",
    fontSize: "1.7em",
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
  },
  Line: {
    backgroundColor: theme.palette.grey,
    borderColor: theme.palette.divider,
    width: "80%",
  },
  TextLink: {
    cursor: "pointer",
  },
  Icon: {
    backgroundColor: "white",
    borderRadius: "100%",
  },
  IconsDiv: {
    alignSelf: "center",
  },
  TextInput: {
    fontFamily: input2,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: "50px",
  },
  TextInputLabel: {
    fontFamily: input2,
  },
  Subtitle: {
    fontFamily: formsSubtitle,
  },
  Link2: {
    fontFamily: link2,
    cursor: "pointer",
    fontSize: "small",
  },
}));
