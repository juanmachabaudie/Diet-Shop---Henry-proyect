
import React from 'react'
import { Button, Container, IconButton, TextField, Typography } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './itemCart.css'
import {makeStyles} from '@material-ui/core/styles'


const useStyle = makeStyles({
    item: {
      marginLeft: '150px' ,
      display:'flex',
      justifyContent: 'space-between' ,
      marginTop: '20px',
      alignItems: 'center'

    }
})   
const CartItem = ({product}) => {
    const classes = useStyle()

    return (
        <Container className={classes.item}>
            <img src={product.img} alt={product.name} />
            <Typography variant='span'>{product.name}</Typography>
            <Typography variant='span'>${product.price}</Typography>
            <TextField
            type='number'
            value={product.quantity}
            />
            <Button variant='contained' >
                <IconButton>
                    <DeleteForeverIcon/> 
                </IconButton>
            </Button>

        </Container>
    )
}

export default CartItem
