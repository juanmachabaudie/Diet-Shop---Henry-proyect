import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

import {
  AppBar,
  Backdrop,
  Badge, //LLeva un contador con la cantidad de elementos que hay en el carrito
  Button,
  Fade,
  fade,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Modal,
  makeStyles,
} from "@material-ui/core";

import {
  faBars,
  faUser,
  faCartPlus,
  faEllipsisV,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { counter } from "@fortawesome/fontawesome-svg-core";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(3),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "RGBA(255,255,255,0.8)",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: "1rem",
  },
  listItemText: {
    color: "orange",
  },
}));

const NavBar = () => {
  const history = useHistory();
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goToCart = () => {
    history.push("/cart");
    window.scroll(0, 0);
  };

  const showItems = () => {
    let count = 0;
  const cartItem = JSON.parse(localStorage.getItem("cart"))
  for (let item of cartItem){
    count = count + item.quantity;
  }
  return count;
} 



  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <FontAwesomeIcon icon={faCartPlus} />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <FontAwesomeIcon icon={faUser} />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  const mainMenu = (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div>
          <List component="nav">
            <Button href="/products">
              <ListItem button className={classes.paper}>
                <ListItemIcon>
                  <FontAwesomeIcon color="green" icon={faSeedling} />
                </ListItemIcon>
                <ListItemText
                  primary="Productos"
                  className={classes.listItemText}
                />
              </ListItem>
            </Button>
            <Button>
            <ListItem button className={classes.paper}>
              <ListItemIcon>
                <FontAwesomeIcon color="green" icon={faSeedling} />
              </ListItemIcon>
              <ListItemText
                primary="Categorias"
                className={classes.listItemText}
              />
            </ListItem>
            </Button>
            <Button>
            <ListItem button className={classes.paper}>
              <ListItemIcon>
                <FontAwesomeIcon color="green" icon={faSeedling} />
              </ListItemIcon>
              <ListItemText
                primary="Contacto"
                className={classes.listItemText}
              />
            </ListItem>
            </Button>
            <Button>
            <ListItem button className={classes.paper}>
              <ListItemIcon>
                <FontAwesomeIcon color="green" icon={faSeedling} />
              </ListItemIcon>
              <ListItemText
                primary="Nosotros"
                className={classes.listItemText}
              />
            </ListItem>
            </Button>
          </List>
        </div>
      </Fade>
    </Modal>
  );

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpen}
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
          <IconButton color="inherit">
            <Link to="/">
              <Typography className={classes.grow} variant="h6">
                HEALTHY-HENRY
              </Typography>
            </Link>
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.search}>
            <SearchBar />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit" aria-label="agregar" onClick={goToCart}>
              <Badge badgeContent={showItems()} color="secondary">
                <FontAwesomeIcon icon={faCartPlus} />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <FontAwesomeIcon icon={faUser} />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <FontAwesomeIcon icon={faEllipsisV} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {mainMenu}
      {renderMobileMenu}
      <div className={classes.offset}></div>
    </div>
  );
};

export default NavBar;
