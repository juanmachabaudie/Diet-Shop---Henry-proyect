import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Paper,
  Switch,
  Typography
} from '@material-ui/core';

import {
  AccountCircle
} from '@material-ui/icons';

import Loading from '../../assets/loading.gif';

function AdminPromoter() {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorPresent, setErrorPresent] = useState(false);

  const handleChange = async id => {
    try {
      await axios.post(`http://localhost:3001/auth/promote/${id}`);
      const updatedUsers = await axios.get(`http://localhost:3001/users`);
      setUsers(updatedUsers.data);
    } catch (error) {
      console.error(error);
      setErrorPresent(true);
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(response => {
        console.log(response);
        setUsers(response.data);
        setLoaded(true);
      })
      .catch(error => {
        console.error(error);
        setErrorPresent(true);
      });

    return () => {
      setErrorPresent(false);
      setLoaded(false);
      setUsers([]);
    }
  }, []);

  return (
    <Container style={{ width: "500px" }}>
      <Paper
        elevation={7}
        style={{
          height: "350px",
          backgroundColor: "rgba(255, 255, 255, 0.767)",
          textAlign: (errorPresent ? 'center' : 'inherit')
        }}
      >
      {
        errorPresent ? 
          <Typography 
            style={{ color: 'red' }} 
            variant='h5'
          >
            Error al obtener los usuarios.
          </Typography> 
        : loaded ? 
          <List 
            subheader={
              <ListSubheader>
                Seleccione los usuarios que seran administradores
              </ListSubheader>
            } 
            style={{ overflow: 'auto' }}
          >
            {
              users.map(user => {
                return (
                  <ListItem>
                    <ListItemIcon>
                      <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary={ user.userName } />
                    <ListItemSecondaryAction>
                      <Switch 
                        edge='end'
                        onChange={() => { return handleChange(user.id) }}
                        checked={user.admin}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })
            }
          </List>
          
        : <img 
            style={{ display: "block", margin: "auto" }} 
            src={Loading} 
            alt="Cargando Usuarios"
          />
      }
      </Paper>
    </Container>
    
  );
}

export default AdminPromoter;