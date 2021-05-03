import { makeStyles, fade } from '@material-ui/core/styles';
import {primaryColor} from '../../auxiliar/constants/themes/materialUI';
import {brand} from '../../auxiliar/constants/Fonts'

const drawerWidth = 0;

export default makeStyles((theme) => ({
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('xs')]: {
      minHeight: "100px"
    }
  },
  appBar: {
    boxShadow: 'none',
    backgroundColor: "black",
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    display: "flex",
  },
  // title: {
  //   flexGrow: 1,
  //   alignItems: 'center',
  //   display: 'flex',
  // },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  Name: {
    display: "none",
    fontFamily: brand, 
    textDecoration: "none",
    [theme.breakpoints.up('sm')]: {
      display: "flex",
    },
    color: "black"
  },
  navBar: {
    backgroundColor: primaryColor,
    [theme.breakpoints.down('xs')]:{ 
      flexWrap: "wrap"
    },
  },
  Button: {
    display: "flex",
    order: "3",
    [theme.breakpoints.down('xs')]:{ 
      order: "1",
    }
  }
}));