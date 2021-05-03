import { makeStyles } from '@material-ui/core/styles';
import {secondaryColor} from '../../auxiliar/constants/themes/materialUI';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight: "100vh"
  },
  root: {
    flexGrow: 1,
  },
}));