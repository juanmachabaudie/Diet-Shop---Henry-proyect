
import React,{useState} from 'react';
import { Button, Container, IconButton, TextField, Typography } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './itemCart.css'
import {makeStyles} from '@material-ui/core/styles'
import {useDispatch} from 'react-redux'
import {removeFromCart,changeProductQuantity} from '../redux/actions/cartActions'

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
const dispatch = useDispatch()
const [productQuantity, setProductQuantity]= useState(product.qty)

const handleChangeQuantity = e => {
    const {value} = e.target
    setProductQuantity(value)
    dispatch(changeProductQuantity(product.uuid, product.qty))
}

const removeProductFromCart = () => dispatch(removeFromCart(product.uuid))

    return (
        <Container className={classes.item}>
            <img src={product.image} alt={product.name} />
            <Typography variant='span'>{product.name}</Typography>
            <Typography variant='span'>${product.price}</Typography>
            <TextField
            type='number'
            label='cantidad'
            value={productQuantity}
            onChange={handleChangeQuantity}
            />
            <Button variant='contained' onClick={removeProductFromCart} >
                <IconButton>
                    <DeleteForeverIcon/> 
                </IconButton>
            </Button>

        </Container>
    )
}

export default CartItem
