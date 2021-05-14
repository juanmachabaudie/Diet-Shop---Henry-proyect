import React from 'react'
import { Button, Container, IconButton, TextField, Typography } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './itemCart.css'
import {makeStyles} from '@material-ui/core/styles'

//estilos
const useStyle = makeStyles({
    item: {
      marginLeft: '150px' ,
      display:'flex',
      justifyContent: 'space-between' ,
      marginTop: '20px',
      alignItems: 'center'

    }
})   

//function
const CartItem = ({product}) => {
    const classes = useStyle()

function handleDeleteProduct() {
    //aca va la accion que va a manejar la eliminacion del producto del carrito
}

    return (
        <Container className={classes.item}>
            <img src={product.img} alt={product.name} />
            <Typography variant='span'>{product.name}</Typography>
            <Typography variant='span'>${product.price}</Typography>
            <TextField
            type='number'
            value={product.quantity}
            />
            <Button variant='contained' onClick={handleDeleteProduct} >
                <IconButton>
                    <DeleteForeverIcon/> 
                </IconButton>
            </Button>

        </Container>
    )
}

export default CartItem
