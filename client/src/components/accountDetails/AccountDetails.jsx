import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(() => ({
    root: {
        width: '80%',
        maxWidth: 360,
        backgroundColor: "rgba(255,255,255,.4)",
    },
    items: {
        marginLeft: "30px",
        width: "80%"
    },
    button: {
        width: "100%",
        background: "transparent",
        border: "none",
        display: "flex",
    }
}));

export default function AccountDetails({ setSelect }) {
    const classes = useStyles();

    const handleClick = (e) => {
        setSelect(e.target.value)
    }

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cuenta" />
                </ListItem>
                <List component="nav" aria-label="secondary">
                    <ListItem button className={classes.items}>
                        <button
                            className={classes.button}
                            value="general"
                            onClick={e => handleClick(e)}
                        >
                            General
                        </button>
                    </ListItem>
                    <ListItem button className={classes.items}>
                        <button
                            className={classes.button}
                            value="email"
                            onClick={e => handleClick(e)}
                        >
                            Email
                        </button>
                    </ListItem>
                    <ListItem button className={classes.items}>
                        <button
                            className={classes.button}
                            value="password"
                            onClick={e => handleClick(e)}
                        >
                            Contraseña
                        </button>
                    </ListItem>
                    <ListItem button className={classes.items}>
                        <button
                            className={classes.button}
                            value="user"
                            onClick={e => handleClick(e)}
                        >
                            Usuario
                        </button>
                    </ListItem>
                </List>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Compras" />
                </ListItem>
                <List component="nav" aria-label="secondary">
                    <ListItem button className={classes.items}>
                        <button
                            className={classes.button}
                            value="pendientes"
                            onClick={e => handleClick(e)}
                        >
                            Pendientes
                        </button>
                    </ListItem>
                    <ListItem button className={classes.items}>
                        <button
                            className={classes.button}
                            value="finalizados"
                            onClick={e => handleClick(e)}
                        >
                            Finalizados
                        </button>
                    </ListItem>
                </List>
            </List>
        </div>
    );
}