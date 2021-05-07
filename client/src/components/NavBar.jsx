import React from 'react'
// import {NavLink} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Button, IconButton, MenuItem } from '@material-ui/core'
import SearchBar from './SearchBar'


const useStyles = makeStyles(theme => ({
offset : theme.mixins.toolbar,
tittle: {
    flexGrow: 1
}
}))



const NavBar = () => {
    const classes = useStyles()
    return (
<div>
    <AppBar position="fixed" color="primary">
      <Toolbar>
          <IconButton aria-label="" className={classes.menuButton} color='inherit'>
           <MenuItem > Menu </MenuItem>
          </IconButton>
        <Typography variant="h6" className={classes.tittle}>
          Diet Shop 
        </Typography>
        <Button variant="text" color="default">
          <SearchBar/>
        </Button>
        <Button variant="h6" color="default">
          Log In
        </Button>
        <Button variant="h6" color="default">
          Sig In
        </Button>
        <Button variant="h6" color="default">
          Contact
        </Button>
        <Button variant="h6" color="default">
          Catalogue
        </Button>
        <Button variant="h6" color="default">
          About Us
        </Button>
      </Toolbar>
    </AppBar>
    <div className={classes.offset}></div>
</div>
    )
}


export default NavBar;