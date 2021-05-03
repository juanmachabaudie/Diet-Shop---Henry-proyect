import React, { useState, useContext, useEffect } from 'react';
import { Menu } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import PopUpsContext from '../../context/PopUps/PopUpsContext';
import { useDispatch, useSelector } from 'react-redux';
import { authenticatedUser } from '../../redux/actions';
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';


const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { setLogin } = useContext(PopUpsContext);
  const user = useSelector(state => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  function handleAccount() {
    history.push("/account");
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    const cookies = new Cookies();
    cookies.remove("jwt");
    cookies.remove("userId");
    dispatch(authenticatedUser({ id: "GUEST" }))
  }

  const menuItems = () => {
    if (user.id === "GUEST") {
      return <MenuItem onClick={() => { handleClose(); setLogin(true) }} >Entrar/Registrarse</MenuItem>
    }
    return (
      [
        <MenuItem key="user" onClick={handleAccount} >Cuenta</MenuItem>,
        <MenuItem key="logOut" onClick={logOut} >Salir</MenuItem>
      ]
    )
  }

  return (
    <div style={{ alignSelf: "center" }}>
      <IconButton aria-controls="simple-menu" aria-label='account settings' aria-haspopup="true" onClick={handleClick}>
        <AccountCircle style={{ fontSize: "31px" }} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ marginTop: "40px" }}
      >
        {menuItems()}
      </Menu>
    </div>
  );
}

export default UserMenu;