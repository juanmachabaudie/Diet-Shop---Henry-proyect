import React, {useState} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons';
import { useHistory } from 'react-router';

const DropMenu = ({setThemes}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{paddingTop: "20px"}}>
        <MenuIcon/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{marginTop: "40px"}} 
      >
        <MenuItem onClick={()=>{handleClose(); history.push("/dashboard")}}>Dashboard</MenuItem>
        <MenuItem onClick={()=>{handleClose(); history.push("/products")}}>Products</MenuItem>
      </Menu>
    </div>
  );
}

export default DropMenu;