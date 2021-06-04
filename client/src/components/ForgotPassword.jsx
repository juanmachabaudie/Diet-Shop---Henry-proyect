import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { CardContent, TextField, Button } from '@material-ui/core';
import { makeReset } from '../redux/actions/userActions.js';

const ForgotPassword = () => {

  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setEmail({
      ...email,
      [event.target.name]: event.target.value,
    });
  };

const sendReset = () => {
  dispatch(makeReset(email));
} 

  console.log(email)

    return (
        <CardContent>
          <form className={''}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              onChange={handleInputChange}
            />
          </form>
          <Button variant='contained' color='primary' onClick={sendReset}>
              Recuperar Contraseña
          </Button>
        </CardContent>
    )
}

export default ForgotPassword;